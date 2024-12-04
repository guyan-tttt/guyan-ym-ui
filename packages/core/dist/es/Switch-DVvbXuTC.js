import { _ as e, w as a } from "./utils-CN-UVqEO.js";
import { defineComponent as t, computed as i, ref as c, onMounted as l, watch as s, openBlock as n, createElementBlock as u, normalizeClass as o, createElementVNode as d, unref as r, withKeys as v, toDisplayString as m, createCommentVNode as h } from "vue";
import { a as p } from "./hooks-CB8aTc5l.js";
const _ = ["id", "name", "disabled", "checked"], y = { class: "ym-switch__core" }, f = { class: "ym-switch__core-inner" }, w = { key: 0, class: "ym-switch__core-inner-text" }, k = a(e(t({ name: "YmSwitch", inheritAttrs: false, __name: "Switch", props: { modelValue: { type: [Boolean, String, Number] }, disabled: { type: Boolean }, activeText: {}, inactiveText: {}, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: {}, id: {}, size: {} }, emits: ["update:modelValue", "change"], setup(e2, { expose: a2, emit: t2 }) {
  const k2 = e2, x = t2, b = i(() => k2.disabled), V = c(k2.modelValue), T = c(null), g = i(() => V.value === k2.activeValue), S = p(), B = () => {
    if (b.value) return;
    const e3 = g.value ? k2.inactiveValue : k2.activeValue;
    V.value = e3, x("update:modelValue", e3), x("change", e3);
  };
  return l(() => {
    T.value.checked = g.value;
  }), s(g, (e3) => {
    T.value.checked = e3;
  }), a2({ focus: function() {
    var _a;
    (_a = T.value) == null ? void 0 : _a.focus();
  }, checked: g }), (e3, a3) => (n(), u("div", { class: o(["ym-switch", { [`ym-switch--${e3.size}`]: e3.size, "is-disabled": b.value, "is-checked": g.value }]), onClick: B }, [d("input", { class: "ym-switch__input", type: "checkbox", role: "switch", ref_key: "inputRef", ref: T, id: r(S), name: e3.name, disabled: b.value, checked: g.value, onKeydown: v(B, ["enter"]) }, null, 40, _), d("div", y, [d("div", f, [e3.activeText || e3.inactiveText ? (n(), u("span", w, m(g.value ? e3.activeText : e3.inactiveText), 1)) : h("", true)]), a3[0] || (a3[0] = d("div", { class: "ym-switch__core-action" }, null, -1))])], 2));
} }), [["__scopeId", "data-v-f9ee3098"]]));
export {
  k as Y
};
