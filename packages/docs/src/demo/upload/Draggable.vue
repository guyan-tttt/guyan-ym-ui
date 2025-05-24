<template>
    <div>
        <ym-upload v-model="value"   draggable />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])

</script>

<style lang="scss" scoped>

</style>