export declare const YmContextMenu: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
        };
        title: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('./type').ContextMenuType>;
            default: string;
        };
        options: {
            type: import('vue').PropType<import('./type').ContextMenuOptionsItem[]>;
        };
        customize: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        contextMenuRef: import('vue').Ref<any, any>;
        openMenu: (showVisible: boolean, x: number, y: number) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        type: import('./type').ContextMenuType;
        customize: boolean;
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
        title: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('./type').ContextMenuType>;
            default: string;
        };
        options: {
            type: import('vue').PropType<import('./type').ContextMenuOptionsItem[]>;
        };
        customize: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        contextMenuRef: import('vue').Ref<any, any>;
        openMenu: (showVisible: boolean, x: number, y: number) => void;
    }, {}, {}, {}, {
        type: import('./type').ContextMenuType;
        customize: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: import('vue').PropType<string>;
    };
    title: {
        type: import('vue').PropType<string>;
    };
    type: {
        type: import('vue').PropType<import('./type').ContextMenuType>;
        default: string;
    };
    options: {
        type: import('vue').PropType<import('./type').ContextMenuOptionsItem[]>;
    };
    customize: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{}>, {
    contextMenuRef: import('vue').Ref<any, any>;
    openMenu: (showVisible: boolean, x: number, y: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    type: import('./type').ContextMenuType;
    customize: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        menu?(_: {}): any;
    };
}) & import('vue').Plugin;
