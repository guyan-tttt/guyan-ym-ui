import { isRef as e, watch as t, onMounted as a, onBeforeUnmount as n, unref as r, computed as o, getCurrentInstance as l, useSlots as c, watchEffect as s, inject as i, ref as u } from "vue";
import { f as d, x as p, j as m, y as f, a as v, n as h, o as g } from "./vendor-Bde6p_Xx.js";
function x(o2, l2, c2) {
  e(o2) ? t(o2, (e2, t2) => {
    null == t2 || t2.removeEventListener(l2, c2), null == e2 || e2.addEventListener(l2, c2);
  }) : a(() => null == o2 ? void 0 : o2.addEventListener(l2, c2)), n(() => {
    var e2;
    return null == (e2 = r(o2)) ? void 0 : e2.removeEventListener(l2, c2);
  });
}
function T(e2, t2) {
  x(document, "click", (a2) => {
    e2.value && a2.target && (e2.value.contains(a2.target) || t2(a2));
  });
}
const b = { prefix: Math.floor(1e4 * Math.random()), current: 0 };
function w(e2 = "ym") {
  return o(() => `${e2}-${b.prefix}-${b.current++}`);
}
const y = (e2, t2) => d(e2, (e3) => {
  p(t2) && t2(e3), e3.children && y(e3.children, t2);
});
function k() {
  var e2, t2;
  const a2 = /* @__PURE__ */ new Map(), n2 = l(), r2 = null == (t2 = null == (e2 = c()) ? void 0 : e2.default) ? void 0 : t2.call(e2);
  s(() => {
    (null == n2 ? void 0 : n2.props.disabled) ? y(r2 ?? [], (e3) => {
      a2.has(e3) && (e3.props = a2.get(e3));
    }) : y(r2 ?? [], (e3) => {
      e3.props && (a2.set(e3, m(e3.props)), e3.props = f(null == e3 ? void 0 : e3.props, { style: { cursor: "not-allowed", color: "var(--ym-text-color-placeholder)" } }));
    });
  });
}
const F = { name: "zh-cn", el: { colorpicker: { confirm: "确定", clear: "清空" }, datepicker: { now: "此刻", today: "今天", cancel: "取消", clear: "清空", confirm: "确定", selectDate: "选择日期", selectTime: "选择时间", startDate: "开始日期", startTime: "开始时间", endDate: "结束日期", endTime: "结束时间", prevYear: "前一年", nextYear: "后一年", prevMonth: "上个月", nextMonth: "下个月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, select: { loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择" }, cascader: { noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择", noData: "暂无数据" }, pagination: { goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页", page: "页", prev: "上一页", next: "下一页", currentPage: "第 {pager} 页", prevPages: "向前 {pager} 页", nextPages: "向后 {pager} 页", deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档" }, messagebox: { title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!" }, upload: { deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传" }, table: { emptyText: "暂无数据", confirmFilter: "筛选", resetFilter: "重置", clearFilter: "全部", sumText: "合计" }, tour: { next: "下一步", previous: "上一步", finish: "结束导览" }, tree: { emptyText: "暂无数据" }, transfer: { noMatch: "无匹配数据", noData: "无数据", titles: ["列表 1", "列表 2"], filterPlaceholder: "请输入搜索内容", noCheckedFormat: "共 {total} 项", hasCheckedFormat: "已选 {checked}/{total} 项" }, image: { error: "加载失败" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" }, carousel: { leftArrow: "上一张幻灯片", rightArrow: "下一张幻灯片", indicator: "幻灯片切换至索引 {index}" } } };
function M(e2) {
  return v(i(h, g({ locale: F.name, messages: { en: F.el } })), "install");
}
function B(e2) {
  const t2 = o(() => e2.getLastBottomOffset()), a2 = o(() => t2.value + e2.offset), n2 = o(() => a2.value + e2.boxHeight.value);
  return { topOffset: a2, bottomOffset: n2 };
}
const D = u(0);
function j(e2 = 2e3) {
  const t2 = u(e2), a2 = o(() => t2.value + D.value);
  return { initialValue: t2, currentZIndex: a2, nextZIndex: () => (D.value++, a2.value) };
}
function L(e2, { afterBlur: t2, afterFocus: a2, beforeBlur: n2 } = {}) {
  const r2 = l(), { emit: o2 } = r2, c2 = u(), s2 = u(false);
  return x(c2, "click", () => {
    var t3;
    null == (t3 = e2.value) || t3.focus();
  }), { wrapperRef: c2, isFocused: s2, handlerFocus: (e3) => {
    s2.value || (s2.value = true, o2("focus", e3), null == a2 || a2());
  }, handlerBlur: (e3) => {
    var a3;
    p(n2) && n2(e3) || e3.relatedTarget && (null == (a3 = c2.value) ? void 0 : a3.contains(e3.relatedTarget)) || s2.value && (s2.value = false, o2("blur", e3), null == t2 || t2());
  } };
}
export {
  w as a,
  k as b,
  L as c,
  j as d,
  B as e,
  x as f,
  M as g,
  T as u
};
