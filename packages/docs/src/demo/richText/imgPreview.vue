<template>
    <ym-rich-text :content="htmlContent" :isImgPreview="true" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { YmRichText } from 'guyan-ym-ui';
  import 'guyan-ym-ui/dist/index.css';
  
  const htmlContent = ref('<p>点击图片预览: <img src="https://jeek-space-blog.top:3000/images/article/6c372c58e9f76a1059cec97dae6b84d7.jpeg" alt="example" /></p>');
  </script>