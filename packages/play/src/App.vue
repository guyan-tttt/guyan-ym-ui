<template>
  <div>
    <Dialog 
    v-model="show" 
    title="这是标题" 
    top="20vh"
    @close="YmMessage.success('close')"
    @open="YmMessage.success('open')"
    @opened="YmMessage.success('opend')"
    @closed="YmMessage.success('closed')"
    :before-close="beforeClose"
    center
    >
      <template #header>
        <!-- <h1>标题</h1> -->
      </template>
      <template #footer>
          <div>
            <ym-button type="primary">确认</ym-button>
            <ym-button @click="show = false">取消</ym-button>
          </div>
      </template>
      <span>这是一个dialog弹框</span>
    </Dialog>
    <ym-button @click="open">开启</ym-button>
  </div>
</template>

<script setup lang="ts">
import { YmMessage, YmMessageBox } from 'guyan-ym-ui'

import Dialog from '../../components/Dialog/Dialog.vue'
import { ref } from 'vue'

const show = ref(false)

const beforeClose =(done:Function) => {
  
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

const open  = () => {
  show.value = true
}
</script>

<style lang="scss" scoped>

</style>