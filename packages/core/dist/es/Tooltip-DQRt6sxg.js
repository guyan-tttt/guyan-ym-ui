import { onMounted as e, watch as t, onUnmounted as a, defineComponent as o, ref as l, computed as i, watchEffect as n, openBlock as r, createElementBlock as u, mergeProps as s, toHandlers as v, renderSlot as c, createVNode as p, Transition as d, withCtx as m, createTextVNode as f, toDisplayString as g, createElementVNode as h, createCommentVNode as _ } from "vue";
import { createPopper as y } from "@popperjs/core";
import { u as k } from "./hooks-Bx8r9Jef.js";
import { b as T, f as b, d as w, c as x, i as j } from "./vendor-D9tc2vMP.js";
import { _ as B, w as L } from "./utils-KuMelWEa.js";
const N = B(o({ name: "YmTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(o2, { expose: B2, emit: L2 }) {
  const N2 = o2, $2 = L2, E = l(false), O = l({}), R = l({}), Y = l({}), A = l(null), D = l(null), I = l(null), M = i(() => N2.virtualTriggering ? N2.virtualRef ?? D.value : D.value), q = i(() => ({ placement: N2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...N2.popperOptions })), z = i(() => "hover" === N2.trigger ? N2.showTimeout : 0), C = i(() => "hover" === N2.trigger ? N2.hideTimeout : 0);
  let F, G, H;
  function J() {
    G == null ? void 0 : G.cancel(), F == null ? void 0 : F();
  }
  function K() {
    F == null ? void 0 : F.cancel(), G == null ? void 0 : G();
  }
  function P() {
    E.value ? K() : J();
  }
  function Q(e2) {
    N2.disabled || (E.value = e2, $2("visible-change", e2));
  }
  function S() {
    if (!N2.disabled && !N2.manual) return "hover" === N2.trigger ? (O.value.mouseenter = J, R.value.mouseleave = K, void (Y.value.mouseenter = J)) : void ("click" !== N2.trigger ? "contextmenu" !== N2.trigger || (O.value.contextmenu = (e2) => {
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
    N2.manual || S(), F = w(x(Q, null, true), z.value), G = w(x(Q, null, false), C.value);
  }), B2({ show: J, hide: function() {
    F == null ? void 0 : F.cancel(), Q(false);
  } }), t(E, (e2) => {
    e2 && D.value && I.value && (H = y(D.value, I.value, q.value));
  }, { flush: "post" }), t(() => N2.manual, (e2) => {
    e2 ? V() : S();
  }), t(() => N2.trigger, (e2, t2) => {
    t2 !== e2 && (F == null ? void 0 : F.cancel(), E.value = false, $2("visible-change", false), V());
  }), a(() => {
    U();
  }), k(A, () => {
    $2("click-outside"), "hover" === N2.trigger || N2.manual || E.value && K();
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
        })(), s2(), F == null ? void 0 : F.cancel(), Q(false));
      }, { deep: true });
    }), a(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(N2, M, O), (e2, t2) => (r(), u("div", s({ class: "ym-tooltip", ref_key: "containerNode", ref: A }, v(R.value, true)), [e2.virtualTriggering ? c(e2.$slots, "default", { key: 1 }, void 0, true) : (r(), u("div", s({ key: 0, class: "ym-tooltip__trigger", ref_key: "_triggerNode", ref: D }, v(O.value, true)), [c(e2.$slots, "default", {}, void 0, true)], 16)), p(d, { name: e2.transition, onAfterLeave: U }, { default: m(() => [E.value ? (r(), u("div", s({ key: 0, class: "ym-tooltip__popper", ref_key: "popperNode", ref: I }, v(Y.value, true)), [c(e2.$slots, "content", {}, () => [f(g(e2.content), 1)], true), t2[0] || (t2[0] = h("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : _("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-0926dd93"]]), $ = L(N);
export {
  N as Y,
  $ as a
};
