export declare const YmImageViewer: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        urlList: {
            type: import('vue').PropType<string[]>;
            required: true;
        };
        initialIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideOnClickModal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zoomRate: {
            type: import('vue').PropType<number>;
            default: number;
        };
        minScale: {
            type: import('vue').PropType<number>;
            default: number;
        };
        maxScale: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeOnPressEsc: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onSwitch?: ((url: string, index: number) => any) | undefined;
        onClose?: (() => any) | undefined;
        onWheel?: (() => any) | undefined;
        onRotate?: ((deg: number) => any) | undefined;
    }>, {
        close: () => void;
        open: () => void;
        setActiveItem: (index: number) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => void;
        switch: (url: string, index: number) => void;
        rotate: (deg: number) => void;
        wheel: () => void;
    }, import('vue').PublicProps, {
        zIndex: number;
        initialIndex: number;
        hideOnClickModal: boolean;
        zoomRate: number;
        minScale: number;
        maxScale: number;
        closeOnPressEsc: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        urlList: {
            type: import('vue').PropType<string[]>;
            required: true;
        };
        initialIndex: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideOnClickModal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zoomRate: {
            type: import('vue').PropType<number>;
            default: number;
        };
        minScale: {
            type: import('vue').PropType<number>;
            default: number;
        };
        maxScale: {
            type: import('vue').PropType<number>;
            default: number;
        };
        closeOnPressEsc: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onSwitch?: ((url: string, index: number) => any) | undefined;
        onClose?: (() => any) | undefined;
        onWheel?: (() => any) | undefined;
        onRotate?: ((deg: number) => any) | undefined;
    }>, {
        close: () => void;
        open: () => void;
        setActiveItem: (index: number) => void;
    }, {}, {}, {}, {
        zIndex: number;
        initialIndex: number;
        hideOnClickModal: boolean;
        zoomRate: number;
        minScale: number;
        maxScale: number;
        closeOnPressEsc: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    zIndex: {
        type: import('vue').PropType<number>;
        default: number;
    };
    urlList: {
        type: import('vue').PropType<string[]>;
        required: true;
    };
    initialIndex: {
        type: import('vue').PropType<number>;
        default: number;
    };
    hideOnClickModal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    zoomRate: {
        type: import('vue').PropType<number>;
        default: number;
    };
    minScale: {
        type: import('vue').PropType<number>;
        default: number;
    };
    maxScale: {
        type: import('vue').PropType<number>;
        default: number;
    };
    closeOnPressEsc: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onSwitch?: ((url: string, index: number) => any) | undefined;
    onClose?: (() => any) | undefined;
    onWheel?: (() => any) | undefined;
    onRotate?: ((deg: number) => any) | undefined;
}>, {
    close: () => void;
    open: () => void;
    setActiveItem: (index: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    switch: (url: string, index: number) => void;
    rotate: (deg: number) => void;
    wheel: () => void;
}, string, {
    zIndex: number;
    initialIndex: number;
    hideOnClickModal: boolean;
    zoomRate: number;
    minScale: number;
    maxScale: number;
    closeOnPressEsc: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export * from './type';
