<script setup lang="ts">
import { h } from "vue";
import { YmMessage, YmMessageBox , type MessageBoxAction, type MessageBoxOptions} from "guyan-ym-ui";
import { delay } from "lodash-es";

async function openMsgBox() {
  try {
    const action = await YmMessageBox({
      title: "Message",
      message: h("p", null, [
        h("span", null, "Message can be "),
        h("i", { style: "color: teal" }, "VNode"),
      ]),
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      type: "dangYm",
      icon: "trash",
      beforeClose(action: MessageBoxAction, instance: MessageBoxOptions, done:() => void) {
        if (action !== "confirm") {
          done();
          return;
        }

        instance.confirmButtonLoading = true;
        instance.confirmButtonText = "Loading...";
        delay(() => {
          done();
          delay(() => (instance.confirmButtonLoading = false), 1000);
        }, 3000);
      },
    });

    YmMessage.info(`action : ${action}`);
  } catch (action) {
    YmMessage.warning(`action : ${action}`);
  }
}
</script>

<template>
  <ym-button @click="openMsgBox" plain>Click to open Message Box</ym-button>
</template>
