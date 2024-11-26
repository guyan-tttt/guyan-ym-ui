<template>
    <ym-input disabled v-model="value" placeholder="请输入内容" style='width: 300px'></ym-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
