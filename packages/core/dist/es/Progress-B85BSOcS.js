import { t, _ as e, w as s } from "./utils-B0xUaq8Y.js";
import { defineComponent as a, computed as r, ref as o, watch as i, openBlock as d, createElementBlock as l, normalizeClass as p, normalizeStyle as n, createElementVNode as u, toDisplayString as m, createCommentVNode as c, createBlock as y, unref as f } from "vue";
import { a as h } from "./Icon-Dd1wFBNY.js";
import { z as g, d as v, l as w } from "./vendor-BmDHKAAA.js";
const x = { class: "ym-progress-bar" }, _ = { key: 0, class: "ym-progress-bar__innerText" }, k = { key: 0, class: "ym-progress-text" }, b = { key: 0 }, B = s(e(a({ name: "YmProgress", __name: "Progress", props: { percentage: { default: 10 }, width: { default: "200px" }, color: {}, status: { default: "primary" }, showText: { type: Boolean, default: true }, format: { type: Function, default: (t2) => `${t2}%` }, textInside: { type: Boolean, default: false }, strokeWidth: { default: 6 }, striped: { type: Boolean, default: false }, stripedFlow: { type: Boolean, default: false }, duration: { default: 6 } }, setup(e2) {
  const s2 = e2, a2 = r(() => s2.format && g(s2.format) ? s2.format(s2.percentage) : `${s2.percentage}%`), B2 = r(() => v(s2.width) && w(s2.width, "px") ? s2.width : s2.width + "px"), F = o(0);
  i(() => s2.percentage, (t2) => {
    F.value = t2;
  }, { immediate: true });
  const I = r(() => !!(s2.textInside && s2.strokeWidth >= 20));
  return (e3, r2) => (d(), l("div", { class: p(["ym-progress", { [`is-${e3.status}`]: e3.status }]), style: n({ width: B2.value }) }, [u("div", x, [u("div", { class: "ym-progress-bar__outer", style: n({ height: e3.strokeWidth + "px" }) }, [u("div", { class: p(["ym-progress-bar__inner", { "is-striped": e3.striped, isStripedFlow: e3.striped && e3.stripedFlow }]), style: n({ backgroundColor: s2.color, width: F.value + "%", height: e3.strokeWidth + "px", animationDuration: e3.duration + "s" }) }, [e3.showText && I.value ? (d(), l("div", _, [u("span", null, m(a2.value), 1)])) : c("", true)], 6)], 4)]), e3.showText && !I.value ? (d(), l("div", k, [e3.status && "primary" !== e3.status ? (d(), y(f(h), { key: 1, class: "ym-progress-icon", icon: f(t).get(e3.status) }, null, 8, ["icon"])) : (d(), l("span", b, m(a2.value), 1))])) : c("", true)], 6));
} }), [["__scopeId", "data-v-e2c88a57"]]));
export {
  B as Y
};
