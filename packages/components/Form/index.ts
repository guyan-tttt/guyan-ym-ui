import Form from './Form.vue'
import FormItem from './FormItem.vue'

import { withInstall } from '@ym-UI/utils'

export const YmForm = withInstall(Form)
export const YmFormItem = withInstall(FormItem)

export default {
  YmForm,
  YmFormItem
}

export * from './type'
export * from './hooks'