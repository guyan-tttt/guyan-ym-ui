<template>
    <div class="container">
        <div class="item">
            <h4>fill</h4>
            <ym-image :src="src"  fit="fill" style="width:100px;height:100px"></ym-image>
        </div>
        <div class="item">
            <h4>contain</h4>
            <ym-image :src="src"  fit="contain" style="width:100px;height:100px"></ym-image>
        </div>
        <div class="item">
            <h4>cover</h4>
            <ym-image :src="src"  fit="cover" style="width:100px;height:100px"></ym-image>
        </div>
        <div class="item">
            <h4>none</h4>
            <ym-image :src="src"  fit="none" style="width:100px;height:100px"></ym-image>
        </div>
        <div class="item">
            <h4>scale-down</h4>
            <ym-image :src="src"  fit="scale-down" style="width:100px;height:100px"></ym-image>
        </div>
    </div>
</template>

<script setup lang="ts">

const src = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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