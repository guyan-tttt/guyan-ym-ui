---
title: Switch
description: Switch 开关

next:
  link: /components/form
  text: Form 表单

prev:
  link: /components/input
  text: Input 输入框
---

# Switch 开关

开关选择器，表示两种相互对立的状态间的切换，多用于触发「开/关」。


## 基础用法
可以使用一个 `v-model` 绑定开关的选中状态。默认情况下，`Switch` 的选中状态为 `false`，且绑定的值为布尔值。

::: preview
demo-preview=../demo/switch/Basic.vue
:::

## 开关尺寸
可以使用 `size` 属性来定义开关的大小，默认不用书写，可选值为 `small` ,`large`。

::: preview
demo-preview=../demo/switch/Size.vue
:::


## 文字描述

可以使用 `activeText`和`inactiveText` 属性来定义开关打开或关闭时的文字描述。

::: preview
demo-preview=../demo/switch/Text.vue
:::


## 自定义Value

可以使用 `activeValue`和`inactiveValue` 属性来自定义激活时的值。

::: preview
demo-preview=../demo/switch/Value.vue
:::

## 禁用状态

可以使用 `disabled` 属性来定义开关打开或关闭时的文字描述。

::: preview
demo-preview=../demo/switch/Disabled.vue
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
