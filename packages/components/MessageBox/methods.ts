import type {
     MessageBoxAction,
     MessageBoxOptions,
     MessageBoxData,
     MessageBoxCallback,
     MessageBoxProps,
     IYmMessageBox
 } from "./type";

 import MessageBoxConstructor from './MesageBox.vue'
 import { 
    isVNode,
    createVNode, 
    ref,
    render,
    nextTick,
    type ComponentPublicInstance,
    type VNode,
    type VNodeProps,
    type Ref
    } from 'vue'
import { assign, each, isFunction, isObject, isString, isUndefined, set } from "lodash-es";


const messageInstanceMap: 
Map<ComponentPublicInstance<{doClose:() => void}>,{
    options:MessageBoxOptions,
    callback: MessageBoxCallback | void,
    resolve: (res: any) => void,
    reject: (res: any) => void
}> 
= new Map();

function initInstances(props: MessageBoxProps, container: HTMLElement) {
    const visible = ref(false)
    const isVnodeMsg = isFunction(props.message) || isVNode(props.message)

    const createDefatultSlot = (msg: VNode | (() => VNode) ) => {
        return isFunction(msg) ? msg: () => msg
    }

    const vnode = createVNode(
        MessageBoxConstructor,
        {
            ...props,
            visible
        } as VNodeProps,
        isVnodeMsg ? {default: createDefatultSlot(props.message as VNode) } : void 0
    )
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
    return vnode.component
}


function createMessageBox(options:MessageBoxOptions) {
    const container = document.createElement('div')
    const props:MessageBoxProps = {
        ...options,
        doClose: () => {
            vm.visible.value = false
        },
        doAction: (action: MessageBoxAction, inputValue: string) => {
            const currentMsg = messageInstanceMap.get(vm);
           
            let resolve:MessageBoxAction | {value: string, action: MessageBoxAction} 
            nextTick(() => vm.doClose())

            if(options.showInput) {
                resolve = {
                    value: inputValue,
                    action
                }
            } else {
                resolve = action
            }

            if(options.callback) {
                options.callback(resolve)
                return 
            }
            if(action === "cancel" || action === "close") {
                return currentMsg?.reject(resolve)
            } 
            return currentMsg?.resolve(resolve)
        },
        destroy: () => {
            render(null, container)
            messageInstanceMap.delete(vm)
        }
    }
    const instance = initInstances(props, container)

    const vm = instance?.proxy as ComponentPublicInstance<{doClose:() => void, visible: Ref<boolean>}>

    vm.visible.value = true;
    return vm

}

export async function MessageBox(options: MessageBoxOptions): Promise<MessageBoxData>
export function MessageBox(options: MessageBoxOptions | string | VNode):Promise<any> {
    let callback:MessageBoxCallback | void
    // 判断类型
    if(isString(options) || isVNode(options)) {
        options = {
            message: options
        }
    } else {
        callback = options.callback
    }
    return new Promise((resolve,reject) => {
        const insatnce = createMessageBox(options)
        messageInstanceMap.set(insatnce, {
            options,
            callback,
            resolve,
            reject
        })
    })
}


const MESSAGWE_BOX_VARIANTS = ["alert", "confirm","prompt"] as const

const MESSAGE_BOX_DEFAULT_OPTIONS: Record<
(typeof MESSAGWE_BOX_VARIANTS)[number],
Partial<MessageBoxOptions>
>  = {
    alert: { closeOnClickModal: false},
    confirm: { closeOnClickModal: true},
    prompt: { closeOnClickModal: true, showInput: true}
}

each(MESSAGWE_BOX_VARIANTS,(key) => {
    set(MessageBox,key, MessageBoxFactory(key))
})

function MessageBoxFactory(boxType: (typeof MESSAGWE_BOX_VARIANTS)[number]) {
    return (
        message: string | VNode,
        title: string | MessageBoxOptions,
        options: MessageBoxOptions
    ) => {
        let titleOrOpts = ""
        if(isObject(title)) {
            options = title as MessageBoxOptions
            titleOrOpts = ""
        } else if(isUndefined(title)) {
            titleOrOpts = ""
        } else {
            titleOrOpts = title as string
        }
        return MessageBox(
            assign({
                title: titleOrOpts,
                message,
                boxType,
                ...MESSAGE_BOX_DEFAULT_OPTIONS[boxType],
            },
            options
            )
        )

    }
}

set(MessageBox, "close",() => {
    messageInstanceMap.forEach((_,vm) => {
        vm.doClose()
    })
    messageInstanceMap.clear()
})

export default MessageBox as IYmMessageBox