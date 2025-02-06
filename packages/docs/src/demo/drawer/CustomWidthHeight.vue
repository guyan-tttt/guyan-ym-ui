<template>
    <div class="container">
     <div class="item">
        <ym-drawer v-model="show1">
        <p>这是弹框内容</p>
     </ym-drawer>
     <ym-button type="primary" @click="show1 = true" title="这是弹框标题">默认(30%)</ym-button>
     </div>
     <div class="item">
        <ym-drawer v-model="show2" width="50%">
        <p>这是弹框内容</p>
     </ym-drawer>
     <ym-button type="success" @click="show2 = true" title="这是弹框标题">50%</ym-button>
     </div>
     <div class="item">
        <ym-drawer v-model="show3" width="500px">
        <p>这是弹框内容</p>
     </ym-drawer>
     <ym-button type="info" @click="show3 = true" title="这是弹框标题">500px</ym-button>
     </div>
    </div>
  </template>
  
  <script setup>
 import { ref } from 'vue'
 const show1 = ref(false)
 const show2 = ref(false)
 const show3 = ref(false)
  </script>
  <style scoped>

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
 