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
  <!-- <BarCode value="https://example.com"></BarCode> -->
   <RichText :content="strContent" :is-img-preview="true"></RichText>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import Upload from './components/Upload.vue'
import ImageMark from '../../components/ImageMark/ImageMark.vue';
import ImageCropper from './components/ImageCropper.vue';
import BarCode from './components/BarCode.vue';
import RichText from '../../components/RichText/RichText.vue';

const strContent = `
<div class="catalogTreeItem-module_CatalogItem_xkX7p" data-rbd-draggable-context-id="0" data-rbd-draggable-id="MpuGrpGWpI8QYPGM" tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="MpuGrpGWpI8QYPGM" data-rbd-drag-handle-context-id="0" draggable="false" style="position: absolute; left: 0px; top: 504px; height: 36px; width: 100%; cursor: pointer;"><a class="catalogTreeItem-module_content_fLFbS catalogTreeItem-module_selected_dK6Ji active" href="/u33305601/guyan-ym-ui/et4pahchq872yt5c" style="padding-left: 24px;" aria-current="page"><div class="catalogTreeItem-module_collapseContent_09v0m"><div class="catalogTreeItem-module_collapseIconWrapper_XcS8B catalogTreeItem-module_collapsed_u8yPq"></div></div><div class="catalogTreeItem-module_titleWrapper_sFyDt" title="RichText 富文本渲染组件"><span class="catalogTreeItem-module_title_snpKw">RichText 富文本渲染组件</span></div><div class="catalogTreeItem-module_catalogItemActionsWrapper_rlWUC"><span class="catalogTreeItem-module_catalogItemActions_hcHGq"><span class="catalogTreeItem-module_btnItem_HrYZm catalogTreeItem-module_btnGap_uDkKN larkui-popover-trigger"><svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-more icon-svg index-module_size_wVASz" data-name="More" style="width: 16px; min-width: 16px; height: 16px;"><path d="M128 227.008c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20ZM128 148c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm0-78.992c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z" fill="currentColor" fill-rule="nonzero"></path></svg></span><span class="catalogTreeItem-module_btnItem_HrYZm larkui-popover-trigger"><div><svg width="1em" height="1em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="larkui-icon larkui-icon-add icon-svg index-module_size_wVASz" data-name="Add" style="width: 16px; min-width: 16px; height: 16px;"><path d="M128 28c5.523 0 10 4.477 10 10v80h80c5.523 0 10 4.477 10 10s-4.477 10-10 10h-80v80c0 5.523-4.477 10-10 10s-10-4.477-10-10v-80H38c-5.523 0-10-4.477-10-10s4.477-10 10-10h80V38c0-5.523 4.477-10 10-10Z" fill="currentColor" fill-rule="evenodd"></path></svg></div></span></span></div></a></div>
<a onclick="alert(1)">xaxM</a>
<img src="https://img95.699pic.com/photo/50059/8720.jpg_wh300.jpg!/fh/300/quality/90" />
`

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