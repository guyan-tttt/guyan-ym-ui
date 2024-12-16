<template>
  <div class="container lazy" ref="containerRef">

    <Avatar icon="home" :size="100"></Avatar>

  </div>
</template>

<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<style scoped>
.container  {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  /* overflow-y: scroll; */
  gap: 20px;
}
.item {
  width: 100%;
  
}

</style>