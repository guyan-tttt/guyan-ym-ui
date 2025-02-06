<template>
  <div>
    <Drawer
    v-model="show"
    position="right"
    width="50%"
    title="caccscscs"
    :modal="false"
    :before-close="beforeClose"
    :close-on-press-escape="true"
    @open="open"
    @close="close"
    @opened="opened"
    @closed="closed"
    >
    
    <template #footer>
      <div>
        <h3>底部</h3>
      </div>
    </template>
    <p>xaxabxaaaaaaaaaaaaaaa</p>
  </Drawer>


  <ym-button @click="show = true">按钮</ym-button>
  <!-- <Upload></Upload> -->
  </div>
</template>

<script setup lang="ts">
import { YmMessage, YmMessageBox } from 'guyan-ym-ui'

import Drawer from '../../components/Drawer/Drawer.vue'
// import Upload from './components/Upload.vue'
import { onMounted, ref } from 'vue'

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
const open = () => {
  YmMessage.info('打开')
}
const close = () => {
  YmMessage.warning('关闭')
}
const opened = () => {
  YmMessage.success('打开')
}

const closed = () => {
  YmMessage.error('关闭')
}
onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 4000)
})
</script>




<style  scoped>

</style>