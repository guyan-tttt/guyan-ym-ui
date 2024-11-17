<script setup lang="ts">
import  {ref, withDefaults , type Ref, computed, watchEffect , watch, onUnmounted} from 'vue'
import type  { TooltipProps ,TooltipEmits,TooltipInstance} from './type'
import { debounce, type DebouncedFunc,bind , isNil } from 'lodash-es'
import { createPopper, type Instance  } from '@popperjs/core'
import { useClickOutside } from '@ym-UI/hooks'
import useEventsToTriggerNode from './useEventsToTriggerNode'


interface _TooltipProps extends TooltipProps {
    virtualRef?: HTMLElement | void,
    virtualTriggering?: boolean
}
defineOptions({
    name: "YmTooltip"
})

const props = withDefaults(defineProps<_TooltipProps>(),{
    placement:'top', // top bottom left right
    trigger:'hover',
    transition: "fade",
    showTimeout: 0,
    hideTimeout: 200
})

const emits = defineEmits<TooltipEmits>()

const visible = ref<boolean>(false)

const events: Ref<Record<string,EventListener>> = ref({})
const outerEvents: Ref<Record<string,EventListener>> = ref({})
const dropdownEvents: Ref<Record<string,EventListener>> = ref({})


const containerNode = ref<HTMLElement | null>(null)
const _triggerNode = ref<HTMLElement | null>(null)
const popperNode = ref<HTMLElement | null>(null)
const triggerNode = computed(() => {
    if(props.virtualTriggering) {
        return (props.virtualRef as HTMLElement) ?? _triggerNode.value as HTMLElement
    } 
    return _triggerNode.value as HTMLElement
})
const popperOptions  = computed(() => {
    return {
    placement: props.placement,
    modifiers: [
        {
        name: "offset",
        options: {
            offset: [0, 9],
        },
        },
    ],
    ...props.popperOptions,
    }
})
const openDelay = computed(() => props.trigger === 'hover' ? props.showTimeout : 0)
const closeDelay = computed(() => props.trigger === 'hover' ? props.hideTimeout : 0)

let  openDebounce:DebouncedFunc<() => void> | void
let  closeDebounce:DebouncedFunc<() => void> | void

function openFinal() {
    closeDebounce?.cancel(); // 取消关闭的定时器
    openDebounce?.()
}
function closeFinal() {
    openDebounce?.cancel(); // 取消打开的定时器
    closeDebounce?.()
}
function togglePopper() {
    visible.value ? closeFinal() : openFinal()
}


function setVisible(value: boolean) {
    if(props.disabled) return 
    visible.value = value
    emits("visible-change", value)
}



watchEffect(() => {
    if(!props.manual) {
        attachEvents()
    }
    openDebounce = debounce(bind(setVisible, null,true),openDelay.value)
    closeDebounce = debounce(bind(setVisible, null,false),closeDelay.value)
})


function attachEvents() {
    if(props.disabled || props.manual) return
    if(props.trigger === "hover") {
        events.value["mouseenter"] = openFinal 
        outerEvents.value["mouseleave"] = closeFinal
        dropdownEvents.value["mouseenter"] = openFinal
        return
    }
    if(props.trigger === 'click') {
        events.value["click"] = togglePopper
        return 
    }
    if(props.trigger === "contextmenu") {
        events.value["contextmenu"] = (e) => {
            e.preventDefault()
            openFinal()
        }
        return 
    } 
}

let popperInstance: Instance | null

function destroyPopperInstance() {
    if(isNil(popperInstance)) return 
    popperInstance.destroy()
    popperInstance = null
}

function resetEvents() {
    events.value = {}
    outerEvents.value = {}
    dropdownEvents.value = {}
    attachEvents()
}

const show: TooltipInstance["show"] = openFinal
const hide: TooltipInstance["hide"] = function () {
    openDebounce?.cancel()
    setVisible(false)
}

defineExpose<TooltipInstance>({
    show,
    hide
})

watch(visible,(val) => {
    if(!val) return 
    if(_triggerNode.value && popperNode.value) {
        popperInstance = createPopper(_triggerNode.value,popperNode.value, popperOptions.value)
    }
},{
    flush: "post", // 确保在 DOM 更新后执行
})

watch(() => props.manual,(isManual) => {
    if(isManual) {
        resetEvents()
        return
    }
    attachEvents()
})

watch(() => props.trigger,(val,oldVal) => {
    if(oldVal === val) return 
    openDebounce?.cancel()
    visible.value = false
    emits("visible-change", false)
    resetEvents()
})
onUnmounted(() => {
    destroyPopperInstance()
})

useClickOutside(containerNode, () => {
    emits("click-outside")
    if(props.trigger === 'hover' || props.manual ) return 
    visible.value && closeFinal()
})

useEventsToTriggerNode(props, triggerNode, events, () => {
    openDebounce?.cancel()
    setVisible(false)
})

</script>
<template>
    <div class="ym-tooltip" ref="containerNode" v-on="outerEvents">
    <div
      class="ym-tooltip__trigger"
      ref="_triggerNode"
      v-on="events"
      v-if="!virtualTriggering"
    >
      <slot></slot>
    </div>
    <slot name="default" v-else></slot>

    <transition :name="transition" @after-leave="destroyPopperInstance">
      <div
        class="ym-tooltip__popper"
        ref="popperNode"
        v-on="dropdownEvents"
        v-if="visible"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>



<style scoped>
@import './style.css';
</style>