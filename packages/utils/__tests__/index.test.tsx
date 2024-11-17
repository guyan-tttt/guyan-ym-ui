import { describe, expect,it } from 'vitest'
import { debugWarn,
    throwError,
    withInstall, 
    markInstaller,
    typeIconMap
} from '../index'
import { each } from 'lodash-es'

describe('utils/index', () => {
    // 1. 测试函数是否是别导出
    it('debugWarn should be exported',() => {
        expect(debugWarn).toBeDefined()
    })
    it('throwError should be exported',() => {
        expect(throwError).toBeDefined()
    })
    it('withInstall should be exported',() => {
        expect(withInstall).toBeDefined()
    })
    it('markInstaller should be exported',() => {
        expect(markInstaller).toBeDefined()
    })
    // 2. 测试map定义正确
    it('typeIconMap should be exported',() => {
        expect(typeIconMap).toBeDefined()
        each([
            ["info", "circle-info"],
            ["success", "check-circle"],
            ["warning", "circle-exclamation"],
            ["danger", "circle-xmark"],
            ["error", "circle-xmark"],
          ],([type,icon]) => {
            expect(typeIconMap.get(type)).toBe(icon);
          })
    })
    
})