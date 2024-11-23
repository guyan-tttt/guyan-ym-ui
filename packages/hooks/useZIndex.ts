import { computed , ref } from 'vue'

const zIndex = ref(0)

export default  function useZIndex(initValue: number = 2000) {
    const _initValue = ref(initValue)
    const currentZIndex  = computed(() => {
        return _initValue.value + zIndex.value
    })

    const nextZIndex  = () => {
        zIndex.value++
        return currentZIndex.value
    }
    return {
        initialValue: _initValue,
        currentZIndex,
        nextZIndex
    }
}