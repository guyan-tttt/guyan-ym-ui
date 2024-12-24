<template>
  <div>
    <Paginiation 
    :total="100" 
    :currentPage="current" 
    :pagerCount="8"
    background
    :page-size="page"
    @current-change="currentChange"
    jumper
    sizeSelector
    totalor
    ></Paginiation>
    <button @click="current++">current +１</button>
    <button @click="page = page + 5">page +1</button>
  </div>
</template>

<script setup lang="ts">
import Paginiation from '../../components/Pagination/Pagination.vue';
import { ref } from 'vue'
const currentChange = (val: number) =>  {
  console.log(val);
  
}

const current = ref(1)
const page = ref(5)

</script>

<style scoped>

</style>