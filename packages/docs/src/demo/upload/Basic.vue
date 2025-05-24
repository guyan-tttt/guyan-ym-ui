<template>
    <div>
        <ym-upload v-model="value"  :maxSize="5" accept="png,jpg" multiple />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])

</script>

<style lang="scss" scoped>

</style>