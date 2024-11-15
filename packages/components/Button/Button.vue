<script setup lang="ts">
import { throttle } from 'lodash-es';
import type { ButtonProps ,ButtonEmits, ButtonInstance } from './type';
import { ref , computed , inject} from 'vue'
import  YmIcon from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constant';

defineOptions({
    name: "YmButton",
    inheritAttrs: false
})

const props = withDefaults(defineProps<ButtonProps>(),{
    type: "default",
    size: "middle",
    disabled: false,
    loading: false,
    circle: false,
    plain: false,
    round: false,
    corrugation: false,
    nativeType: "button",
    tag: "button",
    throttleDuration: 500,
    useThrottle: true
})
const slot = defineSlots()
const emits = defineEmits<ButtonEmits>()

const buttonRef = ref<HTMLButtonElement>()

const buttonClick = (e:MouseEvent) => emits("click",e)

const buttonClickThrottle = throttle(buttonClick, props.throttleDuration)

const iconStyle = computed(() => ({marginRight: slot.default  ? "6px" : "0px"}))

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)

const size = computed(() => ctx?.size ?? props.size ?? "")
const type = computed(() => ctx?.type ?? props.type ?? "")
const disabled = computed(() => ctx?.disabled ??  props.disabled   ?? false)

defineExpose<ButtonInstance>({
    ref: buttonRef
})

console.log("dsad");


</script>

<template>
   <component
   :is="tag"
   ref="buttonRef"
   :autofocus="autofocus"
   class="ym-button"
   :type="tag === 'button' ? nativeType : void 0"
   :disabled="disabled || loading ? true : void 0"
   :class="{
    [`ym-button--${type}`]: type,
    [`ym-button--${size}`]: size,
    'is-disabled': disabled,
    'is-plain': plain,
    'is-loading': loading,
    'is-circle': circle,
    'is-round':round,
    'is-corrugation': corrugation
    }"
    @click="(e:MouseEvent) => useThrottle ? buttonClickThrottle(e) : buttonClick(e)"
   >
    <template v-if="loading">
        <slot name="loading">
            <ym-icon 
            class="loading-icon"
            :icon="loadingIcon ?? 'spinner'"
            spin
            :style="iconStyle"
            size="1x"
            />
        </slot>
    </template>
    <ym-icon 
        v-if="icon && !loading"
        :icon="icon"
        :style="iconStyle" 
        size="1x" />
    <slot></slot>
   </component>
</template>
<style scoped>
@import "./style.css";
</style>