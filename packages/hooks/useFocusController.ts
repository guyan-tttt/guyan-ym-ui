import { isFunction } from "lodash-es";
import { ref, type Ref, getCurrentInstance } from 'vue'
import useEventListener from "./useEventListener";

interface UserFocusOptions {
    afterFocus?():  void
    beforeBlur?(event: FocusEvent): boolean | void
    afterBlur?(): void
}

export default function useFocusController <T extends HTMLElement | { focus(): void}> (
    target: Ref<T | void>,
    {afterBlur,afterFocus,beforeBlur}: UserFocusOptions = {},
) {
    const instance = getCurrentInstance()!
    const { emit } = instance
    const wrapperRef = ref<HTMLElement>()
    const isFocused = ref(false)

    const handlerFocus = (event: FocusEvent) => {
        if(isFocused.value) return 
        isFocused.value = true
        emit("focus",event)
        afterFocus?.()
    }

    const handlerBlur = (event: FocusEvent) => {
        const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false
        if(
            cancelBlur
            || (event.relatedTarget && wrapperRef.value?.contains(event.relatedTarget as Node))
        ) return

        
        if(!isFocused.value) return
        isFocused.value = false
        emit("blur",event)
        afterBlur?.()
    }

    const handlerClick = () => {
        target.value?.focus()
    }

    useEventListener(wrapperRef,"click",handlerClick)

    return {
        wrapperRef,
        isFocused,
        handlerFocus,
        handlerBlur
    }
}