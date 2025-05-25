<template>
    <div>
        <YmImageMark
            class="image-mark"
            :src="imageSrc"
            ref="imageMarkRef"
        ></YmImageMark>
        <br />
        <ym-button type="primary" @click="exportData">导出标记数据</ym-button>
        <ym-button type="success" @click="imageMarkRef?.clear">清除标记数据</ym-button>
        <ym-button type="warning" @click="imageMarkRef?.hidden">隐藏标记数据</ym-button>
        <pre>{{ markData }}</pre>
    </div>
</template>

<script setup>
import { YmImageMark } from 'guyan-ym-ui'
import { ref, computed  } from 'vue'

const imageMarkRef = ref(null)

const imageSrc = 'https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg'


const data = ref([])
const markData = computed(() => {
    return data.value.map(item => {
        return {
            ...item,
            shape: null
        }
    })
})
const exportData = () => {
    data.value = imageMarkRef.value.exportData()
}



</script>

<style  scoped>
.image-mark {
    height: 600px;
}
</style>