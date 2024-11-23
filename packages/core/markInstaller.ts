import { each } from 'lodash-es'
import type { Plugin , App} from 'vue'

import { provideGlobalConfig , type ConfigProviderProps} from '@ym-UI/components'

export function markInstaller(components: Plugin[]) {
    const installer = (app: App, options?: ConfigProviderProps ) => {
        each(components, (component) => app.use(component))
        if(options) {
            provideGlobalConfig(options,app,true) // true 表示全局配置
        }
    }

    return installer as Plugin
}


export default markInstaller