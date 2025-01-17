---
title: Dialog
description: Dialog 组件

prev:
  link: components/dropdown
  text: Dropdown 下拉菜单

next:
  link: components/progress
  text: Progress 进度条
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相应的操作。


## 基础用法

使用 `v-model` 绑定一个响应式变量控制对话框显示隐藏。可以通过`title`属性设置对话框标题。使用默认插槽传入对话框主体内容。
::: preview
demo-preview=../demo/dialog/Basic.vue
:::

## 自定义头部和底部
使用`header`和`footer`具名插槽来自定义头部和底部内容。
在不需要头部或者底部时，可以设置`header`和`footer`属性为`false`来隐藏头部和底部显示。

::: preview
demo-preview=../demo/dialog/CustomHeaderFooter.vue
:::

## 自定义宽度

可以通过 `width` 属性来设置对话框的宽度。该属性接受三种数据类型，分别是`number`整数数值类型，表示对话框宽度，单位为`px`，也可以是一个`string`的数值类型，还可以传入一个百分比字符串或者一个带单位的字符串。
可以使用` fullscreen`属性来设置对话框全屏显示。
::: preview
demo-preview=../demo/dialog/CustomWidth.vue
:::

## 延迟开启与关闭
通过`openDelay`和`closeDelay`属性来设置对话框开启和关闭的延迟时间，单位为毫秒。

::: preview
demo-preview=../demo/dialog/Delay.vue
:::

## Dialog API

### Props

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| modelValue | 是否显示 | boolean | false |
| title | 标题 | string | - |
| width | 宽度 | string | number | - |
| fullscreen | 是否全屏 | boolean | false |
| top | 距离顶部距离 | string | - |
| modal | 是否显示遮罩 | boolean | true |
| modalClass | 遮罩样式 | string | - |
| lockScroll | 是否锁定滚动 | boolean | true |
| openDelay | 打开延时 | number | 0 |
| closeDelay | 关闭延时 | number | 0 |
| closeOnClickModal | 点击遮罩是否关闭 | boolean | true |
| closeOnPressEscape | 按下ESC是否关闭 | boolean | true |
| showClose | 是否显示关闭按钮 | boolean | true |
| beforeClose | 关闭前的回调 | `(done: () => void) => void` | - |
| center | 是否居中 | boolean | false |
| closeIcon | 关闭图标 | string | - |
| zIndex | 层级 | number | 2000 |
| customClass | 自定义类名 | string | - |
| appendTo | 挂载节点 | string | - |
| header | 是否显示头部 | boolean | true |
| footer | 是否显示底部 | boolean | true |
| alginCenter | 是否居中 | boolean | false |


### Events

| Name   | Description    | Type                                 |
| ------ | -------------- | ------------------------------------ |
| open   | 打开对话框时触发 | -                                    |
| close  | 关闭对话框时触发 | -                                    |
| opened | 打开动画结束时触发 | -                                    |
| closed | 关闭动画结束时触发 | -                                    |
| update:modelValue | modelValue 改变时触发 | `(value: boolean) => void` |

### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | -  |
| header  | 头部插槽    | -  |
| footer  | 底部插槽    | -  |

