<script setup lang="ts">
import { YmMessageBox, YmMessage, type MessageBoxAction , } from "guyan-ym-ui";

function openConfirm() {
  YmMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }: { value: string}) => {
      console.log(value);
      
      YmMessage.info(`your name is: ${value}`);
    })
    .catch((action: MessageBoxAction) => {
      YmMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ym-button @click="openConfirm" plain> Click to open the Confirm</ym-button>
</template>
