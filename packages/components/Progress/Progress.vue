<script setup lang="ts">
import { endsWith, isFunction, isString } from 'lodash-es';
import { nextTick, watch } from 'vue';
import { computed, ref } from 'vue';
import type  { ProgressProps } from './type';
import { typeIconMap  } from '@ym-UI/utils'
import YmIcon from '../Icon'


const props = withDefaults(defineProps<ProgressProps>(),{
    percentage: 10,
    width: '200px',
    status: 'primary',
    showText: true,
    format: (percentage: number) => `${percentage}%`,
    textInside: false,
    strokeWidth: 6
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

const outRef = ref<HTMLElement | null>(null)

const innerWidth = ref(0)

watch(() => props.percentage, (val) => {
    innerWidth.value = val
},
{
    immediate: true
})

watch(() => props.width, () => {
    nextTick(() => {
        if(outRef.value) {
            innerWidth.value = (outRef.value.offsetWidth / 100) * props.percentage
        }
    })
}
)

const isInnerText = computed(() => {
    if(!props.showText) return false
    if(props.textInside && props.strokeWidth >= 20) return true
    return false
})




</script>
<template>
    <div 
    class="ym-progress"
    :style="{
        width: progressWidth ,
    }"
    :class="{
        [`is-${status}`]: status
    }"
    >
        <div class="ym-progress-bar">
            <div 
            ref="outRef"
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
                    height: strokeWidth + 'px'
                }"
                >
                    <div class="ym-progress-bar__innerText" v-if="showText && isInnerText">
                        <span>{{ progressText }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="ym-progress-text"
            v-if="showText && !isInnerText"
        >
            <span v-if="!status || status === 'primary'">{{  progressText }}</span>
            <ym-icon class="ym-progress-icon" v-else :icon="typeIconMap.get(status)!"></ym-icon>
        </div>
    </div>
  </template>


<style scoped>
@import './style';
</style>