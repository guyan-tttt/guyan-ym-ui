<template>
    <div>
        <YmImageCropper
            :width="300"
            autoCropWidth="200px"
            autoCropHeight="200px"
            src="https://jeek-space-blog.top:3000/images/article/c286943e69f11921ebff214c3fa1e1dd.png"
        ></YmImageCropper>
    </div>
</template>

<script setup lang="ts">
import { YmImageCropper } from 'guyan-ym-ui'
</script>

<style scoped>

</style>