import { defineComponent as e, shallowRef as a, ref as o, computed as l, useAttrs as s, watch as u, openBlock as t, createElementBlock as n, normalizeClass as p, unref as r, Fragment as d, renderSlot as i, createCommentVNode as c, createElementVNode as f, withDirectives as m, mergeProps as y, vModelDynamic as v, createBlock as _, withModifiers as h, vModelText as w, nextTick as k } from "vue";
import { c as x, a as $ } from "./hooks-CB8aTc5l.js";
import { Y as b } from "./Icon-ckGGeATQ.js";
import { u as B } from "./Form-CFXvvl8t.js";
import { d as V, _ as I, w as g } from "./utils-CN-UVqEO.js";
import { p as j, f as C } from "./vendor-Bde6p_Xx.js";
const F = { key: 0, class: "ym-input__prepend" }, R = { key: 0, class: "ym-input__prefix" }, z = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], P = { key: 1, class: "ym-input__suffix" }, Y = { key: 1, class: "ym-input__append" }, M = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], U = I(e({ name: "YmInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear", "keydown"], setup(e2, { expose: I2, emit: g2 }) {
  const { formItem: U2 } = B(), A2 = e2, K = g2, q = a(), D = a(), E = o(false), G = o(A2.modelValue), H = l(() => D.value ? D.value : q.value), J = l(() => A2.disabled), L = s(), N = l(() => A2.clearable && !!G.value && !J.value && Q.value), { wrapperRef: O, isFocused: Q, handlerBlur: S, handlerFocus: T } = x(H, { afterBlur: () => {
    U2 == null ? void 0 : U2.validate("blur").catch((e3) => V(e3));
  } }), W = l(() => "password" === A2.type && A2.showPassword && !J.value && !!G.value), X = function() {
    G.value = "", C(["input", "change", "update:modelValue"], (e3) => {
      K(e3, G.value);
    }), K("clear"), U2 == null ? void 0 : U2.clearValidate();
  }, Z = function() {
    K("input", G.value), K("update:modelValue", G.value);
  }, ee = function() {
    E.value = !E.value;
  }, ae = function() {
    K("change", G.value);
  };
  u(() => A2.modelValue, (e3) => {
    G.value = e3, U2 == null ? void 0 : U2.validate("change").catch((e4) => V(e4));
  }), I2({ ref: H, clear: X, focus: async function() {
    var _a;
    await k(), (_a = H.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = H.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = H.value) == null ? void 0 : _a.select();
  } });
  const oe = $("input");
  return (e3, a2) => (t(), n("div", { class: p(["ym-input", { [`ym-input--${e3.type}`]: e3.type, [`ym-input--${e3.size}`]: e3.size, "is-disabled": J.value, "is-prepend": e3.$slots.prepend, "is-append": e3.$slots.append, "is-prefix": e3.$slots.prefix, "is-suffix": e3.$slots.suffix, "is-focus": r(Q) }]), onKeydown: a2[6] || (a2[6] = (a3) => e3.$emit("keydown", a3)) }, ["textarea" !== e3.type ? (t(), n(d, { key: 0 }, [e3.$slots.prepend ? (t(), n("div", F, [i(e3.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "ym-input__wrapper", ref_key: "wrapperRef", ref: O }, [e3.$slots.prefix ? (t(), n("span", R, [i(e3.$slots, "prefix", {}, void 0, true)])) : c("", true), m(f("input", y({ class: "ym-input__inner", ref_key: "inputRef", ref: q, id: r(oe), type: e3.showPassword ? E.value ? "text" : "password" : e3.type, disabled: J.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[0] || (a2[0] = (e4) => G.value = e4) }, r(L), { onInput: Z, onChange: ae, onFocus: a2[1] || (a2[1] = (...e4) => r(T) && r(T)(...e4)), onBlur: a2[2] || (a2[2] = (...e4) => r(S) && r(S)(...e4)) }), null, 16, z), [[v, G.value]]), e3.$slots.suffix || N.value || W.value ? (t(), n("span", P, [i(e3.$slots, "suffix", {}, void 0, true), N.value ? (t(), _(b, { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: X, onMousedown: h(r(j), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), W.value && E.value ? (t(), _(b, { key: 1, icon: "eye", class: "ym-input__password", onClick: ee })) : c("", true), W.value && !E.value ? (t(), _(b, { key: 2, icon: "eye-slash", class: "ym-input__password", onClick: ee })) : c("", true)])) : c("", true)], 512), e3.$slots.append ? (t(), n("div", Y, [i(e3.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : m((t(), n("textarea", y({ key: 1, class: "ym-textarea__wrapper", ref_key: "textareaRef", ref: D, id: r(oe), disabled: J.value, readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[3] || (a2[3] = (e4) => G.value = e4) }, r(L), { onInput: Z, onChange: ae, onFocus: a2[4] || (a2[4] = (...e4) => r(T) && r(T)(...e4)), onBlur: a2[5] || (a2[5] = (...e4) => r(S) && r(S)(...e4)) }), null, 16, M)), [[w, G.value]])], 34));
} }), [["__scopeId", "data-v-84f47cd4"]]), A = g(U);
export {
  U as Y,
  A as a
};
