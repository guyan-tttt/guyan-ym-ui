import { describe, it, expect } from "vitest";
import { useClickOutside, useEventListener} from '../index'

describe("hooks/index",() => {
    it("useClickOutside should be defined",() => {
        expect(useClickOutside).toBeDefined()
    })
    it("useEventListener should be defined",() => {
        expect(useEventListener).toBeDefined()
    })
})