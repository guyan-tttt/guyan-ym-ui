<script setup lang="ts">
import type {  FormProps, FormEmits, FormInstance , FormContext,FormItemContext,FormItemInstance,FormItemProps} from './type'
import {  FORM_CTX_KEY } from './constant'
import { provide, reactive, toRefs } from 'vue';
import { each, filter, includes, size } from 'lodash-es';
import type { ValidateError, ValidateFieldsError } from 'async-validator';

defineOptions({
    name: "YmForm"
})

const props = withDefaults(defineProps<FormProps>(), {
    showMessage: true, // 是否显示校验信息
    hideRequiredAsterisk: false ,// 是否隐藏必填字段的标签旁边的红色星号
    requiredAsteriskPosition: 'right', // 必填字段的标签旁边的红色星号的位置
    labelWidth: 'auto', // 标签宽度
    labelPosition: 'right', // 标签位置
    labelAlign: 'left', // 标签对齐方式
    labelSuffix: '', // 标签后缀
    hideLabel: false, // 是否隐藏标签
})

const emits  = defineEmits<FormEmits>()

const fields:FormItemContext[] = [] // 表单项上下文集合

// 添加表单项上下文
const addField:FormContext["addField"] = (field:FormItemContext) => {
    if(!field.prop) return // 没有prop属性则不添加
    fields.push(field)
}

// 移除表单项上下文
const removeField:FormContext["removeField"] = (field:FormItemContext) => {
    if(!field.prop) return // 没有prop属性则不处理
    const index  = fields.indexOf(field)
    if(index !== -1) fields.splice(index, 1)
}

const formCtx:FormContext = reactive({
    addField,
    removeField,
    emits,
    ...toRefs(props) // 将props中的属性转换为响应式属性,解构将不会丢失响应式
})

// 依赖注入
provide(FORM_CTX_KEY,formCtx)

// 执行校验
const doValidateField = async(fields: FormItemContext[] = []) => {
    let validateErrors:ValidateFieldsError = {} // 存放校验错误信息
    for(const filed of fields) {
        try {
            await filed.validate("") // 默认传入空字符串校验所有的规则
        } catch(error) {
            // 如果校验失败,则将错误信息添加到validateErrors中
            validateErrors = {
                ...validateErrors,
                ...(error as ValidateFieldsError)
            }
        }
    }
    if(!size(Object.keys(validateErrors))) {
        return true
    }
    return Promise.reject(validateErrors)
}

const validateField:FormInstance["validateField"] = async (keys,callback) => {
    const filterArr = filterFields(fields, keys ?? [])// 根据keys过滤fields,如果没有keys则执行所有fields
    try {
        // 执行校验
        const result = await doValidateField(filterArr)
        // 如果校验成功,则执行回调函数
        if(result  === true)  {
            callback?.(result)
        }
        return result
    } catch(e) {
        // 如果校验失败,则执行回调函数
        if(e instanceof Error) {
            throw e
        }
        callback?.(false, e as ValidateFieldsError)
        return Promise.reject(e)
    }

}

const validate:FormInstance["validate"] = async (callback?: (valid: boolean) => void) => {
    return validateField([], callback)
}

// 重置表单
const resetFields:FormInstance["resetFields"] = (keys) => {
    each(filterFields(fields,keys ?? []), (field) => {
        return field.resetField() // 重置表单项
    })
}

const clearValidate:FormInstance["clearValidate"] = (keys) => {
    each(filterFields(fields,keys ?? []), (field) => {
        return field.clearValidate() // 清除表单项校验
    })
}
// 过滤表单项
const filterFields = (fields:FormItemContext[], keys: string[]) => {
    return size(keys) ? filter(fields, (item) => includes(keys, item.prop)) : fields
}

defineExpose<FormInstance>({
    validate,
    validateField,
    resetFields,
    clearValidate
})
</script>


<template>
    <form class="ym-form">
        <slot></slot>
    </form>
</template>


<style scoped>
@import './style';
</style>