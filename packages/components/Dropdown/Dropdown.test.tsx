import { describe, it,expect  } from "vitest";
import { mount } from "@vue/test-utils"
import { YmDropdown , YmDropdownItem} from './index'
import Dropdown from './Dropdown.vue'
import DropdownItem from "./DropdownItem.vue";


describe("Dropdown/index.ts",() => {
    // 1. 测试组件是否正确导出
    it("should be exported with withInstall",() => {
        expect(YmDropdown.install).toBeDefined()
        expect(YmDropdownItem.install).toBeDefined()
    })
    // 2. 测试组件是否正确
    it("should be the same as the default component",() => {
        expect(Dropdown).toBe(YmDropdown)
        expect(DropdownItem).toBe(YmDropdownItem)
    })
})