import type { InjectionKey } from "vue";
import type { FormContext, FormItemContext } from "./type";

export const FORM_CTX_KEY: InjectionKey<FormContext> = Symbol("formContext"); // 表单上下文
export const FORM_ITEM_CTX_KEY: InjectionKey<FormItemContext> =
  Symbol("formItemContext"); // 表单项上下文
