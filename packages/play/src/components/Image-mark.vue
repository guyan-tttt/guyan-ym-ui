<template>
    <div class="image-mark"
      :style="{
        width: props.width + 'px'
      }"
    >
      <div class="image-mark__header">
        <div class="image-mark__utils">
          <div class="image-mark__utils-item" :class="{active: isSelecting}" @click="changeSelect">
            <ym-icon icon="arrow-pointer" size="xl" ></ym-icon>
          </div>
          <div class="image-mark__utils-item" :class="{active: shapeType === item.type}" size="xl" v-for="item in tools" :key="item.type" @click="modeChange(item.type)">
            <ym-icon  :icon="item.icon" ></ym-icon>
          </div>
        </div>
        <div class="image-mark__operation">
          <ym-icon :icon="!isHidden ? 'eye' : 'eye-slash'"  @click="hiddenShape"></ym-icon>
          <ym-icon icon="download"  @click="exposeData"></ym-icon>
          <ym-icon icon="trash"  @click="clearCanvas"></ym-icon>
          <ym-icon icon="trash-can-arrow-up" @click="resetCanvas"></ym-icon>
        </div>
        <!-- {{ shapeType || '选择状态' }} -->
      </div>
      <div class="image-mark__content" >
        <ym-context-menu customize>
          <div id="canvas-box" :style="{width: props.width}">
              <canvas :width="props.width" id="label-canvas"  />
          </div>
          <template #menu>
            <div class="image-mark__menu">
              <div class="image-mark__menu-item" @click="deleteShape">
                <ym-icon icon="trash"></ym-icon>删除选中图形
              </div>
            </div>
          </template>
        </ym-context-menu>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref , onMounted , nextTick, watch, defineComponent, computed } from 'vue'
import {  Canvas, Rect, FabricImage, Path, Line, Circle, FabricObject} from 'fabric';
import { v4 as uuidv4 } from 'uuid';  

// 绘图类型枚举值，暂时只支持矩形框、直线、虚线、点、图片、圆形五种类型。
type EditorType = "rect" | 'line' | 'dot' | 'image' | 'circle' | 'dash';

enum ShapeType {
RECT = 'rect',
LINE = 'line',
DOT = 'dot',
IMAGE = 'image',
CIRCLE = 'circle',
DASH = 'dash'
}

// 绘图对象类型，暂时只支持矩形框、直线、虚线、点五种类型。
interface ShapeObj {
type: EditorType; // 绘图类型
id?: string; // 绘图唯一标识
data: {
    position: [number,number][] | [number,number]; // 绘图位置
    color: string; // 绘图颜色
    width: number; // 绘图宽度
    height: number; // 绘图高度
    strokeWidth: number; // 绘图边框宽度
    strokeDashArray: number[]; // 虚线样式
},
shape: FabricObject; // 绘图对象
}
// 组件属性对象
interface ImageEditorProps {
src: string; // 图片地址
width?: number; // 图片宽度
utils?: EditorType[];  // 绘图工具
hidden?: boolean; // 是否隐藏绘图对象
clear?: boolean; // 是否显示清空画布按钮
shapes?: ShapeObj[]; // 绘图对象列表
reset?: boolean; // 是否显示恢复画布按钮
maxWidth?: number; // 画布最大宽度
maxHeight?: number; // 画布最大高度
modelValue?: FabricObject[];
}

// 组件事件定义
interface ImageEditorEmits {
(e: 'mouse:down', event: any): void;
(e: 'mouse:move', event: any): void;
(e: 'mouse:up', event: any): void;
(e: 'object:moving'): void;
(e: 'object:modified'): void;
(e: 'object:scaling'): void;
(e: 'object:rotating'): void;
(e: 'selection:created'): void;
(e: 'selection:updated'): void;
(e: 'selection:cleared'): void;
(e: 'hidden', value: boolean): void;
(e: 'clear', value: boolean): void;
(e: 'reset', value: boolean): void;
(e: 'update:modelValue', shapes: FabricObject[]): void;
}
// 组件导出类型
interface ImageEditorInstance  {
fabricObj: Canvas;
shapeObjList: FabricObject[];
update: (shapes: ShapeObj[]) => void;
clear: () => void;
hidden: (value: boolean) => void;
exportData: () => void;
}

const props = withDefaults(defineProps<ImageEditorProps>(), {
width: 600,
utils: () => ['rect', 'line', 'dash', 'dot'],
hidden: true,
clear: true,
reset: true,
shapes: () => [],
maxWidth: 800,
maxHeight: 800,
})

const emits = defineEmits<ImageEditorEmits>()



// fabric画布对象
const fabricObj = ref<Canvas>()

// 绘图对象列表
const maxWidth = ref(props.maxWidth || 600);
const maxHeight = ref(props.maxHeight || 600);


// 当前选中的绘图类型
const shapeType = ref<EditorType | null>()
// 是否正在绘制
const isDrawing = ref(false);

// 当前的绘图对象
const shapeObj = ref<FabricObject>()

// 绘图对象列表
const shapeObjList = ref<FabricObject[]>([])

// 绘图类型映射表
const shapeMap = {
rect: Rect,
line: Line,
dot: Circle,
image: FabricImage,
circle: Circle
}

// 工具图标映射表
const toolIcon = {
rect: 'vector-square',
line: 'minus',
dash:'grip-lines',
dot: 'circle-dot'
}

// 工具图标
const tools = computed(() => {
return props.utils.map(item => {
    return {
    type: item as EditorType,
    // @ts-expect-error
    icon: toolIcon[item]
    }
})
})

// 绘图对象选中状态
const isSelecting = ref(true)

// 是否是隐藏绘图对象
const isHidden = ref(false)

// 是否需要清空
const isClear= ref(false)

// 绘图对象位置信息
const position = ref({
start: {
    x: 0,
    y: 0
},
end: {
    x: 0,
    y: 0
}
})

// 初始化画布对象
const fabricCanvas = async() => {
// 如果画布已经存在，清空画布重新绘制
if(fabricObj.value){ 
    fabricObj.value.clear()
} else {
    fabricObj.value = new Canvas('label-canvas',{
    // 此处设置画布的初始属性
    uniformScaling: false, // 等比例缩放
    enableRetinaScaling: false, 
    selection: false,
    })
}

// 初始化绘图对象
const img = await FabricImage.fromURL(props.src);

const scale = Math.max(
    maxWidth.value / img.width, // 计算宽度缩放比例
    maxHeight.value / img.height, // 计算高度缩放比例
);
// 计算缩放后的尺寸
const scaledWidth = img.width * scale;
const scaledHeight = img.height * scale;
img.set({
    selectable: false, // 不可选中
    hasControls: false, // 无控制点
    hasRotatingPoint: true, // 允许旋转
    lockRotation: false, // 不锁定旋转
    lockScalingX: false, // 不锁定水平缩放
    lockScalingY: false, // 不锁定垂直缩放
    scaleX: (scaledWidth / img.width), // 设置水平缩放比例
    scaleY: (scaledHeight / img.height), // 设置垂直缩放比例
    center: {
        x: fabricObj.value!.width / 2,
        y: fabricObj.value!.height / 2,
        originX: 'center',
        originY: 'center'
    }
    })
fabricObj.value.setWidth(props.width);
fabricObj.value.setHeight(scaledHeight);
fabricObj.value.add(img);
fabricObj.value.centerObject(img);
fabricObj.value.renderAll();

// 监听绘图对象
watchCanvasEvents()
}

// 监听画布事件
const watchCanvasEvents = () => {
fabricObj.value?.on({
    "mouse:down": handleMouseDown,
    "mouse:move": handleMouseMove,
    "mouse:up": handleMouseUp,
    "object:moving": handleObjectMoving,
    "object:modified": handleObjectModified,
    "object:scaling": handleObjectScaling,
    "object:rotating": handleObjectRotating,
    "selection:created": handleSelectionCreated,
    "selection:updated": handleSelectionUpdated,
    "selection:cleared": handleSelectionClear
})
}

const handleObjectMoving = () => {
console.log('对象移动');
emits('object:moving');
}

const handleObjectModified = () => {
console.log('对象修改');
emits('object:modified');
}

const handleObjectScaling = () => {
console.log('对象缩放');
emits('object:scaling');
}

const handleObjectRotating = () => {
console.log('对象旋转');
emits('object:rotating');
}

const handleSelectionCreated = () => {
console.log('选择创建');
emits('selection:created');
}

const handleSelectionUpdated = () => {
console.log('选择更新');
emits('selection:updated');

}

// 工具切换
const modeChange = (val: EditorType) => {
shapeType.value = val
isSelecting.value = false
}

// 切换选择工具
const changeSelect = () => {
isSelecting.value  = true
shapeType.value = null
fabricObj.value!.selection = true
}

// 鼠标按下事件
const handleMouseDown = (e:any) => {
if(isSelecting .value) return
if(fabricObj.value?.selection) return
if(isDrawing.value) return;
const { x, y } = e.absolutePointer
position.value.start = {
    x,
    y
}
position.value.end = {
    x,
    y
}
isDrawing.value = true;
if(shapeType.value === ShapeType.LINE) {
    shapeObj.value = createLine({
    x1: position.value.start.x,
    y1: position.value.start.y,
    x2: position.value.end.x,
    y2: position.value.end.y,
    }, 'red')
    shapeObj.value.type = ShapeType.LINE
} else if(shapeType.value === ShapeType.RECT) {
    shapeObj.value = createRectangle({
    x1: position.value.start.x,
    y1: position.value.start.y,
    x2: position.value.end.x,
    y2: position.value.end.y,
    }, 'red')
    shapeObj.value.type = ShapeType.RECT
} else  if(shapeType.value === ShapeType.DOT) {
    shapeObj.value = createDot({
    x: e.e.offsetX,
    y: e.e.offsetY,
    }, 'red')
    shapeObj.value.type = ShapeType.DOT
} else if(shapeType.value === ShapeType.DASH) {
    shapeObj.value = createLine({
    x1: position.value.start.x,
    y1: position.value.start.y,
    x2: e.e.offsetX,
    y2: e.e.offsetY,
    }, 'red', [5,5])
    shapeObj.value.type = ShapeType.DASH
}

fabricObj.value!.add(shapeObj.value!);
fabricObj.value!.renderAll();
}
// 鼠标移动事件
const handleMouseMove = (e:any) => {

if(isSelecting .value) return
if(fabricObj.value?.selection) return
if (!isDrawing.value) return;
const { x, y } = e.absolutePointer
position.value.end = {
    x,
    y
}
if(shapeType.value === ShapeType.LINE || shapeType.value === ShapeType.DASH) {
    updateLines({
    x1: position.value.start.x,
    y1: position.value.start.y,
    x2: e.e.offsetX,
    y2: e.e.offsetY,
    },shapeObj.value as Line)
} else if(shapeType.value === ShapeType.RECT) {
    updateRectangles({
    x1: position.value.start.x,
    y1: position.value.start.y,
    x2: e.e.offsetX,
    y2: e.e.offsetY,
    },shapeObj.value as Rect)
} else if(shapeType.value === ShapeType.DOT) {
    updateDot({
    x: e.e.offsetX,
    y: e.e.offsetY,
    },shapeObj.value as Circle)
} 

}
// 鼠标抬起事件
const handleMouseUp = () => {
if(isSelecting .value) return
if(isClear.value) return
selectShape(fabricObj.value!,shapeObj.value!, true)
}

// 选中取消
const handleSelectionClear  = () => {
if(isSelecting .value) return
    
    isClear.value = true;
    selectShape(fabricObj.value!,shapeObj.value!,false)
    shapeObjList.value.push(shapeObj.value!)
    setTimeout(() => {
    isClear.value = false;
    isDrawing.value = false;
    },100)
}

/**
 * 创建一个矩形对象
 *
 * @param rectangleCoords 矩形的四个顶点坐标对象，包含 x1, y1, x2, y2 属性
 * @param borderColor 矩形的边框颜色
 * @returns 返回创建好的矩形对象
 */
function createRectangle(rectangleCoords: {x1: number, y1: number,x2: number, y2: number}, borderColor: string) {
const {x1, y1, x2, y2} = rectangleCoords; // 提取矩形的四个顶点坐标

// 创建矩形对象
return new Rect({
    left: x1, // 左上角 x 坐标
    top: y1, // 左上角 y 坐标
    width: x2 - x1, // 宽度
    height:y2 - y1, // 高度
    stroke: borderColor, // 边框颜色
    strokeWidth: 2, // 边框宽度
    opacity: 1, // 透明度
    selectable: false, // 不可选中
    evented: false, // 事件不可用
    fill: 'transparent', // 填充颜色
});
}

/**
 * 更新矩形的位置和大小
 *
 * @param rectangleCoords 矩形的四个顶点坐标对象，包含x1, y1, x2, y2属性
 * @param rect 矩形对象，包含set方法用于更新矩形的属性
 */
function updateRectangles(rectangleCoords: {x1: number, y1: number,x2: number, y2: number},rect: Rect) {
const {x1, y1, x2, y2} = rectangleCoords; // 提取矩形的四个顶点坐标
rect.set({
    left: Math.min(x1,x2), // 左上角 x 坐标
    top: Math.min(y1,y2), // 左上角 y 坐标
    width: Math.abs((x2 - x1)), // 宽度
    height: Math.abs((y2 - y1)), // 高度
})
fabricObj.value?.renderAll();
}


/**
 * 创建一条直线
 *
 * @param lineCoords 直线的坐标对象，包含x1, y1, x2, y2属性
 * @param borderColor 直线的边框颜色
 * @param strokeDashArray 可选的虚线样式数组
 * @returns 返回创建的直线对象
 */
function createLine(lineCoords:{x1: number, y1: number,x2: number, y2: number}, borderColor: string,strokeDashArray?: number[]) {
const {x1, y1, x2, y2} = lineCoords; // 提取矩形的四个顶点坐标
// 创建矩形对象
return new Line([x1, y1, x2, y2], {
    stroke: borderColor, // 边框颜色
    strokeWidth: 2, // 边框宽度
    opacity: 1, // 透明度
    selectable: false, // 不可选中
    evented: false, // 事件不可用
    fill: 'transparent', // 填充颜色
    strokeDashArray: strokeDashArray || [], // 设置虚线样式
});
}

/**
 * 更新线条的属性
 *
 * @param lineCoords 包含线条起点和终点的坐标的对象
 * @param line 需要更新的线条对象
 */
function updateLines(lineCoords:{x1: number, y1: number,x2: number, y2: number},line: Line) {
const {x1, y1, x2, y2} = lineCoords; // 提取矩形的四个顶点坐标
line.set({
    x2: x2 ,
    y2: y2 ,
})
fabricObj.value?.renderAll();
}

/**
 * 创建一个圆形点
 *
 * @param dotCoords 点的坐标，包含x和y属性
 * @param color 点的颜色
 * @returns 返回一个Circle对象，表示创建的圆形点
 */
function createDot(dotCoords: {x: number, y : number}, color: string) {
const { x, y } = dotCoords; // 提取点的坐标
return new Circle({
    left: x ,
    top: y ,
    radius: 4, // 点的半径，可以根据需要调整
    fill: color,
    stroke: color,
    strokeWidth: 1,
    opacity: 1,
    selectable: false,
    evented: false,
});
}

/**
 * 更新指定点的位置
 *
 * @param dotCoords 点的坐标对象，包含 x 和 y 属性
 * @param dot 需要更新位置的圆形对象
 */
function updateDot(dotCoords: { x: number, y: number}, dot: Circle){
const { x, y } = dotCoords; // 提取点的坐标
dot.set({
    left: x ,
    top: y ,
})
fabricObj.value?.renderAll();
}

/**
 * 选择或取消选择画布上的形状
 *
 * @param canvas 画布对象
 * @param shape 待选择的形状对象
 * @param isClear 是否取消选择。默认为false，即选择形状；为true时取消选择当前形状
 */
function selectShape(canvas: Canvas,shape: FabricObject, isClear:boolean = false) {
canvas.selection = isClear
shape.set({
    selectable: isClear,
    evented: isClear,
})
if(!isClear) {
    fabricObj.value?.discardActiveObject();
} else {
    fabricObj.value?.setActiveObject(shape);
}
fabricObj.value?.renderAll();
}


onMounted(() => {
nextTick(() => {
    fabricCanvas()
})

})

// 监听isSelecting的变化，根据值更新画布的选择状态和形状的selectable属性
watch(() => isSelecting.value, (newValue) => {
if(newValue) {
    fabricObj.value!.selection = true;
    shapeObjList.value.forEach(item => {
    if(!item) return
    item.set({
        selectable: true,
        evented: true,
    })
    })
} else{
    
    fabricObj.value!.selection = false;
    fabricObj.value?.discardActiveObject();
    shapeObjList.value.forEach(item => {
    if(!item) return
    item.set({
        selectable: false,
        evented: false,
    })
    })
}
})

// 定义一个对象，用于存储fabric对象的引用
const fabricCanvasList = ref<FabricObject[]>([])

// 导出画布数据，并将其存储在fabricCanvasList对象中
const exposeData = () => {
fabricCanvasList.value = fabricObj.value?.toJSON().objects;
emits('update:modelValue', shapeObjList.value as any[])

}
/**
 * 清除画布中的所有非图像对象，并清空形状对象列表
 */
const clearCanvas = () => {
fabricObj.value?.getObjects().forEach(obj => {
    console.log(obj.type);
    
if (obj.type !== 'image') {
    fabricObj.value?.remove(obj);
    }
});
fabricObj.value?.renderAll();
shapeObjList.value = [];
}

/**
 * 重置画布
 *
 * 遍历 fabricCanvasList 数组，根据 item 类型创建对应的形状对象，并将其添加到 shapeObjList 数组中，
 * 然后将形状对象添加到 fabricObj 对象的画布上，并设置其不可选择和不可事件化，最后重新渲染画布。
 *
 * @returns 无返回值
 */
const resetCanvas = async() =>{
for(let item of fabricCanvasList.value as any) {
    if(item.type === 'Image') continue;
    // @ts-expect-error
    const ClassObj = shapeMap[item.type.toLowerCase()]
    const data = await ClassObj.fromObject(item);
    shapeObjList.value.push(data);
    data.set({
    selectable: false,
    evented: false,
    })
    fabricObj.value?.add(data);
    // fabricObj.value.add(item);
}
fabricObj.value?.renderAll();

}

/**
 * 隐藏或显示形状
 *
 * 调用此方法时，会根据当前隐藏状态切换形状的显示状态。
 * 如果当前形状是隐藏的，则显示所有形状；如果当前形状是显示的，则隐藏所有形状。
 */
const hiddenShape = (hidden?: false) => {
isHidden.value =  !isHidden.value;
shapeObjList.value.forEach(item => {
    if(!item) return;
    item.set({
    visible: !isHidden.value,
    })
})
fabricObj.value?.renderAll();
}

//   更新形状的属性
const update = (shapeList:ShapeObj[]) => {
fabricCanvasList.value = shapeList.map(item => {
    return item.shape;
})
resetCanvas()
}

// 导出数据
const exportData = () => {
return fabricObj.value?.toJSON().objects.map((item: any) => {
    return {
        type: item.type,
        id: uuidv4(),
        shape: item,
        data: {
            position: [
                [item.left, item.top],
                [item.left + item.width, item.top + item.height],
            ], // 绘图位置
            color: 'red', // 绘图颜色
            width: item.width, // 绘图宽度
            height: item.height, // 绘图高度
            strokeWidth: item.strokeWidth, // 绘图边框宽度
            strokeDashArray: item.strokeDashArray, // 绘图边框样式;
        }
    }
})
}

const hidden = () => {
isHidden.value = true
shapeObjList.value.forEach(item => {
    if(!item) return;
    item.set({
    visible: !isHidden.value,
    })
})
fabricObj.value?.renderAll();
}


const clear = () => {
clearCanvas()
}

defineExpose<ImageEditorInstance>({
fabricObj: fabricObj.value as Canvas,
shapeObjList: shapeObjList.value as any[],
update,
exportData,
hidden,
clear,
})

//   删除选中的形状对象
const deleteShape = () => {
const activeObject = fabricObj.value?.getActiveObject();
if (activeObject) {
    fabricObj.value?.remove(activeObject);
    shapeObjList.value = shapeObjList.value.filter((item) => item !== activeObject);
    fabricObj.value?.renderAll();
}
}

</script>
  <style>
  .image-mark {
    overflow: hidden;
    .image-mark__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
      .image-mark__utils {
        display: flex;
        gap: 10px;
        .image-mark__utils-item  {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover,&.active {
            color: #fff;
            background-color: #409eff;
          }
        }
      }
      .image-mark__operation {
        display: flex;
        gap: 8px;
        .ym-icon {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    .image-mark__content {
      overflow: hidden;
      ::v-deep(#canvas-box) {
        overflow: hidden !important;
      }
      
    }
  }
  .image-mark__menu {
    padding: 20px 10px;
    background-color: #fff;
    color: #666;
    .image-mark__menu-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      &.active {
        color: #409eff;
      }
    }
  }
  ::v-deep(.menu) {
    background-color: #fff !important;
    padding: 0;
  }
  ::v-deep(.ym-content-menu) {
    width: 100%;
  }
  
  </style>
  