<template>
    <ym-switch size="large" v-model="value" :activeValue="1" :inactiveValue="0" @change="handleChange"></ym-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { YmMessage } from 'guyan-ym-ui';

const value = ref(0)

const handleChange = (val: number) => {
    YmMessage.info('开关状态：' + val)
}
</script>
