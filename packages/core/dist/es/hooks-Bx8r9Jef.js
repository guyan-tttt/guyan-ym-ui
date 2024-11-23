import { isRef as e, watch as t, onMounted as n, onBeforeUnmount as r, unref as a, computed as o, getCurrentInstance as l, useSlots as i, watchEffect as c, inject as s } from "vue";
import { f as p, e as m, g as d, h as u, a as h, n as v, o as g } from "./vendor-D9tc2vMP.js";
function f(o2, l2) {
  var i2, c2, s2;
  i2 = document, c2 = "click", s2 = (e2) => {
    o2.value && e2.target && (o2.value.contains(e2.target) || l2(e2));
  }, e(i2) ? t(i2, (e2, t2) => {
    null == t2 || t2.removeEventListener(c2, s2), null == e2 || e2.addEventListener(c2, s2);
  }) : n(() => null == i2 ? void 0 : i2.addEventListener(c2, s2)), r(() => {
    var e2;
    return null == (e2 = a(i2)) ? void 0 : e2.removeEventListener(c2, s2);
  });
}
const x = { prefix: Math.floor(1e4 * Math.random()), current: 0 };
function T(e2 = "ym") {
  return o(() => `${e2}-${x.prefix}-${x.current++}`);
}
const w = (e2, t2) => p(e2, (e3) => {
  m(t2) && t2(e3), e3.children && w(e3.children, t2);
});
function y() {
  var e2, t2;
  const n2 = /* @__PURE__ */ new Map(), r2 = l(), a2 = null == (t2 = null == (e2 = i()) ? void 0 : e2.default) ? void 0 : t2.call(e2);
  c(() => {
    (null == r2 ? void 0 : r2.props.disabled) ? w(a2 ?? [], (e3) => {
      n2.has(e3) && (e3.props = n2.get(e3));
    }) : w(a2 ?? [], (e3) => {
      e3.props && (n2.set(e3, d(e3.props)), e3.props = u(null == e3 ? void 0 : e3.props, { style: { cursor: "not-allowed", color: "var(--ym-text-color-placeholder)" } }));
    });
  });
}
const M = { name: "zh-cn", el: { colorpicker: { confirm: "确定", clear: "清空" }, datepicker: { now: "此刻", today: "今天", cancel: "取消", clear: "清空", confirm: "确定", selectDate: "选择日期", selectTime: "选择时间", startDate: "开始日期", startTime: "开始时间", endDate: "结束日期", endTime: "结束时间", prevYear: "前一年", nextYear: "后一年", prevMonth: "上个月", nextMonth: "下个月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, select: { loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择" }, cascader: { noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择", noData: "暂无数据" }, pagination: { goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页", page: "页", prev: "上一页", next: "下一页", currentPage: "第 {pager} 页", prevPages: "向前 {pager} 页", nextPages: "向后 {pager} 页", deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档" }, messagebox: { title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!" }, upload: { deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传" }, table: { emptyText: "暂无数据", confirmFilter: "筛选", resetFilter: "重置", clearFilter: "全部", sumText: "合计" }, tour: { next: "下一步", previous: "上一步", finish: "结束导览" }, tree: { emptyText: "暂无数据" }, transfer: { noMatch: "无匹配数据", noData: "无数据", titles: ["列表 1", "列表 2"], filterPlaceholder: "请输入搜索内容", noCheckedFormat: "共 {total} 项", hasCheckedFormat: "已选 {checked}/{total} 项" }, image: { error: "加载失败" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" }, carousel: { leftArrow: "上一张幻灯片", rightArrow: "下一张幻灯片", indicator: "幻灯片切换至索引 {index}" } } };
function k(e2) {
  return h(s(v, g({ locale: M.name, messages: { en: M.el } })), "install");
}
export {
  T as a,
  y as b,
  k as c,
  f as u
};
