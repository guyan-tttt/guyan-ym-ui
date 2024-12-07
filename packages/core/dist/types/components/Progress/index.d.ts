export declare const YmProgress: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('packages/core').ProgressType>;
            default: string;
        };
        color: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        duration: {
            type: import('vue').PropType<number>;
            default: number;
        };
        percentage: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        status: {
            type: import('vue').PropType<import('packages/core').ProgressStatus>;
            default: string;
        };
        showText: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        format: {
            type: import('vue').PropType<(percentage: number) => string>;
            default: (percentage: number) => string;
        };
        textInside: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        strokeWidth: {
            type: import('vue').PropType<number>;
            default: number;
        };
        striped: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        stripedFlow: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        type: import('packages/core').ProgressType;
        width: number | string;
        duration: number;
        percentage: number;
        status: import('packages/core').ProgressStatus;
        showText: boolean;
        format: (percentage: number) => string;
        textInside: boolean;
        strokeWidth: number;
        striped: boolean;
        stripedFlow: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('packages/core').ProgressType>;
            default: string;
        };
        color: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        duration: {
            type: import('vue').PropType<number>;
            default: number;
        };
        percentage: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        status: {
            type: import('vue').PropType<import('packages/core').ProgressStatus>;
            default: string;
        };
        showText: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        format: {
            type: import('vue').PropType<(percentage: number) => string>;
            default: (percentage: number) => string;
        };
        textInside: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        strokeWidth: {
            type: import('vue').PropType<number>;
            default: number;
        };
        striped: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        stripedFlow: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: import('packages/core').ProgressType;
        width: number | string;
        duration: number;
        percentage: number;
        status: import('packages/core').ProgressStatus;
        showText: boolean;
        format: (percentage: number) => string;
        textInside: boolean;
        strokeWidth: number;
        striped: boolean;
        stripedFlow: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('packages/core').ProgressType>;
        default: string;
    };
    color: {
        type: import('vue').PropType<string>;
    };
    width: {
        type: import('vue').PropType<string | number>;
        default: string;
    };
    duration: {
        type: import('vue').PropType<number>;
        default: number;
    };
    percentage: {
        type: import('vue').PropType<number>;
        required: true;
        default: number;
    };
    status: {
        type: import('vue').PropType<import('packages/core').ProgressStatus>;
        default: string;
    };
    showText: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    format: {
        type: import('vue').PropType<(percentage: number) => string>;
        default: (percentage: number) => string;
    };
    textInside: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    strokeWidth: {
        type: import('vue').PropType<number>;
        default: number;
    };
    striped: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    stripedFlow: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    type: import('packages/core').ProgressType;
    width: number | string;
    duration: number;
    percentage: number;
    status: import('packages/core').ProgressStatus;
    showText: boolean;
    format: (percentage: number) => string;
    textInside: boolean;
    strokeWidth: number;
    striped: boolean;
    stripedFlow: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            percentage: number;
        }): any;
    };
}) & import('vue').Plugin;
export * from './type';
