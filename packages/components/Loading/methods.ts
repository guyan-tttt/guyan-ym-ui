import { isNil, isString } from "lodash-es";
import type { LoadingOptions, LoadingOptionsResolved } from "./type";
import { useZIndex } from "@ym-UI/hooks";
import { assert } from "console";

const LOADING_NUMBER_KEY = "ym-loading-number" as const
const RELATIVE_CLASS = "ym-loading-parent--relative" as const 
const HIDE_CLASS = "ym-loading-parent--hiden" as const 
const instanceMap:Map<HTMLElement,LoadingInstance> = new Map()
const { nextZIndex } = useZIndex(3000)



function createLoading(options: LoadingOptions) {

}



function resolveOptions(options: LoadingOptions): LoadingOptionsResolved {
    let target:HTMLElement
    if(isString(options.target)) {
        target = document.querySelector(options.target) as HTMLElement ?? document.body
    } else {
        target = options.target ?? document.body
    }

    return {
        parent: target === document.body || options.body ? document.body : target, // 判断是全局调用还是指令调用
        background: options.background ?? 'rgba(0, 0, 0, 0.7)',
        spinner: options.spinner,
        text: options.text,
        fullscreen: target === document.body && (options.fullscreen ?? true),
        lock: options.lock ?? false,
        visible: options.visible ?? true,
        target
    }
}
let fullscreenLoadingInstance:LoadingInstance | null= null

export type LoadingInstance  = ReturnType<typeof createLoading>;

export function Loading(options: LoadingOptions = {}): LoadingInstance {
    const resolved = resolveOptions(options)
    const target = resolved.parent ?? document.body

    if(resolved.fullscreen && !isNil(fullscreenLoadingInstance
    )) {
        return fullscreenLoadingInstance // 此时若全屏loading存在，则直接返回
    }
    // 否则，创建loading实例
    addLoadingNumber(resolved.parent)
    // 判断当前loading是否已经存在
    if(instanceMap.has(target)) {
        return instanceMap.get(target) as LoadingInstance
    }
    const instance = createLoading({
        ...resolved,
        closed: () => {
            resolved.closed?.()
            if(resolved.fullscreen) {
                fullscreenLoadingInstance = null
            }
        }
    })

    addClass(options,resolved?.parent)

    return instance
}

function addLoadingNumber(parent: HTMLElement  = document.body) {
    const number = getLadingNumber(parent)
    parent.setAttribute(LOADING_NUMBER_KEY, `${Number(number) + 1}`)
}
function subLoadingNumber(parent: HTMLElement = document.body) {
    const number = getLadingNumber(parent)
    if(number) {
        const newNum = Number.parseInt(number) - 1
        if(newNum === 0) {
            removeLoadingNumber(parent)
        } else {
            parent.setAttribute(LOADING_NUMBER_KEY, `${newNum}`)
        }
    }
}
function getLadingNumber(target: HTMLElement = document.body) {
    return target.getAttribute(LOADING_NUMBER_KEY) ?? 0
}

function removeLoadingNumber(target: HTMLElement = document.body) {
    target.removeAttribute(LOADING_NUMBER_KEY)
}
function addRelativeClass(target:HTMLElement = document.body) {
    target.classList.add(RELATIVE_CLASS)
}
function removeRelativeClass(target:HTMLElement = document.body) {
    target.classList.remove(RELATIVE_CLASS)
}
function addHideClass(target:HTMLElement = document.body) {
    target.classList.add(HIDE_CLASS)
}
function removeHideClass(target:HTMLElement = document.body) {
    target.classList.remove(HIDE_CLASS)
}

function addClass(
    options: LoadingOptions, 
    target: HTMLElement = document.body
) {
    if(options.lock) {
     addHideClass(target)
    } else {
        removeHideClass(target)
    }

    addRelativeClass(target)
}

