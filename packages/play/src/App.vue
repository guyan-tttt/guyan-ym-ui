<template>
  <!-- <DraggableList 
    v-model:items="list" 
    axis="vertical"
  >
    <template #item="{ item, index }">
      <div class="custom-item">
        <span class="handle">☰</span>
        {{ item.text }}
      </div>
    </template>
  </DraggableList> -->

  <Upload type="default"  v-model="fileList" @file-change="updateChange" draggable>
    <!-- <img v-if="imgSrc" :src="imgSrc" alt="" class="img" > -->
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Upload from './components/Upload.vue'
//  import DraggableList  from './components/DraggableList.vue'
// import { ref } from 'vue'
// const list = ref([
//   { id: 1, text: 'Item 1' },
//   { id: 2, text: 'Item 2' },
//   { id: 3, text: 'Item 3' },
//   { id: 4, text: 'Item 4' },
//   { id: 5, text: 'Item 5' },
//   { id: 6, text: 'Item 6' },
//   { id: 7, text: 'Item 7' },
//   { id: 8, text: 'Item 8' },
//   { id: 9, text: 'Item 9' },
//   { id: 10, text: 'Item 10' },
// ])

const fileList = ref([])
const imgSrc = ref("")

const updateChange = (files: any[]) => {
  console.log(files,1)
  console.log(fileList.value,2)
  const file = files[0]
  imgSrc.value = URL.createObjectURL(file.raw)
}
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
.img {
  width: 180px;
  height: 180px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}
</style>