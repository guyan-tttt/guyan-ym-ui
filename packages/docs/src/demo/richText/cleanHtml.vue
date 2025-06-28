<template>
    <p>净化后：</p>
    <ym-rich-text :content="htmlContent" :isClean="true" />
    <p>未净化：</p>
    <ym-rich-text :content="htmlContent" :isClean="false" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { YmRichText } from 'guyan-ym-ui';
  import 'guyan-ym-ui/dist/index.css';
  
  const htmlContent = ref(`<p>净化后的内容: <a href="javaScript:alert('恭喜你被诈骗了100元，以后长点心吧傻孩子！！！')">点击我领福利</a><strong>Safe Content</strong></p>`);
  </script>