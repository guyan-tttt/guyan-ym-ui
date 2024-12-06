import { defineComponent as e, reactive as a, toRefs as r, provide as t, openBlock as l, createElementBlock as s, renderSlot as o, useCssVars as i, useSlots as u, inject as d, ref as n, computed as v, onMounted as c, onUnmounted as p, normalizeClass as m, unref as f, createBlock as b, resolveDynamicComponent as h, withCtx as g, createTextVNode as y, toDisplayString as I, createCommentVNode as q, createElementVNode as F, nextTick as _, watch as k, toRef as x } from "vue";
import { a as j, c as w } from "./hooks-BLRbgP6P.js";
import { f as P, s as $, b as B, c as W, d as A, i as M, e as S, g as V, h as O, j as Y, k as C, l as R, p as E, q as z } from "./vendor-BmDHKAAA.js";
import D from "async-validator";
import { _ as G, w as H } from "./utils-B0xUaq8Y.js";
const J = Symbol("formContext"), K = Symbol("formItemContext"), L = { class: "ym-form" }, N = e({ name: "YmForm", __name: "Form", props: { model: {}, rules: {}, disabled: { type: Boolean }, labelWidth: { default: "auto" }, labelPosition: { default: "right" }, labelSuffix: { default: "" }, showMessage: { type: Boolean, default: true }, hideRequiredAsterisk: { type: Boolean, default: false }, requiredAsteriskPosition: { default: "right" } }, emits: ["validate"], setup(e2, { expose: i2, emit: u2 }) {
  const d2 = [], n2 = a({ addField: (e3) => {
    e3.prop && d2.push(e3);
  }, removeField: (e3) => {
    if (!e3.prop) return;
    const a2 = d2.indexOf(e3);
    -1 !== a2 && d2.splice(a2, 1);
  }, emits: u2, ...r(e2) });
  t(J, n2);
  const v2 = async (e3, a2) => {
    const r2 = c2(d2, e3 ?? []);
    try {
      const e4 = await (async (e5 = []) => {
        let a3 = {};
        for (const r3 of e5) try {
          await r3.validate("");
        } catch (e6) {
          a3 = { ...a3, ...e6 };
        }
        return !$(Object.keys(a3)) || Promise.reject(a3);
      })(r2);
      return true === e4 && (a2 == null ? void 0 : a2(e4)), e4;
    } catch (e4) {
      if (e4 instanceof Error) throw e4;
      return a2 == null ? void 0 : a2(false, e4), Promise.reject(e4);
    }
  }, c2 = (e3, a2) => $(a2) ? B(e3, (e4) => W(a2, e4.prop)) : e3;
  return i2({ validate: async (e3) => v2([], e3), validateField: v2, resetFields: (e3) => {
    P(c2(d2, e3 ?? []), (e4) => e4.resetField());
  }, clearValidate: (e3) => {
    P(c2(d2, e3 ?? []), (e4) => e4.clearValidate());
  } }), (e3, a2) => (l(), s("form", L, [o(e3.$slots, "default")]));
} }), Q = { class: "ym-form-item__content" }, T = { key: 0, class: "ym-form-item__error-msg" }, U = G(e({ name: "YmFormItem", __name: "FormItem", props: { prop: {}, label: {}, for: {}, labelWidth: {}, disabled: { type: Boolean }, required: { type: Boolean, default: void 0 }, showMessage: { type: Boolean, default: true }, error: {}, rules: {} }, setup(e2, { expose: k2 }) {
  i((e3) => ({ "476af77e": ve.value }));
  const x2 = e2, w2 = u(), P2 = d(J), G2 = n([]), H2 = v(() => (P2 == null ? void 0 : P2.disabled) || x2.disabled), L2 = (e3) => e3 && x2.prop && !M(O(e3, x2.prop)) ? O(e3, x2.prop) : null, N2 = v(() => {
    const e3 = P2 == null ? void 0 : P2.model;
    return L2(e3);
  });
  let U2 = null;
  const X2 = v(() => x2.prop ? A(x2.prop) ? x2.prop : x2.prop.join(".") : ""), Z2 = n("init"), ee2 = n(""), ae2 = v(() => {
    const { required: e3 } = x2, a2 = [];
    x2.rules && a2.push(...x2.rules);
    const r2 = P2 == null ? void 0 : P2.rules;
    if (r2 && x2.prop) {
      const e4 = L2(r2);
      e4 && a2.push(...e4);
    }
    if (!M(e3)) {
      const r3 = B(S(a2, (e4, a3) => [e4, a3]), (e4) => W(E(e4[0]), "required"));
      if ($(r3)) for (const t2 of r3) {
        const [r4, l2] = t2;
        r4.required !== e3 && (a2[l2] = { ...r4, required: e3 });
      }
      else a2.push({ required: e3 });
    }
    return a2;
  }), re2 = async (e3, a2) => {
    if (!te || !x2.prop || H2.value) return false;
    if (!Z2.value) return a2 == null ? void 0 : a2(false), false;
    const r2 = ((e4) => {
      const a3 = ae2.value;
      return a3 ? "" === e4 ? a3 : B(a3, (a4) => !a4.trigger || !e4 || (z(a4.trigger) ? W(a4.trigger, e4) : a4.trigger === e4)).map(({ trigger: e5, ...a4 }) => a4) : [];
    })(e3);
    return $(r2) ? (Z2.value = "validating", async function(e4) {
      const a3 = X2.value;
      return new D({ [a3]: e4 }).validate({ [a3]: N2.value }, { firstFields: true }).then(() => (Z2.value = "success", P2 == null ? void 0 : P2.emits("validate", x2, true, ""), true)).catch((e5) => {
        const { errors: a4 } = e5;
        return ee2.value = a4 && $(a4) > 0 ? a4[0].message ?? "" : "", Z2.value = "error", P2 == null ? void 0 : P2.emits("validate", x2, false, ee2.value), Promise.reject(e5);
      });
    }(r2).then(() => (a2 == null ? void 0 : a2(true), true)).catch((e4) => {
      const { fields: r3 } = e4;
      return a2 == null ? void 0 : a2(false, r3), Promise.reject(r3);
    })) : (a2 == null ? void 0 : a2(true), true);
  }, te = n(false), le = () => {
    const e3 = P2 == null ? void 0 : P2.model;
    e3 && X2.value && M(O(e3, X2.value)) && (te.value = true, e3[X2.value] = Y(U2)), _(() => {
      se();
    });
  }, se = () => {
    Z2.value = "init", ee2.value = "", te.value = false;
  }, oe = a({ ...r(x2), disabled: H2.value, validate: re2, resetField: le, clearValidate: se, addInputId: (e3) => {
    W(G2.value, e3) || G2.value.push(e3);
  }, removeInputId: (e3) => {
    const a2 = G2.value.indexOf(e3);
    a2 > -1 && G2.value.splice(a2, 1);
  } });
  c(() => {
    x2.prop && (P2 == null ? void 0 : P2.addField(oe), U2 = N2.value);
  }), p(() => {
    x2.prop && (P2 == null ? void 0 : P2.removeField(oe));
  }), t(K, oe), k2({ validate: re2, resetField: le, clearValidate: se, validateMessage: ee2, validateStatus: Z2 });
  const ie = v(() => !(!x2.label && !w2.label)), ue = v(() => x2.for || (G2.value.length ? G2 == null ? void 0 : G2.value[0] : "")), de = j(), ne = v(() => `${x2.label ?? ""}${(P2 == null ? void 0 : P2.labelSuffix) ?? ""}`), ve = v(() => {
    const e3 = (e4) => C(e4) ? `${e4}px` : R(e4, "px") ? e4 : `${e4}px`;
    return x2.labelWidth ? e3(x2.labelWidth) : (P2 == null ? void 0 : P2.labelWidth) ? e3(P2.labelWidth) : "150px";
  }), ce = v(() => !(P2 == null ? void 0 : P2.hideRequiredAsterisk) && V(ae2.value, "required") || x2.required);
  return (e3, a2) => {
    var _a, _b, _c, _d;
    return l(), s("div", { class: m(["ym-form-item", { "is-error": "error" === Z2.value, "is-disabled": H2.value, "is-required": ce.value, "asterisk-left": "left" === ((_a = f(P2)) == null ? void 0 : _a.requiredAsteriskPosition), "asterisk-right": "right" === ((_b = f(P2)) == null ? void 0 : _b.requiredAsteriskPosition) }]) }, [ie.value ? (l(), b(h(ue.value ? "label" : "div"), { key: 0, class: m(["ym-form-item__label", `position-${((_c = f(P2)) == null ? void 0 : _c.labelPosition) ?? "right"}`]), id: f(de), for: ue.value }, { default: g(() => [o(e3.$slots, "label", { label: ne.value }, () => [y(I(ne.value), 1)], true)]), _: 3 }, 8, ["class", "id", "for"])) : q("", true), F("div", Q, [o(e3.$slots, "default", { validate: re2 }, void 0, true), "error" === Z2.value ? (l(), s("div", T, [((_d = f(P2)) == null ? void 0 : _d.showMessage) && e3.showMessage ? o(e3.$slots, "error", { key: 0, error: ee2.value }, () => [y(I(ee2.value), 1)], true) : q("", true)])) : q("", true)])], 2);
  };
} }), [["__scopeId", "data-v-00d75393"]]);
function X() {
  return { form: d(J), formItem: d(K, void 0) };
}
function Z(e2) {
  const a2 = w("disabled"), r2 = d(J, void 0), t2 = d(K, void 0);
  return v(() => a2.value || f(e2) || (r2 == null ? void 0 : r2.disabled) || (t2 == null ? void 0 : t2.disabled) || false);
}
function ee(e2, a2) {
  const r2 = n("");
  let t2;
  return c(() => {
    t2 = k(x(() => e2.id), (e3) => {
      const t3 = e3 ?? j().value;
      t3 !== r2.value && (r2.value && (a2 == null ? void 0 : a2.removeInputId(r2.value)), a2 == null ? void 0 : a2.addInputId(t3), r2.value = t3);
    }, { immediate: true });
  }), p(() => {
    t2 == null ? void 0 : t2(), r2.value && (a2 == null ? void 0 : a2.removeInputId(r2.value));
  }), { inputId: r2 };
}
const ae = H(N), re = H(U);
export {
  ae as Y,
  Z as a,
  ee as b,
  re as c,
  X as u
};
