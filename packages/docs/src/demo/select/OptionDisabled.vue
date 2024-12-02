<template>
    <ym-select v-model="value1" placeholder="请选择">
        <ym-option label="选项1" value="1" disabled></ym-option>
        <ym-option label="选项2" value="2"></ym-option>
        <ym-option label="选项3" value="3"></ym-option>
    </ym-select>
    <ym-select v-model="value2" placeholder="请选择" :options="options"></ym-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const options = [
    { label: '选项1', value: '1', disabled: true},
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
]
</script>

<style scoped>

</style>