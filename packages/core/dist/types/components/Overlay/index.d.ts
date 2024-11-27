export declare const YmOverlay: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        mask: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: import('vue').PropType<number>;
        };
        overlayClass: {
            type: import('vue').PropType<string | string[] | Record<string, boolean>>;
        };
    }>> & Readonly<{
        onClick?: ((value: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (value: MouseEvent) => void;
    }, import('vue').PublicProps, {
        mask: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        mask: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: import('vue').PropType<number>;
        };
        overlayClass: {
            type: import('vue').PropType<string | string[] | Record<string, boolean>>;
        };
    }>> & Readonly<{
        onClick?: ((value: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mask: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    mask: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    zIndex: {
        type: import('vue').PropType<number>;
    };
    overlayClass: {
        type: import('vue').PropType<string | string[] | Record<string, boolean>>;
    };
}>> & Readonly<{
    onClick?: ((value: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
}, string, {
    mask: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type.ts';
export default YmOverlay;
