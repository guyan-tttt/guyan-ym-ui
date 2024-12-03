<script setup lang="ts">
import { ref , computed,watch,useAttrs, shallowRef,nextTick} from 'vue';
import type {  InputInstance , InputProps, InputEmits } from './type'
import { useFocusController , useId} from '@ym-UI/hooks'
import Icon from '../Icon/Icon.vue'
import { each, noop } from 'lodash-es';
import { useFormItem } from '../Form';
import { debugWarn } from '@ym-UI/utils';

//  组件声明
defineOptions({
    name: "YmInput",
    inheritAttrs: false // 关闭默认继承属性
})

// 表单组件上下文
const { formItem } = useFormItem()

// props
const props  = withDefaults(defineProps<InputProps>(), {
    type: "text", // 输入框类型
    autocomplete: "off", // 自动完成
})

 // emits
const emit = defineEmits<InputEmits>()

// 输入框实例
const inputRef = shallowRef<HTMLInputElement>()
const textareaRef = shallowRef<HTMLTextAreaElement>()


// 密码框显示隐藏
const passwordVisible = ref(false)

// 输入框值
const innerValue = ref(props.modelValue) 

// 导出的实例
const _ref = computed(() => {
    return textareaRef.value ? textareaRef.value : inputRef.value
})

// 是否禁用
const isDisabled = computed(() => {
    return props.disabled
})

// 属性
const attrs = useAttrs()

// 显示清空按钮
const showClear = computed(() => {
    return props.clearable && !!innerValue.value && !isDisabled.value && isFocused.value
})

// 聚焦
const { wrapperRef, isFocused, handlerBlur, handlerFocus } = useFocusController(_ref, {
    afterBlur: () => {
        // form校验
        formItem?.validate('blur').catch((err) => debugWarn(err))
    }
})

const showPwdArea = computed(() => {
    return props.type === "password" && props.showPassword && !isDisabled.value && !!innerValue.value
})

const clear:InputInstance["clear"] = function() {
  innerValue.value = ""
  each(['input','change','update:modelValue'],(e) => {
    emit(e as any, innerValue.value)
  })
  emit("clear")
  // TODO： form校验
  formItem?.clearValidate()
}

const focus:InputInstance["focus"] = async function() {
  await nextTick()
  _ref.value?.focus()
}
 
const blur:InputInstance["blur"] = function() {
  _ref.value?.blur()
}

const select:InputInstance["select"] = function() {
    _ref.value?.select()
}

const handleInput = function() {
emit("input", innerValue.value)
emit("update:modelValue", innerValue.value)
}

const togglePwdVisible = function() {
  passwordVisible.value = !passwordVisible.value
}

const handleChange = function() {
emit("change", innerValue.value)
}

watch(
  () => props.modelValue,
  (val) => {
    innerValue.value = val
    //TODO: 表单校验的触发
    formItem?.validate("change").catch((err) => debugWarn(err))
  }
)

// 实例
defineExpose<InputInstance>({
    ref: _ref,
    clear: clear,
    focus,
    blur,
    select
})

const inputId = useId("input")


</script>

<template>
    <div
    class="ym-input"
    :class="{
      [`ym-input--${type}`]: type,
      [`ym-input--${size}`]: size,
      'is-disabled': isDisabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocused,
    }"
    @keydown="$emit('keydown', $event)"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="ym-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="ym-input__wrapper" ref="wrapperRef">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="ym-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="ym-input__inner"
          ref="inputRef"
          :id="inputId"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="isDisabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          v-bind="attrs"
          @input="handleInput"
          @change="handleChange"
          @focus="handlerFocus"
          @blur="handlerBlur"

        />
        <!-- suffix slot -->
        <span
          v-if="$slots.suffix || showClear || showPwdArea"
          class="ym-input__suffix"
        >
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="ym-input__clear"
            @click="clear"
            @mousedown.prevent="noop"
          />
          <Icon
            icon="eye"
            v-if="showPwdArea && passwordVisible"
            class="ym-input__password"
            @click="togglePwdVisible"
          />
          <Icon
            icon="eye-slash"
            v-if="showPwdArea && !passwordVisible"
            class="ym-input__password"
            @click="togglePwdVisible"
          />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="ym-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        class="ym-textarea__wrapper"
        ref="textareaRef"
        :id="inputId"
        :disabled="isDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-bind="attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handlerFocus"
        @blur="handlerBlur"
      ></textarea>
    </template>
  </div>
</template>



<style scoped>
@import './style';
</style>