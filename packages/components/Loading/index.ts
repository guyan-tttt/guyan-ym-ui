import { vLoading } from './directive.ts'
import  { Loading} from './methods'
import type { App } from 'vue'

export const YmLoading = {
    name: 'YmLoading',
    install(app:App)  {
        app.config.globalProperties.$YmLoading = Loading
        app.directive("loading",vLoading)
    },
    directive: vLoading,
    service: Loading
}

export default YmLoading

export {
    Loading as YmLoadingService,
    vLoading as YmLoadingDirective,
    vLoading
}

export * from './type.ts'