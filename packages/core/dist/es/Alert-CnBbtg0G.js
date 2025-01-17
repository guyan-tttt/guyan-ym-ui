import { defineComponent as e, useSlots as t, ref as l, computed as o, openBlock as s, createBlock as a, Transition as c, withCtx as n, withDirectives as i, createElementVNode as r, normalizeClass as p, createCommentVNode as f, normalizeStyle as m, renderSlot as y, createTextVNode as _, toDisplayString as u, createElementBlock as d, createVNode as v, withModifiers as w, vShow as h } from "vue";
import { t as I, _ as k, w as x } from "./utils-BHtccd4_.js";
import { Y as $ } from "./Icon-BPqbRGFK.js";
const b = { class: "ym-alert__content" }, g = { class: "ym-alert__description" }, B = { key: 0, class: "ym-alert__close" }, Y = x(k(e({ name: "YmAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(e2, { expose: k2, emit: x2 }) {
  const Y2 = e2, j = x2, A = t(), C = l(true);
  function q() {
    C.value = false, j("close");
  }
  const z = o(() => Y2.description || A.default), D = o(() => I.get(Y2.type) ?? "circle-info");
  return k2({ open: function() {
    C.value = true;
  }, close: q }), (e3, t2) => (s(), a(c, { name: "ym-alert-fade" }, { default: n(() => [i(r("div", { class: p(["ym-alert", { [`ym-alert__${e3.type}`]: e3.type, [`ym-alert__${e3.effect}`]: e3.effect, "text-center": e3.center }]), role: "alert" }, [e3.showIcon ? (s(), a($, { key: 0, class: p(["ym-alert__icon", { "big-icon": z.value }]), icon: D.value }, null, 8, ["class", "icon"])) : f("", true), r("div", b, [r("span", { class: p(["ym-alert__title", { "with-desc": z.value }]), style: m({ display: e3.center && !e3.showIcon ? "flow" : "inline" }) }, [y(e3.$slots, "title", {}, () => [_(u(e3.title), 1)], true)], 6), r("p", g, [y(e3.$slots, "default", {}, () => [_(u(e3.description), 1)], true)]), e3.closable ? (s(), d("div", B, [v($, { onClick: w(q, ["stop"]), icon: "xmark" })])) : f("", true)])], 2), [[h, C.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-4eaf3a48"]]));
export {
  Y
};
