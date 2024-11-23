import { each, isFunction, cloneDeep, assign } from "lodash-es";
import { getCurrentInstance, useSlots, watchEffect } from "vue";
const dfs = (vnodes, callback) => {
  return each(vnodes, (node) => {
    isFunction(callback) && callback(node);
    node.children && dfs(node.children, callback);
  });
};
function useDisabledStyle() {
  var _a, _b;
  const nodePropsMap = /* @__PURE__ */ new Map();
  const instance = getCurrentInstance();
  const children = (_b = (_a = useSlots()) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a);
  watchEffect(() => {
    if (instance == null ? void 0 : instance.props.disabled) {
      dfs(children ?? [], (node) => {
        if (!nodePropsMap.has(node)) return;
        node.props = nodePropsMap.get(node);
      });
      return;
    }
    dfs(children ?? [], (node) => {
      if (!node.props) return;
      nodePropsMap.set(node, cloneDeep(node.props));
      node.props = assign(node == null ? void 0 : node.props, {
        style: {
          cursor: "not-allowed",
          color: "var(--ym-text-color-placeholder)"
        }
      });
    });
  });
}
export {
  useDisabledStyle as u
};
