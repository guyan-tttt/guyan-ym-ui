<template>
    <div class="container lazy" ref="containerRef">
  
        <div class="item" v-for="(item,index) in srcList" :key="item">
            <ym-image @load="load(index)" :src="item"  fit="contain" lazy :scrollContainer="containerRef" style="height: 400px;"></ym-image>
        </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref , onMounted } from 'vue'
  import { YmMessage } from 'guyan-ym-ui';

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

  const load = (index: any) => {
    YmMessage.success(`第${index + 1}张图片加载完成`)
  }
  </script>
  
  <style scoped>
  .container  {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    gap: 10px;
  }
  .item {
    width: 100%;
    
  }
  
  </style>