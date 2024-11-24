<script lang="ts" setup>
import { YmMessage } from "guyan-ym-ui";

const open1 = () => {
  YmMessage("This is a message.");
};
const open2 = () => {
  YmMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  YmMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  YmMessage.error("Oops, this is a error message.");
};
</script>

<template>
  <ym-button :plain="true" @click="open2">Success</ym-button>
  <ym-button :plain="true" @click="open3">Warning</ym-button>
  <ym-button :plain="true" @click="open1">Message</ym-button>
  <ym-button :plain="true" @click="open4">Error</ym-button>
</template>
