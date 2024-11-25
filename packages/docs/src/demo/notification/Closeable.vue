<script lang="ts" setup>
import {YmNotification} from 'guyan-ym-ui'

const open = () => {
  YmNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <ym-button plain @click="open"> Hide close button </ym-button>
</template>