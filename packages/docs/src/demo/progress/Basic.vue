<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="200px"></ym-progress>
        <ym-progress :percentage="percentage" width="300px" status="success"></ym-progress>
        <ym-progress :percentage="percentage" width="400px" status="warning"></ym-progress>
        <ym-progress :percentage="percentage" width="500px" status="danger"></ym-progress>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const percentage = ref(0)

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