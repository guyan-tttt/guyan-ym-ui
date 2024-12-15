---
title: ImageViewer 图片预览器
description: 图片预览器组件

prev:
  link: components/overlay
  text: Overlay 遮罩层

next:
  --
---

# ImageViewer 图片预览器

## 基础用法
使用`urlList`传入需要预览的图片列表，使用`initialIndex`指定预览的初始索引。使用实例的`open`方法来打开预览框，使用实例的`close`方法来关闭预览框。
:::tip
注意： 底层使用了`Vue3`的`Teleport`组件，具体用法可参考`Teleport`组件文档。
:::

::: preview
demo-preview=../demo/imageViewer/Basic.vue
:::

## 关闭预览器
可以点击预览器右上角的关闭图标来关闭预览器，也可以使用实例的`close`方法来关闭预览器。
可以使用` hideOnClickModal`属性来指定是否点击遮罩层关闭预览器。
可以使用`closeOnPressEsc`属性来指定是否按下ESC键关闭预览器。

::: preview
demo-preview=../demo/imageViewer/Close.vue
:::

## 缩放旋转
可以使用`zoomRate`来指定图片的缩放比例，使用`minScale`来指定图片的最小缩放比例，使用`maxScale`来指定图片的最大缩放比例。
打开预览器后可以使用滚轮或者底部放大缩小按钮来缩放图片。可以使用底部旋转按钮来旋转图片。
::: preview
demo-preview=../demo/imageViewer/ZoomRotate.vue
:::



## ImageViewer API

### Props

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| urlList   | 图片列表            | `string[]`           | `[]`     |
| initialIndex | 初始索引            | `number`             | `0`     |
| hideOnClickModal | 是否点击遮罩层关闭预览器 | `boolean`            | `true`  |    
| closeOnPressEsc | 是否按下ESC键关闭预览器 | `boolean`            | `true`  |
| zoomRate | 图片缩放比例        | `number`             | `1`     |
| minScale | 图片最小缩放比例    | `number`             | `0.1`   |
| maxScale | 图片最大缩放比例    | `number`             | `5`     |




### Events

| Name   | Description    | Type                                 |
| ------ | -------------- | ------------------------------------ |
|close| 关闭预览器时触发 | `() => void` |
| switch| 切换图片时触发 | `(url: string, index: number) => void` |
| rotate | 旋转图片时触发 | `(angle: number) => void` |
| wheel | 滚轮事件 | `(event: WheelEvent) => void` |

 