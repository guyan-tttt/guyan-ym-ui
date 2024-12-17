
<script setup lang="ts">
import { isNumber, isString } from 'lodash-es';
import { computed, ref } from 'vue';
import type { AvatarEmits, AvatarProps } from './type'
import { debugWarn } from '@ym-UI/utils';
import YmIcon from '../Icon';


defineOptions({
    name: "YmAvatar"
})

const props = withDefaults(defineProps<AvatarProps>(),{
    size: "medium",
    shape: "circle",
    fit: "fill"
})

const emits = defineEmits<AvatarEmits>()


const isError = ref<boolean>(false)

const handleError = (err: Event) => {
    console.log('sa');
    
    isError.value = true
    emits('error', err)
}

const fitStyle = computed(() => {
    return {
        objectFit: props.fit
    }
})

const slots  = defineSlots()

const imageSrc = computed(() => {
    console.log(props.src);
    if(props.icon || slots.default ) return ""
    if(!isString(props.src)) {
        debugWarn('Avatar', 'src must be a string')
        return ""
    }
    return props.src
})
</script>
<template>
    <span 
    class="ym-avatar"
    :class="{
        [`is-${size}`]: !isNumber(size),
        [`is-${shape}`]: true
    }"
    :style="{
        width: isNumber(size) ? props.size+ 'px' :  void 0,
        height: isNumber(size) ?  props.size + 'px' : void 0,
        fontSize: isNumber(size) ? (props.size as number / 2) + 'px' : void 0
    }"
    >
        <img 
        v-if="imageSrc && !isError"
        :src="imageSrc" 
        :alt="alt"
        :style="fitStyle"
        @error="handleError"
        >
        <ym-icon 
        v-else-if="icon" 
        :icon="icon" 
        color="#fff"
        ></ym-icon>
        <slot v-else></slot>
    </span>
</template>

<style scoped>
@import './style';

</style>