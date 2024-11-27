<script setup lang="ts">
import { h, ref } from "vue";
import { YmMessageBox } from "guyan-ym-ui";

function open1() {
  YmMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  // const checked = ref<SwitchValueType>(false);
  // YmMessageBox({
  //   title: "Message",
  //   message: () =>
  //     h(YmSwitch, {
  //       modelValue: checked.value,
  //       "onUpdate:modelValue": (val: SwitchValueType) => {
  //         checked.value = val;
  //       },
  //     }),
  // });
}
</script>

<template>
  <ym-button @click="open1" plain>Common VNode</ym-button>
  <ym-button @click="open2" plain>Dynamic props</ym-button>
</template>
