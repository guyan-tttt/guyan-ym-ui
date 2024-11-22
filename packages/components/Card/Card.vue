<script setup lang="ts">
import type { CardProps } from './type'

defineOptions({
    name: 'YmCard'
})

const props = withDefaults(defineProps<CardProps>(),{
    shadow: "always"
})

</script>

<template>
    <div class="ym-card"
        :class="{
            [`is-${shadow}-shadow`] : shadow
        }"
    >
        <div class="ym-card__header" v-if="$slots.header || props.header">
            {{ props.header ? props.header : ''}}
            <slot name="header" v-if="!props.header"></slot>
        </div>
        <div class="ym-card__content" :class="props.contentClass" :style="props.contentStyle">
            {{props.content ? props.content : ''}}
            <slot name="default" v-if="!props.content"></slot>
        </div>
        <div class="ym-card__footer" v-if="$slots.footer || props.footer">
            {{ props.footer ? props.footer : ''}}
            <slot name="footer" v-if="!props.footer"></slot>
        </div>
    </div>
</template>



<style scoped>
@import './style';
</style>