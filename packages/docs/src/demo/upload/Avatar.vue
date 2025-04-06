<template>
    <div>
        <ym-upload type="avatar" v-model="fileList" @file-change="onChange">
            <img v-if="imgSrc" :src="imgSrc" alt="" style="width: 180px; height: 180px; border-radius: 10px; object-fit: cover" />
        </ym-upload>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fileList = ref([])

const imgSrc = ref('')

const onChange = (fileList) => {
    const file = fileList[0]
            imgSrc.value = URL.createObjectURL(file.raw)
}

</script>

<style lang="scss" scoped>

</style>