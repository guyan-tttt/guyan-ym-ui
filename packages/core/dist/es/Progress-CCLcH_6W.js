import { t as e, _ as s, w as t } from "./utils-xsKI4iFa.js";
import { defineComponent as r, computed as a, ref as o, watch as l, openBlock as i, createElementBlock as p, normalizeClass as n, normalizeStyle as d, createElementVNode as u, renderSlot as c, toDisplayString as y, createCommentVNode as m, createBlock as f, unref as g } from "vue";
import { a as h } from "./Icon-DzSshdSu.js";
import { i as k } from "./hooks-CF80WHXu.js";
import { z as v, i as x, l as w } from "./vendor-BXKGMoVT.js";
const _ = { class: "ym-progress-bar" }, $ = { key: 0, class: "ym-progress-bar__innerText" }, b = { key: 1 }, B = { key: 0, class: "ym-progress-text" }, T = { key: 1 }, j = { class: "ym-progress-circle" }, F = ["stroke"], I = { key: 0, class: "ym-progress-text" }, W = { key: 1 }, D = t(s(r({ name: "YmProgress", inheritAttrs: false, __name: "Progress", props: { percentage: { default: 10 }, width: { default: "200px" }, color: {}, status: { default: "primary" }, showText: { type: Boolean, default: true }, format: { type: Function, default: (e2) => `${e2}%` }, textInside: { type: Boolean, default: false }, strokeWidth: { default: 6 }, striped: { type: Boolean, default: false }, stripedFlow: { type: Boolean, default: false }, duration: { default: 6 }, type: { default: "line" } }, setup(s2) {
  const t2 = s2, r2 = a(() => t2.format && v(t2.format) ? t2.format(t2.percentage) : `${t2.percentage}%`), D2 = a(() => x(t2.width) && w(t2.width, "px") ? t2.width : t2.width + "px"), M = o(0);
  l(() => t2.percentage, (e2) => {
    M.value = e2;
  }, { immediate: true });
  const P = a(() => !!(t2.textInside && t2.strokeWidth >= 20)), Y = a(() => t2.color ? t2.color : k(document.documentElement, `--ym-color-${t2.status}`) ?? "#409eff");
  return (s3, a2) => "line" === s3.type ? (i(), p("div", { key: 0, class: n(["ym-progress", { [`is-${s3.status}`]: s3.status, [`ym-progress-${s3.type}`]: s3.type }]), style: d({ width: D2.value }) }, [u("div", _, [u("div", { class: "ym-progress-bar__outer", style: d({ height: s3.strokeWidth + "px" }) }, [u("div", { class: n(["ym-progress-bar__inner", { "is-striped": s3.striped, isStripedFlow: s3.striped && s3.stripedFlow }]), style: d({ backgroundColor: t2.color, width: M.value + "%", height: s3.strokeWidth + "px", animationDuration: s3.duration + "s" }) }, [s3.showText && P.value ? (i(), p("div", $, [s3.$slots.default ? c(s3.$slots, "default", { key: 0, percentage: s3.percentage }, void 0, true) : (i(), p("span", b, y(r2.value), 1))])) : m("", true)], 6)], 4)]), s3.showText && !P.value ? (i(), p("div", B, [s3.$slots.default ? c(s3.$slots, "default", { key: 0, percentage: s3.percentage }, void 0, true) : s3.status && "primary" !== s3.status ? (i(), f(g(h), { key: 2, class: "ym-progress-icon", icon: g(e).get(s3.status) }, null, 8, ["icon"])) : (i(), p("span", T, y(r2.value), 1))])) : m("", true)], 6)) : (i(), p("div", { key: 1, class: n(["ym-progress", { [`ym-progress-${s3.type}`]: s3.type, [`is-${s3.status}`]: s3.status }]), style: d({ width: D2.value }) }, [u("div", j, [(i(), p("svg", { viewBox: "0 0 100 100", style: d({ width: D2.value, height: D2.value }) }, [a2[0] || (a2[0] = u("path", { class: "ym-progress-circle__track", d: "\r\n                M 50 50\r\n                m 0 -47\r\n                a 47 47 0 1 1 0 94\r\n                a 47 47 0 1 1 0 -94\r\n                ", stroke: "#ebeef5", "stroke-linecap": "round", "stroke-width": "4.8", fill: "none", style: { "stroke-dasharray": "300px, 300px", "stroke-dashoffset": "0px" } }, null, -1)), u("path", { class: "ym-progress-circle__path", d: "\r\n                M 50 50\r\n                m 0 -47\r\n                a 47 47 0 1 1 0 94\r\n                a 47 47 0 1 1 0 -94\r\n                ", stroke: Y.value, fill: "none", opacity: "1", "stroke-linecap": "round", "stroke-width": "4.8", style: d([{ "stroke-dashoffset": "0px", transition: "stroke-dasharray 0.6s, stroke 0.6s, opacity 0.6s" }, { strokeDasharray: 3 * s3.percentage + "px 300px" }]) }, null, 12, F)], 4))]), s3.showText && !P.value ? (i(), p("div", I, [s3.$slots.default ? c(s3.$slots, "default", { key: 0, percentage: s3.percentage }, void 0, true) : s3.status && "primary" !== s3.status ? (i(), f(g(h), { key: 2, class: "ym-progress-icon", icon: g(e).get(s3.status) }, null, 8, ["icon"])) : (i(), p("span", W, y(r2.value), 1))])) : m("", true)], 6));
} }), [["__scopeId", "data-v-27f1aacb"]]));
export {
  D as Y
};