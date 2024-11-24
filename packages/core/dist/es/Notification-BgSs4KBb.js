import { defineComponent as e, ref as o, computed as t, onMounted as n, openBlock as s, createBlock as i, Transition as a, withCtx as l, withDirectives as c, createElementVNode as f, normalizeClass as r, normalizeStyle as d, createCommentVNode as u, toDisplayString as m, renderSlot as p, unref as v, createElementBlock as y, createVNode as h, withModifiers as g, vShow as _, shallowReactive as x, isVNode as C, h as k, render as b } from "vue";
import { c as N, e as I, a as w } from "./hooks-CJ5-z7fg.js";
import { t as O, R as j, _ as z, b as Y } from "./utils-qFOQpxdb.js";
import { Y as $ } from "./Icon-D6pQb2E-.js";
import { b as B, c as D, d as E, f as R, s as A, e as L, g as M } from "./vendor-0IoZ3Zfz.js";
const H = ["info", "success", "warning", "danger"], T = ["top-right", "top-left", "bottom-right", "bottom-left"], Z = { class: "ym-notification__text" }, q = { class: "ym-notification__title" }, F = { class: "ym-notification__content" }, G = { key: 1, class: "ym-notification__close" }, J = z(e({ name: "YmNotification", __name: "Notification", props: { title: {}, id: {}, zIndex: {}, position: { default: "top-right" }, type: { default: "info" }, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, offset: { default: 20 }, transitionName: { default: "fade" }, icon: {}, onClick: {}, onClose: {}, onDestory: {} }, setup(e2, { expose: x2 }) {
  const C2 = e2, k2 = o(false), b2 = o(), I2 = o(0), { topOffset: w2, bottomOffset: z2 } = N({ getLastBottomOffset: B(S, C2), offset: C2.offset, boxHeight: I2 }), Y2 = t(() => D(C2.icon) ? C2.icon : O.get(C2.type)), R2 = t(() => ({ top: w2.value + "px", zIndex: C2.zIndex }));
  let A2;
  function L2() {
    0 !== C2.duration && (A2 = E(H2, C2.duration));
  }
  function M2() {
    clearTimeout(A2);
  }
  function H2() {
    var _a;
    k2.value = false, (_a = C2 == null ? void 0 : C2.onClose) == null ? void 0 : _a.call(C2);
  }
  return n(() => {
    k2.value = true, L2();
  }), x2({ close: H2, bottomOffset: z2 }), (e3, o2) => (s(), i(a, { name: `ym-notification-${e3.transitionName}`, onAfterLeave: o2[1] || (o2[1] = (o3) => !k2.value && e3.onDestory()), onEnter: o2[2] || (o2[2] = (e4) => I2.value = b2.value.getBoundingClientRect().height) }, { default: l(() => [c(f("div", { ref_key: "notifyRef", ref: b2, class: r(["ym-notification right", { [`ym-notification--${e3.type}`]: e3.type, "show-close": e3.showClose }]), style: d(R2.value), role: "alert", onClick: o2[0] || (o2[0] = (...o3) => e3.onClick && e3.onClick(...o3)), onMouseenter: M2, onMouseleave: L2 }, [Y2.value ? (s(), i($, { key: 0, icon: Y2.value, class: "ym-notification__icon" }, null, 8, ["icon"])) : u("", true), f("div", Z, [f("div", q, m(e3.title), 1), f("div", F, [p(e3.$slots, "default", {}, () => [e3.message ? (s(), i(v(j), { key: 0, vNode: e3.message }, null, 8, ["vNode"])) : u("", true)], true)])]), e3.showClose ? (s(), y("div", G, [h($, { icon: "xmark", onClick: g(H2, ["stop"]) })])) : u("", true)], 38), [[_, k2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-c1f13667"]]), K = x([]), { nextZIndex: P } = I(), Q = { type: "info", duration: 3e3, offset: 20, transitionName: "fade", showClose: true };
function S() {
  const e2 = L(K, { id: this.id });
  return e2 <= 0 ? 0 : M(K, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
const U = (e2) => {
  const o2 = !e2 || C(e2) || D(e2) ? { message: e2 } : e2;
  return { ...Q, ...o2 };
}, V = (e2 = {}) => ((e3) => {
  const o2 = w().value, t2 = document.createElement("div"), n2 = { ...e3, id: o2, onDestory: () => {
    const e4 = L(K, { id: o2 });
    -1 !== e4 && (K.splice(e4, 1), b(null, t2));
  }, zIndex: P() }, s2 = k(J, n2);
  b(s2, t2), document.body.appendChild(t2.firstElementChild);
  const i2 = s2.component, a2 = { close: () => i2.exposed.close() }, l2 = { id: o2, props: n2, vm: i2, handler: a2, vnode: s2 };
  return K.push(l2), l2;
})(U(e2)).handler;
R(H, (e2) => {
  A(V, e2, (o2) => {
    const t2 = U(o2);
    return t2.type = e2, V({ ...t2 });
  });
}), V.closeAll = function(e2) {
  R(K, (o2) => {
    e2 ? o2.props.type === e2 && o2.handler.close() : o2.handler.close();
  });
};
const W = Y(V, "$YmNotification");
export {
  W as Y,
  T as a,
  H as n
};
