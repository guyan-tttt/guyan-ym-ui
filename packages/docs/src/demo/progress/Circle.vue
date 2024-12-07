<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="150px" type="circle"></ym-progress>
        <ym-progress :percentage="percentage" width="150px" status="success" type="circle"></ym-progress>
        <ym-progress :percentage="percentage" width="150px" status="warning" type="circle"></ym-progress>
        <ym-progress :percentage="percentage" width="150px" status="danger" type="circle"></ym-progress>
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
    gap: 20px;
    justify-content: space-between;
}
</style>