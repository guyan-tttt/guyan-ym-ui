import { inject } from "vue";
import { FORM_CTX_KEY, FORM_ITEM_CTX_KEY } from "./constant";

export function useFormItem() {
    const form = inject(FORM_CTX_KEY)
    const formItem = inject(FORM_ITEM_CTX_KEY, void 0)
    return {
        form,
        formItem
    }
}