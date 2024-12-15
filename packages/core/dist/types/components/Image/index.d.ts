export declare const YmImage: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        loading: {
            type: import('vue').PropType<import('packages/core').imageLoadingType>;
            default: string;
        };
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
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
        src: {
            type: import('vue').PropType<string>;
            required: true;
        };
        alt: {
            type: import('vue').PropType<string>;
        };
        lazy: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        fit: {
            type: import('vue').PropType<import('packages/core').fitType>;
            default: string;
        };
        scrollContainer: {
            type: import('vue').PropType<string | HTMLElement>;
        };
        previewSrcList: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        closeOnPressEscape: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onSwitch?: ((url: string) => any) | undefined;
        onError?: ((event: Event) => any) | undefined;
        onClose?: (() => any) | undefined;
        onLoad?: ((event: Event) => any) | undefined;
        onShow?: ((event: Event) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        load: (event: Event) => void;
        error: (event: Event) => void;
        switch: (url: string) => void;
        close: () => void;
        show: (event: Event) => void;
    }, import('vue').PublicProps, {
        loading: import('packages/core').imageLoadingType;
        zIndex: number;
        initialIndex: number;
        hideOnClickModal: boolean;
        zoomRate: number;
        minScale: number;
        maxScale: number;
        lazy: boolean;
        fit: import('packages/core').fitType;
        previewSrcList: string[];
        closeOnPressEscape: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        loading: {
            type: import('vue').PropType<import('packages/core').imageLoadingType>;
            default: string;
        };
        zIndex: {
            type: import('vue').PropType<number>;
            default: number;
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
        src: {
            type: import('vue').PropType<string>;
            required: true;
        };
        alt: {
            type: import('vue').PropType<string>;
        };
        lazy: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        fit: {
            type: import('vue').PropType<import('packages/core').fitType>;
            default: string;
        };
        scrollContainer: {
            type: import('vue').PropType<string | HTMLElement>;
        };
        previewSrcList: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        closeOnPressEscape: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onSwitch?: ((url: string) => any) | undefined;
        onError?: ((event: Event) => any) | undefined;
        onClose?: (() => any) | undefined;
        onLoad?: ((event: Event) => any) | undefined;
        onShow?: ((event: Event) => any) | undefined;
    }>, {}, {}, {}, {}, {
        loading: import('packages/core').imageLoadingType;
        zIndex: number;
        initialIndex: number;
        hideOnClickModal: boolean;
        zoomRate: number;
        minScale: number;
        maxScale: number;
        lazy: boolean;
        fit: import('packages/core').fitType;
        previewSrcList: string[];
        closeOnPressEscape: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    loading: {
        type: import('vue').PropType<import('packages/core').imageLoadingType>;
        default: string;
    };
    zIndex: {
        type: import('vue').PropType<number>;
        default: number;
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
    src: {
        type: import('vue').PropType<string>;
        required: true;
    };
    alt: {
        type: import('vue').PropType<string>;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    fit: {
        type: import('vue').PropType<import('packages/core').fitType>;
        default: string;
    };
    scrollContainer: {
        type: import('vue').PropType<string | HTMLElement>;
    };
    previewSrcList: {
        type: import('vue').PropType<string[]>;
        default: () => never[];
    };
    closeOnPressEscape: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onSwitch?: ((url: string) => any) | undefined;
    onError?: ((event: Event) => any) | undefined;
    onClose?: (() => any) | undefined;
    onLoad?: ((event: Event) => any) | undefined;
    onShow?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    load: (event: Event) => void;
    error: (event: Event) => void;
    switch: (url: string) => void;
    close: () => void;
    show: (event: Event) => void;
}, string, {
    loading: import('packages/core').imageLoadingType;
    zIndex: number;
    initialIndex: number;
    hideOnClickModal: boolean;
    zoomRate: number;
    minScale: number;
    maxScale: number;
    lazy: boolean;
    fit: import('packages/core').fitType;
    previewSrcList: string[];
    closeOnPressEscape: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        error?(_: {}): any;
        loading?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type';
