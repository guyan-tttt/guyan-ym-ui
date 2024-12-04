import { getCurrentInstance, computed } from "vue";
function useProp(propName) {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("useProp must be used within a setup function");
  }
  return computed(() => {
    var _a, _b;
    return (_b = (_a = instance.proxy) == null ? void 0 : _a.$props) == null ? void 0 : _b[propName];
  });
}
export {
  useProp as u
};
