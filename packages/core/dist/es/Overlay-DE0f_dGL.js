import { _ as e, w as s } from "./utils-CG1f-MPP.js";
import { defineComponent as a, openBlock as o, createElementBlock as t, normalizeClass as l, normalizeStyle as i, renderSlot as d } from "vue";
const n = e(a({ name: "YmOverlay", __name: "Overlay", props: { mask: { type: Boolean, default: true }, zIndex: {}, overlayClass: {} }, emits: ["click"], setup(e2, { emit: s2 }) {
  const a2 = s2;
  function n2(e3) {
    a2("click", e3);
  }
  return (e3, s3) => e3.mask ? (o(), t("div", { key: 0, class: l(["ym-overlay", e3.overlayClass]), style: i({ zIndex: e3.zIndex }), onClick: n2 }, [d(e3.$slots, "default", {}, void 0, true)], 6)) : (o(), t("div", { key: 1, class: l(e3.overlayClass), style: i({ zIndex: e3.zIndex, position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }) }, [d(e3.$slots, "default", {}, void 0, true)], 6));
} }), [["__scopeId", "data-v-5e7eabbd"]]), r = s(n);
export {
  n as O,
  r as Y
};
