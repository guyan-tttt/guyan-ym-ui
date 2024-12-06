<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="300px" color="#6f7ad3"></ym-progress>
        <ym-progress :percentage="percentage" width="300px" color="#e6a23c"></ym-progress>
        <ym-progress :percentage="percentage" width="300px" color="#5cb87a"></ym-progress>
        <ym-progress :percentage="percentage" width="300px" color="#1989fa"></ym-progress>
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