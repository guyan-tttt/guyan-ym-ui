
<script setup lang="ts">

import { YmNotification } from "guyan-ym-ui";

const open1 = () => {
  YmNotification({
    showClose: true,
    message: "This is a message.",
    position: "top-left",
    title: "Title",
  });
};
const open2 = () => {
  YmNotification({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
    position: "top-right",
  });
};
const open3 = () => {
  YmNotification({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
    position: "bottom-left",
  });
};
const open4 = () => {
  YmNotification({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
    position: "bottom-right",
  });
};
</script>

<template>
  <div class="container">
    <div>
      <ym-button :plain="true" @click="open1">Message</ym-button>
    <ym-button :plain="true" @click="open2">Success</ym-button>
    <ym-button :plain="true" @click="open3">Warning</ym-button>
    <ym-button :plain="true" @click="open4">Error</ym-button>
    </div>
    <ym-input type="textarea"></ym-input>
    <input type="password" />
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
