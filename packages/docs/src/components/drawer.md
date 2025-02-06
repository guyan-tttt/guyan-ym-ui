---
title: Drawer 抽屉
description: Drawer 组件用于在页面上创建一个从边缘滑出的抽屉面板，常用于显示额外的页面内容或进行操作。
prev:
    link: components/dialog
    text: Dialog 对话框
next:
    link: components/progress
    text: Progress 进度条
---

# Drawer 抽屉
抽屉组件提供了一个从屏幕边缘滑出的面板，用于展示额外信息或操作，而不离开当前页面。

## 基础用法
使用 `v-model` 绑定一个响应式变量控制抽屉的显示和隐藏。可以通过 `title` 属性设置抽屉标题。使用默认插槽传入抽屉主体内容。

::: preview
demo-preview=../demo/drawer/Basic.vue
:::


## 自定义头部和底部
使用 `header` 和 `footer` 具名插槽来自定义头部和底部内容。
在不需要头部或者底部时，可以设置 `header` 和 `footer` 属性为 `false` 来隐藏头部和底部显示。

::: preview
demo-preview=../demo/drawer/CustomHeaderFooter.vue
:::


## 自定义宽度和高度
可以通过 `width` 和 `height` 属性来设置抽屉的宽度和高度。这些属性可以是一个 `string` 的数值类型，还可以传入一个百分比字符串或者一个带单位的字符串。
`width` 和 `height` 属性默认值是 `30%`。`width`只有水平方向的抽屉生效，`height`只有垂直方向的抽屉生效。

::: preview
demo-preview=../demo/drawer/CustomWidthHeight.vue
:::

## 关闭前的回调
使用 `beforeClose` 属性来设置关闭前的回调函数，在回调函数中可以执行一些逻辑操作，比如确认用户是否真的要关闭抽屉，如果用户确认关闭，则调用 `done` 函数来关闭抽屉。

::: preview
demo-preview=../demo/drawer/BeforeClose.vue
:::

## 抽屉位置
可以使用 `position` 属性来设置抽屉的位置，默认是 `right`，还可以设置为 `left`、`top` 和 `bottom`。
只有当 `position` 属性为 `left` 或 `right` 时，`width` 属性才会生效，当 `position` 属性为 `top` 或 `bottom` 时，`height` 属性才会生效。

::: preview
demo-preview=../demo/drawer/Position.vue
:::


## Drawer API
### Props
| Name         | Description           | Type                 | Default |
| ------------ | -------------------- | -------------------- | ------- |
| modelValue   | 是否显示        | boolean        | false   |
| title        | 标题        | string        | -        |
| width        | 宽度        | string | string        |  30%      |
| height       | 高度        | string | string        | 30%       |
| modal        | 是否显示遮罩        | boolean        | true    |
| modalClass   | 遮罩样式        | string        | -        |
| closeOnClickModal | 点击遮罩是否关闭 | boolean        | true    |
| closeOnPressEscape | 按下ESC是否关闭 | boolean        | true    |
| showClose     | 是否显示关闭按钮        | boolean        | true    |
| beforeClose    | 关闭前的回调        | `(done: () => void) => void`   | -        |
| closeIcon     | 关闭图标        | string        | -        |
| zIndex        | 层级        | number        | 2000    |
| customClass   | 自定义类名        | string        | -        |
| appendTo      | 挂载节点        | string        | -        |
| header        | 是否显示头部        | boolean        | true     |
| footer        | 是否显示底部        | boolean        | true     |

### Events
| Name       | Description       | Type                                 |
| --------- | --------------- | ------------------------------------ |
| open       | 打开抽屉时触发       | -                                     |
| close      | 关闭抽屉时触发       | -                                     |
| opened     | 打开动画结束时触发     | -                                     |
| closed     | 关闭动画结束时触发     | -                                     |
| update:modelValue | modelValue 改变时触发 | `(value: boolean) => void` |

### Slots
| Name     | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | -  |
| header  | 头部插槽    | -  |
| footer  | 底部插槽    | -  |