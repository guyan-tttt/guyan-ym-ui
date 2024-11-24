import { notificationTypes, type CreateNotificationProps, type Notification, type NotificationFn, type NotificationHandler, type NotificationInstance, type NotificationParams, type NotificationProps, type notificationType} from './type'
import { h, isVNode, render, shallowReactive } from 'vue'
import { useId, useZIndex } from '@ym-UI/hooks'
import { each, findIndex , get, isString, set } from 'lodash-es'
import NotificationConstructor from './Notification.vue'

const instances: NotificationInstance[] = shallowReactive([])

const { nextZIndex } = useZIndex()

export const  notificationDefault = {
    type: 'info',
    duration: 3000,
    offset: 20,
    transitionName: "fade",
    showClose: true,
} as const

export function getLastBottomOffset(this:NotificationProps) {
    const idx = findIndex(instances, {id: this.id})
    if(idx <= 0) return 0
    return get(instances,[idx - 1, 'vm', 'exposed', 'bottomOffset','value'] )
}

// 处理参数
const normalizeOptions = (options:NotificationParams): CreateNotificationProps => {
    const result = !options || isVNode(options) || isString(options)
    ? {
        message: options,
    } : options
    return {...notificationDefault, ...result} as CreateNotificationProps
}


const createNotification = (props: CreateNotificationProps): NotificationInstance => {
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
    const _props: NotificationProps = {
        ...props,
        id,
        onDestory: destory,
        zIndex: nextZIndex(),
    }

    const vnode = h( NotificationConstructor,_props) // 创建虚拟节点

    render(vnode,container) // 渲染虚拟节点

    // 添加dom
    document.body.appendChild(container.firstElementChild!)

    const vm = vnode.component!
    const handler:NotificationHandler = {
        close: () => vm.exposed!.close()
    } 
    const instance:NotificationInstance = {
        id,
        props: _props,
        vm,
        handler,
        vnode
    }
    instances.push(instance) // 添加实例
    return instance
}

export const notification:NotificationFn & Partial<Notification> = (options = {}) => {
    const normalized = normalizeOptions(options) 
    const instance  = createNotification(normalized)
    return instance.handler

}

export function closeAll (type?:notificationType)  {
    each(instances, (instance) => {
        if(type ) {
            instance.props.type === type && instance.handler.close() // 关闭对应类型的消息
            return 
        }
        instance.handler.close() // 关闭
    })
}

each(notificationTypes, (type) => {
    set(notification, type ,(options: NotificationParams) => {
        const normalized = normalizeOptions(options)
        normalized.type = type
        return notification({
            ...normalized
        })
    })
})

notification.closeAll = closeAll

export default notification as Notification




