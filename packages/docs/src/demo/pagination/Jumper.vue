<template>
    <p>
        <ym-pagination 
        :pagerCount="6" 
        @current-change="handlePageChange" 
        :total="100" 
        :pageSize="10" 
        :currentPage="currentPage"
        background
        jumper
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
</script>

<style  scoped>

</style>