---
title: Avatar 
description: Avatar 组件

next:
  link: /components/message
  text: Message 消息

prev:
  link: /components/progress
  text: Progress 进度条
---

# Avatar 头像
Avatar 组件用来展示用户头像。

## 基础用法

可以使用`size`属性来设置头像的大小，默认为 `medium`。使用`shape`属性来设置头像的形状，默认为 `circle`。
`size`属性接受 `large`、`medium`、`small`三个字符串值，或者传入一个`number`值来设置大小，单位为`px`。

::: preview
demo-preview=../demo/avatar/Basic.vue
:::

## 显示类型

可以使用`src`属性来设置头像的图片地址，也可以使用`icon`属性来设置头像的图表类型，如果两者均没有设置，还可以使用默认插槽来设置头像的内容。

::: preview
demo-preview=../demo/avatar/Type.vue
:::

## Avatar API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------- | ------- |
| src | 头像图片的 URL | `string` | - |
| icon | 头像的图标类型 | `string` | - |
| size | 头像的大小 | `string` \| `number` | `medium` |
| shape | 头像的形状 | `string` | `circle` |
| alt | 头像的替代文本 | `string` | - |
| fit | 头像的填充模式 | `string` | `cover` |


### Events

| Name  | Description             | Type                         |
| ----- | ----------------------- | ---------------------------- |
| error | 头像加载失败时触发的事件 | `(error: Error) => void` |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | 默认插槽，用于自定义头像内容 |
    

