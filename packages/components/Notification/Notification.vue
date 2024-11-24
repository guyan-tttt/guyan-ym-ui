<script setup lang="ts">
import type { NotificationProps, NotificationComponentInstance } from "./type";
import { ref, computed, onMounted } from "vue";
import { getLastBottomOffset } from "./methods";
import { bind, delay, isString } from "lodash-es";
import { RenderVnode, typeIconMap } from "@ym-UI/utils";
import { useOffset } from "@ym-UI/hooks";

import YmIcon from "../Icon/Icon.vue";


defineOptions({
    name: "YmNotification"
})

const props = withDefaults(defineProps<NotificationProps>(),{
    type: 'info',
    duration: 3000,
    offset: 20,
    transitionName: "fade",
    showClose: true,
    position: "top-right",
})

const visible = ref(false);
const notifyRef = ref<HTMLDivElement>();

// 这个 div 的高度
const boxHeight = ref(0);

const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props),
  offset: props.offset,
  boxHeight,
});

const iconName = computed(() => {
  if (isString(props.icon)) return props.icon;
  return typeIconMap.get(props.type);
});

// const horizontalClass = computed(() =>
//   props.position.endsWith("right") ? "right" : "left"
// );

// const verticalProperty = computed(() =>
//   props.position.startsWith("top") ? "top" : "bottom"
// );

const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex,
}));

let timer: number;

function startTimer() {
  if (props.duration === 0) return;
  timer = delay(close, props.duration);
}

function clearTimer() {
  clearTimeout(timer);
}

function close() {
  visible.value = false;
  props?.onClose?.();
}

onMounted(() => {
  visible.value = true;
  startTimer();
});

defineExpose<NotificationComponentInstance>({
  close,
  bottomOffset,
});
</script>


<template>
    <Transition
    :name="`ym-notification-${transitionName}`"
    @after-leave="!visible && onDestory()"
    @enter="boxHeight = notifyRef!.getBoundingClientRect().height"
  >
    <div
      ref="notifyRef"
      class="ym-notification right"
      :class="{
        [`ym-notification--${type}`]: type,
        'show-close': showClose,
        
        // [horizontalClass]: true,
      }"
      :style="cssStyle"
      v-show="visible"
      role="alert"
      @click="onClick"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <ym-icon v-if="iconName" :icon="iconName" class="ym-notification__icon" />

      <div class="ym-notification__text">
        <div class="ym-notification__title">{{ title }}</div>
        <div class="ym-notification__content">
          <slot>
            <render-vnode v-if="message" :vNode="message" />
          </slot>
        </div>
      </div>
      <div class="ym-notification__close" v-if="showClose">
        <ym-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </Transition>
</template>


<style scoped>
@import './style.css'; 
</style>