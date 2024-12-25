<template>
    <p>
        <ym-pagination 
        @current-change="handlePageChange" 
        @size-change="handleSizeChange"
        :total="500" 
        :pageSize="10" 
        :pagerCount="10"
        :currentPage="currentPage"
        background
        :pageSizes="[10,20,30,40]"
        sizeSelector
        ></ym-pagination>
    </p>
</template>

<script setup>
import { ref } from 'vue'
import { YmMessage } from 'guyan-ym-ui'

const currentPage = ref(1)


const handlePageChange = (page) => {
currentPage.value = page
YmMessage.success(`当前页码：${page}`)
}
const handleSizeChange = (size) => {
YmMessage.success(`每页${size}条`)
}
</script>

<style  scoped>

</style>