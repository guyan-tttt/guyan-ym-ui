<template>
    <div class="container">
    <ym-dialog 
    v-model="show" 
    title="这是标题" 
    >
      <span>这是一个dialog弹框</span>
    </ym-dialog>
    <ym-button @click="open">开启</ym-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)

const open = () => {
    show.value = true
}

</script>

<style lang="scss" scoped>

</style>