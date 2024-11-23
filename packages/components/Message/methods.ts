import { isVNode , render, h, shallowReactive} from 'vue'
import { isString ,findIndex,get,set,each} from 'lodash-es'
import { 
    type CreateMessageProps, 
    type MessageInstance, 
    type MessageParams,
    type Message,
    type MessageHandler,
    type MessageType, 
    type MessageFn,
    type MessageProps,
    messageTypes
} from './type'
import MessageConstructor from './Message.vue'
import { useId , useZIndex} from '@ym-UI/hooks'


// 实例列表
const instances:MessageInstance[] = shallowReactive([])

const { nextZIndex } = useZIndex()

export const messageDefaults = {
    type: 'info',    duration: 3000,
    offset: 10,
    transitionName: "fade-up",
    showClose: true
}

// 处理参数
const normalizeOptions = (options: MessageParams): CreateMessageProps => {
    const result = !options || isVNode(options) || isString(options)
    ? {
        message: options,
    } : options
    return {...messageDefaults, ...result} as CreateMessageProps
}


const createMessage = (props: CreateMessageProps): MessageInstance => {
    const id = useId().value // 唯一标识
    const container = document.createElement('div')

    // 移除方法
    const destory = () => {
        const idx = findIndex(instances, { id })
        if(idx === -1) return  // 不存在
        instances.splice(idx, 1)
        render(null,container)
    }

    // 实例属性
    const _props: MessageProps = {
        ...props,
        id,
        onDestory: destory,
        zIndex: nextZIndex()
    }

    const vnode = h( MessageConstructor,_props) // 创建虚拟节点

    render(vnode,container) // 渲染虚拟节点

    // 添加dom
    document.body.appendChild(container.firstElementChild!)

    const vm = vnode.component!
    const handler:MessageHandler = {
        close: () => vm.exposed!.close()
    } 
    const instance:MessageInstance = {
        id,
        props: _props,
        vm,
        handler,
        vnode
    }
    instances.push(instance) // 添加实例
    return instance
}

export function getLastBottomOffset(this:MessageProps) {
        const idx = findIndex(instances, {id: this.id})
        if(idx <= 0) return 0
        return get(instances,[idx - 1, 'vm', 'exposed', 'bottomOffset','value'] )
}

export const message:MessageFn & Partial<Message> = (options = {}) => {
    const normalized = normalizeOptions(options) 
    const instance  = createMessage(normalized)
    return instance.handler

}

export function closeAll (type?:MessageType)  {
    each(instances, (instance) => {
        if(type ) {
            instance.props.type === type && instance.handler.close() // 关闭对应类型的消息
            return 
        }
        instance.handler.close() // 关闭
    })
}

each(messageTypes, (type) => {
    set(message, type ,(options: MessageParams) => {
        const normalized = normalizeOptions(options)
        normalized.type = type
        return message({
            ...normalized
        })
    })
})

message.closeAll = closeAll

export default message as Message