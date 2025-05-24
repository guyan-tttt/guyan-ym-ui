import { f as e, _ as a, w as l } from "./utils-DY8rdjAx.js";
import { defineComponent as t, ref as i, reactive as s, computed as o, openBlock as r, createElementBlock as u, normalizeClass as n, createBlock as p, TransitionGroup as c, withCtx as d, Fragment as m, renderList as f, createVNode as y, unref as g, createElementVNode as v, withModifiers as _, createCommentVNode as h, createTextVNode as k, renderSlot as x, toDisplayString as w } from "vue";
import { a as z } from "./Icon-BOnRonde.js";
import { Y as b } from "./Message-CCKZCdas.js";
import { e as B, u as D } from "./vendor-D1ZXl11B.js";
const M = ["src"], j = { key: 0, class: "ym-upload__picture-list-item" }, $ = ["multiple", "accept"], S = { class: "ym-upload__content" }, C = { key: 0, class: "ym-upload__default" }, I = { key: 1, class: "ym-upload__avatar" }, V = ["multiple", "accept"], U = { class: "ym-upload-list__info" }, F = { class: "ym-upload-list__name" }, Y = { class: "ym-upload-list__size" }, A = { class: "ym-upload-list__actions" }, E = l(a(t({ name: "YmUpload", __name: "Upload", props: { multiple: { type: Boolean, default: false }, accept: { default: "*/*" }, maxSize: { default: 5 }, action: { default: "" }, disabled: { type: Boolean, default: false }, type: { default: "default" }, draggable: { type: Boolean, default: false }, modelValue: { default: () => [] } }, emits: ["file-change", "upload", "remove", "upload-success", "upload-error", "update:modelValue"], setup(a2, { expose: l2, emit: t2 }) {
  const E2 = a2, L = t2, O = i(null), R = i(false), T = s(E2.modelValue), W = s(E2.modelValue.map((e2) => ({ url: e2.url, file: null, uid: e2.uid }))), G = o(() => E2.accept.startsWith("image") ? "image" : E2.accept.startsWith("video") ? "video" : "upload"), K = () => {
    E2.disabled || (R.value = true);
  }, P = () => {
    E2.disabled || (R.value = true);
  }, q = () => {
    R.value = false;
  }, H = (e2) => {
    var _a;
    if (E2.disabled || !E2.draggable) return;
    if (R.value = false, E2.disabled) return;
    const a3 = (_a = e2.dataTransfer) == null ? void 0 : _a.files;
    a3 && N(Array.from(a3));
  }, J = (e2) => {
    const a3 = e2.target, l3 = a3.files;
    l3 && N(Array.from(l3)), a3.value = "";
  }, N = async (a3) => {
    for (const l3 of a3) {
      if (T.length >= E2.maxSize) return b.warning({ message: "文件数量超过最大限制" }), console.error("文件数量超过最大限制");
      if (!Q(l3)) continue;
      if (("avatar" === E2.type || "picture-list" === E2.type) && !ae(l3, ["image/jpeg", "image/png", "image/gif", "image/jpg", "image/webp"])) return b.warning({ message: `当前模式下不支持该文件类型: ${l3.type}` }), console.error(`当前模式下不支持该文件类型: ${l3.type}`);
      const a4 = { uid: Math.random().toString(36), name: l3.name, size: l3.size, type: l3.type, status: "ready", raw: l3, progress: 0 };
      if ("avatar" === E2.type && T.length >= 1 && T.shift(), T.push(a4), "picture-list" === E2.type && W.push({ url: URL.createObjectURL(a4.raw), uid: a4.uid, file: a4 }), L("update:modelValue", T), E2.action) try {
        a4.status = "uploading";
        const t3 = new FormData();
        t3.append("file", l3);
        const { response: i2, error: s2 } = await e(E2.action, { method: "POST", data: t3, timeout: 3e4, credentials: "include" });
        if (s2) throw new Error(s2);
        a4.status = "success", L("upload-success", { file: a4, response: await (i2 == null ? void 0 : i2.json()) });
      } catch (e2) {
        a4.status = "error", L("upload-error", { file: a4, error: e2 instanceof Error ? e2.message : "上传失败" });
      }
    }
    L("file-change", T);
  }, Q = (e2) => "*/*" === E2.accept || ae(e2) ? !(e2.size > 1024 * E2.maxSize * 1024 && (b.warning({ message: `文件大小超过限制: ${E2.maxSize}MB` }), console.error(`文件大小超过限制: ${E2.maxSize}MB`), 1)) : (b.warning({ message: `不支持的文件类型: ${e2.type}` }), console.error(`不支持的文件类型: ${e2.type}`), false), X = (e2) => {
    const a3 = T.findIndex((a4) => a4.uid === e2.uid);
    a3 > -1 && (T.splice(a3, 1), L("remove", e2), L("update:modelValue", T));
  }, Z = (e2) => {
    if (0 === e2) return "0 B";
    const a3 = Math.floor(Math.log(e2) / Math.log(1024));
    return parseFloat((e2 / Math.pow(1024, a3)).toFixed(2)) + " " + ["B", "KB", "MB", "GB"][a3];
  }, ee = (e2) => ({ image: "image", video: "video", audio: "music", text: "file", application: "file" })[e2.type.split("/")[0]] || "file", ae = (e2, a3) => {
    if (B(a3) || !D(a3) || 0 === (a3 == null ? void 0 : a3.length)) return true;
    for (const l3 of a3) if (e2.type.includes(l3)) return true;
    return false;
  };
  return l2({ upload: () => {
    L("upload", T);
  } }), (e2, a3) => (r(), u("div", { class: n(["ym-upload", { [`is-${e2.type}`]: e2.type }]) }, ["picture-list" === e2.type ? (r(), p(c, { key: 0, name: "ym-upload-picture-list", tag: "ul", class: "ym-upload-picture-list" }, { default: d(() => [(r(true), u(m, null, f(W, (e3) => (r(), u("li", { key: e3.url, class: "ym-upload-list__item" }, [y(g(z), { onClick: (a4) => ((e4) => {
    const a5 = W.findIndex((a6) => a6.uid === e4.uid);
    a5 > -1 && (W.splice(a5, 1), X(e4.file ? e4.file : e4));
  })(e3), class: "picture-list-item__close", icon: "trash", size: "xl", color: "#999" }, null, 8, ["onClick"]), v("img", { src: e3.url, alt: "" }, null, 8, M)]))), 128)), v("div", { key: "upload-trigger", class: n(["ym-upload__dragger-picture-list", { "is-dragover": R.value }]), onDragenter: _(K, ["prevent"]), onDragover: _(P, ["prevent"]), onDragleave: _(q, ["prevent"]), onDrop: _(H, ["prevent"]) }, ["picture-list" === e2.type ? (r(), u("div", j, [y(g(z), { icon: "plus", size: "2xl", color: "#8c939d" })])) : h("", true), v("input", { ref_key: "fileInput", ref: O, type: "file", class: "ym-upload__input", multiple: e2.multiple, accept: e2.accept, onChange: J }, null, 40, $)], 34)]), _: 1 })) : (r(), u("div", { key: 1, class: n(["ym-upload__dragger", { "is-dragover": R.value }]), onDragenter: _(K, ["prevent"]), onDragover: _(P, ["prevent"]), onDragleave: _(q, ["prevent"]), onDrop: _(H, ["prevent"]) }, [v("div", S, ["default" === e2.type ? (r(), u("div", C, [y(g(z), { icon: G.value, c: "" }, null, 8, ["icon"]), a3[0] || (a3[0] = v("div", { class: "ym-upload__text" }, [k(" 将文件拖到此处或"), v("em", null, "点击上传")], -1))])) : "avatar" === e2.type ? (r(), u("div", I, [0 === T.length ? (r(), p(g(z), { key: 0, icon: "plus", size: "2xl", color: "#8c939d" })) : h("", true), x(e2.$slots, "default", {}, void 0, true)])) : h("", true)]), v("input", { ref_key: "fileInput", ref: O, type: "file", class: "ym-upload__input", multiple: e2.multiple, accept: e2.accept, onChange: J }, null, 40, V)], 34)), "default" === e2.type ? (r(), p(c, { key: 2, name: "ym-upload-list", tag: "ul", class: "ym-upload-list" }, { default: d(() => [(r(true), u(m, null, f(T, (e3) => (r(), u("li", { key: e3.uid, class: "ym-upload-list__item" }, [v("div", U, [y(g(z), { icon: ee(e3), class: "ym-upload-list__icon" }, null, 8, ["icon"]), v("span", F, w(e3.name), 1), v("span", Y, "(" + w(Z(e3.size)) + ")", 1)]), v("div", A, ["success" === e3.status ? (r(), p(g(z), { key: 0, icon: "check-circle", color: "#67c23a" })) : h("", true), "error" === e3.status ? (r(), p(g(z), { key: 1, icon: "xmark-circle", color: "#f56c6c" })) : h("", true), "uploading" === e3.status ? (r(), p(g(z), { key: 2, icon: "spinner", spin: "", color: "#409eff" })) : h("", true), y(g(z), { icon: "xmark", class: "ym-upload-list__delete", onClick: (a4) => X(e3) }, null, 8, ["onClick"])])]))), 128))]), _: 1 })) : h("", true)], 2));
} }), [["__scopeId", "data-v-b2037957"]]));
export {
  E as Y
};
