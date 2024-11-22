---
title: Card
description: Card 卡片

next:
  link: /components/alert
  text: Alert 警示

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

使用`slot`传入卡片的内容，包括header,content,footer三个部分。content使用默认插槽传递，header使用`header`插槽，footer使用`footer`插槽。
::: preview
demo-preview=../demo/card/Basic.vue
:::

## 使用props传递内容
使用`header`,`footer`,`content`三个props来传递内容。(可以与上面的slot方式混合使用，组件优先渲染props内容)
::: preview
demo-preview=../demo/card/Props.vue
:::


## 卡片阴影
使用`shadow`属性可以给卡片添加阴影。可以控制阴影的出发时机。
::: preview
demo-preview=../demo/card/Shadow.vue
:::


## Card API

### Props

| Name           | Description | Type                                                     | Default |
| -------------- | ----------- | -------------------------------------------------------- | ------- |
| header        | 卡片头部内容，可以使用slot传入| `string`                                  | -       |
| content        | 卡片主体内容，可以使用slot传入| `string`                                  | -      |
| footer        | 卡片底部内容，可以使用slot传入| `string`                                  | -       |
| shadow       | 阴影触发方式    | `always` | `hover` | `never`                           | always   |
| contentClass   | 主题内容类名    | `string`                                              |    -    |
| contentStyle   | 主体内容样式    | `CSSProperties`                                       |    -    |




### Slots

| Name    | Description |
| ------- | ----------- |
| default | 默认插槽    |
| header | 头部插槽    |
| footer | 底部插槽    |

