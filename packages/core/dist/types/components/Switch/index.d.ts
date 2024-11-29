export declare const YmSwitch: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        name: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<"large" | "small">;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        activeText: {
            type: import('vue').PropType<string>;
        };
        inactiveText: {
            type: import('vue').PropType<string>;
        };
        activeValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            default: boolean;
        };
        inactiveValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
        onChange?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
    }>, {
        focus(): void;
        checked: import('vue').ComputedRef<boolean>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('packages/core').SwitchValueType) => void;
        change: (value: import('packages/core').SwitchValueType) => void;
    }, import('vue').PublicProps, {
        activeValue: import('packages/core').SwitchValueType;
        inactiveValue: import('packages/core').SwitchValueType;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        name: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<"large" | "small">;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        activeText: {
            type: import('vue').PropType<string>;
        };
        inactiveText: {
            type: import('vue').PropType<string>;
        };
        activeValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            default: boolean;
        };
        inactiveValue: {
            type: import('vue').PropType<import('packages/core').SwitchValueType>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
        onChange?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
    }>, {
        focus(): void;
        checked: import('vue').ComputedRef<boolean>;
    }, {}, {}, {}, {
        activeValue: import('packages/core').SwitchValueType;
        inactiveValue: import('packages/core').SwitchValueType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<"large" | "small">;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<import('packages/core').SwitchValueType>;
        required: true;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    activeText: {
        type: import('vue').PropType<string>;
    };
    inactiveText: {
        type: import('vue').PropType<string>;
    };
    activeValue: {
        type: import('vue').PropType<import('packages/core').SwitchValueType>;
        default: boolean;
    };
    inactiveValue: {
        type: import('vue').PropType<import('packages/core').SwitchValueType>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
    onChange?: ((value: import('packages/core').SwitchValueType) => any) | undefined;
}>, {
    focus(): void;
    checked: import('vue').ComputedRef<boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('packages/core').SwitchValueType) => void;
    change: (value: import('packages/core').SwitchValueType) => void;
}, string, {
    activeValue: import('packages/core').SwitchValueType;
    inactiveValue: import('packages/core').SwitchValueType;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export * from './type';
export default YmSwitch;
