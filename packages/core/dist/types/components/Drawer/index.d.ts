export declare const YmDrawer: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        footer: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        header: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import('vue').PropType<boolean>;
            required: true;
        };
        width: {
            type: import('vue').PropType<string>;
            default: string;
        };
        showClose: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        position: {
            type: import('vue').PropType<import('packages/core').DrawerPosition>;
            default: string;
        };
        beforeClose: {
            type: import('vue').PropType<(done: () => void) => void>;
        };
        height: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeOnPressEscape: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modalClass: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        appendTo: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeOnClickOverlay: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        headerClass: {
            type: import('vue').PropType<string>;
        };
        bodyClass: {
            type: import('vue').PropType<string>;
        };
        footerClass: {
            type: import('vue').PropType<string>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => void;
        opened: () => void;
        closed: () => void;
        open: () => void;
        close: () => void;
    }, import('vue').PublicProps, {
        footer: boolean;
        header: boolean;
        width: string;
        showClose: boolean;
        zIndex: number;
        position: import('packages/core').DrawerPosition;
        height: string;
        closeOnPressEscape: boolean;
        modal: boolean;
        modalClass: string;
        closeIcon: string;
        appendTo: string;
        closeOnClickOverlay: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        footer: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        header: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import('vue').PropType<boolean>;
            required: true;
        };
        width: {
            type: import('vue').PropType<string>;
            default: string;
        };
        showClose: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        position: {
            type: import('vue').PropType<import('packages/core').DrawerPosition>;
            default: string;
        };
        beforeClose: {
            type: import('vue').PropType<(done: () => void) => void>;
        };
        height: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeOnPressEscape: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modalClass: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        appendTo: {
            type: import('vue').PropType<string>;
            default: string;
        };
        closeOnClickOverlay: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        headerClass: {
            type: import('vue').PropType<string>;
        };
        bodyClass: {
            type: import('vue').PropType<string>;
        };
        footerClass: {
            type: import('vue').PropType<string>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        footer: boolean;
        header: boolean;
        width: string;
        showClose: boolean;
        zIndex: number;
        position: import('packages/core').DrawerPosition;
        height: string;
        closeOnPressEscape: boolean;
        modal: boolean;
        modalClass: string;
        closeIcon: string;
        appendTo: string;
        closeOnClickOverlay: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string>;
    };
    footer: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    header: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import('vue').PropType<boolean>;
        required: true;
    };
    width: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    zIndex: {
        type: import('vue').PropType<number>;
        default: number;
    };
    position: {
        type: import('vue').PropType<import('packages/core').DrawerPosition>;
        default: string;
    };
    beforeClose: {
        type: import('vue').PropType<(done: () => void) => void>;
    };
    height: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeOnPressEscape: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modalClass: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeIcon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    appendTo: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeOnClickOverlay: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    headerClass: {
        type: import('vue').PropType<string>;
    };
    bodyClass: {
        type: import('vue').PropType<string>;
    };
    footerClass: {
        type: import('vue').PropType<string>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    opened: () => void;
    closed: () => void;
    open: () => void;
    close: () => void;
}, string, {
    footer: boolean;
    header: boolean;
    width: string;
    showClose: boolean;
    zIndex: number;
    position: import('packages/core').DrawerPosition;
    height: string;
    closeOnPressEscape: boolean;
    modal: boolean;
    modalClass: string;
    closeIcon: string;
    appendTo: string;
    closeOnClickOverlay: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type';
