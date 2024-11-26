import { set } from 'lodash-es'
import MessageBox from './methods'
import { type App } from 'vue'


export const YmMessageBox = MessageBox

set(YmMessageBox, "install",(app:App) => {
  app.config.globalProperties.$YmMessageBox = MessageBox
  app.config.globalProperties.$alert = MessageBox.alert
  app.config.globalProperties.$confirm = MessageBox.confirm
  app.config.globalProperties.$prompt = MessageBox.prompt
})

export default YmMessageBox

export * from './type';