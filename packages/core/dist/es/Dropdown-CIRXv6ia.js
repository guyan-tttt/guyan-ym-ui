import { defineComponent as e, inject as o, computed as i, openBlock as d, createElementBlock as t, Fragment as l, createCommentVNode as a, createElementVNode as s, unref as n, normalizeClass as m, renderSlot as r, createTextVNode as p, toDisplayString as u, useSlots as c, ref as f, provide as v, createVNode as y, mergeProps as _, withCtx as b, renderList as k, createBlock as h, withModifiers as w } from "vue";
import { Y as B } from "./Tooltip-Bbn3XmFU.js";
import { a as C, b as g } from "./hooks-CF80WHXu.js";
import { _ as z, w as $ } from "./utils-CPHIa2sh.js";
import { Y as I, a as j } from "./Button-vXUElOz5.js";
import { b as Y, c as D } from "./vendor-BXKGMoVT.js";
const O = Symbol("dropdownContext"), x = { key: 0, role: "separator", class: "divided-placeholder" }, T = ["id"], R = z(e({ name: "YmDropdownItem", __name: "DropdownItem", props: { command: { default: C().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e2) {
  const c2 = e2, f2 = o(O), v2 = i(() => f2 == null ? void 0 : f2.size.value), y2 = () => {
    c2.disabled || (f2 == null ? void 0 : f2.handleItemClick(c2));
  };
  return (e3, o2) => (d(), t(l, null, [e3.divided ? (d(), t("li", x)) : a("", true), s("li", { id: `dropdown-item-${e3.command ?? n(C)().value}`, class: m({ "ym-dropdown__item": true, ["ym-dropdown__item--" + v2.value]: v2.value, "is-disabled": e3.disabled, "is-divided": e3.divided }), onClick: y2 }, [r(e3.$slots, "default", {}, () => [p(u(e3.label), 1)], true)], 10, T)], 64));
} }), [["__scopeId", "data-v-0684de6a"]]), A = { class: "ym-dropdown__menu" }, S = $(z(e({ name: "YmDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: {}, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, content: {}, trigger: { default: "click" }, placement: {}, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e2, { expose: o2, emit: a2 }) {
  const p2 = e2, u2 = a2;
  c();
  const C2 = f(), z2 = f(), $2 = i(() => Y(p2, ["items", "hideOnClick", "size", "type", "splitButton"])), x2 = i(() => {
    var _a;
    return ((_a = z2.value) == null ? void 0 : _a.ref) ?? void 0;
  });
  return o2({ open: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.hide();
  } }), v(O, { handleItemClick: function(e3) {
    var _a;
    p2.hideOnClick && ((_a = C2.value) == null ? void 0 : _a.hide()), !D(e3.command) && u2("command", e3.command);
  }, size: i(() => p2.size) }), g(), (e3, o3) => {
    var _a;
    return d(), t("div", { class: m(["ym-dropdown", { "is-disabled": p2.disabled }]) }, [y(B, _({ ref_key: "tooltipRef", ref: C2 }, $2.value, { "virtual-ref": (_a = x2.value) == null ? void 0 : _a.value, onVisibleChange: o3[1] || (o3[1] = (o4) => e3.$emit("visible-change", o4)) }), { content: b(() => [s("div", A, [r(e3.$slots, "dropdown", {}, () => [(d(true), t(l, null, k(e3.items, (e4) => (d(), h(R, _({ key: e4.command, ref_for: true }, e4), null, 16))), 128))], true)])]), default: b(() => [e3.splitButton ? (d(), h(n(I), { key: 0, type: e3.type, size: e3.size, disabled: e3.disabled }, { default: b(() => [y(n(j), { onClick: o3[0] || (o3[0] = w((o4) => e3.$emit("click", o4), ["stop"])) }, { default: b(() => [r(e3.$slots, "default", {}, void 0, true)]), _: 3 }), y(n(j), { ref_key: "triggerRef", ref: z2, icon: "angle-down" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : r(e3.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-ref"])], 2);
  };
} }), [["__scopeId", "data-v-af84036c"]])), V = $(R);
export {
  S as Y,
  V as a
};
