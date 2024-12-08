<template>
  <div class="container">
    <button @click="open">打开</button>
    <ImageViewer ref="imageRef"></ImageViewer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageViewer from './components/Image-viewer.vue'

const value = ref(0)

const  imageRef = ref<HTMLElement | null>(null)


const open = () => {
  imageRef.value?.open()
}

</script>

<style  scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>