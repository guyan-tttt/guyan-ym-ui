import { type Ref , computed } from 'vue'

interface UseOffsetOptions {
    offset: number,
    boxHeight: Ref<number>
    getLastBottomOffset: () => number
}

interface UseOffsetResult {
    topOffset: Ref<number>
    bottomOffset: Ref<number>
}
export function useOffset(options: UseOffsetOptions): UseOffsetResult {
    const lastBottomOffset = computed(() => options.getLastBottomOffset())
    const topOffset = computed(() => lastBottomOffset.value + options.offset)
    const bottomOffset = computed(() => topOffset.value + options.boxHeight.value)

    return {
        topOffset,
        bottomOffset
    }
}

export default useOffset