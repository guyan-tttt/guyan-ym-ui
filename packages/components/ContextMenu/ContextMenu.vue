<template>
    <div class="content-menu" ref="contextMenuRef">
      <slot />
      <Teleport to="body">
        <Transition @enter="handleEnter">
          <div class="menu" ref="menuRef" v-if="contextInfo.visible" :style="{ top: contextInfo.y + 'px', left: contextInfo.x + 'px' }">
            <ul>
              <li v-for="item in props.options" :key="item.label" @click="item.handle">{{ item.label }}</li>
            </ul>
          </div>
        </Transition>
      </Teleport>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch, defineProps } from "vue"
  import { useContextMenu } from "./useContextMenu"
  
  defineOptions({
    name: "YmContextMenu"
  })
  const props = defineProps<{
    options: {
      label: string
      handle: () => void
    }[]
  }>()
  
  const contextMenuRef = ref<any>()
  const menuRef = ref<any>()
  const contextInfo = ref({
    x: 0,
    y: 0,
    visible: false
  })
  
  const menuHeight = ref(0)
  
  const handleEnter = (el: any) => {
    el.style.height = "auto"
    menuHeight.value = el.clientHeight
    el.style.height = "0"
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.height = menuHeight.value + "px"
      })
    })
  }
  // 计算鼠标是否越界
  const isOut = (x: number, y: number, menu: any) => {
    const position = {
      x,
      y
    }
    if (x + menu.clientWidth > window.innerWidth) {
      position.x = window.innerWidth - 200
    }
    if (y + menu.clientHeight > window.innerHeight) {
      position.y = window.innerHeight - 200
    }
    return position
  }
  
  onMounted(() => {
    const { x, y, visible } = useContextMenu(contextMenuRef.value)
    contextInfo.value.x = x.value
    contextInfo.value.y = y.value
    contextInfo.value.visible = visible.value
    watch(visible, () => {
      contextInfo.value.visible = visible.value
      const position = isOut(x.value, y.value, {
        clientWidth: 150,
        clientHeight: menuHeight.value || 150
      })
      contextInfo.value.x = position.x
      contextInfo.value.y = position.y
    })
    watch(x, () => {
      contextInfo.value.visible = false
      setTimeout(() => {
        contextInfo.value.visible = visible.value
        const position = isOut(x.value, y.value, {
          clientWidth: 150,
          clientHeight: menuHeight.value || 150
        })
        contextInfo.value.x = position.x
        contextInfo.value.y = position.y
      }, 0)
    })
  })
  </script>
  
  <style scoped >
    @import './style.css';
  </style>
  