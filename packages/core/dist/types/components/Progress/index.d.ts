export declare const YmProgress: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        color: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
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
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        width: number | string;
        percentage: number;
        status: import('packages/core').ProgressStatus;
        showText: boolean;
        format: (percentage: number) => string;
        textInside: boolean;
        strokeWidth: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        color: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        width: number | string;
        percentage: number;
        status: import('packages/core').ProgressStatus;
        showText: boolean;
        format: (percentage: number) => string;
        textInside: boolean;
        strokeWidth: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    color: {
        type: import('vue').PropType<string>;
    };
    width: {
        type: import('vue').PropType<string | number>;
        default: string;
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
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    width: number | string;
    percentage: number;
    status: import('packages/core').ProgressStatus;
    showText: boolean;
    format: (percentage: number) => string;
    textInside: boolean;
    strokeWidth: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export * from './type';
