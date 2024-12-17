import { defineComponent as e, shallowRef as a, ref as o, computed as l, useAttrs as s, watch as t, openBlock as u, createElementBlock as n, normalizeClass as p, unref as r, Fragment as d, renderSlot as i, createCommentVNode as c, createElementVNode as f, withDirectives as m, mergeProps as y, vModelDynamic as v, createBlock as _, withModifiers as h, vModelText as w, nextTick as k } from "vue";
import { d as x } from "./hooks-CF80WHXu.js";
import { Y as b } from "./Icon-BN1S7njp.js";
import { u as $, a as B, b as V } from "./Form-DWky_lCK.js";
import { d as I, _ as g, w as j } from "./utils-CPHIa2sh.js";
import { r as C, f as F } from "./vendor-BXKGMoVT.js";
const R = { key: 0, class: "ym-input__prepend" }, z = { key: 0, class: "ym-input__prefix" }, P = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], Y = { key: 1, class: "ym-input__suffix" }, M = { key: 1, class: "ym-input__append" }, U = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], A = g(e({ name: "YmInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear", "keydown"], setup(e2, { expose: g2, emit: j2 }) {
  const { formItem: A2 } = $(), K2 = e2, q = j2, D = a(), E = a(), G = o(false), H = o(K2.modelValue), J = l(() => E.value ? E.value : D.value), L = B(), N = s(), O = l(() => K2.clearable && !!H.value && !L.value && S.value), { wrapperRef: Q, isFocused: S, handlerBlur: T, handlerFocus: W } = x(J, { afterBlur: () => {
    A2 == null ? void 0 : A2.validate("blur").catch((e3) => I(e3));
  } }), X = l(() => "password" === K2.type && K2.showPassword && !L.value && !!H.value), Z = function() {
    H.value = "", F(["input", "change", "update:modelValue"], (e3) => {
      q(e3, H.value);
    }), q("clear"), A2 == null ? void 0 : A2.clearValidate();
  }, ee = function() {
    q("input", H.value), q("update:modelValue", H.value);
  }, ae = function() {
    G.value = !G.value;
  }, oe = function() {
    q("change", H.value);
  };
  t(() => K2.modelValue, (e3) => {
    H.value = e3, A2 == null ? void 0 : A2.validate("change").catch((e4) => I(e4));
  }), g2({ ref: J, clear: Z, focus: async function() {
    var _a;
    await k(), (_a = J.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = J.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = J.value) == null ? void 0 : _a.select();
  } });
  const { inputId: le } = V(K2, A2);
  return (e3, a2) => (u(), n("div", { class: p(["ym-input", { [`ym-input--${e3.type}`]: e3.type, [`ym-input--${e3.size}`]: e3.size, "is-disabled": r(L), "is-prepend": e3.$slots.prepend, "is-append": e3.$slots.append, "is-prefix": e3.$slots.prefix, "is-suffix": e3.$slots.suffix, "is-focus": r(S) }]), onKeydown: a2[6] || (a2[6] = (a3) => e3.$emit("keydown", a3)) }, ["textarea" !== e3.type ? (u(), n(d, { key: 0 }, [e3.$slots.prepend ? (u(), n("div", R, [i(e3.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "ym-input__wrapper", ref_key: "wrapperRef", ref: Q }, [e3.$slots.prefix ? (u(), n("span", z, [i(e3.$slots, "prefix", {}, void 0, true)])) : c("", true), m(f("input", y({ class: "ym-input__inner", ref_key: "inputRef", ref: D, id: r(le), type: e3.showPassword ? G.value ? "text" : "password" : e3.type, disabled: r(L), readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[0] || (a2[0] = (e4) => H.value = e4) }, r(N), { onInput: ee, onChange: oe, onFocus: a2[1] || (a2[1] = (...e4) => r(W) && r(W)(...e4)), onBlur: a2[2] || (a2[2] = (...e4) => r(T) && r(T)(...e4)) }), null, 16, P), [[v, H.value]]), e3.$slots.suffix || O.value || X.value ? (u(), n("span", Y, [i(e3.$slots, "suffix", {}, void 0, true), O.value ? (u(), _(b, { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: Z, onMousedown: h(r(C), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), X.value && G.value ? (u(), _(b, { key: 1, icon: "eye", class: "ym-input__password", onClick: ae })) : c("", true), X.value && !G.value ? (u(), _(b, { key: 2, icon: "eye-slash", class: "ym-input__password", onClick: ae })) : c("", true)])) : c("", true)], 512), e3.$slots.append ? (u(), n("div", M, [i(e3.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : m((u(), n("textarea", y({ key: 1, class: "ym-textarea__wrapper", ref_key: "textareaRef", ref: E, id: r(le), disabled: r(L), readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[3] || (a2[3] = (e4) => H.value = e4) }, r(N), { onInput: ee, onChange: oe, onFocus: a2[4] || (a2[4] = (...e4) => r(W) && r(W)(...e4)), onBlur: a2[5] || (a2[5] = (...e4) => r(T) && r(T)(...e4)) }), null, 16, U)), [[w, H.value]])], 34));
} }), [["__scopeId", "data-v-ee17fb0d"]]), K = j(A);
export {
  A as Y,
  K as a
};
