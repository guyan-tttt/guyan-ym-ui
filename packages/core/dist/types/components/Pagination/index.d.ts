export declare const YmPagination: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        total: {
            type: import('vue').PropType<number>;
            required: true;
        };
        currentPage: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        background: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        pageSize: {
            type: import('vue').PropType<number>;
            default: number;
        };
        pagerCount: {
            type: import('vue').PropType<number>;
            default: number;
        };
        pageSizes: {
            type: import('vue').PropType<number[]>;
            default: any;
        };
        prevText: {
            type: import('vue').PropType<string>;
        };
        nextText: {
            type: import('vue').PropType<string>;
        };
        prevIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        nextIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        jumper: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        sizeSelector: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        totalor: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        "onSize-change"?: ((val: number) => any) | undefined;
        "onCurrent-change"?: ((val: number) => any) | undefined;
        "onPrev-click"?: ((val: number) => any) | undefined;
        "onNext-click"?: ((val: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "size-change": (val: number) => void;
        "current-change": (val: number) => void;
        "prev-click": (val: number) => void;
        "next-click": (val: number) => void;
    }, import('vue').PublicProps, {
        disabled: boolean;
        currentPage: number;
        background: boolean;
        pageSize: number;
        pagerCount: number;
        pageSizes: number[];
        prevIcon: string;
        nextIcon: string;
        jumper: boolean;
        sizeSelector: boolean;
        totalor: boolean;
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
            default: boolean;
        };
        total: {
            type: import('vue').PropType<number>;
            required: true;
        };
        currentPage: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        background: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        pageSize: {
            type: import('vue').PropType<number>;
            default: number;
        };
        pagerCount: {
            type: import('vue').PropType<number>;
            default: number;
        };
        pageSizes: {
            type: import('vue').PropType<number[]>;
            default: any;
        };
        prevText: {
            type: import('vue').PropType<string>;
        };
        nextText: {
            type: import('vue').PropType<string>;
        };
        prevIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        nextIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        jumper: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        sizeSelector: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        totalor: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        "onSize-change"?: ((val: number) => any) | undefined;
        "onCurrent-change"?: ((val: number) => any) | undefined;
        "onPrev-click"?: ((val: number) => any) | undefined;
        "onNext-click"?: ((val: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        currentPage: number;
        background: boolean;
        pageSize: number;
        pagerCount: number;
        pageSizes: number[];
        prevIcon: string;
        nextIcon: string;
        jumper: boolean;
        sizeSelector: boolean;
        totalor: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    total: {
        type: import('vue').PropType<number>;
        required: true;
    };
    currentPage: {
        type: import('vue').PropType<number>;
        required: true;
        default: number;
    };
    background: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pageSize: {
        type: import('vue').PropType<number>;
        default: number;
    };
    pagerCount: {
        type: import('vue').PropType<number>;
        default: number;
    };
    pageSizes: {
        type: import('vue').PropType<number[]>;
        default: any;
    };
    prevText: {
        type: import('vue').PropType<string>;
    };
    nextText: {
        type: import('vue').PropType<string>;
    };
    prevIcon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    nextIcon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    jumper: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    sizeSelector: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    totalor: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onSize-change"?: ((val: number) => any) | undefined;
    "onCurrent-change"?: ((val: number) => any) | undefined;
    "onPrev-click"?: ((val: number) => any) | undefined;
    "onNext-click"?: ((val: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "size-change": (val: number) => void;
    "current-change": (val: number) => void;
    "prev-click": (val: number) => void;
    "next-click": (val: number) => void;
}, string, {
    disabled: boolean;
    currentPage: number;
    background: boolean;
    pageSize: number;
    pagerCount: number;
    pageSizes: number[];
    prevIcon: string;
    nextIcon: string;
    jumper: boolean;
    sizeSelector: boolean;
    totalor: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export * from './type';
