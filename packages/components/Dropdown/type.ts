import type { VNode, ComputedRef } from "vue";
import type { TooltipProps } from "../Tooltip/type";
import type { ButtonType, ButtonSize } from "../Button/type";

export type DropdownCommand = string | number;

export interface DropdownItemProps {
  command?: DropdownCommand; // 命令
  label: string | VNode; // 显示内容
  disabled?: boolean; // 是否禁用
  divided?: boolean; // 是否显示分割线
}

export interface DropdownProps extends TooltipProps {
  type?: ButtonType; // 按钮类型
  size?: ButtonSize; // 按钮大小
  items?: DropdownItemProps[]; // 下拉菜单项
  hideOnClick?: boolean; // 点击菜单项后是否隐藏菜单
  splitButton?: boolean; // 是否为分割按钮
}

export interface DropdownEmits {
  (e: "visible-change", value: boolean): void;
  (e: "command", value: DropdownCommand): void;
  (e: "click", value: MouseEvent): void;
}

export interface DropdownInstance {
  open(): void;
  close(): void;
}

export interface DropdownContext {
  handleItemClick(item: DropdownItemProps): void;
  size: ComputedRef<ButtonSize | void>;
}
