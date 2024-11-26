import { defineComponent as e, openBlock as s, createElementBlock as o, normalizeClass as t, normalizeStyle as a, renderSlot as l } from "vue";
import { _ as i } from "./utils-CYRDgAxt.js";
const d = i(e({ name: "YmOverlay", __name: "Overlay", props: { mask: { type: Boolean, default: true }, zIndex: {}, overlayClass: {} }, emits: ["click"], setup(e2, { emit: i2 }) {
  const d2 = i2;
  function n(e3) {
    d2("click", e3);
  }
  return (e3, i3) => e3.mask ? (s(), o("div", { key: 0, class: t(["ym-overlay", e3.overlayClass]), style: a({ zIndex: e3.zIndex }), onClick: n }, [l(e3.$slots, "default", {}, void 0, true)], 6)) : (s(), o("div", { key: 1, class: t(e3.overlayClass), style: a({ zIndex: e3.zIndex, position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }) }, [l(e3.$slots, "default", {}, void 0, true)], 6));
} }), [["__scopeId", "data-v-5e7eabbd"]]);
export {
  d as Y
};
