<template>
    <div class="container">
        <YmLightCode :code="codeStr" width="650px" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const codeStr = ref(
    `
    // 引入所有组件
    import YmUI from 'guyan-ym-ui'
    // 引入样式
    import 'guyan-ym-ui/dist/index.css'

    import App from './App.vue'
    // 全局使用
    createApp(App).use(YmUI).mount('#app')
    `
)
</script>

<style scoped>
</style> 