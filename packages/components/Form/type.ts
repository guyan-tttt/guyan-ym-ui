
import type {
    RuleItem, // 表单验证规则
    ValidateError,// 验证错误信息
    ValidateFieldsError, // 验证字段错误信息
  } from "async-validator";

  import type { Ref } from "vue";
  
  export interface FormItemRule extends RuleItem {
    trigger?: string | string[];
  }
  export type FormRules = Record<string, FormItemRule[]>;
  
  export type FormValidateResult = Promise<boolean>;
  export type FormValidateCallback = (
    isValid: boolean,
    invalidFields?: ValidateFieldsError
  ) => void;
  
  export type ValidateStatus = "success" | "error" | "init" | "validating"; // 验证状态
  
  export interface FormValidateFailuer {
    errors?: ValidateError[]; // 验证错误信息
    fields: ValidateFieldsError; // 验证字段错误信息
  }
  
  export interface FormProps {
    model: Record<string, any>; // 表单数据
    rules?: FormRules; // 表单验证规则
    disabled?: boolean; // 是否禁用
    labelWidth?: number | string; // 标签宽度
    labelPosition?: "left" | "right" | "top"; // 标签位置
    labelSuffix?: string; // 标签后缀
    showMessage?: boolean; // 是否显示错误信息
    hideRequiredAsterisk?: boolean; // 是否隐藏必填项的星号
    requiredAsteriskPosition?: "left" | "right"; // 必填项星号位置
  }
  
  export interface FormEmits {
    (
      event: "validate",
      prop: FormItemProps,
      isValid: boolean,
      message: string
    ): void;
  }
  
  export interface FormItemProps {
    prop?: string | string[];
    label?: string;
    for?: string;
    labelWidth?: number | string;
    disabled?: boolean;
    required?: boolean;
    showMessage?: boolean;
    error?: string;
    rules?: FormItemRule[];
  }
  
  export interface FormInstance {
    validate(callback?: FormValidateCallback): FormValidateResult;
    validateField(
      keys?: string[],
      callback?: FormValidateCallback
    ): FormValidateResult;
    resetFields(keys?: string[]): void;
    clearValidate(keys?: string[]): void;
  }
  
  export interface FormItemInstance {
    validateStatus: Ref<ValidateStatus>;
    validateMessage: Ref<string>;
    validate(
      trigger: string,
      callback?: FormValidateCallback
    ): FormValidateResult;
    resetField(): void; // 重置字段
    clearValidate(): void; // 清除验证信息
  }
  
  export interface FormContext extends FormProps {
    emits: FormEmits;
    addField(field: FormItemContext): void;
    removeField(field: FormItemContext): void;
  }
  
  export interface FormItemContext extends FormItemProps {
    validate(
      trigger: string,
      callback?: FormValidateCallback
    ): FormValidateResult;
    resetField(): void;
    clearValidate(): void;
    addInputId(id: string): void;
    removeInputId(id: string): void;
  }
  