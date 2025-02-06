<template>
    <div class="container">
        <div class="item">
            <ym-drawer v-model="show1">
            <p>这是弹框内容</p>
        </ym-drawer>
        <ym-button type="primary" @click="show1 = true" title="这是弹框标题">默认(right)</ym-button>
        </div>
        <div class="item">
            <ym-drawer v-model="show2" position="top">
            <p>这是弹框内容</p>
        </ym-drawer>
        <ym-button type="success" @click="show2 = true" title="这是弹框标题">top</ym-button>
        </div>
        <div class="item">
            <ym-drawer v-model="show3" position="left">
            <p>这是弹框内容</p>
        </ym-drawer>
        <ym-button type="info" @click="show3 = true" title="这是弹框标题">left</ym-button>
        </div>
        <div class="item">
            <ym-drawer v-model="show4" position="bottom">
            <p>这是弹框内容</p>
        </ym-drawer>
        <ym-button type="warning" @click="show4 = true" title="这是弹框标题">bottom</ym-button>
        </div>
    </div>
  </template>
  
  <script setup>
 import { ref } from 'vue'
 const show1 = ref(false)
 const show2 = ref(false)
 const show3 = ref(false)
 const show4 = ref(false)
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
 