import { i as r, a as n, z as e } from "./vendor-BXKGMoVT.js";
import { defineComponent as o } from "vue";
const s = (r2, n2) => {
  const e2 = r2.__vccOpts || r2;
  for (const [r3, o2] of n2) e2[r3] = o2;
  return e2;
};
function c(r2) {
  return r2.install = (n2) => {
    const e2 = r2.name;
    n2.component(e2, r2);
  }, r2;
}
const t = (r2, n2) => (r2.install = (e2) => {
  e2.config.globalProperties[n2] = r2;
}, r2);
class i extends Error {
  constructor(r2) {
    super(r2), this.name = "YmUIError";
  }
}
function a(n2, e2) {
  if ("production" !== process.env.NODE_ENV) {
    const o2 = r(n2) ? new i(`[${n2}]: ${e2}`) : n2;
    console.warn(o2);
  }
}
function u(e2, o2 = "px") {
  return e2 ? n(e2) || r(s2 = e2) && Number.isNaN(Number(s2)) ? `${e2}${o2}` : r(e2) ? e2 : void a("utils/style", "binding value must be a string or number") : "";
  var s2;
}
const l = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), m = o({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => e(r2.vNode) ? r2.vNode() : r2.vNode });
export {
  m as R,
  s as _,
  u as a,
  t as b,
  a as d,
  l as t,
  c as w
};
