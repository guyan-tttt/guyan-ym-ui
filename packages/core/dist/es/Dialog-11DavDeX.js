import { a as e, _ as o, w as l } from "./utils-DY8rdjAx.js";
import { defineComponent as a, ref as t, useSlots as s, computed as n, watch as d, openBlock as r, createBlock as i, Teleport as c, createVNode as u, Transition as f, withCtx as m, createElementVNode as p, withModifiers as y, normalizeStyle as v, createElementBlock as _, renderSlot as C, toDisplayString as g, createCommentVNode as h } from "vue";
import { Y as k } from "./Icon-BOnRonde.js";
import { Y as w } from "./Overlay-CbdcxIhb.js";
import { d as B, b } from "./vendor-D1ZXl11B.js";
const x = { class: "ym-dialog__header__title" }, D = { class: "ym-dialog__body" }, E = l(o(a({ name: "YmDialog", __name: "Dialog", props: { modelValue: { type: Boolean }, title: {}, width: { default: "40%" }, fullscreen: { type: Boolean, default: false }, top: { default: "15vh" }, modal: { type: Boolean, default: true }, modalClass: {}, lockScroll: { type: Boolean, default: true }, openDelay: { default: 0 }, closeDelay: { default: 0 }, closeOnClickModal: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, showClose: { type: Boolean, default: true }, beforeClose: {}, center: { type: Boolean, default: false }, closeIcon: { default: "xmark" }, zIndex: { default: 2e3 }, customClass: {}, appendTo: { default: "body" }, header: { type: Boolean, default: true }, footer: { type: Boolean, default: true }, alginCenter: { type: Boolean } }, emits: ["open", "close", "opened", "closed", "update:modelValue"], setup(o2, { expose: l2, emit: a2 }) {
  const E2 = o2, I = a2, V = t(E2.modelValue);
  s();
  const $ = () => {
    E2.beforeClose && b(E2.beforeClose) ? E2.beforeClose(() => {
      V.value = false, I("update:modelValue", false);
    }) : (V.value = false, I("update:modelValue", false));
  }, L = () => {
    V.value = true, I("update:modelValue", true);
  }, T = () => {
    B($, E2.closeDelay);
  }, j = () => {
    E2.modal && E2.closeOnClickModal && B($, E2.closeDelay);
  }, O = n(() => E2.fullscreen ? "100%" : E2.width.toString().includes("%") ? E2.width : e(E2.width));
  d(() => E2.modelValue, (e2) => {
    if (e2) B(L, E2.openDelay), A(z);
    else {
      if (M(z), !V.value) return;
      B($, E2.closeDelay);
    }
  });
  const z = (e2) => {
    if (E2.closeOnPressEscape && "Escape" === e2.key) {
      if (e2.target instanceof HTMLInputElement) return;
      if (e2.target instanceof HTMLTextAreaElement) return;
      B($, E2.closeDelay);
    }
  }, A = (e2) => {
    window.addEventListener("keydown", e2);
  }, M = (e2) => {
    window.removeEventListener("keydown", e2);
  };
  return l2({ visible: V, open: L, close: $ }), (e2, o3) => (r(), i(c, { to: e2.appendTo }, [u(f, { name: "dialog-fade", onBeforeEnter: o3[0] || (o3[0] = (o4) => e2.$emit("opened")), onAfterEnter: o3[1] || (o3[1] = (o4) => e2.$emit("open")), onAfterLeave: o3[2] || (o3[2] = (o4) => e2.$emit("closed")), onBeforeLeave: o3[3] || (o3[3] = (o4) => e2.$emit("close")) }, { default: m(() => [V.value ? (r(), i(w, { key: 0, class: "ym-dialog-overlay", mask: e2.modal, zIndex: e2.zIndex, overClass: e2.modalClass, onClick: j }, { default: m(() => [p("div", { class: "ym-dialog", onClick: y(() => {
  }, ["stop"]), style: v({ width: O.value, marginTop: e2.top }) }, [e2.header ? (r(), _("header", { key: 0, class: "ym-dialog__header", style: v({ justifyContent: e2.center ? "center" : "space-between" }) }, [C(e2.$slots, "header", {}, () => [p("span", x, g(e2.title), 1)], true), e2.showClose ? (r(), _("button", { key: 0, class: "ym-dialog__header__close", onClick: T }, [u(k, { color: "#909399", icon: E2.closeIcon }, null, 8, ["icon"])])) : h("", true)], 4)) : h("", true), p("div", D, [C(e2.$slots, "default", {}, void 0, true)]), e2.footer ? (r(), _("footer", { key: 1, class: "ym-dialog__footer", style: v({ textAlign: e2.center ? "center" : "right" }) }, [C(e2.$slots, "footer", {}, void 0, true)], 4)) : h("", true)], 4)]), _: 3 }, 8, ["mask", "zIndex", "overClass"])) : h("", true)]), _: 3 })], 8, ["to"]));
} }), [["__scopeId", "data-v-bed4a56f"]]));
export {
  E as Y
};
