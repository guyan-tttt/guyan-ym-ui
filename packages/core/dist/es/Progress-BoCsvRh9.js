import { t as e, _ as s, w as t } from "./utils-B0xUaq8Y.js";
import { defineComponent as a, computed as r, ref as o, watch as i, openBlock as l, createElementBlock as d, normalizeClass as p, normalizeStyle as n, createElementVNode as u, toDisplayString as m, createCommentVNode as c, createBlock as y, unref as h } from "vue";
import { a as g } from "./Icon-Dd1wFBNY.js";
import { z as v, d as f, l as x } from "./vendor-BmDHKAAA.js";
const w = { class: "ym-progress-bar" }, _ = { key: 0, class: "ym-progress-bar__innerText" }, k = { key: 0, class: "ym-progress-text" }, b = { key: 0 }, I = t(s(a({ name: "YmProgress", __name: "Progress", props: { percentage: { default: 10 }, width: { default: "200px" }, color: {}, status: { default: "primary" }, showText: { type: Boolean, default: true }, format: { type: Function, default: (e2) => `${e2}%` }, textInside: { type: Boolean, default: false }, strokeWidth: { default: 6 } }, setup(s2) {
  const t2 = s2, a2 = r(() => t2.format && v(t2.format) ? t2.format(t2.percentage) : `${t2.percentage}%`), I2 = r(() => f(t2.width) && x(t2.width, "px") ? t2.width : t2.width + "px"), T = o(0);
  i(() => t2.percentage, (e2) => {
    T.value = e2;
  }, { immediate: true });
  const W = r(() => !!(t2.textInside && t2.strokeWidth >= 20));
  return (s3, r2) => (l(), d("div", { class: p(["ym-progress", { [`is-${s3.status}`]: s3.status }]), style: n({ width: I2.value }) }, [u("div", w, [u("div", { class: "ym-progress-bar__outer", style: n({ height: s3.strokeWidth + "px" }) }, [u("div", { class: "ym-progress-bar__inner", style: n({ backgroundColor: t2.color, width: T.value + "%", height: s3.strokeWidth + "px" }) }, [s3.showText && W.value ? (l(), d("div", _, [u("span", null, m(a2.value), 1)])) : c("", true)], 4)], 4)]), s3.showText && !W.value ? (l(), d("div", k, [s3.status && "primary" !== s3.status ? (l(), y(h(g), { key: 1, class: "ym-progress-icon", icon: h(e).get(s3.status) }, null, 8, ["icon"])) : (l(), d("span", b, m(a2.value), 1))])) : c("", true)], 6));
} }), [["__scopeId", "data-v-ea361153"]]));
export {
  I as Y
};
