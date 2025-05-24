export declare const YmUpload: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('packages/core').PropsType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import('vue').PropType<import('packages/core').UploadFile[]>;
            default: () => never[];
        };
        action: {
            type: import('vue').PropType<string>;
            default: string;
        };
        multiple: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        accept: {
            type: import('vue').PropType<string>;
            default: string;
        };
        maxSize: {
            type: import('vue').PropType<number>;
            default: number;
        };
        draggable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        onUpload?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        "onFile-change"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        onRemove?: ((files: import('packages/core').UploadFile) => any) | undefined;
        "onUpload-success"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
        "onUpload-error"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
    }>, {
        upload: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "file-change": (files: import('packages/core').UploadFile[]) => void;
        upload: (files: import('packages/core').UploadFile[]) => void;
        remove: (files: import('packages/core').UploadFile) => void;
        "upload-success": (arg: import('packages/core').UploadArgs) => void;
        "upload-error": (arg: import('packages/core').UploadArgs) => void;
        "update:modelValue": (files: import('packages/core').UploadFile[]) => void;
    }, import('vue').PublicProps, {
        type: import('packages/core').PropsType;
        disabled: boolean;
        modelValue: import('packages/core').UploadFile[];
        action: string;
        multiple: boolean;
        accept: string;
        maxSize: number;
        draggable: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('packages/core').PropsType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: import('vue').PropType<import('packages/core').UploadFile[]>;
            default: () => never[];
        };
        action: {
            type: import('vue').PropType<string>;
            default: string;
        };
        multiple: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        accept: {
            type: import('vue').PropType<string>;
            default: string;
        };
        maxSize: {
            type: import('vue').PropType<number>;
            default: number;
        };
        draggable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        onUpload?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        "onFile-change"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
        onRemove?: ((files: import('packages/core').UploadFile) => any) | undefined;
        "onUpload-success"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
        "onUpload-error"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
    }>, {
        upload: () => void;
    }, {}, {}, {}, {
        type: import('packages/core').PropsType;
        disabled: boolean;
        modelValue: import('packages/core').UploadFile[];
        action: string;
        multiple: boolean;
        accept: string;
        maxSize: number;
        draggable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('packages/core').PropsType>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import('vue').PropType<import('packages/core').UploadFile[]>;
        default: () => never[];
    };
    action: {
        type: import('vue').PropType<string>;
        default: string;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import('vue').PropType<string>;
        default: string;
    };
    maxSize: {
        type: import('vue').PropType<number>;
        default: number;
    };
    draggable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
    onUpload?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
    "onFile-change"?: ((files: import('packages/core').UploadFile[]) => any) | undefined;
    onRemove?: ((files: import('packages/core').UploadFile) => any) | undefined;
    "onUpload-success"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
    "onUpload-error"?: ((arg: import('packages/core').UploadArgs) => any) | undefined;
}>, {
    upload: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "file-change": (files: import('packages/core').UploadFile[]) => void;
    upload: (files: import('packages/core').UploadFile[]) => void;
    remove: (files: import('packages/core').UploadFile) => void;
    "upload-success": (arg: import('packages/core').UploadArgs) => void;
    "upload-error": (arg: import('packages/core').UploadArgs) => void;
    "update:modelValue": (files: import('packages/core').UploadFile[]) => void;
}, string, {
    type: import('packages/core').PropsType;
    disabled: boolean;
    modelValue: import('packages/core').UploadFile[];
    action: string;
    multiple: boolean;
    accept: string;
    maxSize: number;
    draggable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default YmUpload;
export * from './type';
