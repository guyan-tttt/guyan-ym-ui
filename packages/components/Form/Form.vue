<script setup lang="ts">
import type {  FormProps, FormEmits, FormInstance , FormContext,FormItemContext,FormItemInstance,FormItemProps} from './type'
import {  FORM_CTX_KEY } from './constant'
import { provide, reactive, toRefs } from 'vue';

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

</script>


<template>
    <form class="ym-form">
        <slot></slot>
    </form>
</template>


<style scoped>

</style>