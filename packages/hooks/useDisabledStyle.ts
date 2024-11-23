import { each, isFunction, cloneDeep,assign} from 'lodash-es'
import { watchEffect, useSlots, getCurrentInstance, type VNode } from 'vue'

const dfs = (vnodes: VNode[], callback: (vnode: VNode) => void) => {
   return each(vnodes, (node) => {
        isFunction(callback) && callback(node)
        node.children && dfs(node.children as VNode[], callback)
   })
}

export function useDisabledStyle() {
    const nodePropsMap = new Map()
    const instance = getCurrentInstance()
    const children = useSlots()?.default?.();
    watchEffect(() => {
        if(instance?.props.disabled) {
            dfs(children ?? [], (node) => {
                if(!nodePropsMap.has(node)) return 
                node.props = nodePropsMap.get(node)
            })
            return 
        }
        dfs(children ??[], (node) => {
            if(!node.props) return 
            nodePropsMap.set(node, cloneDeep(node.props))
            node.props = assign(node?.props, {
                style: {
                    cursor: "not-allowed",
                    color: "var(--ym-text-color-placeholder)"
                }
            })
        })
    })
}

export default useDisabledStyle