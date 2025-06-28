---
title: RichText 
description: 富文本渲染器，支持HTML 格式的文本内容。


next:
  link: components/message
  text: Message 消息提示


prev:
  link: components/pagination
  text: Pagination 分页器
---

# RichText 富文本渲染器(1.3.3)

RichText 组件是一个用于展示富文本内容的 Vue 组件，支持 HTML 内容的渲染、净化以及图片预览功能。

## 基础用法
使用`content`属性传入富文本内容，组件会自动渲染。

::: preview
demo-preview=../demo/richText/Basic.vue
:::

## 净化HTML内容
使用`is-clean`属性开启HTML内容的净化功能，防止XSS攻击。通过`config`属性可以自定义净化规则。
:::tip
净化HTML内容需要引入`DOMPurify`库，提供了一套默认的净化配置规则，可以自定义，具体规则请参考[DOMPurify](https://www.npmjs.com/package/dompurify)。
:::
::: preview
demo-preview=../demo/richText/cleanHtml.vue

:::

## 图片预览
使用`is-img-preview`属性开启图片预览功能，点击富文本中的图片时会自动弹出大图。使用`preview-config`属性可以自定义图片预览的配置。
::: preview
demo-preview=../demo/richText/imgPreview.vue
:::


## RichText API


### Props


| 属性名 | 描述 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `content` | 富文本内容 | `string` | - | - |
| `config` | DOMPurify 配置 | `object` | - | - |
| `isClean` | 是否净化HTML内容 | `boolean` | - | `true` |
| `isImgPreview` | 是否开启图片预览 | `boolean` | - | `false` |
| `previewConfig` | 图片预览配置 | `ImageViewerProps` | - | - |


### Emits

| 事件名 | 描述 | 参数类型 |
| --- | --- | --- |
| `click` | 点击富文本内容时触发 | `MouseEvent` |

### Expose

| 属性名 | 描述 |
| --- | --- |
| `ref` | 组件的根元素引用 |
| `normalizationHtml` | 修改富文本渲染器与内容 |
| `cleanContent` | 净化HTML内容的方法，返回净化后的TrustedHTML对象 |
| `dompurifyIstance` | DOMPurify 实例 |

