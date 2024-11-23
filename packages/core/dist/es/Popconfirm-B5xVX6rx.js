import { defineComponent as o, ref as t, computed as e, openBlock as n, createBlock as i, createSlots as c, withCtx as l, createElementVNode as a, normalizeStyle as f, createCommentVNode as r, createTextVNode as m, toDisplayString as s, createVNode as p, unref as u, renderSlot as d } from "vue";
import { Y as y } from "./Tooltip-BB5XoXJy.js";
import { Y as _ } from "./Icon-D6pQb2E-.js";
import { b as h } from "./Button-DIZQGo-E.js";
import { a as B, _ as v, w as T } from "./utils-qFOQpxdb.js";
import { f as k } from "./hooks-CJ5-z7fg.js";
const w = { class: "ym-popconfirm__main" }, x = { class: "ym-popconfirm__action" }, j = T(v(o({ name: "YmPopconfirm", __name: "Popconfirm", props: { title: { default: "确定当前操作吗？" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: { default: "default" }, icon: { default: "check-circle" }, iconColor: { default: "green" }, hideIcon: { type: Boolean, default: false }, hideAfter: { default: 200 }, width: { default: 200 } }, emits: ["confirm", "cancel"], setup(o2, { emit: v2 }) {
  const T2 = o2, j2 = v2, C = t(), I = e(() => ({ width: B(T2.width) }));
  function Y() {
    var _a;
    (_a = C.value) == null ? void 0 : _a.hide();
  }
  function $(o3) {
    j2("confirm", o3), Y();
  }
  function g(o3) {
    j2("cancel", o3), Y();
  }
  const { t: z } = k();
  return (o3, t2) => (n(), i(y, { ref_key: "tooltipRef", ref: C, "hide-timeout": o3.hideAfter, trigger: "click", width: o3.width }, c({ content: l(() => [a("div", { class: "ym-popconfirm", style: f(I.value) }, [a("div", w, [!o3.hideIcon && o3.icon ? (n(), i(_, { key: 0, icon: o3.icon, color: o3.iconColor }, null, 8, ["icon", "color"])) : r("", true), m(" " + s(o3.title), 1)]), a("div", x, [p(h, { class: "ym-popconfirm__cancel", size: "small", type: o3.cancelButtonType, onClick: g }, { default: l(() => [m(s(o3.cancelButtonText || u(z)("popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), p(h, { class: "ym-popconfirm__confirm", size: "small", type: o3.confirmButtonType, onClick: $ }, { default: l(() => [m(s(o3.confirmButtonText || u(z)("popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [o3.$slots.default ? { name: "default", fn: l(() => [d(o3.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, o3.$slots.reference ? { name: "default", fn: l(() => [d(o3.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout", "width"]));
} }), [["__scopeId", "data-v-cf34893e"]]));
export {
  j as Y
};
