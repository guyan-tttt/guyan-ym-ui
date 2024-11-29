<template>
    <ym-switch v-model="value"></ym-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
