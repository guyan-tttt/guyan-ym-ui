<script setup lang="ts">
import { endsWith, isFunction, isString } from 'lodash-es';
import { watch } from 'vue';
import { computed, ref } from 'vue';
import type  { ProgressProps } from './type';
import { typeIconMap  } from '@ym-UI/utils'
import YmIcon from '../Icon'
import { useComputedStyle } from '@ym-UI/hooks'


defineOptions({
    name: 'YmProgress',
    inheritAttrs: false
})

const props = withDefaults(defineProps<ProgressProps>(),{
    percentage: 10,
    width: '200px',
    status: "primary",
    showText: true,
    format: (percentage: number) => `${percentage}%`,
    textInside: false,
    strokeWidth: 6,
    striped: false,
    stripedFlow: false,
    duration: 6,
    type: "line"
})

const progressText = computed(() => {
    if(props.format && isFunction(props.format)) {
        return props.format(props.percentage)
    }
    return `${props.percentage}%`
})

const progressWidth = computed(() => {
    if(!isString(props.width)) return props.width + 'px'
    return endsWith(props.width, 'px') ? props.width : props.width + 'px'
})


const innerWidth = ref(0)

watch(() => props.percentage, (val) => {
    innerWidth.value = val
},
{
    immediate: true
})


const isInnerText = computed(() => {
    // if(!props.showText) return false
    if(props.textInside && props.strokeWidth >= 20) return true
    return false
})

const stroke  = computed(() => {
    // 如果有传入的color，则使用传入的color
    if(props.color) return props.color
    
    return useComputedStyle(document.documentElement, `--ym-color-${props.status}`) ?? "#409eff"
})




</script>
<template>
    <div 
    class="ym-progress"
    :style="{
        width: progressWidth ,
    }"
    :class="{
        [`is-${status}`]: status,
        [`ym-progress-${type}`]: type
    }"
    v-if="type === 'line'"
    >
        <div class="ym-progress-bar">
            <div 
            class="ym-progress-bar__outer"
            :style="{
                height: strokeWidth + 'px'
            }"
            >
                <div 
                class="ym-progress-bar__inner"
                :style="{
                    backgroundColor: props.color,
                    width: innerWidth + '%',
                    height: strokeWidth + 'px',
                    animationDuration: duration + 's'
                }"
                :class="{
                    'is-striped': striped,
                    'isStripedFlow': striped && stripedFlow
                }"
                >
                    <div class="ym-progress-bar__innerText" v-if="showText && isInnerText">
                        <slot v-if="$slots.default" :percentage="percentage"></slot>
                        <span v-else>{{ progressText }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="ym-progress-text"
            v-if="showText && !isInnerText"
        >   
            <slot v-if="$slots.default" :percentage="percentage"></slot>
            <span v-else-if="!status || status === 'primary'">{{  progressText }}</span>
            <ym-icon class="ym-progress-icon" v-else :icon="typeIconMap.get(status)!"></ym-icon>
        </div>
    </div>
    <div class="ym-progress" v-else 
        :class="{
             [`ym-progress-${type}`]: type,
             [`is-${status}`]: status,
        }"
         :style="{
            width: progressWidth ,
        }"
    >
        <div class="ym-progress-circle">
            <svg viewBox="0 0 100 100"
                :style="{
                    width: progressWidth ,
                    height: progressWidth
                }"
            >
            <path class="ym-progress-circle__track" d="
                M 50 50
                m 0 -47
                a 47 47 0 1 1 0 94
                a 47 47 0 1 1 0 -94
                " stroke="#ebeef5" stroke-linecap="round" stroke-width="4.8" fill="none" style="stroke-dasharray: 300px, 300px; stroke-dashoffset: 0px;">
            </path>
            <path class="ym-progress-circle__path" d="
                M 50 50
                m 0 -47
                a 47 47 0 1 1 0 94
                a 47 47 0 1 1 0 -94
                " 
                :stroke="stroke"
                fill="none" opacity="1" stroke-linecap="round" stroke-width="4.8" style="stroke-dashoffset: 0px; transition: stroke-dasharray 0.6s, stroke 0.6s, opacity 0.6s;"
                :style="{
                    strokeDasharray: `${percentage * 3}px 300px`,
                }"
                >
            </path>
            </svg>
        </div>
        <div 
            class="ym-progress-text"
            v-if="showText && !isInnerText"
        >   
            <slot v-if="$slots.default" :percentage="percentage"></slot>
            <span v-else-if="!status || status === 'primary'">{{  progressText }}</span>
            <ym-icon class="ym-progress-icon" v-else :icon="typeIconMap.get(status) as any"></ym-icon>
        </div>
    </div>
  </template>


<style scoped>
@import './style';
</style>