export default function useZIndex(initValue?: number): {
    initialValue: import('vue').Ref<number, number>;
    currentZIndex: import('vue').ComputedRef<number>;
    nextZIndex: () => number;
};
