import { type Ref, type VNode } from "vue";
import { type MessageType } from "../Message/type";
import { type ButtonType } from "../Button/type";

export type MessageBoxAction = "confirm" | "cancel" | "close";
export type MessageBoxType = "" | "prompt" | "alert" | "confirm";
export type MessageBoxCallback = (
  action: MessageBoxAction | { value: string; action: MessageBoxAction }
) => void;

export type MessageBoxInputData = {
  value: string;
  action: MessageBoxAction;
};
export type MessageBoxData = MessageBoxInputData & MessageBoxAction;

export interface MessageBoxOptions {
  title?: string; // 标题
  message?: string | VNode | (() => VNode); // 内容
  type?: MessageType; // 类型
  boxType?: MessageBoxType; // 消息框类型
  icon?: string; // 图标
  callback?: MessageBoxCallback; // 回调函数
  showClose?: boolean; // 是否显示关闭按钮
  showInput?: boolean; // 是否显示输入框
  showCancelButton?: boolean; // 是否显示取消按钮
  showConfirmButton?: boolean; // 是否显示确认按钮
  cancelButtonText?: string; // 取消按钮文本
  confirmButtonText?: string; // 确认按钮文本
  cancelButtonLoading?: boolean; // 取消按钮加载状态
  confirmButtonLoading?: boolean; // 确认按钮加载状态
  cancelButtonDisabled?: boolean; // 取消按钮禁用状态
  confirmButtonDisabled?: boolean; // 确认按钮禁用状态

  cancelButtonType?: ButtonType; // 取消按钮类型
  confirmButtonType?: ButtonType; // 确认按钮类型
  roundButton?: boolean; // 是否为圆角按钮

  center?: boolean; // 内容是否居中
  lockScroll?: boolean; // 是否锁定滚动
  closeOnClickModal?: boolean; // 点击蒙层是否关闭

  inputPlaceholder?: string; // 输入框占位符
  inputValue?: string; // 输入框默认值
  inputType?: "text" | "textarea" | "password" | "number"; // 输入框类型

  buttonSize?: "default" | "small" | "large"; // 按钮大小
  beforeClose?: (
    action: MessageBoxAction,
    instance: MessageBoxOptions,
    done: () => void
  ) => void; // 关闭前的回调
}

export interface MessageBoxProps extends MessageBoxOptions {
  visible?: Ref<boolean>; // 是否显示
  doClose(): void; // 关闭
  doAction(action: MessageBoxAction, inputVal?: string): void; // 执行操作
  destroy(): void; // 销毁
}

export type MessageBoxShortcutMethod = ((
  message: MessageBoxOptions["message"],
  title: MessageBoxOptions["title"],
  options?: MessageBoxOptions
) => Promise<MessageBoxData>) &
  ((
    message: MessageBoxOptions["message"],
    options?: MessageBoxOptions
  ) => Promise<MessageBoxData>);

export interface IYmMessageBox {
  (options: MessageBoxOptions | string | VNode): Promise<any>;

  alert: MessageBoxShortcutMethod;
  confirm: MessageBoxShortcutMethod;
  prompt: MessageBoxShortcutMethod;
  close(): void;
}
