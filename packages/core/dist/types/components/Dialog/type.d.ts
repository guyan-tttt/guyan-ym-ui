export interface DialogProps {
    modelValue: boolean;
    title?: string;
    width?: string | number;
    fullscreen?: boolean;
    top?: string;
    modal?: boolean;
    modalClass?: string;
    lockScroll?: boolean;
    openDelay?: number;
    closeDelay?: number;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    showClose?: boolean;
    beforeClose?: (done: () => void) => void;
    center?: boolean;
    closeIcon?: string;
    zIndex?: number;
    customClass?: string;
    appendTo?: string;
    header?: boolean;
    footer?: boolean;
    alginCenter?: boolean;
}
export interface DialogEmits {
    (e: 'open'): void;
    (e: 'close'): void;
    (e: "opened"): void;
    (e: "closed"): void;
    (e: "update:modelValue", value: boolean): void;
}
export interface DialogSlot {
    header: () => any;
    footer: () => any;
    default: () => any;
}
