import { defineComponent as e, inject as o, computed as i, openBlock as d, createElementBlock as t, Fragment as l, createCommentVNode as a, createElementVNode as s, unref as n, normalizeClass as m, renderSlot as r, createTextVNode as p, toDisplayString as u, useSlots as c, ref as f, provide as v, createVNode as y, mergeProps as _, withCtx as b, renderList as k, createBlock as h, withModifiers as w } from "vue";
import { Y as B } from "./Tooltip-CuwX73vB.js";
import { a as C } from "./hooks-DLfEe-a9.js";
import { _ as g, w as z } from "./utils-BhyWMiYf.js";
import { Y as $, a as I } from "./Button-B1VlfnM7.js";
import { o as j, i as Y } from "./vendor-Clj6B87w.js";
const D = Symbol("dropdownContext"), O = { key: 0, role: "separator", class: "divided-placeholder" }, x = ["id"], T = g(e({ name: "YmDropdownItem", __name: "DropdownItem", props: { command: { default: C().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e2) {
  const c2 = e2, f2 = o(D), v2 = i(() => f2 == null ? void 0 : f2.size.value), y2 = () => {
    c2.disabled || (f2 == null ? void 0 : f2.handleItemClick(c2));
  };
  return (e3, o2) => (d(), t(l, null, [e3.divided ? (d(), t("li", O)) : a("", true), s("li", { id: `dropdown-item-${e3.command ?? n(C)().value}`, class: m({ "ym-dropdown__item": true, ["ym-dropdown__item--" + v2.value]: v2.value, "is-disabled": e3.disabled, "is-divided": e3.divided }), onClick: y2 }, [r(e3.$slots, "default", {}, () => [p(u(e3.label), 1)], true)], 10, x)], 64));
} }), [["__scopeId", "data-v-0684de6a"]]), R = { class: "ym-dropdown__menu" }, A = z(g(e({ name: "YmDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: {}, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, content: {}, trigger: { default: "click" }, placement: {}, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e2, { expose: o2, emit: a2 }) {
  const p2 = e2, u2 = a2;
  c();
  const C2 = f(), g2 = f(), z2 = i(() => j(p2, ["items", "hideOnClick", "size", "type", "splitButton"])), O2 = i(() => {
    var _a;
    return ((_a = g2.value) == null ? void 0 : _a.ref) ?? void 0;
  });
  return o2({ open: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.hide();
  } }), v(D, { handleItemClick: function(e3) {
    var _a;
    p2.hideOnClick && ((_a = C2.value) == null ? void 0 : _a.hide()), !Y(e3.command) && u2("command", e3.command);
  }, size: i(() => p2.size) }), (e3, o3) => {
    var _a;
    return d(), t("div", { class: m(["ym-dropdown", { "is-disabled": p2.disabled }]) }, [y(B, _({ ref_key: "tooltipRef", ref: C2 }, z2.value, { "virtual-ref": (_a = O2.value) == null ? void 0 : _a.value, onVisibleChange: o3[1] || (o3[1] = (o4) => e3.$emit("visible-change", o4)) }), { content: b(() => [s("div", R, [r(e3.$slots, "dropdown", {}, () => [(d(true), t(l, null, k(e3.items, (e4) => (d(), h(T, _({ key: e4.command, ref_for: true }, e4), null, 16))), 128))], true)])]), default: b(() => [e3.splitButton ? (d(), h(n($), { key: 0, type: e3.type, size: e3.size, disabled: e3.disabled }, { default: b(() => [y(n(I), { onClick: o3[0] || (o3[0] = w((o4) => e3.$emit("click", o4), ["stop"])) }, { default: b(() => [r(e3.$slots, "default", {}, void 0, true)]), _: 3 }), y(n(I), { ref_key: "triggerRef", ref: g2, icon: "angle-down" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : r(e3.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-ref"])], 2);
  };
} }), [["__scopeId", "data-v-cf5d83be"]])), S = z(T);
export {
  A as Y,
  S as a
};
