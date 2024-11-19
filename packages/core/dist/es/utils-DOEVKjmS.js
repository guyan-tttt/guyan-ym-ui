import { f as r, c as n, e } from "./vendor-mRsNTCw1.js";
function s(n2) {
  return (e2) => r(n2, (r2) => e2.use(r2));
}
function c(r2) {
  return r2.install = (n2) => {
    const e2 = r2.name;
    n2.component(e2, r2);
  }, r2;
}
class o extends Error {
  constructor(r2) {
    super(r2), this.name = "YmUIError";
  }
}
function t(r2, e2) {
  if ("production" !== process.env.NODE_ENV) {
    const s2 = n(r2) ? new o(`[${r2}]: ${e2}`) : r2;
    console.warn(s2);
  }
}
function a(r2, s2 = "px") {
  return r2 ? e(r2) || n(c2 = r2) && Number.isNaN(Number(c2)) ? `${r2}${s2}` : n(r2) ? r2 : void t("utils/style", "binding value must be a string or number") : "";
  var c2;
}
const i = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), u = (r2, n2) => {
  const e2 = r2.__vccOpts || r2;
  for (const [r3, s2] of n2) e2[r3] = s2;
  return e2;
};
export {
  u as _,
  a,
  t as d,
  s as m,
  i as t,
  c as w
};
