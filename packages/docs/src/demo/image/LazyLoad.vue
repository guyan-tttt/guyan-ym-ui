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
    "https://jeek-space-blog.top:3000/images/article/ab93e2fb1e216541d1aeb751600909f2.jpeg",
    "https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg",
    "https://jeek-space-blog.top:3000/images/article/43b9c7996880bc8e02858997790e15f7.jpeg",
    "https://jeek-space-blog.top:3000/images/article/ea6e433dd3c1e06527b6ac05e76d1677.jpeg",
    "https://jeek-space-blog.top:3000/images/article/6c372c58e9f76a1059cec97dae6b84d7.jpeg"
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