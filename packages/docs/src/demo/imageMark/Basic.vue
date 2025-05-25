<template>
    <div>
        <YmImageMark
            class="image-mark"
            :src="imageSrc"
            :utils="['dot','rect']"
        ></YmImageMark>
    </div>
</template>

<script setup>
import { YmImageMark } from 'guyan-ym-ui'

const imageSrc = 'https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg'
</script>

<style  scoped>
.image-mark {
    height: 600px;
}
</style>