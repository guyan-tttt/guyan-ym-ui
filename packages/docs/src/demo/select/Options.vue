<template>
    <ym-select v-model="value" placeholder="请选择" :options="options">
    </ym-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
    {
        label: '选项1',
        value: '1'
    },
    {
        label: '选项2',
        value: '2'
    },
    {
        label: '选项3',
        value: '3'
    }
]
</script>

<style scoped>

</style>