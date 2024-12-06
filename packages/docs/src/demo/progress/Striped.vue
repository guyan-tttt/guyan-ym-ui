<template>
    <div class="container">
        <ym-progress :percentage="percentage" width="400px"  striped :strokeWidth="20"></ym-progress>
        <ym-progress :percentage="percentage" width="400px" status="success" strokeWidth="20" striped  stripedFlow ></ym-progress>
        <ym-progress :percentage="percentage" width="400px" status="warning" strokeWidth="20" striped  stripedFlow ></ym-progress>
        <ym-progress :percentage="percentage" width="400px" status="danger"  strokeWidth="20" striped  stripedFlow ></ym-progress>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref(100)

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px
}
</style>