---
title: Input
description: Input 输入框组件

next:
  link: components/collapse
  text: Collapse 折叠面板

prev:
  link: components/MessageBox
  text: MessageBox 消息弹窗
---

# Input 输入框

通过鼠标或键盘输入字符。

::: tip
ps: 本组件会处理`v-model`的绑定值，但组件不支持`v-model`修饰符，如需使用修饰符，请自行处理。
:::

## 基本用法

::: preview
demo-preview=../demo/input/Basic.vue
:::

## 禁用状态
可以使用`disabled`属性来禁用输入框。

::: preview
demo-preview=../demo/input/Disabled.vue
:::

## 一键清空
可以使用`clearable`属性来指定输入框是否可一键清空。输入聚焦之后，右侧会出现一个清空按钮，点击清空按钮即可清空输入框内容。（输入框没有内容时无效）

::: preview
demo-preview=../demo/input/Clearable.vue
:::

## 密码框
可以使用`type="password"`属性来指定输入框为密码框。密码框默认会隐藏输入内容。可以使用`showPassword`属性来指定密码框是否需要显示密码，指定属性之后右侧会有一个显示按钮，可以切换输入信息的显示。这个属性只有在`type="password"`时生效。

::: preview
demo-preview=../demo/input/Password.vue
:::

## 自定义图标
可以使用`prefix`和`suffix`插槽来自定义图标。。图标会显示在输入框的内部，显示在输入框的起始位置和结束位置。也可以通过`prepend`和`append`插槽来自定义图标。图标会显示在输入框的起始位置和结束位置。
::: preview
demo-preview=../demo/input/Icon.vue
:::

## 文本域
可以使用`type="textarea"`属性来指定输入框为文本域。文本域默认会显示多行输入框。
::: preview
demo-preview=../demo/input/Textarea.vue
:::

## 尺寸
可以使用`size`属性来指定输入框的大小。除了默认大小外，还可以指定`small`、`large`两种尺寸。默认尺寸不需要指定`size`属性。
::: preview
demo-preview=../demo/input/Size.vue
:::


