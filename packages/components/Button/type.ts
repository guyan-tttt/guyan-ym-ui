import type { Component,Ref } from "vue";

// 按钮样式类型
export type ButtonType = 'primary' | 'default' | 'dashed' | 'text';

// 按钮功能类型
export type NativeType = 'button' | 'submit' | 'reset';

// 按钮大小类型
export type ButtonSize = 'large' | 'middle' | 'small';

export interface ButtonProps {
    type?: ButtonType; // 按钮类型
    size?: ButtonSize; // 按钮大小
    disabled?: boolean; // 按钮是否禁用
    loading?: boolean | { delay?: number }; // 按钮是否加载中
    plain?: boolean; // 按钮是否为朴素按钮
    nativeType?: NativeType; // 按钮原生类型
    circle?: boolean; // 按钮是否为圆形
    round?: boolean; // 按钮是否为椭圆形
    tag?: string | Component; // 按钮标签类型
    autofocus?: boolean; // 自动获取焦点
    loadingIcon?: string; // 加载图标
    useThrottle?: boolean; // 是否使用节流
    throttleDuration?: number; // 节流时间
    icon?: string; // 按钮图标
    corrugation?: boolean; // 按钮是否开启波纹效果
}

// 按钮事件
export interface ButtonEmits {
    (e: 'click', event: Event): void;
}

// 按钮组件实例
export interface ButtonInstance {
    ref:Ref<HTMLButtonElement | void>;
}

// 按钮组属性类型
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

// 按钮组上下文
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

