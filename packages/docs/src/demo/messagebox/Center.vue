<script setup lang="ts">
import { YmMessage, YmMessageBox, type MessageBoxAction } from "guyan-ym-ui";

function openMsgBox() {
  YmMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action: MessageBoxAction ) {
        if (action === "confirm") {
          YmMessage.info(action);
        } else {
          YmMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <ym-button @click="openMsgBox" plain>Click to open Message Box</ym-button>
</template>
