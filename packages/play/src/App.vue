<template>
  <div class="container">
    <button @click="open">打开</button>
    <ImageViewer ref="imageRef" 
      :urlList="srcList"
     :initial-index="0" 
     :hide-on-click-modal="true" 
     closeOnPressEsc
     @close="console.log('close')"
     @rotate="console.log('rotate')"
     @wheel="console.log('wheel')"
     @switch="switchFun"
     ></ImageViewer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageViewer from './components/Image-viewer.vue'

const value = ref(0)

const  imageRef = ref<HTMLElement | null>(null)

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const open = () => {
  imageRef.value?.open()
}
const switchFun = (src: string, index: number) => {
  console.log(src, index)
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