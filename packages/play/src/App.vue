<script setup lang="ts">
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
   <ym-popconfirm>
    <ym-button>xcacacac</ym-button>
   </ym-popconfirm>
  </div>

</template>

<style scoped>
.box {
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
