import { isRef, watch, onMounted, onBeforeUnmount, unref } from "vue";
function useEventListener(target, event, handler) {
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      oldVal == null ? void 0 : oldVal.removeEventListener(event, handler);
      val == null ? void 0 : val.addEventListener(event, handler);
    });
  } else {
    onMounted(() => target == null ? void 0 : target.addEventListener(event, handler));
  }
  onBeforeUnmount(() => {
    var _a;
    return (_a = unref(target)) == null ? void 0 : _a.removeEventListener(event, handler);
  });
}
export {
  useEventListener as u
};
