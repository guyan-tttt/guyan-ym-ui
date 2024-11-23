import { j as r, k as n } from "./vendor-D9tc2vMP.js";
const c = (r2, n2) => {
  const c2 = r2.__vccOpts || r2;
  for (const [r3, s2] of n2) c2[r3] = s2;
  return c2;
};
function s(r2) {
  return r2.install = (n2) => {
    const c2 = r2.name;
    n2.component(c2, r2);
  }, r2;
}
class e extends Error {
  constructor(r2) {
    super(r2), this.name = "YmUIError";
  }
}
function o(n2, c2) {
  if ("production" !== process.env.NODE_ENV) {
    const s2 = r(n2) ? new e(`[${n2}]: ${c2}`) : n2;
    console.warn(s2);
  }
}
function t(c2, s2 = "px") {
  return c2 ? n(c2) || r(e2 = c2) && Number.isNaN(Number(e2)) ? `${c2}${s2}` : r(c2) ? c2 : void o("utils/style", "binding value must be a string or number") : "";
  var e2;
}
const a = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]);
export {
  c as _,
  t as a,
  o as d,
  a as t,
  s as w
};
