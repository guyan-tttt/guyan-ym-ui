import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

export function markInstaller(components: Plugin[]) {
    const installer = (app: App) => each(components, (component) => app.use(component))

    return installer as Plugin
}

export function withInstall<T>(component: T) {
    (component as SFCWithInstall<T>).install = (app:App) => {
        const name = (component as any).name
        app.component(name, component as Plugin)

    }
    return component as SFCWithInstall<T>
}


export const withInstallFunction  = <T>(fn: T, name: string) => {
    (fn as SFCWithInstall<T>).install = (app:App) => {
        app.config.globalProperties[name] = fn
    }
    
    return fn as SFCWithInstall<T>
}