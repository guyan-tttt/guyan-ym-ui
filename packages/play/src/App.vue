<template>
  <div class="container lazy" ref="containerRef">

    <Avatar src="https://fuss10.elemecdn25941171jpeg.jpeg" size="large"></Avatar>
    <Avatar icon="home" ></Avatar>
    <Avatar icon="home" size="large"></Avatar>

  </div>
</template>

<script setup lang="ts">
import Avatar from '../../components/Avatar/Avatar.vue'
</script>

<style scoped>
.container  {
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 400px;
  /* overflow-y: scroll; */
  gap: 20px;
}


</style>