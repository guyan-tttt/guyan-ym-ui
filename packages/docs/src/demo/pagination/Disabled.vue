<template>
    <div class="container">
        <p>
            <ym-pagination disabled @current-change="handlePageChange" :total="100" :pageSize="10" :currentPage="currentPage"></ym-pagination>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { YmMessage } from 'guyan-ym-ui'

const currentPage = ref(1)


const handlePageChange = (page) => {
    currentPage.value = page
    YmMessage.success(`当前页码：${page}`)
}
</script>

<style lang="scss" scoped>

</style>