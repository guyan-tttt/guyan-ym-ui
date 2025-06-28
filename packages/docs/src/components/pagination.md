---
title: Pagination
description: Pagination 分页器

next:
  link: /components/richText
  text: 富文本渲染器

prev:
  link: components/avatar
  text: Avatar 头像
---

# Pagination 分页器

根据数量的总数来进行分页显示。适用于数据较多时，同时可以快速指定页码跳转。

::: tip
ps: 本组件并未使用`v-model`指令开绑定数据，而是使用`v-bind`指令绑定数据，因为分页器需要根据数据总数来计算页码，所以需要使用`v-bind`指令来绑定数据。但绑定数据变化内部会自动更新页码。如需动态获取页面请使用组件的事件监听手动获取。
:::

## 基本用法
可以使用`total`属性来指定数据的总数，`pageSize`属性来指定每页显示的数量，`currentPage`属性来指定当前页码。默认每页显示5条数据，默认当前页码为1。
::: preview
demo-preview=../demo/pagination/Basic.vue
:::

## 禁用状态
可以使用`disabled`属性来禁用分页器，禁用的分页器无法执行任何操作。

::: preview
demo-preview=../demo/pagination/Disabled.vue
:::

## 带有背景的分页器
可以使用`background`属性来指定分页器是否有背景。该属性只改变分页器的背景颜色，不会改变分页器的样式。颜色默认为主题色，并未提供颜色更改属性，如果需要自定义可自行修改样式。

::: preview
demo-preview=../demo/pagination/Background.vue
:::

## 显示页码数
可以使用`pagerCount`属性来设置需要显示的最大页码数量，超出数量的页码会显示为省略号，默认显示的页码为当前页码前后各`pagerCount`/2个，该属性默认为5。
该属性也是响应式，会自动监听数据变化，如果数据变化会自动更新页码。
::: preview
demo-preview=../demo/pagination/PagerCount.vue
:::

## 自定义按钮
可以使用`prevText`和`nextText`属性来自定义上一页和下一页的按钮文本，默认为`上一页`和`下一页`。可以使用`prevIcon`和`nextIcon`属性来自定义上一页和下一页的按钮图标，默认为`<i class="iconfont icon-arrow-left"></i>`和`<i class="iconfont icon-arrow-right"></i>`。

::: preview
demo-preview=../demo/pagination/Custom.vue
:::

## 页码跳转
可以使用`jumper`开启页码跳转器，在输入框中输入页码即可跳转到指定页码，如果页码不存在则不会有响应，如果输入值为非数值且无法转换则会报错。

::: preview
demo-preview=../demo/pagination/Jumper.vue
:::

## 每页显示数量
可以使用`pageSize`属性来设置每页显示数量，默认为5，可以通过属性`sizeSelector`来开启每页页数选择器，默认为false，开启后可以手动选择每页显示数量。可以通过`pageSizes`来设置选择器的选项，接收一个递增的数字数组，默认为`[5, 10, 15,20]`。
在每次页数切换之后，当前页码会重置为1。
::: preview
demo-preview=../demo/pagination/Size.vue
:::

## Pagination API

### Props


| Name     | Description | Type               | Default |
| -------- | ----------- | ------------------ | ------- |
| type     | 类型  | `enum` - `'text' \| 'password' \| 'textarea'` | text       |
| background    | 是否有背景  | `boolean` | false |
| pageSize | 每页显示数量  | `number` | 5 |
| total | 数据总数  | `number` | 0 |
| pagerCount | 显示的页码数量  | `number` | 5 |
| currentPage| 当前页码  | `number` | 1 |
| pageSizes | 每页显示数量选择器的选项  | `number[]` | [5, 10, 15, 20] |
| prevText | 上一页按钮文本  | `string` | 上一页 |
| nextText | 下一页按钮文本  | `string` | 下一页 |
| prevIcon | 上一页按钮图标  | `string` | `icon-arrow-left` |
| nextIcon | 下一页按钮图标  | `string` | `icon-arrow-right` |
| disabled | 是否禁用  | `boolean` | false |
| sizeSelector | 是否显示每页显示数量选择器  | `boolean` | false |
| jumper | 是否显示页码跳转器  | `boolean` | false |
| totalor | 是否显示数据总数  | `boolean` | false |


### Events
| Name     | Description | Type               |
| -------- | ----------- | ------------------ |
| size-change | 每页显示数量改变时触发  | `(val: number) => void` |
| current-change | 当前页码改变时触发  | `(val: number) => void` |
| prev-click | 上一页按钮点击时触发  | `() => void` |
| next-click | 下一页按钮点击时触发  | `() => void` |



