import { defineComponent as e, shallowRef as a, ref as o, computed as l, useAttrs as s, watch as u, openBlock as t, createElementBlock as n, normalizeClass as p, unref as r, Fragment as i, renderSlot as d, createCommentVNode as c, createElementVNode as f, withDirectives as m, mergeProps as y, vModelDynamic as v, createBlock as _, withModifiers as w, vModelText as h, nextTick as k } from "vue";
import { c as x, a as $ } from "./hooks-DZI5xxe9.js";
import { Y as b } from "./Icon-DfJGnspx.js";
import { b as B, f as V } from "./vendor-IunAiIJb.js";
import { _ as I, w as g } from "./utils-JcduRB7A.js";
const C = { key: 0, class: "ym-input__prepend" }, j = { key: 0, class: "ym-input__prefix" }, F = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], R = { key: 1, class: "ym-input__suffix" }, z = { key: 1, class: "ym-input__append" }, P = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], Y = I(e({ name: "YmInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear", "keydown"], setup(e2, { expose: I2, emit: g2 }) {
  const Y2 = e2, M2 = g2, U = a(), A = a(), K = o(false), q = o(Y2.modelValue), D = l(() => A.value ? A.value : U.value), E = l(() => Y2.disabled), G = s(), H = l(() => Y2.clearable && !!q.value && !E.value && L.value), { wrapperRef: J, isFocused: L, handlerBlur: N, handlerFocus: O } = x(D, { afterBlur: () => {
  } }), Q = l(() => "password" === Y2.type && Y2.showPassword && !E.value && !!q.value), S = function() {
    q.value = "", V(["input", "change", "update:modelValue"], (e3) => {
      M2(e3, q.value);
    }), M2("clear");
  }, T = function() {
    M2("input", q.value), M2("update:modelValue", q.value);
  }, W = function() {
    K.value = !K.value;
  }, X = function() {
    M2("change", q.value);
  };
  u(() => Y2.modelValue, (e3) => {
    q.value = e3;
  }), I2({ ref: D, clear: S, focus: async function() {
    var _a;
    await k(), (_a = D.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = D.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = D.value) == null ? void 0 : _a.select();
  } });
  const Z = $("input");
  return (e3, a2) => (t(), n("div", { class: p(["ym-input", { [`ym-input--${e3.type}`]: e3.type, [`ym-input--${e3.size}`]: e3.size, "is-disabled": E.value, "is-prepend": e3.$slots.prepend, "is-append": e3.$slots.append, "is-prefix": e3.$slots.prefix, "is-suffix": e3.$slots.suffix, "is-focus": r(L) }]), onKeydown: a2[6] || (a2[6] = (a3) => e3.$emit("keydown", a3)) }, ["textarea" !== e3.type ? (t(), n(i, { key: 0 }, [e3.$slots.prepend ? (t(), n("div", C, [d(e3.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "ym-input__wrapper", ref_key: "wrapperRef", ref: J }, [e3.$slots.prefix ? (t(), n("span", j, [d(e3.$slots, "prefix", {}, void 0, true)])) : c("", true), m(f("input", y({ class: "ym-input__inner", ref_key: "inputRef", ref: U, id: r(Z), type: e3.showPassword ? K.value ? "text" : "password" : e3.type, disabled: E.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[0] || (a2[0] = (e4) => q.value = e4) }, r(G), { onInput: T, onChange: X, onFocus: a2[1] || (a2[1] = (...e4) => r(O) && r(O)(...e4)), onBlur: a2[2] || (a2[2] = (...e4) => r(N) && r(N)(...e4)) }), null, 16, F), [[v, q.value]]), e3.$slots.suffix || H.value || Q.value ? (t(), n("span", R, [d(e3.$slots, "suffix", {}, void 0, true), H.value ? (t(), _(b, { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: S, onMousedown: w(r(B), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), Q.value && K.value ? (t(), _(b, { key: 1, icon: "eye", class: "ym-input__password", onClick: W })) : c("", true), Q.value && !K.value ? (t(), _(b, { key: 2, icon: "eye-slash", class: "ym-input__password", onClick: W })) : c("", true)])) : c("", true)], 512), e3.$slots.append ? (t(), n("div", z, [d(e3.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : m((t(), n("textarea", y({ key: 1, class: "ym-textarea__wrapper", ref_key: "textareaRef", ref: A, id: r(Z), disabled: E.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[3] || (a2[3] = (e4) => q.value = e4) }, r(G), { onInput: T, onChange: X, onFocus: a2[4] || (a2[4] = (...e4) => r(O) && r(O)(...e4)), onBlur: a2[5] || (a2[5] = (...e4) => r(N) && r(N)(...e4)) }), null, 16, P)), [[h, q.value]])], 34));
} }), [["__scopeId", "data-v-6954c832"]]), M = g(Y);
export {
  Y,
  M as a
};
