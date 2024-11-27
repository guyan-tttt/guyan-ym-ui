---
title: Overlay
description: Overlay 遮罩层

next:
  link: /components/alert
  text: Alert 警示

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Overlay 遮罩层

开启一个全屏遮罩层，用于显示弹窗、加载中、锁屏等场景。

## 基础用法

通过mask属性来控制遮罩层的显示与隐藏。
::: preview
demo-preview=../demo/overlay/Basic.vue
:::


## Overlay  API

### Props

| Name           | Description | Type                                                     | Default |
| -------------- | ----------- | -------------------------------------------------------- | ------- |
| mask        | 遮罩层的显示隐藏| `boolean`                                  | true      |
| zIndex        | 遮罩层的层级 | `number`                                  | -      |
| overlayClass        | 遮罩层的类名 | `string`                                  | -      |







### Slots

| Name    | Description |
| ------- | ----------- |
| default | 默认插槽    |

