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

可以使用 `filterable` 属性控制选项框的输入检索，可以使用 `filterMethod` 属性自定义过滤方法。如果不传递`filterMethod`属性，则默认使用`label`属性进行过滤。

::: preview
demo-preview=../demo/select/Filterable.vue
:::
## 远程检索

输入关键字以从远程服务器中查找数据。

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为true，同时传入一个`remoteMethod`。 `remoteMethod`为一个Function，它会在输入值发生变化时调用，参数为当前输入值。 

::: preview
demo-preview=../demo/select/Remote.vue
:::




## Select API

### Props

| Name           | Description    | Type                                                     | Default |
| -------------- | -----------    | -------------------------------------------------------- | ------- |
| v-model        | 绑定value值     | `boolean`                                                 | -       |
| disabled       | 是否禁用        | `boolean`                                                | false   |
| options        | 选项数组        | `SelectOptionProps[]`                                                | -  |
| placeholder    | 文字占位符（原生） | `string`                                                 | -   |
| clearable         | 是否显示清空按钮 | `boolean`                                                | false   |
| filterable     | 是否可检索          | `boolean `                                               | false |
| remote     | 是否开启远程检索  |  `boolean`                               |  false  |
| renderLabel   | 自定义渲染函数  | `RenderLabelFunc`                                             | -       |
| filterMethod   | 检索函数  | `CustomFilterFunc`                                             | -       |
|  remoteMethod   | 远程检索函数  | `CustomFilterRemoteFunc`                                             | -       |


### Events

| Name           | Description            | Type                         |
| -------------- | ---------------------- | ---------------------------- |
| update:modelValue | 绑定值改变时触发 | `(visible: boolean) => void` |
| change | 绑定值改变时触发 | `(visible: string) => void` |
| visible-change | 绑定值改变时触发 | `(visible: boolean) => void` |
| visible-change | 选择框显示状态切换时触发 | `(visible: boolean) => void` |
| clear | 清空选项时触发 | `() => void` |
| focus | 选择框聚焦触发 | `() => void` |
| blur | 清选择框失焦触发 | `() => void` |



### Expose

| Name | Description | Type         |
| ---- | ----------- | ------------ |
| blur | 失焦        | `() => void` |
| focus | 聚焦        | `() => void` |


## Option API

### Props
| Name           | Description    | Type                                                     | Default |
| -------------- | -----------    | -------------------------------------------------------- | ------- |
| value        | 选项值     | `string`                                                 | -       |
| label      | 选项名        | `string`                                                |    |
| disabled?        | 是否禁用        | `disabled`                                                | false  |


## Types
### SelectOptionProps

```ts
interface SelectOptionProps {
  value: string;
  label?: string;
  disabled?: boolean;
}
```
### RenderLabelFunc

```ts
type RenderLabelFunc = (option: SelectOptionProps) => string;
```

### CustomFilterFunc

```ts
type CustomFilterFunc = (query: string, option: SelectOptionProps) => boolean;
```

### CustomFilterRemoteFunc

```ts
type CustomFilterRemoteFunc = (query: string) => void;
```
