---
title: Collapse
description: Collapse 组件文档

next:
  link: components/collapse
  text: Collapse 折叠面板

prev:
  link: components/button
  text: Button 按钮
---

# Icon 按钮

Icon图标组件，本项目使用了[fontawesome](https://fontawesome.com/)图标库，具体使用方法请参考[fontawesome官网](https://fontawesome.com/)

## 基础用法

使用 `icon`指定icon，使用 `type`来定义按钮的样式。

::: preview
demo-preview=../demo/icon/Basic.vue
:::

## 图标尺寸

使用 `size`属性来定义图标的尺寸。

::: preview
demo-preview=../demo/icon/Size.vue
:::


## 图标动画

使用 `pulse`,`bounce`,`shake`,`beat`,`fade`等属性来定义图标的尺寸。

::: preview
demo-preview=../demo/icon/Pulse.vue
:::

## 图标颜色·
使用 `color`属性来定义图标的尺寸。

::: preview
demo-preview=../demo/icon/Color.vue
:::

## Icon API
本篇api介绍只包含部分常用的属性，若想了解更多的属性请参考[fontawesome官网](https://fontawesome.com/)
### Props

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| size              | 尺寸                              | `enum` - `'2xs'\| 'sm'\| 'xl'\|'1x'\| '2x'\|'3x'\`                         | —       |
| type              | 类型                              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| fixedWidth            | 是否开启固定宽度                 | `boolean`                                                        | false   |
| flip             | 用于水平或垂直翻转图标                 | `enum` - `'horizontal'\| 'vertical'\| 'both'`                     | -   |
| icon            | 图标名称                         | `string`                                                                | -   |
| pulse       | 是否显示脉冲动画                   | `boolean`                                                          | false   |
| spin           | 是否显示旋转动画                  | `boolean`                                                        | false   |
| bounce      | 是否显示弹跳动画                   | `boolean`                                                         | false |
| shake          | 是否显示摇晃动画               | `boolean`                                                            | false   |
| beat              | 是否显示心跳动画                          | `boolean`                                                | false      |
| fade         | 是否显示渐入渐出动画              | `boolean`                                                                 | false   |
| color       |图标颜色                           | `string`(颜色值)                                                              | -  |


