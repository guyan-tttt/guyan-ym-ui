import { ref as e, onUnmounted as t, defineComponent as n, useSlots as i, onMounted as l, watch as o, openBlock as u, createElementBlock as a, renderSlot as v, createBlock as s, Teleport as r, createVNode as c, Transition as d, withCtx as m, normalizeClass as y, normalizeStyle as x, Fragment as p, renderList as h, toDisplayString as w, createCommentVNode as f } from "vue";
import { u as b } from "./hooks-DLfEe-a9.js";
import { _ as k, w as g } from "./utils-BhyWMiYf.js";
const E = { key: 0 }, _ = ["onClick"], L = g(k(n({ name: "YmContextMenu", __name: "ContextMenu", props: { type: { default: "info" }, options: {}, title: {}, icon: {}, customize: { type: Boolean, default: false } }, setup(n2, { expose: k2 }) {
  i();
  const g2 = e(), L2 = e(), H = e({ x: 0, y: 0, visible: false }), M = e(0), W = (e2) => {
    e2.style.height = "auto", M.value = e2.clientHeight, e2.style.height = "0", requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e2.style.height = M.value + "px";
      });
    });
  }, C = (e2, t2, n3) => {
    const i2 = { x: e2, y: t2 };
    return e2 + n3.clientWidth > window.innerWidth && (i2.x = window.innerWidth - 200), t2 + n3.clientHeight > window.innerHeight && (i2.y = window.innerHeight - 200), i2;
  }, R = (e2, t2, n3) => {
    H.value.visible = e2;
    const i2 = C(t2, n3, { clientWidth: 150, clientHeight: M.value || 150 });
    H.value.x = i2.x, H.value.y = i2.y;
  };
  return l(() => {
    const { x: n3, y: i2, visible: l2 } = ((n4) => {
      const i3 = e(0), l3 = e(0), o2 = e(false), u2 = (e2) => {
        e2.preventDefault(), e2.stopPropagation(), o2.value = true, i3.value = e2.clientX, l3.value = e2.clientY;
      }, a2 = () => {
        o2.value = false;
      };
      return n4.addEventListener("contextmenu", u2), window.addEventListener("click", a2), window.addEventListener("contextmenu", a2), window.addEventListener("scroll", a2), b(n4, a2), t(() => {
        n4.removeEventListener("contextmenu", u2), window.removeEventListener("click", a2), window.removeEventListener("contextmenu", a2);
      }), { x: i3, y: l3, visible: o2 };
    })(g2.value);
    H.value.x = n3.value, H.value.y = i2.value, H.value.visible = l2.value, o(l2, () => {
      R(l2.value, n3.value, i2.value);
    }), o(n3, () => {
      H.value.visible = false, setTimeout(() => {
        H.value.visible = l2.value;
        const e2 = C(n3.value, i2.value, { clientWidth: 150, clientHeight: M.value || 150 });
        H.value.x = e2.x, H.value.y = e2.y;
      }, 0);
    });
  }), k2({ contextMenuRef: g2, openMenu: R }), (e2, t2) => (u(), a("div", { class: "ym-content-menu", ref_key: "contextMenuRef", ref: g2 }, [v(e2.$slots, "default", {}, void 0, true), (u(), s(r, { to: "body" }, [c(d, { onEnter: W }, { default: m(() => [H.value.visible ? (u(), a("div", { key: 0, class: y(["menu", { [`ym-menu--${e2.type}`]: e2.type }]), ref_key: "menuRef", ref: L2, style: x({ top: H.value.y + "px", left: H.value.x + "px" }) }, [e2.customize ? v(e2.$slots, "menu", { key: 1 }, void 0, true) : (u(), a("ul", E, [(u(true), a(p, null, h(e2.options, (e3) => (u(), a("li", { key: e3.label, onClick: (t3) => e3.handle(e3) }, w(e3.label), 9, _))), 128))]))], 6)) : f("", true)]), _: 3 })]))], 512));
} }), [["__scopeId", "data-v-0de9e977"]]));
export {
  L as Y
};
