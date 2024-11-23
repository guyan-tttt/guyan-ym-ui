import { defineComponent as e, ref as a, provide as l, watch as t, watchEffect as s, openBlock as o, createElementBlock as i, renderSlot as d, inject as n, computed as m, normalizeClass as c, createElementVNode as r, createTextVNode as p, toDisplayString as u, createVNode as v, Transition as h, mergeProps as _, toHandlers as f, unref as y, withCtx as b, withDirectives as g, vShow as C } from "vue";
import { d as I, _ as $, w as V } from "./utils-qFOQpxdb.js";
import { Y } from "./Icon-D6pQb2E-.js";
const w = Symbol("COLLAPSE_CTX_KEY"), x = { class: "ym-collapse" }, E = "YmCollapse", L = $(e({ name: E, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e2, { emit: n2 }) {
  const m2 = e2, c2 = n2, r2 = a(m2.modelValue);
  function p2(e3) {
    r2.value = e3, c2("update:modelValue", e3), c2("change", e3);
  }
  return l(w, { activeNames: r2, handleItemClick: function(e3) {
    let a2 = [...r2.value];
    if (m2.accordion) return a2 = [a2[0] === e3 ? "" : e3], void p2(a2);
    const l2 = a2.indexOf(e3);
    l2 > -1 ? a2.splice(l2, 1) : a2.push(e3), p2(a2);
  } }), t(() => m2.modelValue, (e3) => {
    p2(e3);
  }), s(() => {
    m2.accordion && r2.value.length > 1 && I(E, "accordion mode should only have one active item(手风琴模式应该只有一个激活的组件)");
  }), (e3, a2) => (o(), i("div", x, [d(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-e57d56da"]]), k = (e2) => e2.style.height = "0px", j = (e2) => e2.style.height = `${e2.scrollHeight}px`, B = (e2) => e2.style.height = "", N = (e2) => e2.style.overflow = "hidden", O = (e2) => e2.style.overflow = "", S = { beforeEnter(e2) {
  k(e2), N(e2);
}, enter: (e2) => j(e2), afterEnter(e2) {
  B(e2), O(e2);
}, beforeLeave(e2) {
  j(e2), N(e2);
}, leave: (e2) => k(e2), afterLeave(e2) {
  B(e2), O(e2);
} }, A = ["id"], H = { class: "ym-collapse-item__title" }, K = { class: "ym-collapse-item__wapper" }, P = ["id"], T = $(e({ name: "YmCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e2) {
  const a2 = e2, l2 = n(w, void 0), t2 = m(() => {
    var _a;
    return (_a = l2 == null ? void 0 : l2.activeNames.value) == null ? void 0 : _a.includes(a2.name);
  });
  function s2() {
    a2.disabled || (l2 == null ? void 0 : l2.handleItemClick(a2.name));
  }
  return (e3, a3) => (o(), i("div", { class: c(["ym-collapse-item", { "is-disabled": e3.disabled }]) }, [r("div", { class: c(["ym-collapse-item__header", { "is-disabled": e3.disabled, "is-active": t2.value }]), id: `item-header-${e3.name}`, onClick: s2 }, [r("span", H, [d(e3.$slots, "title", {}, () => [p(u(e3.title), 1)], true)]), v(Y, { icon: "angle-right", class: "header-angle" })], 10, A), v(h, _({ name: "slide" }, f(y(S))), { default: b(() => [g(r("div", K, [r("div", { class: "ym-collapse-item__content", id: `item-content-${e3.name}` }, [d(e3.$slots, "default", {}, void 0, true)], 8, P)], 512), [[C, t2.value]])]), _: 3 }, 16)], 2));
} }), [["__scopeId", "data-v-b89be678"]]), X = V(L), q = V(T);
export {
  X as Y,
  q as a
};
