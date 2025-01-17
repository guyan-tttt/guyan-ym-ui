import { defineComponent as e, inject as l, computed as a, openBlock as t, createElementBlock as o, normalizeClass as s, withModifiers as i, renderSlot as n, createVNode as u, unref as d, useSlots as r, ref as p, reactive as c, provide as h, watch as v, onMounted as f, withCtx as m, createElementVNode as b, createBlock as g, Fragment as y, renderList as V, mergeProps as _, nextTick as k, h as x } from "vue";
import { a as I } from "./Input-BJnk8Nav.js";
import { a as M } from "./Tooltip-C2zg5-Ei.js";
import { a as w } from "./Icon-BPqbRGFK.js";
import { a as S, d as O, u as B } from "./hooks-Wd-CNMjI.js";
import { R as L, _ as D, d as j, w as F } from "./utils-BHtccd4_.js";
import { D as N, E as R, l as C, F as H, g as E, s as Y, j as A, G as W, v as $, b as z, f as U, A as q, e as G, H as K, h as P } from "./vendor-D1ZXl11B.js";
const T = Symbol("selectContext"), J = { modifiers: [{ name: "offset", options: { offset: [0, 9] } }, { name: "sameWidth", enabled: true, fn: ({ state: e2 }) => {
  e2.styles.popper.width = `${e2.rects.reference.width}px`;
}, phase: "beforeWrite", requires: ["computeStyles"] }] }, Q = ["id"], X = D(e({ name: "YmOption", __name: "Option", props: { value: {}, label: {}, disabled: { type: Boolean, default: false } }, setup(e2) {
  const r2 = e2, p2 = l(T), c2 = a(() => N(["label", "value"], (e3) => R(C(p2, ["hightedLine", "value", "key"]), C(r2, e3)))), h2 = a(() => {
    var _a;
    return ((_a = p2 == null ? void 0 : p2.selectStates.selectedOption) == null ? void 0 : _a.value) === r2.value;
  });
  function v2() {
    r2.disabled || (p2 == null ? void 0 : p2.handleSelect(r2));
  }
  return (e3, l2) => (t(), o("li", { class: s(["ym-select__menu-item", { "is-disabled": e3.disabled, "is-selected": h2.value, "is-highlighted": c2.value }]), id: `select-item-${e3.value}`, onClick: i(v2, ["stop"]) }, [n(e3.$slots, "default", {}, () => {
    var _a, _b;
    return [u(d(L), { vNode: ((_a = d(p2)) == null ? void 0 : _a.renderLabel) ? (_b = d(p2)) == null ? void 0 : _b.renderLabel(r2) : e3.label }, null, 8, ["vNode"])];
  }, true)], 10, Q));
} }), [["__scopeId", "data-v-97183b17"]]), Z = { key: 0, class: "ym-select__loading" }, ee = { key: 1, class: "ym-select__nodata" }, le = { key: 2, class: "ym-select__menu" }, ae = D(e({ name: "YmSelect", __name: "Select", props: { modelValue: {}, id: {}, options: { default: () => [] }, placeholder: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, renderLabel: {}, filterable: { type: Boolean }, filterMethod: {}, remote: { type: Boolean }, remoteMethod: {} }, emits: ["update:modelValue", "change", "visible-change", "clear", "focus", "blur"], setup(e2, { expose: l2, emit: n2 }) {
  const D2 = e2, F2 = n2, N2 = r(), Q2 = a(() => D2.disabled), ae2 = S().value, te2 = p(null), oe2 = p(), se = p(), ie = fe(D2.modelValue), ne = c({ highlightedIndex: -1, inputValue: (ie == null ? void 0 : ie.label) || "", loading: false, mouseHover: false, selectedOption: ie }), ue = p(false), { wrapperRef: de, isFocused: re, handlerBlur: pe, handlerFocus: ce } = O(oe2, { beforeBlur: () => {
  }, afterBlur: () => {
  }, afterFocus: () => {
  } });
  function he() {
    Q2.value || ve(!ue.value);
  }
  function ve(e3) {
    var _a;
    se.value && ((_a = C(se, ["value", e3 ? "show" : "hide"])) == null ? void 0 : _a(), D2.filterable && function(e4) {
      var _a2;
      D2.filterable && (e4 ? (ne.selectedOption && (ne.inputValue = ""), Fe()) : ne.inputValue = ((_a2 = ne.selectedOption) == null ? void 0 : _a2.label) ?? "");
    }(e3), ue.value = e3, F2("visible-change", e3), ne.highlightedIndex = -1);
  }
  function fe(e3) {
    return H(D2.options, (l3) => l3.value === e3);
  }
  const me = a(() => {
    var _a;
    return E((_a = N2.default) == null ? void 0 : _a.call(N2), (e3) => R(e3.type, X));
  }), be = a(() => Y(me.value) > 0), ge = a(() => D2.clearable && ne.mouseHover && "" !== ne.inputValue), ye = a(() => {
    var _a;
    let e3;
    if (be.value) {
      const l3 = (_a = [...Ie.value][ne.highlightedIndex]) == null ? void 0 : _a[0];
      e3 = Ie.value.get(l3);
    } else e3 = Me.value[ne.highlightedIndex];
    return e3;
  });
  function Ve() {
    var _a;
    (_a = oe2.value) == null ? void 0 : _a.clear(), ne.inputValue = "", ne.selectedOption = null, F2("clear"), F2("update:modelValue", ""), F2("change", "");
  }
  function _e(e3) {
    var _a;
    e3.disabled || (ne.inputValue = e3.label, ne.selectedOption = e3, F2("update:modelValue", e3.value), F2("change", e3.value), ve(false), (_a = oe2.value) == null ? void 0 : _a.focus());
  }
  function ke(e3) {
    re.value && k(() => {
      pe(new FocusEvent("focus", e3));
    });
  }
  function xe() {
    const e3 = fe(D2.modelValue);
    e3 && (ne.inputValue = e3.label, ne.selectedOption = e3);
  }
  h(T, { handleSelect: _e, selectStates: ne, highlightedLine: ye, renderLabel: function(e3) {
    return z(D2.renderLabel) ? D2.renderLabel(e3) : e3.label;
  } }), B(te2, (e3) => ke(e3)), v(() => D2.modelValue, () => {
    xe();
  }), l2({ blur: () => {
    ke();
  }, focus: () => {
    var _a;
    return (_a = oe2.value) == null ? void 0 : _a.focus();
  } });
  const Ie = p(/* @__PURE__ */ new Map()), Me = p(D2.options ?? []), we = a(() => be.value ? A(me.value, (e3) => ({ VNode: x(e3), props: q(e3.props, { disabled: true === e3.props.disabled || !G(e3.props.disabled) && !K(e3.props.disabled) }) })) : []), Se = a(() => !!D2.filterable && !Oe.value), Oe = a(() => be.value && Ie.value.size > 0 || !be.value && Y(Me.value) > 0), Be = a(() => be.value ? Ie.value.size - 1 : Y(Me.value) - 1), Le = async (e3, l3) => {
    if (!e3 || !z(e3)) return;
    let a2;
    ne.loading = true;
    try {
      a2 = await e3(l3);
    } catch (e4) {
      return j(e4), j("YmSelect", "callRemoteMethod error"), a2 = [], Promise.reject(e4);
    } finally {
      ne.loading = false;
    }
    return a2;
  }, De = (e3) => {
    Ie.value.clear(), U(e3, (e4) => {
      Ie.value.set(e4.VNode, e4.props);
    });
  }, je = a(() => D2.remote ? 300 : 100), Fe = W(() => {
    const e3 = ne.inputValue;
    ne.highlightedIndex = -1, be.value ? (async (e4) => {
      if (D2.filterable) {
        if (D2.remote && D2.remoteMethod && z(D2.remoteMethod)) return await Le(D2.remoteMethod, e4), void De(we.value);
        if (D2.filterMethod && z(D2.filterMethod)) {
          const l3 = A(D2.filterMethod(e4), "value");
          De(E(we.value, (e5) => P(l3, C(e5, ["props", "value"]))));
        } else De(E(we.value, (l3) => P(C(l3, ["props", "label"]), e4)));
      }
    })(e3) : (async (e4) => {
      D2.filterable && (D2.remote && D2.remoteMethod && z(D2.remoteMethod) ? Me.value = await Le(D2.remoteMethod, e4) : D2.filterMethod && z(D2.filterMethod) ? Me.value = D2.filterMethod(e4) : Me.value = E(D2.options, (l3) => P(l3.label, e4)));
    })(e3);
  }, je.value), Ne = a(() => D2.filterable && ne.selectedOption && ue.value ? ne.selectedOption.label : D2.placeholder);
  f(() => {
    xe();
  }), v(() => D2.options, (e3) => {
    Me.value = e3 ?? [];
  }), v(() => we.value, (e3) => {
    De(e3);
  }, { immediate: true });
  const Re = function({ isDropdownVisible: e3, controlVisible: l3, selectStates: a2, highlightedLine: t2, handleSelect: o2, hasData: s2, lastIndex: i2 }) {
    const n3 = /* @__PURE__ */ new Map();
    return n3.set("Enter", () => {
      e3.value ? a2.highlightedIndex >= 0 && t2.value ? o2(t2.value) : l3(false) : l3(true);
    }), n3.set("Escape", () => e3.value && l3(!e3.value)), n3.set("ArrowUp", (e4) => {
      e4.preventDefault(), s2.value && (-1 !== a2.highlightedIndex && 0 !== a2.highlightedIndex ? a2.highlightedIndex-- : a2.highlightedIndex = i2.value);
    }), n3.set("ArrowDown", (e4) => {
      e4.preventDefault(), s2.value && (-1 !== a2.highlightedIndex && a2.highlightedIndex !== i2.value ? a2.highlightedIndex++ : a2.highlightedIndex = 0);
    }), n3;
  }({ isDropdownVisible: ue, controlVisible: ve, selectStates: ne, highlightedLine: ye, hasData: Oe, lastIndex: Be, handleSelect: _e }), Ce = (e3) => {
    var _a;
    Re.has(e3.key) && ((_a = Re.get(e3.key)) == null ? void 0 : _a(e3));
  };
  return (e3, l3) => (t(), o("div", { ref_key: "selectRef", ref: te2, class: s(["ym-select", { "is-disabled": Q2.value }]), onClick: i(he, ["stop"]), onMouseenter: l3[2] || (l3[2] = (e4) => ne.mouseHover = true), onMouseleave: l3[3] || (l3[3] = (e4) => ne.mouseHover = false) }, [u(d(M), { ref_key: "tooltipRef", ref: se, placement: "bottom-start", "popper-options": d(J), onClickOutside: l3[1] || (l3[1] = (e4) => ve(false)), manual: "" }, { default: m(() => [b("div", { ref_key: "inputWrapperRef", ref: de }, [u(d(I), { ref_key: "inputRef", ref: oe2, modelValue: ne.inputValue, "onUpdate:modelValue": l3[0] || (l3[0] = (e4) => ne.inputValue = e4), id: d(ae2), disabled: Q2.value, placeholder: e3.filterable ? Ne.value : e3.placeholder, readonly: !e3.filterable || !ue.value, onFocus: d(ce), onBlur: d(pe), onInput: d(Fe), onKeydown: Ce }, { suffix: m(() => [ge.value ? (t(), g(d(w), { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: i(Ve, ["stop"]), onMousedown: i(d($), ["prevent"]) }, null, 8, ["onMousedown"])) : (t(), g(d(w), { key: 1, class: s(["header-angle", { "is-active": ue.value }]), icon: "angle-down" }, null, 8, ["class"]))]), _: 1 }, 8, ["modelValue", "id", "disabled", "placeholder", "readonly", "onFocus", "onBlur", "onInput"])], 512)]), content: m(() => [ne.loading ? (t(), o("div", Z, [u(d(w), { icon: "spinner", spin: "" })])) : e3.filterable && Se.value ? (t(), o("div", ee, " No Data ")) : (t(), o("ul", le, [be.value ? (t(true), o(y, { key: 1 }, V(Ie.value, ([e4, l4]) => (t(), g(d(L), { key: l4.value, vNode: e4 }, null, 8, ["vNode"]))), 128)) : (t(true), o(y, { key: 0 }, V(Me.value, (e4) => (t(), g(X, _({ key: e4.value, ref_for: true }, e4), null, 16))), 128))]))]), _: 1 }, 8, ["popper-options"])], 34));
} }), [["__scopeId", "data-v-10688a69"]]), te = F(ae), oe = F(X);
export {
  ae as Y,
  te as a,
  oe as b
};
