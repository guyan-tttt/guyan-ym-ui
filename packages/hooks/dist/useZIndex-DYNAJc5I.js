import { ref, computed } from "vue";
const zIndex = ref(0);
function useZIndex(initValue = 2e3) {
  const _initValue = ref(initValue);
  const currentZIndex = computed(() => {
    return _initValue.value + zIndex.value;
  });
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialValue: _initValue,
    currentZIndex,
    nextZIndex
  };
}
export {
  useZIndex as u
};
