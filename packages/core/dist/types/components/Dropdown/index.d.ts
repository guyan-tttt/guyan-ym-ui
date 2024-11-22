export declare const YmDropdown: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        transition: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        trigger: {
            type: import('vue').PropType<"click" | "contextmenu" | "hover">;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
        };
        items: {
            type: import('vue').PropType<import('packages/core').DropdownItemProps[]>;
        };
        hideOnClick: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        splitButton: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        onClick?: ((value: MouseEvent) => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        onCommand?: ((value: import('packages/core').DropdownCommand) => any) | undefined;
    }>, {
        open(): void;
        close(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "visible-change": (value: boolean) => void;
        command: (value: import('packages/core').DropdownCommand) => void;
        click: (value: MouseEvent) => void;
    }, import('vue').PublicProps, {
        trigger: "hover" | "click" | "contextmenu";
        hideOnClick: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        transition: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        trigger: {
            type: import('vue').PropType<"click" | "contextmenu" | "hover">;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
        };
        items: {
            type: import('vue').PropType<import('packages/core').DropdownItemProps[]>;
        };
        hideOnClick: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        splitButton: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        onClick?: ((value: MouseEvent) => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        onCommand?: ((value: import('packages/core').DropdownCommand) => any) | undefined;
    }>, {
        open(): void;
        close(): void;
    }, {}, {}, {}, {
        trigger: "hover" | "click" | "contextmenu";
        hideOnClick: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('packages/core').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('packages/core').ButtonType>;
    };
    transition: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    content: {
        type: import('vue').PropType<string>;
    };
    trigger: {
        type: import('vue').PropType<"click" | "contextmenu" | "hover">;
        default: string;
    };
    placement: {
        type: import('vue').PropType<import('@popperjs/core').Placement>;
    };
    manual: {
        type: import('vue').PropType<boolean>;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
    };
    showTimeout: {
        type: import('vue').PropType<number>;
    };
    hideTimeout: {
        type: import('vue').PropType<number>;
    };
    items: {
        type: import('vue').PropType<import('packages/core').DropdownItemProps[]>;
    };
    hideOnClick: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    splitButton: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    onClick?: ((value: MouseEvent) => any) | undefined;
    "onVisible-change"?: ((value: boolean) => any) | undefined;
    onCommand?: ((value: import('packages/core').DropdownCommand) => any) | undefined;
}>, {
    open(): void;
    close(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "visible-change": (value: boolean) => void;
    command: (value: import('packages/core').DropdownCommand) => void;
    click: (value: MouseEvent) => void;
}, string, {
    trigger: "hover" | "click" | "contextmenu";
    hideOnClick: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const YmDropdownItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        label: {
            type: import('vue').PropType<string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>>;
            required: true;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        command: {
            type: import('vue').PropType<import('packages/core').DropdownCommand>;
            default: string;
        };
        divided: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        command: import('packages/core').DropdownCommand;
        divided: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        label: {
            type: import('vue').PropType<string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>>;
            required: true;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        command: {
            type: import('vue').PropType<import('packages/core').DropdownCommand>;
            default: string;
        };
        divided: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        command: import('packages/core').DropdownCommand;
        divided: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: import('vue').PropType<string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>>;
        required: true;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    command: {
        type: import('vue').PropType<import('packages/core').DropdownCommand>;
        default: string;
    };
    divided: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    command: import('packages/core').DropdownCommand;
    divided: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type';
