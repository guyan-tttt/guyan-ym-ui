<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { SwitchProps, SwitchEmits, SwitchInstance } from './type'
import { useId } from '@ym-UI/hooks';

defineOptions({
    name: "YmSwitch",
    inheritAttrs: false
})

const props = withDefaults(defineProps<SwitchProps>(), {
    activeValue: true , // 激活时的值
    inactiveValue: false, // 未激活时的值
})

const emits  = defineEmits<SwitchEmits>()

const isDisabled = computed(() => props.disabled)

const innerValue = ref(props.modelValue) // 内部值
const inputRef = ref<HTMLInputElement | null>(null) // input元素
const checked = computed(() => innerValue.value === props.activeValue) // 是否激活

const inputId = useId() // input的id

const focus:SwitchInstance['focus'] = function () {
    inputRef.value?.focus()
}

const handleChange = () => {
    if(isDisabled.value) return // 禁用状态不处理

    const newValue = checked.value ? props.inactiveValue : props.activeValue
    innerValue.value = newValue
    emits('update:modelValue', newValue)
    emits('change', newValue)

}

onMounted(() => {
    inputRef.value!.checked = checked.value
})

watch(checked,(val) => {
    inputRef.value!.checked = val
    // TODO; form校验

})

defineExpose<SwitchInstance>({
    focus,
    checked
})
</script>

<template>
     <div
    class="ym-switch"
    :class="{
      [`ym-switch--${size}`]: size,
      'is-disabled': isDisabled,
      'is-checked': checked,
    }"
    @click="handleChange"
  >
    <input
      class="ym-switch__input"
      type="checkbox"
      role="switch"
      ref="inputRef"
      :id="inputId"
      :name="name"
      :disabled="isDisabled"
      :checked="checked"
      @keydown.enter="handleChange"
    />
    <div class="ym-switch__core">
      <div class="ym-switch__core-inner">
        <span
          v-if="activeText || inactiveText"
          class="ym-switch__core-inner-text"
        >
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="ym-switch__core-action"></div>
    </div>
  </div>
</template>



<style scoped>
@import './style';
</style>