import {  Canvas, FabricObject} from 'fabric';

// 绘图类型枚举值，暂时只支持矩形框、直线、虚线、点、图片、圆形五种类型。
export type EditorType = "rect" | 'line' | 'dot' | 'image' | 'circle' | 'dash';



// 绘图对象类型，暂时只支持矩形框、直线、虚线、点五种类型。
export interface ShapeObj {
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
export interface ImageEditorProps {
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
export interface ImageEditorEmits {
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
export interface ImageEditorInstance  {
fabricObj: Canvas;
shapeObjList: FabricObject[];
update: (shapes: ShapeObj[]) => void;
clear: () => void;
hidden: (value: boolean) => void;
exportData: () => void;
}