<template>
    <div class="container">
        <div class="item">
            <h4>loading</h4>
            <ym-image :src="src" fit="cover"  style="width:250px;height:120px">
                <template #loading>
                    <ym-icon icon="spinner" spin ></ym-icon>
                </template>
            </ym-image>
        </div>
        <div class="item">
            <h4>error</h4>
            <ym-image :src="src2"  style="width:250px;height:120px">
                <template #error>
                    <ym-icon icon="exclamation-triangle" size="2x" ></ym-icon>
                </template>
            </ym-image>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const src = ref("")
const src1 = "https://jeek-space-blog.top:3000/images/article/6c372c58e9f76a1059cec97dae6b84d7.jpeg"
const src2 = "https://haowallpaper.com/link/common/file/getCroppingIdsmg/15424390782292288"
setTimeout(() => {
    src.value = src1
},2000)
</script>

<style scoped>
.container  {
    display: flex;
    flex-wrap: wrap;
}
.item {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
}

</style>