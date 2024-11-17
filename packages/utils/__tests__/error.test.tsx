import { describe, expect,it,vi } from 'vitest'

import { throwError, debugWarn } from '../error'

describe("utils/error",() => {
    it("throwError should be worked",() => {
        expect(() => {
            throwError("scope","message")
        }).toThrowError("[scope]:message")
    })
    it("debugWarn should be worked",() => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        debugWarn("scope","message")
        debugWarn(new SyntaxError("custom error"))
        expect(warn.mock.calls).toMatchInlineSnapshot(`
          [
            [
              [YmUIError: [scope]: message],
            ],
            [
              [SyntaxError: custom error],
            ],
          ]
        `)
    })
})