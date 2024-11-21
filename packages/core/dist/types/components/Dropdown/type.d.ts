import { VNode, ComputedRef } from 'vue';
import { TooltipProps } from '../Tooltip/type';
import { ButtonType, ButtonSize } from '../Button/type';

export type DropdownCommand = string | number;
export interface DropdownItemProps {
    command?: DropdownCommand;
    label: string | VNode;
    disabled?: boolean;
    divided?: boolean;
}
export interface DropdownProps extends TooltipProps {
    type?: ButtonType;
    size?: ButtonSize;
    items?: DropdownItemProps[];
    hideOnClick?: boolean;
    splitButton?: boolean;
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
