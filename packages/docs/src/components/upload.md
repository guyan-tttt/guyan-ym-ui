---
title: Upload
description: Upload 上传器组件

next:
  link: /components/image
  text: Image 图片

prev:
  link: /components/form
  text: Form 表单
---

#  Upload 上传器

通过点击或者拖拽上传文件,图片等。


::: tip
todo: form校验待开发
:::

## 基础用法

通过`multiple`属性可以开启多选文件。通过`maxSize`属性可以限制上传文件的数量。通过`accept`属性可以限制上传文件的类型。文件变化后会触发`file-change`事件。
::: preview
demo-preview=../demo/upload/Basic.vue
:::

## 拖拽上传

通过`draggable`属性可以开启拖拽上传。

::: preview
demo-preview=../demo/upload/Draggable.vue
:::

## 远程上传

通过`action`属性指定上传的url，如果不传则代表默认不使远程上传。如果指定对应的路径，则会触发`upload`事件。


## 头像上传

通过`type`属性指定为avatar模式，可以上传头像并预览显示。

::: preview
demo-preview=../demo/upload/Avatar.vue
:::

## 图片墙

通过`list-type`属性指定为picture-card模式，可以上传图片并预览显示。

::: preview
demo-preview=../demo/upload/PictureCard.vue
:::

## Upload API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| multiple | 是否支持多选文件 | boolean | false |
| accept | 接受的文件类型 | string | - |
| maxSize | 最大文件大小（MB） | number | - |
| action | 上传接口地址 | string | - |
| disabled | 是否禁用 | boolean | false |
| type | 上传组件类型 | PropsType | 'default' |
| draggable | 是否支持拖拽上传 | boolean | false |
| v-model | 上传文件列表 | UploadFile[] | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| file-change | 文件改变事件 | files: UploadFile[] |
| upload | 上传事件 | files: UploadFile[] |
| remove | 删除事件 | files: UploadFile |
| upload-success | 上传成功事件 | arg: UploadArgs |
| upload-error | 上传失败事件 | arg: UploadArgs |
| update:modelValue | 上传文件列表更新事件 | files: UploadFile[] |

