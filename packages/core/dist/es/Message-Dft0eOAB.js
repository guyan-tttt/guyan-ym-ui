import { defineComponent as e, ref as o, computed as t, onMounted as n, watch as s, openBlock as a, createBlock as l, Transition as c, withCtx as r, withDirectives as i, createElementVNode as u, normalizeClass as d, normalizeStyle as m, createVNode as f, renderSlot as p, unref as y, createCommentVNode as v, createElementBlock as g, withModifiers as b, vShow as x, shallowReactive as _, isVNode as B, h, render as C, reactive as k, nextTick as w, createTextVNode as I, toDisplayString as T, resolveDynamicComponent as M, withKeys as z } from "vue";
import { t as O, a as j, R as $, _ as A, b as L } from "./utils-BHtccd4_.js";
import { f as V, g as Y, e as E, a as P } from "./hooks-Wd-CNMjI.js";
import { Y as D } from "./Icon-BPqbRGFK.js";
import { x as R, d as N, f as K, y as S, i as Z, z as H, l as U, e as q, b as F, A as G, B as J, C as Q } from "./vendor-D1ZXl11B.js";
import { Y as W } from "./Overlay-CBq_9r27.js";
import { b as X } from "./Button-8RTsDjj3.js";
import { Y as ee } from "./Input-BJnk8Nav.js";
const oe = ["info", "success", "warning", "danger", "error"], te = { class: "ym-message__content" }, ne = { key: 0, class: "ym-message__close" }, se = A(e({ name: "YmMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: _2 }) {
  const B2 = e2, h2 = o(false), C2 = o(), k2 = o(0), { topOffset: w2, bottomOffset: I2 } = V({ boxHeight: k2, offset: B2.offset, getLastBottomOffset: R(ie, B2) }), T2 = t(() => O.get(B2.type) ?? "circle-info"), M2 = t(() => ({ top: j(w2.value), zIndex: B2.zIndex }));
  let z2;
  function A2() {
    0 !== B2.duration && (z2 = N(E2, B2.duration));
  }
  function L2() {
    clearTimeout(z2);
  }
  function E2() {
    h2.value = false;
  }
  return n(() => {
    h2.value = true, A2();
  }), s(h2, (e3) => {
    e3 || (k2.value = -B2.offset);
  }), Y(document, "keydown", (e3) => {
    const { code: o2 } = e3;
    "Escape" === o2 && E2();
  }), _2({ close: E2, bottomOffset: I2 }), (e3, o2) => (a(), l(c, { name: e3.transitionName, onEnter: o2[0] || (o2[0] = (e4) => k2.value = C2.value.getBoundingClientRect().height), onAfterLeave: o2[1] || (o2[1] = (o3) => !h2.value && e3.onDestory()) }, { default: r(() => [i(u("div", { ref_key: "messageRef", ref: C2, class: d(["ym-message", { [`ym-message--${e3.type}`]: e3.type, "is-close": e3.showClose, "text-center": e3.center }]), style: m(M2.value), role: "alert", onMouseenter: L2, onMouseleave: A2 }, [f(D, { class: "ym-message__icon", icon: T2.value }, null, 8, ["icon"]), u("div", te, [p(e3.$slots, "default", {}, () => [e3.message ? (a(), l(y($), { key: 0, vNode: e3.message }, null, 8, ["vNode"])) : v("", true)], true)]), e3.showClose ? (a(), g("div", ne, [f(D, { icon: "xmark", onClick: b(E2, ["stop"]) })])) : v("", true)], 38), [[x, h2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-b492bfae"]]), ae = _([]), { nextZIndex: le } = E(), ce = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up", showClose: true }, re = (e2) => {
  const o2 = !e2 || B(e2) || Z(e2) ? { message: e2 } : e2;
  return { ...ce, ...o2 };
};
function ie() {
  const e2 = H(ae, { id: this.id });
  return e2 <= 0 ? 0 : U(ae, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
const ue = (e2 = {}) => ((e3) => {
  const o2 = P().value, t2 = document.createElement("div"), n2 = { ...e3, id: o2, onDestory: () => {
    const e4 = H(ae, { id: o2 });
    -1 !== e4 && (ae.splice(e4, 1), C(null, t2));
  }, zIndex: le() }, s2 = h(se, n2);
  C(s2, t2), document.body.appendChild(t2.firstElementChild);
  const a2 = s2.component, l2 = { close: () => a2.exposed.close() }, c2 = { id: o2, props: n2, vm: a2, handler: l2, vnode: s2 };
  return ae.push(c2), c2;
})(re(e2)).handler;
K(oe, (e2) => {
  S(ue, e2, (o2) => {
    const t2 = re(o2);
    return t2.type = e2, ue({ ...t2 });
  });
}), ue.closeAll = function(e2) {
  K(ae, (o2) => {
    e2 ? o2.props.type === e2 && o2.handler.close() : o2.handler.close();
  });
};
const de = L(ue, "$YmMessage"), me = { class: "ym-message-box__title" }, fe = { class: "ym-message-box__content" }, pe = { key: 1, class: "ym-message-box__message" }, ye = { class: "ym-message-box__input" }, ve = { class: "ym-message-box__footer" }, ge = e({ name: "YmMessageBox", inheritAttrs: false, __name: "MesageBox", props: { visible: {}, doClose: {}, doAction: {}, destroy: {}, title: {}, message: {}, type: {}, boxType: { default: "" }, icon: {}, callback: {}, showClose: { type: Boolean, default: true }, showInput: { type: Boolean }, showCancelButton: { type: Boolean, default: true }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: "取消" }, confirmButtonText: { default: "确定" }, cancelButtonLoading: { type: Boolean }, confirmButtonLoading: { type: Boolean }, cancelButtonDisabled: { type: Boolean }, confirmButtonDisabled: { type: Boolean }, cancelButtonType: { default: "default" }, confirmButtonType: { default: "primary" }, roundButton: { type: Boolean, default: false }, center: { type: Boolean }, lockScroll: { type: Boolean, default: true }, closeOnClickModal: { type: Boolean, default: true }, inputPlaceholder: { default: "请输入内容" }, inputValue: { default: "" }, inputType: { default: "text" }, buttonSize: {}, beforeClose: {} }, setup(e2) {
  const n2 = e2, { doAction: m2 } = n2, { nextZIndex: _2 } = E(), B2 = k({ ...n2, zIndex: _2() }), h2 = t(() => !!B2.message), C2 = t(() => B2.icon ?? O.get(B2.type ?? ""));
  s(() => {
    var _a;
    return (_a = n2.visible) == null ? void 0 : _a.value;
  }, (e3) => {
    e3 && (B2.zIndex = _2()), "prompt" === n2.boxType && e3 && w(() => {
      var _a;
      $2.value && ((_a = $2.value) == null ? void 0 : _a.focus());
    });
  });
  const j2 = o(), $2 = o(), A2 = P();
  function L2(e3 = "confirm") {
    F(n2.beforeClose) ? n2.beforeClose(e3, B2, () => m2(e3, B2.inputValue)) : m2(e3, B2.inputValue);
  }
  function V2() {
    n2.closeOnClickModal && L2("cancel");
  }
  function Y2(e3) {
    if ("textarea" !== B2.inputType) return e3.preventDefault(), L2("confirm");
  }
  function R2() {
    L2("close");
  }
  return (e3, o2) => (a(), l(c, { name: "fade-in-linear", onAfterLeave: e3.destroy }, { default: r(() => [i(f(W, { "z-index": B2.zIndex, mask: "" }, { default: r(() => [u("div", { role: "dialog", class: "ym-overlay-message-box", onClick: V2 }, [u("div", { ref: "rootRef", class: d(["ym-message-box", { "is-center": B2.center }]), onClick: o2[5] || (o2[5] = b(() => {
  }, ["stop"])) }, [y(q)(B2.title) ? v("", true) : (a(), g("div", { key: 0, ref_key: "headerRef", ref: j2, class: d(["ym-message-box__header", { "show-close": B2.showClose }]) }, [u("div", me, [C2.value && B2.center ? (a(), l(D, { key: 0, class: d({ [`er-icon-${B2.type}`]: B2.type }), icon: C2.value }, null, 8, ["class", "icon"])) : v("", true), I(" " + T(B2.title), 1)]), e3.showClose ? (a(), g("button", { key: 0, class: "ym-message-box__header-btn", onClick: b(R2, ["stop"]) }, [f(D, { icon: "xmark" })])) : v("", true)], 2)), u("div", fe, [C2.value && !B2.center && h2.value ? (a(), l(D, { key: 0, class: d({ [`ym-icon-${B2.type}`]: B2.type }), icon: C2.value }, null, 8, ["class", "icon"])) : v("", true), h2.value ? (a(), g("div", pe, [p(e3.$slots, "default", {}, () => [(a(), l(M(B2.showInput ? "label" : "p"), { for: B2.showInput ? y(A2) : void 0 }, { default: r(() => [I(T(B2.message), 1)]), _: 1 }, 8, ["for"]))], true)])) : v("", true)]), i(u("div", ye, [f(ee, { modelValue: B2.inputValue, "onUpdate:modelValue": o2[0] || (o2[0] = (e4) => B2.inputValue = e4), ref_key: "inputRef", ref: $2, placeholder: B2.inputPlaceholder, type: B2.inputType, onKeyup: z(Y2, ["enter"]) }, null, 8, ["modelValue", "placeholder", "type"])], 512), [[x, B2.showInput]]), u("div", ve, [B2.showCancelButton ? (a(), l(X, { key: 0, class: "ym-message-box__footer-btn ym-message-box__cancel-btn", type: B2.cancelButtonType, round: B2.roundButton, loading: B2.cancelButtonLoading, onClick: o2[1] || (o2[1] = (e4) => L2("cancel")), onKeydown: o2[2] || (o2[2] = z(b((e4) => L2("cancel"), ["prevent"]), ["enter"])) }, { default: r(() => [I(T(B2.cancelButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"])) : v("", true), i(f(X, { class: "ym-message-box__footer-btn ym-message-box__confirm-btn", type: B2.confirmButtonType ?? "primary", round: B2.roundButton, loading: B2.confirmButtonLoading, onClick: o2[3] || (o2[3] = (e4) => L2("confirm")), onKeydown: o2[4] || (o2[4] = z(b((e4) => L2("confirm"), ["prevent"]), ["enter"])) }, { default: r(() => [I(T(B2.confirmButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"]), [[x, B2.showConfirmButton]])])], 2)])]), _: 3 }, 8, ["z-index"]), [[x, e3.visible.value]])]), _: 3 }, 8, ["onAfterLeave"]));
} }), be = A(ge, [["__scopeId", "data-v-d09c8a0d"]]), xe = /* @__PURE__ */ new Map();
function _e(e2) {
  let t2;
  return Z(e2) || B(e2) ? e2 = { message: e2 } : t2 = e2.callback, new Promise((n2, s2) => {
    const a2 = function(e3) {
      const t3 = document.createElement("div"), n3 = function(e4, t4) {
        const n4 = o(false), s4 = F(e4.message) || B(e4.message), a3 = f(be, { ...e4, visible: n4 }, s4 ? { default: (l2 = e4.message, F(l2) ? l2 : () => l2) } : void 0);
        var l2;
        return C(a3, t4), document.body.appendChild(t4.firstElementChild), a3.component;
      }({ ...e3, doClose: () => {
        s3.visible.value = false;
      }, doAction: (o2, t4) => {
        const n4 = xe.get(s3);
        let a3;
        if (w(() => s3.doClose()), a3 = e3.showInput ? { value: t4, action: o2 } : o2, !e3.callback) return "cancel" === o2 || "close" === o2 ? n4 == null ? void 0 : n4.reject(a3) : n4 == null ? void 0 : n4.resolve(a3);
        e3.callback(a3);
      }, destroy: () => {
        C(null, t3), xe.delete(s3);
      } }, t3), s3 = n3 == null ? void 0 : n3.proxy;
      return s3.visible.value = true, s3;
    }(e2);
    xe.set(a2, { options: e2, callback: t2, resolve: n2, reject: s2 });
  });
}
const Be = { alert: { closeOnClickModal: false, showCancelButton: false }, confirm: { closeOnClickModal: true }, prompt: { closeOnClickModal: true, showInput: true } };
K(["alert", "confirm", "prompt"], (e2) => {
  var o2;
  S(_e, e2, (o2 = e2, (e3, t2, n2) => {
    let s2 = "";
    return J(t2) ? (n2 = t2, s2 = "") : s2 = Q(t2) ? "" : t2, _e(G({ title: s2, message: e3, boxType: o2, ...Be[o2] }, n2));
  }));
}), S(_e, "close", () => {
  xe.forEach((e2, o2) => {
    o2.doClose();
  }), xe.clear();
});
const he = _e;
S(he, "install", (e2) => {
  e2.config.globalProperties.$YmMessageBox = _e, e2.config.globalProperties.$alert = _e.alert, e2.config.globalProperties.$confirm = _e.confirm, e2.config.globalProperties.$prompt = _e.prompt;
});
export {
  de as Y,
  he as a,
  oe as m
};
