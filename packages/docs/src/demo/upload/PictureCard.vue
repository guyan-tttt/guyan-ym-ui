<template>
    <div>
        <ym-upload type="picture-list" v-model="fileList">
        </ym-upload>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fileList = ref([])


</script>

<style lang="scss" scoped>

</style>