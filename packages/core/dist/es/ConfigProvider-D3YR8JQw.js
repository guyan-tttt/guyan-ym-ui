import { ref as e, getCurrentInstance as t, inject as o, computed as a, provide as n, unref as r, defineComponent as l, renderSlot as i } from "vue";
import { m as s, n as c, o as m } from "./vendor-D1ZXl11B.js";
import { d as p, w as u } from "./utils-DY8rdjAx.js";
const d = Symbol(), h = { name: "zh-cn", el: { colorpicker: { confirm: "确定", clear: "清空" }, datepicker: { now: "此刻", today: "今天", cancel: "取消", clear: "清空", confirm: "确定", selectDate: "选择日期", selectTime: "选择时间", startDate: "开始日期", startTime: "开始时间", endDate: "结束日期", endTime: "结束时间", prevYear: "前一年", nextYear: "后一年", prevMonth: "上个月", nextMonth: "下个月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, select: { loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择" }, cascader: { noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择", noData: "暂无数据" }, pagination: { goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页", page: "页", prev: "上一页", next: "下一页", currentPage: "第 {pager} 页", prevPages: "向前 {pager} 页", nextPages: "向后 {pager} 页", deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档" }, messagebox: { title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!" }, upload: { deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传" }, table: { emptyText: "暂无数据", confirmFilter: "筛选", resetFilter: "重置", clearFilter: "全部", sumText: "合计" }, tour: { next: "下一步", previous: "上一步", finish: "结束导览" }, tree: { emptyText: "暂无数据" }, transfer: { noMatch: "无匹配数据", noData: "无数据", titles: ["列表 1", "列表 2"], filterPlaceholder: "请输入搜索内容", noCheckedFormat: "共 {total} 项", hasCheckedFormat: "已选 {checked}/{total} 项" }, image: { error: "加载失败" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" }, carousel: { leftArrow: "上一张幻灯片", rightArrow: "下一张幻灯片", indicator: "幻灯片切换至索引 {index}" } } }, g = e();
function v(e2, n2 = void 0) {
  const r2 = t() ? o(d, g) : g;
  return e2 ? a(() => {
    var _a;
    return ((_a = r2.value) == null ? void 0 : _a[e2]) ?? n2;
  }) : r2;
}
function f(e2 = { locale: h }, o2, l2 = false) {
  const i2 = t(), u2 = i2 ? v() : void 0, f2 = (o2 == null ? void 0 : o2.provide) ?? (i2 ? n : void 0);
  if (!f2) return void p("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup()");
  const x2 = a(() => {
    const t2 = r(e2);
    return (u2 == null ? void 0 : u2.value) ? s(u2.value, t2) : t2;
  }), C = a(() => ((e3) => {
    var _a, _b, _c;
    const t2 = (t3) => s(t3, (e3 == null ? void 0 : e3.extendsI18nMsg) ?? {});
    return m((e3 == null ? void 0 : e3.locale) ? { locale: ((_a = e3.locale) == null ? void 0 : _a.name) || "zhCn", messages: t2({ [((_b = e3.locale) == null ? void 0 : _b.name) || "zhCn"]: ((_c = e3.locale) == null ? void 0 : _c.el) || {} }) } : { locale: "zhCn", messages: t2({ zhCn: h.el }) });
  })(x2.value));
  return f2(d, x2), f2(c, C.value), o2 && o2.use(C.value), !l2 && g.value || (g.value = x2.value), x2;
}
const x = u(l({ name: "YMConfigProvider", __name: "ConfigProvider", props: { locale: {}, extendsI18nMsg: {} }, setup(e2) {
  const t2 = f(e2);
  return (e3, o2) => i(e3.$slots, "default", { config: r(t2) });
} }));
export {
  h as C,
  x as Y,
  f as p,
  v as u
};
