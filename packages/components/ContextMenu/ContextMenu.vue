
<script setup lang="ts">
import { ref, onMounted, watch, defineProps, useSlots, withDefaults } from "vue"
import { useContextMenu } from "./useContextMenu"
import  type { ContextMenuProps, ContextMenuOptionsItem  } from './type'

defineOptions({
  name: "YmContextMenu"
})

const props =  withDefaults(defineProps<ContextMenuProps>(),{
  type: "info",
  customize: false
})

const solts  = useSlots()


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

const openMenu = (showVisible: boolean, x: number, y: number) => {
  
  contextInfo.value.visible = showVisible
  console.log(contextInfo.value.visible,'31313');
    const position = isOut(x, y, {
      clientWidth: 150,
      clientHeight: menuHeight.value || 150
    })
    contextInfo.value.x = position.x
    contextInfo.value.y = position.y
}



onMounted(() => {
  const { x, y, visible } = useContextMenu(contextMenuRef.value)

  contextInfo.value.x = x.value
  contextInfo.value.y = y.value
  contextInfo.value.visible = visible.value

  watch(visible, () => {
    openMenu(visible.value, x.value, y.value)
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

defineExpose({
  contextMenuRef,
  openMenu
})
</script>
<template>
    <div class="ym-content-menu" ref="contextMenuRef" >
      <slot />
      <Teleport to="body">
        <Transition @enter="handleEnter">
          <div v-if="contextInfo.visible" class="menu" ref="menuRef"  :style="{ top: contextInfo.y + 'px', left: contextInfo.x + 'px' }"
          :class="{
            [`ym-menu--${type}`]: type,
          }">
            <ul v-if="!customize">
              <li v-for="item in options" :key="item.label" @click="item.handle(item)">{{ item.label }}</li>
            </ul>
            <template v-else>
            <slot name="menu"></slot>
          </template>
          </div>
        </Transition>
      </Teleport>
    </div>
  </template>
  

  
  <style scoped >
    @import './style.css';
  </style>
  