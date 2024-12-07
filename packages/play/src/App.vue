<template>
  <div class="container">
    <Progress    width="200px" :percentage="value" color="red" type="circle">
      <template v-slot="{ percentage }">
        <div>{{ percentage }}</div>
      </template>
    </Progress >
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>