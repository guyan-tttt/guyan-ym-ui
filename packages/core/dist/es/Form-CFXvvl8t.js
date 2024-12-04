import { defineComponent as e, reactive as r, toRefs as t, provide as a, openBlock as s, createElementBlock as l, renderSlot as o, useSlots as i, inject as u, ref as d, computed as n, onMounted as m, onUnmounted as c, normalizeClass as p, unref as v, createBlock as f, resolveDynamicComponent as h, withCtx as g, createTextVNode as y, toDisplayString as b, createCommentVNode as q, createElementVNode as F, nextTick as k } from "vue";
import { f as j, s as _, b as w, c as P, d as x, i as I, e as $, g as B, h as A, j as M, k as S, l as V } from "./vendor-Bde6p_Xx.js";
import C from "async-validator";
import { a as O } from "./hooks-CB8aTc5l.js";
import { w as R } from "./utils-CN-UVqEO.js";
const W = Symbol("formContext"), Y = Symbol("formItemContext"), E = { class: "ym-form" }, z = e({ name: "YmForm", __name: "Form", props: { model: {}, rules: {}, disabled: { type: Boolean }, labelWidth: { default: "auto" }, labelPosition: { default: "right" }, labelSuffix: { default: "" }, showMessage: { type: Boolean, default: true }, hideRequiredAsterisk: { type: Boolean, default: false }, requiredAsteriskPosition: { default: "right" } }, emits: ["validate"], setup(e2, { expose: i2, emit: u2 }) {
  const d2 = [], n2 = r({ addField: (e3) => {
    e3.prop && d2.push(e3);
  }, removeField: (e3) => {
    if (!e3.prop) return;
    const r2 = d2.indexOf(e3);
    -1 !== r2 && d2.splice(r2, 1);
  }, emits: u2, ...t(e2) });
  a(W, n2);
  const m2 = async (e3, r2) => {
    const t2 = c2(d2, e3 ?? []);
    try {
      const e4 = await (async (e5 = []) => {
        let r3 = {};
        for (const t3 of e5) try {
          await t3.validate("");
        } catch (e6) {
          r3 = { ...r3, ...e6 };
        }
        return !_(Object.keys(r3)) || Promise.reject(r3);
      })(t2);
      return true === e4 && (r2 == null ? void 0 : r2(e4)), e4;
    } catch (e4) {
      if (e4 instanceof Error) throw e4;
      return r2 == null ? void 0 : r2(false, e4), Promise.reject(e4);
    }
  }, c2 = (e3, r2) => _(r2) ? w(e3, (e4) => P(r2, e4.prop)) : e3;
  return i2({ validate: async (e3) => m2([], e3), validateField: m2, resetFields: (e3) => {
    j(c2(d2, e3 ?? []), (e4) => e4.resetField());
  }, clearValidate: (e3) => {
    j(c2(d2, e3 ?? []), (e4) => e4.clearValidate());
  } }), (e3, r2) => (s(), l("form", E, [o(e3.$slots, "default")]));
} }), D = { class: "ym-form-item__content" }, G = { key: 0, class: "ym-form-item_error-msg" }, H = e({ name: "YmFormItem", __name: "FormItem", props: { prop: {}, label: {}, for: {}, labelWidth: {}, disabled: { type: Boolean }, required: { type: Boolean, default: void 0 }, showMessage: { type: Boolean, default: true }, error: {}, rules: {} }, setup(e2, { expose: j2 }) {
  const R2 = e2, E2 = i(), z2 = u(W), H2 = d([]), J2 = n(() => (z2 == null ? void 0 : z2.disabled) || R2.disabled), K = (e3) => e3 && R2.prop && !I(A(e3, R2.prop)) ? A(e3, R2.prop) : null, L = n(() => {
    const e3 = z2 == null ? void 0 : z2.model;
    return K(e3);
  });
  let N = null;
  const Q = n(() => R2.prop ? x(R2.prop) ? R2.prop : R2.prop.join(".") : ""), T = d("init"), U = d(""), X = n(() => {
    const { required: e3 } = R2, r2 = [];
    R2.rules && r2.push(...R2.rules);
    const t2 = z2 == null ? void 0 : z2.rules;
    if (t2 && R2.prop) {
      const e4 = K(t2);
      e4 && r2.push(...e4);
    }
    if (!I(e3)) {
      const t3 = w($(r2, (e4, r3) => [e4, r3]), (e4) => P(S(e4[0]), "required"));
      if (_(t3)) for (const a2 of t3) {
        const [t4, s2] = a2;
        t4.required !== e3 && (r2[s2] = { ...t4, required: e3 });
      }
      else r2.push({ required: e3 });
    }
    return r2;
  }), Z = async (e3, r2) => {
    if (!ee || !R2.prop || J2.value) return false;
    if (!T.value) return r2 == null ? void 0 : r2(false), false;
    const t2 = ((e4) => {
      const r3 = X.value;
      return r3 ? w(r3, (r4) => !(r4.trigger && !e4) || (V(r4.trigger) ? P(r4.trigger, e4) : r4.trigger === e4)).map(({ trigger: e5, ...r4 }) => r4) : [];
    })(e3);
    return _(t2) ? (T.value = "validating", async function(e4) {
      const r3 = Q.value;
      return new C({ [r3]: e4 }).validate({ [r3]: L.value }, { firstFields: true }).then(() => (T.value = "success", z2 == null ? void 0 : z2.emits("validate", R2, true, ""), true)).catch((e5) => {
        const { errors: r4 } = e5;
        return U.value = r4 && _(r4) > 0 ? r4[0].message ?? "" : "", T.value = "error", z2 == null ? void 0 : z2.emits("validate", R2, false, U.value), Promise.reject(e5);
      });
    }(t2).then(() => (r2 == null ? void 0 : r2(true), true)).catch((e4) => {
      const { fields: t3 } = e4;
      return r2 == null ? void 0 : r2(false, t3), Promise.reject(t3);
    })) : (r2 == null ? void 0 : r2(true), true);
  }, ee = d(false), re = () => {
    const e3 = z2 == null ? void 0 : z2.model;
    e3 && Q.value && I(A(e3, Q.value)) && (ee.value = true, e3[Q.value] = M(N)), k(() => {
      te();
    });
  }, te = () => {
    T.value = "init", U.value = "", ee.value = false;
  }, ae = r({ ...t(R2), disabled: J2.value, validate: Z, resetField: re, clearValidate: te, addInputId: () => {
  }, removeInputId: () => {
  } });
  m(() => {
    R2.prop && (z2 == null ? void 0 : z2.addField(ae), N = L.value);
  }), c(() => {
    R2.prop && (z2 == null ? void 0 : z2.removeField(ae));
  }), a(Y, ae), j2({ validate: Z, resetField: re, clearValidate: te, validateMessage: U, validateStatus: T });
  const se = n(() => !(!R2.label && !E2.label)), le = n(() => R2.for || (H2.value.length ? H2 == null ? void 0 : H2.value[0] : "")), oe = O(), ie = n(() => `${R2.label ?? ""}${(z2 == null ? void 0 : z2.labelSuffix) ?? ""}`), ue = n(() => !(z2 == null ? void 0 : z2.hideRequiredAsterisk) && B(X.value, "required") || R2.required);
  return (e3, r2) => {
    var _a, _b, _c, _d;
    return s(), l("div", { class: p(["ym-form-item", { "is-error": "error" === T.value, "is-disabled": J2.value, "is-required": ue.value, "asterisk-left": "left" === ((_a = v(z2)) == null ? void 0 : _a.requiredAsteriskPosition), "asterisk-right": "right" === ((_b = v(z2)) == null ? void 0 : _b.requiredAsteriskPosition) }]) }, [se.value ? (s(), f(h(le.value ? "label" : "div"), { key: 0, class: p(["ym-form-item__label", `position-${((_c = v(z2)) == null ? void 0 : _c.labelPosition) ?? "right"}`]), id: v(oe), for: le.value }, { default: g(() => [o(e3.$slots, "label", { label: ie.value }, () => [y(b(ie.value), 1)])]), _: 3 }, 8, ["class", "id", "for"])) : q("", true), F("div", D, [o(e3.$slots, "default", { validate: Z }), "error" === T.value ? (s(), l("div", G, [((_d = v(z2)) == null ? void 0 : _d.showMessage) && e3.showMessage ? o(e3.$slots, "error", { key: 0, error: U.value }, () => [y(b(U.value), 1)]) : q("", true)])) : q("", true)])], 2);
  };
} });
function J() {
  return { form: u(W), formItem: u(Y, void 0) };
}
R(z), R(H);
export {
  J as u
};
