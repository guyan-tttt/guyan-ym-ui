
<script setup lang="ts">
import { isNumber } from 'lodash-es';
import { computed, ref } from 'vue';



type AvatarSize = 'small' | 'medium' | 'large'

type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

interface AvatarProps {
    src?: string
    icon?: string
    size?: number | AvatarSize
    shape?: 'circle' | 'square'
    alt?: string
    fit?: AvatarFit
}

interface AvatarEmits {
    (e: 'error', err: Event): void
}

const props = withDefaults(defineProps<AvatarProps>(),{
    size: "medium",
    shape: "circle",
    fit: "fill"
})

const emits = defineEmits<AvatarEmits>()



const isError = ref<boolean>(false)

const handleError = (err: Event) => {
    isError.value = true
    emits('error', err)
}

const fitStyle = computed(() => {
    return {
        objectFit: props.fit
    }
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
        v-if="src && !isError"
        :src="src" 
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
.ym-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #c0c4cc;
}
.ym-avatar.is-small {
    width: 32px;
    height: 32px;
    font-size: 16px;
}
.ym-avatar.is-medium {
    width: 40px;
    height: 40px;
    font-size: 20px;
}
.ym-avatar.is-large {
    width: 48px;
    height: 48px;
    font-size: 24px;
}

.ym-avatar.is-circle {
    border-radius: 50%;
}
.ym-avatar.is-square {
    border-radius: 10px;
}
.ym-avatar img {
    display: block;
    width: 100%;
    height: 100%;
}

</style>