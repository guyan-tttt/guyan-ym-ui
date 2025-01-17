import { d as e, _ as a, w as l } from "./utils-BHtccd4_.js";
import { defineComponent as t, ref as o, computed as n, watchEffect as u, watch as s, openBlock as i, createElementBlock as r, normalizeClass as v, createElementVNode as d, toDisplayString as c, createBlock as p, createVNode as g, createCommentVNode as m, Fragment as b, renderList as f, createTextVNode as y } from "vue";
import { Y as h } from "./Icon-BPqbRGFK.js";
import { Y as k } from "./Input-BJnk8Nav.js";
import { Y as z } from "./Select-Dk2C8NlW.js";
import { u as x } from "./vendor-D1ZXl11B.js";
const S = ["disabled"], N = { key: 0 }, C = { class: "ym-pager" }, T = ["onClick"], M = ["disabled"], j = { key: 0 }, I = { key: 0, class: "ym-pagination-jumper" }, B = { class: "ym-pagination-jumper__input" }, P = { key: 1, class: "ym-pagination-sizes" }, _ = { key: 2, class: "ym-pagination-total" }, V = l(a(t({ name: "YmPagination", __name: "Pagination", props: { background: { type: Boolean, default: false }, pageSize: { default: 5 }, total: {}, pagerCount: { default: 5 }, currentPage: { default: 1 }, pageSizes: { default: [5, 10, 15, 20] }, prevText: {}, nextText: {}, disabled: { type: Boolean, default: false }, prevIcon: { default: "chevron-left" }, nextIcon: { default: "chevron-right" }, jumper: { type: Boolean, default: false }, sizeSelector: { type: Boolean, default: false }, totalor: { type: Boolean, default: false } }, emits: ["size-change", "current-change", "prev-click", "next-click"], setup(a2, { emit: l2 }) {
  const t2 = a2, V2 = l2, L = o(t2.currentPage), U = o(t2.pageSize), Y = o(false), w = o(false), E = n(() => Math.ceil(t2.total / U.value));
  u(() => {
    const e2 = (t2.pagerCount - 1) / 2;
    w.value = false, Y.value = false, t2.total > U.value && (L.value > t2.pagerCount - e2 && (Y.value = true), L.value < E.value - e2 && (w.value = true));
  });
  const K = n(() => {
    const e2 = t2.pagerCount, a3 = (e2 - 1) / 2, l3 = L.value, o2 = Number(E.value);
    let n2 = false, u2 = false;
    o2 > e2 && (l3 > e2 - a3 && (n2 = true), l3 < o2 - a3 && (u2 = true));
    const s2 = [];
    if (n2 && !u2) for (let a4 = o2 - (e2 - 2); a4 < o2; a4++) s2.push(a4);
    else if (!n2 && u2) for (let a4 = 2; a4 < e2; a4++) s2.push(a4);
    else if (u2 && n2) {
      const a4 = Math.floor(e2 / 2) - 1;
      for (let e3 = l3 - a4; e3 <= l3 + a4; e3++) s2.push(e3);
    } else for (let e3 = 2; e3 < o2; e3++) s2.push(e3);
    return s2;
  }), O = (e2) => {
    t2.disabled || e2 > 0 && e2 <= E.value && (L.value = e2, V2("current-change", e2));
  }, R = () => {
    t2.disabled || L.value > 1 && (L.value--, V2("current-change", L.value), V2("prev-click", L.value));
  }, $ = () => {
    t2.disabled || L.value < E.value && (L.value++, V2("current-change", L.value), V2("next-click", L.value));
  }, q = o(""), A = o(U.value), D = n(() => {
    if (x(t2.pageSizes) && t2.pageSizes.length > 0) return t2.pageSizes.map((e2) => ({ label: `${e2}/页`, value: e2 }));
  }), F = (e2) => {
    const a3 = Number(e2);
    a3 > 0 && (U.value = a3, L.value = 1, V2("size-change", a3));
  }, G = (a3) => {
    if ("ENTER" === a3.key.toLocaleUpperCase()) {
      const a4 = Number(q.value);
      if (isNaN(a4)) return e("Pagination", "分页跳转器必须输入数字");
      a4 > 0 && a4 <= E.value && (L.value = a4, V2("current-change", a4));
    }
  }, H = (e2) => {
    var _a;
    if (t2.disabled) return;
    const a3 = e2.target;
    "LI" !== a3.tagName && "BUTTON" !== a3.tagName ? "BUTTON" === ((_a = a3.parentNode) == null ? void 0 : _a.tagName) && a3.parentNode.classList.add("hover") : a3.classList.add("hover");
  }, J = (e2) => {
    t2.disabled || e2.target.classList.remove("hover");
  };
  return s(() => t2.pageSize, (a3) => {
    if (!t2.sizeSelector && t2.pageSizes.length <= 0) return e("Pagination", "当使用sizeSelector属性时，pageSizes属性无效");
    a3 && a3 > 0 && a3 <= t2.pageSizes[t2.pageSizes.length - 1] && (U.value = a3, A.value = a3, L.value = 1);
  }), s(() => t2.currentPage, (e2) => {
    e2 && e2 > 0 && e2 <= E.value && (L.value = e2);
  }), (e2, a3) => (i(), r("div", { class: v(["ym-pagination", { "is-background": t2.background, "is-disabled": t2.disabled }]), onMouseover: H }, [d("button", { class: v(["ym-pagination-prev", { disabled: 1 === L.value }]), disabled: 1 === L.value, onClick: R, onMouseleave: J }, [e2.prevText ? (i(), r("span", N, c(e2.prevText), 1)) : (i(), p(h, { key: 1, icon: e2.prevIcon }, null, 8, ["icon"]))], 42, S), d("ul", C, [d("li", { class: v({ active: !t2.disabled && 1 === L.value }), onClick: a3[0] || (a3[0] = (e3) => O(1)), onMouseleave: J }, " 1 ", 34), Y.value ? (i(), r("li", { key: 0, onMouseleave: J }, [g(h, { icon: "fa-ellipsis-h" })], 32)) : m("", true), (i(true), r(b, null, f(K.value, (e3) => (i(), r("li", { key: e3, class: v([{ active: !t2.disabled && e3 === L.value }, "number"]), onClick: (a4) => O(e3), onMouseleave: J }, c(e3), 43, T))), 128)), w.value ? (i(), r("li", { key: 1, onMouseleave: J }, [g(h, { icon: "fa-ellipsis-h" })], 32)) : m("", true), E.value > 1 ? (i(), r("li", { key: 2, class: v({ active: !t2.disabled && L.value === E.value }), onClick: a3[1] || (a3[1] = (e3) => O(Number(E.value))), onMouseleave: J }, c(E.value), 35)) : m("", true)]), d("button", { class: v(["ym-pagination-next", { disabled: L.value === E.value }]), disabled: L.value === E.value, onClick: $, onMouseleave: J }, [e2.nextText ? (i(), r("span", j, c(e2.nextText), 1)) : (i(), p(h, { key: 1, icon: e2.nextIcon }, null, 8, ["icon"]))], 42, M), t2.jumper ? (i(), r("div", I, [a3[4] || (a3[4] = y(" 前往 ")), d("div", B, [g(k, { type: "text", size: "small", disabled: t2.disabled, modelValue: q.value, "onUpdate:modelValue": a3[2] || (a3[2] = (e3) => q.value = e3), onKeydown: G }, null, 8, ["disabled", "modelValue", "onKeydown"])]), a3[5] || (a3[5] = y(" 页 "))])) : m("", true), t2.sizeSelector ? (i(), r("div", P, [g(z, { modelValue: A.value, "onUpdate:modelValue": a3[3] || (a3[3] = (e3) => A.value = e3), placeholder: "选择页数", options: D.value, onChange: F, disabled: t2.disabled }, null, 8, ["modelValue", "options", "disabled"])])) : m("", true), t2.totalor ? (i(), r("div", _, " 共 " + c(E.value) + " 页 ", 1)) : m("", true)], 34));
} }), [["__scopeId", "data-v-6b19275c"]]));
export {
  V as Y
};
