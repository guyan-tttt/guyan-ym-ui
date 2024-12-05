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
            <span v-if="!status || status === 'primary'">{{  progressText }}{{ isInnerText }}</span>
            <ym-icon class="ym-progress-icon" v-else :icon="typeIconMap.get(status)"></ym-icon>
        </div>
    </div>
  </template>

<script setup lang="ts">
import { endsWith, isFunction, isString } from 'lodash-es';
import { nextTick, watch } from 'vue';
import { computed, ref } from 'vue';


const typeIconMap = new Map([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
  ]);

interface ProgressProps {
    percentage: number;
    width?: number | string;
    color?: string
    status?: 'success' | 'primary' | 'warning' | 'danger';
    showText?: boolean;
    format?: (percentage: number) => string;
    textInside?: boolean
    strokeWidth?: number
}

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
const innerHeight = ref(props.strokeWidth)

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
    console.log(props.showText);
    if(props.textInside && props.strokeWidth >= 20) return true
    return false
})




</script>
  <style scoped>
  .ym-progress  {
    --ym-progress-bg-color: #efefef;
    --ym-progress-text-color: #606266;
    --ym-progress-line-height: 1;
    --ym-progress-font-size: 14px;

    --ym-progress-bar-inner-transition: width .6s ease;
    --ym-progress-bar-inner-border-radius: 100px;
    --ym-progress-bar-inner-line-height: 1;
    --ym-progress-bar-inner-white-space: nowrap;
    --primary: #409eff;
    --success: #67c23a;
    --warning: #e6a23c;
    --danger: #f56c6c;
    --ym-progress-bar-inner-bg-color: var(--primary);
  }
.ym-progress {
    position: relative;
    line-height: 1;
    display: flex;
    align-items: center;
}
.ym-progress-bar {
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
}
.ym-progress-text {
    font-size: 14px;
    color: #606266;
    margin-left: 5px;
    min-width: 50px;
    line-height: 1;
}
.ym-progress-bar__outer {
    border-radius: 100px;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    background-color: #ebeef5;
}
.ym-progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: var(--ym-progress-bar-inner-bg-color);
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;
    transition: width .6s ease;
    .ym-progress-bar__innerText {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
}

@each $val in primary, success, warning, info, danger {
    .ym-progress.is-$(val) {
        --ym-progress-bar-inner-bg-color: var(--$(val));
        .ym-progress-text .ym-progress-icon {
            color: var(--$(val));
        }
    }
}
</style>