import { isRef as e, watch as n, onMounted as r, onBeforeUnmount as t, unref as a, computed as o } from "vue";
function u(o2, u2) {
  var i2, v2, l;
  i2 = document, v2 = "click", l = (e2) => {
    o2.value && e2.target && (o2.value.contains(e2.target) || u2(e2));
  }, e(i2) ? n(i2, (e2, n2) => {
    null == n2 || n2.removeEventListener(v2, l), null == e2 || e2.addEventListener(v2, l);
  }) : r(() => null == i2 ? void 0 : i2.addEventListener(v2, l)), t(() => {
    var e2;
    return null == (e2 = a(i2)) ? void 0 : e2.removeEventListener(v2, l);
  });
}
const i = { prefix: Math.floor(1e4 * Math.random()), current: 0 };
function v(e2 = "ym") {
  return o(() => `${e2}-${i.prefix}-${i.current++}`);
}
export {
  v as a,
  u
};
