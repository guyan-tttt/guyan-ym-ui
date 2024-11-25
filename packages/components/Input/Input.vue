<script setup lang="ts">
import { ref , computed,watch,useAttrs, shallowRef,nextTick} from 'vue';
import type {  InputInstance , InputProps, InputEmits } from './type'
import { useFocusController } from '@ym-UI/hooks'
import Icon from '../Icon/Icon.vue'
import { each, noop } from 'lodash-es';

//  组件声明
defineOptions({
    name: "YmInput",
    inheritAttrs: false // 关闭默认继承属性
})

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
const psaawordVisible = ref(false)

// 输入框值
const innerValue = ref() 

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
    }
})

const showPwdArea = computed(() => {
    return props.type === "password" && props.showPassword && !isDisabled.value && !!innerValue.value
})

// 实例
defineExpose<InputInstance>({
    ref: _ref,
})
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
          :type="showPassword ? (showPassword ? 'text' : 'password') : type"
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
            v-if="showPwdArea && showPassword"
            class="ym-input__password"
            @click="togglePasswordVisible"
          />
          <Icon
            icon="eye-slash"
            v-if="showPwdArea && !showPassword"
            class="ym-input__password"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="ym-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- textarea -->
    <!-- <template v-else>
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
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template> -->
  </div>
</template>



<style scoped>

</style>