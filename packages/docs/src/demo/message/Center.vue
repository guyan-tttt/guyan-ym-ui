<script lang="ts" setup>
import { YmMessage } from "guyan-ym-ui";

const openCenter = () => {
  YmMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <ym-button plain @click="openCenter">Centered text</ym-button>
</template>
