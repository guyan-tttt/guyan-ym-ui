<template>
  <div>
    <Paginiation 
    :total="100" 
    :currentPage="1" 
    :pagerCount="8"
    background
    @current-change="currentChange"
    jumper
    sizeSelector
    totalor
    ></Paginiation>
  </div>
</template>

<script setup lang="ts">
import Paginiation from './components/Paginiation.vue';

const currentChange = (val: number) =>  {
  console.log(val);
  
}
</script>

<style scoped>

</style>