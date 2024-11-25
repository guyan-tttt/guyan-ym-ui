import { Ref } from 'vue';

interface UserFocusOptions {
    afterFocus?(): void;
    beforeBlur?(event: FocusEvent): boolean | void;
    afterBlur?(): void;
}
export default function useFocusController<T extends HTMLElement | {
    focus(): void;
}>(target: Ref<T | void>, { afterBlur, afterFocus, beforeBlur }: UserFocusOptions): {
    wrapperRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isFocused: Ref<boolean, boolean>;
    handlerFocus: (event: FocusEvent) => void;
    handlerBlur: (event: FocusEvent) => void;
};
export {};
