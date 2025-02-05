<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { YmOverlay } from 'guyan-ym-ui'
import { isFunction } from 'lodash-es';

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

interface DrawerProps {
  modelValue: boolean
  position?: DrawerPosition
  width?: string
  height?: string
  closeOnClickOverlay?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  appendTo?: string // 挂载节点
  header?: boolean // 是否显示头部
  footer?: boolean // 是否显示底部
  beforeClose?:(done:() => void) => void // 关闭前的回调
  closeIcon?: string // 关闭图标
  modal?: boolean // 是否显示遮罩
  modalClass?: string // 遮罩样式
  headerClass?: string // 头部样式
  bodyClass?: string // 内容区样式
  footerClass?: string // 底部样式
  zIndex?: number // 层级
}

interface DrawerEmits {
  (e:'update:modelValue',value:boolean):void
  (e:"opened"):void
  (e:"closed"):void
  (e: "open"):void
  (e: "close"):void
}

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
  appendTo: 'body'
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
watch(() => props.modelValue, (val) => {
    console.log(val)
  if (val && props.closeOnPressEscape) {
    window.addEventListener('keydown', handleKeydown)
  } else {
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

</script>

<template>

  <teleport :to="appendTo">
    <transition name="ym-overlay-fade">
      <ym-overlay
        :mask="modal" 
        :mask-class="modalClass"
        :z-index="zIndex"
        v-if="modelValue"
        @click="closeOnClickOverlay && handleClose()"
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
        v-if="modelValue"


        class="ym-drawer"
        :style="drawerStyle"
       :class="{
          [position]:true,
          [`${position}-active`]:isActive
       }"
        role="dialog"
      >
        <header v-if="header && $slots.header" class="ym-drawer__header">
          <slot name="header"></slot>
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
/* 遮罩动画 */
.ym-overlay-fade-enter-active,
.ym-overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.ym-overlay-fade-enter-from,
.ym-overlay-fade-leave-to {
  opacity: 0;
}

/* 抽屉通用样式 */
.ym-drawer {
  --ym-drawer-bg-color: var(--ym-color-white);
  --ym-drawer-header-padding: 16px;
  --ym-drawer-body-padding: 16px;
  --ym-drawer-footer-padding: 16px;
  --ym-drawer-border-color: var(--ym-border-color-light);
  --ym-drawer-box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  --ym-drawer-title-font-size: 18px;
  --ym-drawer-title-color: var(--ym-text-color-primary);
  --ym-drawer-close-size: 24px;
  --ym-drawer-close-color: var(--ym-text-color-regular);
  --ym-drawer-close-hover-color: var(--ym-color-primary);
  --ym-drawer-transition-duration: 0.3s;
  --ym-drawer-z-index: 2001;
  --ym-drawer-border:1px solid #eee;
  position: fixed;
  background: var(--ym-drawer-bg-color);
  box-shadow:  var( --ym-drawer-box-shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all .5s;
  /* 防止内容溢出视口 */
  max-height: 100vh;
  max-width: 100vw;

}

/* 左侧抽屉 */
.ym-drawer.left {
  top: 0;
  bottom: 0;
  left: 0;
}
.ym-drawer.left-active{
  left: -100%;
}

/* 右侧抽屉 */
.ym-drawer.right {

  top: 0;
  right:0;
  bottom: 0;
}
.ym-drawer.right-active{
  right: -100%;
}



/* 顶部抽屉 */
.ym-drawer.top {
 top: 0;
 left: 0;
 right: 0;
}
.ym-drawer.top-active{
  top: -100%;
}

/* 底部抽屉 */
.ym-drawer.bottom {
  bottom: 0;
  left: 0;
  right: 0;
}
.ym-drawer.bottom-active{
  bottom: -100%;
}




/* 头部样式 */
.ym-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ym-drawer-header-padding);
  border-bottom: var(--ym-drawer-border);
}

.ym-drawer__close {
  font-size: var(--ym-drawer-close-size);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 8px;
  transition: color 0.3s;

  &:hover {
    color: var(--ym-drawer-close-hover-color);
  }
}

.ym-drawer__body {
  flex: 1;
  padding: var(--ym-drawer-body-padding);
  overflow: auto;
  min-height: 0; /* 修复flex容器滚动问题 */
}

/* Footer容器样式 */
.ym-drawer__footer {
  padding: var(--ym-drawer-footer-padding);
  border-top: var(--ym-drawer-border);
  background: var(--ym-drawer-bg-color);
  display: flex;
  justify-content: start;
  gap: 8px;
  flex-shrink: 0; /* 防止压缩 */
}



/* 响应式处理 */
@media (max-width: 768px) {
  .ym-drawer__footer {
    flex-wrap: wrap;
    justify-content: center;
    
    > * {
      flex: 1;
      min-width: 45%;
    }
  }
}
</style>
