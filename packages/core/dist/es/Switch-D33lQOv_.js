import { _ as e, w as a } from "./utils-BHtccd4_.js";
import { defineComponent as t, ref as i, computed as c, onMounted as s, watch as l, openBlock as n, createElementBlock as u, normalizeClass as o, unref as d, createElementVNode as m, withKeys as r, toDisplayString as v, createCommentVNode as p } from "vue";
import { a as h, u as _, b as y } from "./Form-DhWdq0m8.js";
const f = ["id", "name", "disabled", "checked"], w = { class: "ym-switch__core" }, b = { class: "ym-switch__core-inner" }, k = { key: 0, class: "ym-switch__core-inner-text" }, x = a(e(t({ name: "YmSwitch", inheritAttrs: false, __name: "Switch", props: { modelValue: { type: [Boolean, String, Number] }, disabled: { type: Boolean }, activeText: {}, inactiveText: {}, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: {}, id: {}, size: {} }, emits: ["update:modelValue", "change"], setup(e2, { expose: a2, emit: t2 }) {
  const x2 = e2, V = t2, g = h(), T = i(x2.modelValue), S = i(null), B = c(() => T.value === x2.activeValue), { formItem: z } = _(), { inputId: I } = y(x2, z), N = () => {
    if (g.value) return;
    const e3 = B.value ? x2.inactiveValue : x2.activeValue;
    T.value = e3, V("update:modelValue", e3), V("change", e3);
  };
  return s(() => {
    S.value.checked = B.value;
  }), l(B, (e3) => {
    S.value.checked = e3;
  }), a2({ focus: function() {
    var _a;
    (_a = S.value) == null ? void 0 : _a.focus();
  }, checked: B }), (e3, a3) => (n(), u("div", { class: o(["ym-switch", { [`ym-switch--${e3.size}`]: e3.size, "is-disabled": d(g), "is-checked": B.value }]), onClick: N }, [m("input", { class: "ym-switch__input", type: "checkbox", role: "switch", ref_key: "inputRef", ref: S, id: d(I), name: e3.name, disabled: d(g), checked: B.value, onKeydown: r(N, ["enter"]) }, null, 40, f), m("div", w, [m("div", b, [e3.activeText || e3.inactiveText ? (n(), u("span", k, v(B.value ? e3.activeText : e3.inactiveText), 1)) : p("", true)]), a3[0] || (a3[0] = m("div", { class: "ym-switch__core-action" }, null, -1))])], 2));
} }), [["__scopeId", "data-v-6062b175"]]));
export {
  x as Y
};
