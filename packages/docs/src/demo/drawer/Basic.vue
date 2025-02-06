<template>
    <div class="container">
     <ym-drawer v-model="show">
        <p>这是弹框内容</p>
     </ym-drawer>
     <ym-button type="primary" @click="show = true" title="这是弹框标题">打开抽屉</ym-button>
    </div>
  </template>
  
  <script setup>
 import { ref } from 'vue'
 const show = ref(false)
  </script>
 