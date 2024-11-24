<script lang="ts" setup>
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
  <ym-button :plain="true" @click="open1">Message</ym-button>
  <ym-button :plain="true" @click="open2">Success</ym-button>
  <ym-button :plain="true" @click="open3">Warning</ym-button>
  <ym-button :plain="true" @click="open4">Error</ym-button>
</template>
