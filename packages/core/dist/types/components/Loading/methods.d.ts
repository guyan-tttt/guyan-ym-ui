import { LoadingOptions, LoadingOptionsResolved } from './type';

declare function createLoading(options: LoadingOptionsResolved): {
    readonly $el: HTMLElement;
    vm: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions>, {}, {}, "", {}, any>;
    close: () => void;
    visible: import('vue').Ref<boolean | undefined, import('vue').MaybeRef<boolean> | undefined>;
    setText: (text: string) => void;
};
export type LoadingInstance = ReturnType<typeof createLoading>;
export declare function Loading(options?: LoadingOptions): LoadingInstance;
export {};
