import { onMounted as e, watch as t, onUnmounted as a, defineComponent as o, ref as l, computed as i, watchEffect as n, openBlock as r, createElementBlock as u, mergeProps as s, toHandlers as v, renderSlot as c, createVNode as p, Transition as m, withCtx as d, createTextVNode as f, toDisplayString as g, createElementVNode as h, createCommentVNode as _ } from "vue";
import { createPopper as y } from "@popperjs/core";
import { u as k } from "./hooks-CB8aTc5l.js";
import { G as T, f as b, E as w, u as x, i as j } from "./vendor-Bde6p_Xx.js";
import { _ as B, w as E } from "./utils-CN-UVqEO.js";
const L = B(o({ name: "YmTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(o2, { expose: B2, emit: E2 }) {
  const L2 = o2, N2 = E2, $ = l(false), O = l({}), R = l({}), Y = l({}), A = l(null), D = l(null), G = l(null), I = i(() => L2.virtualTriggering ? L2.virtualRef ?? D.value : D.value), M = i(() => ({ placement: L2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...L2.popperOptions })), q = i(() => "hover" === L2.trigger ? L2.showTimeout : 0), z = i(() => "hover" === L2.trigger ? L2.hideTimeout : 0);
  let C, F, H;
  function J() {
    F == null ? void 0 : F.cancel(), C == null ? void 0 : C();
  }
  function K() {
    C == null ? void 0 : C.cancel(), F == null ? void 0 : F();
  }
  function P() {
    $.value ? K() : J();
  }
  function Q(e2) {
    L2.disabled || ($.value = e2, N2("visible-change", e2));
  }
  function S() {
    if (!L2.disabled && !L2.manual) return "hover" === L2.trigger ? (O.value.mouseenter = J, R.value.mouseleave = K, void (Y.value.mouseenter = J)) : void ("click" !== L2.trigger ? "contextmenu" !== L2.trigger || (O.value.contextmenu = (e2) => {
      e2.preventDefault(), J();
    }) : O.value.click = P);
  }
  function U() {
    j(H) || (H.destroy(), H = null);
  }
  function V() {
    O.value = {}, R.value = {}, Y.value = {}, S();
  }
  return n(() => {
    L2.manual || S(), C = w(x(Q, null, true), q.value), F = w(x(Q, null, false), z.value);
  }), B2({ show: J, hide: function() {
    C == null ? void 0 : C.cancel(), Q(false);
  } }), t($, (e2) => {
    e2 && D.value && G.value && (H = y(D.value, G.value, M.value));
  }, { flush: "post" }), t(() => L2.manual, (e2) => {
    e2 ? V() : S();
  }), t(() => L2.trigger, (e2, t2) => {
    t2 !== e2 && (C == null ? void 0 : C.cancel(), $.value = false, N2("visible-change", false), V());
  }), a(() => {
    U();
  }), k(A, () => {
    N2("click-outside"), "hover" === L2.trigger || L2.manual || $.value && K();
  }), function(o3, l2, i2) {
    let n2, r2;
    const u2 = /* @__PURE__ */ new Map(), s2 = () => {
      const e2 = l2.value;
      T(e2) && b(i2.value, (t2, a2) => {
        u2.set(a2, t2), e2 == null ? void 0 : e2.addEventListener(a2, t2);
      });
    };
    e(() => {
      r2 = t(l2, () => o3.virtualTriggering && s2(), { immediate: true }), n2 = t(i2, () => {
        o3.virtualTriggering && ((() => {
          const e2 = l2.value;
          T(e2) && b(["mouseenter", "click", "contextmenu"], (t2) => u2.has(t2) && (e2 == null ? void 0 : e2.removeEventListener(t2, u2.get(t2))));
        })(), s2(), C == null ? void 0 : C.cancel(), Q(false));
      }, { deep: true });
    }), a(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(L2, I, O), (e2, t2) => (r(), u("div", s({ class: "ym-tooltip", ref_key: "containerNode", ref: A }, v(R.value, true)), [e2.virtualTriggering ? c(e2.$slots, "default", { key: 1 }, void 0, true) : (r(), u("div", s({ key: 0, class: "ym-tooltip__trigger", ref_key: "_triggerNode", ref: D }, v(O.value, true)), [c(e2.$slots, "default", {}, void 0, true)], 16)), p(m, { name: e2.transition, onAfterLeave: U }, { default: d(() => [$.value ? (r(), u("div", s({ key: 0, class: "ym-tooltip__popper", ref_key: "popperNode", ref: G }, v(Y.value, true)), [c(e2.$slots, "content", {}, () => [f(g(e2.content), 1)], true), t2[0] || (t2[0] = h("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : _("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-0926dd93"]]), N = E(L);
export {
  L as Y,
  N as a
};
