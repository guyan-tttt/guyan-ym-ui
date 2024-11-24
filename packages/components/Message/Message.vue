<script setup lang="ts">
import type  { MessageProps , MessageComponentInstance} from './type'
import { computed, onMounted, ref, watch } from 'vue'
import { delay , bind, add} from 'lodash-es';
import { typeIconMap  , RenderVnode, addUnit} from '@ym-UI/utils'
import { useOffset , useEventListener} from '@ym-UI/hooks';
import YmIcon from '../Icon/Icon.vue'
import {  getLastBottomOffset } from './methods'
 
defineOptions({
    name: 'YmMessage'
})

const props = withDefaults(defineProps<MessageProps>(),{
    type: "info",
    duration: 3000,
    offset: 10,
    transitionName: "fade-up",
    showClose: true
})

const visible = ref<boolean>(false)
const messageRef = ref<HTMLDivElement>()


// 计算高度
const boxHeight = ref(0)

const { topOffset, bottomOffset } = useOffset({
  boxHeight,
  offset: props.offset,
  getLastBottomOffset: bind(getLastBottomOffset,props)
})

const iconName = computed(() => {
    return typeIconMap.get(props.type) ?? "circle-info"
})
const customStyle = computed(() => {
  return {
    top: addUnit(topOffset.value),
    zIndex: props.zIndex
  }
})


let timer:number

function startTimer() {
    if(props.duration === 0) return // duration为0时，不自动关闭
    timer = delay(close,props.duration)
}

function clearTimer() {
    clearTimeout(timer)
}

function close() {
    visible.value = false
}

onMounted(() => {
    visible.value = true
    startTimer()
})
watch(visible,(val) => {
  if(!val) boxHeight.value = -props.offset // 关闭时，高度为负值，退出时消息框移除视口

})

// 监听键盘事件
useEventListener(document, "keydown",(e:Event) => {
  const { code } = e as KeyboardEvent
  if(code === "Escape") {
    close()
  }
})

defineExpose<MessageComponentInstance>({
    close,
    bottomOffset 
})
</script>

<template>
    <Transition
    :name="transitionName"
    @enter="boxHeight = messageRef!.getBoundingClientRect().height"
    @after-leave="!visible && onDestory()" 
    >
    <div
      ref="messageRef"
      class="ym-message"
      :class="{
        [`ym-message--${type}`]: type,
        'is-close': showClose,
        'text-center': center,
      }"
      :style="customStyle"
      v-show="visible"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <ym-icon class="ym-message__icon" :icon="iconName" />
      <div class="ym-message__content">
        <slot>
          <render-vnode v-if="message" :vNode="message" />
        </slot>
      </div>
      <div class="ym-message__close" v-if="showClose">
        <ym-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
    </Transition>
</template>

<style scoped>
@import './style.css';
</style>