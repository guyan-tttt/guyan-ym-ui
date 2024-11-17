import { describe, expect,it,vi } from 'vitest'
import type { Plugin  } from 'vue'
import { map , get} from 'lodash-es'
import { 
    YmAlert,
    YmButton,
    YmButtonGroup,
    YmCollapse,
    YmCollapseItem,
    YmContextMenu,
    YmIcon
} from '../index'

const components = [
    YmAlert,
    YmButton,
    YmButtonGroup,
    YmCollapse,
    YmCollapseItem,
    YmContextMenu,
    YmIcon
] as Plugin[]


describe("components/index",() => {
    it.each(map(components,(c) => [get(c,"name") ?? "",c]))("%s should be imported",(_,components) => {
        expect(components).toBeDefined()
        expect(components.install).toBeDefined()
    })
})