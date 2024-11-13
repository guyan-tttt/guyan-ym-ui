<script setup lang="ts">
import { defineComponent } from 'vue';
import type  { IconProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import { omit } from 'lodash-es'; // omit可以取出对象上的某些属性然后将对象返回（不会修改原对象）

defineComponent({
    name:"YmIcon",
    inheritAttrs: false, // 关闭透传属性，关闭后在组件上的属性不会自动绑定给组件组件的根元素
})

const props =defineProps<IconProps>()

const filterProps = computed(() => omit(props,['type','color']))

const customStyle = computed(() =>  ({color: props.color ?? void 0}))

</script>

<template>
    <i
        class="ym-icon"
        :class="{[`ym-icon-${props.type}`]: type}"
        :style="customStyle"
        v-bind="$attrs"
    >
       <font-awesome-icon  v-bind="filterProps"></font-awesome-icon>
    </i>
</template>


<style>
@import './style.css';
</style>