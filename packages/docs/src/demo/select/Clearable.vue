<template>
    <ym-select v-model="value" placeholder="请选择" clearable>
        <ym-option label="选项1" value="1"></ym-option>
        <ym-option label="选项2" value="2"></ym-option>
        <ym-option label="选项3" value="3"></ym-option>
    </ym-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped>

</style>