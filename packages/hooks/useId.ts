import { type Ref , computed } from 'vue'

const defaultIdInjection = {
    prefix: Math.floor(Math.random() * 10000),
    current: 0
}

export default function useId(namespace:string = 'ym'):Ref<string> {
    const idRef = computed(() => {
        return `${namespace}-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`
    })

    return idRef
}
