<template>
  <DraggableList 
    v-model:items="list" 
    axis="vertical"
  >
    <template #item="{ item, index }">
      <div class="custom-item">
        <span class="handle">☰</span>
        {{ item.text }}
      </div>
    </template>
  </DraggableList>
</template>

<script setup>
 import DraggableList  from './components/DraggableList.vue'
import { ref } from 'vue'
const list = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5' },
  { id: 6, text: 'Item 6' },
  { id: 7, text: 'Item 7' },
  { id: 8, text: 'Item 8' },
  { id: 9, text: 'Item 9' },
  { id: 10, text: 'Item 10' },
])
</script>

<style>
.custom-item {
  display: flex;
  align-items: center;
  padding: 16px;
  transition: all 0.3s ease;
}

.handle {
  margin-right: 12px;
  cursor: grab;
}
</style>