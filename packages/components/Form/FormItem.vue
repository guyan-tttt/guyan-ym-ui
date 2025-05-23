<script setup lang="ts">
import type {  FormItemContext, FormItemInstance, FormItemProps, FormItemRule, FormValidateCallback, FormValidateFailuer, ValidateStatus } from './type'
import { FORM_CTX_KEY,FORM_ITEM_CTX_KEY } from './constant'
import { computed, inject, onMounted, onUnmounted, reactive, toRefs, ref, type Ref, nextTick, provide } from 'vue';
import { cloneDeep, endsWith, filter, get, includes, isArray, isNil, isNumber, isString, keys, map, size, some } from 'lodash-es';
import Schema, { type RuleItem } from 'async-validator';
import { useId } from '@ym-UI/hooks';

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
const inputIds = ref<string[]>([])

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


// 表单校验状态
const validateStatus:Ref<ValidateStatus> = ref("init")

const errMsg = ref("") // 错误信息


async function doValidate(rules: any[]) {
    const modeName = propString.value 
    const validator = new Schema({
        [modeName]: rules
    })
    return validator.validate(
        {[modeName]: innerVal.value}, // 当前表单项的值
        {firstFields: true} // 第一个错误就返回
    ).then(() => {
        validateStatus.value = "success" // 校验成功
        ctx?.emits("validate", props, true, "") // 触发form的validate事件
        return true
    }).catch((err: FormValidateFailuer) => {
        const { errors } = err // 获取错误信息
        errMsg.value = errors && size(errors) > 0 ? (errors[0].message ?? "") : "" // 获取第一个错误信息
        validateStatus.value = "error" // 校验失败
        ctx?.emits("validate", props, false, errMsg.value) // 触发form的validate事件
        return Promise.reject(err)
    })
}

const itemRules = computed(() => {
    const { required  } = props // 解构当前item，查看是否有必填项

    const rules:FormItemRule[] = [] // 该item的校验规则集合
    // 判断item是否单独传递校验规则，如果有就有合并
    if(props.rules) {
        rules.push(...props.rules)
    }
    // 获取form传递的校验规则，并提取当前item的校验规则合并
    const formRules = ctx?.rules
    if(formRules && props.prop) {
        const _rules = getValByProp(formRules)
        if(_rules) {
            rules.push(..._rules)
        }
    }
    // 如果有必填项，则添加必填项的校验规则
    if(!isNil(required)) {
        const requiredRules = filter(
        map(rules, (rule, i) => [rule, i]),
        (item: [FormItemRule, number]) => includes(keys(item[0]), "required")
        );

        if (size(requiredRules)) {
        for (const item of requiredRules) {
            const [rule, i] = item as [FormItemRule, number];
            if (rule.required === required) continue;
            rules[i] = { ...rule, required };
        }
        } else {
        rules.push({ required });
        }
    }

    return rules
})

const getTriggerRules = (trigger:string) => {
    const rules = itemRules.value
    if(!rules) return []
    // 过滤出与当前trigger相关的校验规则
    if(trigger === "") return rules // 如果trigger为空，则返回所有校验规则
    return  filter(rules, (rule) => {
        if(!rule.trigger || !trigger) return true
        if(isArray(rule.trigger)) {
            return includes(rule.trigger, trigger)
        }
        return rule.trigger === trigger
    }).map(({trigger,...rule}) => rule as RuleItem)
}

const validate: FormItemInstance['validate'] = async (
    trigger: string ,
    callback?:FormValidateCallback
) => {
    // 如果当前item没有prop属性，则不进行校验,如果当前item被禁用，则不进行校验
    if(!isResetting || !props.prop || isDisabled.value) return false 
    // 如果当前校验状态有值，则直接返回
    if(!validateStatus.value) {
        callback?.(false)
        return false
    }
    // 获取当前trigger相关的校验规则
    const rules = getTriggerRules(trigger)
    // 如果当前trigger没有校验规则，则直接校验通过
    if(!size(rules)) {
        callback?.(true)
        return true
    }
    validateStatus.value = "validating"
    return doValidate(rules).then(() => {
        callback?.(true)
        return true
    }).catch((err) => {
        const { fields } = err
        callback?.(false, fields)
        return Promise.reject(fields)
    })
}

// 当前是否有是重置表单数据

const isResetting = ref(false)

const resetField: FormItemInstance['resetField'] = () => {
    const model = ctx?.model
    if(model && propString.value && isNil(get(model, propString.value))) {
        isResetting.value = true // 设置重置状态
        model[propString.value] = cloneDeep(initialValue) // 重置表单数据
    }
    nextTick(() => {
        clearValidate() // 清除校验状态
    })
}

const clearValidate:FormItemInstance['clearValidate'] = () => {
    validateStatus.value = 'init' // 重置校验状态
    errMsg.value = '' // 重置错误信息
    isResetting.value = false // 重置重置状态
}


const addInputId:FormItemContext['addInputId'] = (id: string) => {
    if(!includes(inputIds.value,id)) {
        inputIds.value.push(id)
    }
}

const removeInputId:FormItemContext['removeInputId'] = (id: string) => {
    const index = inputIds.value.indexOf(id)
    if(index > -1) {
        inputIds.value.splice(index, 1)
    }
}




// 当前item的上下文对象
const formItemCtx:FormItemContext = reactive({
    ...toRefs(props),
    disabled: isDisabled.value,
    validate: validate,
    resetField,
    clearValidate,
    addInputId,
    removeInputId,
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

provide(FORM_ITEM_CTX_KEY, formItemCtx) // 依赖注入

defineExpose<FormItemInstance>({
    validate,
    resetField,
    clearValidate,
    validateMessage: errMsg,
    validateStatus,
})


const hasLabel = computed(() => {
    return !!(props.label || slots.label)
})


const labelFor = computed(() => {
    return props.for || (inputIds.value.length ? inputIds?.value[0] : "")
})
const labelId = useId()

const currentLabel = computed(() => `${props.label ?? ""}${ctx?.labelSuffix ?? ""}`)

const normalizeLabelWidth = computed(() => {
    const _normalizeStyle = (val: number | string) => {
        if(isNumber(val)) return `${val}px`
        return endsWith(val,'px') ? val : `${val}px`
    }
    if(props.labelWidth) return _normalizeStyle(props.labelWidth)
    if(ctx?.labelWidth) return _normalizeStyle(ctx.labelWidth)
    return '150px'
})  


const isRequired = computed(() => {
    return !ctx?.hideRequiredAsterisk && (some(itemRules.value, 'required')) || props.required
})
</script>


<template>
    <div 
    class="ym-form-item"
    :class="{
        'is-error': validateStatus === 'error', // 当前校验状态为error时，添加is-error类名
        'is-disabled': isDisabled, // 当前表单项被禁用时，添加is-disabled类名
        'is-required':isRequired, // 当前表单项为必填项时，添加is-required类名
        'asterisk-left':ctx?.requiredAsteriskPosition === 'left', // 当前表单项的必填项星号在左边时，添加asterisk-left类名
        'asterisk-right':ctx?.requiredAsteriskPosition === 'right', // 当前表单项的必填项星号在右边时，添加asterisk-right类名
    }"
    >
    <component 
    v-if="hasLabel"
     class="ym-form-item__label"
    :class="`position-${ctx?.labelPosition ?? 'right'}`"
    :is="labelFor ? 'label' : 'div'" 
    :id="labelId"
    :for="labelFor"
     >
     <slot name="label" :label="currentLabel">{{ currentLabel }}</slot>
    </component>
        <div class="ym-form-item__content">
            <slot :validate="validate"></slot>
            <div class="ym-form-item__error-msg" v-if="validateStatus === 'error'">
                <template v-if="ctx?.showMessage && showMessage">
                    <slot name="error" :error="errMsg">{{ errMsg }}</slot>
                </template>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import './style';

.ym-form-item {
    --ym-form-item-label-width: v-bind(normalizeLabelWidth) !important; /* 设置label的宽度 */
}
</style>