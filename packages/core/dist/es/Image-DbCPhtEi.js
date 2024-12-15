import { _ as e, w as a } from "./utils-B0xUaq8Y.js";
import { defineComponent as l, reactive as o, ref as i, computed as s, onMounted as t, onUnmounted as c, openBlock as r, createBlock as n, Teleport as m, createVNode as d, Transition as v, withCtx as u, unref as f, createElementVNode as _, withModifiers as g, normalizeStyle as w, createCommentVNode as y, useAttrs as p, nextTick as x, watch as z, createElementBlock as k, mergeProps as h, renderSlot as I, createTextVNode as C, Fragment as S } from "vue";
import { t as L, d as O } from "./vendor-BmDHKAAA.js";
import { Y as b } from "./Overlay-DGdQCS4b.js";
import { a as E } from "./Icon-Dd1wFBNY.js";
const R = ["src"], Y = { class: "ym-image__toolbar" }, M = { class: "ym-image__arrow" }, P = e(l({ name: "YmImageViewer", __name: "ImageViewer", props: { urlList: {}, zIndex: { default: 3e3 }, initialIndex: { default: 0 }, hideOnClickModal: { type: Boolean, default: false }, zoomRate: { default: 0.2 }, minScale: { default: 0.1 }, maxScale: { default: 2 }, closeOnPressEsc: { type: Boolean, default: false } }, emits: ["close", "switch", "rotate", "wheel"], setup(e2, { expose: a2, emit: l2 }) {
  const p2 = e2, x2 = l2, z2 = o({ scale: 1, deg: 0, offsetX: 0, offsetY: 0 }), k2 = i(null), h2 = s(() => ({ transform: `translate3d(${z2.offsetX}px, ${z2.offsetY}px, 0) scale(${z2.scale}) rotate(${z2.deg}deg)` })), I2 = i(p2.initialIndex), C2 = s(() => 0 === p2.urlList.length ? "" : p2.urlList[I2.value]), S2 = /* @__PURE__ */ new Map([["zoomIn", () => {
    z2.scale -= p2.zoomRate, z2.scale < p2.minScale && (z2.scale = p2.minScale);
  }], ["zoomOut", () => {
    z2.scale += p2.zoomRate, z2.scale > p2.maxScale && (z2.scale = p2.maxScale);
  }], ["clockwise", () => {
    z2.deg += 90, x2("rotate", z2.deg);
  }], ["anticlockwise", () => {
    z2.deg -= 90, x2("rotate", z2.deg);
  }]]), O2 = (e3) => {
    var _a;
    (_a = S2.get(e3)) == null ? void 0 : _a.call(null);
  }, P2 = i(false), $2 = (e3) => {
    P2.value = e3;
  }, j2 = () => {
    $2(false), G(), x2("close");
  }, B2 = (e3) => {
    e3 < 0 ? I2.value = p2.urlList.length - 1 : e3 > p2.urlList.length - 1 ? I2.value = 0 : (I2.value = e3, x2("switch", C2.value, I2.value));
  };
  a2({ open: () => {
    $2(true), F();
  }, close: j2, setActiveItem: B2 });
  const X2 = () => {
    I2.value -= 1, B2(I2.value);
  }, D2 = () => {
    I2.value += 1, B2(I2.value);
  }, V2 = () => {
    p2.hideOnClickModal && j2();
  }, q = (e3) => {
    p2.closeOnPressEsc && (e3.preventDefault(), e3.stopPropagation(), "Escape" === e3.code && j2());
  }, A = (e3) => {
    e3.preventDefault(), e3.stopPropagation(), (e3.deltaY || e3.deltaX) > 0 ? (z2.scale -= p2.zoomRate, z2.scale < p2.minScale && (z2.scale = p2.minScale)) : (z2.scale += p2.zoomRate, z2.scale > p2.maxScale && (z2.scale = p2.maxScale)), x2("wheel");
  }, F = () => {
    const e3 = L(q, 300), a3 = A;
    window.addEventListener("keydown", e3), window.addEventListener("wheel", a3, { passive: false });
  }, G = () => {
    window.removeEventListener("keydown", q), window.removeEventListener("wheel", A);
  };
  return t(() => {
  }), c(() => {
  }), (e3, a3) => (r(), n(m, { to: "body" }, [d(v, { name: "viewer-fade" }, { default: u(() => [P2.value ? (r(), n(f(b), { key: 0, overlayClass: "ym-image__viewer__overlay", zIndex: e3.zIndex, onClick: V2 }, { default: u(() => [_("div", { class: "ym-image__viewer", onClick: a3[4] || (a3[4] = g(() => {
  }, ["stop"])), ref_key: "overlayRef", ref: k2 }, [_("div", { class: "ym-image_canvas", style: w(h2.value) }, [_("img", { class: "ym-image__viewer__img", src: C2.value, alt: "" }, null, 8, R)], 4), _("div", Y, [_("div", { class: "ym-image__toolbar__item image-viewer-zoom-out", onClick: a3[0] || (a3[0] = (e4) => O2("zoomOut")) }, [d(f(E), { icon: "fa-plus-circle", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item image-viewer-zoom-in", onClick: a3[1] || (a3[1] = (e4) => O2("zoomIn")) }, [d(f(E), { icon: "fa-minus-circle", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item image-viewer-clockwise", onClick: a3[2] || (a3[2] = (e4) => O2("clockwise")) }, [d(f(E), { icon: "fa-rotate-right", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item fa-flip-horizontal image-viewer-anticlockwise", onClick: a3[3] || (a3[3] = (e4) => O2("anticlockwise")) }, [d(f(E), { icon: "fa-rotate-right", color: "#fff", size: "2xl" })])]), _("div", { class: "ym-image__close", onClick: j2 }, [d(f(E), { icon: "fa-times-circle", color: "#fff", size: "3x" })]), _("div", M, [_("div", { class: "ym-image__arrow-item ym-image__arrow-prev", onClick: X2 }, [d(f(E), { icon: "fa-chevron-left", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__arrow-item ym-image__arrow-next", onClick: D2 }, [d(f(E), { icon: "fa-chevron-right", color: "#fff", size: "2xl" })])])], 512)]), _: 1 }, 8, ["zIndex"])) : y("", true)]), _: 1 })]));
} }), [["__scopeId", "data-v-82f5109c"]]), $ = { key: 0, class: "ym-image__error" }, j = ["src", "alt", "fit", "loading"], B = { key: 1, class: "ym-image__loading" }, X = { class: "ym-image__preview" }, D = a(e(l({ name: "YmImage", __name: "Image", props: { src: {}, fit: { default: "fill" }, hideOnClickModal: { type: Boolean, default: false }, loading: { default: "eager" }, lazy: { type: Boolean, default: false }, scrollContainer: {}, alt: {}, previewSrcList: { default: () => [] }, zIndex: { default: 3e3 }, initialIndex: { default: 0 }, closeOnPressEscape: { type: Boolean, default: false }, zoomRate: { default: 0.2 }, minScale: { default: 0.2 }, maxScale: { default: 2 } }, emits: ["load", "error", "switch", "close", "show"], setup(e2, { emit: a2 }) {
  const l2 = e2, o2 = a2, n2 = p(), m2 = i(false), v2 = i(void 0), u2 = i(true), g2 = s(() => !!l2.lazy || "lazy" === l2.loading), y2 = () => {
    u2.value = false, m2.value = false, v2.value = l2.src;
  }, L2 = (e3) => {
    u2.value = false, m2.value = false, o2("load", e3);
  }, b2 = (e3) => {
    u2.value = false, m2.value = true, o2("error", e3);
  }, E2 = (e3) => {
    if (g2.value && 0 !== e3.length && e3[0].isIntersecting) {
      if (v2.value) return;
      y2();
    }
  }, R2 = s(() => l2.scrollContainer ? O(l2.scrollContainer) ? document.querySelector(l2.scrollContainer) : l2.scrollContainer : null), Y2 = i(), M2 = i(null), D2 = () => {
    var _a;
    g2.value && ((_a = M2.value) == null ? void 0 : _a.observe(Y2.value));
  }, V2 = i(), q = s(() => l2.previewSrcList.length ? l2.previewSrcList : [l2.src]), A = async (e3) => {
    var _a;
    q.value.length && (await x(), V2.value && ((_a = V2.value) == null ? void 0 : _a.open(), o2("show", e3)));
  }, F = () => {
    o2("close");
  }, G = (e3) => {
    o2("switch", e3);
  };
  return t(async () => {
    g2.value ? (await x(), await void (IntersectionObserver && (M2.value = new IntersectionObserver(E2, { root: R2.value, rootMargin: "0px", threshold: 0.01 }))), D2()) : y2();
  }), c(() => {
    var _a;
    (_a = M2.value) == null ? void 0 : _a.unobserve(Y2.value);
  }), z(() => l2.src, () => {
    g2.value ? D2() : y2();
  }), (e3, a3) => (r(), k("div", h({ class: "ym-image", ref_key: "imageRef", ref: Y2 }, f(n2)), [m2.value ? (r(), k("div", $, [I(e3.$slots, "error", {}, () => [a3[0] || (a3[0] = C(" 加载错误 "))], true)])) : (r(), k(S, { key: 1 }, [!u2.value && v2.value ? (r(), k("img", { key: 0, class: "ym-image__inner", src: v2.value, alt: e3.alt, fit: e3.fit, loading: e3.loading, style: w({ "object-fit": e3.fit }), onLoad: L2, onError: b2, onClick: A }, null, 44, j)) : (r(), k("div", B, [I(e3.$slots, "loading", {}, () => [a3[1] || (a3[1] = _("div", { class: "ym-image__loading-text" }, " 加载中... ", -1))], true)]))], 64)), _("div", X, [d(P, { ref_key: "previewRef", ref: V2, "url-list": q.value, "initial-index": e3.initialIndex, "close-on-press-esc": e3.closeOnPressEscape, "hide-on-click-modal": e3.hideOnClickModal, "z-index": e3.zIndex, "zoom-rate": e3.zoomRate, "max-scale": e3.maxScale, "min-scale": e3.minScale, onSwitch: G, onClose: F }, null, 8, ["url-list", "initial-index", "close-on-press-esc", "hide-on-click-modal", "z-index", "zoom-rate", "max-scale", "min-scale"])])], 16));
} }), [["__scopeId", "data-v-422a94e0"]])), V = a(P);
export {
  V as Y,
  D as a
};
