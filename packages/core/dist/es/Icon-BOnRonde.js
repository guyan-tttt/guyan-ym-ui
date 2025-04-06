import { defineComponent as e, computed as o, ref as t, openBlock as a, createElementBlock as n, mergeProps as p, createVNode as s, unref as l, normalizeProps as r, guardReactiveProps as i } from "vue";
import { FontAwesomeIcon as y } from "@fortawesome/vue-fontawesome";
import { c as m } from "./vendor-D1ZXl11B.js";
import { _ as c, w as B } from "./utils-DY8rdjAx.js";
const f = c(e({ name: "YmIcon", inheritAttrs: false, __name: "Icon", props: { border: { type: Boolean }, fixedWidth: { type: Boolean }, flip: {}, icon: {}, mask: {}, listItem: { type: Boolean }, pull: {}, pulse: { type: Boolean }, rotation: {}, swapOpacity: { type: Boolean }, size: {}, spin: { type: Boolean }, transform: {}, symbol: { type: [Boolean, String] }, title: {}, inverse: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean }, fade: { type: Boolean }, beatFade: { type: Boolean }, spinPulse: { type: Boolean }, spinReverse: { type: Boolean }, type: {}, color: {} }, setup(e2, { expose: c2 }) {
  const B2 = e2, f2 = o(() => m(B2, ["type", "color"])), u2 = o(() => ({ color: B2.color })), d = t();
  return c2({ ref: d }), (e3, o2) => (a(), n("i", p({ ref_key: "iconRef", ref: d, class: ["ym-icon", { [`ym-icon--${B2.type}`]: e3.type }], style: u2.value }, e3.$attrs), [s(l(y), r(i(f2.value)), null, 16)], 16));
} }), [["__scopeId", "data-v-53cab965"]]), u = B(f);
export {
  f as Y,
  u as a
};
