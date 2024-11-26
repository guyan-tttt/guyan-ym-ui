<template>
    <ym-input type="textarea" v-model="value" placeholder="请输入内容" ></ym-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
