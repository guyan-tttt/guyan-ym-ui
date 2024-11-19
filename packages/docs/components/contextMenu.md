---
title: ContextMenu 右键菜单
description: ContextMenu 组件文档

next:
  link: components/tooltip
  text: tooltip 提示

prev:
  link: components/alert
  text: Alert 警示
---

# ContextMenu 右键菜单 <Badge type="warning" text="测试阶段" />

通过鼠标右键点击来触发一个定制化的菜单而不是默认的浏览器右键菜单。

::: tip
contextmenu: 目前只做了部分功能，且不是完全符合规范，后续会继续优化。
:::

## 基础用法

可使用`options`,`type`来设置菜单项和菜单样式。

::: preview
demo-preview=../demo/contextmenu/Basic.vue
:::

## 自定义菜单内容

通过`customize`属性来开启菜单自定义模式，使用 `menu` 插槽来设置右键菜单的具体内容。

::: preview
demo-preview=../demo/contextmenu/Customize.vue
:::



## ContextMenu API

### Props

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| type     | 类型                 | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| options | 菜单选项（仅在customize为false时生效） | `ContextMenuOptions`            | []   |
| customize | 菜单是否自定义 | `boolean`            | false   |


### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | -  |
| menu | 菜单插槽（仅在customize为true时生效）    | -  |

