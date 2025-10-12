<template>
    <div class="container">
        <p><h4>props传递</h4></p>
        <YmLightCode :code="codeStr" width="650px" theme="github" />
        <p><h4>实例调用</h4></p>
        <YmLightCode :code="codeStr" width="650px" ref="lightCodeRef" />
    </div>
</template>

<script setup lang="ts">
import { ref , onMounted } from 'vue'
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

onMounted(() => {
    lightCodeRef.value?.setTheme('arduino-light')
})
</script>

<style scoped>
</style> 