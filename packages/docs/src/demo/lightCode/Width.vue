<template>
    <div class="container">
        <p><h4>字符串</h4></p>
        <YmLightCode :code="codeStr" width="650px" height="200px" />
        <p><h4>字符串</h4></p>
        <YmLightCode :code="codeStr" :width="650" :height="200" />
        <p><h4>百分比</h4></p>
        <YmLightCode :code="codeStr" width="50%" />
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