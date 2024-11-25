<script setup lang="ts">
import { h } from "vue";
import { YmNotification } from "guyan-ym-ui";

function openNotify1() {
  YmNotification({
    title: "Title",
    message: h("i", { style: "color:red" }, "This is a remider"),
    position:'bottom-right'
  });
}

function openNotify2() {
  YmNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position:'top-left'
  });
}
</script>

<template>
  <ym-button @click="openNotify1" plain>Closes automatically</ym-button>
  <ym-button @click="openNotify2" plain>Won't closes automatically</ym-button>
</template>
