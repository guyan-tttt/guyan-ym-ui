import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import YmUI from 'guyan-ym-ui'
console.log(YmUI);

import 'guyan-ym-ui/dist/index.css';
// import type  * as Type  from 'guyan-ym-ui/dist/types/components/index.d.ts'

const app = createApp(App)
app.use(YmUI)
app.mount('#app')
