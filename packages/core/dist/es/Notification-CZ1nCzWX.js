import { defineComponent as t, ref as o, computed as e, onMounted as n, openBlock as s, createBlock as i, Transition as a, withCtx as l, withDirectives as c, createElementVNode as f, normalizeClass as r, normalizeStyle as d, createCommentVNode as u, toDisplayString as m, renderSlot as p, unref as v, createElementBlock as h, createVNode as y, withModifiers as g, vShow as _, shallowReactive as x, isVNode as C, h as k, render as b } from "vue";
import { d as I, f as N, a as w } from "./hooks-jOANP4Y2.js";
import { t as O, R as j, _ as z, b as E } from "./utils-BRb2rlgQ.js";
import { I as $ } from "./Icon-BGmI14c6.js";
import { c as B, e as D, d as M, f as R, s as Y, g as A, h as L } from "./vendor-Dfj-y_bx.js";
const W = ["info", "success", "warning", "danger"], H = ["top-right", "top-left", "bottom-right", "bottom-left"], T = { class: "ym-notification__text" }, Z = { class: "ym-notification__title" }, q = { class: "ym-notification__content" }, F = { key: 1, class: "ym-notification__close" }, G = z(t({ name: "YmNotification", __name: "Notification", props: { title: {}, id: {}, zIndex: {}, position: { default: "top-right" }, type: { default: "info" }, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, offset: { default: 20 }, transitionName: { default: "fade" }, icon: {}, onClick: {}, onClose: {}, onDestory: {} }, setup(t2, { expose: x2 }) {
  const C2 = t2, k2 = o(false), b2 = o(), N2 = o(0), { topOffset: w2, bottomOffset: z2 } = I({ getLastBottomOffset: B(Q, C2), offset: C2.offset, boxHeight: N2 }), E2 = e(() => D(C2.icon) ? C2.icon : O.get(C2.type)), R2 = e(() => C2.position.endsWith("right") ? "right" : "left"), Y2 = e(() => C2.position.startsWith("top") ? "top" : "bottom"), A2 = e(() => ({ [Y2.value]: w2.value + "px", zIndex: C2.zIndex }));
  let L2;
  function W2() {
    0 !== C2.duration && (L2 = M(G2, C2.duration));
  }
  function H2() {
    clearTimeout(L2);
  }
  function G2() {
    var _a;
    k2.value = false, (_a = C2 == null ? void 0 : C2.onClose) == null ? void 0 : _a.call(C2);
  }
  return n(() => {
    k2.value = true, W2();
  }), x2({ close: G2, bottomOffset: z2 }), (t3, o2) => (s(), i(a, { name: `ym-notification-${t3.transitionName}`, onAfterLeave: o2[1] || (o2[1] = (o3) => !k2.value && t3.onDestory()), onEnter: o2[2] || (o2[2] = (t4) => N2.value = b2.value.getBoundingClientRect().height) }, { default: l(() => [c(f("div", { ref_key: "notifyRef", ref: b2, class: r(["ym-notification", { [`ym-notification--${t3.type}`]: t3.type, "show-close": t3.showClose, [R2.value]: true }]), style: d(A2.value), role: "alert", onClick: o2[0] || (o2[0] = (...o3) => t3.onClick && t3.onClick(...o3)), onMouseenter: H2, onMouseleave: W2 }, [E2.value ? (s(), i($, { key: 0, icon: E2.value, class: "ym-notification__icon" }, null, 8, ["icon"])) : u("", true), f("div", T, [f("div", Z, m(t3.title), 1), f("div", q, [p(t3.$slots, "default", {}, () => [t3.message ? (s(), i(v(j), { key: 0, vNode: t3.message }, null, 8, ["vNode"])) : u("", true)], true)])]), t3.showClose ? (s(), h("div", F, [y($, { icon: "xmark", onClick: g(G2, ["stop"]) })])) : u("", true)], 38), [[_, k2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-c82f6f22"]]), J = /* @__PURE__ */ new Map();
R(H, (t2) => {
  J.set(t2, x([]));
});
const { nextZIndex: K } = N(), P = { type: "info", duration: 3e3, offset: 20, transitionName: "fade", showClose: true };
function Q() {
  const t2 = U(this.position || "top-right"), o2 = A(t2, { id: this.id });
  return o2 <= 0 ? 0 : L(t2, [o2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
const S = (t2) => {
  const o2 = !t2 || C(t2) || D(t2) ? { message: t2 } : t2;
  return { ...P, ...o2 };
}, U = (t2) => J.get(t2), V = (t2 = {}) => ((t3) => {
  const o2 = w().value, e2 = document.createElement("div"), n2 = U(t3.position || "top-right"), s2 = { ...t3, id: o2, onDestory: () => {
    const t4 = A(n2, { id: o2 });
    -1 !== t4 && (n2.splice(t4, 1), b(null, e2));
  }, zIndex: K() }, i2 = k(G, s2);
  b(i2, e2), document.body.appendChild(e2.firstElementChild);
  const a2 = i2.component, l2 = { close: () => a2.exposed.close() }, c2 = { id: o2, props: s2, vm: a2, handler: l2, vnode: i2 };
  return n2.push(c2), c2;
})(S(t2)).handler;
R(W, (t2) => {
  Y(V, t2, (o2) => {
    const e2 = S(o2);
    return e2.type = t2, V({ ...e2 });
  });
}), V.closeAll = function(t2) {
  J.forEach((o2) => {
    R(o2, (o3) => {
      t2 ? o3.props.type === t2 && o3.handler.close() : o3.handler.close();
    });
  });
};
const X = E(V, "$YmNotification");
export {
  X as Y,
  H as a,
  W as n
};
