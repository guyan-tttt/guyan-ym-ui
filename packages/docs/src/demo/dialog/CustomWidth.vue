<template>
    <div class="container">
        <div class="item">
            <h4>number数字</h4>
            <ym-dialog 
            v-model="show1" 
            title="标题"
            :width="300"
            >   
                <template #footer>
                    <ym-button @click="show1 = false">取消</ym-button>
                </template>
                <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open1">开启</ym-button>
        </div>
        <div class="item">
            <h4>string数字</h4>
            <ym-dialog 
            v-model="show2" 
            title="标题"
            width="500"
            >
            <template #footer>
                <ym-button @click="show2 = false">取消</ym-button>
            </template>

            <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open2">开启</ym-button>
        </div>
        <div class="item">
            <h4>百分比</h4>
            <ym-dialog 
            v-model="show3" 
            title="标题"
            width="60%"
            >
            <template #footer>
                <ym-button @click="show3 = false">取消</ym-button>
            </template>

            <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open3">开启</ym-button>
        </div>
        <div class="item">
            <h4>带单位</h4>
            <ym-dialog 
            v-model="show4" 
            title="标题"
            width="700px"
            >
            <template #footer>
                <ym-button @click="show4 = false">取消</ym-button>
            </template>

            <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open4">开启</ym-button>
        </div>
        <div class="item">
            <h4>全屏</h4>
            <ym-dialog 
            v-model="show5" 
            title="标题"
            fullscreen
            >
            <template #footer>
                <ym-button @click="show5 = false">取消</ym-button>
            </template>

            <span>这是一个dialog弹框</span>
            </ym-dialog>
            <ym-button @click="open5">开启</ym-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)

const open1 = () => {
    show1.value = true
}
const open2 = () => {
    show2.value = true
}
const open3 = () => {
    show3.value = true
}
const open4 = () => {
    show4.value = true
}
const open5 = () => {
    show5.value = true
}



</script>

<style  scoped>
.container {
    display: flex;
    gap: 20px;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}
</style>