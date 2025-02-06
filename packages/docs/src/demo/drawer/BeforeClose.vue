<template>
    <div class="container">
     <ym-drawer v-model="show" :beforeClose="beforeClose">
        <p>这是弹框内容</p>
     </ym-drawer>
     <ym-button type="primary" @click="show = true" title="这是弹框标题">打开抽屉</ym-button>
    </div>
  </template>
  
  <script setup>
 import { ref } from 'vue'
 import { YmMessageBox,YmMessage } from 'guyan-ym-ui'
 const show = ref(false)


const beforeClose =(done) => {
  
    YmMessageBox.confirm('确定关闭吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        done()
      }).catch(() => {
        YmMessage.info('取消关闭')
        show.value = true
    }
    )
}
  </script>
 