export type DrawerPosition = "left" | "right" | "top" | "bottom";
export interface DrawerProps {
    modelValue: boolean;
    position?: DrawerPosition;
    width?: string;
    height?: string;
    closeOnClickOverlay?: boolean;
    closeOnPressEscape?: boolean;
    showClose?: boolean;
    appendTo?: string;
    header?: boolean;
    footer?: boolean;
    beforeClose?: (done: () => void) => void;
    closeIcon?: string;
    modal?: boolean;
    modalClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    zIndex?: number;
    title?: string;
}
export interface DrawerEmits {
    (e: "update:modelValue", value: boolean): void;
    (e: "opened"): void;
    (e: "closed"): void;
    (e: "open"): void;
    (e: "close"): void;
}
