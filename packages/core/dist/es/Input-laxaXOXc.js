import { defineComponent as e, shallowRef as a, ref as o, computed as l, useAttrs as s, watch as u, openBlock as t, createElementBlock as p, normalizeClass as n, unref as r, Fragment as i, renderSlot as d, createCommentVNode as c, createElementVNode as f, withDirectives as m, mergeProps as y, vModelDynamic as v, createBlock as _, withModifiers as h, vModelText as x, nextTick as w } from "vue";
import { c as k, a as $ } from "./hooks-jOANP4Y2.js";
import { I as b } from "./Icon-BGmI14c6.js";
import { b as B, f as V } from "./vendor-Dfj-y_bx.js";
import { _ as I, w as g } from "./utils-BRb2rlgQ.js";
const C = { key: 0, class: "ym-input__prepend" }, j = { key: 0, class: "ym-input__prefix" }, F = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], R = { key: 1, class: "ym-input__suffix" }, z = { key: 1, class: "ym-input__append" }, P = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], M = g(I(e({ name: "YmInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"], setup(e2, { expose: I2, emit: g2 }) {
  const M2 = e2, U = g2, Y = a(), A = a(), q = o(false), D = o(M2.modelValue), E = l(() => A.value ? A.value : Y.value), G = l(() => M2.disabled), H = s(), J = l(() => M2.clearable && !!D.value && !G.value && L.value), { wrapperRef: K, isFocused: L, handlerBlur: N, handlerFocus: O } = k(E, { afterBlur: () => {
  } }), Q = l(() => "password" === M2.type && M2.showPassword && !G.value && !!D.value), S = function() {
    D.value = "", V(["input", "change", "update:modelValue"], (e3) => {
      U(e3, D.value);
    }), U("clear");
  }, T = function() {
    U("input", D.value), U("update:modelValue", D.value);
  }, W = function() {
    q.value = !q.value;
  }, X = function() {
    U("change", D.value);
  };
  u(() => M2.modelValue, (e3) => {
    D.value = e3;
  }), I2({ ref: E, clear: S, focus: async function() {
    var _a;
    await w(), (_a = E.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = E.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = E.value) == null ? void 0 : _a.select();
  } });
  const Z = $("input");
  return (e3, a2) => (t(), p("div", { class: n(["ym-input", { [`ym-input--${e3.type}`]: e3.type, [`ym-input--${e3.size}`]: e3.size, "is-disabled": G.value, "is-prepend": e3.$slots.prepend, "is-append": e3.$slots.append, "is-prefix": e3.$slots.prefix, "is-suffix": e3.$slots.suffix, "is-focus": r(L) }]) }, ["textarea" !== e3.type ? (t(), p(i, { key: 0 }, [e3.$slots.prepend ? (t(), p("div", C, [d(e3.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "ym-input__wrapper", ref_key: "wrapperRef", ref: K }, [e3.$slots.prefix ? (t(), p("span", j, [d(e3.$slots, "prefix", {}, void 0, true)])) : c("", true), m(f("input", y({ class: "ym-input__inner", ref_key: "inputRef", ref: Y, id: r(Z), type: e3.showPassword ? q.value ? "text" : "password" : e3.type, disabled: G.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[0] || (a2[0] = (e4) => D.value = e4) }, r(H), { onInput: T, onChange: X, onFocus: a2[1] || (a2[1] = (...e4) => r(O) && r(O)(...e4)), onBlur: a2[2] || (a2[2] = (...e4) => r(N) && r(N)(...e4)) }), null, 16, F), [[v, D.value]]), e3.$slots.suffix || J.value || Q.value ? (t(), p("span", R, [d(e3.$slots, "suffix", {}, void 0, true), J.value ? (t(), _(b, { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: S, onMousedown: h(r(B), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), Q.value && q.value ? (t(), _(b, { key: 1, icon: "eye", class: "ym-input__password", onClick: W })) : c("", true), Q.value && !q.value ? (t(), _(b, { key: 2, icon: "eye-slash", class: "ym-input__password", onClick: W })) : c("", true)])) : c("", true)], 512), e3.$slots.append ? (t(), p("div", z, [d(e3.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : m((t(), p("textarea", y({ key: 1, class: "ym-textarea__wrapper", ref_key: "textareaRef", ref: A, id: r(Z), disabled: G.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[3] || (a2[3] = (e4) => D.value = e4) }, r(H), { onInput: T, onChange: X, onFocus: a2[4] || (a2[4] = (...e4) => r(O) && r(O)(...e4)), onBlur: a2[5] || (a2[5] = (...e4) => r(N) && r(N)(...e4)) }), null, 16, P)), [[x, D.value]])], 2));
} }), [["__scopeId", "data-v-c8f5caae"]]));
export {
  M as Y
};
