export declare const YmButton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
            default: string;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
            default: string;
        };
        circle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import('vue').PropType<boolean | {
                delay?: number;
            }>;
            default: boolean;
        };
        plain: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        nativeType: {
            type: import('vue').PropType<import('packages/core/index.ts').NativeType>;
            default: string;
        };
        round: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
        corrugation: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((event: Event) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<import('packages/core/index.ts').ButtonSize>;
        type: import('vue').ComputedRef<import('packages/core/index.ts').ButtonType>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: Event) => void;
    }, import('vue').PublicProps, {
        size: import('packages/core/index.ts').ButtonSize;
        type: import('packages/core/index.ts').ButtonType;
        circle: boolean;
        disabled: boolean;
        loading: boolean | {
            delay?: number;
        };
        plain: boolean;
        nativeType: import('packages/core/index.ts').NativeType;
        round: boolean;
        tag: string | import('vue').Component;
        useThrottle: boolean;
        throttleDuration: number;
        corrugation: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
            default: string;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
            default: string;
        };
        circle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import('vue').PropType<boolean | {
                delay?: number;
            }>;
            default: boolean;
        };
        plain: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        nativeType: {
            type: import('vue').PropType<import('packages/core/index.ts').NativeType>;
            default: string;
        };
        round: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
        corrugation: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((event: Event) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<import('packages/core/index.ts').ButtonSize>;
        type: import('vue').ComputedRef<import('packages/core/index.ts').ButtonType>;
    }, {}, {}, {}, {
        size: import('packages/core/index.ts').ButtonSize;
        type: import('packages/core/index.ts').ButtonType;
        circle: boolean;
        disabled: boolean;
        loading: boolean | {
            delay?: number;
        };
        plain: boolean;
        nativeType: import('packages/core/index.ts').NativeType;
        round: boolean;
        tag: string | import('vue').Component;
        useThrottle: boolean;
        throttleDuration: number;
        corrugation: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    type: {
        type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
        default: string;
    };
    circle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean | {
            delay?: number;
        }>;
        default: boolean;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    nativeType: {
        type: import('vue').PropType<import('packages/core/index.ts').NativeType>;
        default: string;
    };
    round: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleDuration: {
        type: import('vue').PropType<number>;
        default: number;
    };
    corrugation: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((event: Event) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
    disabled: import('vue').ComputedRef<boolean>;
    size: import('vue').ComputedRef<import('packages/core/index.ts').ButtonSize>;
    type: import('vue').ComputedRef<import('packages/core/index.ts').ButtonType>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: Event) => void;
}, string, {
    size: import('packages/core/index.ts').ButtonSize;
    type: import('packages/core/index.ts').ButtonType;
    circle: boolean;
    disabled: boolean;
    loading: boolean | {
        delay?: number;
    };
    plain: boolean;
    nativeType: import('packages/core/index.ts').NativeType;
    round: boolean;
    tag: string | import('vue').Component;
    useThrottle: boolean;
    throttleDuration: number;
    corrugation: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const YmButtonGroup: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('packages/core/index.ts').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('packages/core/index.ts').ButtonType>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type.ts';
