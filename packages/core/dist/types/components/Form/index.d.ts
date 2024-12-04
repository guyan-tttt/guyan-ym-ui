export declare const YmForm: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        model: {
            type: import('vue').PropType<Record<string, any>>;
            required: true;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormRules>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        labelPosition: {
            type: import('vue').PropType<"right" | "left" | "top">;
            default: string;
        };
        labelSuffix: {
            type: import('vue').PropType<string>;
            default: string;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        hideRequiredAsterisk: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        requiredAsteriskPosition: {
            type: import('vue').PropType<"right" | "left">;
            default: string;
        };
    }>> & Readonly<{
        onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
    }>, {
        validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetFields(keys?: string[]): void;
        clearValidate(keys?: string[]): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        validate: (prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => void;
    }, import('vue').PublicProps, {
        labelWidth: number | string;
        labelPosition: "left" | "right" | "top";
        labelSuffix: string;
        showMessage: boolean;
        hideRequiredAsterisk: boolean;
        requiredAsteriskPosition: "left" | "right";
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
        model: {
            type: import('vue').PropType<Record<string, any>>;
            required: true;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormRules>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        labelPosition: {
            type: import('vue').PropType<"right" | "left" | "top">;
            default: string;
        };
        labelSuffix: {
            type: import('vue').PropType<string>;
            default: string;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        hideRequiredAsterisk: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        requiredAsteriskPosition: {
            type: import('vue').PropType<"right" | "left">;
            default: string;
        };
    }>> & Readonly<{
        onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
    }>, {
        validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetFields(keys?: string[]): void;
        clearValidate(keys?: string[]): void;
    }, {}, {}, {}, {
        labelWidth: number | string;
        labelPosition: "left" | "right" | "top";
        labelSuffix: string;
        showMessage: boolean;
        hideRequiredAsterisk: boolean;
        requiredAsteriskPosition: "left" | "right";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    model: {
        type: import('vue').PropType<Record<string, any>>;
        required: true;
    };
    rules: {
        type: import('vue').PropType<import('packages/core').FormRules>;
    };
    labelWidth: {
        type: import('vue').PropType<string | number>;
        default: string;
    };
    labelPosition: {
        type: import('vue').PropType<"right" | "left" | "top">;
        default: string;
    };
    labelSuffix: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showMessage: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    hideRequiredAsterisk: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requiredAsteriskPosition: {
        type: import('vue').PropType<"right" | "left">;
        default: string;
    };
}>> & Readonly<{
    onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
}>, {
    validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
    validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
    resetFields(keys?: string[]): void;
    clearValidate(keys?: string[]): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    validate: (prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => void;
}, string, {
    labelWidth: number | string;
    labelPosition: "left" | "right" | "top";
    labelSuffix: string;
    showMessage: boolean;
    hideRequiredAsterisk: boolean;
    requiredAsteriskPosition: "left" | "right";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export declare const YmFormItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        required: {
            type: import('vue').PropType<boolean>;
            default: undefined;
        };
        label: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        error: {
            type: import('vue').PropType<string>;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormItemRule[]>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        prop: {
            type: import('vue').PropType<string | string[]>;
        };
        for: {
            type: import('vue').PropType<string>;
        };
    }>> & Readonly<{}>, {
        validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
        validateMessage: import('vue').Ref<string>;
        validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetField(): void;
        clearValidate(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        required: boolean;
        showMessage: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        required: {
            type: import('vue').PropType<boolean>;
            default: undefined;
        };
        label: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        error: {
            type: import('vue').PropType<string>;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormItemRule[]>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        prop: {
            type: import('vue').PropType<string | string[]>;
        };
        for: {
            type: import('vue').PropType<string>;
        };
    }>> & Readonly<{}>, {
        validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
        validateMessage: import('vue').Ref<string>;
        validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetField(): void;
        clearValidate(): void;
    }, {}, {}, {}, {
        required: boolean;
        showMessage: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    required: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    rules: {
        type: import('vue').PropType<import('packages/core').FormItemRule[]>;
    };
    labelWidth: {
        type: import('vue').PropType<string | number>;
    };
    showMessage: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    prop: {
        type: import('vue').PropType<string | string[]>;
    };
    for: {
        type: import('vue').PropType<string>;
    };
}>> & Readonly<{}>, {
    validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
    validateMessage: import('vue').Ref<string>;
    validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
    resetField(): void;
    clearValidate(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    required: boolean;
    showMessage: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
declare const _default: {
    YmForm: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            disabled: {
                type: import('vue').PropType<boolean>;
            };
            model: {
                type: import('vue').PropType<Record<string, any>>;
                required: true;
            };
            rules: {
                type: import('vue').PropType<import('packages/core').FormRules>;
            };
            labelWidth: {
                type: import('vue').PropType<string | number>;
                default: string;
            };
            labelPosition: {
                type: import('vue').PropType<"right" | "left" | "top">;
                default: string;
            };
            labelSuffix: {
                type: import('vue').PropType<string>;
                default: string;
            };
            showMessage: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            hideRequiredAsterisk: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            requiredAsteriskPosition: {
                type: import('vue').PropType<"right" | "left">;
                default: string;
            };
        }>> & Readonly<{
            onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
        }>, {
            validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            resetFields(keys?: string[]): void;
            clearValidate(keys?: string[]): void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            validate: (prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => void;
        }, import('vue').PublicProps, {
            labelWidth: number | string;
            labelPosition: "left" | "right" | "top";
            labelSuffix: string;
            showMessage: boolean;
            hideRequiredAsterisk: boolean;
            requiredAsteriskPosition: "left" | "right";
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
            model: {
                type: import('vue').PropType<Record<string, any>>;
                required: true;
            };
            rules: {
                type: import('vue').PropType<import('packages/core').FormRules>;
            };
            labelWidth: {
                type: import('vue').PropType<string | number>;
                default: string;
            };
            labelPosition: {
                type: import('vue').PropType<"right" | "left" | "top">;
                default: string;
            };
            labelSuffix: {
                type: import('vue').PropType<string>;
                default: string;
            };
            showMessage: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            hideRequiredAsterisk: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            requiredAsteriskPosition: {
                type: import('vue').PropType<"right" | "left">;
                default: string;
            };
        }>> & Readonly<{
            onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
        }>, {
            validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            resetFields(keys?: string[]): void;
            clearValidate(keys?: string[]): void;
        }, {}, {}, {}, {
            labelWidth: number | string;
            labelPosition: "left" | "right" | "top";
            labelSuffix: string;
            showMessage: boolean;
            hideRequiredAsterisk: boolean;
            requiredAsteriskPosition: "left" | "right";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        model: {
            type: import('vue').PropType<Record<string, any>>;
            required: true;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormRules>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        labelPosition: {
            type: import('vue').PropType<"right" | "left" | "top">;
            default: string;
        };
        labelSuffix: {
            type: import('vue').PropType<string>;
            default: string;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        hideRequiredAsterisk: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        requiredAsteriskPosition: {
            type: import('vue').PropType<"right" | "left">;
            default: string;
        };
    }>> & Readonly<{
        onValidate?: ((prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => any) | undefined;
    }>, {
        validate(callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        validateField(keys?: string[], callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetFields(keys?: string[]): void;
        clearValidate(keys?: string[]): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        validate: (prop: import('packages/core').FormItemProps, isValid: boolean, message: string) => void;
    }, string, {
        labelWidth: number | string;
        labelPosition: "left" | "right" | "top";
        labelSuffix: string;
        showMessage: boolean;
        hideRequiredAsterisk: boolean;
        requiredAsteriskPosition: "left" | "right";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    }) & import('vue').Plugin;
    YmFormItem: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            required: {
                type: import('vue').PropType<boolean>;
                default: undefined;
            };
            label: {
                type: import('vue').PropType<string>;
            };
            disabled: {
                type: import('vue').PropType<boolean>;
            };
            error: {
                type: import('vue').PropType<string>;
            };
            rules: {
                type: import('vue').PropType<import('packages/core').FormItemRule[]>;
            };
            labelWidth: {
                type: import('vue').PropType<string | number>;
            };
            showMessage: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            prop: {
                type: import('vue').PropType<string | string[]>;
            };
            for: {
                type: import('vue').PropType<string>;
            };
        }>> & Readonly<{}>, {
            validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
            validateMessage: import('vue').Ref<string>;
            validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            resetField(): void;
            clearValidate(): void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            required: boolean;
            showMessage: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            required: {
                type: import('vue').PropType<boolean>;
                default: undefined;
            };
            label: {
                type: import('vue').PropType<string>;
            };
            disabled: {
                type: import('vue').PropType<boolean>;
            };
            error: {
                type: import('vue').PropType<string>;
            };
            rules: {
                type: import('vue').PropType<import('packages/core').FormItemRule[]>;
            };
            labelWidth: {
                type: import('vue').PropType<string | number>;
            };
            showMessage: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            prop: {
                type: import('vue').PropType<string | string[]>;
            };
            for: {
                type: import('vue').PropType<string>;
            };
        }>> & Readonly<{}>, {
            validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
            validateMessage: import('vue').Ref<string>;
            validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
            resetField(): void;
            clearValidate(): void;
        }, {}, {}, {}, {
            required: boolean;
            showMessage: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        required: {
            type: import('vue').PropType<boolean>;
            default: undefined;
        };
        label: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        error: {
            type: import('vue').PropType<string>;
        };
        rules: {
            type: import('vue').PropType<import('packages/core').FormItemRule[]>;
        };
        labelWidth: {
            type: import('vue').PropType<string | number>;
        };
        showMessage: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        prop: {
            type: import('vue').PropType<string | string[]>;
        };
        for: {
            type: import('vue').PropType<string>;
        };
    }>> & Readonly<{}>, {
        validateStatus: import('vue').Ref<import('packages/core').ValidateStatus>;
        validateMessage: import('vue').Ref<string>;
        validate(trigger: string, callback?: import('packages/core').FormValidateCallback): import('packages/core').FormValidateResult;
        resetField(): void;
        clearValidate(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        required: boolean;
        showMessage: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<Record<string, any>> & Record<string, any>;
    }) & import('vue').Plugin;
};
export default _default;
export * from './type';
export * from './hooks';
