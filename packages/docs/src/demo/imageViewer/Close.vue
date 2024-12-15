<template>
    <div class="container">
        <p>
            <ym-button @click="open" type="primary">打开</ym-button>
        </p>

        <ym-image-viewer 
        ref="imageViewerRef"
         :urlList="urlList" 
         :initialIndex="0"
         hideOnClickModal
         closeOnPressEsc
         ></ym-image-viewer>
    </div>
    
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ImageViewerExpose } from 'guyan-ym-ui'

const urlList =  [
    "https://haowallpaper.com/link/common/file/getCroppingImg/15946441491795328",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15918089447001472",
    "https://haowallpaper.com/link/common/file/getCroppingImg/16026675077107072",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15701594680365376",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15946470577982848",
    "https://haowallpaper.com/link/common/file/getCroppingImg/15947843037547904"
  ]

  const imageViewerRef = ref<ImageViewerExpose>()

  const open = () => {
    imageViewerRef.value?.open()
  }
</script>

<style scoped>

</style>