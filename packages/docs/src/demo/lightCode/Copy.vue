<template>
    <div class="container">
        <p><h4>点击按钮复制</h4></p>
        <YmLightCode :code="codeStr" width="650px" custom />
        <p><h4>实例调用</h4></p>
        <YmLightCode :code="codeStr" width="650px" ref="lightCodeRef" />
        <p>
            <YmButton @click="copyText" type="primary">复制</YmButton>
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type LightCodeInstance } from 'guyan-ym-ui'
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
const lightCodeRef = ref<LightCodeInstance | null>(null)

const copyText = () => {
    lightCodeRef.value?.copyCode()
}
</script>

<style scoped>
</style> 