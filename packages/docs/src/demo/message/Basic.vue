<script lang="ts" setup>
import { h } from "vue";
import { YmMessage } from "guyan-ym-ui";

const open = () => {
  YmMessage("This is a message.");
};

const openVn = () => {
  YmMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <ym-button :plain="true" @click="open">Show message</ym-button>
  <ym-button :plain="true" @click="openVn">VNode</ym-button>
</template>
