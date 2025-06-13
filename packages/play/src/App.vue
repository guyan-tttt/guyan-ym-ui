<template>
  <!-- <DraggableList 
    v-model:items="list" 
    axis="vertical"
  >
    <template #item="{ item, index }">
      <div class="custom-item">
        <span class="handle">☰</span>
        {{ item.text }}
      </div>
    </template>
  </DraggableList> -->

  <!-- <Upload type="default"  v-model="fileList" @file-change="updateChange" draggable>
     <img v-if="imgSrc" :src="imgSrc" alt="" class="img" > 
  </Upload> -->
  <!-- <ImageMark
    ref="imageMarkRef"
    :utils="['rect', 'circle']"
    src="https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg"
  ></ImageMark>
  <ym-button @click="exportData">导出数据</ym-button>
  <ym-button @click="update">渲染数据</ym-button>
  <ym-button @click="clear">清空数据</ym-button>
  <ym-button @click="hidden">隐藏数据</ym-button> -->
  <!-- <ImageCropper
    src="https://jeek-space-blog.top:3000/images/article/c286943e69f11921ebff214c3fa1e1dd.png"
  ></ImageCropper> -->
  <ym-switch activeText="超长文本内容测试-开启" inactiveText="超长文本内容测试-关闭"></ym-switch>
  <ym-switch size="small" activeText="超长文本内容测试-开启" inactiveText="超长文本内容测试-关闭"></ym-switch>
  <ym-switch size="large" activeText="超长文本内容测试-开启" inactiveText="超长文本内容测试-关闭"></ym-switch>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import Upload from './components/Upload.vue'
// import ImageCropper from './components/ImageCropper.vue';

// const imageMarkRef = ref<any>(null);
// const list  = []
// const exportData = () => {
//   list.value = imageMarkRef.value?.exportData();
//   console.log(list.value);
// }

// const update = () => {
//   imageMarkRef.value?.update(list.value)
//   console.log('update');
// }

// const clear = () => {
//   imageMarkRef.value?.clear()

// }

// const hidden = () => {
//   imageMarkRef.value?.hidden()
// }
</script>

<style>
.custom-item {
  display: flex;
  align-items: center;
  padding: 16px;
  transition: all 0.3s ease;
}

.handle {
  margin-right: 12px;
  cursor: grab;
}
.img {
  width: 180px;
  height: 180px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}
</style>