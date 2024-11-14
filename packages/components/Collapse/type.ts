import type { Ref } from "vue";
// 折叠面板名称
export type CollapseItemName = string | number;

// 折叠面板属性
export interface CollapseProps {
  modelValue: CollapseItemName[]; // v-model
  accordion?: boolean; // 是否手风琴模式
}
// 折叠面板子项属性
export interface CollapseItemProps {
  name: CollapseItemName; // 唯一标识
  title?: string; // 标题
  disabled?: boolean; // 是否禁用
}
// 折叠面板上下文
export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>; // 激活面板
  handleItemClick(name: CollapseItemName): void; // 点击面板
}
// 折叠面板事件
export interface CollapseEmits {
  (e: "update:modelValue", value: CollapseItemName[]): void; // 更新激活面板
  (e: "change", value: CollapseItemName[]): void; // 激活面板改变
}
