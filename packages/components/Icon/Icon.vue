<script setup lang="ts">
import type  { IconProps ,IconInstance } from './type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import { omit } from 'lodash-es'; // omit可以取出对象上的某些属性然后将对象返回（不会修改原对象）
import { ref } from 'vue';

defineOptions({
    name: "YmIcon",
    inheritAttrs:false
})

const props =defineProps<IconProps>()

const filterProps = computed(() => omit(props,['type','color']))

const customStyle = computed(() =>  ({color: props.color ?? void 0}))

const iconRef = ref<HTMLButtonElement>()


defineExpose<IconInstance>({
    ref: iconRef
})
</script>

<template>
    <i
        ref="iconRef"
        class="ym-icon"
        :class="{[`ym-icon-${props.type}`]: type}"
        :style="customStyle"
        v-bind="$attrs"
    >
       <font-awesome-icon  v-bind="filterProps"></font-awesome-icon>
    </i>
</template>


<style scoped>
@import './style.css';
</style>