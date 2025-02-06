<script setup lang="ts">
import { computed,  ref, watch } from 'vue'
import { YmOverlay } from '../Overlay'
import { YmIcon } from '../Icon'
import { isFunction } from 'lodash-es';
import type { DrawerEmits, DrawerProps } from './type';

defineOptions({
  name: "YmDrawer",
  inheritAttrs: false
})

// 默认值
const props = withDefaults(defineProps<DrawerProps>(), {
  position: 'right',
  width: '30%',
  height: '40%',
  closeOnClickOverlay: true,
  closeOnPressEscape: true,
  showClose: true,
  zIndex: 2000,
  modal: true,
  header: true,
  footer: true,
  closeIcon: 'xmark',
  modalClass: '',
  appendTo: 'body',
  
})


const emit = defineEmits<DrawerEmits>()

// 是否激活动画效果
const isActive = ref<boolean>(true)

// 抽屉样式
const drawerStyle = computed(() => {
  const isVertical = ['top', 'bottom'].includes(props.position)
  return {
    [isVertical ? 'height' : 'width']: isVertical ? props.width : props.width,
    [isVertical ? 'width' : 'height']: isVertical ? '100%' : '100%',
    zIndex: props.zIndex + 1
  }
})

const handleClose = async() => {
if(props.beforeClose && isFunction(props.beforeClose)) {
  const done = async() => {
    await handleLeave()
    requestAnimationFrame(() => {
      emit('update:modelValue', false)
    })
  }
  props.beforeClose(done)
} else {
  await handleLeave()
  requestAnimationFrame(() => {
    emit('update:modelValue', false)
  })
}
}

// ESC键关闭支持
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    handleClose()
  }
}

// 监听modelValue,
watch(() => props.modelValue, async(val) => {
  if(val) {
    handleEnter()
    visible.value = val
  }

  if (val && props.closeOnPressEscape) {
    console.log("监听键盘事件");
    window.addEventListener('keydown', handleKeydown)
  } else {
    await requestAnimationFrame(() => {
    isActive.value = true
    requestAnimationFrame(() => {
      visible.value = val
    })
  })
    window.removeEventListener('keydown', handleKeydown)
  }
})

const handleEnter = () => {
requestAnimationFrame(() => {
  isActive.value = false
})
}

const handleLeave = async() => {
  await requestAnimationFrame(() => {
  isActive.value = true
})
}

// 点击遮罩层
const handleClickOverlay = () => {
    if(props.closeOnClickOverlay) {
        console.log("点击遮罩层");
        handleClose()
    }
}

const visible = ref(props.modelValue)

</script>

<template>
  <teleport :to="appendTo">
    <transition name="ym-overlay-fade">
      <ym-overlay
        :mask="modal" 
        :mask-class="modalClass"
        :z-index="zIndex"
        v-if="visible"
        @click="handleClickOverlay"
      />
    </transition>
    <transition
    @enter="handleEnter"
    @leave="handleLeave"
    @before-enter="$emit('open')"
    @before-leave="$emit('close')"
    @after-enter="$emit('opened')"
    @after-leave="$emit('closed')"
     >
      <div 
        v-if="visible"
        class="ym-drawer"
        :style="drawerStyle"
       :class="{
          [position]:true,
          [`${position}-active`]:isActive
       }"
        role="dialog"
      >
        <header v-if="header " class="ym-drawer__header">
          <div class="ym-drawer__header__content" >
            <slot name="header"  v-if="$slots.header || props.title">
              <span>{{ props.title }}</span>
            </slot>
          </div>
          <button 
            v-if="showClose"
            class="ym-drawer__close"
            @click="handleClose"
            aria-label="关闭抽屉"
          >
          <ym-icon color="#000"  :icon="props.closeIcon"></ym-icon>
          </button>
        </header>
        <div class="ym-drawer__body">
          <slot></slot>
        </div>
        <footer v-if="footer && $slots.footer" class="ym-drawer__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
@import './style.css';
</style>
