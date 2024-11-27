<script setup lang="ts">
import { ref } from 'vue'

const showOverlay = ref(false)


const toggleOverlay = () => {
    showOverlay.value = !showOverlay.value
}

</script>


<template>
    <div>
        <ym-button @click="toggleOverlay">开启遮罩层</ym-button>
        <ym-overlay @click="toggleOverlay" v-if="showOverlay" overlayClass="overlay">
            <div>
                <ym-card style="width: 200px; background-color: #fff;" header="这是遮罩层">
                    <ym-button @click="toggleOverlay">关闭</ym-button>
                </ym-card>
            
            </div>
        </ym-overlay>
    </div>
</template>

<style scoped>
.overlay {
    display: flex;
    justify-content: center;
    align-items: center
}
</style>

