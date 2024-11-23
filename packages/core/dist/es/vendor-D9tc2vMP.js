import { ref as t } from "vue";
var r = "object" == typeof global && global && global.Object === Object && global, n = "object" == typeof self && self && self.Object === Object && self, e = r || n || Function("return this")(), o = e.Symbol, i = Object.prototype, a = i.hasOwnProperty, u = i.toString, c = o ? o.toStringTag : void 0, f = Object.prototype.toString, l = o ? o.toStringTag : void 0;
function s(t2) {
  return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : l && l in Object(t2) ? function(t3) {
    var r2 = a.call(t3, c), n2 = t3[c];
    try {
      t3[c] = void 0;
      var e2 = true;
    } catch (t4) {
    }
    var o2 = u.call(t3);
    return e2 && (r2 ? t3[c] = n2 : delete t3[c]), o2;
  }(t2) : function(t3) {
    return f.call(t3);
  }(t2);
}
function p(t2) {
  return null != t2 && "object" == typeof t2;
}
function v(t2) {
  return "symbol" == typeof t2 || p(t2) && "[object Symbol]" == s(t2);
}
function h(t2, r2) {
  for (var n2 = -1, e2 = null == t2 ? 0 : t2.length, o2 = Array(e2); ++n2 < e2; ) o2[n2] = r2(t2[n2], n2, t2);
  return o2;
}
var y = Array.isArray, _ = o ? o.prototype : void 0, b = _ ? _.toString : void 0;
function d(t2) {
  if ("string" == typeof t2) return t2;
  if (y(t2)) return h(t2, d) + "";
  if (v(t2)) return b ? b.call(t2) : "";
  var r2 = t2 + "";
  return "0" == r2 && 1 / t2 == -1 / 0 ? "-0" : r2;
}
var g = /\s/, j = /^\s+/;
function w(t2) {
  var r2 = typeof t2;
  return null != t2 && ("object" == r2 || "function" == r2);
}
var m = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, A = /^0o[0-7]+$/i, x = parseInt;
function S(t2) {
  if ("number" == typeof t2) return t2;
  if (v(t2)) return NaN;
  if (w(t2)) {
    var r2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
    t2 = w(r2) ? r2 + "" : r2;
  }
  if ("string" != typeof t2) return 0 === t2 ? t2 : +t2;
  var n2;
  t2 = (n2 = t2) ? n2.slice(0, function(t3) {
    for (var r3 = t3.length; r3-- && g.test(t3.charAt(r3)); ) ;
    return r3;
  }(n2) + 1).replace(j, "") : n2;
  var e2 = O.test(t2);
  return e2 || A.test(t2) ? x(t2.slice(2), e2 ? 2 : 8) : m.test(t2) ? NaN : +t2;
}
var P = 1 / 0;
function E(t2) {
  var r2 = function(t3) {
    return t3 ? (t3 = S(t3)) === P || t3 === -1 / 0 ? 17976931348623157e292 * (t3 < 0 ? -1 : 1) : t3 == t3 ? t3 : 0 : 0 === t3 ? t3 : 0;
  }(t2), n2 = r2 % 1;
  return r2 == r2 ? n2 ? r2 - n2 : r2 : 0;
}
function z(t2) {
  return t2;
}
function T(t2) {
  if (!w(t2)) return false;
  var r2 = s(t2);
  return "[object Function]" == r2 || "[object GeneratorFunction]" == r2 || "[object AsyncFunction]" == r2 || "[object Proxy]" == r2;
}
var F, $ = e["__core-js_shared__"], M = (F = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "", I = Function.prototype.toString;
function k(t2) {
  if (null != t2) {
    try {
      return I.call(t2);
    } catch (t3) {
    }
    try {
      return t2 + "";
    } catch (t3) {
    }
  }
  return "";
}
var U = /^\[object .+?Constructor\]$/, N = Function.prototype, B = Object.prototype, D = N.toString, W = B.hasOwnProperty, C = RegExp("^" + D.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function R(t2, r2) {
  var n2 = function(t3, r3) {
    return null == t3 ? void 0 : t3[r3];
  }(t2, r2);
  return function(t3) {
    return !(!w(t3) || (r3 = t3, M && M in r3)) && (T(t3) ? C : U).test(k(t3));
    var r3;
  }(n2) ? n2 : void 0;
}
var L = R(e, "WeakMap"), V = L && new L(), q = V ? function(t2, r2) {
  return V.set(t2, r2), t2;
} : z, G = Object.create, K = /* @__PURE__ */ function() {
  function t2() {
  }
  return function(r2) {
    if (!w(r2)) return {};
    if (G) return G(r2);
    t2.prototype = r2;
    var n2 = new t2();
    return t2.prototype = void 0, n2;
  };
}();
function H(t2) {
  return function() {
    var r2 = arguments;
    switch (r2.length) {
      case 0:
        return new t2();
      case 1:
        return new t2(r2[0]);
      case 2:
        return new t2(r2[0], r2[1]);
      case 3:
        return new t2(r2[0], r2[1], r2[2]);
      case 4:
        return new t2(r2[0], r2[1], r2[2], r2[3]);
      case 5:
        return new t2(r2[0], r2[1], r2[2], r2[3], r2[4]);
      case 6:
        return new t2(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5]);
      case 7:
        return new t2(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5], r2[6]);
    }
    var n2 = K(t2.prototype), e2 = t2.apply(n2, r2);
    return w(e2) ? e2 : n2;
  };
}
function J(t2, r2, n2) {
  switch (n2.length) {
    case 0:
      return t2.call(r2);
    case 1:
      return t2.call(r2, n2[0]);
    case 2:
      return t2.call(r2, n2[0], n2[1]);
    case 3:
      return t2.call(r2, n2[0], n2[1], n2[2]);
  }
  return t2.apply(r2, n2);
}
var Q = Math.max;
function X(t2, r2, n2, e2) {
  for (var o2 = -1, i2 = t2.length, a2 = n2.length, u2 = -1, c2 = r2.length, f2 = Q(i2 - a2, 0), l2 = Array(c2 + f2), s2 = !e2; ++u2 < c2; ) l2[u2] = r2[u2];
  for (; ++o2 < a2; ) (s2 || o2 < i2) && (l2[n2[o2]] = t2[o2]);
  for (; f2--; ) l2[u2++] = t2[o2++];
  return l2;
}
var Y = Math.max;
function Z(t2, r2, n2, e2) {
  for (var o2 = -1, i2 = t2.length, a2 = -1, u2 = n2.length, c2 = -1, f2 = r2.length, l2 = Y(i2 - u2, 0), s2 = Array(l2 + f2), p2 = !e2; ++o2 < l2; ) s2[o2] = t2[o2];
  for (var v2 = o2; ++c2 < f2; ) s2[v2 + c2] = r2[c2];
  for (; ++a2 < u2; ) (p2 || o2 < i2) && (s2[v2 + n2[a2]] = t2[o2++]);
  return s2;
}
function tt() {
}
function rt(t2) {
  this.__wrapped__ = t2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
}
rt.prototype = K(tt.prototype), rt.prototype.constructor = rt;
var nt = V ? function(t2) {
  return V.get(t2);
} : function() {
}, et = {}, ot = Object.prototype.hasOwnProperty;
function it(t2, r2) {
  this.__wrapped__ = t2, this.__actions__ = [], this.__chain__ = !!r2, this.__index__ = 0, this.__values__ = void 0;
}
function at(t2, r2) {
  var n2 = -1, e2 = t2.length;
  for (r2 || (r2 = Array(e2)); ++n2 < e2; ) r2[n2] = t2[n2];
  return r2;
}
it.prototype = K(tt.prototype), it.prototype.constructor = it;
var ut = Object.prototype.hasOwnProperty;
function ct(t2) {
  if (p(t2) && !y(t2) && !(t2 instanceof rt)) {
    if (t2 instanceof it) return t2;
    if (ut.call(t2, "__wrapped__")) return function(t3) {
      if (t3 instanceof rt) return t3.clone();
      var r2 = new it(t3.__wrapped__, t3.__chain__);
      return r2.__actions__ = at(t3.__actions__), r2.__index__ = t3.__index__, r2.__values__ = t3.__values__, r2;
    }(t2);
  }
  return new it(t2);
}
ct.prototype = tt.prototype, ct.prototype.constructor = ct;
var ft = Date.now;
function lt(t2) {
  var r2 = 0, n2 = 0;
  return function() {
    var e2 = ft(), o2 = 16 - (e2 - n2);
    if (n2 = e2, o2 > 0) {
      if (++r2 >= 800) return arguments[0];
    } else r2 = 0;
    return t2.apply(void 0, arguments);
  };
}
var st = lt(q), pt = /\{\n\/\* \[wrapped with (.+)\] \*/, vt = /,? & /, ht = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, yt = function() {
  try {
    var t2 = R(Object, "defineProperty");
    return t2({}, "", {}), t2;
  } catch (t3) {
  }
}(), _t = yt ? function(t2, r2) {
  return yt(t2, "toString", { configurable: true, enumerable: false, value: (n2 = r2, function() {
    return n2;
  }), writable: true });
  var n2;
} : z, bt = lt(_t);
function dt(t2, r2) {
  for (var n2 = -1, e2 = null == t2 ? 0 : t2.length; ++n2 < e2 && false !== r2(t2[n2], n2, t2); ) ;
  return t2;
}
function gt(t2) {
  return t2 != t2;
}
var jt = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]];
function wt(t2, r2, n2) {
  var e2 = r2 + "";
  return bt(t2, function(t3, r3) {
    var n3 = r3.length;
    if (!n3) return t3;
    var e3 = n3 - 1;
    return r3[e3] = (n3 > 1 ? "& " : "") + r3[e3], r3 = r3.join(n3 > 2 ? ", " : " "), t3.replace(ht, "{\n/* [wrapped with " + r3 + "] */\n");
  }(e2, function(t3, r3) {
    return dt(jt, function(n3) {
      var e3 = "_." + n3[0];
      r3 & n3[1] && !function(t4, r4) {
        return !(null == t4 || !t4.length) && function(t5, r5) {
          return r5 == r5 ? function(t6, r6) {
            for (var n4 = -1, e4 = t6.length; ++n4 < e4; ) if (t6[n4] === r6) return n4;
            return -1;
          }(t5, r5) : function(t6, r6) {
            for (var n4 = t6.length, e4 = -1; ++e4 < n4; ) if (r6(t6[e4], e4, t6)) return e4;
            return -1;
          }(t5, gt);
        }(t4, r4) > -1;
      }(t3, e3) && t3.push(e3);
    }), t3.sort();
  }(function(t3) {
    var r3 = t3.match(pt);
    return r3 ? r3[1].split(vt) : [];
  }(e2), n2)));
}
function mt(t2, r2, n2, e2, o2, i2, a2, u2, c2, f2) {
  var l2 = 8 & r2;
  r2 |= l2 ? 32 : 64, 4 & (r2 &= ~(l2 ? 64 : 32)) || (r2 &= -4);
  var s2 = [t2, r2, o2, l2 ? i2 : void 0, l2 ? a2 : void 0, l2 ? void 0 : i2, l2 ? void 0 : a2, u2, c2, f2], p2 = n2.apply(void 0, s2);
  return function(t3) {
    var r3 = function(t4) {
      for (var r4 = t4.name + "", n4 = et[r4], e4 = ot.call(et, r4) ? n4.length : 0; e4--; ) {
        var o3 = n4[e4], i3 = o3.func;
        if (null == i3 || i3 == t4) return o3.name;
      }
      return r4;
    }(t3), n3 = ct[r3];
    if ("function" != typeof n3 || !(r3 in rt.prototype)) return false;
    if (t3 === n3) return true;
    var e3 = nt(n3);
    return !!e3 && t3 === e3[0];
  }(t2) && st(p2, s2), p2.placeholder = e2, wt(p2, t2, r2);
}
function Ot(t2) {
  return t2.placeholder;
}
var At = /^(?:0|[1-9]\d*)$/;
function xt(t2, r2) {
  var n2 = typeof t2;
  return !!(r2 = null == r2 ? 9007199254740991 : r2) && ("number" == n2 || "symbol" != n2 && At.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < r2;
}
var St = Math.min, Pt = "__lodash_placeholder__";
function Et(t2, r2) {
  for (var n2 = -1, e2 = t2.length, o2 = 0, i2 = []; ++n2 < e2; ) {
    var a2 = t2[n2];
    a2 !== r2 && a2 !== Pt || (t2[n2] = Pt, i2[o2++] = n2);
  }
  return i2;
}
function zt(t2, r2, n2, o2, i2, a2, u2, c2, f2, l2) {
  var s2 = 128 & r2, p2 = 1 & r2, v2 = 2 & r2, h2 = 24 & r2, y2 = 512 & r2, _2 = v2 ? void 0 : H(t2);
  return function b2() {
    for (var d2 = arguments.length, g2 = Array(d2), j2 = d2; j2--; ) g2[j2] = arguments[j2];
    if (h2) var w2 = Ot(b2), m2 = function(t3, r3) {
      for (var n3 = t3.length, e2 = 0; n3--; ) t3[n3] === r3 && ++e2;
      return e2;
    }(g2, w2);
    if (o2 && (g2 = X(g2, o2, i2, h2)), a2 && (g2 = Z(g2, a2, u2, h2)), d2 -= m2, h2 && d2 < l2) {
      var O2 = Et(g2, w2);
      return mt(t2, r2, zt, b2.placeholder, n2, g2, O2, c2, f2, l2 - d2);
    }
    var A2 = p2 ? n2 : this, x2 = v2 ? A2[t2] : t2;
    return d2 = g2.length, c2 ? g2 = function(t3, r3) {
      for (var n3 = t3.length, e2 = St(r3.length, n3), o3 = at(t3); e2--; ) {
        var i3 = r3[e2];
        t3[e2] = xt(i3, n3) ? o3[i3] : void 0;
      }
      return t3;
    }(g2, c2) : y2 && d2 > 1 && g2.reverse(), s2 && f2 < d2 && (g2.length = f2), this && this !== e && this instanceof b2 && (x2 = _2 || H(x2)), x2.apply(A2, g2);
  };
}
var Tt = "__lodash_placeholder__", Ft = Math.min, $t = Math.max;
function Mt(t2, r2, n2) {
  "__proto__" == r2 && yt ? yt(t2, r2, { configurable: true, enumerable: true, value: n2, writable: true }) : t2[r2] = n2;
}
function It(t2, r2) {
  return t2 === r2 || t2 != t2 && r2 != r2;
}
var kt = Object.prototype.hasOwnProperty;
function Ut(t2, r2, n2) {
  var e2 = t2[r2];
  kt.call(t2, r2) && It(e2, n2) && (void 0 !== n2 || r2 in t2) || Mt(t2, r2, n2);
}
function Nt(t2, r2, n2, e2) {
  var o2 = !n2;
  n2 || (n2 = {});
  for (var i2 = -1, a2 = r2.length; ++i2 < a2; ) {
    var u2 = r2[i2], c2 = void 0;
    void 0 === c2 && (c2 = t2[u2]), o2 ? Mt(n2, u2, c2) : Ut(n2, u2, c2);
  }
  return n2;
}
var Bt = Math.max;
function Dt(t2, r2, n2) {
  return r2 = Bt(void 0 === r2 ? t2.length - 1 : r2, 0), function() {
    for (var e2 = arguments, o2 = -1, i2 = Bt(e2.length - r2, 0), a2 = Array(i2); ++o2 < i2; ) a2[o2] = e2[r2 + o2];
    o2 = -1;
    for (var u2 = Array(r2 + 1); ++o2 < r2; ) u2[o2] = e2[o2];
    return u2[r2] = n2(a2), J(t2, this, u2);
  };
}
function Wt(t2, r2) {
  return bt(Dt(t2, r2, z), t2 + "");
}
function Ct(t2) {
  return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991;
}
function Rt(t2) {
  return null != t2 && Ct(t2.length) && !T(t2);
}
function Lt(t2) {
  return Wt(function(r2, n2) {
    var e2 = -1, o2 = n2.length, i2 = o2 > 1 ? n2[o2 - 1] : void 0, a2 = o2 > 2 ? n2[2] : void 0;
    for (i2 = t2.length > 3 && "function" == typeof i2 ? (o2--, i2) : void 0, a2 && function(t3, r3, n3) {
      if (!w(n3)) return false;
      var e3 = typeof r3;
      return !!("number" == e3 ? Rt(n3) && xt(r3, n3.length) : "string" == e3 && r3 in n3) && It(n3[r3], t3);
    }(n2[0], n2[1], a2) && (i2 = o2 < 3 ? void 0 : i2, o2 = 1), r2 = Object(r2); ++e2 < o2; ) {
      var u2 = n2[e2];
      u2 && t2(r2, u2, e2, i2);
    }
    return r2;
  });
}
var Vt = Object.prototype;
function qt(t2) {
  var r2 = t2 && t2.constructor;
  return t2 === ("function" == typeof r2 && r2.prototype || Vt);
}
function Gt(t2) {
  return p(t2) && "[object Arguments]" == s(t2);
}
var Kt = Object.prototype, Ht = Kt.hasOwnProperty, Jt = Kt.propertyIsEnumerable, Qt = Gt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Gt : function(t2) {
  return p(t2) && Ht.call(t2, "callee") && !Jt.call(t2, "callee");
}, Xt = "object" == typeof exports && exports && !exports.nodeType && exports, Yt = Xt && "object" == typeof module && module && !module.nodeType && module, Zt = Yt && Yt.exports === Xt ? e.Buffer : void 0, tr = (Zt ? Zt.isBuffer : void 0) || function() {
  return false;
}, rr = {};
function nr(t2) {
  return function(r2) {
    return t2(r2);
  };
}
rr["[object Float32Array]"] = rr["[object Float64Array]"] = rr["[object Int8Array]"] = rr["[object Int16Array]"] = rr["[object Int32Array]"] = rr["[object Uint8Array]"] = rr["[object Uint8ClampedArray]"] = rr["[object Uint16Array]"] = rr["[object Uint32Array]"] = true, rr["[object Arguments]"] = rr["[object Array]"] = rr["[object ArrayBuffer]"] = rr["[object Boolean]"] = rr["[object DataView]"] = rr["[object Date]"] = rr["[object Error]"] = rr["[object Function]"] = rr["[object Map]"] = rr["[object Number]"] = rr["[object Object]"] = rr["[object RegExp]"] = rr["[object Set]"] = rr["[object String]"] = rr["[object WeakMap]"] = false;
var er = "object" == typeof exports && exports && !exports.nodeType && exports, or = er && "object" == typeof module && module && !module.nodeType && module, ir = or && or.exports === er && r.process, ar = function() {
  try {
    return or && or.require && or.require("util").types || ir && ir.binding && ir.binding("util");
  } catch (t2) {
  }
}(), ur = ar && ar.isTypedArray, cr = ur ? nr(ur) : function(t2) {
  return p(t2) && Ct(t2.length) && !!rr[s(t2)];
}, fr = Object.prototype.hasOwnProperty;
function lr(t2, r2) {
  var n2 = y(t2), e2 = !n2 && Qt(t2), o2 = !n2 && !e2 && tr(t2), i2 = !n2 && !e2 && !o2 && cr(t2), a2 = n2 || e2 || o2 || i2, u2 = a2 ? function(t3, r3) {
    for (var n3 = -1, e3 = Array(t3); ++n3 < t3; ) e3[n3] = r3(n3);
    return e3;
  }(t2.length, String) : [], c2 = u2.length;
  for (var f2 in t2) !r2 && !fr.call(t2, f2) || a2 && ("length" == f2 || o2 && ("offset" == f2 || "parent" == f2) || i2 && ("buffer" == f2 || "byteLength" == f2 || "byteOffset" == f2) || xt(f2, c2)) || u2.push(f2);
  return u2;
}
function sr(t2, r2) {
  return function(n2) {
    return t2(r2(n2));
  };
}
var pr = sr(Object.keys, Object), vr = Object.prototype.hasOwnProperty;
function hr(t2) {
  return Rt(t2) ? lr(t2) : function(t3) {
    if (!qt(t3)) return pr(t3);
    var r2 = [];
    for (var n2 in Object(t3)) vr.call(t3, n2) && "constructor" != n2 && r2.push(n2);
    return r2;
  }(t2);
}
var yr = Object.prototype.hasOwnProperty, _r = Lt(function(t2, r2) {
  if (qt(r2) || Rt(r2)) Nt(r2, hr(r2), t2);
  else for (var n2 in r2) yr.call(r2, n2) && Ut(t2, n2, r2[n2]);
}), br = Object.prototype.hasOwnProperty;
function dr(t2) {
  return Rt(t2) ? lr(t2, true) : function(t3) {
    if (!w(t3)) return function(t4) {
      var r3 = [];
      if (null != t4) for (var n3 in Object(t4)) r3.push(n3);
      return r3;
    }(t3);
    var r2 = qt(t3), n2 = [];
    for (var e2 in t3) ("constructor" != e2 || !r2 && br.call(t3, e2)) && n2.push(e2);
    return n2;
  }(t2);
}
var gr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jr = /^\w*$/, wr = R(Object, "create"), mr = Object.prototype.hasOwnProperty, Or = Object.prototype.hasOwnProperty;
function Ar(t2) {
  var r2 = -1, n2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < n2; ) {
    var e2 = t2[r2];
    this.set(e2[0], e2[1]);
  }
}
function xr(t2, r2) {
  for (var n2 = t2.length; n2--; ) if (It(t2[n2][0], r2)) return n2;
  return -1;
}
Ar.prototype.clear = function() {
  this.__data__ = wr ? wr(null) : {}, this.size = 0;
}, Ar.prototype.delete = function(t2) {
  var r2 = this.has(t2) && delete this.__data__[t2];
  return this.size -= r2 ? 1 : 0, r2;
}, Ar.prototype.get = function(t2) {
  var r2 = this.__data__;
  if (wr) {
    var n2 = r2[t2];
    return "__lodash_hash_undefined__" === n2 ? void 0 : n2;
  }
  return mr.call(r2, t2) ? r2[t2] : void 0;
}, Ar.prototype.has = function(t2) {
  var r2 = this.__data__;
  return wr ? void 0 !== r2[t2] : Or.call(r2, t2);
}, Ar.prototype.set = function(t2, r2) {
  var n2 = this.__data__;
  return this.size += this.has(t2) ? 0 : 1, n2[t2] = wr && void 0 === r2 ? "__lodash_hash_undefined__" : r2, this;
};
var Sr = Array.prototype.splice;
function Pr(t2) {
  var r2 = -1, n2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < n2; ) {
    var e2 = t2[r2];
    this.set(e2[0], e2[1]);
  }
}
Pr.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, Pr.prototype.delete = function(t2) {
  var r2 = this.__data__, n2 = xr(r2, t2);
  return !(n2 < 0 || (n2 == r2.length - 1 ? r2.pop() : Sr.call(r2, n2, 1), --this.size, 0));
}, Pr.prototype.get = function(t2) {
  var r2 = this.__data__, n2 = xr(r2, t2);
  return n2 < 0 ? void 0 : r2[n2][1];
}, Pr.prototype.has = function(t2) {
  return xr(this.__data__, t2) > -1;
}, Pr.prototype.set = function(t2, r2) {
  var n2 = this.__data__, e2 = xr(n2, t2);
  return e2 < 0 ? (++this.size, n2.push([t2, r2])) : n2[e2][1] = r2, this;
};
var Er = R(e, "Map");
function zr(t2, r2) {
  var n2, e2, o2 = t2.__data__;
  return ("string" == (e2 = typeof (n2 = r2)) || "number" == e2 || "symbol" == e2 || "boolean" == e2 ? "__proto__" !== n2 : null === n2) ? o2["string" == typeof r2 ? "string" : "hash"] : o2.map;
}
function Tr(t2) {
  var r2 = -1, n2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < n2; ) {
    var e2 = t2[r2];
    this.set(e2[0], e2[1]);
  }
}
function Fr(t2, r2) {
  if ("function" != typeof t2 || null != r2 && "function" != typeof r2) throw new TypeError("Expected a function");
  var n2 = function() {
    var e2 = arguments, o2 = r2 ? r2.apply(this, e2) : e2[0], i2 = n2.cache;
    if (i2.has(o2)) return i2.get(o2);
    var a2 = t2.apply(this, e2);
    return n2.cache = i2.set(o2, a2) || i2, a2;
  };
  return n2.cache = new (Fr.Cache || Tr)(), n2;
}
Tr.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new Ar(), map: new (Er || Pr)(), string: new Ar() };
}, Tr.prototype.delete = function(t2) {
  var r2 = zr(this, t2).delete(t2);
  return this.size -= r2 ? 1 : 0, r2;
}, Tr.prototype.get = function(t2) {
  return zr(this, t2).get(t2);
}, Tr.prototype.has = function(t2) {
  return zr(this, t2).has(t2);
}, Tr.prototype.set = function(t2, r2) {
  var n2 = zr(this, t2), e2 = n2.size;
  return n2.set(t2, r2), this.size += n2.size == e2 ? 0 : 1, this;
}, Fr.Cache = Tr;
var $r, Mr, Ir, kr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ur = /\\(\\)?/g, Nr = ($r = function(t2) {
  var r2 = [];
  return 46 === t2.charCodeAt(0) && r2.push(""), t2.replace(kr, function(t3, n2, e2, o2) {
    r2.push(e2 ? o2.replace(Ur, "$1") : n2 || t3);
  }), r2;
}, Mr = Fr($r, function(t2) {
  return 500 === Ir.size && Ir.clear(), t2;
}), Ir = Mr.cache, Mr);
function Br(t2, r2) {
  return y(t2) ? t2 : function(t3, r3) {
    if (y(t3)) return false;
    var n2 = typeof t3;
    return !("number" != n2 && "symbol" != n2 && "boolean" != n2 && null != t3 && !v(t3)) || jr.test(t3) || !gr.test(t3) || null != r3 && t3 in Object(r3);
  }(t2, r2) ? [t2] : Nr(function(t3) {
    return null == t3 ? "" : d(t3);
  }(t2));
}
function Dr(t2) {
  if ("string" == typeof t2 || v(t2)) return t2;
  var r2 = t2 + "";
  return "0" == r2 && 1 / t2 == -1 / 0 ? "-0" : r2;
}
function Wr(t2, r2) {
  for (var n2 = -1, e2 = r2.length, o2 = t2.length; ++n2 < e2; ) t2[o2 + n2] = r2[n2];
  return t2;
}
var Cr = o ? o.isConcatSpreadable : void 0;
function Rr(t2) {
  return y(t2) || Qt(t2) || !!(Cr && t2 && t2[Cr]);
}
function Lr(t2) {
  return null != t2 && t2.length ? function(t3, r2, n2, e2, o2) {
    var i2 = -1, a2 = t3.length;
    for (n2 || (n2 = Rr), o2 || (o2 = []); ++i2 < a2; ) {
      var u2 = t3[i2];
      n2(u2) ? Wr(o2, u2) : o2[o2.length] = u2;
    }
    return o2;
  }(t2) : [];
}
var Vr = sr(Object.getPrototypeOf, Object), qr = Function.prototype, Gr = Object.prototype, Kr = qr.toString, Hr = Gr.hasOwnProperty, Jr = Kr.call(Object);
function Qr(t2) {
  if (!p(t2) || "[object Object]" != s(t2)) return false;
  var r2 = Vr(t2);
  if (null === r2) return true;
  var n2 = Hr.call(r2, "constructor") && r2.constructor;
  return "function" == typeof n2 && n2 instanceof n2 && Kr.call(n2) == Jr;
}
var Xr = Wt(function(t2, r2, n2) {
  var o2 = 1;
  if (n2.length) {
    var i2 = Et(n2, Ot(Xr));
    o2 |= 32;
  }
  return function(t3, r3, n3, o3, i3, a2, u2, c2) {
    var f2 = 2 & r3;
    if (!f2 && "function" != typeof t3) throw new TypeError("Expected a function");
    var l2 = o3 ? o3.length : 0;
    if (l2 || (r3 &= -97, o3 = i3 = void 0), u2 = void 0 === u2 ? u2 : $t(E(u2), 0), c2 = void 0 === c2 ? c2 : E(c2), l2 -= i3 ? i3.length : 0, 64 & r3) {
      var s2 = o3, p2 = i3;
      o3 = i3 = void 0;
    }
    var v2 = f2 ? void 0 : nt(t3), h2 = [t3, r3, n3, o3, i3, s2, p2, void 0, u2, c2];
    if (v2 && function(t4, r4) {
      var n4 = t4[1], e2 = r4[1], o4 = n4 | e2, i4 = o4 < 131, a3 = 128 == e2 && 8 == n4 || 128 == e2 && 256 == n4 && t4[7].length <= r4[8] || 384 == e2 && r4[7].length <= r4[8] && 8 == n4;
      if (!i4 && !a3) return t4;
      1 & e2 && (t4[2] = r4[2], o4 |= 1 & n4 ? 0 : 4);
      var u3 = r4[3];
      if (u3) {
        var c3 = t4[3];
        t4[3] = c3 ? X(c3, u3, r4[4]) : u3, t4[4] = c3 ? Et(t4[3], Tt) : r4[4];
      }
      (u3 = r4[5]) && (c3 = t4[5], t4[5] = c3 ? Z(c3, u3, r4[6]) : u3, t4[6] = c3 ? Et(t4[5], Tt) : r4[6]), (u3 = r4[7]) && (t4[7] = u3), 128 & e2 && (t4[8] = null == t4[8] ? r4[8] : Ft(t4[8], r4[8])), null == t4[9] && (t4[9] = r4[9]), t4[0] = r4[0], t4[1] = o4;
    }(h2, v2), t3 = h2[0], r3 = h2[1], n3 = h2[2], o3 = h2[3], i3 = h2[4], !(c2 = h2[9] = void 0 === h2[9] ? f2 ? 0 : t3.length : $t(h2[9] - l2, 0)) && 24 & r3 && (r3 &= -25), r3 && 1 != r3) y2 = 8 == r3 || 16 == r3 ? function(t4, r4, n4) {
      var o4 = H(t4);
      return function i4() {
        for (var a3 = arguments.length, u3 = Array(a3), c3 = a3, f3 = Ot(i4); c3--; ) u3[c3] = arguments[c3];
        var l3 = a3 < 3 && u3[0] !== f3 && u3[a3 - 1] !== f3 ? [] : Et(u3, f3);
        return (a3 -= l3.length) < n4 ? mt(t4, r4, zt, i4.placeholder, void 0, u3, l3, void 0, void 0, n4 - a3) : J(this && this !== e && this instanceof i4 ? o4 : t4, this, u3);
      };
    }(t3, r3, c2) : 32 != r3 && 33 != r3 || i3.length ? zt.apply(void 0, h2) : function(t4, r4, n4, o4) {
      var i4 = 1 & r4, a3 = H(t4);
      return function r5() {
        for (var u3 = -1, c3 = arguments.length, f3 = -1, l3 = o4.length, s3 = Array(l3 + c3), p3 = this && this !== e && this instanceof r5 ? a3 : t4; ++f3 < l3; ) s3[f3] = o4[f3];
        for (; c3--; ) s3[f3++] = arguments[++u3];
        return J(p3, i4 ? n4 : this, s3);
      };
    }(t3, r3, n3, o3);
    else var y2 = function(t4, r4, n4) {
      var o4 = 1 & r4, i4 = H(t4);
      return function r5() {
        return (this && this !== e && this instanceof r5 ? i4 : t4).apply(o4 ? n4 : this, arguments);
      };
    }(t3, r3, n3);
    return wt((v2 ? q : st)(y2, h2), t3, r3);
  }(t2, o2, r2, n2, i2);
});
function Yr(t2) {
  var r2 = this.__data__ = new Pr(t2);
  this.size = r2.size;
}
Xr.placeholder = {}, Yr.prototype.clear = function() {
  this.__data__ = new Pr(), this.size = 0;
}, Yr.prototype.delete = function(t2) {
  var r2 = this.__data__, n2 = r2.delete(t2);
  return this.size = r2.size, n2;
}, Yr.prototype.get = function(t2) {
  return this.__data__.get(t2);
}, Yr.prototype.has = function(t2) {
  return this.__data__.has(t2);
}, Yr.prototype.set = function(t2, r2) {
  var n2 = this.__data__;
  if (n2 instanceof Pr) {
    var e2 = n2.__data__;
    if (!Er || e2.length < 199) return e2.push([t2, r2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new Tr(e2);
  }
  return n2.set(t2, r2), this.size = n2.size, this;
};
var Zr = "object" == typeof exports && exports && !exports.nodeType && exports, tn = Zr && "object" == typeof module && module && !module.nodeType && module, rn = tn && tn.exports === Zr ? e.Buffer : void 0, nn = rn ? rn.allocUnsafe : void 0;
function en(t2, r2) {
  if (r2) return t2.slice();
  var n2 = t2.length, e2 = nn ? nn(n2) : new t2.constructor(n2);
  return t2.copy(e2), e2;
}
function on() {
  return [];
}
var an = Object.prototype.propertyIsEnumerable, un = Object.getOwnPropertySymbols, cn = un ? function(t2) {
  return null == t2 ? [] : (t2 = Object(t2), function(r2) {
    for (var n2 = -1, e2 = null == r2 ? 0 : r2.length, o2 = 0, i2 = []; ++n2 < e2; ) {
      var a2 = r2[n2];
      u2 = a2, an.call(t2, u2) && (i2[o2++] = a2);
    }
    var u2;
    return i2;
  }(un(t2)));
} : on, fn = Object.getOwnPropertySymbols ? function(t2) {
  for (var r2 = []; t2; ) Wr(r2, cn(t2)), t2 = Vr(t2);
  return r2;
} : on;
function ln(t2, r2, n2) {
  var e2 = r2(t2);
  return y(t2) ? e2 : Wr(e2, n2(t2));
}
function sn(t2) {
  return ln(t2, hr, cn);
}
function pn(t2) {
  return ln(t2, dr, fn);
}
var vn = R(e, "DataView"), hn = R(e, "Promise"), yn = R(e, "Set"), _n = "[object Map]", bn = "[object Promise]", dn = "[object Set]", gn = "[object WeakMap]", jn = "[object DataView]", wn = k(vn), mn = k(Er), On = k(hn), An = k(yn), xn = k(L), Sn = s;
(vn && Sn(new vn(new ArrayBuffer(1))) != jn || Er && Sn(new Er()) != _n || hn && Sn(hn.resolve()) != bn || yn && Sn(new yn()) != dn || L && Sn(new L()) != gn) && (Sn = function(t2) {
  var r2 = s(t2), n2 = "[object Object]" == r2 ? t2.constructor : void 0, e2 = n2 ? k(n2) : "";
  if (e2) switch (e2) {
    case wn:
      return jn;
    case mn:
      return _n;
    case On:
      return bn;
    case An:
      return dn;
    case xn:
      return gn;
  }
  return r2;
});
var Pn = Object.prototype.hasOwnProperty, En = e.Uint8Array;
function zn(t2) {
  var r2 = new t2.constructor(t2.byteLength);
  return new En(r2).set(new En(t2)), r2;
}
var Tn = /\w*$/, Fn = o ? o.prototype : void 0, $n = Fn ? Fn.valueOf : void 0;
function Mn(t2, r2) {
  var n2 = r2 ? zn(t2.buffer) : t2.buffer;
  return new t2.constructor(n2, t2.byteOffset, t2.length);
}
function In(t2) {
  return "function" != typeof t2.constructor || qt(t2) ? {} : K(Vr(t2));
}
var kn = ar && ar.isMap, Un = kn ? nr(kn) : function(t2) {
  return p(t2) && "[object Map]" == Sn(t2);
}, Nn = ar && ar.isSet, Bn = Nn ? nr(Nn) : function(t2) {
  return p(t2) && "[object Set]" == Sn(t2);
}, Dn = "[object Arguments]", Wn = "[object Function]", Cn = "[object Object]", Rn = {};
function Ln(t2, r2, n2, e2, o2, i2) {
  var a2, u2 = 1 & r2, c2 = 2 & r2, f2 = 4 & r2;
  if (n2 && (a2 = o2 ? n2(t2, e2, o2, i2) : n2(t2)), void 0 !== a2) return a2;
  if (!w(t2)) return t2;
  var l2 = y(t2);
  if (l2) {
    if (a2 = function(t3) {
      var r3 = t3.length, n3 = new t3.constructor(r3);
      return r3 && "string" == typeof t3[0] && Pn.call(t3, "index") && (n3.index = t3.index, n3.input = t3.input), n3;
    }(t2), !u2) return at(t2, a2);
  } else {
    var s2 = Sn(t2), p2 = s2 == Wn || "[object GeneratorFunction]" == s2;
    if (tr(t2)) return en(t2, u2);
    if (s2 == Cn || s2 == Dn || p2 && !o2) {
      if (a2 = c2 || p2 ? {} : In(t2), !u2) return c2 ? function(t3, r3) {
        return Nt(t3, fn(t3), r3);
      }(t2, function(t3, r3) {
        return t3 && Nt(r3, dr(r3), t3);
      }(a2, t2)) : function(t3, r3) {
        return Nt(t3, cn(t3), r3);
      }(t2, function(t3, r3) {
        return t3 && Nt(r3, hr(r3), t3);
      }(a2, t2));
    } else {
      if (!Rn[s2]) return o2 ? t2 : {};
      a2 = function(t3, r3, n3) {
        var e3, o3 = t3.constructor;
        switch (r3) {
          case "[object ArrayBuffer]":
            return zn(t3);
          case "[object Boolean]":
          case "[object Date]":
            return new o3(+t3);
          case "[object DataView]":
            return function(t4, r4) {
              var n4 = r4 ? zn(t4.buffer) : t4.buffer;
              return new t4.constructor(n4, t4.byteOffset, t4.byteLength);
            }(t3, n3);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return Mn(t3, n3);
          case "[object Map]":
          case "[object Set]":
            return new o3();
          case "[object Number]":
          case "[object String]":
            return new o3(t3);
          case "[object RegExp]":
            return function(t4) {
              var r4 = new t4.constructor(t4.source, Tn.exec(t4));
              return r4.lastIndex = t4.lastIndex, r4;
            }(t3);
          case "[object Symbol]":
            return e3 = t3, $n ? Object($n.call(e3)) : {};
        }
      }(t2, s2, u2);
    }
  }
  i2 || (i2 = new Yr());
  var v2 = i2.get(t2);
  if (v2) return v2;
  i2.set(t2, a2), Bn(t2) ? t2.forEach(function(e3) {
    a2.add(Ln(e3, r2, n2, e3, t2, i2));
  }) : Un(t2) && t2.forEach(function(e3, o3) {
    a2.set(o3, Ln(e3, r2, n2, o3, t2, i2));
  });
  var h2 = l2 ? void 0 : (f2 ? c2 ? pn : sn : c2 ? dr : hr)(t2);
  return dt(h2 || t2, function(e3, o3) {
    h2 && (e3 = t2[o3 = e3]), Ut(a2, o3, Ln(e3, r2, n2, o3, t2, i2));
  }), a2;
}
function Vn(t2) {
  return Ln(t2, 5);
}
Rn[Dn] = Rn["[object Array]"] = Rn["[object ArrayBuffer]"] = Rn["[object DataView]"] = Rn["[object Boolean]"] = Rn["[object Date]"] = Rn["[object Float32Array]"] = Rn["[object Float64Array]"] = Rn["[object Int8Array]"] = Rn["[object Int16Array]"] = Rn["[object Int32Array]"] = Rn["[object Map]"] = Rn["[object Number]"] = Rn[Cn] = Rn["[object RegExp]"] = Rn["[object Set]"] = Rn["[object String]"] = Rn["[object Symbol]"] = Rn["[object Uint8Array]"] = Rn["[object Uint8ClampedArray]"] = Rn["[object Uint16Array]"] = Rn["[object Uint32Array]"] = true, Rn["[object Error]"] = Rn[Wn] = Rn["[object WeakMap]"] = false;
var qn, Gn = function(t2, r2, n2) {
  for (var e2 = -1, o2 = Object(t2), i2 = n2(t2), a2 = i2.length; a2--; ) {
    var u2 = i2[++e2];
    if (false === r2(o2[u2], u2, o2)) break;
  }
  return t2;
}, Kn = (qn = function(t2, r2) {
  return t2 && Gn(t2, r2, hr);
}, function(t2, r2) {
  if (null == t2) return t2;
  if (!Rt(t2)) return qn(t2, r2);
  for (var n2 = t2.length, e2 = -1, o2 = Object(t2); ++e2 < n2 && false !== r2(o2[e2], e2, o2); ) ;
  return t2;
}), Hn = function() {
  return e.Date.now();
}, Jn = Math.max, Qn = Math.min;
function Xn(t2, r2, n2) {
  var e2, o2, i2, a2, u2, c2, f2 = 0, l2 = false, s2 = false, p2 = true;
  if ("function" != typeof t2) throw new TypeError("Expected a function");
  function v2(r3) {
    var n3 = e2, i3 = o2;
    return e2 = o2 = void 0, f2 = r3, a2 = t2.apply(i3, n3);
  }
  function h2(t3) {
    var n3 = t3 - c2;
    return void 0 === c2 || n3 >= r2 || n3 < 0 || s2 && t3 - f2 >= i2;
  }
  function y2() {
    var t3 = Hn();
    if (h2(t3)) return _2(t3);
    u2 = setTimeout(y2, function(t4) {
      var n3 = r2 - (t4 - c2);
      return s2 ? Qn(n3, i2 - (t4 - f2)) : n3;
    }(t3));
  }
  function _2(t3) {
    return u2 = void 0, p2 && e2 ? v2(t3) : (e2 = o2 = void 0, a2);
  }
  function b2() {
    var t3 = Hn(), n3 = h2(t3);
    if (e2 = arguments, o2 = this, c2 = t3, n3) {
      if (void 0 === u2) return function(t4) {
        return f2 = t4, u2 = setTimeout(y2, r2), l2 ? v2(t4) : a2;
      }(c2);
      if (s2) return clearTimeout(u2), u2 = setTimeout(y2, r2), v2(c2);
    }
    return void 0 === u2 && (u2 = setTimeout(y2, r2)), a2;
  }
  return r2 = S(r2) || 0, w(n2) && (l2 = !!n2.leading, i2 = (s2 = "maxWait" in n2) ? Jn(S(n2.maxWait) || 0, r2) : i2, p2 = "trailing" in n2 ? !!n2.trailing : p2), b2.cancel = function() {
    void 0 !== u2 && clearTimeout(u2), f2 = 0, e2 = c2 = o2 = u2 = void 0;
  }, b2.flush = function() {
    return void 0 === u2 ? a2 : _2(Hn());
  }, b2;
}
function Yn(t2, r2, n2) {
  (void 0 !== n2 && !It(t2[r2], n2) || void 0 === n2 && !(r2 in t2)) && Mt(t2, r2, n2);
}
function Zn(t2, r2) {
  if (("constructor" !== r2 || "function" != typeof t2[r2]) && "__proto__" != r2) return t2[r2];
}
function te(t2, r2, n2, e2, o2) {
  t2 !== r2 && Gn(r2, function(i2, a2) {
    if (o2 || (o2 = new Yr()), w(i2)) !function(t3, r3, n3, e3, o3, i3, a3) {
      var u3 = Zn(t3, n3), c2 = Zn(r3, n3), f2 = a3.get(c2);
      if (f2) Yn(t3, n3, f2);
      else {
        var l2, s2 = i3 ? i3(u3, c2, n3 + "", t3, r3, a3) : void 0, v2 = void 0 === s2;
        if (v2) {
          var h2 = y(c2), _2 = !h2 && tr(c2), b2 = !h2 && !_2 && cr(c2);
          s2 = c2, h2 || _2 || b2 ? y(u3) ? s2 = u3 : p(l2 = u3) && Rt(l2) ? s2 = at(u3) : _2 ? (v2 = false, s2 = en(c2, true)) : b2 ? (v2 = false, s2 = Mn(c2, true)) : s2 = [] : Qr(c2) || Qt(c2) ? (s2 = u3, Qt(u3) ? s2 = function(t4) {
            return Nt(t4, dr(t4));
          }(u3) : w(u3) && !T(u3) || (s2 = In(c2))) : v2 = false;
        }
        v2 && (a3.set(c2, s2), o3(s2, c2, e3, i3, a3), a3.delete(c2)), Yn(t3, n3, s2);
      }
    }(t2, r2, a2, n2, te, e2, o2);
    else {
      var u2 = e2 ? e2(Zn(t2, a2), i2, a2 + "", t2, r2, o2) : void 0;
      void 0 === u2 && (u2 = i2), Yn(t2, a2, u2);
    }
  }, dr);
}
function re(t2, r2) {
  var n2;
  return (y(t2) ? dt : Kn)(t2, "function" == typeof (n2 = r2) ? n2 : z);
}
function ne(t2) {
  return "string" == typeof t2 || !y(t2) && p(t2) && "[object String]" == s(t2);
}
function ee(t2) {
  return p(t2) && 1 === t2.nodeType && !Qr(t2);
}
function oe(t2) {
  return "number" == typeof t2 || p(t2) && "[object Number]" == s(t2);
}
function ie(t2) {
  return null == t2;
}
var ae = Lt(function(t2, r2, n2) {
  te(t2, r2, n2);
});
function ue(t2, r2) {
  return null == (t2 = function(t3, r3) {
    return r3.length < 2 ? t3 : function(t4, r4) {
      for (var n3 = 0, e3 = (r4 = Br(r4, t4)).length; null != t4 && n3 < e3; ) t4 = t4[Dr(r4[n3++])];
      return n3 && n3 == e3 ? t4 : void 0;
    }(t3, function(t4, r4, n3) {
      var e3 = -1, o2 = t4.length;
      r4 < 0 && (r4 = -r4 > o2 ? 0 : o2 + r4), (n3 = n3 > o2 ? o2 : n3) < 0 && (n3 += o2), o2 = r4 > n3 ? 0 : n3 - r4 >>> 0, r4 >>>= 0;
      for (var i2 = Array(o2); ++e3 < o2; ) i2[e3] = t4[e3 + r4];
      return i2;
    }(r3, 0, -1));
  }(t2, r2 = Br(r2, t2))) || delete t2[Dr((n2 = r2, e2 = null == n2 ? 0 : n2.length, e2 ? n2[e2 - 1] : void 0))];
  var n2, e2;
}
function ce(t2) {
  return Qr(t2) ? void 0 : t2;
}
var fe = function(t2) {
  return bt(Dt(t2, void 0, Lr), t2 + "");
}(function(t2, r2) {
  var n2 = {};
  if (null == t2) return n2;
  var e2 = false;
  r2 = h(r2, function(r3) {
    return r3 = Br(r3, t2), e2 || (e2 = r3.length > 1), r3;
  }), Nt(t2, pn(t2), n2), e2 && (n2 = Ln(n2, 7, ce));
  for (var o2 = r2.length; o2--; ) ue(n2, r2[o2]);
  return n2;
});
function le(t2, r2, n2) {
  var e2 = true, o2 = true;
  if ("function" != typeof t2) throw new TypeError("Expected a function");
  return w(n2) && (e2 = "leading" in n2 ? !!n2.leading : e2, o2 = "trailing" in n2 ? !!n2.trailing : o2), Xn(t2, r2, { leading: e2, maxWait: r2, trailing: o2 });
}
const se = Symbol("i18n"), pe = (t2, r2, n2) => {
  const e2 = t2[0];
  if (~e2.indexOf("[")) {
    const [o2, i2] = e2.split("["), a2 = parseInt(i2.replace("]", ""));
    if (a2 > -1) {
      if (!r2[o2] && r2[o2].length > 0 && r2[o2][a2] && "" !== r2[o2][a2]) throw new Error("Not Found");
      return 1 === t2.length ? "string" == typeof r2[o2][a2] ? r2[o2][a2] : "" : pe(t2.slice(1), r2[o2][a2], n2);
    }
    throw new Error(`Not Found: ${e2}`);
  }
  if (r2[t2[0]] || "" === r2[t2[0]]) {
    if (1 === t2.length) {
      let e3 = "string" == typeof r2[t2[0]] ? r2[t2[0]] : "";
      return n2 && (e3 = ((t3, r3) => {
        const n3 = /{(\w*)}/g;
        let e4, o2 = t3;
        for (; null !== (e4 = n3.exec(t3)); ) {
          if (!Object.prototype.hasOwnProperty.call(r3, e4[1])) throw new Error(`Not Found Params: ${e4[1]}`);
          o2 = o2.replace(e4[0], r3[e4[1]]);
        }
        return o2;
      })(e3, n2)), e3;
    }
    return pe(t2.slice(1), r2[t2[0]], n2);
  }
  throw new Error("Not Found");
}, ve = (r2) => {
  const n2 = t(r2.locale || "en"), e2 = r2.messages;
  return { messages: e2, t: (t2, r3) => {
    const o2 = e2[n2.value] || e2.en;
    if ("string" != typeof t2) return console.warn("Warn(i18n):", "keypath must be a type of string"), "";
    try {
      return pe(t2.split("."), o2, r3);
    } catch (r4) {
      return console.warn(`Warn(i18n): the keypath '${t2}' not found`), "";
    }
  }, setLocale: (t2) => {
    e2[t2] || console.warn(`Warn(i18n): the '${t2}' language pack not found, fall back to English language pack`), n2.value = t2;
  }, getLocale: () => n2.value, install(t2) {
    const r3 = this;
    t2.provide(se, r3), t2.config.globalProperties.$t = r3.t, t2.config.globalProperties.$i18n = r3;
  } };
};
export {
  fe as a,
  ee as b,
  Xr as c,
  Xn as d,
  T as e,
  re as f,
  Vn as g,
  _r as h,
  ie as i,
  ne as j,
  oe as k,
  ae as m,
  se as n,
  ve as o,
  le as t
};
