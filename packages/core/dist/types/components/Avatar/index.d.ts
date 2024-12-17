export declare const YmAvatar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<number | import('./type').AvatarSize>;
            default: string;
        };
        src: {
            type: import('vue').PropType<string>;
        };
        alt: {
            type: import('vue').PropType<string>;
        };
        fit: {
            type: import('vue').PropType<import('./type').AvatarFit>;
            default: string;
        };
        shape: {
            type: import('vue').PropType<"circle" | "square">;
            default: string;
        };
    }>> & Readonly<{
        onError?: ((err: Event) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        error: (err: Event) => void;
    }, import('vue').PublicProps, {
        size: number | import('./type').AvatarSize;
        fit: import('./type').AvatarFit;
        shape: "circle" | "square";
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<number | import('./type').AvatarSize>;
            default: string;
        };
        src: {
            type: import('vue').PropType<string>;
        };
        alt: {
            type: import('vue').PropType<string>;
        };
        fit: {
            type: import('vue').PropType<import('./type').AvatarFit>;
            default: string;
        };
        shape: {
            type: import('vue').PropType<"circle" | "square">;
            default: string;
        };
    }>> & Readonly<{
        onError?: ((err: Event) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: number | import('./type').AvatarSize;
        fit: import('./type').AvatarFit;
        shape: "circle" | "square";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<number | import('./type').AvatarSize>;
        default: string;
    };
    src: {
        type: import('vue').PropType<string>;
    };
    alt: {
        type: import('vue').PropType<string>;
    };
    fit: {
        type: import('vue').PropType<import('./type').AvatarFit>;
        default: string;
    };
    shape: {
        type: import('vue').PropType<"circle" | "square">;
        default: string;
    };
}>> & Readonly<{
    onError?: ((err: Event) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (err: Event) => void;
}, string, {
    size: number | import('./type').AvatarSize;
    fit: import('./type').AvatarFit;
    shape: "circle" | "square";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export * from './Avatar.vue';
