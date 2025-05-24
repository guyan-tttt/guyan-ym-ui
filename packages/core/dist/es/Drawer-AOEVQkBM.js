import { defineComponent as e, ref as o, computed as a, watch as t, openBlock as l, createBlock as s, Teleport as n, createVNode as r, Transition as d, withCtx as i, unref as m, createCommentVNode as u, createElementBlock as c, normalizeClass as f, normalizeStyle as p, createElementVNode as y, renderSlot as v, toDisplayString as w } from "vue";
import { a as h } from "./Overlay-CbdcxIhb.js";
import { a as _ } from "./Icon-BOnRonde.js";
import { b as k } from "./vendor-D1ZXl11B.js";
import { _ as C, w as b } from "./utils-DY8rdjAx.js";
const $ = { key: 0, class: "ym-drawer__header" }, A = { class: "ym-drawer__header__content" }, B = { class: "ym-drawer__body" }, x = { key: 1, class: "ym-drawer__footer" }, E = b(C(e({ name: "YmDrawer", inheritAttrs: false, __name: "Drawer", props: { modelValue: { type: Boolean }, position: { default: "right" }, width: { default: "30%" }, height: { default: "40%" }, closeOnClickOverlay: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, showClose: { type: Boolean, default: true }, appendTo: { default: "body" }, header: { type: Boolean, default: true }, footer: { type: Boolean, default: true }, beforeClose: {}, closeIcon: { default: "xmark" }, modal: { type: Boolean, default: true }, modalClass: { default: "" }, headerClass: {}, bodyClass: {}, footerClass: {}, zIndex: { default: 2e3 }, title: {} }, emits: ["update:modelValue", "opened", "closed", "open", "close"], setup(e2, { emit: C2 }) {
  const b2 = e2, E2 = C2, I = o(true), O = a(() => {
    const e3 = ["top", "bottom"].includes(b2.position);
    return { [e3 ? "height" : "width"]: b2.width, [e3 ? "width" : "height"]: "100%", zIndex: b2.zIndex + 1 };
  }), V = async () => {
    if (b2.beforeClose && k(b2.beforeClose)) {
      const e3 = async () => {
        await F(), requestAnimationFrame(() => {
          E2("update:modelValue", false);
        });
      };
      b2.beforeClose(e3);
    } else await F(), requestAnimationFrame(() => {
      E2("update:modelValue", false);
    });
  }, q = (e3) => {
    "Escape" === e3.key && b2.modelValue && V();
  };
  t(() => b2.modelValue, async (e3) => {
    e3 && (z(), L.value = e3), e3 && b2.closeOnPressEscape ? window.addEventListener("keydown", q) : (await requestAnimationFrame(() => {
      I.value = true, requestAnimationFrame(() => {
        L.value = e3;
      });
    }), window.removeEventListener("keydown", q));
  });
  const z = () => {
    requestAnimationFrame(() => {
      I.value = false;
    });
  }, F = async () => {
    await requestAnimationFrame(() => {
      I.value = true;
    });
  }, g = () => {
    b2.closeOnClickOverlay && V();
  }, L = o(b2.modelValue);
  return (e3, o2) => (l(), s(n, { to: e3.appendTo }, [r(d, { name: "ym-overlay-fade" }, { default: i(() => [L.value ? (l(), s(m(h), { key: 0, mask: e3.modal, "mask-class": e3.modalClass, "z-index": e3.zIndex, onClick: g }, null, 8, ["mask", "mask-class", "z-index"])) : u("", true)]), _: 1 }), r(d, { onEnter: z, onLeave: F, onBeforeEnter: o2[0] || (o2[0] = (o3) => e3.$emit("open")), onBeforeLeave: o2[1] || (o2[1] = (o3) => e3.$emit("close")), onAfterEnter: o2[2] || (o2[2] = (o3) => e3.$emit("opened")), onAfterLeave: o2[3] || (o2[3] = (o3) => e3.$emit("closed")) }, { default: i(() => [L.value ? (l(), c("div", { key: 0, class: f(["ym-drawer", { [e3.position]: true, [`${e3.position}-active`]: I.value }]), style: p(O.value), role: "dialog" }, [e3.header ? (l(), c("header", $, [y("div", A, [e3.$slots.header || b2.title ? v(e3.$slots, "header", { key: 0 }, () => [y("span", null, w(b2.title), 1)], true) : u("", true)]), e3.showClose ? (l(), c("button", { key: 0, class: "ym-drawer__close", onClick: V, "aria-label": "关闭抽屉" }, [r(m(_), { color: "#000", icon: b2.closeIcon }, null, 8, ["icon"])])) : u("", true)])) : u("", true), y("div", B, [v(e3.$slots, "default", {}, void 0, true)]), e3.footer && e3.$slots.footer ? (l(), c("footer", x, [v(e3.$slots, "footer", {}, void 0, true)])) : u("", true)], 6)) : u("", true)]), _: 3 })], 8, ["to"]));
} }), [["__scopeId", "data-v-5dd073be"]]));
export {
  E as Y
};
