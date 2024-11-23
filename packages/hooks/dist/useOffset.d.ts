import { Ref } from 'vue';

interface UseOffsetOptions {
    offset: number;
    boxHeight: Ref<number>;
    getLastBottomOffset: () => number;
}
interface UseOffsetResult {
    topOffset: Ref<number>;
    bottomOffset: Ref<number>;
}
export declare function useOffset(options: UseOffsetOptions): UseOffsetResult;
export default useOffset;
