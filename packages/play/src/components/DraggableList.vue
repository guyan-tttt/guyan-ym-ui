<template>

<TransitionGroup name="list" tag="div" class="draggable-list">
  <div 
      v-for="(item, index) in items"
      :key="item.id"
      class="list-item"
      :class="{ 'dragging': draggingIndex === index, 'placeholder': dragOverIndex === index }"
      :data-index="index"
      draggable="true"
      @dragstart="handleDragStart($event, index)"
      @dragover.prevent="handleDragOver($event)"
      @dragend="handleDragEnd"
    >
      <slot name="item" :item="item" :index="index">
        {{ item.content }}
      </slot>
    </div>
</TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DraggableItem {
  id: string | number
  [key: string]: any
}

const props = defineProps<{
  items: DraggableItem[]
}>()

const emit = defineEmits(['update:items'])

const draggingIndex = ref<number | null>(null)
const dragOverIndex = ref<number | null>(null)

const handleDragStart = (e: DragEvent, index: number) => {
  draggingIndex.value = index
  dragOverIndex.value = index
  e.dataTransfer?.setData('text/plain', index.toString())
  
  const img = new Image()
  e.dataTransfer?.setDragImage(img, 0, 0)
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  if (draggingIndex.value === null) return
  
  setTimeout(() => {
    const targetIndex = getNearestIndex(e.clientY)
    if (targetIndex !== dragOverIndex.value) {
      dragOverIndex.value = targetIndex
      reorderItems(draggingIndex.value as number, targetIndex)
      draggingIndex.value = targetIndex
    }
  },0)
}

const handleDragEnd = () => {
  draggingIndex.value = null
  dragOverIndex.value = null
  // 强制重排保证动画流畅
}

const getNearestIndex = (clientY: number): number => {
  const items = document.querySelectorAll('.list-item')
  const { top: containerTop } = items[0]?.parentElement?.getBoundingClientRect() || { top: 0 }
  
  for (let i = 0; i < items.length; i++) {
    const { top, height } = items[i].getBoundingClientRect()
    const middleY = top - containerTop + height
    if (clientY - containerTop < middleY) {
      return i
    }
  }
  return items.length - 1
}

const reorderItems = (from: number, to: number) => {
  if (from === to) return
  const newItems = [...props.items]
  const [removed] = newItems.splice(from, 1)
  newItems.splice(to, 0, removed)
  emit('update:items', newItems)
}



</script>

<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.draggable-list {
  position: relative;
  user-select: none;
  transition: all .5s;
}

.list-item {
  position: relative;
  padding: 12px;
  margin: 8px 0;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.list-item.dragging {
  opacity: 1;
  cursor: grabbing;
  box-shadow: none;
  transform: none;
  transition: none !important;
}

.list-item:not(.dragging):hover {
  transform: translateX(4px);
  background: #52a1ff;
}

/* 拖拽占位符指示线 */
.list-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: #fff;
  opacity: 0;
  transition: opacity 0.2s;
}

.list-item[dragover]::after {
  opacity: 1;
}

.list-item.placeholder {
  background: #f5f7fa !important;
  border: 2px dashed #dcdfe6;
  position: relative;
}

.list-item.placeholder::before {
  content: "释放位置";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #909399;
  font-size: 12px;
}

.list-item:not(.dragging):hover {
  background: #52a1ff;
  transform: translateY(-2px);
}

.list-item {
  transition: 
    background 0.3s ease,
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease;
}
</style>