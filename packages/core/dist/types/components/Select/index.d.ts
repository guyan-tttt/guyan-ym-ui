export declare const YmSelect: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        options: {
            type: import('vue').PropType<import('packages/core').SelectOptionProps[]>;
            default: () => import('packages/core').SelectOptionProps[];
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        renderLabel: {
            type: import('vue').PropType<import('packages/core').RenderLabelFunc>;
        };
        filterable: {
            type: import('vue').PropType<boolean>;
        };
        filterMethod: {
            type: import('vue').PropType<import('packages/core').CustomFilterFunc>;
        };
        remote: {
            type: import('vue').PropType<boolean>;
        };
        remoteMethod: {
            type: import('vue').PropType<import('packages/core').CustomFilterRemoteFunc>;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onBlur?: (() => any) | undefined;
        onFocus?: (() => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string) => void;
        change: (value: string) => void;
        "visible-change": (value: boolean) => void;
        clear: () => void;
        focus: () => void;
        blur: () => void;
    }, import('vue').PublicProps, {
        options: import('packages/core').SelectOptionProps[];
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        options: {
            type: import('vue').PropType<import('packages/core').SelectOptionProps[]>;
            default: () => import('packages/core').SelectOptionProps[];
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        renderLabel: {
            type: import('vue').PropType<import('packages/core').RenderLabelFunc>;
        };
        filterable: {
            type: import('vue').PropType<boolean>;
        };
        filterMethod: {
            type: import('vue').PropType<import('packages/core').CustomFilterFunc>;
        };
        remote: {
            type: import('vue').PropType<boolean>;
        };
        remoteMethod: {
            type: import('vue').PropType<import('packages/core').CustomFilterRemoteFunc>;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onBlur?: (() => any) | undefined;
        onFocus?: (() => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, {
        options: import('packages/core').SelectOptionProps[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<string>;
        required: true;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    options: {
        type: import('vue').PropType<import('packages/core').SelectOptionProps[]>;
        default: () => import('packages/core').SelectOptionProps[];
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    renderLabel: {
        type: import('vue').PropType<import('packages/core').RenderLabelFunc>;
    };
    filterable: {
        type: import('vue').PropType<boolean>;
    };
    filterMethod: {
        type: import('vue').PropType<import('packages/core').CustomFilterFunc>;
    };
    remote: {
        type: import('vue').PropType<boolean>;
    };
    remoteMethod: {
        type: import('vue').PropType<import('packages/core').CustomFilterRemoteFunc>;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onBlur?: (() => any) | undefined;
    onFocus?: (() => any) | undefined;
    "onVisible-change"?: ((value: boolean) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
    "visible-change": (value: boolean) => void;
    clear: () => void;
    focus: () => void;
    blur: () => void;
}, string, {
    options: import('packages/core').SelectOptionProps[];
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const YmOption: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        label: {
            type: import('vue').PropType<string>;
            required: true;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        value: {
            type: import('vue').PropType<string>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        label: {
            type: import('vue').PropType<string>;
            required: true;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        value: {
            type: import('vue').PropType<string>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: import('vue').PropType<string>;
        required: true;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import('vue').PropType<string>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type';
