import type { Placement, Options } from "@popperjs/core";

export interface TooltipProps {
  content?: string; // 提示内容
  trigger?: "hover" | "click" | "contextmenu"; // 触发方式
  placement?: Placement; // 提示框位置
  manual?: boolean; // 手动控制显示
  disabled?: boolean; // 禁用
  popperOptions?: Partial<Options>; // popperjs 配置
  transition?: string; // 过渡动画
  showTimeout?: number; // 显示延时
  hideTimeout?: number; // 隐藏延时
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
  (e: "click-outside"): void;
}

export interface TooltipInstance {
  show(): void; // 显示
  hide(): void; // 隐藏
}