import { defineComponent as e, inject as o, computed as i, openBlock as t, createElementBlock as l, Fragment as d, createCommentVNode as a, createElementVNode as s, unref as n, normalizeClass as r, renderSlot as m, createTextVNode as p, toDisplayString as u, useSlots as c, ref as v, provide as f, createVNode as y, mergeProps as _, withCtx as k, renderList as b, createBlock as h } from "vue";
import { Y as w } from "./Tooltip-BqtlqvLD.js";
import { a as g } from "./hooks-DLfEe-a9.js";
import { _ as B, w as C } from "./utils-BhyWMiYf.js";
import { Y as z, a as $ } from "./Button-B1VlfnM7.js";
import { o as I, i as j } from "./vendor-Clj6B87w.js";
const Y = Symbol("dropdownContext"), D = { key: 0, role: "separator", class: "divided-placeholder" }, O = ["id"], x = B(e({ name: "YmDropdownItem", __name: "DropdownItem", props: { command: { default: g().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e2) {
  const c2 = e2, v2 = o(Y), f2 = i(() => v2 == null ? void 0 : v2.size.value), y2 = () => {
    c2.disabled || (v2 == null ? void 0 : v2.handleItemClick(c2));
  };
  return (e3, o2) => (t(), l(d, null, [e3.divided ? (t(), l("li", D)) : a("", true), s("li", { id: `dropdown-item-${e3.command ?? n(g)().value}`, class: r({ "ym-dropdown__item": true, ["ym-dropdown__item--" + f2.value]: f2.value, "is-disabled": e3.disabled, "is-divided": e3.divided }), onClick: y2 }, [m(e3.$slots, "default", {}, () => [p(u(e3.label), 1)], true)], 10, O)], 64));
} }), [["__scopeId", "data-v-0684de6a"]]), T = { class: "ym-dropdown__menu" }, R = C(B(e({ name: "YmDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: {}, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, content: {}, trigger: { default: "click" }, placement: {}, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e2, { expose: o2, emit: a2 }) {
  const p2 = e2, u2 = a2;
  c();
  const g2 = v(), B2 = v(), C2 = i(() => I(p2, ["items", "hideOnClick", "size", "type", "splitButton"])), D2 = i(() => {
    var _a;
    return ((_a = B2.value) == null ? void 0 : _a.ref) ?? void 0;
  });
  return o2({ open: () => {
    var _a;
    return (_a = g2.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = g2.value) == null ? void 0 : _a.hide();
  } }), f(Y, { handleItemClick: function(e3) {
    var _a;
    p2.hideOnClick && ((_a = g2.value) == null ? void 0 : _a.hide()), !j(e3.command) && u2("command", e3.command);
  }, size: i(() => p2.size) }), (e3, o3) => {
    var _a;
    return t(), l("div", { class: r(["ym-dropdown", { "is-disabled": p2.disabled }]) }, [y(w, _({ ref_key: "tooltipRef", ref: g2 }, C2.value, { "virtual-triggering": e3.splitButton, "virtual-ref": (_a = D2.value) == null ? void 0 : _a.value, onVisibleChange: o3[1] || (o3[1] = (o4) => e3.$emit("visible-change", o4)) }), { content: k(() => [s("div", T, [m(e3.$slots, "dropdown", {}, () => [(t(true), l(d, null, b(e3.items, (e4) => (t(), h(x, _({ key: e4.command, ref_for: true }, e4), null, 16))), 128))], true)])]), default: k(() => [e3.splitButton ? (t(), h(n(z), { key: 0, type: e3.type, size: e3.size, disabled: e3.disabled }, { default: k(() => [y(n($), { onClick: o3[0] || (o3[0] = (o4) => e3.$emit("click", o4)) }, { default: k(() => [m(e3.$slots, "default", {}, void 0, true)]), _: 3 }), y(n($), { ref_key: "triggerRef", ref: B2, icon: "angle-down" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : m(e3.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-triggering", "virtual-ref"])], 2);
  };
} }), [["__scopeId", "data-v-75f01310"]])), A = C(x);
export {
  R as Y,
  A as a
};
