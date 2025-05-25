---
title: Image
description: Image 组件文档

next:
  link: components/imageMark
  text: ImageMark 图片标注

prev:
  link: components/upload
  text: Upload 上传
---

# Image 图片

## 基础用法
可以使用`fit`属性来指定如何调整图片尺寸，`src`属性来指定图片的来源。使用`alt`属性来指定图片的替代文本。
::: preview
demo-preview=../demo/image/Basic.vue
:::

## 占位内容
可以使用`placeholder`属性来指定图片加载时的占位内容。可以使用`error`属性来指定图片加载失败时的占位内容。
::: preview
demo-preview=../demo/image/Placeholder.vue
:::

## 懒加载
可以使用`lazy`属性来指定图片是否懒加载。懒加载的图片会在滚动到可视区域时加载。默认可视区域是整个视口，可以通过`scrollContainer`属性来指定滚动容器,该属性可以是一个DOM元素或者是一个选择器字符串。
同时也可以使用`loading`属性来指定图片加载的模式，与原生的`loading`属性相同。
::: preview
demo-preview=../demo/image/LazyLoad.vue
:::

## 图片预览
可以使用`previewSrcList`属性来指定预览的图片列表。使用`initialIndex`指定预览的初始索引。使用`closeOnClickModal`属性来指定是否点击遮罩层关闭预览。
::: tip
注意：图片预览效果使用了`image-viewer`组件，其他具体用法可参考`image-viewer`组件文档。
:::

::: preview
demo-preview=../demo/image/Preview.vue
:::


## Image API

### Props

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| src   | 图片地址  | `string` | (必须)      |
| fit| 图片填充方式 |    `enum`-`'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'`         | fill   |
| alt| 图片的替代文本 | `string` | - |
| lazy| 是否懒加载 | `boolean` | false |
| scrollContainer| 滚动容器 | `string \| HTMLElement` | - |
| loading| 图片加载的模式 | `string` | - |
| previewSrcList| 预览的图片列表 | `string[]` | - |
| initialIndex| 预览的初始索引 | `number` | 0 |
| closeOnClickModal| 是否点击遮罩层关闭预览 | `boolean` | false|
| closeOnPressEscape | 是否按下ESC键关闭预览 | `boolean` | false |
| zoomRate | 缩放比例 | `number` | 1.1 |
| minScale | 最小缩放比例 | `number` | 0.1 |
| maxScale | 最大缩放比例 | `number` | 3 |



### Events

| Name   | Description    | Type                                 |
| ------ | -------------- | ------------------------------------ |
| load | 图片加载完成时触发 | `(e: Event) => void` |
| error | 图片加载失败时触发 | `(e: Event) => void` |
| close | 预览关闭时触发 | `(e: Event) => void` |
| open | 预览打开时触发 | `(e: Event) => void` |
| switch | 预览图片切换时触发 | `(e: Event) => void` |

### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| error   | 加载失败的内容 | -             |
| loading | 加载中的内容 | -             |
