import { d as s, _ as e, w as a } from "./utils-xsKI4iFa.js";
import { defineComponent as i, ref as t, computed as r, useSlots as o, openBlock as l, createElementBlock as c, normalizeClass as n, unref as m, normalizeStyle as u, createBlock as f, renderSlot as v } from "vue";
import { a as d } from "./Icon-DzSshdSu.js";
import { i as p, a as z } from "./vendor-BXKGMoVT.js";
const y = ["src", "alt"], h = a(e(i({ name: "YmAvatar", __name: "Avatar", props: { src: {}, icon: {}, size: { default: "medium" }, shape: { default: "circle" }, alt: {}, fit: { default: "fill" } }, emits: ["error"], setup(e2, { emit: a2 }) {
  const i2 = e2, h2 = a2, _ = t(false), j = (s2) => {
    _.value = true, h2("error", s2);
  }, x = r(() => ({ objectFit: i2.fit })), b = o(), g = r(() => i2.icon || b.default ? "" : p(i2.src) ? i2.src : (s("Avatar", "src must be a string"), ""));
  return (s2, e3) => (l(), c("span", { class: n(["ym-avatar", { [`is-${s2.size}`]: !m(z)(s2.size), [`is-${s2.shape}`]: true }]), style: u({ width: m(z)(s2.size) ? i2.size + "px" : void 0, height: m(z)(s2.size) ? i2.size + "px" : void 0, fontSize: m(z)(s2.size) ? i2.size / 2 + "px" : void 0 }) }, [g.value && !_.value ? (l(), c("img", { key: 0, src: g.value, alt: s2.alt, style: u(x.value), onError: j }, null, 44, y)) : s2.icon ? (l(), f(m(d), { key: 1, icon: s2.icon, color: "#fff" }, null, 8, ["icon"])) : v(s2.$slots, "default", { key: 2 }, void 0, true)], 6));
} }), [["__scopeId", "data-v-fba503a0"]]));
export {
  h as Y
};
