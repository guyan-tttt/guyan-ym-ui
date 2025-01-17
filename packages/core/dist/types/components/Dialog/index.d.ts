export declare const YmDialog: {
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
        top: {
            type: import('vue').PropType<string>;
            default: string;
        };
        center: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import('vue').PropType<string | number>;
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
        lockScroll: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        closeOnClickModal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        beforeClose: {
            type: import('vue').PropType<(done: () => void) => void>;
        };
        fullscreen: {
            type: import('vue').PropType<boolean>;
            default: boolean;
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
        };
        openDelay: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeDelay: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        customClass: {
            type: import('vue').PropType<string>;
        };
        appendTo: {
            type: import('vue').PropType<string>;
            default: string;
        };
        alginCenter: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
    }>, {
        visible: import('vue').Ref<boolean>;
        close: () => void;
        open: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        open: () => void;
        close: () => void;
        opened: () => void;
        closed: () => void;
        "update:modelValue": (value: boolean) => void;
    }, import('vue').PublicProps, {
        footer: boolean;
        header: boolean;
        top: string;
        center: boolean;
        width: string | number;
        showClose: boolean;
        zIndex: number;
        lockScroll: boolean;
        closeOnClickModal: boolean;
        fullscreen: boolean;
        closeOnPressEscape: boolean;
        modal: boolean;
        openDelay: number;
        closeDelay: number;
        closeIcon: string;
        appendTo: string;
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
        top: {
            type: import('vue').PropType<string>;
            default: string;
        };
        center: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import('vue').PropType<string | number>;
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
        lockScroll: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        closeOnClickModal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        beforeClose: {
            type: import('vue').PropType<(done: () => void) => void>;
        };
        fullscreen: {
            type: import('vue').PropType<boolean>;
            default: boolean;
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
        };
        openDelay: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeDelay: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        customClass: {
            type: import('vue').PropType<string>;
        };
        appendTo: {
            type: import('vue').PropType<string>;
            default: string;
        };
        alginCenter: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
    }>, {
        visible: import('vue').Ref<boolean>;
        close: () => void;
        open: () => void;
    }, {}, {}, {}, {
        footer: boolean;
        header: boolean;
        top: string;
        center: boolean;
        width: string | number;
        showClose: boolean;
        zIndex: number;
        lockScroll: boolean;
        closeOnClickModal: boolean;
        fullscreen: boolean;
        closeOnPressEscape: boolean;
        modal: boolean;
        openDelay: number;
        closeDelay: number;
        closeIcon: string;
        appendTo: string;
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
    top: {
        type: import('vue').PropType<string>;
        default: string;
    };
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import('vue').PropType<string | number>;
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
    lockScroll: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    closeOnClickModal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    beforeClose: {
        type: import('vue').PropType<(done: () => void) => void>;
    };
    fullscreen: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    };
    openDelay: {
        type: import('vue').PropType<number>;
        default: number;
    };
    closeDelay: {
        type: import('vue').PropType<number>;
        default: number;
    };
    closeIcon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    customClass: {
        type: import('vue').PropType<string>;
    };
    appendTo: {
        type: import('vue').PropType<string>;
        default: string;
    };
    alginCenter: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
}>, {
    visible: import('vue').Ref<boolean>;
    close: () => void;
    open: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: () => void;
    close: () => void;
    opened: () => void;
    closed: () => void;
    "update:modelValue": (value: boolean) => void;
}, string, {
    footer: boolean;
    header: boolean;
    top: string;
    center: boolean;
    width: string | number;
    showClose: boolean;
    zIndex: number;
    lockScroll: boolean;
    closeOnClickModal: boolean;
    fullscreen: boolean;
    closeOnPressEscape: boolean;
    modal: boolean;
    openDelay: number;
    closeDelay: number;
    closeIcon: string;
    appendTo: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('packages/core/index.ts').DialogSlot> & import('packages/core/index.ts').DialogSlot;
}) & import('vue').Plugin;
export * from './type.ts';
