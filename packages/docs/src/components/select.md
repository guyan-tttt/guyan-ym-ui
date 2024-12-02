---
title: Select
description: Select 选择器

next:
  link: /components/form
  text: Form 表单

prev:
  link: /components/select
  text: Input 输入框
---

# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。


## 基础用法
::: tip
使用 `v-model` 绑定开关的选中状态。
:::
可以使用`ym-option`来定义选项，使用`v-model`绑定开关的选中状态。

::: preview
demo-preview=../demo/select/Basic.vue
:::

## props定义选项
可以使用 `options` 属性来定义选项，可以传入一个选项数组。

::: preview
demo-preview=../demo/select/Options.vue
:::


## 禁用状态

可以使用`disabled`属性来控制组件的禁用状态。


::: preview
demo-preview=../demo/select/Disabled.vue
:::


## 选项禁用

选择框选项`ym-option`组件可以通过 `disabled` 属性来禁用，如果是props传入的选项，可以使用`disabled`属性来禁用。

::: preview
demo-preview=../demo/select/OptionDisabled.vue
:::

## 可清空单选

可以使用 `clearable` 属性来控制是否显示清空按钮。

::: preview
demo-preview=../demo/select/Clearable.vue
:::
## 自定义选项内容

可以使用 `renderLabel` 属性来自定义`label`内容，该属性接受一个函数，函数参数为`option`对象，需要返回一个`string`或者`VNode`。`props`和`options`传入的选项都可以使用`renderLabel`属性。

::: preview
demo-preview=../demo/select/renderLabel.vue
:::
## 可输入检索框

可以使用 `filterable` 属性控制选项框的输入检索，可以使用 `filterMethod` 属性自定义过滤方法。

::: preview
demo-preview=../demo/select/Filterable.vue
:::




## Switch API

### Props

| Name           | Description | Type                                                     | Default |
| -------------- | ----------- | -------------------------------------------------------- | ------- |
| v-model        | 绑定value值    | `boolean`                                                 | -       |
| disabled       | 是否禁用    | `boolean`                                                | false   |
| size      | 尺寸    | `enum`- `small \|  large`                                                | -  |
| activeText        | 激活时文字    | `string`                                                 | -   |
| inactiveText         | 未激活文字    | `string`                                                | -   |
| activeValue | 自定义激活时的值 | `boolean \| string \| number`      |
| inactiveValue     | 自定义未激活时的值        |  `boolean \| string \| number`          | -    |
| name   | 原生name    | `string`                                                 | -       |


### Events

| Name           | Description            | Type                         |
| -------------- | ---------------------- | ---------------------------- |
| update:modelValue | 绑定值改变时触发 | `(visible: boolean) => void` |
| change | 绑定值改变时触发 | `(visible: boolean) => void` |



### Expose

| Name | Description | Type         |
| ---- | ----------- | ------------ |
| checked | 当前是否选中        | `boolean` |
| focus | 聚焦        | `() => void` |
