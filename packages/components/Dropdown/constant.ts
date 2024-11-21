import type { InjectionKey } from 'vue'
import type { DropdownContext } from './type'

export const DROPDOWN_CTX_KEY:InjectionKey<DropdownContext> = Symbol("dropdownContext")