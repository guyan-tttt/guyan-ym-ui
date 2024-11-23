import { defineComponent as e, openBlock as o, createElementBlock as t, normalizeClass as s, createTextVNode as a, toDisplayString as d, renderSlot as r, createCommentVNode as n, createElementVNode as c, normalizeStyle as l } from "vue";
import { _ as f, w as y } from "./utils-qFOQpxdb.js";
const h = { key: 0, class: "ym-card__header" }, i = { key: 1, class: "ym-card__footer" }, m = y(f(e({ name: "YmCard", __name: "Card", props: { header: {}, content: {}, footer: {}, shadow: { default: "always" }, contentStyle: {}, contentClass: {} }, setup(e2) {
  const f2 = e2;
  return (e3, y2) => (o(), t("div", { class: s(["ym-card", { [`is-${e3.shadow}-shadow`]: e3.shadow }]) }, [e3.$slots.header || f2.header ? (o(), t("div", h, [a(d(f2.header ? f2.header : "") + " ", 1), f2.header ? n("", true) : r(e3.$slots, "header", { key: 0 }, void 0, true)])) : n("", true), c("div", { class: s(["ym-card__content", f2.contentClass]), style: l(f2.contentStyle) }, [a(d(f2.content ? f2.content : "") + " ", 1), f2.content ? n("", true) : r(e3.$slots, "default", { key: 0 }, void 0, true)], 6), e3.$slots.footer || f2.footer ? (o(), t("div", i, [a(d(f2.footer ? f2.footer : "") + " ", 1), f2.footer ? n("", true) : r(e3.$slots, "footer", { key: 0 }, void 0, true)])) : n("", true)], 2));
} }), [["__scopeId", "data-v-ddcb3f87"]]));
export {
  m as Y
};
