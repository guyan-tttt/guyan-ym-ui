import { _ as e, w as a } from "./utils-BHtccd4_.js";
import { defineComponent as l, reactive as o, ref as i, computed as s, onMounted as t, onUnmounted as r, openBlock as c, createBlock as n, Teleport as m, createVNode as d, Transition as v, withCtx as u, unref as f, createElementVNode as _, withModifiers as g, normalizeStyle as w, createCommentVNode as y, useAttrs as p, nextTick as x, watch as z, createElementBlock as k, mergeProps as h, renderSlot as I, createTextVNode as C, Fragment as S } from "vue";
import { t as L, i as O } from "./vendor-D1ZXl11B.js";
import { a as b } from "./Overlay-CBq_9r27.js";
import { a as E } from "./Icon-BPqbRGFK.js";
const R = ["src"], B = { class: "ym-image__toolbar" }, M = { class: "ym-image__arrow" }, P = e(l({ name: "YmImageViewer", __name: "ImageViewer", props: { urlList: {}, zIndex: { default: 3e3 }, initialIndex: { default: 0 }, hideOnClickModal: { type: Boolean, default: false }, zoomRate: { default: 0.2 }, minScale: { default: 0.1 }, maxScale: { default: 2 }, closeOnPressEsc: { type: Boolean, default: false } }, emits: ["close", "switch", "rotate", "wheel"], setup(e2, { expose: a2, emit: l2 }) {
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
  }, P2 = i(false), Y2 = (e3) => {
    P2.value = e3;
  }, $2 = () => {
    Y2(false), G(), x2("close");
  }, j2 = (e3) => {
    e3 < 0 ? I2.value = p2.urlList.length - 1 : e3 > p2.urlList.length - 1 ? I2.value = 0 : (I2.value = e3, x2("switch", C2.value, I2.value));
  };
  a2({ open: () => {
    Y2(true), F();
  }, close: $2, setActiveItem: j2 });
  const X2 = () => {
    I2.value -= 1, j2(I2.value);
  }, D2 = () => {
    I2.value += 1, j2(I2.value);
  }, V2 = () => {
    p2.hideOnClickModal && $2();
  }, q = (e3) => {
    p2.closeOnPressEsc && (e3.preventDefault(), e3.stopPropagation(), "Escape" === e3.code && $2());
  }, A = (e3) => {
    e3.preventDefault(), e3.stopPropagation(), (e3.deltaY || e3.deltaX) > 0 ? (z2.scale -= p2.zoomRate, z2.scale < p2.minScale && (z2.scale = p2.minScale)) : (z2.scale += p2.zoomRate, z2.scale > p2.maxScale && (z2.scale = p2.maxScale)), x2("wheel");
  }, F = () => {
    const e3 = L(q, 300), a3 = A;
    window.addEventListener("keydown", e3), window.addEventListener("wheel", a3, { passive: false });
  }, G = () => {
    window.removeEventListener("keydown", q), window.removeEventListener("wheel", A);
  };
  return t(() => {
  }), r(() => {
  }), (e3, a3) => (c(), n(m, { to: "body" }, [d(v, { name: "viewer-fade" }, { default: u(() => [P2.value ? (c(), n(f(b), { key: 0, overlayClass: "ym-image__viewer__overlay", zIndex: e3.zIndex, onClick: V2 }, { default: u(() => [_("div", { class: "ym-image__viewer", onClick: a3[4] || (a3[4] = g(() => {
  }, ["stop"])), ref_key: "overlayRef", ref: k2 }, [_("div", { class: "ym-image_canvas", style: w(h2.value) }, [_("img", { class: "ym-image__viewer__img", src: C2.value, alt: "" }, null, 8, R)], 4), _("div", B, [_("div", { class: "ym-image__toolbar__item image-viewer-zoom-out", onClick: a3[0] || (a3[0] = (e4) => O2("zoomOut")) }, [d(f(E), { icon: "fa-plus-circle", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item image-viewer-zoom-in", onClick: a3[1] || (a3[1] = (e4) => O2("zoomIn")) }, [d(f(E), { icon: "fa-minus-circle", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item image-viewer-clockwise", onClick: a3[2] || (a3[2] = (e4) => O2("clockwise")) }, [d(f(E), { icon: "fa-rotate-right", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__toolbar__item fa-flip-horizontal image-viewer-anticlockwise", onClick: a3[3] || (a3[3] = (e4) => O2("anticlockwise")) }, [d(f(E), { icon: "fa-rotate-right", color: "#fff", size: "2xl" })])]), _("div", { class: "ym-image__close", onClick: $2 }, [d(f(E), { icon: "fa-times-circle", color: "#fff", size: "3x" })]), _("div", M, [_("div", { class: "ym-image__arrow-item ym-image__arrow-prev", onClick: X2 }, [d(f(E), { icon: "fa-chevron-left", color: "#fff", size: "2xl" })]), _("div", { class: "ym-image__arrow-item ym-image__arrow-next", onClick: D2 }, [d(f(E), { icon: "fa-chevron-right", color: "#fff", size: "2xl" })])])], 512)]), _: 1 }, 8, ["zIndex"])) : y("", true)]), _: 1 })]));
} }), [["__scopeId", "data-v-82f5109c"]]), Y = { key: 0, class: "ym-image__error" }, $ = ["src", "alt", "fit", "loading"], j = { key: 1, class: "ym-image__loading" }, X = { key: 2, class: "ym-image__preview" }, D = a(e(l({ name: "YmImage", __name: "Image", props: { src: {}, fit: { default: "fill" }, hideOnClickModal: { type: Boolean, default: false }, loading: { default: "eager" }, lazy: { type: Boolean, default: false }, scrollContainer: {}, alt: {}, previewSrcList: { default: () => [] }, zIndex: { default: 3e3 }, initialIndex: { default: 0 }, closeOnPressEscape: { type: Boolean, default: false }, zoomRate: { default: 0.2 }, minScale: { default: 0.2 }, maxScale: { default: 2 }, preview: { type: Boolean, default: false } }, emits: ["load", "error", "switch", "close", "show"], setup(e2, { emit: a2 }) {
  const l2 = e2, o2 = a2, n2 = p(), m2 = i(false), v2 = i(void 0), u2 = i(true), g2 = s(() => !!l2.lazy || "lazy" === l2.loading), L2 = () => {
    u2.value = false, m2.value = false, v2.value = l2.src;
  }, b2 = (e3) => {
    u2.value = false, m2.value = false, o2("load", e3);
  }, E2 = (e3) => {
    u2.value = false, m2.value = true, o2("error", e3);
  }, R2 = (e3) => {
    if (g2.value && 0 !== e3.length && e3[0].isIntersecting) {
      if (v2.value) return;
      L2();
    }
  }, B2 = s(() => l2.scrollContainer ? O(l2.scrollContainer) ? document.querySelector(l2.scrollContainer) : l2.scrollContainer : null), M2 = i(), D2 = i(null), V2 = () => {
    var _a;
    g2.value && ((_a = D2.value) == null ? void 0 : _a.observe(M2.value));
  }, q = i(), A = s(() => l2.previewSrcList.length ? l2.previewSrcList : [l2.src]), F = async (e3) => {
    var _a;
    A.value.length && (await x(), q.value && ((_a = q.value) == null ? void 0 : _a.open(), o2("show", e3)));
  }, G = () => {
    o2("close");
  }, H = (e3) => {
    o2("switch", e3);
  };
  return t(async () => {
    g2.value ? (await x(), await void (IntersectionObserver && (D2.value = new IntersectionObserver(R2, { root: B2.value, rootMargin: "0px", threshold: 0.01 }))), V2()) : L2();
  }), r(() => {
    var _a;
    (_a = D2.value) == null ? void 0 : _a.unobserve(M2.value);
  }), z(() => l2.src, () => {
    g2.value ? V2() : L2();
  }), (e3, a3) => (c(), k("div", h({ class: "ym-image", ref_key: "imageRef", ref: M2 }, f(n2)), [m2.value ? (c(), k("div", Y, [I(e3.$slots, "error", {}, () => [a3[0] || (a3[0] = C(" 加载错误 "))], true)])) : (c(), k(S, { key: 1 }, [!u2.value && v2.value ? (c(), k("img", { key: 0, class: "ym-image__inner", src: v2.value, alt: e3.alt, fit: e3.fit, loading: e3.loading, style: w({ "object-fit": e3.fit }), onLoad: b2, onError: E2, onClick: F }, null, 44, $)) : (c(), k("div", j, [I(e3.$slots, "loading", {}, () => [a3[1] || (a3[1] = _("div", { class: "ym-image__loading-text" }, " 加载中... ", -1))], true)]))], 64)), e3.preview ? (c(), k("div", X, [d(P, { ref_key: "previewRef", ref: q, "url-list": A.value, "initial-index": e3.initialIndex, "close-on-press-esc": e3.closeOnPressEscape, "hide-on-click-modal": e3.hideOnClickModal, "z-index": e3.zIndex, "zoom-rate": e3.zoomRate, "max-scale": e3.maxScale, "min-scale": e3.minScale, onSwitch: H, onClose: G }, null, 8, ["url-list", "initial-index", "close-on-press-esc", "hide-on-click-modal", "z-index", "zoom-rate", "max-scale", "min-scale"])])) : y("", true)], 16));
} }), [["__scopeId", "data-v-b0f9a688"]])), V = a(P);
export {
  V as Y,
  D as a
};
