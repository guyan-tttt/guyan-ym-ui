<template>
    <ym-input 
     v-model="value2" 
     placeholder="请输入内容" 
     style='width: 300px'
     >
     <template #prefix>
        <ym-icon icon="star"></ym-icon>
     </template>
     <template #suffix>
        <ym-icon icon="search"></ym-icon>
     </template>
     <template #prepend>
        头部
     </template>
     <template #append>
        尾部
     </template>
     </ym-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value2 = ref('')
</script>
