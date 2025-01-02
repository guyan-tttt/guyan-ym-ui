<template>
    <div class="container lazy" >
        <div class="item" v-for="(item,index) in srcList" :key="item">
            <ym-image preview :src="item"  fit="contain" :initialIndex="index" :previewSrcList="srcList"></ym-image>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref , onMounted } from 'vue'
  
  const containerRef = ref<any>()
  
  const srcList = [
    "https://haowallpaper.com/link/common/file/getCroppingImg/15946441491795328",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15918089447001472",
    "https://haowallpaper.com/link/common/file/getCroppingImg/16026675077107072",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15701594680365376",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15946470577982848",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15947843037547904"
  ]
  
  onMounted(() => {
    console.log(containerRef.value)
  })
  </script>
  
  <style scoped>
  .container  {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .item {
   width: 30%;
  }
  
  </style>