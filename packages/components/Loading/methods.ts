import { defer, delay, isNil, isString } from "lodash-es";
import type { LoadingOptions, LoadingOptionsResolved } from "./type";
import { useZIndex } from "@ym-UI/hooks";
import { nextTick } from "vue";
import { createApp, reactive, ref } from "vue";
import LoadingComp from './Loading.vue'

const LOADING_NUMBER_KEY = "ym-loading-number" as const
const RELATIVE_CLASS = "ym-loading-parent--relative" as const 
const HIDE_CLASS = "ym-loading-parent--hiden" as const 
const instanceMap:Map<HTMLElement,LoadingInstance> = new Map()
const { nextZIndex } = useZIndex(3000)



function createLoading(options: LoadingOptionsResolved) {
    const visible = ref(options.visible)

    const afterLeaveFlag = ref(false)

    const handleAfterLeave = () => {
        if(!afterLeaveFlag.value) {
            return 
        }
        destory() // 销毁loading
    }

    const data = reactive({
        ...options,
        onAfterLeave: handleAfterLeave,
        
    })
    const setText = (text: string) => {
        data.text = text
    }

    

    // 添加loading实例
    const app = createApp(LoadingComp, {
        ...data, // 将data传入组件
        zIndex: data.fullscreen ? nextZIndex() : void 0, // 判断是否全屏,全屏的話需要保证层级
        visible, // 控制loading的显示隐藏
    })

    // 添加loading实例到一个dom元素上
    const vm = app.mount(document.createElement('div'))

    // 卸载loading实例需要调用的钩子
    const destory = () => {
        const target = data.parent
        subLoadingNumber(target) // 减少loading数量
        if(getLadingNumber(target)) return ; // 如果还有其他loading，则不销毁
        delay(() => {
            removeRelativeClass(target)// 移除相对定位
            removeHideClass(target) // 移除隐藏
        },1)
        instanceMap.delete(target ?? document.body) // 移除实例
        vm.$el.parentNode?.removeChild(vm.$el) // 移除dom
        app.unmount() // 卸载实例
    }

    // 
    let afterLeaveTimer: number

    // 关闭loading
    const close = () => {
        if(options.beforeClose && options.beforeClose() === false) return  // 如果beforeClose返回false，则不关闭loading
        afterLeaveFlag.value = true
        clearTimeout(afterLeaveTimer) // 清除定时器
        afterLeaveTimer = defer(handleAfterLeave) // 延迟执行
        visible.value = false // 隐藏loading
        options.closed?.() // 执行关闭回调
    }

    return {
        get $el():HTMLElement {
            return vm.$el
        },
        vm,
        close,
        visible,
        setText,
    }

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

    resolved.parent?.appendChild(instance.$el)

    nextTick(() => (instance.visible.value = !!resolved.visible))
    if(resolved.fullscreen) {
        fullscreenLoadingInstance =   instance
    }
    instanceMap.set(target,instance)
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

