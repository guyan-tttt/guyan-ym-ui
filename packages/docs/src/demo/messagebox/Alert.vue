<script setup lang="ts">
import { YmMessageBox, YmMessage, type MessageBoxAction } from "guyan-ym-ui";

function openAlert() {
  YmMessageBox.alert("This is a message", "Title")
    .then((action: MessageBoxAction) => {
      YmMessage.info(`action: ${action}`);
    })
    .catch((action: MessageBoxAction) => {
      YmMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ym-button @click="openAlert" plain> Click to open the Alert</ym-button>
</template>
