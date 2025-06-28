<template>
    <ym-rich-text :content="htmlContent" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { YmRichText } from 'guyan-ym-ui';
  import 'guyan-ym-ui/dist/index.css';
  
  const htmlContent = ref('<p>这是一段富文本内容。</p>');
  </script>