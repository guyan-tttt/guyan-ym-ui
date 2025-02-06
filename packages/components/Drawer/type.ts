export type DrawerPosition = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  modelValue: boolean;
  position?: DrawerPosition;
  width?: string;
  height?: string;
  closeOnClickOverlay?: boolean;
  closeOnPressEscape?: boolean;
  showClose?: boolean;
  appendTo?: string; // 挂载节点
  header?: boolean; // 是否显示头部
  footer?: boolean; // 是否显示底部
  beforeClose?: (done: () => void) => void; // 关闭前的回调
  closeIcon?: string; // 关闭图标
  modal?: boolean; // 是否显示遮罩
  modalClass?: string; // 遮罩样式
  headerClass?: string; // 头部样式
  bodyClass?: string; // 内容区样式
  footerClass?: string; // 底部样式
  zIndex?: number; // 层级
}

export interface DrawerEmits {
  (e: "update:modelValue", value: boolean): void;
  (e: "opened"): void;
  (e: "closed"): void;
  (e: "open"): void;
  (e: "close"): void;
}
