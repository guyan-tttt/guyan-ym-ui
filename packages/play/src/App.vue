
<script setup lang="ts">
import Card from './components/Card.vue'
import { YmMessage } from "guyan-ym-ui";

const open1 = () => {
  YmMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  YmMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  YmMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  YmMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <div class="container">
    <ym-button :plain="true" @click="open1">Message</ym-button>
    <ym-button :plain="true" @click="open2">Success</ym-button>
    <ym-button :plain="true" @click="open3">Warning</ym-button>
    <ym-button :plain="true" @click="open4">Error</ym-button>
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
