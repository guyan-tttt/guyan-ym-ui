import { Ref, ComputedRef } from 'vue';
import { SelectOptionProps, SelectStates } from './type';

interface KeyMapParams {
    isDropdownVisible: Ref<boolean>;
    highlightedLine: ComputedRef<SelectOptionProps | void>;
    hasData: ComputedRef<boolean>;
    lastIndex: ComputedRef<number>;
    selectStates: SelectStates;
    controlVisible(visible: boolean): void;
    handleSelect(option: SelectOptionProps): void;
}
export default function useKeyMap({ isDropdownVisible, // 下拉框是否显示
controlVisible, // 控制下拉框显示隐藏
selectStates, // 下拉框状态
highlightedLine, // 当前高亮的行
handleSelect, // 处理选中
hasData, // 是否有数据
lastIndex, }: KeyMapParams): Map<string, Function>;
export {};
