import type { VNode, ComputedRef } from "vue";

export type RenderLabelFunc = (option: SelectOptionProps) => VNode | string;
export type CustomFilterFunc = (value: string) => SelectOptionProps[];
export type CustomFilterRemoteFunc = (
  value: string
) => Promise<SelectOptionProps[] | void>;

export interface SelectOptionProps {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue: string; // v-model
  id?: string; // id
  options?: SelectOptionProps[]; // 选项
  placeholder?: string; // 占位符
  disabled?: boolean; // 是否禁用
  clearable?: boolean; // 是否可清空
  renderLabel?: RenderLabelFunc; // 自定义渲染label
  filterable?: boolean; // 是否可搜索
  filterMethod?: CustomFilterFunc; // 自定义搜索方法
  remote?: boolean; // 是否远程搜索
  remoteMethod?: CustomFilterRemoteFunc; // 自定义远程搜索方法
}

export interface SelectStates {
  inputValue: string; // 输入框的值
  selectedOption: SelectOptionProps | void | null; // 当前选中的选项
  mouseHover: boolean; // 鼠标是否悬停在选项上
  loading: boolean; // 是否正在加载
  highlightedIndex: number; // 当前高亮的选项索引
}

export interface SelectEmits {
  (e: "update:modelValue", value: string): void;
  (e: "change", value: string): void;
  (e: "visible-change", value: boolean): void;

  (e: "clear"): void;
  (e: "focus"): void;
  (e: "blur"): void;
}

export interface SelectContext {
  selectStates: SelectStates;
  renderLabel?: RenderLabelFunc;
  highlightedLine?: ComputedRef<SelectOptionProps | void>;
  handleSelect(item: SelectOptionProps): void;
}

export interface SelectInstance {
  focus(): void;
  blur(): void;
}
