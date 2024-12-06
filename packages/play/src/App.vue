<template>
  <div>
    <Progress   width="400px" :percentage="value" status="success"  :stroke-width="20" stripedFlow></Progress >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Progress from '../../components/Progress/Progress.vue'

const value = ref(0)

setInterval(() => {
  console.log(1);
  
  if( value.value < 100)  {
      value.value = value.value + 10
  }
  
}, 1000)


</script>

<style  scoped>

</style>