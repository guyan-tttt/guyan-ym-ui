import { defineComponent as e, inject as l, computed as a, openBlock as t, createElementBlock as o, normalizeClass as s, withModifiers as i, renderSlot as n, createVNode as u, unref as d, useSlots as r, ref as c, reactive as p, provide as h, watch as v, onMounted as f, withCtx as m, createElementVNode as b, createBlock as g, createCommentVNode as y, Fragment as V, renderList as _, mergeProps as x, nextTick as k, h as I } from "vue";
import { a as w } from "./Input-CM-ntk6l.js";
import { a as M } from "./Tooltip-NeAqni0p.js";
import { a as S } from "./Icon-DfJGnspx.js";
import { a as O, c as B, u as L } from "./hooks-DZI5xxe9.js";
import { R as j, _ as D, d as N, w as R } from "./utils-JcduRB7A.js";
import { r as F, u as C, j as H, v as Y, w as z, x as A, y as E, z as W, b as $, k as U, f as q, l as K, i as P, A as T, B as G } from "./vendor-IunAiIJb.js";
const J = Symbol("selectContext"), Q = { modifiers: [{ name: "offset", options: { offset: [0, 9] } }, { name: "sameWidth", enabled: true, fn: ({ state: e2 }) => {
  e2.styles.popper.width = `${e2.rects.reference.width}px`;
}, phase: "beforeWrite", requires: ["computeStyles"] }] }, X = ["id"], Z = D(e({ name: "YmOption", __name: "Option", props: { value: {}, label: {}, disabled: { type: Boolean, default: false } }, setup(e2) {
  const r2 = e2, c2 = l(J), p2 = a(() => F(["label", "value"], (e3) => C(H(c2, ["hightedLine", "value", "key"]), H(r2, e3)))), h2 = a(() => {
    var _a;
    return ((_a = c2 == null ? void 0 : c2.selectStates.selectedOption) == null ? void 0 : _a.value) === r2.value;
  });
  function v2() {
    r2.disabled || (c2 == null ? void 0 : c2.handleSelect(r2));
  }
  return (e3, l2) => (t(), o("li", { class: s(["ym-select__menu-item", { "is-disabled": e3.disabled, "is-selected": h2.value, "is-highlighted": p2.value }]), id: `select-item-${e3.value}`, onClick: i(v2, ["stop"]) }, [n(e3.$slots, "default", {}, () => {
    var _a, _b;
    return [u(d(j), { vNode: ((_a = d(c2)) == null ? void 0 : _a.renderLabel) ? (_b = d(c2)) == null ? void 0 : _b.renderLabel(r2) : e3.label }, null, 8, ["vNode"])];
  }, true)], 10, X));
} }), [["__scopeId", "data-v-97183b17"]]), ee = { key: 0, class: "ym-select__loading" }, le = { key: 1, class: "ym-select-nodata" }, ae = { class: "ym-select__menu" }, te = R(D(e({ name: "YmSelect", __name: "Select", props: { modelValue: {}, id: {}, options: { default: () => [] }, placeholder: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, renderLabel: {}, filterable: { type: Boolean }, filterMethod: {}, remote: { type: Boolean }, remoteMethod: {} }, emits: ["update:modelValue", "change", "visible-change", "clear", "focus", "blur"], setup(e2, { expose: l2, emit: n2 }) {
  const D2 = e2, R2 = n2, F2 = r(), X2 = a(() => D2.disabled), te2 = O().value, oe2 = c(null), se = c(), ie = c(), ne = me(D2.modelValue), ue = p({ highlightedIndex: -1, inputValue: (ne == null ? void 0 : ne.label) || "", loading: false, mouseHover: false, selectedOption: ne }), de = c(false), { wrapperRef: re, isFocused: ce, handlerBlur: pe, handlerFocus: he } = B(se, { beforeBlur: () => {
  }, afterBlur: () => {
  }, afterFocus: () => {
  } });
  function ve() {
    X2.value || fe(!de.value);
  }
  function fe(e3) {
    var _a;
    ie.value && ((_a = H(ie, ["value", e3 ? "show" : "hide"])) == null ? void 0 : _a(), D2.filterable && function(e4) {
      var _a2;
      D2.filterable && (e4 ? (ue.selectedOption && (ue.inputValue = ""), Re()) : ue.inputValue = ((_a2 = ue.selectedOption) == null ? void 0 : _a2.label) ?? "");
    }(e3), de.value = e3, R2("visible-change", e3), ue.highlightedIndex = -1);
  }
  function me(e3) {
    return Y(D2.options, (l3) => l3.value === e3);
  }
  const be = a(() => {
    var _a;
    return z((_a = F2.default) == null ? void 0 : _a.call(F2), (e3) => C(e3.type, Z));
  }), ge = a(() => A(be.value) > 0), ye = a(() => D2.clearable && ue.mouseHover && "" !== ue.inputValue), Ve = a(() => {
    var _a;
    let e3;
    if (ge.value) {
      const l3 = (_a = [...we.value][ue.highlightedIndex]) == null ? void 0 : _a[0];
      e3 = we.value.get(l3);
    } else e3 = Me.value[ue.highlightedIndex];
    return e3;
  });
  function _e() {
    var _a;
    (_a = se.value) == null ? void 0 : _a.clear(), ue.inputValue = "", ue.selectedOption = null, R2("clear"), R2("update:modelValue", ""), R2("change", "");
  }
  function xe(e3) {
    var _a;
    e3.disabled || (ue.inputValue = e3.label, ue.selectedOption = e3, R2("update:modelValue", e3.value), R2("change", e3.value), fe(false), (_a = se.value) == null ? void 0 : _a.focus());
  }
  function ke(e3) {
    ce.value && k(() => {
      pe(new FocusEvent("focus", e3));
    });
  }
  function Ie() {
    const e3 = me(D2.modelValue);
    e3 && (ue.inputValue = e3.label, ue.selectedOption = e3);
  }
  h(J, { handleSelect: xe, selectStates: ue, highlightedLine: Ve, renderLabel: function(e3) {
    return U(D2.renderLabel) ? D2.renderLabel(e3) : e3.label;
  } }), L(oe2, (e3) => ke(e3)), v(() => D2.modelValue, () => {
    Ie();
  }), l2({ blur: () => {
    ke();
  }, focus: () => {
    var _a;
    return (_a = se.value) == null ? void 0 : _a.focus();
  } });
  const we = c(/* @__PURE__ */ new Map()), Me = c(D2.options ?? []), Se = a(() => ge.value ? E(be.value, (e3) => ({ VNode: I(e3), props: K(e3.props, { disabled: true === e3.props.disabled || !P(e3.props.disabled) && !T(e3.props.disabled) }) })) : []), Oe = a(() => !!D2.filterable && !Be.value), Be = a(() => ge.value && we.value.size > 0 || !ge.value && A(Me.value) > 0), Le = a(() => ge.value ? we.value.size - 1 : A(Me.value) - 1), je = async (e3, l3) => {
    if (!e3 || !U(e3)) return;
    let a2;
    ue.loading = true;
    try {
      a2 = await e3(l3);
    } catch (e4) {
      return N(e4), N("YmSelect", "callRemoteMethod error"), a2 = [], Promise.reject(e4);
    }
    return a2;
  }, De = (e3) => {
    we.value.clear(), q(e3, (e4) => {
      we.value.set(e4.VNode, e4.props);
    });
  }, Ne = a(() => D2.remote ? 300 : 100), Re = W(() => {
    const e3 = ue.inputValue;
    ue.highlightedIndex = -1, ge.value ? (async (e4) => {
      if (D2.filterable) {
        if (D2.remote && D2.remoteMethod && U(D2.remoteMethod)) return await je(D2.remoteMethod, e4), void De(Se.value);
        if (D2.filterMethod && U(D2.filterMethod)) {
          const l3 = E(D2.filterMethod(e4), "value");
          De(z(Se.value, (e5) => G(l3, H(e5, ["props", "value"]))));
        } else De(z(Se.value, (l3) => G(H(l3, ["props", "label"]), e4)));
      }
    })(e3) : (async (e4) => {
      D2.filterable && (D2.remote && D2.remoteMethod && U(D2.remoteMethod) ? Me.value = await je(D2.remoteMethod, e4) : D2.filterMethod && U(D2.filterMethod) ? Me.value = D2.filterMethod(e4) : Me.value = z(D2.options, (l3) => G(l3.label, e4)));
    })(e3);
  }, Ne.value), Fe = a(() => D2.filterable && ue.selectedOption && de.value ? ue.selectedOption.label : D2.placeholder);
  f(() => {
    Ie();
  }), v(() => D2.options, (e3) => {
    Me.value = e3 ?? [];
  }), v(() => Se.value, (e3) => {
    De(e3);
  }, { immediate: true });
  const Ce = function({ isDropdownVisible: e3, controlVisible: l3, selectStates: a2, highlightedLine: t2, handleSelect: o2, hasData: s2, lastIndex: i2 }) {
    const n3 = /* @__PURE__ */ new Map();
    return n3.set("Enter", () => {
      e3.value ? a2.highlightedIndex >= 0 && t2.value ? o2(t2.value) : l3(false) : l3(true);
    }), n3.set("Escape", () => e3.value && l3(!e3.value)), n3.set("ArrowUp", (e4) => {
      e4.preventDefault(), s2.value && (-1 !== a2.highlightedIndex && 0 !== a2.highlightedIndex ? a2.highlightedIndex-- : a2.highlightedIndex = i2.value);
    }), n3.set("ArrowDown", (e4) => {
      e4.preventDefault(), s2.value && (-1 !== a2.highlightedIndex && a2.highlightedIndex !== i2.value ? a2.highlightedIndex++ : a2.highlightedIndex = 0);
    }), n3;
  }({ isDropdownVisible: de, controlVisible: fe, selectStates: ue, highlightedLine: Ve, hasData: Be, lastIndex: Le, handleSelect: xe }), He = (e3) => {
    var _a;
    Ce.has(e3.key) && ((_a = Ce.get(e3.key)) == null ? void 0 : _a(e3));
  };
  return (e3, l3) => (t(), o("div", { ref_key: "selectRef", ref: oe2, class: s(["ym-select", { "is-disabled": X2.value }]), onClick: i(ve, ["stop"]), onMouseenter: l3[2] || (l3[2] = (e4) => ue.mouseHover = true), onMouseleave: l3[3] || (l3[3] = (e4) => ue.mouseHover = false) }, [u(d(M), { ref_key: "tooltipRef", ref: ie, placement: "bottom-start", "popper-options": d(Q), onClickOutside: l3[1] || (l3[1] = (e4) => fe(false)), manual: "" }, { default: m(() => [b("div", { ref_key: "inputWrapperRef", ref: re, onKeydown: He }, [u(d(w), { ref_key: "inputRef", ref: se, modelValue: ue.inputValue, "onUpdate:modelValue": l3[0] || (l3[0] = (e4) => ue.inputValue = e4), id: d(te2), disabled: X2.value, placeholder: e3.filterable ? Fe.value : e3.placeholder, readonly: !e3.filterable || !de.value, onFocus: d(he), onBlur: d(pe), onInput: d(Re) }, { suffix: m(() => [ye.value ? (t(), g(d(S), { key: 0, icon: "circle-xmark", class: "ym-input__clear", onClick: i(_e, ["stop"]), onMousedown: i(d($), ["prevent"]) }, null, 8, ["onMousedown"])) : (t(), g(d(S), { key: 1, class: s(["header-angle", { "is-active": de.value }]), icon: "angle-down" }, null, 8, ["class"]))]), _: 1 }, 8, ["modelValue", "id", "disabled", "placeholder", "readonly", "onFocus", "onBlur", "onInput"])], 544)]), content: m(() => [ue.loading ? (t(), o("div", ee, [u(d(S), { icon: "spinner", spin: "" })])) : e3.filterable && Oe.value ? (t(), o("div", le, " No Data ")) : y("", true), b("ul", ae, [ge.value ? (t(true), o(V, { key: 1 }, _(we.value, ([e4, l4]) => (t(), g(d(j), { key: l4.value, vNode: e4 }, null, 8, ["vNode"]))), 128)) : (t(true), o(V, { key: 0 }, _(Me.value, (e4) => (t(), g(Z, x({ key: e4.value, ref_for: true }, e4), null, 16))), 128))])]), _: 1 }, 8, ["popper-options"])], 34));
} }), [["__scopeId", "data-v-bd525d0a"]])), oe = R(Z);
export {
  te as Y,
  oe as a
};
