<template>
    <div class="container">
        <p>
            <ym-button @click="open" type="primary">打开</ym-button>
        </p>

        <ym-image-viewer ref="imageViewerRef" :urlList="urlList" :initialIndex="0"></ym-image-viewer>
    </div>
    
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ImageViewerExpose } from 'guyan-ym-ui'

const urlList =  [
    "https://jeek-space-blog.top:3000/images/article/ab93e2fb1e216541d1aeb751600909f2.jpeg",
    "https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg",
    "https://jeek-space-blog.top:3000/images/article/43b9c7996880bc8e02858997790e15f7.jpeg",
    "https://jeek-space-blog.top:3000/images/article/ea6e433dd3c1e06527b6ac05e76d1677.jpeg",
    "https://jeek-space-blog.top:3000/images/article/6c372c58e9f76a1059cec97dae6b84d7.jpeg",
    "https://jeek-space-blog.top:3000/images/article/94ba620bf0f1e5b65e5f4889a88d8fba.png"
  ]

  const imageViewerRef = ref<ImageViewerExpose>()

  const open = () => {
    imageViewerRef.value?.open()
  }
</script>

<style scoped>

</style>