---
title: Progress
description: Progress 进度条

next: 
  link: /components/message
  text: Message 消息提示

prev:
  link: /components/dropdown
  text: Dropdown 下拉菜单
---

# Progress 进度条

展示一个操作进度，告知用户当前数据的处理状态.

## 基础用法
可以使用`width`来指定进度条的宽度，默认为200px,该属性支持三种传入形式。进度条组件必须接收一个`percentage`属性表示当前进度，`percentage`属性必须为`Number`类型，在`0`到`100`之间，且该属性支持响应式。

可以使用`status`指定进度条状态，可选值为`primary`、`success`、`warning`、`danger`，默认为`primary`。且非`primary`状态下进度条的文字提示将变为一个图标。如果需要指定进度条颜色，建议使用`color`属性指定，本属性只是为了提供一些基础可选方案。
::: preview
demo-preview=../demo/progress/Basic.vue
:::

## 文字显示
可以使用`showText`属性来控制文字是否显示，默认为`true`。 可以使用`format`属性来制定一个文字显示的格式函数，进度条将显示文字`format(percentage)`的返回值。
::: tip
注意： `format`属性只在`showText`为`true`时生效。
:::
::: preview
demo-preview=../demo/progress/showText.vue
:::

## 进度行内展示

进度条的文字可以设置在进度条外部，通过设置`textInside`属性可以控制文字显示的位置。该属性接受一个`boolean`值，默认为`false`。如果需要下开启文字内部显示，需要保证进度条高度足够大，可以使用`strokeWidth`属性指定进度条的高度，该属性接受一个`number`值，默认为`6`。

:::tip
注意： 需要保证`strokeWidth`大于20,否则文字将在进度条外部显示。同时需要保证`showText`为`true`。
:::
::: preview
demo-preview=../demo/progress/textInside.vue
:::

## 自定义颜色

进度条的颜色可以通过`color`属性来设置，该属性接受一个`string`值，默认为`#409eff`。且该属性的优先级高于`status`属性。

::: preview
demo-preview=../demo/progress/Color.vue
:::

## 条纹进度条
可以使用`striped`属性来设置进度条为条纹样式，该属性接受一个`boolean`值，默认为`false`。可以使用`stripedFlow`属性来设置条纹是否运动，该属性接受一个`boolean`值，默认为`false`。可以使用`duration`属性来设置条纹运动的时长，该属性接受一个`number`值，默认为`6`。
::: preview
demo-preview=../demo/progress/Striped.vue
::: 

## 环形进度条
可以使用`type`属性来指定进度条的类型，可选值为line或者circle，设置为circle即为环形进度条，默认为line。环形进度条必须使用width属性来指定宽度。同时对于环形进度条来说`textInside,strokeWidth,striped，stripedFlow`等属性将无效。环形进度条同样可以使用`color`属性来指定颜色，该属性的优先级高于`status`属性。
::: preview
demo-preview=../demo/progress/Circle.vue
:::

## 自定义内容
可以通过具名插槽`default`来设置环形进度条的内容，该插槽的默认值为`percentage`。同时插槽的优先级高于`percentage`属性，且插槽会传入一个`percentage`参数表示当前进度。
::: preview
demo-preview=../demo/progress/Slot.vue
:::

## Progress API

### Props

| Name                | Description                  | Type      | Default         |
| ------------------- | ---------------------------- | --------- | --------------- |
| percentage           | 进度值                     | `number`  |  - (必填)              |
| width               | 进度条宽度（包含文字宽度）      | `'string' \| 'number'` |  200             |
| color              | j进度条颜色                 | `string`  | -             |
| status              | 进度条状态                | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'`| primary         |
| showText | 是否显示文字              | `boolean`  | true              |
| textInside                | 文字是否显示在内部（只在strokeWidth > 20 时生效）                        | `boolean`  | false |
| strokeWidth         | 进度条高度                     | `number`  |  6            |
| format           | 自定义显示文字                     | `(percentage: number) => string` | -           |
| striped           | 是否显示条纹                     | `boolean`  | false           |
| stripedFlow           | 条纹是否运动                     | `boolean`  | false           |
| duration           | 条纹运动时长                     | `number`  | 6           |
| type           | 进度条类型                     | `enum` - `'line'\| 'circle'`  | line           |

### Slots

| Name                | Description                  |
| ------------------- | ---------------------------- |
| default           | 自定义内容                     |