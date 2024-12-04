import { MaybeRef } from 'vue';

export declare function useFormItem(): {
    form: import('./type').FormContext | undefined;
    formItem: import('./type').FormItemContext | undefined;
};
export declare function useFormDisabled(fallback: MaybeRef<boolean | void>): void;
