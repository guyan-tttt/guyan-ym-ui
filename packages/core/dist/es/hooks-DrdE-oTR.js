import { isRef as e, watch as n, onMounted as t, onBeforeUnmount as r, unref as v } from "vue";
function l(l2, u) {
  var a, i, o;
  a = document, i = "click", o = (e2) => {
    l2.value && e2.target && (l2.value.contains(e2.target) || u(e2));
  }, e(a) ? n(a, (e2, n2) => {
    null == n2 || n2.removeEventListener(i, o), null == e2 || e2.addEventListener(i, o);
  }) : t(() => null == a ? void 0 : a.addEventListener(i, o)), r(() => {
    var e2;
    return null == (e2 = v(a)) ? void 0 : e2.removeEventListener(i, o);
  });
}
export {
  l as u
};
