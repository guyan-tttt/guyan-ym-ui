import { computed } from "vue";
function useOffset(options) {
  const lastBottomOffset = computed(() => options.getLastBottomOffset());
  const topOffset = computed(() => lastBottomOffset.value + options.offset);
  const bottomOffset = computed(() => topOffset.value + options.boxHeight.value);
  return {
    topOffset,
    bottomOffset
  };
}
export {
  useOffset as u
};
