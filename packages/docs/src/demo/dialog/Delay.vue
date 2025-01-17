<template>
    <div class="container">
    <ym-dialog 
    v-model="show" 
    title="这是标题" 
    :openDelay="1000"
    :closeDelay="1000"
    @opened="opend"
    @closed="closed"
    >
      <span>这是一个dialog弹框</span>
    </ym-dialog>
    <ym-button @click="open">开启</ym-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { YmMessage  } from 'guyan-ym-ui';
const show = ref(false)

const open = () => {
    show.value = true
}
const opend = () => {
    YmMessage.success('打开成功')
}
const closed = () => {
    YmMessage.success('关闭成功')
}


</script>

<style lang="scss" scoped>

</style>