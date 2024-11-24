<script lang="ts" setup>
import { YmMessage } from "guyan-ym-ui";

const open1 = () => {
  YmMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  YmMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <ym-button @click="open1">插件式调用</ym-button>
    <ym-button @click="open2">函数式调用</ym-button>
    <ym-button @click="$YmMessage.success('Congrats, this is a success message.')"
      >全局方法调用</ym-button
    >
  </div>
</template>
