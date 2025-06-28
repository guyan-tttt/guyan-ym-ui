<template>
  <canvas ref="barcodeCanvas" :width="width" :height="height" class="barcode-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, withDefaults } from 'vue'
import JsBarcode from 'jsbarcode'

// 定义props类型
interface Props {
  type: 'QRCode' | 'Code128' | 'EAN13' | 'CODE39' | 'UPC-A'
  value: string
  width?: number
  height?: number
  foregroundColor?: string
  backgroundColor?: string
  displayValue?: boolean
}

// 设置默认props
const props = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 100,
  foregroundColor: '#000000',
  backgroundColor: '#FFFFFF',
  displayValue: true
})

// 获取canvas元素引用
const barcodeCanvas = ref<HTMLCanvasElement | null>(null)

/**
 * 生成条形码/二维码
 */
const generateBarcode = () => {
  if (!barcodeCanvas.value) return

  const { type, value, width, height, foregroundColor, backgroundColor, displayValue } = props

  try {
    // 根据类型生成对应的条码
    JsBarcode(barcodeCanvas.value, value, {
      format: type,
      width: width / 200, // jsbarcode width是比例值
      height: height,
      displayValue: displayValue,
      color: foregroundColor,
      background: backgroundColor
    })
  } catch (error) {
    console.error('Failed to generate barcode:', error)
  }
}

// 组件挂载后生成条码
onMounted(() => {
  generateBarcode()
})

// 监听props变化重新生成条码
watch(
  () => [props.type, props.value, props.width, props.height, props.foregroundColor, props.backgroundColor],
  () => {
    generateBarcode()
  }
)
</script>

<style scoped>
.barcode-canvas {
  width: 100%;
  height: auto;
  display: block;
}
</style>