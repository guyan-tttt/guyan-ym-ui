import { defineComponent as e, ref as s, computed as o, onMounted as t, watch as n, openBlock as a, createBlock as l, Transition as r, withCtx as c, withDirectives as d, createElementVNode as i, normalizeClass as f, normalizeStyle as u, createVNode as m, renderSlot as p, unref as v, createCommentVNode as y, createElementBlock as g, withModifiers as h, vShow as x, shallowReactive as _, isVNode as C, h as I, render as k } from "vue";
import { t as b, a as w, R as M, _ as N, b as O } from "./utils-BRb2rlgQ.js";
import { d as j, e as z, f as B, a as E } from "./hooks-jOANP4Y2.js";
import { I as D } from "./Icon-BGmI14c6.js";
import { c as R, d as Y, f as $, s as A, e as L, g as H, h as T } from "./vendor-Dfj-y_bx.js";
const Z = ["info", "success", "warning", "danger", "error"], q = { class: "ym-message__content" }, F = { key: 0, class: "ym-message__close" }, G = N(e({ name: "YmMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: _2 }) {
  const C2 = e2, I2 = s(false), k2 = s(), N2 = s(0), { topOffset: O2, bottomOffset: B2 } = j({ boxHeight: N2, offset: C2.offset, getLastBottomOffset: R(S, C2) }), E2 = o(() => b.get(C2.type) ?? "circle-info"), $2 = o(() => ({ top: w(O2.value), zIndex: C2.zIndex }));
  let A2;
  function L2() {
    0 !== C2.duration && (A2 = Y(T2, C2.duration));
  }
  function H2() {
    clearTimeout(A2);
  }
  function T2() {
    I2.value = false;
  }
  return t(() => {
    I2.value = true, L2();
  }), n(I2, (e3) => {
    e3 || (N2.value = -C2.offset);
  }), z(document, "keydown", (e3) => {
    const { code: s2 } = e3;
    "Escape" === s2 && T2();
  }), _2({ close: T2, bottomOffset: B2 }), (e3, s2) => (a(), l(r, { name: e3.transitionName, onEnter: s2[0] || (s2[0] = (e4) => N2.value = k2.value.getBoundingClientRect().height), onAfterLeave: s2[1] || (s2[1] = (s3) => !I2.value && e3.onDestory()) }, { default: c(() => [d(i("div", { ref_key: "messageRef", ref: k2, class: f(["ym-message", { [`ym-message--${e3.type}`]: e3.type, "is-close": e3.showClose, "text-center": e3.center }]), style: u($2.value), role: "alert", onMouseenter: H2, onMouseleave: L2 }, [m(D, { class: "ym-message__icon", icon: E2.value }, null, 8, ["icon"]), i("div", q, [p(e3.$slots, "default", {}, () => [e3.message ? (a(), l(v(M), { key: 0, vNode: e3.message }, null, 8, ["vNode"])) : y("", true)], true)]), e3.showClose ? (a(), g("div", F, [m(D, { icon: "xmark", onClick: h(T2, ["stop"]) })])) : y("", true)], 38), [[x, I2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-41a36d94"]]), J = _([]), { nextZIndex: K } = B(), P = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up", showClose: true }, Q = (e2) => {
  const s2 = !e2 || C(e2) || L(e2) ? { message: e2 } : e2;
  return { ...P, ...s2 };
};
function S() {
  const e2 = H(J, { id: this.id });
  return e2 <= 0 ? 0 : T(J, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
const U = (e2 = {}) => ((e3) => {
  const s2 = E().value, o2 = document.createElement("div"), t2 = { ...e3, id: s2, onDestory: () => {
    const e4 = H(J, { id: s2 });
    -1 !== e4 && (J.splice(e4, 1), k(null, o2));
  }, zIndex: K() }, n2 = I(G, t2);
  k(n2, o2), document.body.appendChild(o2.firstElementChild);
  const a2 = n2.component, l2 = { close: () => a2.exposed.close() }, r2 = { id: s2, props: t2, vm: a2, handler: l2, vnode: n2 };
  return J.push(r2), r2;
})(Q(e2)).handler;
$(Z, (e2) => {
  A(U, e2, (s2) => {
    const o2 = Q(s2);
    return o2.type = e2, U({ ...o2 });
  });
}), U.closeAll = function(e2) {
  $(J, (s2) => {
    e2 ? s2.props.type === e2 && s2.handler.close() : s2.handler.close();
  });
};
const V = O(U, "$YmMessage");
export {
  V as Y,
  Z as m
};
