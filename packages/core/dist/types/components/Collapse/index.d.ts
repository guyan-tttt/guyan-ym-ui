export declare const YmCollapse: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName[]>;
            required: true;
        };
        accordion: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
        onChange?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('packages/core/index.ts').CollapseItemName[]) => void;
        change: (value: import('packages/core/index.ts').CollapseItemName[]) => void;
    }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName[]>;
            required: true;
        };
        accordion: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
        onChange?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName[]>;
        required: true;
    };
    accordion: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
    onChange?: ((value: import('packages/core/index.ts').CollapseItemName[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('packages/core/index.ts').CollapseItemName[]) => void;
    change: (value: import('packages/core/index.ts').CollapseItemName[]) => void;
}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export declare const YmCollapseItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        name: {
            type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName>;
            required: true;
        };
        title: {
            type: import('vue').PropType<string>;
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
        name: {
            type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName>;
            required: true;
        };
        title: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: import('vue').PropType<import('packages/core/index.ts').CollapseItemName>;
        required: true;
    };
    title: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type.ts';
