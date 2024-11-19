import "vue";
import { u as useEventListener } from "./useEventListener-D7BiV7nd.js";
function useClickOutside(elementRef, callback) {
  useEventListener(document, "click", (e) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target)) {
        callback(e);
      }
    }
  });
}
export {
  useClickOutside as u
};
