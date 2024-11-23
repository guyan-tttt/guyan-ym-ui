<script setup lang="ts">
import type { ConfigProviderProps } from './type'
import {  provideGlobalConfig } from './hooks'

defineOptions({
    name: 'YMConfigProvider'
})

const props = defineProps<ConfigProviderProps>()
const config = provideGlobalConfig(props)

</script>


<template>
    <slot name="default" :config="config"></slot>
</template>


<style scoped>

</style>