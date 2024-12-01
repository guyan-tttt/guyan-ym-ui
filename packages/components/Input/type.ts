import type { Ref } from "vue";
export interface InputProps {
  id?: string; // id
  modelValue: string; // 绑定值
  type?: string; // 类型
  size?: "large" | "small"; // 尺寸
  disabled?: boolean; // 禁用
  clearable?: boolean; // 是否可清空
  showPassword?: boolean; // 是否显示密码
  placeholder?: string; // 占位符
  readonly?: boolean; // 是否只读
  autocomplete?: string; // 自动补全
  autofocus?: boolean; // 自动聚焦
  form?: string; // 关联的表单
}

export interface InputEmits {
  (e: "update:modelValue", value: string): void; // 修改值

  (e: "input", value: string): void; // 输入值
  // 修改值且 失去焦点 才触发'change'
  (e: "change", value: string): void; // 修改值
  (e: "focus", value: FocusEvent): void; // 聚焦
  (e: "blur", value: FocusEvent): void; // 失焦
  (e: "clear"): void; // 清空
  (e: "keydown", value: KeyboardEvent): void; // 键盘按下
}

export interface InputInstance {
  ref: Ref<HTMLInputElement | HTMLTextAreaElement | void>;
  focus(): Promise<void>; // 聚焦
  blur(): void; // 失焦
  select(): void; // 选中
  clear(): void; // 清空
}
