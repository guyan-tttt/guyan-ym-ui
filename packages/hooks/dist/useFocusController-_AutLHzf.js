import { isFunction } from "lodash-es";
import { getCurrentInstance, ref } from "vue";
import { u as useEventListener } from "./useEventListener-D7BiV7nd.js";
function useFocusController(target, { afterBlur, afterFocus, beforeBlur }) {
  const instance = getCurrentInstance();
  const { emit } = instance;
  const wrapperRef = ref();
  const isFocused = ref(false);
  const handlerFocus = (event) => {
    if (isFocused.value) return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
  };
  const handlerBlur = (event) => {
    var _a;
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false;
    if (cancelBlur || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget))) return;
    if (!isFocused.value) return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
  };
  const handlerClick = () => {
    var _a;
    (_a = target.value) == null ? void 0 : _a.focus();
  };
  useEventListener(wrapperRef, "click", handlerClick);
  return {
    wrapperRef,
    isFocused,
    handlerFocus,
    handlerBlur
  };
}
export {
  useFocusController as u
};
