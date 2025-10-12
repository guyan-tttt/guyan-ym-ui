---
title: LightCode
description: LightCode 代码高亮组件

next:
  link: components/message
  text: Message 消息提示

prev:
  link: components/richText
  text: RichText 富文本
---

# LightCode 代码高亮组件（1.3.5）

通过鼠标或键盘输入字符。


## 基本用法

使用`code`属性传入需要高亮显示的代码字符串。
::: preview
demo-preview=../demo/lightCode/Default.vue
:::


## 自定义宽高
可以通过`width`和`height`属性自定义组件宽高.

::: preview
demo-preview=../demo/lightCode/Width.vue
:::


## 代码复制
::: preview
demo-preview=../demo/lightCode/Copy.vue
:::


## 语言类型
::: preview
demo-preview=../demo/lightCode/Language.vue
:::

## 主题类型
::: preview
demo-preview=../demo/lightCode/Theme.vue
:::

## 自定义工具栏
可以使用`custom`开启工具栏显示，并通过`tool`插槽自定义工具栏内容。
::: preview
demo-preview=../demo/lightCode/Tool.vue
:::

## LightCode  API

### Props


| Name     | Description | Type               | Default |
| -------- | ----------- | ------------------ | ------- |
| code | 要显示的代码内容 | `string` | - | 是 |
| language | 代码语言类型 | `string` | `"javascript"` | 否 |
| theme | 代码高亮主题 | `string` | `"atom-one-dark"` | 否 |
| width | 组件宽度 | `string \| number` | `"700px"` | 否 |
| height | 组件高度 | `string \| number` | `"auto"` | 否 |
| custom | 是否显示自定义工具栏 | `boolean` | `true` | 否 |



### Events
| Name     | Description | Type               |
| -------- | ----------- | ------------------ |
| copy | 代码复制时触发 | `(code: string) => void` |
| languageChange | 语言切换时触发 | `(language: string) => void` |
| themeChange | 主题切换时触发 | `(theme: string) => void` |


### Exposes

| Name  | Description  | Type         |
| ----- | ------------ | ------------ |
| copyCode | 复制代码内容，返回复制的代码 | `() => string` |
| setLanguage | 设置代码语言 | `(language: string) => void` |
| setTheme | 设置代码主题 | `(theme: string) => void` |



### Slots

| Name  | Description  |
| ----- | ------------ |
| tool | 自定义工具栏内容 |

### Constants

#### light_light_language_list

```js
const light_language_list = [
  "javascript",
  "css",
  "html",
  "json",
  "markdown",
  "typescript",
  "php",
  "python",
  "java",
  "c",
  "c++",
  "c#",
  "go",
  "kotlin",
  "ruby",
  "swift",
  "rust",
  "shell",
  "sql",
  "yaml",
  "dart",
]

```

#### light_theme_list
```js
 const light_theme_list = [
  "atom-one-dark",
  "a11y-dark",
  "a11y-light",
  "agate",
  "an-old-hope",
  "arduino-light",
  "arta",
  "brown-paper",
  "codepen-embed",
  "color-brewer",
  "cybertopia-cherry",
  "dark",
  "default",
  "devibeans",
  "docco",
  "far",
  "felipec",
  "foundation",
  "github-dark-dimmed",
  "github-dark",
  "github",
  "gml-dark"
];
```



