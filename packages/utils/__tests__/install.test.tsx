import { describe, expect,it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent , createApp} from 'vue'

import {  withInstall,markInstaller} from '../install'


const appComponent = defineComponent({
    setup() {
        return <div>App</div>
    }
})

const comA = withInstall(defineComponent({
    name: "comA",
    setup() {
        return <div>comA</div>
    }
}))

const comB = withInstall(defineComponent({
    setup() {
        return <div>comB</div>
    }
})
)
describe('utils/install', () => {
    // 测试单独安装
    it("withInstall should be worked",() => {
        const wrapper = mount(() => <div id="app"></div>)
        const app = createApp(appComponent)
        app.use(comA).mount(wrapper.element)
        
        expect(comA.install).toBeDefined();
        expect(comB.install).toBeDefined();
        expect(app._context.components["comA"]).toBeTruthy();
        expect(app._context.components["comB"]).toBeFalsy();
    })
    // 测试批量安装
    it("markInstaller should be worked",() => {
        const wrapper = mount(() => <div id="app"></div>)
        const app = createApp(appComponent)
        const installer = markInstaller([comA,comB])
        app.use(installer).mount(wrapper.element)
        expect(installer).toBeDefined()
        expect(wrapper.findComponent(comA)).toBeTruthy();
        expect(wrapper.findComponent(comB)).toBeTruthy();
    })

})