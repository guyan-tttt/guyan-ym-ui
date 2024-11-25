<script lang="ts" setup>
import { YmNotification } from "guyan-ym-ui";

const open1 = () => {
  YmNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  YmNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  YmNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  YmNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <ym-button plain @click="open1"> Success </ym-button>
  <ym-button plain @click="open2"> Warning </ym-button>
  <ym-button plain @click="open3"> Info </ym-button>
  <ym-button plain @click="open4"> Error </ym-button>
</template>
