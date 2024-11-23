import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import YmUi, { en} from 'guyan-ym-ui'


import 'guyan-ym-ui/dist/index.css';
// import type  * as Type  from 'guyan-ym-ui/dist/types/components/index.d.ts'

const app = createApp(App)
app.use(YmUi, {
  locale: en
})
app.mount('#app')
