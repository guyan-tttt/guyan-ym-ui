import { defineComponent as e, ref as t, computed as o, openBlock as i, createBlock as n, createSlots as c, withCtx as l, createElementVNode as a, normalizeStyle as f, createCommentVNode as r, createTextVNode as m, toDisplayString as d, createVNode as s, renderSlot as u } from "vue";
import { Y as p } from "./Tooltip-Sy9nmeeD.js";
import { Y as y } from "./Icon-MY4ejLHb.js";
import { Y as _ } from "./Button-CzHeFoQr.js";
import { a as h, _ as v, w as B } from "./utils-DOEVKjmS.js";
const T = { class: "ym-popconfirm__main" }, k = { class: "ym-popconfirm__action" }, w = B(v(e({ name: "YmPopconfirm", __name: "Popconfirm", props: { title: { default: "确定当前操作吗？" }, confirmButtonText: { default: "确定" }, cancelButtonText: { default: "取消" }, confirmButtonType: { default: "primary" }, cancelButtonType: { default: "default" }, icon: { default: "check-circle" }, iconColor: { default: "green" }, hideIcon: { type: Boolean, default: false }, hideAfter: { default: 200 }, width: { default: 200 } }, emits: ["confirm", "cancel"], setup(e2, { emit: v2 }) {
  const B2 = e2, w2 = v2, x = t(), Y = o(() => ({ width: h(B2.width) }));
  function j() {
    var _a;
    (_a = x.value) == null ? void 0 : _a.hide();
  }
  function C(e3) {
    w2("confirm", e3), j();
  }
  function I(e3) {
    w2("cancel", e3), j();
  }
  return (e3, t2) => (i(), n(p, { ref_key: "tooltipRef", ref: x, "hide-timeout": e3.hideAfter, trigger: "click", width: e3.width }, c({ content: l(() => [a("div", { class: "ym-popconfirm", style: f(Y.value) }, [a("div", T, [!e3.hideIcon && e3.icon ? (i(), n(y, { key: 0, icon: e3.icon, color: e3.iconColor }, null, 8, ["icon", "color"])) : r("", true), m(" " + d(e3.title), 1)]), a("div", k, [s(_, { class: "ym-popconfirm__cancel", size: "small", type: e3.cancelButtonType, onClick: I }, { default: l(() => [m(d(e3.cancelButtonText), 1)]), _: 1 }, 8, ["type"]), s(_, { class: "ym-popconfirm__confirm", size: "small", type: e3.confirmButtonType, onClick: C }, { default: l(() => [m(d(e3.confirmButtonText), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [e3.$slots.default ? { name: "default", fn: l(() => [u(e3.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, e3.$slots.reference ? { name: "default", fn: l(() => [u(e3.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout", "width"]));
} }), [["__scopeId", "data-v-3dbadee9"]]));
export {
  w as Y
};
