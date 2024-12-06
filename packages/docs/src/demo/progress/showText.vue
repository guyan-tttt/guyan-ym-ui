<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="400px"></ym-progress>
        <ym-progress :percentage="percentage" width="400px" :format="format"></ym-progress>
        <ym-progress :percentage="percentage" width="400px" :showText="false"></ym-progress>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const percentage = ref(0)

const format = (percentage:number) => {
    if(percentage > 90) return "完成"
    if(percentage > 50) return "进行中"
    return `${percentage}%`
}
let timer:any = null
onMounted(() => {
        timer = setInterval(() => {
            percentage.value += 10
            if (percentage.value > 100) {
                percentage.value = 0
            }
        },2000)
})

onUnmounted(() => {
    timer && clearInterval(timer)
})

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px
}
</style>