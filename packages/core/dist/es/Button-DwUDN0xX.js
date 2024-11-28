import { defineComponent as e, useSlots as t, ref as o, computed as a, inject as l, openBlock as i, createBlock as s, resolveDynamicComponent as n, normalizeClass as u, unref as d, withCtx as p, renderSlot as r, createVNode as c, normalizeStyle as y, createCommentVNode as f, provide as m, reactive as b, toRef as v, createElementBlock as g } from "vue";
import { Y as B } from "./Icon-C3MBYC73.js";
import { t as _ } from "./vendor-BaLO6kvJ.js";
import { _ as z, w as T } from "./utils-CG1f-MPP.js";
const h = Symbol("BUTTON_GROUP_CTX_KEY"), k = z(e({ name: "YmButton", __name: "Button", props: { type: { default: "default" }, size: { default: "middle" }, disabled: { type: Boolean, default: false }, loading: { type: [Boolean, Object], default: false }, plain: { type: Boolean, default: false }, nativeType: { default: "button" }, circle: { type: Boolean, default: false }, round: { type: Boolean, default: false }, tag: { default: "button" }, autofocus: { type: Boolean }, loadingIcon: {}, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 }, icon: {}, corrugation: { type: Boolean, default: false } }, emits: ["click"], setup(e2, { expose: m2, emit: b2 }) {
  const v2 = e2, g2 = t(), z2 = b2, T2 = o(), k2 = (e3) => z2("click", e3), x2 = _(k2, v2.throttleDuration), I2 = a(() => ({ marginRight: g2.default ? "6px" : "0px" })), Y2 = l(h, void 0), $2 = a(() => (Y2 == null ? void 0 : Y2.size) ?? v2.size ?? ""), j = a(() => (Y2 == null ? void 0 : Y2.type) ?? v2.type ?? ""), G = a(() => (Y2 == null ? void 0 : Y2.disabled) ?? v2.disabled ?? false);
  return m2({ ref: T2, size: $2, type: j, disabled: G }), (e3, t2) => (i(), s(n(e3.tag), { ref_key: "buttonRef", ref: T2, autofocus: e3.autofocus, class: u(["ym-button", { [`ym-button--${j.value}`]: j.value, [`ym-button--${$2.value}`]: $2.value, "is-disabled": G.value, "is-plain": e3.plain, "is-loading": e3.loading, "is-circle": e3.circle, "is-round": e3.round, "is-corrugation": e3.corrugation }]), type: "button" === e3.tag ? e3.nativeType : void 0, disabled: !(!G.value && !e3.loading) || void 0, onClick: t2[0] || (t2[0] = (t3) => e3.useThrottle ? d(x2)(t3) : k2(t3)) }, { default: p(() => [e3.loading ? r(e3.$slots, "loading", { key: 0 }, () => [c(B, { class: "loading-icon", icon: e3.loadingIcon ?? "spinner", spin: "", style: y(I2.value), size: "1x" }, null, 8, ["icon", "style"])], true) : f("", true), e3.icon && !e3.loading ? (i(), s(B, { key: 1, icon: e3.icon, style: y(I2.value), size: "1x" }, null, 8, ["icon", "style"])) : f("", true), r(e3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["autofocus", "type", "disabled", "class"]));
} }), [["__scopeId", "data-v-81525f79"]]), x = { class: "ym-button-group" }, I = z(e({ name: "YmButtonGroup", inheritAttrs: false, __name: "ButtonGroup", props: { size: {}, type: {}, disabled: { type: Boolean } }, setup(e2) {
  const t2 = e2;
  return m(h, b({ size: v(t2, "size"), type: v(t2, "type"), disabled: v(t2, "disabled") })), (e3, t3) => (i(), g("div", x, [r(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-13675c9a"]]), Y = T(k), $ = T(I);
export {
  $ as Y,
  Y as a,
  k as b
};
