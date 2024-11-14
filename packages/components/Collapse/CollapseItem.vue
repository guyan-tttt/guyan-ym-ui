<script setup lang="ts">
import type { CollapseItemProps  } from './type'
import { inject, computed  } from 'vue';
import {  COLLAPSE_CTX_KEY } from './constant'
import YmIcon from '../Icon/Icon.vue';

defineOptions({
    name: "YmCollapseItem"
})
const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0)

// 组件是否激活
const isActive = computed(() => {
    return ctx?.activeNames.value?.includes(props.name)
})

// 点击事件
function handleClick() {
    // 判断是否禁用了组件
    if(props.disabled) return 

    ctx?.handleItemClick(props.name)
}

</script>

<template>
    <div
        class="ym-collapse-item"
        :class="{
        'is-disabled': disabled,
        }"
    >
        <div
        class="ym-collapse-item__header"
        :id="`item-header-${name}`"
        :class="{
            'is-disabled': disabled,
            'is-active': isActive,
        }"
        @click="handleClick"
        >
        <span class="ym-collapse-item__title">
            <slot name="title">
            {{ title }}
            </slot>
        </span>
        <ym-icon icon="angle-right" class="header-angle" />
        </div>
        <!-- <transition name="slide" v-on="transitionEvents"> -->
        <div class="ym-collapse-item__wapper" v-show="isActive">
            <div class="ym-collapse-item__content" :id="`item-content-${name}`">
            <slot></slot>
            </div>
        </div>
        <!-- </transition> -->
    </div>
</template>


<style scoped>

</style>