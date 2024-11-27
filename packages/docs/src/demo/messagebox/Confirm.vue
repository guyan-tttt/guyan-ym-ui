<script setup lang="ts">
import { YmMessageBox, YmMessage, type MessageBoxAction } from "guyan-ym-ui";

function openConfirm() {
  YmMessageBox.confirm("proxy will pYmmanently delete the file. Continue?", "Warning", { type: "warning" })
    .then((action:  MessageBoxAction) => {
      YmMessage.info(`action: ${action}`);
    })
    .catch((action:  MessageBoxAction) => {
      YmMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ym-button @click="openConfirm" plain> Click to open the Confirm</ym-button>
</template>
