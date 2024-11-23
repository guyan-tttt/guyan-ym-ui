import { defineComponent as e, ref as s, computed as o, onMounted as t, watch as a, openBlock as n, createBlock as l, Transition as r, withCtx as c, withDirectives as i, createElementVNode as d, normalizeClass as u, normalizeStyle as f, createVNode as m, renderSlot as p, unref as v, createCommentVNode as y, createElementBlock as g, withModifiers as h, vShow as _, shallowReactive as x, isVNode as b, h as C, render as k } from "vue";
import { t as w, a as I, R as M, _ as N, b as O } from "./utils-qFOQpxdb.js";
import { c as j, d as B, e as E, a as Y } from "./hooks-CJ5-z7fg.js";
import { Y as D } from "./Icon-D6pQb2E-.js";
import { b as R, d as $, f as z, s as A, c as L, e as H, g as T } from "./vendor-0IoZ3Zfz.js";
const Z = ["info", "success", "warning", "danger", "error"], q = { class: "ym-message__content" }, F = { key: 0, class: "ym-message__close" }, G = N(e({ name: "YmMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: x2 }) {
  const b2 = e2, C2 = s(false), k2 = s(), N2 = s(0), { topOffset: O2, bottomOffset: E2 } = j({ boxHeight: N2, offset: b2.offset, getLastBottomOffset: R(S, b2) }), Y2 = o(() => w.get(b2.type) ?? "circle-info"), z2 = o(() => ({ top: I(O2.value) }));
  let A2;
  function L2() {
    0 !== b2.duration && (A2 = $(T2, b2.duration));
  }
  function H2() {
    clearTimeout(A2);
  }
  function T2() {
    C2.value = false;
  }
  return t(() => {
    C2.value = true, L2();
  }), a(C2, (e3) => {
    e3 || (N2.value = -b2.offset);
  }), B(document, "keydown", (e3) => {
    const { code: s2 } = e3;
    "Escape" === s2 && T2();
  }), x2({ close: T2, bottomOffset: E2 }), (e3, s2) => (n(), l(r, { name: e3.transitionName, onEnter: s2[0] || (s2[0] = (e4) => N2.value = k2.value.getBoundingClientRect().height), onAfterLeave: s2[1] || (s2[1] = (s3) => !C2.value && e3.onDestory()) }, { default: c(() => [i(d("div", { ref_key: "messageRef", ref: k2, class: u(["ym-message", { [`ym-message--${e3.type}`]: e3.type, "is-close": e3.showClose, "text-center": e3.center }]), style: f(z2.value), role: "alert", onMouseenter: H2, onMouseleave: L2 }, [m(D, { class: "ym-message__icon", icon: Y2.value }, null, 8, ["icon"]), d("div", q, [p(e3.$slots, "default", {}, () => [e3.message ? (n(), l(v(M), { key: 0, vNode: e3.message }, null, 8, ["vNode"])) : y("", true)], true)]), e3.showClose ? (n(), g("div", F, [m(D, { icon: "xmark", onClick: h(T2, ["stop"]) })])) : y("", true)], 38), [[_, C2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-c722ba93"]]), J = x([]), { nextZIndex: K } = E(), P = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up", showClose: true }, Q = (e2) => {
  const s2 = !e2 || b(e2) || L(e2) ? { message: e2 } : e2;
  return { ...P, ...s2 };
};
function S() {
  const e2 = H(J, { id: this.id });
  return e2 <= 0 ? 0 : T(J, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
const U = (e2 = {}) => ((e3) => {
  const s2 = Y().value, o2 = document.createElement("div"), t2 = { ...e3, id: s2, onDestory: () => {
    const e4 = H(J, { id: s2 });
    -1 !== e4 && (J.splice(e4, 1), k(null, o2));
  }, zIndex: K() }, a2 = C(G, t2);
  k(a2, o2), document.body.appendChild(o2.firstElementChild);
  const n2 = a2.component, l2 = { close: () => n2.exposed.close() }, r2 = { id: s2, props: t2, vm: n2, handler: l2, vnode: a2 };
  return J.push(r2), r2;
})(Q(e2)).handler;
z(Z, (e2) => {
  A(U, e2, (s2) => {
    const o2 = Q(s2);
    return o2.type = e2, U({ ...o2 });
  });
}), U.closeAll = function(e2) {
  z(J, (s2) => {
    e2 ? s2.props.type === e2 && s2.handler.close() : s2.handler.close();
  });
};
const V = O(U, "$YmMessage");
export {
  V as Y,
  Z as m
};
