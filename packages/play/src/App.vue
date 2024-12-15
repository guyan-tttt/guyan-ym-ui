<template>
  <div class="container lazy" ref="containerRef">

      <div class="item" v-for="item in srcList" :key="item">
          <ym-image :src="item"  fit="contain"  style="height: 400px;"></ym-image>
      </div>

  </div>
</template>

<script setup lang="ts">
import  YmImage from '../../components/Image/Image.vue';
import { ref , onMounted } from 'vue'

const containerRef = ref<any>()

const srcList = [
  "https://haowallpaper.com/link/common/file/getCroppingImg/15946441491795328",
  "https://haowallpaper.com/link/common/file/getCroppingImg/15918089447001472",
  "https://haowallpaper.com/link/common/file/getCroppingImg/16026675077107072",
  "https://haowallpaper.com/link/common/file/getCroppingImg/15701594680365376",
  "https://haowallpaper.com/link/common/file/getCroppingImg/15946470577982848"
]

onMounted(() => {
  console.log(containerRef.value)
})
</script>

<style scoped>
.container  {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  /* overflow-y: scroll; */
  gap: 20px;
}
.item {
  width: 100%;
  
}

</style>