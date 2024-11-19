import { defineComponent as t, ref as e, computed as o, openBlock as i, createBlock as n, createSlots as c, withCtx as l, createElementVNode as a, normalizeStyle as f, createCommentVNode as r, createTextVNode as d, toDisplayString as u, createVNode as s, renderSlot as m } from "vue";
import { Y as p } from "./Tooltip-Sy9nmeeD.js";
import { Y as y } from "./Icon-MY4ejLHb.js";
import { Y as h } from "./Button-C3pYzmrv.js";
import { a as _, _ as v, w as B } from "./utils-DOEVKjmS.js";
const T = { class: "ym-popconfirm__main" }, k = { class: "ym-popconfirm__action" }, w = B(v(t({ name: "YmPopconfirm", __name: "Popconfirm", props: { title: { default: "确定当前操作吗？" }, confirmButtonText: { default: "确定" }, cancelButtonText: { default: "取消" }, confirmButtonType: { default: "default" }, cancelButtonType: { default: "default" }, icon: { default: "check-circle" }, iconColor: { default: "green" }, hideIcon: { type: Boolean, default: false }, hideAfter: { default: 200 }, width: { default: 200 } }, emits: ["confirm", "cancel"], setup(t2, { emit: v2 }) {
  const B2 = t2, w2 = v2, x = e(), Y = o(() => ({ width: _(B2.width) }));
  function j() {
    var _a;
    (_a = x.value) == null ? void 0 : _a.hide();
  }
  function C(t3) {
    w2("confirm", t3), j();
  }
  function I(t3) {
    w2("cancel", t3), j();
  }
  return (t3, e2) => (i(), n(p, { ref_key: "tooltipRef", ref: x, "hide-timeout": t3.hideAfter, trigger: "click", width: t3.width }, c({ content: l(() => [a("div", { class: "ym-popconfirm", style: f(Y.value) }, [a("div", T, [!t3.hideIcon && t3.icon ? (i(), n(y, { key: 0, icon: t3.icon, color: t3.iconColor }, null, 8, ["icon", "color"])) : r("", true), d(" " + u(t3.title), 1)]), a("div", k, [s(h, { size: "small", type: t3.cancelButtonType, onClick: I }, { default: l(() => [d(u(t3.cancelButtonText), 1)]), _: 1 }, 8, ["type"]), s(h, { size: "small", type: t3.confirmButtonType, onClick: C }, { default: l(() => [d(u(t3.confirmButtonText), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [t3.$slots.default ? { name: "default", fn: l(() => [m(t3.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, t3.$slots.reference ? { name: "default", fn: l(() => [m(t3.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout", "width"]));
} }), [["__scopeId", "data-v-b0861c36"]]));
export {
  w as Y
};
