(function(P,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):o((P=typeof globalThis<"u"?globalThis:P||self).云墨UI={},P.Vue)})(this,function(P,o){"use strict";var j0=typeof global=="object"&&global&&global.Object===Object&&global,Bn=typeof self=="object"&&self&&self.Object===Object&&self,I=j0||Bn||Function("return this")(),i2=I.Symbol,D0=Object.prototype,Pn=D0.hasOwnProperty,Tn=D0.toString,e1=i2?i2.toStringTag:void 0,On=Object.prototype.toString,F0=i2?i2.toStringTag:void 0;function p2(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":F0&&F0 in Object(c)?function(l){var e=Pn.call(l,e1),a=l[e1];try{l[e1]=void 0;var n=!0}catch{}var s=Tn.call(l);return n&&(e?l[e1]=a:delete l[e1]),s}(c):function(l){return On.call(l)}(c)}function e2(c){return c!=null&&typeof c=="object"}function _1(c){return typeof c=="symbol"||e2(c)&&p2(c)=="[object Symbol]"}function E0(c,l){for(var e=-1,a=c==null?0:c.length,n=Array(a);++e<a;)n[e]=l(c[e],e,c);return n}var o2=Array.isArray,R0=i2?i2.prototype:void 0,H0=R0?R0.toString:void 0;function q0(c){if(typeof c=="string")return c;if(o2(c))return E0(c,q0)+"";if(_1(c))return H0?H0.call(c):"";var l=c+"";return l=="0"&&1/c==-1/0?"-0":l}var jn=/\s/,Dn=/^\s+/;function r2(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}var Fn=/^[-+]0x[0-9a-f]+$/i,En=/^0b[01]+$/i,Rn=/^0o[0-7]+$/i,Hn=parseInt;function N3(c){if(typeof c=="number")return c;if(_1(c))return NaN;if(r2(c)){var l=typeof c.valueOf=="function"?c.valueOf():c;c=r2(l)?l+"":l}if(typeof c!="string")return c===0?c:+c;var e;c=(e=c)?e.slice(0,function(n){for(var s=n.length;s--&&jn.test(n.charAt(s)););return s}(e)+1).replace(Dn,""):e;var a=En.test(c);return a||Rn.test(c)?Hn(c.slice(2),a?2:8):Fn.test(c)?NaN:+c}var qn=1/0;function U0(c){var l=function(a){return a?(a=N3(a))===qn||a===-1/0?17976931348623157e292*(a<0?-1:1):a==a?a:0:a===0?a:0}(c),e=l%1;return l==l?e?l-e:l:0}function B1(c){return c}function V0(c){if(!r2(c))return!1;var l=p2(c);return l=="[object Function]"||l=="[object GeneratorFunction]"||l=="[object AsyncFunction]"||l=="[object Proxy]"}var I0,b3=I["__core-js_shared__"],W0=(I0=/[^.]+$/.exec(b3&&b3.keys&&b3.keys.IE_PROTO||""))?"Symbol(src)_1."+I0:"",Un=Function.prototype.toString;function _2(c){if(c!=null){try{return Un.call(c)}catch{}try{return c+""}catch{}}return""}var Vn=/^\[object .+?Constructor\]$/,In=Function.prototype,Wn=Object.prototype,Gn=In.toString,Yn=Wn.hasOwnProperty,$n=RegExp("^"+Gn.call(Yn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function B2(c,l){var e=function(a,n){return a==null?void 0:a[n]}(c,l);return function(a){return!(!r2(a)||(n=a,W0&&W0 in n))&&(V0(a)?$n:Vn).test(_2(a));var n}(e)?e:void 0}var a1=B2(I,"WeakMap"),P1=a1&&new a1,G0=P1?function(c,l){return P1.set(c,l),c}:B1,Y0=Object.create,T1=function(){function c(){}return function(l){if(!r2(l))return{};if(Y0)return Y0(l);c.prototype=l;var e=new c;return c.prototype=void 0,e}}();function s1(c){return function(){var l=arguments;switch(l.length){case 0:return new c;case 1:return new c(l[0]);case 2:return new c(l[0],l[1]);case 3:return new c(l[0],l[1],l[2]);case 4:return new c(l[0],l[1],l[2],l[3]);case 5:return new c(l[0],l[1],l[2],l[3],l[4]);case 6:return new c(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new c(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var e=T1(c.prototype),a=c.apply(e,l);return r2(a)?a:e}}function y3(c,l,e){switch(e.length){case 0:return c.call(l);case 1:return c.call(l,e[0]);case 2:return c.call(l,e[0],e[1]);case 3:return c.call(l,e[0],e[1],e[2])}return c.apply(l,e)}var Xn=Math.max;function $0(c,l,e,a){for(var n=-1,s=c.length,i=e.length,t=-1,f=l.length,r=Xn(s-i,0),m=Array(f+r),z=!a;++t<f;)m[t]=l[t];for(;++n<i;)(z||n<s)&&(m[e[n]]=c[n]);for(;r--;)m[t++]=c[n++];return m}var Kn=Math.max;function X0(c,l,e,a){for(var n=-1,s=c.length,i=-1,t=e.length,f=-1,r=l.length,m=Kn(s-t,0),z=Array(m+r),L=!a;++n<m;)z[n]=c[n];for(var d=n;++f<r;)z[d+f]=l[f];for(;++i<t;)(L||n<s)&&(z[d+e[i]]=c[n++]);return z}function v3(){}function V2(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}V2.prototype=T1(v3.prototype),V2.prototype.constructor=V2;var K0=P1?function(c){return P1.get(c)}:function(){},Q0={},Qn=Object.prototype.hasOwnProperty;function I2(c,l){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=void 0}function w3(c,l){var e=-1,a=c.length;for(l||(l=Array(a));++e<a;)l[e]=c[e];return l}I2.prototype=T1(v3.prototype),I2.prototype.constructor=I2;var Jn=Object.prototype.hasOwnProperty;function O1(c){if(e2(c)&&!o2(c)&&!(c instanceof V2)){if(c instanceof I2)return c;if(Jn.call(c,"__wrapped__"))return function(l){if(l instanceof V2)return l.clone();var e=new I2(l.__wrapped__,l.__chain__);return e.__actions__=w3(l.__actions__),e.__index__=l.__index__,e.__values__=l.__values__,e}(c)}return new I2(c)}O1.prototype=v3.prototype,O1.prototype.constructor=O1;var Zn=Date.now;function J0(c){var l=0,e=0;return function(){var a=Zn(),n=16-(a-e);if(e=a,n>0){if(++l>=800)return arguments[0]}else l=0;return c.apply(void 0,arguments)}}var Z0=J0(G0),ci=/\{\n\/\* \[wrapped with (.+)\] \*/,li=/,? & /,ei=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,j1=function(){try{var c=B2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),ai=j1?function(c,l){return j1(c,"toString",{configurable:!0,enumerable:!1,value:(e=l,function(){return e}),writable:!0});var e}:B1,S3=J0(ai);function k3(c,l){for(var e=-1,a=c==null?0:c.length;++e<a&&l(c[e],e,c)!==!1;);return c}function si(c){return c!=c}var ni=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];function c6(c,l,e){var a=l+"";return S3(c,function(n,s){var i=s.length;if(!i)return n;var t=i-1;return s[t]=(i>1?"& ":"")+s[t],s=s.join(i>2?", ":" "),n.replace(ei,`{
/* [wrapped with `+s+`] */
`)}(a,function(n,s){return k3(ni,function(i){var t="_."+i[0];s&i[1]&&!function(f,r){return!(f==null||!f.length)&&function(m,z){return z==z?function(L,d){for(var g=-1,u=L.length;++g<u;)if(L[g]===d)return g;return-1}(m,z):function(L,d){for(var g=L.length,u=-1;++u<g;)if(d(L[u],u,L))return u;return-1}(m,si)}(f,r)>-1}(n,t)&&n.push(t)}),n.sort()}(function(n){var s=n.match(ci);return s?s[1].split(li):[]}(a),e)))}function l6(c,l,e,a,n,s,i,t,f,r){var m=8&l;l|=m?32:64,4&(l&=~(m?64:32))||(l&=-4);var z=[c,l,n,m?s:void 0,m?i:void 0,m?void 0:s,m?void 0:i,t,f,r],L=e.apply(void 0,z);return function(d){var g=function(C){for(var M=C.name+"",N=Q0[M],h=Qn.call(Q0,M)?N.length:0;h--;){var x=N[h],b=x.func;if(b==null||b==C)return x.name}return M}(d),u=O1[g];if(typeof u!="function"||!(g in V2.prototype))return!1;if(d===u)return!0;var p=K0(u);return!!p&&d===p[0]}(c)&&Z0(L,z),L.placeholder=a,c6(L,c,l)}function A3(c){return c.placeholder}var ii=/^(?:0|[1-9]\d*)$/;function e6(c,l){var e=typeof c;return!!(l=l??9007199254740991)&&(e=="number"||e!="symbol"&&ii.test(c))&&c>-1&&c%1==0&&c<l}var oi=Math.min,a6="__lodash_placeholder__";function n1(c,l){for(var e=-1,a=c.length,n=0,s=[];++e<a;){var i=c[e];i!==l&&i!==a6||(c[e]=a6,s[n++]=e)}return s}function _3(c,l,e,a,n,s,i,t,f,r){var m=128&l,z=1&l,L=2&l,d=24&l,g=512&l,u=L?void 0:s1(c);return function p(){for(var C=arguments.length,M=Array(C),N=C;N--;)M[N]=arguments[N];if(d)var h=A3(p),x=function(w,y){for(var A=w.length,_=0;A--;)w[A]===y&&++_;return _}(M,h);if(a&&(M=$0(M,a,n,d)),s&&(M=X0(M,s,i,d)),C-=x,d&&C<r){var b=n1(M,h);return l6(c,l,_3,p.placeholder,e,M,b,t,f,r-C)}var v=z?e:this,k=L?v[c]:c;return C=M.length,t?M=function(w,y){for(var A=w.length,_=oi(y.length,A),B=w3(w);_--;){var D=y[_];w[_]=e6(D,A)?B[D]:void 0}return w}(M,t):g&&C>1&&M.reverse(),m&&f<C&&(M.length=f),this&&this!==I&&this instanceof p&&(k=u||s1(k)),k.apply(v,M)}}var s6="__lodash_placeholder__",ri=Math.min,n6=Math.max;function i6(c,l,e){l=="__proto__"&&j1?j1(c,l,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[l]=e}function o6(c,l){return c===l||c!=c&&l!=l}var ti=Object.prototype.hasOwnProperty;function r6(c,l,e){var a=c[l];ti.call(c,l)&&o6(a,e)&&(e!==void 0||l in c)||i6(c,l,e)}function i1(c,l,e,a){var n=!e;e||(e={});for(var s=-1,i=l.length;++s<i;){var t=l[s],f=void 0;f===void 0&&(f=c[t]),n?i6(e,t,f):r6(e,t,f)}return e}var t6=Math.max;function f6(c,l,e){return l=t6(l===void 0?c.length-1:l,0),function(){for(var a=arguments,n=-1,s=t6(a.length-l,0),i=Array(s);++n<s;)i[n]=a[l+n];n=-1;for(var t=Array(l+1);++n<l;)t[n]=a[n];return t[l]=e(i),y3(c,this,t)}}function m6(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}function B3(c){return c!=null&&m6(c.length)&&!V0(c)}var fi=Object.prototype;function P3(c){var l=c&&c.constructor;return c===(typeof l=="function"&&l.prototype||fi)}function z6(c){return e2(c)&&p2(c)=="[object Arguments]"}var L6=Object.prototype,mi=L6.hasOwnProperty,zi=L6.propertyIsEnumerable,p6=z6(function(){return arguments}())?z6:function(c){return e2(c)&&mi.call(c,"callee")&&!zi.call(c,"callee")},u6=typeof P=="object"&&P&&!P.nodeType&&P,M6=u6&&typeof module=="object"&&module&&!module.nodeType&&module,d6=M6&&M6.exports===u6?I.Buffer:void 0,C6=(d6?d6.isBuffer:void 0)||function(){return!1},F={};function T3(c){return function(l){return c(l)}}F["[object Float32Array]"]=F["[object Float64Array]"]=F["[object Int8Array]"]=F["[object Int16Array]"]=F["[object Int32Array]"]=F["[object Uint8Array]"]=F["[object Uint8ClampedArray]"]=F["[object Uint16Array]"]=F["[object Uint32Array]"]=!0,F["[object Arguments]"]=F["[object Array]"]=F["[object ArrayBuffer]"]=F["[object Boolean]"]=F["[object DataView]"]=F["[object Date]"]=F["[object Error]"]=F["[object Function]"]=F["[object Map]"]=F["[object Number]"]=F["[object Object]"]=F["[object RegExp]"]=F["[object Set]"]=F["[object String]"]=F["[object WeakMap]"]=!1;var h6=typeof P=="object"&&P&&!P.nodeType&&P,o1=h6&&typeof module=="object"&&module&&!module.nodeType&&module,O3=o1&&o1.exports===h6&&j0.process,W2=function(){try{return o1&&o1.require&&o1.require("util").types||O3&&O3.binding&&O3.binding("util")}catch{}}(),g6=W2&&W2.isTypedArray,Li=g6?T3(g6):function(c){return e2(c)&&m6(c.length)&&!!F[p2(c)]},pi=Object.prototype.hasOwnProperty;function x6(c,l){var e=o2(c),a=!e&&p6(c),n=!e&&!a&&C6(c),s=!e&&!a&&!n&&Li(c),i=e||a||n||s,t=i?function(m,z){for(var L=-1,d=Array(m);++L<m;)d[L]=z(L);return d}(c.length,String):[],f=t.length;for(var r in c)!l&&!pi.call(c,r)||i&&(r=="length"||n&&(r=="offset"||r=="parent")||s&&(r=="buffer"||r=="byteLength"||r=="byteOffset")||e6(r,f))||t.push(r);return t}function N6(c,l){return function(e){return c(l(e))}}var ui=N6(Object.keys,Object),Mi=Object.prototype.hasOwnProperty;function D1(c){return B3(c)?x6(c):function(l){if(!P3(l))return ui(l);var e=[];for(var a in Object(l))Mi.call(l,a)&&a!="constructor"&&e.push(a);return e}(c)}var di=Object.prototype.hasOwnProperty;function j3(c){return B3(c)?x6(c,!0):function(l){if(!r2(l))return function(s){var i=[];if(s!=null)for(var t in Object(s))i.push(t);return i}(l);var e=P3(l),a=[];for(var n in l)(n!="constructor"||!e&&di.call(l,n))&&a.push(n);return a}(c)}var Ci=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hi=/^\w*$/,r1=B2(Object,"create"),gi=Object.prototype.hasOwnProperty,xi=Object.prototype.hasOwnProperty;function P2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}function F1(c,l){for(var e=c.length;e--;)if(o6(c[e][0],l))return e;return-1}P2.prototype.clear=function(){this.__data__=r1?r1(null):{},this.size=0},P2.prototype.delete=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l},P2.prototype.get=function(c){var l=this.__data__;if(r1){var e=l[c];return e==="__lodash_hash_undefined__"?void 0:e}return gi.call(l,c)?l[c]:void 0},P2.prototype.has=function(c){var l=this.__data__;return r1?l[c]!==void 0:xi.call(l,c)},P2.prototype.set=function(c,l){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=r1&&l===void 0?"__lodash_hash_undefined__":l,this};var Ni=Array.prototype.splice;function u2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}u2.prototype.clear=function(){this.__data__=[],this.size=0},u2.prototype.delete=function(c){var l=this.__data__,e=F1(l,c);return!(e<0||(e==l.length-1?l.pop():Ni.call(l,e,1),--this.size,0))},u2.prototype.get=function(c){var l=this.__data__,e=F1(l,c);return e<0?void 0:l[e][1]},u2.prototype.has=function(c){return F1(this.__data__,c)>-1},u2.prototype.set=function(c,l){var e=this.__data__,a=F1(e,c);return a<0?(++this.size,e.push([c,l])):e[a][1]=l,this};var t1=B2(I,"Map");function E1(c,l){var e,a,n=c.__data__;return((a=typeof(e=l))=="string"||a=="number"||a=="symbol"||a=="boolean"?e!=="__proto__":e===null)?n[typeof l=="string"?"string":"hash"]:n.map}function N2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}function D3(c,l){if(typeof c!="function"||l!=null&&typeof l!="function")throw new TypeError("Expected a function");var e=function(){var a=arguments,n=l?l.apply(this,a):a[0],s=e.cache;if(s.has(n))return s.get(n);var i=c.apply(this,a);return e.cache=s.set(n,i)||s,i};return e.cache=new(D3.Cache||N2),e}N2.prototype.clear=function(){this.size=0,this.__data__={hash:new P2,map:new(t1||u2),string:new P2}},N2.prototype.delete=function(c){var l=E1(this,c).delete(c);return this.size-=l?1:0,l},N2.prototype.get=function(c){return E1(this,c).get(c)},N2.prototype.has=function(c){return E1(this,c).has(c)},N2.prototype.set=function(c,l){var e=E1(this,c),a=e.size;return e.set(c,l),this.size+=e.size==a?0:1,this},D3.Cache=N2;var b6,F3,E3,bi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yi=/\\(\\)?/g,vi=(b6=function(c){var l=[];return c.charCodeAt(0)===46&&l.push(""),c.replace(bi,function(e,a,n,s){l.push(n?s.replace(yi,"$1"):a||e)}),l},F3=D3(b6,function(c){return E3.size===500&&E3.clear(),c}),E3=F3.cache,F3);function R3(c,l){return o2(c)?c:function(e,a){if(o2(e))return!1;var n=typeof e;return!(n!="number"&&n!="symbol"&&n!="boolean"&&e!=null&&!_1(e))||hi.test(e)||!Ci.test(e)||a!=null&&e in Object(a)}(c,l)?[c]:vi(function(e){return e==null?"":q0(e)}(c))}function y6(c){if(typeof c=="string"||_1(c))return c;var l=c+"";return l=="0"&&1/c==-1/0?"-0":l}function H3(c,l){for(var e=-1,a=l.length,n=c.length;++e<a;)c[n+e]=l[e];return c}var v6=i2?i2.isConcatSpreadable:void 0;function wi(c){return o2(c)||p6(c)||!!(v6&&c&&c[v6])}function Si(c){return c!=null&&c.length?function(l,e,a,n,s){var i=-1,t=l.length;for(a||(a=wi),s||(s=[]);++i<t;){var f=l[i];a(f)?H3(s,f):s[s.length]=f}return s}(c):[]}var q3=N6(Object.getPrototypeOf,Object),ki=Function.prototype,Ai=Object.prototype,w6=ki.toString,_i=Ai.hasOwnProperty,Bi=w6.call(Object);function S6(c){if(!e2(c)||p2(c)!="[object Object]")return!1;var l=q3(c);if(l===null)return!0;var e=_i.call(l,"constructor")&&l.constructor;return typeof e=="function"&&e instanceof e&&w6.call(e)==Bi}var R1=function(c){return S3(f6(c,void 0,B1),c+"")}(function(c,l,e){var a=1;if(e.length){var n=n1(e,A3(R1));a|=32}return function(s,i,t,f,r,m,z,L){var d=2&i;if(!d&&typeof s!="function")throw new TypeError("Expected a function");var g=f?f.length:0;if(g||(i&=-97,f=r=void 0),z=z===void 0?z:n6(U0(z),0),L=L===void 0?L:U0(L),g-=r?r.length:0,64&i){var u=f,p=r;f=r=void 0}var C=d?void 0:K0(s),M=[s,i,t,f,r,u,p,void 0,z,L];if(C&&function(h,x){var b=h[1],v=x[1],k=b|v,w=k<131,y=v==128&&b==8||v==128&&b==256&&h[7].length<=x[8]||v==384&&x[7].length<=x[8]&&b==8;if(!w&&!y)return h;1&v&&(h[2]=x[2],k|=1&b?0:4);var A=x[3];if(A){var _=h[3];h[3]=_?$0(_,A,x[4]):A,h[4]=_?n1(h[3],s6):x[4]}(A=x[5])&&(_=h[5],h[5]=_?X0(_,A,x[6]):A,h[6]=_?n1(h[5],s6):x[6]),(A=x[7])&&(h[7]=A),128&v&&(h[8]=h[8]==null?x[8]:ri(h[8],x[8])),h[9]==null&&(h[9]=x[9]),h[0]=x[0],h[1]=k}(M,C),s=M[0],i=M[1],t=M[2],f=M[3],r=M[4],!(L=M[9]=M[9]===void 0?d?0:s.length:n6(M[9]-g,0))&&24&i&&(i&=-25),i&&i!=1)N=i==8||i==16?function(h,x,b){var v=s1(h);return function k(){for(var w=arguments.length,y=Array(w),A=w,_=A3(k);A--;)y[A]=arguments[A];var B=w<3&&y[0]!==_&&y[w-1]!==_?[]:n1(y,_);return(w-=B.length)<b?l6(h,x,_3,k.placeholder,void 0,y,B,void 0,void 0,b-w):y3(this&&this!==I&&this instanceof k?v:h,this,y)}}(s,i,L):i!=32&&i!=33||r.length?_3.apply(void 0,M):function(h,x,b,v){var k=1&x,w=s1(h);return function y(){for(var A=-1,_=arguments.length,B=-1,D=v.length,H=Array(D+_),T=this&&this!==I&&this instanceof y?w:h;++B<D;)H[B]=v[B];for(;_--;)H[B++]=arguments[++A];return y3(T,k?b:this,H)}}(s,i,t,f);else var N=function(h,x,b){var v=1&x,k=s1(h);return function w(){return(this&&this!==I&&this instanceof w?k:h).apply(v?b:this,arguments)}}(s,i,t);return c6((C?G0:Z0)(N,M),s,i)}(c,a,l,e,n)});function G2(c){var l=this.__data__=new u2(c);this.size=l.size}R1.placeholder={},G2.prototype.clear=function(){this.__data__=new u2,this.size=0},G2.prototype.delete=function(c){var l=this.__data__,e=l.delete(c);return this.size=l.size,e},G2.prototype.get=function(c){return this.__data__.get(c)},G2.prototype.has=function(c){return this.__data__.has(c)},G2.prototype.set=function(c,l){var e=this.__data__;if(e instanceof u2){var a=e.__data__;if(!t1||a.length<199)return a.push([c,l]),this.size=++e.size,this;e=this.__data__=new N2(a)}return e.set(c,l),this.size=e.size,this};var k6=typeof P=="object"&&P&&!P.nodeType&&P,A6=k6&&typeof module=="object"&&module&&!module.nodeType&&module,_6=A6&&A6.exports===k6?I.Buffer:void 0,B6=_6?_6.allocUnsafe:void 0;function P6(){return[]}var Pi=Object.prototype.propertyIsEnumerable,T6=Object.getOwnPropertySymbols,U3=T6?function(c){return c==null?[]:(c=Object(c),function(l){for(var e=-1,a=l==null?0:l.length,n=0,s=[];++e<a;){var i=l[e];t=i,Pi.call(c,t)&&(s[n++]=i)}var t;return s}(T6(c)))}:P6,O6=Object.getOwnPropertySymbols?function(c){for(var l=[];c;)H3(l,U3(c)),c=q3(c);return l}:P6;function j6(c,l,e){var a=l(c);return o2(c)?a:H3(a,e(c))}function Ti(c){return j6(c,D1,U3)}function D6(c){return j6(c,j3,O6)}var V3=B2(I,"DataView"),I3=B2(I,"Promise"),W3=B2(I,"Set"),F6="[object Map]",E6="[object Promise]",R6="[object Set]",H6="[object WeakMap]",q6="[object DataView]",Oi=_2(V3),ji=_2(t1),Di=_2(I3),Fi=_2(W3),Ei=_2(a1),M2=p2;(V3&&M2(new V3(new ArrayBuffer(1)))!=q6||t1&&M2(new t1)!=F6||I3&&M2(I3.resolve())!=E6||W3&&M2(new W3)!=R6||a1&&M2(new a1)!=H6)&&(M2=function(c){var l=p2(c),e=l=="[object Object]"?c.constructor:void 0,a=e?_2(e):"";if(a)switch(a){case Oi:return q6;case ji:return F6;case Di:return E6;case Fi:return R6;case Ei:return H6}return l});var Ri=Object.prototype.hasOwnProperty,U6=I.Uint8Array;function G3(c){var l=new c.constructor(c.byteLength);return new U6(l).set(new U6(c)),l}var Hi=/\w*$/,V6=i2?i2.prototype:void 0,I6=V6?V6.valueOf:void 0,W6=W2&&W2.isMap,qi=W6?T3(W6):function(c){return e2(c)&&M2(c)=="[object Map]"},G6=W2&&W2.isSet,Ui=G6?T3(G6):function(c){return e2(c)&&M2(c)=="[object Set]"},Y6="[object Arguments]",$6="[object Function]",X6="[object Object]",j={};function H1(c,l,e,a,n,s){var i,t=1&l,f=2&l,r=4&l;if(e&&(i=n?e(c,a,n,s):e(c)),i!==void 0)return i;if(!r2(c))return c;var m=o2(c);if(m){if(i=function(u){var p=u.length,C=new u.constructor(p);return p&&typeof u[0]=="string"&&Ri.call(u,"index")&&(C.index=u.index,C.input=u.input),C}(c),!t)return w3(c,i)}else{var z=M2(c),L=z==$6||z=="[object GeneratorFunction]";if(C6(c))return function(u,p){if(p)return u.slice();var C=u.length,M=B6?B6(C):new u.constructor(C);return u.copy(M),M}(c,t);if(z==X6||z==Y6||L&&!n){if(i=f||L?{}:function(u){return typeof u.constructor!="function"||P3(u)?{}:T1(q3(u))}(c),!t)return f?function(u,p){return i1(u,O6(u),p)}(c,function(u,p){return u&&i1(p,j3(p),u)}(i,c)):function(u,p){return i1(u,U3(u),p)}(c,function(u,p){return u&&i1(p,D1(p),u)}(i,c))}else{if(!j[z])return n?c:{};i=function(u,p,C){var M,N=u.constructor;switch(p){case"[object ArrayBuffer]":return G3(u);case"[object Boolean]":case"[object Date]":return new N(+u);case"[object DataView]":return function(h,x){var b=x?G3(h.buffer):h.buffer;return new h.constructor(b,h.byteOffset,h.byteLength)}(u,C);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(h,x){var b=x?G3(h.buffer):h.buffer;return new h.constructor(b,h.byteOffset,h.length)}(u,C);case"[object Map]":case"[object Set]":return new N;case"[object Number]":case"[object String]":return new N(u);case"[object RegExp]":return function(h){var x=new h.constructor(h.source,Hi.exec(h));return x.lastIndex=h.lastIndex,x}(u);case"[object Symbol]":return M=u,I6?Object(I6.call(M)):{}}}(c,z,t)}}s||(s=new G2);var d=s.get(c);if(d)return d;s.set(c,i),Ui(c)?c.forEach(function(u){i.add(H1(u,l,e,u,c,s))}):qi(c)&&c.forEach(function(u,p){i.set(p,H1(u,l,e,p,c,s))});var g=m?void 0:(r?f?D6:Ti:f?j3:D1)(c);return k3(g||c,function(u,p){g&&(u=c[p=u]),r6(i,p,H1(u,l,e,p,c,s))}),i}j[Y6]=j["[object Array]"]=j["[object ArrayBuffer]"]=j["[object DataView]"]=j["[object Boolean]"]=j["[object Date]"]=j["[object Float32Array]"]=j["[object Float64Array]"]=j["[object Int8Array]"]=j["[object Int16Array]"]=j["[object Int32Array]"]=j["[object Map]"]=j["[object Number]"]=j[X6]=j["[object RegExp]"]=j["[object Set]"]=j["[object String]"]=j["[object Symbol]"]=j["[object Uint8Array]"]=j["[object Uint8ClampedArray]"]=j["[object Uint16Array]"]=j["[object Uint32Array]"]=!0,j["[object Error]"]=j[$6]=j["[object WeakMap]"]=!1;var K6,Vi=(K6=function(c,l){return c&&function(e,a,n){for(var s=-1,i=Object(e),t=n(e),f=t.length;f--;){var r=t[++s];if(a(i[r],r,i)===!1)break}return e}(c,l,D1)},function(c,l){if(c==null)return c;if(!B3(c))return K6(c,l);for(var e=c.length,a=-1,n=Object(c);++a<e&&l(n[a],a,n)!==!1;);return c}),Y3=function(){return I.Date.now()},Ii=Math.max,Wi=Math.min;function $3(c,l,e){var a,n,s,i,t,f,r=0,m=!1,z=!1,L=!0;if(typeof c!="function")throw new TypeError("Expected a function");function d(M){var N=a,h=n;return a=n=void 0,r=M,i=c.apply(h,N)}function g(M){var N=M-f;return f===void 0||N>=l||N<0||z&&M-r>=s}function u(){var M=Y3();if(g(M))return p(M);t=setTimeout(u,function(N){var h=l-(N-f);return z?Wi(h,s-(N-r)):h}(M))}function p(M){return t=void 0,L&&a?d(M):(a=n=void 0,i)}function C(){var M=Y3(),N=g(M);if(a=arguments,n=this,f=M,N){if(t===void 0)return function(h){return r=h,t=setTimeout(u,l),m?d(h):i}(f);if(z)return clearTimeout(t),t=setTimeout(u,l),d(f)}return t===void 0&&(t=setTimeout(u,l)),i}return l=N3(l)||0,r2(e)&&(m=!!e.leading,s=(z="maxWait"in e)?Ii(N3(e.maxWait)||0,l):s,L="trailing"in e?!!e.trailing:L),C.cancel=function(){t!==void 0&&clearTimeout(t),r=0,a=f=n=t=void 0},C.flush=function(){return t===void 0?i:p(Y3())},C}function X3(c,l){var e;return(o2(c)?k3:Vi)(c,typeof(e=l)=="function"?e:B1)}function K3(c){return typeof c=="string"||!o2(c)&&e2(c)&&p2(c)=="[object String]"}function Q6(c){return e2(c)&&c.nodeType===1&&!S6(c)}function J6(c){return c==null}function Gi(c,l){return(c=function(n,s){return s.length<2?n:function(i,t){for(var f=0,r=(t=R3(t,i)).length;i!=null&&f<r;)i=i[y6(t[f++])];return f&&f==r?i:void 0}(n,function(i,t,f){var r=-1,m=i.length;t<0&&(t=-t>m?0:m+t),(f=f>m?m:f)<0&&(f+=m),m=t>f?0:f-t>>>0,t>>>=0;for(var z=Array(m);++r<m;)z[r]=i[r+t];return z}(s,0,-1))}(c,l=R3(l,c)))==null||delete c[y6((e=l,a=e==null?0:e.length,a?e[a-1]:void 0))];var e,a}function Yi(c){return S6(c)?void 0:c}var Z6=function(c){return S3(f6(c,void 0,Si),c+"")}(function(c,l){var e={};if(c==null)return e;var a=!1;l=E0(l,function(s){return s=R3(s,c),a||(a=s.length>1),s}),i1(c,D6(c),e),a&&(e=H1(e,7,Yi));for(var n=l.length;n--;)Gi(e,l[n]);return e});function a2(c){return c.install=l=>{const e=c.name;l.component(e,c)},c}class $i extends Error{constructor(l){super(l),this.name="YmUIError"}}function c8(c,l){if(process.env.NODE_ENV!=="production"){const e=K3(c)?new $i(`[${c}]: ${l}`):c;console.warn(e)}}function Xi(c,l="px"){return c?function(a){return typeof a=="number"||e2(a)&&p2(a)=="[object Number]"}(c)||K3(e=c)&&Number.isNaN(Number(e))?`${c}${l}`:K3(c)?c:void c8("utils/style","binding value must be a string or number"):"";var e}const Ki=new Map([["info","circle-info"],["success","check-circle"],["warning","circle-exclamation"],["danger","circle-xmark"],["error","circle-xmark"]]),l8=()=>{};let Q3={},e8={},a8=null,s8={mark:l8,measure:l8};try{typeof window<"u"&&(Q3=window),typeof document<"u"&&(e8=document),typeof MutationObserver<"u"&&(a8=MutationObserver),typeof performance<"u"&&(s8=performance)}catch{}const{userAgent:n8=""}=Q3.navigator||{},b2=Q3,E=e8,i8=a8,q1=s8;b2.document;const d2=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",o8=~n8.indexOf("MSIE")||~n8.indexOf("Trident/");var R="classic",r8="duotone",X="sharp",K="sharp-duotone",Qi=[R,r8,X,K],t8={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},f8=[1,2,3,4,5,6,7,8,9,10],Ji=f8.concat([11,12,13,14,15,16,17,18,19,20]),f1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zi=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",f1.GROUP,f1.SWAP_OPACITY,f1.PRIMARY,f1.SECONDARY].concat(f8.map(c=>"".concat(c,"x"))).concat(Ji.map(c=>"w-".concat(c)));const C2="___FONT_AWESOME___",J3=16,m8="svg-inline--fa",T2="data-fa-i2svg",Z3="data-fa-pseudo-element",c4="data-prefix",l4="data-icon",z8="fontawesome-i2svg",co=["HTML","HEAD","STYLE","SCRIPT"],L8=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),p8=[R,X,K];function m1(c){return new Proxy(c,{get:(l,e)=>e in l?l[e]:l[R]})}const u8={...t8};u8[R]={...t8[R],fak:"kit","fa-kit":"kit",fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};const O2=m1(u8),e4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}};e4[R]={...e4[R],kit:"fak","kit-duotone":"fakd"};const z1=m1(e4),a4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}};a4[R]={...a4[R],fak:"fa-kit"};const j2=m1(a4),s4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}};s4[R]={...s4[R],"fa-kit":"fak"};const lo=m1(s4),eo=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,M8="fa-layers-text",ao=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;m1({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}});const so=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n4=f1,Y2=new Set;Object.keys(z1[R]).map(Y2.add.bind(Y2)),Object.keys(z1[X]).map(Y2.add.bind(Y2)),Object.keys(z1[K]).map(Y2.add.bind(Y2));const no=["kit",...Zi],L1=b2.FontAwesomeConfig||{};E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(c=>{let[l,e]=c;const a=function(n){return n===""||n!=="false"&&(n==="true"||n)}(function(n){var s=E.querySelector("script["+n+"]");if(s)return s.getAttribute(n)}(l));a!=null&&(L1[e]=a)});const d8={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:m8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};L1.familyPrefix&&(L1.cssPrefix=L1.familyPrefix);const $2={...d8,...L1};$2.autoReplaceSvg||($2.observeMutations=!1);const S={};Object.keys(d8).forEach(c=>{Object.defineProperty(S,c,{enumerable:!0,set:function(l){$2[c]=l,i4.forEach(e=>e(S))},get:function(){return $2[c]}})}),Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(c){$2.cssPrefix=c,i4.forEach(l=>l(S))},get:function(){return $2.cssPrefix}}),b2.FontAwesomeConfig=S;const i4=[],y2=J3,t2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function p1(){let c=12,l="";for(;c-- >0;)l+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return l}function X2(c){const l=[];for(let e=(c||[]).length>>>0;e--;)l[e]=c[e];return l}function o4(c){return c.classList?X2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function C8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function U1(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,": ").concat(c[e].trim(),";"),"")}function r4(c){return c.size!==t2.size||c.x!==t2.x||c.y!==t2.y||c.rotate!==t2.rotate||c.flipX||c.flipY}function h8(){const c="fa",l=m8,e=S.cssPrefix,a=S.replacementClass;let n=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;if(e!==c||a!==l){const s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");n=n.replace(s,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(a))}return n}let g8=!1;function t4(){S.autoAddCss&&!g8&&(function(c){if(!c||!d2)return;const l=E.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const e=E.head.childNodes;let a=null;for(let n=e.length-1;n>-1;n--){const s=e[n],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}E.head.insertBefore(l,a)}(h8()),g8=!0)}var io={mixout:()=>({dom:{css:h8,insertCss:t4}}),hooks:()=>({beforeDOMElementCreation(){t4()},beforeI2svg(){t4()}})};const h2=b2||{};h2[C2]||(h2[C2]={}),h2[C2].styles||(h2[C2].styles={}),h2[C2].hooks||(h2[C2].hooks={}),h2[C2].shims||(h2[C2].shims=[]);var f2=h2[C2];const x8=[],N8=function(){E.removeEventListener("DOMContentLoaded",N8),V1=1,x8.map(c=>c())};let V1=!1;function u1(c){const{tag:l,attributes:e={},children:a=[]}=c;return typeof c=="string"?C8(c):"<".concat(l," ").concat(function(n){return Object.keys(n||{}).reduce((s,i)=>s+"".concat(i,'="').concat(C8(n[i]),'" '),"").trim()}(e),">").concat(a.map(u1).join(""),"</").concat(l,">")}function b8(c,l,e){if(c&&c[l]&&c[l][e])return{prefix:l,iconName:e,icon:c[l][e]}}d2&&(V1=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),V1||E.addEventListener("DOMContentLoaded",N8));var f4=function(c,l,e,a){var n,s,i,t=Object.keys(c),f=t.length,r=l;for(e===void 0?(n=1,i=c[t[0]]):(n=0,i=e);n<f;n++)i=r(i,c[s=t[n]],s,c);return i};function y8(c){const l=function(e){const a=[];let n=0;const s=e.length;for(;n<s;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const t=e.charCodeAt(n++);(64512&t)==56320?a.push(((1023&i)<<10)+(1023&t)+65536):(a.push(i),n--)}else a.push(i)}return a}(c);return l.length===1?l[0].toString(16):null}function v8(c){return Object.keys(c).reduce((l,e)=>{const a=c[e];return a.icon?l[a.iconName]=a.icon:l[e]=a,l},{})}function m4(c,l){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=e,n=v8(l);typeof f2.hooks.addPack!="function"||a?f2.styles[c]={...f2.styles[c]||{},...n}:f2.hooks.addPack(c,v8(l)),c==="fas"&&m4("fa",l)}const{styles:D2,shims:oo}=f2,ro={[R]:Object.values(j2[R]),[X]:Object.values(j2[X]),[K]:Object.values(j2[K])};let z4=null,w8={},S8={},k8={},A8={},_8={};const to={[R]:Object.keys(O2[R]),[X]:Object.keys(O2[X]),[K]:Object.keys(O2[K])},B8=()=>{const c=a=>f4(D2,(n,s,i)=>(n[i]=f4(s,a,{}),n),{});w8=c((a,n,s)=>(n[3]&&(a[n[3]]=s),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=s}),a)),S8=c((a,n,s)=>(a[s]=s,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=s}),a)),_8=c((a,n,s)=>{const i=n[2];return a[s]=s,i.forEach(t=>{a[t]=s}),a});const l="far"in D2||S.autoFetchSvg,e=f4(oo,(a,n)=>{const s=n[0];let i=n[1];const t=n[2];return i!=="far"||l||(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:t}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:t}),a},{names:{},unicodes:{}});k8=e.names,A8=e.unicodes,z4=I1(S.styleDefault,{family:S.familyDefault})};var P8;function L4(c,l){return(w8[c]||{})[l]}function v2(c,l){return(_8[c]||{})[l]}function T8(c){return k8[c]||{prefix:null,iconName:null}}function w2(){return z4}function I1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=R}=l,a=O2[e][c],n=z1[e][c]||z1[e][a],s=c in f2.styles?c:null;return n||s||null}P8=c=>{z4=I1(c.styleDefault,{family:S.familyDefault})},i4.push(P8),B8();const fo={[R]:Object.keys(j2[R]),[X]:Object.keys(j2[X]),[K]:Object.keys(j2[K])};function W1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=l,a={[R]:"".concat(S.cssPrefix,"-").concat(R),[X]:"".concat(S.cssPrefix,"-").concat(X),[K]:"".concat(S.cssPrefix,"-").concat(K)};let n=null,s=R;const i=Qi.filter(f=>f!==r8);i.forEach(f=>{(c.includes(a[f])||c.some(r=>fo[f].includes(r)))&&(s=f)});const t=c.reduce((f,r)=>{const m=function(z,L){const d=L.split("-"),g=d[0],u=d.slice(1).join("-");return g!==z||u===""||(p=u,~no.indexOf(p))?null:u;var p}(S.cssPrefix,r);if(D2[r]?(r=ro[s].includes(r)?lo[s][r]:r,n=r,f.prefix=r):to[s].indexOf(r)>-1?(n=r,f.prefix=I1(r,{family:s})):m?f.iconName=m:r===S.replacementClass||i.some(z=>r===a[z])||f.rest.push(r),!e&&f.prefix&&f.iconName){const z=n==="fa"?T8(f.iconName):{},L=v2(f.prefix,f.iconName);z.prefix&&(n=null),f.iconName=z.iconName||L||f.iconName,f.prefix=z.prefix||f.prefix,f.prefix!=="far"||D2.far||!D2.fas||S.autoFetchSvg||(f.prefix="fas")}return f},{prefix:null,iconName:null,rest:[]});return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),t.prefix||s!==X||!D2.fass&&!S.autoFetchSvg||(t.prefix="fass",t.iconName=v2(t.prefix,t.iconName)||t.iconName),t.prefix||s!==K||!D2.fasds&&!S.autoFetchSvg||(t.prefix="fasds",t.iconName=v2(t.prefix,t.iconName)||t.iconName),t.prefix!=="fa"&&n!=="fa"||(t.prefix=w2()||"fas"),t}let O8=[],K2={};const Q2={},mo=Object.keys(Q2);function p4(c,l){for(var e=arguments.length,a=new Array(e>2?e-2:0),n=2;n<e;n++)a[n-2]=arguments[n];return(K2[c]||[]).forEach(s=>{l=s.apply(null,[l,...a])}),l}function F2(c){for(var l=arguments.length,e=new Array(l>1?l-1:0),a=1;a<l;a++)e[a-1]=arguments[a];(K2[c]||[]).forEach(n=>{n.apply(null,e)})}function S2(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return Q2[c]?Q2[c].apply(null,l):void 0}function u4(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const e=c.prefix||w2();if(l)return l=v2(e,l)||l,b8(j8.definitions,e,l)||b8(f2.styles,e,l)}const j8=new class{constructor(){this.definitions={}}add(){for(var c=arguments.length,l=new Array(c),e=0;e<c;e++)l[e]=arguments[e];const a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},m4(n,a[n]);const s=j2[R][n];s&&m4(s,a[n]),B8()})}reset(){this.definitions={}}_pullDefinitions(c,l){const e=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(e).map(a=>{const{prefix:n,iconName:s,icon:i}=e[a],t=i[2];c[n]||(c[n]={}),t.length>0&&t.forEach(f=>{typeof f=="string"&&(c[n][f]=i)}),c[n][s]=i}),c}},zo={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return d2?(F2("beforeI2svg",c),S2("pseudoElements2svg",c),S2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;var e;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,e=()=>{po({autoReplaceSvgRoot:l}),F2("watch",c)},d2&&(V1?setTimeout(e,0):x8.push(e))}},Lo={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:v2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=I1(c[0]);return{prefix:e,iconName:v2(e,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(S.cssPrefix,"-"))>-1||c.match(eo))){const l=W1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||w2(),iconName:v2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=w2();return{prefix:l,iconName:v2(l,c)||c}}}},E2={noAuto:()=>{S.autoReplaceSvg=!1,S.observeMutations=!1,F2("noAuto")},config:S,dom:zo,parse:Lo,library:j8,findIconDefinition:u4,toHtml:u1},po=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=E}=c;(Object.keys(f2.styles).length>0||S.autoFetchSvg)&&d2&&S.autoReplaceSvg&&E2.dom.i2svg({node:l})};function G1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>u1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!d2)return;const e=E.createElement("div");return e.innerHTML=c.html,e.children}}),c}function M4(c){const{icons:{main:l,mask:e},prefix:a,iconName:n,transform:s,symbol:i,title:t,maskId:f,titleId:r,extra:m,watchable:z=!1}=c,{width:L,height:d}=e.found?e:l,g=a==="fak",u=[S.replacementClass,n?"".concat(S.cssPrefix,"-").concat(n):""].filter(x=>m.classes.indexOf(x)===-1).filter(x=>x!==""||!!x).concat(m.classes).join(" ");let p={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":n,class:u,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(d)}};const C=g&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/d*16*.0625,"em")}:{};z&&(p.attributes[T2]=""),t&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(r||p1())},children:[t]}),delete p.attributes.title);const M={...p,prefix:a,iconName:n,main:l,mask:e,maskId:f,transform:s,symbol:i,styles:{...C,...m.styles}},{children:N,attributes:h}=e.found&&l.found?S2("generateAbstractMask",M)||{children:[],attributes:{}}:S2("generateAbstractIcon",M)||{children:[],attributes:{}};return M.children=N,M.attributes=h,i?function(x){let{prefix:b,iconName:v,children:k,attributes:w,symbol:y}=x;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...w,id:y===!0?"".concat(b,"-").concat(S.cssPrefix,"-").concat(v):y},children:k}]}]}(M):function(x){let{children:b,main:v,mask:k,attributes:w,styles:y,transform:A}=x;if(r4(A)&&v.found&&!k.found){const{width:_,height:B}=v,D={x:_/B/2,y:.5};w.style=U1({...y,"transform-origin":"".concat(D.x+A.x/16,"em ").concat(D.y+A.y/16,"em")})}return[{tag:"svg",attributes:w,children:b}]}(M)}function D8(c){const{content:l,width:e,height:a,transform:n,title:s,extra:i,watchable:t=!1}=c,f={...i.attributes,...s?{title:s}:{},class:i.classes.join(" ")};t&&(f[T2]="");const r={...i.styles};r4(n)&&(r.transform=function(L){let{transform:d,width:g=J3,height:u=J3,startCentered:p=!1}=L,C="";return C+=p&&o8?"translate(".concat(d.x/y2-g/2,"em, ").concat(d.y/y2-u/2,"em) "):p?"translate(calc(-50% + ".concat(d.x/y2,"em), calc(-50% + ").concat(d.y/y2,"em)) "):"translate(".concat(d.x/y2,"em, ").concat(d.y/y2,"em) "),C+="scale(".concat(d.size/y2*(d.flipX?-1:1),", ").concat(d.size/y2*(d.flipY?-1:1),") "),C+="rotate(".concat(d.rotate,"deg) "),C}({transform:n,startCentered:!0,width:e,height:a}),r["-webkit-transform"]=r.transform);const m=U1(r);m.length>0&&(f.style=m);const z=[];return z.push({tag:"span",attributes:f,children:[l]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}const{styles:d4}=f2;function C4(c){const l=c[0],e=c[1],[a]=c.slice(4);let n=null;return n=Array.isArray(a)?{tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(n4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(n4.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(n4.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:e,icon:n}}const uo={found:!1,width:512,height:512};function h4(c,l){let e=l;return l==="fa"&&S.styleDefault!==null&&(l=w2()),new Promise((a,n)=>{if(e==="fa"){const s=T8(c)||{};c=s.iconName||c,l=s.prefix||l}if(c&&l&&d4[l]&&d4[l][c])return a(C4(d4[l][c]));(function(s,i){L8||S.showMissingIcons||!s||console.error('Icon with name "'.concat(s,'" and prefix "').concat(i,'" is missing.'))})(c,l),a({...uo,icon:S.showMissingIcons&&c&&S2("missingIconAbstract")||{}})})}const F8=()=>{},g4=S.measurePerformance&&q1&&q1.mark&&q1.measure?q1:{mark:F8,measure:F8},M1='FA "6.6.0"';var x4=c=>(g4.mark("".concat(M1," ").concat(c," begins")),()=>(l=>{g4.mark("".concat(M1," ").concat(l," ends")),g4.measure("".concat(M1," ").concat(l),"".concat(M1," ").concat(l," begins"),"".concat(M1," ").concat(l," ends"))})(c));const Y1=()=>{};function E8(c){return typeof(c.getAttribute?c.getAttribute(T2):null)=="string"}function Mo(c){return E.createElementNS("http://www.w3.org/2000/svg",c)}function Co(c){return E.createElement(c)}function R8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=c.tag==="svg"?Mo:Co}=l;if(typeof c=="string")return E.createTextNode(c);const a=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(R8(n,{ceFn:e}))}),a}const $1={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(e=>{l.parentNode.insertBefore(R8(e),l)}),l.getAttribute(T2)===null&&S.keepOriginalSource){let e=E.createComment(function(a){let n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(c){const l=c[0],e=c[1];if(~o4(l).indexOf(S.replacementClass))return $1.replace(c);const a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const s=e[0].attributes.class.split(" ").reduce((i,t)=>(t===S.replacementClass||t.match(a)?i.toSvg.push(t):i.toNode.push(t),i),{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",s.toNode.join(" "))}const n=e.map(s=>u1(s)).join(`
`);l.setAttribute(T2,""),l.innerHTML=n}};function H8(c){c()}function q8(c,l){const e=typeof l=="function"?l:Y1;if(c.length===0)e();else{let a=H8;S.mutateApproach==="async"&&(a=b2.requestAnimationFrame||H8),a(()=>{const n=S.autoReplaceSvg===!0?$1.replace:$1[S.autoReplaceSvg]||$1.replace,s=x4("mutate");c.map(n),s(),e()})}}let N4=!1;function U8(){N4=!0}function b4(){N4=!1}let X1=null;function V8(c){if(!i8||!S.observeMutations)return;const{treeCallback:l=Y1,nodeCallback:e=Y1,pseudoElementsCallback:a=Y1,observeMutationsRoot:n=E}=c;X1=new i8(s=>{if(N4)return;const i=w2();X2(s).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!E8(t.addedNodes[0])&&(S.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&S.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&E8(t.target)&&~so.indexOf(t.attributeName))if(t.attributeName==="class"&&function(r){const m=r.getAttribute?r.getAttribute(c4):null,z=r.getAttribute?r.getAttribute(l4):null;return m&&z}(t.target)){const{prefix:r,iconName:m}=W1(o4(t.target));t.target.setAttribute(c4,r||i),m&&t.target.setAttribute(l4,m)}else(f=t.target)&&f.classList&&f.classList.contains&&f.classList.contains(S.replacementClass)&&e(t.target);var f})}),d2&&X1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function I8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:a,rest:n}=function(f){const r=f.getAttribute("data-prefix"),m=f.getAttribute("data-icon"),z=f.innerText!==void 0?f.innerText.trim():"";let L=W1(o4(f));return L.prefix||(L.prefix=w2()),r&&m&&(L.prefix=r,L.iconName=m),L.iconName&&L.prefix||(L.prefix&&z.length>0&&(L.iconName=(d=L.prefix,g=f.innerText,(S8[d]||{})[g]||L4(L.prefix,y8(f.innerText)))),!L.iconName&&S.autoFetchSvg&&f.firstChild&&f.firstChild.nodeType===Node.TEXT_NODE&&(L.iconName=f.firstChild.data)),L;var d,g}(c),s=function(f){const r=X2(f.attributes).reduce((L,d)=>(L.name!=="class"&&L.name!=="style"&&(L[d.name]=d.value),L),{}),m=f.getAttribute("title"),z=f.getAttribute("data-fa-title-id");return S.autoA11y&&(m?r["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(z||p1()):(r["aria-hidden"]="true",r.focusable="false")),r}(c),i=p4("parseNodeAttributes",{},c);let t=l.styleParser?function(f){const r=f.getAttribute("style");let m=[];return r&&(m=r.split(";").reduce((z,L)=>{const d=L.split(":"),g=d[0],u=d.slice(1);return g&&u.length>0&&(z[g]=u.join(":").trim()),z},{})),m}(c):[];return{iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:t2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:t,attributes:s},...i}}const{styles:ho}=f2;function W8(c){const l=S.autoReplaceSvg==="nest"?I8(c,{styleParser:!1}):I8(c);return~l.extra.classes.indexOf(M8)?S2("generateLayersText",c,l):S2("generateSvgReplacementMutation",c,l)}let m2=new Set;function G8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!d2)return Promise.resolve();const e=E.documentElement.classList,a=m=>e.add("".concat(z8,"-").concat(m)),n=m=>e.remove("".concat(z8,"-").concat(m)),s=S.autoFetchSvg?m2:p8.map(m=>"fa-".concat(m)).concat(Object.keys(ho));s.includes("fa")||s.push("fa");const i=[".".concat(M8,":not([").concat(T2,"])")].concat(s.map(m=>".".concat(m,":not([").concat(T2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let t=[];try{t=X2(c.querySelectorAll(i))}catch{}if(!(t.length>0))return Promise.resolve();a("pending"),n("complete");const f=x4("onTree"),r=t.reduce((m,z)=>{try{const L=W8(z);L&&m.push(L)}catch(L){L8||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,z)=>{Promise.all(r).then(L=>{q8(L,()=>{a("active"),a("complete"),n("pending"),typeof l=="function"&&l(),f(),m()})}).catch(L=>{f(),z(L)})})}function go(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W8(c).then(e=>{e&&q8([e],l)})}p8.map(c=>{m2.add("fa-".concat(c))}),Object.keys(O2[R]).map(m2.add.bind(m2)),Object.keys(O2[X]).map(m2.add.bind(m2)),Object.keys(O2[K]).map(m2.add.bind(m2)),m2=[...m2];const xo=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=t2,symbol:a=!1,mask:n=null,maskId:s=null,title:i=null,titleId:t=null,classes:f=[],attributes:r={},styles:m={}}=l;if(!c)return;const{prefix:z,iconName:L,icon:d}=c;return G1({type:"icon",...c},()=>(F2("beforeDOMElementCreation",{iconDefinition:c,params:l}),S.autoA11y&&(i?r["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(t||p1()):(r["aria-hidden"]="true",r.focusable="false")),M4({icons:{main:C4(d),mask:n?C4(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:L,transform:{...t2,...e},symbol:a,title:i,maskId:s,titleId:t,extra:{attributes:r,styles:m,classes:f}})))};var No={mixout(){return{icon:(c=xo,function(l){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(l||{}).icon?l:u4(l||{});let{mask:n}=e;return n&&(n=(n||{}).icon?n:u4(n||{})),c(a,{...e,mask:n})})};var c},hooks:()=>({mutationObserverCallbacks:c=>(c.treeCallback=G8,c.nodeCallback=go,c)}),provides(c){c.i2svg=function(l){const{node:e=E,callback:a=()=>{}}=l;return G8(e,a)},c.generateSvgReplacementMutation=function(l,e){const{iconName:a,title:n,titleId:s,prefix:i,transform:t,symbol:f,mask:r,maskId:m,extra:z}=e;return new Promise((L,d)=>{Promise.all([h4(a,i),r.iconName?h4(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[u,p]=g;L([l,M4({icons:{main:u,mask:p},prefix:i,iconName:a,transform:t,symbol:f,maskId:m,title:n,titleId:s,extra:z,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(l){let{children:e,attributes:a,main:n,transform:s,styles:i}=l;const t=U1(i);let f;return t.length>0&&(a.style=t),r4(s)&&(f=S2("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(f||n.icon),{children:e,attributes:a}}}},bo={mixout:()=>({layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=l;return G1({type:"layer"},()=>{F2("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(n=>{Array.isArray(n)?n.map(s=>{a=a.concat(s.abstract)}):a=a.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}})},yo={mixout:()=>({counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:a=[],attributes:n={},styles:s={}}=l;return G1({type:"counter",content:c},()=>(F2("beforeDOMElementCreation",{content:c,params:l}),function(i){const{content:t,title:f,extra:r}=i,m={...r.attributes,...f?{title:f}:{},class:r.classes.join(" ")},z=U1(r.styles);z.length>0&&(m.style=z);const L=[];return L.push({tag:"span",attributes:m,children:[t]}),f&&L.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),L}({content:c.toString(),title:e,extra:{attributes:n,styles:s,classes:["".concat(S.cssPrefix,"-layers-counter"),...a]}})))}})},vo={mixout:()=>({text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=t2,title:a=null,classes:n=[],attributes:s={},styles:i={}}=l;return G1({type:"text",content:c},()=>(F2("beforeDOMElementCreation",{content:c,params:l}),D8({content:c,transform:{...t2,...e},title:a,extra:{attributes:s,styles:i,classes:["".concat(S.cssPrefix,"-layers-text"),...n]}})))}}),provides(c){c.generateLayersText=function(l,e){const{title:a,transform:n,extra:s}=e;let i=null,t=null;if(o8){const f=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();i=r.width/f,t=r.height/f}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([l,D8({content:l.innerHTML,width:i,height:t,transform:n,title:a,extra:s,watchable:!0})])}}};const wo=new RegExp('"',"ug"),Y8=[1105920,1112319],$8={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},y4=Object.keys($8).reduce((c,l)=>(c[l.toLowerCase()]=$8[l],c),{}),So=Object.keys(y4).reduce((c,l)=>{const e=y4[l];return c[l]=e[900]||[...Object.entries(e)][0][1],c},{});function X8(c,l){const e="".concat("data-fa-pseudo-element-pending").concat(l.replace(":","-"));return new Promise((a,n)=>{if(c.getAttribute(e)!==null)return a();const s=X2(c.children).filter(z=>z.getAttribute(Z3)===l)[0],i=b2.getComputedStyle(c,l),t=i.getPropertyValue("font-family"),f=t.match(ao),r=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(s&&!f)return c.removeChild(s),a();if(f&&m!=="none"&&m!==""){const z=i.getPropertyValue("content");let L=function(M,N){const h=M.replace(/^['"]|['"]$/g,"").toLowerCase(),x=parseInt(N),b=isNaN(x)?"normal":x;return(y4[h]||{})[b]||So[h]}(t,r);const{value:d,isSecondary:g}=function(M){const N=M.replace(wo,""),h=function(v){const k=v.length;let w,y=v.charCodeAt(0);return y>=55296&&y<=56319&&k>1&&(w=v.charCodeAt(1),w>=56320&&w<=57343)?1024*(y-55296)+w-56320+65536:y}(N),x=h>=Y8[0]&&h<=Y8[1],b=N.length===2&&N[0]===N[1];return{value:y8(b?N[0]:N),isSecondary:x||b}}(z),u=f[0].startsWith("FontAwesome");let p=L4(L,d),C=p;if(u){const M=function(N){const h=A8[N],x=L4("fas",N);return h||(x?{prefix:"fas",iconName:x}:null)||{prefix:null,iconName:null}}(d);M.iconName&&M.prefix&&(p=M.iconName,L=M.prefix)}if(!p||g||s&&s.getAttribute(c4)===L&&s.getAttribute(l4)===C)a();else{c.setAttribute(e,C),s&&c.removeChild(s);const M={iconName:null,title:null,titleId:null,prefix:null,transform:t2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:N}=M;N.attributes[Z3]=l,h4(p,L).then(h=>{const x=M4({...M,icons:{main:h,mask:{prefix:null,iconName:null,rest:[]}},prefix:L,iconName:C,extra:N,watchable:!0}),b=E.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(b,c.firstChild):c.appendChild(b),b.outerHTML=x.map(v=>u1(v)).join(`
`),c.removeAttribute(e),a()}).catch(n)}}else a()})}function ko(c){return Promise.all([X8(c,"::before"),X8(c,"::after")])}function Ao(c){return!(c.parentNode===document.head||~co.indexOf(c.tagName.toUpperCase())||c.getAttribute(Z3)||c.parentNode&&c.parentNode.tagName==="svg")}function K8(c){if(d2)return new Promise((l,e)=>{const a=X2(c.querySelectorAll("*")).filter(Ao).map(ko),n=x4("searchPseudoElements");U8(),Promise.all(a).then(()=>{n(),b4(),l()}).catch(()=>{n(),b4(),e()})})}var _o={hooks:()=>({mutationObserverCallbacks:c=>(c.pseudoElementsCallback=K8,c)}),provides(c){c.pseudoElements2svg=function(l){const{node:e=E}=l;S.searchPseudoElements&&K8(e)}}};let Q8=!1;var Bo={mixout:()=>({dom:{unwatch(){U8(),Q8=!0}}}),hooks:()=>({bootstrap(){V8(p4("mutationObserverCallbacks",{}))},noAuto(){X1&&X1.disconnect()},watch(c){const{observeMutationsRoot:l}=c;Q8?b4():V8(p4("mutationObserverCallbacks",{observeMutationsRoot:l}))}})};const J8=c=>c.toLowerCase().split(" ").reduce((l,e)=>{const a=e.toLowerCase().split("-"),n=a[0];let s=a.slice(1).join("-");if(n&&s==="h")return l.flipX=!0,l;if(n&&s==="v")return l.flipY=!0,l;if(s=parseFloat(s),isNaN(s))return l;switch(n){case"grow":l.size=l.size+s;break;case"shrink":l.size=l.size-s;break;case"left":l.x=l.x-s;break;case"right":l.x=l.x+s;break;case"up":l.y=l.y-s;break;case"down":l.y=l.y+s;break;case"rotate":l.rotate=l.rotate+s}return l},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var Po={mixout:()=>({parse:{transform:c=>J8(c)}}),hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-transform");return e&&(c.transform=J8(e)),c}}),provides(c){c.generateAbstractTransformGrouping=function(l){let{main:e,transform:a,containerWidth:n,iconWidth:s}=l;const i={transform:"translate(".concat(n/2," 256)")},t="translate(".concat(32*a.x,", ").concat(32*a.y,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(f," ").concat(r)},z={transform:"translate(".concat(s/2*-1," -256)")};return{tag:"g",attributes:{...i},children:[{tag:"g",attributes:{...m},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...z}}]}]}}}};const v4={x:0,y:0,width:"100%",height:"100%"};function Z8(c){let l=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}var To={hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-mask"),a=e?W1(e.split(" ").map(n=>n.trim())):{prefix:null,iconName:null,rest:[]};return a.prefix||(a.prefix=w2()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}),provides(c){c.generateAbstractMask=function(l){let{children:e,attributes:a,main:n,mask:s,maskId:i,transform:t}=l;const{width:f,icon:r}=n,{width:m,icon:z}=s,L=function(b){let{transform:v,containerWidth:k,iconWidth:w}=b;const y={transform:"translate(".concat(k/2," 256)")},A="translate(".concat(32*v.x,", ").concat(32*v.y,") "),_="scale(".concat(v.size/16*(v.flipX?-1:1),", ").concat(v.size/16*(v.flipY?-1:1),") "),B="rotate(".concat(v.rotate," 0 0)");return{outer:y,inner:{transform:"".concat(A," ").concat(_," ").concat(B)},path:{transform:"translate(".concat(w/2*-1," -256)")}}}({transform:t,containerWidth:m,iconWidth:f}),d={tag:"rect",attributes:{...v4,fill:"white"}},g=r.children?{children:r.children.map(Z8)}:{},u={tag:"g",attributes:{...L.inner},children:[Z8({tag:r.tag,attributes:{...r.attributes,...L.path},...g})]},p={tag:"g",attributes:{...L.outer},children:[u]},C="mask-".concat(i||p1()),M="clip-".concat(i||p1()),N={tag:"mask",attributes:{...v4,id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,p]},h={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:(x=z,x.tag==="g"?x.children:[x])},N]};var x;return e.push(h,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(C,")"),...v4}}),{children:e,attributes:a}}}},Oo={provides(c){let l=!1;b2.matchMedia&&(l=b2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...n,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return l||i.children.push({tag:"animate",attributes:{...n,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),e.push(i),e.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:l?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),l||e.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}};(function(c,l){let{mixoutsTo:e}=l;O8=c,K2={},Object.keys(Q2).forEach(a=>{mo.indexOf(a)===-1&&delete Q2[a]}),O8.forEach(a=>{const n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(s=>{typeof n[s]=="function"&&(e[s]=n[s]),typeof n[s]=="object"&&Object.keys(n[s]).forEach(i=>{e[s]||(e[s]={}),e[s][i]=n[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{K2[i]||(K2[i]=[]),K2[i].push(s[i])})}a.provides&&a.provides(Q2)})})([io,No,bo,yo,vo,_o,Bo,Po,To,Oo,{hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-symbol"),a=e!==null&&(e===""||e);return c.symbol=a,c}})}],{mixoutsTo:E2});const c5=E2.config,jo=E2.library,K1=E2.parse,Do=E2.icon,Fo=E2.text;function l5(c,l){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,a)}return e}function s2(c){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?l5(Object(e),!0).forEach(function(a){G(c,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):l5(Object(e)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(e,a))})}return c}function Q1(c){return Q1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Q1(c)}function G(c,l,e){return(l=function(a){var n=function(s){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var t=i.call(s,"string");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(a);return typeof n=="symbol"?n:n+""}(l))in c?Object.defineProperty(c,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[l]=e,c}function w4(c){return function(l){if(Array.isArray(l))return S4(l)}(c)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(c)||function(l,e){if(l){if(typeof l=="string")return S4(l,e);var a=Object.prototype.toString.call(l).slice(8,-1);return a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set"?Array.from(l):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?S4(l,e):void 0}}(c)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
  ______________________________________________________________________________
  
                                                                             .__ 
   ____  __ __ ___.__._____    ____            ___.__. _____            __ __|__|
  / ___|  |  <   |  |__    /       ______ <   |  |/        ______ |  |    |
 / /_/  >  |  /___  | / __ |   |   /_____/  ___  |  Y Y   /_____/ |  |  /  |
 ___  /|____/ / ____|(____  /___|  /          / ____|__|_|  /         |____/|__|
/_____/        /          /     /           /          /                    
                                             
  ______________________________________________________________________________
                                中文名： 云墨UI,
                                作者： guyan_tttt
  `,`
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text;
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `)})(),jo.add(Nu);const bu=function(c){return l=>X3(c,e=>l.use(e))}(kr);P.YmAlert=g5,P.YmButton=J1,P.YmButtonGroup=_4,P.YmCollapse=p5,P.YmCollapseItem=u5,P.YmContextMenu=h5,P.YmDropdown=U5,P.YmDropdownItem=V5,P.YmIcon=i5,P.YmPopconfirm=R5,P.YmTooltip=E5,P.default=bu,Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});