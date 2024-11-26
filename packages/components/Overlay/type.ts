export interface OverlayProps {
    mask?: boolean; // 是否显示遮罩层
    zIndex?: number; // 遮罩层层级
    overlayClass?: string | string[] | Record<string, boolean>; // 遮罩层自定义类名
  }
  
  export interface OverlayEmits {
    (e: "click", value: MouseEvent): void; // 遮罩层点击事件
  }
  