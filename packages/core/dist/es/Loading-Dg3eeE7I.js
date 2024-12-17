import { defineComponent as e, useCssVars as n, computed as t, openBlock as o, createBlock as i, Transition as l, withCtx as r, withDirectives as s, createElementVNode as c, normalizeClass as d, createCommentVNode as u, createElementBlock as a, toDisplayString as m, vShow as b, nextTick as f, ref as v, reactive as p, createApp as y } from "vue";
import { e as g } from "./hooks-CF80WHXu.js";
import { Y as k } from "./Icon-BN1S7njp.js";
import { i as x, c as L, u as A, v as $ } from "./vendor-BXKGMoVT.js";
const _ = { class: "ym-loading__spinner" }, h = { key: 1, class: "ym-loading-text" }, I = e({ name: "YmLoading", inheritAttrs: false, __name: "Loading", props: { visible: {}, background: {}, spinner: {}, text: {}, fullscreen: {}, lock: {}, beforeClose: { type: Function }, closed: { type: Function }, target: {}, body: { type: Boolean }, zIndex: {}, onAfterLeave: { type: Function } }, setup(e2) {
  n((e3) => ({ "0062c62c": e3.background, "328efa34": e3.zIndex }));
  const f2 = e2, v2 = t(() => x(f2.spinner) ? f2.spinner : "spinner");
  return (e3, n2) => (o(), i(l, { name: "fade-in-linear", onAfterLeave: e3.onAfterLeave }, { default: r(() => [s(c("div", { class: d(["ym-loading ym-loading__mask", { "is-fullscreen": e3.fullscreen }]) }, [c("div", _, [false !== f2.spinner ? (o(), i(k, { key: 0, icon: v2.value, spin: "" }, null, 8, ["icon"])) : u("", true), e3.text ? (o(), a("p", h, m(e3.text), 1)) : u("", true)])], 2), [[b, f2.visible.value]])]), _: 1 }, 8, ["onAfterLeave"]));
} }), C = "ym-loading-number", Y = "ym-loading-parent--relative", j = "ym-loading-parent--hiden", z = /* @__PURE__ */ new Map(), { nextZIndex: F } = g(3e3);
let N = null;
function S(e2 = {}) {
  var _a;
  const n2 = function(e3) {
    let n3;
    return n3 = x(e3.target) ? document.querySelector(e3.target) ?? document.body : e3.target ?? document.body, { parent: n3 === document.body || e3.body ? document.body : n3, background: e3.background ?? "rgba(0, 0, 0, 0.7)", spinner: e3.spinner, text: e3.text, fullscreen: n3 === document.body && (e3.fullscreen ?? true), lock: e3.lock ?? false, visible: e3.visible ?? true, target: n3 };
  }(e2), t2 = n2.parent ?? document.body;
  if (n2.fullscreen && !L(N)) return N;
  if (function(e3 = document.body) {
    const n3 = T(e3);
    e3.setAttribute(C, `${Number(n3) + 1}`);
  }(n2.parent), z.has(t2)) return z.get(t2);
  const o2 = function(e3) {
    const n3 = v(e3.visible), t3 = v(false), o3 = () => {
      t3.value && s2();
    }, i2 = p({ ...e3, onAfterLeave: o3 }), l2 = y(I, { ...i2, zIndex: i2.fullscreen ? F() : void 0, visible: n3 }), r2 = l2.mount(document.createElement("div")), s2 = () => {
      var _a2;
      const e4 = i2.parent;
      !function(e5 = document.body) {
        const n4 = T(e5);
        if (n4) {
          const t4 = Number.parseInt(n4) - 1;
          0 === t4 ? function(e6 = document.body) {
            e6.removeAttribute(C);
          }(e5) : e5.setAttribute(C, `${t4}`);
        }
      }(e4), T(e4) || (A(() => {
        !function(e5 = document.body) {
          e5.classList.remove(Y);
        }(e4), V(e4);
      }, 1), z.delete(e4 ?? document.body), (_a2 = r2.$el.parentNode) == null ? void 0 : _a2.removeChild(r2.$el), l2.unmount());
    };
    let c2;
    return { get $el() {
      return r2.$el;
    }, vm: r2, close: () => {
      var _a2;
      e3.beforeClose && false === e3.beforeClose() || (t3.value = true, clearTimeout(c2), c2 = $(o3), n3.value = false, (_a2 = e3.closed) == null ? void 0 : _a2.call(e3));
    }, visible: n3, setText: (e4) => {
      i2.text = e4;
    } };
  }({ ...n2, closed: () => {
    var _a2;
    (_a2 = n2.closed) == null ? void 0 : _a2.call(n2), n2.fullscreen && (N = null);
  } });
  return function(e3, n3 = document.body) {
    e3.lock ? function(e4 = document.body) {
      e4.classList.add(j);
    }(n3) : V(n3), function(e4 = document.body) {
      e4.classList.add(Y);
    }(n3);
  }(e2, n2 == null ? void 0 : n2.parent), (_a = n2.parent) == null ? void 0 : _a.appendChild(o2.$el), f(() => o2.visible.value = !!n2.visible), n2.fullscreen && (N = o2), z.set(t2, o2), o2;
}
function T(e2 = document.body) {
  return e2.getAttribute(C) ?? 0;
}
function V(e2 = document.body) {
  e2.classList.remove(j);
}
const q = Symbol("loading"), w = { mounted(e2, n2) {
  n2.value && B(e2, n2);
}, updated(e2, n2) {
  var _a;
  n2.value !== n2.oldValue && (!n2.value || n2.oldValue ? (_a = e2[q]) == null ? void 0 : _a.instance.close() : B(e2, n2));
}, unmounted(e2) {
  var _a;
  (_a = e2[q]) == null ? void 0 : _a.instance.close(), e2[q] = void 0;
} };
function B(e2, n2) {
  const t2 = (n3) => e2.getAttribute(`ym-loading-${n3}`), o2 = (e3) => n2.modifiers[e3], i2 = o2("fullscreen"), l2 = { text: t2("text"), spinner: t2("spinner"), background: t2("background"), target: i2 ? void 0 : e2, body: o2("body"), lock: o2("lock"), fullscreen: i2 };
  e2[q] = { instance: S(l2), options: l2 };
}
const E = { name: "YmLoading", install(e2) {
  e2.config.globalProperties.$YmLoading = S, e2.directive("loading", w);
}, directive: w, service: S };
export {
  S as L,
  E as Y,
  w as v
};
