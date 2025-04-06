import { i as r, a as e, b as t } from "./vendor-D1ZXl11B.js";
import { defineComponent as o } from "vue";
const n = (r2, e2) => {
  const t2 = r2.__vccOpts || r2;
  for (const [r3, o2] of e2) t2[r3] = o2;
  return t2;
};
function s(r2) {
  return r2.install = (e2) => {
    const t2 = r2.name;
    e2.component(t2, r2);
  }, r2;
}
const a = (r2, e2) => (r2.install = (t2) => {
  t2.config.globalProperties[e2] = r2;
}, r2);
class c extends Error {
  constructor(r2) {
    super(r2), this.name = "YmUIError";
  }
}
function i(e2, t2) {
  if ("production" !== process.env.NODE_ENV) {
    const o2 = r(e2) ? new c(`[${e2}]: ${t2}`) : e2;
    console.warn(o2);
  }
}
function u(t2, o2 = "px") {
  return t2 ? e(t2) || r(n2 = t2) && !Number.isNaN(Number(n2)) ? `${t2}${o2}` : r(t2) ? t2 : void i("utils/style", "binding value must be a string or number") : "";
  var n2;
}
const l = async (r2, e2 = {}) => {
  const t2 = new AbortController(), o2 = e2.timeout ? setTimeout(() => t2.abort(), e2.timeout) : null;
  try {
    const n2 = new Headers(e2.headers);
    !n2.has("Content-Type") && e2.data instanceof FormData && n2.set("Content-Type", "multipart/form-data");
    const s2 = await fetch(r2, { method: e2.method || "GET", headers: n2, body: e2.data, credentials: e2.credentials || "same-origin", signal: t2.signal });
    return clearTimeout(o2), s2.ok ? { response: s2 } : { error: `HTTP error! status: ${s2.status}` };
  } catch (r3) {
    return clearTimeout(o2), r3 instanceof Error ? { error: "AbortError" === r3.name ? "请求超时" : r3.message } : { error: "未知网络错误" };
  }
}, m = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), d = o({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => t(r2.vNode) ? r2.vNode() : r2.vNode });
export {
  d as R,
  n as _,
  u as a,
  a as b,
  i as d,
  l as f,
  m as t,
  s as w
};
