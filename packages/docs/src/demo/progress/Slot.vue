<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="300px" >
            <template #default="{ percentage }">
                <span>{{ percentage }}</span>
            </template>
        </ym-progress>
        <ym-progress :percentage="percentage" width="300px" status="success" :stroke-width="20" :text-inside="true">
            <template #default="{ percentage }">
                <span>{{ percentage }} %</span>
            </template>

        </ym-progress>
        <p class="list">
            <ym-progress :percentage="percentage" width="150px" type="circle">
                <template #default="{ percentage }">
                    <div class="value">{{ percentage }} %</div>
                    <span class="label">进度内容</span>
                </template>
            </ym-progress>
            <ym-progress :percentage="percentage" width="150px" color="blue" type="circle">
                <template #default="{ percentage }">
                    <ym-icon icon="house" color="blue"></ym-icon>
                </template>
            </ym-progress>
        </p>
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
    flex-direction: column;
}
.list {
    display: flex;
    gap: 20px;
}
.value {
    font-size: 24px;
}
.label {
    font-size: 12px;
    color: #666;
}
</style>