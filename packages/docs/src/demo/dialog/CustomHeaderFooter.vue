<template>
    <div class="container">
        <div class="item">
            <h4>自定义头部底部</h4>
            <ym-dialog 
            v-model="show1" 
            >   
                <template #header>
                    <h3>自定义头部</h3>
                </template>
                <template #footer>
                    <ym-button @click="show1 = false">取消</ym-button>
                </template>
                <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open1">开启</ym-button>
        </div>
        <div class="item">
            <h4>隐藏头部底部</h4>
            <ym-dialog 
            v-model="show2" 
            :header="false"
            :footer="false"
            >
            <template #header>
                <h3>自定义头部</h3>
            </template>
            <template #footer>
                <ym-button @click="show1 = false">取消</ym-button>
            </template>

            <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open2">开启</ym-button>
                </div>
            </div>
</template>

<script setup>
import { ref } from 'vue'
const show1 = ref(false)
const show2 = ref(false)

const open1 = () => {
    show1.value = true
}
const open2 = () => {
    show2.value = true
}



</script>

<style  scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>