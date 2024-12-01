import type { Ref, ComputedRef } from "vue";
import type { SelectOptionProps, SelectStates } from "./type";

interface KeyMapParams {
  isDropdownVisible: Ref<boolean>; // 下拉框是否显示
  highlightedLine: ComputedRef<SelectOptionProps | void>; // 当前高亮的行
  hasData: ComputedRef<boolean>; // 是否有数据
  lastIndex: ComputedRef<number>; // 最后一行的索引
  selectStates: SelectStates; // 下拉框状态
  controlVisible(visible: boolean): void; // 控制下拉框显示隐藏
  handleSelect(option: SelectOptionProps): void; // 处理选中
}

export default function useKeyMap({
  isDropdownVisible, // 下拉框是否显示
  controlVisible, // 控制下拉框显示隐藏
  selectStates, // 下拉框状态
  highlightedLine, // 当前高亮的行
  handleSelect, // 处理选中
  hasData, // 是否有数据
  lastIndex, // 最后一行的索引
}: KeyMapParams) {
  const keyMap: Map<string, Function> = new Map();

  keyMap.set("Enter", () => {
    if (!isDropdownVisible.value) {
      controlVisible(true);
    } else {
      if (selectStates.highlightedIndex >= 0 && highlightedLine.value) {
        handleSelect(highlightedLine.value);
      } else {
        controlVisible(false);
      }
    }
  });
  keyMap.set(
    "Escape",
    () => isDropdownVisible.value && controlVisible(!isDropdownVisible.value)
  );
  keyMap.set("ArrowUp", (e: KeyboardEvent) => {
    e.preventDefault();
    if (!hasData.value) return;
    if (
      selectStates.highlightedIndex === -1 ||
      selectStates.highlightedIndex === 0
    ) {
      selectStates.highlightedIndex = lastIndex.value;
      return;
    }
    selectStates.highlightedIndex--;
  });

  keyMap.set("ArrowDown", (e: KeyboardEvent) => {
    e.preventDefault();
    if (!hasData.value) return;
    if (
      selectStates.highlightedIndex === -1 ||
      selectStates.highlightedIndex === lastIndex.value
    ) {
      selectStates.highlightedIndex = 0;
      return;
    }
    selectStates.highlightedIndex++;
  });

  return keyMap;
}
