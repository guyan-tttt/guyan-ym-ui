import { Component, Ref, ComputedRef } from 'vue';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'middle' | 'small';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean | {
        delay?: number;
    };
    plain?: boolean;
    nativeType?: NativeType;
    circle?: boolean;
    round?: boolean;
    tag?: string | Component;
    autofocus?: boolean;
    loadingIcon?: string;
    useThrottle?: boolean;
    throttleDuration?: number;
    icon?: string;
    corrugation?: boolean;
}
export interface ButtonEmits {
    (e: 'click', event: Event): void;
}
export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<ButtonSize>;
    type: ComputedRef<ButtonType>;
}
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
