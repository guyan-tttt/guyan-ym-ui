---
title: ImageMark
description: ImageMark 组件文档

next:
  link: components/overlay
  text: Overlay 遮罩层

prev:
  link: components/imageMark
  text: ImageMark 图片标注
---

# ImageCropper 图片裁剪(1.3.2)
::: tip
ps: 该组件基于`vue-cropper`二次整合封装，使用中如果遇到问题及描述不清晰等，可以进一步参考`vue-cropper`的文档。
vue-cropper: https://github.com/xyxiao001/vue-cropper
:::
用于处理图片裁剪，生成新图片并下载导出。

## 基础用法
使用`src`属性来指定图片的地址。使用`width`属性来指定图片的宽度。`autoCropWidth`属性用来指定裁剪框的宽度，`autoCropHeight`属性用来指定裁剪框的高度。

::: preview
demo-preview=../demo/imageCropper/Basic.vue
:::

## 图片预览 & 下载
使用该组件的实例方法`exportImage`导出图片裁剪数据。
::: preview
demo-preview=../demo/imageCropper/exportImage.vue
:::


## ImageCropper API


### Props

| 属性名 | 描述 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| `src` | 图片地址 | `string` | - | - |
| `width` | 图片宽度 | `number` | - | - |
| `height` | 图片高度 | `number` | - | - |
| `outputType` | 裁剪生成图片的格式 | `string` | - | `jpeg`, `png`, `webp`（根据上下文推测） |
| `outputSize` | 裁剪生成图片的质量 | `number` | - | 0.1 ~ 1（根据上下文推测，实际值可能根据实现有所不同） |
| `info` | 是否显示裁剪框的大小信息 | `boolean` | `true`（根据上下文推测，实际默认值可能不同） | `true`, `false` |
| `fixed` | 是否开启截图框宽高固定比例 | `boolean` | `false`（根据上下文推测，实际默认值可能不同） | `true`, `false` |
| `autoCrop` | 是否默认生成截图框 | `boolean` | `false`（根据上下文推测，实际默认值可能不同） | `true`, `false` |
| `centerBox` | 截图框是否被限制在图片里面 | `boolean` | `false`（根据上下文推测，实际默认值可能不同） | `true`, `false` |
| `mode` | 图片默认渲染方式 | `string` | `contain`（根据上下文推测，实际默认值可能不同） | `contain`, `cover`, `100px`, `100% auto`（根据上下文推测） |
| `limitMinSize` | 裁剪框限制最小区域 | `number` | `10`（根据上下文推测，实际默认值可能不同） | - |
| `fillColor` | 导出时背景颜色填充 | `string` | - | `#ffffff`, `white`（根据上下文推测） |


### Emits

| 事件名 | 描述 | 参数类型 |
| --- | --- | --- |
| `realTime` | 实时裁剪数据变化时触发 | `any` |
| `imgMoving` | 图片移动时触发 | `any` |
| `cropMoving` | 裁剪框移动时触发 | `any` |
| `imgLoad` | 图片加载完成时触发 | `any` |

### Methods

| 属性名 | 描述 | 类型 |
| --- | --- | --- |
| `exportImage` | 导出裁剪后的图片 | `() => void` |
| `cropper` | VueCropper 实例 | `VueCropper` |
| `imgSrc` | 当前图片的源地址 | `string` |
