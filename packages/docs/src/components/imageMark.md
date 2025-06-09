---
title: ImageMark
description: ImageMark 组件文档

next:
  link: components/imageCropper
  text: ImageCropper 图片裁剪

prev:
  link: components/image
  text: Image 图片
---

# ImageMark 图片标注(1.3.1)
::: tip
ps: 该组件基于`fabric.js`实现，封装了基本的图标标注功能，如画线，画矩形，画圆形等等。
:::
用于在图片上添加标注信息。

## 基础用法
使用`src`属性来指定图片的地址，通过`utils`传入需要的标注工具。
::: preview
demo-preview=../demo/imageMark/Basic.vue
:::

## 数据导出
可以使用`exportData`方法导出标注的数据，导出数据是一个数组，第一项为背景图。
::: preview
demo-preview=../demo/imageMark/ExportData.vue
:::


## ImageMark API

### Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | `string` | - |
| width | 图片宽度 | `number` | - |
| utils | 绘图工具 | `EditorType[]` | - |
| hidden | 是否隐藏绘图对象 | `boolean` | - |
| clear | 是否显示清空画布按钮 | `boolean` | - |
| shapes | 绘图对象列表 | `ShapeObj[]` | - |
| reset | 是否显示恢复画布按钮 | `boolean` | - |
| maxWidth | 画布最大宽度 | `number` | - |
| maxHeight | 画布最大高度 | `number` | - |
| modelValue | 画布对象数组 | `FabricObject[]` | - |



### Events

| 事件名 | 描述 | 类型 |
| --- | --- | --- |
| mouse:down | 鼠标按下时触发 | `(e: 'mouse:down', event: any) => void` |
| mouse:move | 鼠标移动时触发 | `(e: 'mouse:move', event: any) => void` |
| mouse:up | 鼠标释放时触发 | `(e: 'mouse:up', event: any) => void` |
| object:moving | 对象移动时触发 | `(e: 'object:moving') => void` |
| object:modified | 对象修改时触发 | `(e: 'object:modified') => void` |
| object:scaling | 对象缩放时触发 | `(e: 'object:scaling') => void` |
| object:rotating | 对象旋转时触发 | `(e: 'object:rotating') => void` |
| selection:created | 选择创建时触发 | `(e: 'selection:created') => void` |
| selection:updated | 选择更新时触发 | `(e: 'selection:updated') => void` |
| selection:cleared | 选择清除时触发 | `(e: 'selection:cleared') => void` |
| hidden | 隐藏绘图对象时触发 | `(e: 'hidden', value: boolean) => void` |
| clear | 清空画布时触发 | `(e: 'clear', value: boolean) => void` |
| reset | 恢复画布时触发 | `(e: 'reset', value: boolean) => void` |
| update:modelValue | 更新画布对象数组时触发 | `(e: 'update:modelValue', shapes: FabricObject[]) => void` |


### Methods

| 属性/方法名 | 描述 | 类型 |
| --- | --- | --- |
| fabricObj | Fabric画布对象 | `Canvas` |
| shapeObjList | 绘图对象列表 | `FabricObject[]` |
| update | 更新绘图对象列表 | `(shapes: ShapeObj[]) => void` |
| clear | 清空画布 | `() => void` |
| hidden | 隐藏/显示绘图对象 | `(value: boolean) => void` |
| exportData | 导出标注数据 | `() => void` |
