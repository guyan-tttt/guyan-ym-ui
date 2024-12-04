import { MaybeRef } from 'vue';
import { FormItemContext } from './type';

export declare function useFormItem(): {
    form: import('packages/core').FormContext | undefined;
    formItem: FormItemContext | undefined;
};
export declare function useFormDisabled(fallback: MaybeRef<boolean | void>): import('vue').ComputedRef<boolean>;
interface UseFormItemInputIdCommentProps extends Record<string, any> {
    id?: string;
}
export declare function useFormItemInputId(props: UseFormItemInputIdCommentProps, formItemContext?: FormItemContext): {
    inputId: import('vue').Ref<string, string>;
};
export {};
