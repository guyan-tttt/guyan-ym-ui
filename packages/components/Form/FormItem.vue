<script setup lang="ts">
import type {  FormItemContext, FormItemProps, FormProps, FormValidateFailuer } from './type'
import { FORM_CTX_KEY,FORM_ITEM_CTX_KEY } from './constant'
import { computed, inject, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { get, isNil, isString } from 'lodash-es';
import Schema, { type RuleItem } from 'async-validator';

defineOptions({
    name: "YmFormItem"
})

const props = withDefaults(defineProps<FormItemProps>(),{
    required: void 0,
    showMessage: true,
})

const slots = defineSlots()


// form的上下文对象
const ctx = inject(FORM_CTX_KEY)

const isDisabled = computed(() => {
    return ctx?.disabled || props.disabled
})

// 获取form的model,就是绑定的表单对象
const getValByProp = (target: Record<string,any> | void) => {
    if(target && props.prop && !isNil(get(target, props.prop))) {
        return get(target, props.prop)
    }
    return null
}

const innerVal = computed(() => {
    const model = ctx?.model
    return getValByProp(model)
})// 获取form的model,就是绑定的表单对象


let initialValue:any  = null;

const propString = computed(() => {
    if(!props.prop) return ""
    return isString(props.prop) ? props.prop : props.prop.join(".")
})

async function doValidate(rules: any[]) {
    const modeName = propString.value 
    const validator = new Schema({
        [modeName]: rules
    })
    return validator.validate(
        {[modeName]: innerVal.value},
        {firstFields: true}
    ).then(() => {

    }).catch((err: FormValidateFailuer) => {

    })
}

// 当前item的上下文对象
const formItemCtx:FormItemContext = reactive({
    ...toRefs(props),
    disabled: isDisabled.value,
    validate: () => { return 1 as any },
    resetField:() =>  { },
    clearValidate:() => {},
    addInputId:() => {},
    removeInputId:() => {},
})

onMounted(() => {
    if(props.prop) {
        ctx?.addField(formItemCtx)
        initialValue = innerVal.value // 获取初始值
    }
})

onUnmounted(() => {
    if(!props.prop) return
    ctx?.removeField(formItemCtx)

})
</script>


<template>
    <div class="ym-form-item">
        <div class="ym-form-item__content">
            <slot></slot>
            <div class="ym-form-item_error-msg"></div>
        </div>
    </div>
</template>


<style scoped>

</style>