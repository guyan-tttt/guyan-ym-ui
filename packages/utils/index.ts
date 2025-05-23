import { defineComponent, nextTick } from "vue";
import { isFunction } from "lodash-es";

export const typeIconMap = new Map([
  ["info", "circle-info"],
  ["success", "check-circle"],
  ["warning", "circle-exclamation"],
  ["danger", "circle-xmark"],
  ["error", "circle-xmark"],
]);

export const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true,
    },
  },
  setup(props) {
    return () => {
      return isFunction(props.vNode) ? props.vNode() : props.vNode;
    };
  },
});

export const rAF = async () => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        resolve(null);
        await nextTick();
      });
    });
  });
};

export * from "./install";
export * from "./error";
export * from "./style";
export * from "./fetchAPI";
