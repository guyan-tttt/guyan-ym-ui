(function(B,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):s((B=typeof globalThis<"u"?globalThis:B||self).云墨UI={},B.Vue)})(this,function(B,s){"use strict";var D6=typeof global=="object"&&global&&global.Object===Object&&global,ti=typeof self=="object"&&self&&self.Object===Object&&self,K=D6||ti||Function("return this")(),i2=K.Symbol,O6=Object.prototype,ri=O6.hasOwnProperty,fi=O6.toString,u1=i2?i2.toStringTag:void 0,mi=Object.prototype.toString,j6=i2?i2.toStringTag:void 0;function g2(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":j6&&j6 in Object(c)?function(l){var e=ri.call(l,u1),a=l[u1];try{l[u1]=void 0;var n=!0}catch{}var o=fi.call(l);return n&&(e?l[u1]=a:delete l[u1]),o}(c):function(l){return mi.call(l)}(c)}function J(c){return c!=null&&typeof c=="object"}function J1(c){return typeof c=="symbol"||J(c)&&g2(c)=="[object Symbol]"}function F6(c,l){for(var e=-1,a=c==null?0:c.length,n=Array(a);++e<a;)n[e]=l(c[e],e,c);return n}var Y=Array.isArray,E6=i2?i2.prototype:void 0,R6=E6?E6.toString:void 0;function H6(c){if(typeof c=="string")return c;if(Y(c))return F6(c,H6)+"";if(J1(c))return R6?R6.call(c):"";var l=c+"";return l=="0"&&1/c==-1/0?"-0":l}var zi=/\s/,pi=/^\s+/;function G(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}var ui=/^[-+]0x[0-9a-f]+$/i,Li=/^0b[01]+$/i,di=/^0o[0-7]+$/i,Mi=parseInt;function Z1(c){if(typeof c=="number")return c;if(J1(c))return NaN;if(G(c)){var l=typeof c.valueOf=="function"?c.valueOf():c;c=G(l)?l+"":l}if(typeof c!="string")return c===0?c:+c;var e;c=(e=c)?e.slice(0,function(n){for(var o=n.length;o--&&zi.test(n.charAt(o)););return o}(e)+1).replace(pi,""):e;var a=Li.test(c);return a||di.test(c)?Mi(c.slice(2),a?2:8):ui.test(c)?NaN:+c}var Ci=1/0;function V6(c){var l=function(a){return a?(a=Z1(a))===Ci||a===-1/0?17976931348623157e292*(a<0?-1:1):a==a?a:0:a===0?a:0}(c),e=l%1;return l==l?e?l-e:l:0}function L1(c){return c}function x2(c){if(!G(c))return!1;var l=g2(c);return l=="[object Function]"||l=="[object GeneratorFunction]"||l=="[object AsyncFunction]"||l=="[object Proxy]"}var I6,o4=K["__core-js_shared__"],q6=(I6=/[^.]+$/.exec(o4&&o4.keys&&o4.keys.IE_PROTO||""))?"Symbol(src)_1."+I6:"",hi=Function.prototype.toString;function F2(c){if(c!=null){try{return hi.call(c)}catch{}try{return c+""}catch{}}return""}var gi=/^\[object .+?Constructor\]$/,xi=Function.prototype,bi=Object.prototype,Ni=xi.toString,vi=bi.hasOwnProperty,yi=RegExp("^"+Ni.call(vi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function E2(c,l){var e=function(a,n){return a==null?void 0:a[n]}(c,l);return function(a){return!(!G(a)||(n=a,q6&&q6 in n))&&(x2(a)?yi:gi).test(F2(a));var n}(e)?e:void 0}var d1=E2(K,"WeakMap"),c3=d1&&new d1,U6=c3?function(c,l){return c3.set(c,l),c}:L1,W6=Object.create,l3=function(){function c(){}return function(l){if(!G(l))return{};if(W6)return W6(l);c.prototype=l;var e=new c;return c.prototype=void 0,e}}();function M1(c){return function(){var l=arguments;switch(l.length){case 0:return new c;case 1:return new c(l[0]);case 2:return new c(l[0],l[1]);case 3:return new c(l[0],l[1],l[2]);case 4:return new c(l[0],l[1],l[2],l[3]);case 5:return new c(l[0],l[1],l[2],l[3],l[4]);case 6:return new c(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new c(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var e=l3(c.prototype),a=c.apply(e,l);return G(a)?a:e}}function i4(c,l,e){switch(e.length){case 0:return c.call(l);case 1:return c.call(l,e[0]);case 2:return c.call(l,e[0],e[1]);case 3:return c.call(l,e[0],e[1],e[2])}return c.apply(l,e)}var wi=Math.max;function G6(c,l,e,a){for(var n=-1,o=c.length,i=e.length,r=-1,f=l.length,t=wi(o-i,0),m=Array(f+t),z=!a;++r<f;)m[r]=l[r];for(;++n<i;)(z||n<o)&&(m[e[n]]=c[n]);for(;t--;)m[r++]=c[n++];return m}var ki=Math.max;function $6(c,l,e,a){for(var n=-1,o=c.length,i=-1,r=e.length,f=-1,t=l.length,m=ki(o-r,0),z=Array(m+t),u=!a;++n<m;)z[n]=c[n];for(var M=n;++f<t;)z[M+f]=l[f];for(;++i<r;)(u||n<o)&&(z[M+e[i]]=c[n++]);return z}function t4(){}function X2(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Y6(){}X2.prototype=l3(t4.prototype),X2.prototype.constructor=X2;var K6=c3?function(c){return c3.get(c)}:Y6,X6={},Si=Object.prototype.hasOwnProperty;function Q2(c,l){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=void 0}function e3(c,l){var e=-1,a=c.length;for(l||(l=Array(a));++e<a;)l[e]=c[e];return l}Q2.prototype=l3(t4.prototype),Q2.prototype.constructor=Q2;var Ai=Object.prototype.hasOwnProperty;function a3(c){if(J(c)&&!Y(c)&&!(c instanceof X2)){if(c instanceof Q2)return c;if(Ai.call(c,"__wrapped__"))return function(l){if(l instanceof X2)return l.clone();var e=new Q2(l.__wrapped__,l.__chain__);return e.__actions__=e3(l.__actions__),e.__index__=l.__index__,e.__values__=l.__values__,e}(c)}return new Q2(c)}a3.prototype=t4.prototype,a3.prototype.constructor=a3;var _i=Date.now;function Q6(c){var l=0,e=0;return function(){var a=_i(),n=16-(a-e);if(e=a,n>0){if(++l>=800)return arguments[0]}else l=0;return c.apply(void 0,arguments)}}var J6=Q6(U6),Bi=/\{\n\/\* \[wrapped with (.+)\] \*/,Ti=/,? & /,Pi=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,s3=function(){try{var c=E2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Di=s3?function(c,l){return s3(c,"toString",{configurable:!0,enumerable:!1,value:(e=l,function(){return e}),writable:!0});var e}:L1,r4=Q6(Di);function f4(c,l){for(var e=-1,a=c==null?0:c.length;++e<a&&l(c[e],e,c)!==!1;);return c}function Z6(c,l,e,a){for(var n=c.length,o=e+-1;++o<n;)if(l(c[o],o,c))return o;return-1}function Oi(c){return c!=c}var ji=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];function c8(c,l,e){var a=l+"";return r4(c,function(n,o){var i=o.length;if(!i)return n;var r=i-1;return o[r]=(i>1?"& ":"")+o[r],o=o.join(i>2?", ":" "),n.replace(Pi,`{
/* [wrapped with `+o+`] */
`)}(a,function(n,o){return f4(ji,function(i){var r="_."+i[0];o&i[1]&&!function(f,t){return!(f==null||!f.length)&&function(m,z){return z==z?function(u,M){for(var L=-1,d=u.length;++L<d;)if(u[L]===M)return L;return-1}(m,z):Z6(m,Oi,0)}(f,t)>-1}(n,r)&&n.push(r)}),n.sort()}(function(n){var o=n.match(Bi);return o?o[1].split(Ti):[]}(a),e)))}function l8(c,l,e,a,n,o,i,r,f,t){var m=8&l;l|=m?32:64,4&(l&=~(m?64:32))||(l&=-4);var z=[c,l,n,m?o:void 0,m?i:void 0,m?void 0:o,m?void 0:i,r,f,t],u=e.apply(void 0,z);return function(M){var L=function(C){for(var g=C.name+"",N=X6[g],x=Si.call(X6,g)?N.length:0;x--;){var v=N[x],b=v.func;if(b==null||b==C)return v.name}return g}(M),d=a3[L];if(typeof d!="function"||!(L in X2.prototype))return!1;if(M===d)return!0;var p=K6(d);return!!p&&M===p[0]}(c)&&J6(u,z),u.placeholder=a,c8(u,c,l)}function m4(c){return c.placeholder}var Fi=/^(?:0|[1-9]\d*)$/;function C1(c,l){var e=typeof c;return!!(l=l??9007199254740991)&&(e=="number"||e!="symbol"&&Fi.test(c))&&c>-1&&c%1==0&&c<l}var Ei=Math.min,e8="__lodash_placeholder__";function h1(c,l){for(var e=-1,a=c.length,n=0,o=[];++e<a;){var i=c[e];i!==l&&i!==e8||(c[e]=e8,o[n++]=e)}return o}function z4(c,l,e,a,n,o,i,r,f,t){var m=128&l,z=1&l,u=2&l,M=24&l,L=512&l,d=u?void 0:M1(c);return function p(){for(var C=arguments.length,g=Array(C),N=C;N--;)g[N]=arguments[N];if(M)var x=m4(p),v=function(y,k){for(var S=y.length,_=0;S--;)y[S]===k&&++_;return _}(g,x);if(a&&(g=G6(g,a,n,M)),o&&(g=$6(g,o,i,M)),C-=v,M&&C<t){var b=h1(g,x);return l8(c,l,z4,p.placeholder,e,g,b,r,f,t-C)}var h=z?e:this,w=u?h[c]:c;return C=g.length,r?g=function(y,k){for(var S=y.length,_=Ei(k.length,S),T=e3(y);_--;){var D=k[_];y[_]=C1(D,S)?T[D]:void 0}return y}(g,r):L&&C>1&&g.reverse(),m&&f<C&&(g.length=f),this&&this!==K&&this instanceof p&&(w=d||M1(w)),w.apply(h,g)}}var a8="__lodash_placeholder__",Ri=Math.min,s8=Math.max;function p4(c,l,e){l=="__proto__"&&s3?s3(c,l,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[l]=e}function g1(c,l){return c===l||c!=c&&l!=l}var Hi=Object.prototype.hasOwnProperty;function n3(c,l,e){var a=c[l];Hi.call(c,l)&&g1(a,e)&&(e!==void 0||l in c)||p4(c,l,e)}function R2(c,l,e,a){var n=!e;e||(e={});for(var o=-1,i=l.length;++o<i;){var r=l[o],f=void 0;f===void 0&&(f=c[r]),n?p4(e,r,f):n3(e,r,f)}return e}var n8=Math.max;function o8(c,l,e){return l=n8(l===void 0?c.length-1:l,0),function(){for(var a=arguments,n=-1,o=n8(a.length-l,0),i=Array(o);++n<o;)i[n]=a[l+n];n=-1;for(var r=Array(l+1);++n<l;)r[n]=a[n];return r[l]=e(i),i4(c,this,r)}}function o3(c,l){return r4(o8(c,l,L1),c+"")}function u4(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}function J2(c){return c!=null&&u4(c.length)&&!x2(c)}function i8(c){return o3(function(l,e){var a=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=c.length>3&&typeof o=="function"?(n--,o):void 0,i&&function(f,t,m){if(!G(m))return!1;var z=typeof t;return!!(z=="number"?J2(m)&&C1(t,m.length):z=="string"&&t in m)&&g1(m[t],f)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),l=Object(l);++a<n;){var r=e[a];r&&c(l,r,a,o)}return l})}var Vi=Object.prototype;function i3(c){var l=c&&c.constructor;return c===(typeof l=="function"&&l.prototype||Vi)}function t8(c){return J(c)&&g2(c)=="[object Arguments]"}var r8=Object.prototype,Ii=r8.hasOwnProperty,qi=r8.propertyIsEnumerable,x1=t8(function(){return arguments}())?t8:function(c){return J(c)&&Ii.call(c,"callee")&&!qi.call(c,"callee")},f8=typeof B=="object"&&B&&!B.nodeType&&B,m8=f8&&typeof module=="object"&&module&&!module.nodeType&&module,z8=m8&&m8.exports===f8?K.Buffer:void 0,b1=(z8?z8.isBuffer:void 0)||function(){return!1},E={};function L4(c){return function(l){return c(l)}}E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Arguments]"]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object Boolean]"]=E["[object DataView]"]=E["[object Date]"]=E["[object Error]"]=E["[object Function]"]=E["[object Map]"]=E["[object Number]"]=E["[object Object]"]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object WeakMap]"]=!1;var p8=typeof B=="object"&&B&&!B.nodeType&&B,N1=p8&&typeof module=="object"&&module&&!module.nodeType&&module,d4=N1&&N1.exports===p8&&D6.process,Z2=function(){try{return N1&&N1.require&&N1.require("util").types||d4&&d4.binding&&d4.binding("util")}catch{}}(),u8=Z2&&Z2.isTypedArray,M4=u8?L4(u8):function(c){return J(c)&&u4(c.length)&&!!E[g2(c)]},Ui=Object.prototype.hasOwnProperty;function L8(c,l){var e=Y(c),a=!e&&x1(c),n=!e&&!a&&b1(c),o=!e&&!a&&!n&&M4(c),i=e||a||n||o,r=i?function(m,z){for(var u=-1,M=Array(m);++u<m;)M[u]=z(u);return M}(c.length,String):[],f=r.length;for(var t in c)!l&&!Ui.call(c,t)||i&&(t=="length"||n&&(t=="offset"||t=="parent")||o&&(t=="buffer"||t=="byteLength"||t=="byteOffset")||C1(t,f))||r.push(t);return r}function d8(c,l){return function(e){return c(l(e))}}var Wi=d8(Object.keys,Object),Gi=Object.prototype.hasOwnProperty;function c1(c){return J2(c)?L8(c):function(l){if(!i3(l))return Wi(l);var e=[];for(var a in Object(l))Gi.call(l,a)&&a!="constructor"&&e.push(a);return e}(c)}var $i=Object.prototype.hasOwnProperty,M8=i8(function(c,l){if(i3(l)||J2(l))R2(l,c1(l),c);else for(var e in l)$i.call(l,e)&&n3(c,e,l[e])}),Yi=Object.prototype.hasOwnProperty;function v1(c){return J2(c)?L8(c,!0):function(l){if(!G(l))return function(o){var i=[];if(o!=null)for(var r in Object(o))i.push(r);return i}(l);var e=i3(l),a=[];for(var n in l)(n!="constructor"||!e&&Yi.call(l,n))&&a.push(n);return a}(c)}var Ki=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xi=/^\w*$/;function C4(c,l){if(Y(c))return!1;var e=typeof c;return!(e!="number"&&e!="symbol"&&e!="boolean"&&c!=null&&!J1(c))||Xi.test(c)||!Ki.test(c)||l!=null&&c in Object(l)}var y1=E2(Object,"create"),Qi=Object.prototype.hasOwnProperty,Ji=Object.prototype.hasOwnProperty;function H2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}function t3(c,l){for(var e=c.length;e--;)if(g1(c[e][0],l))return e;return-1}H2.prototype.clear=function(){this.__data__=y1?y1(null):{},this.size=0},H2.prototype.delete=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l},H2.prototype.get=function(c){var l=this.__data__;if(y1){var e=l[c];return e==="__lodash_hash_undefined__"?void 0:e}return Qi.call(l,c)?l[c]:void 0},H2.prototype.has=function(c){var l=this.__data__;return y1?l[c]!==void 0:Ji.call(l,c)},H2.prototype.set=function(c,l){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=y1&&l===void 0?"__lodash_hash_undefined__":l,this};var Zi=Array.prototype.splice;function b2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}b2.prototype.clear=function(){this.__data__=[],this.size=0},b2.prototype.delete=function(c){var l=this.__data__,e=t3(l,c);return!(e<0||(e==l.length-1?l.pop():Zi.call(l,e,1),--this.size,0))},b2.prototype.get=function(c){var l=this.__data__,e=t3(l,c);return e<0?void 0:l[e][1]},b2.prototype.has=function(c){return t3(this.__data__,c)>-1},b2.prototype.set=function(c,l){var e=this.__data__,a=t3(e,c);return a<0?(++this.size,e.push([c,l])):e[a][1]=l,this};var w1=E2(K,"Map");function r3(c,l){var e,a,n=c.__data__;return((a=typeof(e=l))=="string"||a=="number"||a=="symbol"||a=="boolean"?e!=="__proto__":e===null)?n[typeof l=="string"?"string":"hash"]:n.map}function N2(c){var l=-1,e=c==null?0:c.length;for(this.clear();++l<e;){var a=c[l];this.set(a[0],a[1])}}function h4(c,l){if(typeof c!="function"||l!=null&&typeof l!="function")throw new TypeError("Expected a function");var e=function(){var a=arguments,n=l?l.apply(this,a):a[0],o=e.cache;if(o.has(n))return o.get(n);var i=c.apply(this,a);return e.cache=o.set(n,i)||o,i};return e.cache=new(h4.Cache||N2),e}N2.prototype.clear=function(){this.size=0,this.__data__={hash:new H2,map:new(w1||b2),string:new H2}},N2.prototype.delete=function(c){var l=r3(this,c).delete(c);return this.size-=l?1:0,l},N2.prototype.get=function(c){return r3(this,c).get(c)},N2.prototype.has=function(c){return r3(this,c).has(c)},N2.prototype.set=function(c,l){var e=r3(this,c),a=e.size;return e.set(c,l),this.size+=e.size==a?0:1,this},h4.Cache=N2;var C8,g4,x4,ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,et=(C8=function(c){var l=[];return c.charCodeAt(0)===46&&l.push(""),c.replace(ct,function(e,a,n,o){l.push(n?o.replace(lt,"$1"):a||e)}),l},g4=h4(C8,function(c){return x4.size===500&&x4.clear(),c}),x4=g4.cache,g4);function k1(c,l){return Y(c)?c:C4(c,l)?[c]:et(function(e){return e==null?"":H6(e)}(c))}function l1(c){if(typeof c=="string"||J1(c))return c;var l=c+"";return l=="0"&&1/c==-1/0?"-0":l}function b4(c,l){for(var e=0,a=(l=k1(l,c)).length;c!=null&&e<a;)c=c[l1(l[e++])];return e&&e==a?c:void 0}function N4(c,l,e){var a=c==null?void 0:b4(c,l);return a===void 0?e:a}function v4(c,l){for(var e=-1,a=l.length,n=c.length;++e<a;)c[n+e]=l[e];return c}var h8=i2?i2.isConcatSpreadable:void 0;function at(c){return Y(c)||x1(c)||!!(h8&&c&&c[h8])}function st(c){return c!=null&&c.length?function(l,e,a,n,o){var i=-1,r=l.length;for(a||(a=at),o||(o=[]);++i<r;){var f=l[i];a(f)?v4(o,f):o[o.length]=f}return o}(c):[]}var y4=d8(Object.getPrototypeOf,Object),nt=Function.prototype,ot=Object.prototype,g8=nt.toString,it=ot.hasOwnProperty,tt=g8.call(Object);function w4(c){if(!J(c)||g2(c)!="[object Object]")return!1;var l=y4(c);if(l===null)return!0;var e=it.call(l,"constructor")&&l.constructor;return typeof e=="function"&&e instanceof e&&g8.call(e)==tt}var e1=o3(function(c,l,e){var a=1;if(e.length){var n=h1(e,m4(e1));a|=32}return function(o,i,r,f,t,m,z,u){var M=2&i;if(!M&&typeof o!="function")throw new TypeError("Expected a function");var L=f?f.length:0;if(L||(i&=-97,f=t=void 0),z=z===void 0?z:s8(V6(z),0),u=u===void 0?u:V6(u),L-=t?t.length:0,64&i){var d=f,p=t;f=t=void 0}var C=M?void 0:K6(o),g=[o,i,r,f,t,d,p,void 0,z,u];if(C&&function(x,v){var b=x[1],h=v[1],w=b|h,y=w<131,k=h==128&&b==8||h==128&&b==256&&x[7].length<=v[8]||h==384&&v[7].length<=v[8]&&b==8;if(!y&&!k)return x;1&h&&(x[2]=v[2],w|=1&b?0:4);var S=v[3];if(S){var _=x[3];x[3]=_?G6(_,S,v[4]):S,x[4]=_?h1(x[3],a8):v[4]}(S=v[5])&&(_=x[5],x[5]=_?$6(_,S,v[6]):S,x[6]=_?h1(x[5],a8):v[6]),(S=v[7])&&(x[7]=S),128&h&&(x[8]=x[8]==null?v[8]:Ri(x[8],v[8])),x[9]==null&&(x[9]=v[9]),x[0]=v[0],x[1]=w}(g,C),o=g[0],i=g[1],r=g[2],f=g[3],t=g[4],!(u=g[9]=g[9]===void 0?M?0:o.length:s8(g[9]-L,0))&&24&i&&(i&=-25),i&&i!=1)N=i==8||i==16?function(x,v,b){var h=M1(x);return function w(){for(var y=arguments.length,k=Array(y),S=y,_=m4(w);S--;)k[S]=arguments[S];var T=y<3&&k[0]!==_&&k[y-1]!==_?[]:h1(k,_);return(y-=T.length)<b?l8(x,v,z4,w.placeholder,void 0,k,T,void 0,void 0,b-y):i4(this&&this!==K&&this instanceof w?h:x,this,k)}}(o,i,u):i!=32&&i!=33||t.length?z4.apply(void 0,g):function(x,v,b,h){var w=1&v,y=M1(x);return function k(){for(var S=-1,_=arguments.length,T=-1,D=h.length,O=Array(D+_),P=this&&this!==K&&this instanceof k?y:x;++T<D;)O[T]=h[T];for(;_--;)O[T++]=arguments[++S];return i4(P,w?b:this,O)}}(o,i,r,f);else var N=function(x,v,b){var h=1&v,w=M1(x);return function y(){return(this&&this!==K&&this instanceof y?w:x).apply(h?b:this,arguments)}}(o,i,r);return c8((C?U6:J6)(N,g),o,i)}(c,a,l,e,n)});function m2(c){var l=this.__data__=new b2(c);this.size=l.size}e1.placeholder={},m2.prototype.clear=function(){this.__data__=new b2,this.size=0},m2.prototype.delete=function(c){var l=this.__data__,e=l.delete(c);return this.size=l.size,e},m2.prototype.get=function(c){return this.__data__.get(c)},m2.prototype.has=function(c){return this.__data__.has(c)},m2.prototype.set=function(c,l){var e=this.__data__;if(e instanceof b2){var a=e.__data__;if(!w1||a.length<199)return a.push([c,l]),this.size=++e.size,this;e=this.__data__=new N2(a)}return e.set(c,l),this.size=e.size,this};var x8=typeof B=="object"&&B&&!B.nodeType&&B,b8=x8&&typeof module=="object"&&module&&!module.nodeType&&module,N8=b8&&b8.exports===x8?K.Buffer:void 0,v8=N8?N8.allocUnsafe:void 0;function y8(c,l){if(l)return c.slice();var e=c.length,a=v8?v8(e):new c.constructor(e);return c.copy(a),a}function w8(){return[]}var rt=Object.prototype.propertyIsEnumerable,k8=Object.getOwnPropertySymbols,k4=k8?function(c){return c==null?[]:(c=Object(c),function(l){for(var e=-1,a=l==null?0:l.length,n=0,o=[];++e<a;){var i=l[e];r=i,rt.call(c,r)&&(o[n++]=i)}var r;return o}(k8(c)))}:w8,S8=Object.getOwnPropertySymbols?function(c){for(var l=[];c;)v4(l,k4(c)),c=y4(c);return l}:w8;function A8(c,l,e){var a=l(c);return Y(c)?a:v4(a,e(c))}function S4(c){return A8(c,c1,k4)}function _8(c){return A8(c,v1,S8)}var A4=E2(K,"DataView"),_4=E2(K,"Promise"),B4=E2(K,"Set"),B8="[object Map]",T8="[object Promise]",P8="[object Set]",D8="[object WeakMap]",O8="[object DataView]",ft=F2(A4),mt=F2(w1),zt=F2(_4),pt=F2(B4),ut=F2(d1),z2=g2;(A4&&z2(new A4(new ArrayBuffer(1)))!=O8||w1&&z2(new w1)!=B8||_4&&z2(_4.resolve())!=T8||B4&&z2(new B4)!=P8||d1&&z2(new d1)!=D8)&&(z2=function(c){var l=g2(c),e=l=="[object Object]"?c.constructor:void 0,a=e?F2(e):"";if(a)switch(a){case ft:return O8;case mt:return B8;case zt:return T8;case pt:return P8;case ut:return D8}return l});var Lt=Object.prototype.hasOwnProperty,f3=K.Uint8Array;function T4(c){var l=new c.constructor(c.byteLength);return new f3(l).set(new f3(c)),l}var dt=/\w*$/,j8=i2?i2.prototype:void 0,F8=j8?j8.valueOf:void 0;function E8(c,l){var e=l?T4(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}function R8(c){return typeof c.constructor!="function"||i3(c)?{}:l3(y4(c))}var H8=Z2&&Z2.isMap,Mt=H8?L4(H8):function(c){return J(c)&&z2(c)=="[object Map]"},V8=Z2&&Z2.isSet,Ct=V8?L4(V8):function(c){return J(c)&&z2(c)=="[object Set]"},I8="[object Arguments]",q8="[object Function]",U8="[object Object]",F={};function S1(c,l,e,a,n,o){var i,r=1&l,f=2&l,t=4&l;if(e&&(i=n?e(c,a,n,o):e(c)),i!==void 0)return i;if(!G(c))return c;var m=Y(c);if(m){if(i=function(d){var p=d.length,C=new d.constructor(p);return p&&typeof d[0]=="string"&&Lt.call(d,"index")&&(C.index=d.index,C.input=d.input),C}(c),!r)return e3(c,i)}else{var z=z2(c),u=z==q8||z=="[object GeneratorFunction]";if(b1(c))return y8(c,r);if(z==U8||z==I8||u&&!n){if(i=f||u?{}:R8(c),!r)return f?function(d,p){return R2(d,S8(d),p)}(c,function(d,p){return d&&R2(p,v1(p),d)}(i,c)):function(d,p){return R2(d,k4(d),p)}(c,function(d,p){return d&&R2(p,c1(p),d)}(i,c))}else{if(!F[z])return n?c:{};i=function(d,p,C){var g,N=d.constructor;switch(p){case"[object ArrayBuffer]":return T4(d);case"[object Boolean]":case"[object Date]":return new N(+d);case"[object DataView]":return function(x,v){var b=v?T4(x.buffer):x.buffer;return new x.constructor(b,x.byteOffset,x.byteLength)}(d,C);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return E8(d,C);case"[object Map]":case"[object Set]":return new N;case"[object Number]":case"[object String]":return new N(d);case"[object RegExp]":return function(x){var v=new x.constructor(x.source,dt.exec(x));return v.lastIndex=x.lastIndex,v}(d);case"[object Symbol]":return g=d,F8?Object(F8.call(g)):{}}}(c,z,r)}}o||(o=new m2);var M=o.get(c);if(M)return M;o.set(c,i),Ct(c)?c.forEach(function(d){i.add(S1(d,l,e,d,c,o))}):Mt(c)&&c.forEach(function(d,p){i.set(p,S1(d,l,e,p,c,o))});var L=m?void 0:(t?f?_8:S4:f?v1:c1)(c);return f4(L||c,function(d,p){L&&(d=c[p=d]),n3(i,p,S1(d,l,e,p,c,o))}),i}function m3(c){var l=-1,e=c==null?0:c.length;for(this.__data__=new N2;++l<e;)this.add(c[l])}function ht(c,l){for(var e=-1,a=c==null?0:c.length;++e<a;)if(l(c[e],e,c))return!0;return!1}function gt(c,l){return c.has(l)}function W8(c,l,e,a,n,o){var i=1&e,r=c.length,f=l.length;if(r!=f&&!(i&&f>r))return!1;var t=o.get(c),m=o.get(l);if(t&&m)return t==l&&m==c;var z=-1,u=!0,M=2&e?new m3:void 0;for(o.set(c,l),o.set(l,c);++z<r;){var L=c[z],d=l[z];if(a)var p=i?a(d,L,z,l,c,o):a(L,d,z,c,l,o);if(p!==void 0){if(p)continue;u=!1;break}if(M){if(!ht(l,function(C,g){if(!gt(M,g)&&(L===C||n(L,C,e,a,o)))return M.push(g)})){u=!1;break}}else if(L!==d&&!n(L,d,e,a,o)){u=!1;break}}return o.delete(c),o.delete(l),u}function xt(c){var l=-1,e=Array(c.size);return c.forEach(function(a,n){e[++l]=[n,a]}),e}function bt(c){var l=-1,e=Array(c.size);return c.forEach(function(a){e[++l]=a}),e}F[I8]=F["[object Array]"]=F["[object ArrayBuffer]"]=F["[object DataView]"]=F["[object Boolean]"]=F["[object Date]"]=F["[object Float32Array]"]=F["[object Float64Array]"]=F["[object Int8Array]"]=F["[object Int16Array]"]=F["[object Int32Array]"]=F["[object Map]"]=F["[object Number]"]=F[U8]=F["[object RegExp]"]=F["[object Set]"]=F["[object String]"]=F["[object Symbol]"]=F["[object Uint8Array]"]=F["[object Uint8ClampedArray]"]=F["[object Uint16Array]"]=F["[object Uint32Array]"]=!0,F["[object Error]"]=F[q8]=F["[object WeakMap]"]=!1,m3.prototype.add=m3.prototype.push=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this},m3.prototype.has=function(c){return this.__data__.has(c)};var G8=i2?i2.prototype:void 0,P4=G8?G8.valueOf:void 0,Nt=Object.prototype.hasOwnProperty,$8="[object Arguments]",Y8="[object Array]",z3="[object Object]",K8=Object.prototype.hasOwnProperty;function D4(c,l,e,a,n){return c===l||(c==null||l==null||!J(c)&&!J(l)?c!=c&&l!=l:function(o,i,r,f,t,m){var z=Y(o),u=Y(i),M=z?Y8:z2(o),L=u?Y8:z2(i),d=(M=M==$8?z3:M)==z3,p=(L=L==$8?z3:L)==z3,C=M==L;if(C&&b1(o)){if(!b1(i))return!1;z=!0,d=!1}if(C&&!d)return m||(m=new m2),z||M4(o)?W8(o,i,r,f,t,m):function(b,h,w,y,k,S,_){switch(w){case"[object DataView]":if(b.byteLength!=h.byteLength||b.byteOffset!=h.byteOffset)return!1;b=b.buffer,h=h.buffer;case"[object ArrayBuffer]":return!(b.byteLength!=h.byteLength||!S(new f3(b),new f3(h)));case"[object Boolean]":case"[object Date]":case"[object Number]":return g1(+b,+h);case"[object Error]":return b.name==h.name&&b.message==h.message;case"[object RegExp]":case"[object String]":return b==h+"";case"[object Map]":var T=xt;case"[object Set]":var D=1&y;if(T||(T=bt),b.size!=h.size&&!D)return!1;var O=_.get(b);if(O)return O==h;y|=2,_.set(b,h);var P=W8(T(b),T(h),y,k,S,_);return _.delete(b),P;case"[object Symbol]":if(P4)return P4.call(b)==P4.call(h)}return!1}(o,i,M,r,f,t,m);if(!(1&r)){var g=d&&K8.call(o,"__wrapped__"),N=p&&K8.call(i,"__wrapped__");if(g||N){var x=g?o.value():o,v=N?i.value():i;return m||(m=new m2),t(x,v,r,f,m)}}return!!C&&(m||(m=new m2),function(b,h,w,y,k,S){var _=1&w,T=S4(b),D=T.length;if(D!=S4(h).length&&!_)return!1;for(var O=D;O--;){var P=T[O];if(!(_?P in h:Nt.call(h,P)))return!1}var V=S.get(b),q=S.get(h);if(V&&q)return V==h&&q==b;var e2=!0;S.set(b,h),S.set(h,b);for(var I=_;++O<D;){var j=b[P=T[O]],U=h[P];if(y)var Q=_?y(U,j,P,h,b,S):y(j,U,P,b,h,S);if(!(Q===void 0?j===U||k(j,U,w,y,S):Q)){e2=!1;break}I||(I=P=="constructor")}if(e2&&!I){var o2=b.constructor,A2=h.constructor;o2==A2||!("constructor"in b)||!("constructor"in h)||typeof o2=="function"&&o2 instanceof o2&&typeof A2=="function"&&A2 instanceof A2||(e2=!1)}return S.delete(b),S.delete(h),e2}(o,i,r,f,t,m))}(c,l,e,a,D4,n))}function X8(c){return c==c&&!G(c)}function Q8(c,l){return function(e){return e!=null&&e[c]===l&&(l!==void 0||c in Object(e))}}function vt(c,l){return c!=null&&l in Object(c)}var J8,Z8=function(c,l,e){for(var a=-1,n=Object(c),o=e(c),i=o.length;i--;){var r=o[++a];if(l(n[r],r,n)===!1)break}return c},yt=(J8=function(c,l){return c&&Z8(c,l,c1)},function(c,l){if(c==null)return c;if(!J2(c))return J8(c,l);for(var e=c.length,a=-1,n=Object(c);++a<e&&l(n[a],a,n)!==!1;);return c}),O4=function(){return K.Date.now()},wt=Math.max,kt=Math.min;function j4(c,l,e){var a,n,o,i,r,f,t=0,m=!1,z=!1,u=!0;if(typeof c!="function")throw new TypeError("Expected a function");function M(g){var N=a,x=n;return a=n=void 0,t=g,i=c.apply(x,N)}function L(g){var N=g-f;return f===void 0||N>=l||N<0||z&&g-t>=o}function d(){var g=O4();if(L(g))return p(g);r=setTimeout(d,function(N){var x=l-(N-f);return z?kt(x,o-(N-t)):x}(g))}function p(g){return r=void 0,u&&a?M(g):(a=n=void 0,i)}function C(){var g=O4(),N=L(g);if(a=arguments,n=this,f=g,N){if(r===void 0)return function(x){return t=x,r=setTimeout(d,l),m?M(x):i}(f);if(z)return clearTimeout(r),r=setTimeout(d,l),M(f)}return r===void 0&&(r=setTimeout(d,l)),i}return l=Z1(l)||0,G(e)&&(m=!!e.leading,o=(z="maxWait"in e)?wt(Z1(e.maxWait)||0,l):o,u="trailing"in e?!!e.trailing:u),C.cancel=function(){r!==void 0&&clearTimeout(r),t=0,a=f=n=r=void 0},C.flush=function(){return r===void 0?i:p(O4())},C}function F4(c,l,e){(e!==void 0&&!g1(c[l],e)||e===void 0&&!(l in c))&&p4(c,l,e)}function E4(c,l){if((l!=="constructor"||typeof c[l]!="function")&&l!="__proto__")return c[l]}function c5(c,l,e,a,n){c!==l&&Z8(l,function(o,i){if(n||(n=new m2),G(o))(function(f,t,m,z,u,M,L){var d=E4(f,m),p=E4(t,m),C=L.get(p);if(C)F4(f,m,C);else{var g,N=M?M(d,p,m+"",f,t,L):void 0,x=N===void 0;if(x){var v=Y(p),b=!v&&b1(p),h=!v&&!b&&M4(p);N=p,v||b||h?Y(d)?N=d:J(g=d)&&J2(g)?N=e3(d):b?(x=!1,N=y8(p,!0)):h?(x=!1,N=E8(p,!0)):N=[]:w4(p)||x1(p)?(N=d,x1(d)?N=function(w){return R2(w,v1(w))}(d):G(d)&&!x2(d)||(N=R8(p))):x=!1}x&&(L.set(p,N),u(N,p,z,M,L),L.delete(p)),F4(f,m,N)}})(c,l,i,e,c5,a,n);else{var r=a?a(E4(c,i),o,i+"",c,l,n):void 0;r===void 0&&(r=o),F4(c,i,r)}},v1)}function l5(c,l,e){if(typeof c!="function")throw new TypeError("Expected a function");return setTimeout(function(){c.apply(void 0,e)},l)}var St=o3(function(c,l){return l5(c,1,l)}),R4=o3(function(c,l,e){return l5(c,Z1(l)||0,e)});function p2(c,l){var e;return(Y(c)?f4:yt)(c,typeof(e=l)=="function"?e:L1)}function p3(c,l,e){return c!=null&&c.length?Z6(c,typeof(a=l)=="function"?a:a==null?L1:typeof a=="object"?Y(a)?(i=a[0],r=a[1],C4(i)&&X8(r)?Q8(l1(i),r):function(f){var t=N4(f,i);return t===void 0&&t===r?function(m,z){return m!=null&&function(u,M,L){for(var d=-1,p=(M=k1(M,u)).length,C=!1;++d<p;){var g=l1(M[d]);if(!(C=u!=null&&L(u,g)))break;u=u[g]}return C||++d!=p?C:!!(p=u==null?0:u.length)&&u4(p)&&C1(g,p)&&(Y(u)||x1(u))}(m,z,vt)}(f,i):D4(r,t,3)}):(o=function(f){for(var t=c1(f),m=t.length;m--;){var z=t[m],u=f[z];t[m]=[z,u,X8(u)]}return t}(n=a),o.length==1&&o[0][2]?Q8(o[0][0],o[0][1]):function(f){return f===n||function(t,m,z){var u=z.length,M=u;if(t==null)return!M;for(t=Object(t);u--;){var L=z[u];if(L[2]?L[1]!==t[L[0]]:!(L[0]in t))return!1}for(;++u<M;){var d=(L=z[u])[0],p=t[d],C=L[1];if(L[2]){if(p===void 0&&!(d in t))return!1}else if(!D4(C,p,3,void 0,new m2))return!1}return!0}(f,0,o)}):function(f){return C4(f)?(t=l1(f),function(m){return m==null?void 0:m[t]}):function(m){return function(z){return b4(z,m)}}(f);var t}(a),0):-1;var a,n,o,i,r}function v2(c){return typeof c=="string"||!Y(c)&&J(c)&&g2(c)=="[object String]"}function e5(c){return J(c)&&c.nodeType===1&&!w4(c)}function u3(c){return c==null}var a5=i8(function(c,l,e){c5(c,l,e)});function At(c,l){return(c=function(n,o){return o.length<2?n:b4(n,function(i,r,f){var t=-1,m=i.length;r<0&&(r=-r>m?0:m+r),(f=f>m?m:f)<0&&(f+=m),m=r>f?0:f-r>>>0,r>>>=0;for(var z=Array(m);++t<m;)z[t]=i[t+r];return z}(o,0,-1))}(c,l=k1(l,c)))==null||delete c[l1((e=l,a=e==null?0:e.length,a?e[a-1]:void 0))];var e,a}function _t(c){return w4(c)?void 0:c}var H4=function(c){return r4(o8(c,void 0,st),c+"")}(function(c,l){var e={};if(c==null)return e;var a=!1;l=F6(l,function(o){return o=k1(o,c),a||(a=o.length>1),o}),R2(c,_8(c),e),a&&(e=S1(e,7,_t));for(var n=l.length;n--;)At(e,l[n]);return e});function A1(c,l,e){return c==null?c:function(a,n,o){if(!G(a))return a;for(var i=-1,r=(n=k1(n,a)).length,f=r-1,t=a;t!=null&&++i<r;){var m=l1(n[i]),z=o;if(m==="__proto__"||m==="constructor"||m==="prototype")return a;if(i!=f){var u=t[m];(z=void 0)==void 0&&(z=G(u)?u:C1(n[i+1])?[]:{})}n3(t,m,z),t=t[m]}return a}(c,l,e)}const s5=()=>{};let V4={},n5={},o5=null,i5={mark:s5,measure:s5};try{typeof window<"u"&&(V4=window),typeof document<"u"&&(n5=document),typeof MutationObserver<"u"&&(o5=MutationObserver),typeof performance<"u"&&(i5=performance)}catch{}const{userAgent:t5=""}=V4.navigator||{},_2=V4,R=n5,r5=o5,L3=i5;_2.document;const y2=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",f5=~t5.indexOf("MSIE")||~t5.indexOf("Trident/");var H="classic",m5="duotone",a2="sharp",s2="sharp-duotone",Bt=[H,m5,a2,s2],z5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},p5=[1,2,3,4,5,6,7,8,9,10],Tt=p5.concat([11,12,13,14,15,16,17,18,19,20]),_1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pt=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_1.GROUP,_1.SWAP_OPACITY,_1.PRIMARY,_1.SECONDARY].concat(p5.map(c=>"".concat(c,"x"))).concat(Tt.map(c=>"w-".concat(c)));const w2="___FONT_AWESOME___",I4=16,u5="svg-inline--fa",V2="data-fa-i2svg",q4="data-fa-pseudo-element",U4="data-prefix",W4="data-icon",L5="fontawesome-i2svg",Dt=["HTML","HEAD","STYLE","SCRIPT"],d5=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),M5=[H,a2,s2];function B1(c){return new Proxy(c,{get:(l,e)=>e in l?l[e]:l[H]})}const C5={...z5};C5[H]={...z5[H],fak:"kit","fa-kit":"kit",fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};const I2=B1(C5),G4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}};G4[H]={...G4[H],kit:"fak","kit-duotone":"fakd"};const T1=B1(G4),$4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}};$4[H]={...$4[H],fak:"fa-kit"};const q2=B1($4),Y4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}};Y4[H]={...Y4[H],"fa-kit":"fak"};const Ot=B1(Y4),jt=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,h5="fa-layers-text",Ft=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;B1({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}});const Et=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K4=_1,a1=new Set;Object.keys(T1[H]).map(a1.add.bind(a1)),Object.keys(T1[a2]).map(a1.add.bind(a1)),Object.keys(T1[s2]).map(a1.add.bind(a1));const Rt=["kit",...Pt],P1=_2.FontAwesomeConfig||{};R&&typeof R.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(c=>{let[l,e]=c;const a=function(n){return n===""||n!=="false"&&(n==="true"||n)}(function(n){var o=R.querySelector("script["+n+"]");if(o)return o.getAttribute(n)}(l));a!=null&&(P1[e]=a)});const g5={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:u5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};P1.familyPrefix&&(P1.cssPrefix=P1.familyPrefix);const s1={...g5,...P1};s1.autoReplaceSvg||(s1.observeMutations=!1);const A={};Object.keys(g5).forEach(c=>{Object.defineProperty(A,c,{enumerable:!0,set:function(l){s1[c]=l,X4.forEach(e=>e(A))},get:function(){return s1[c]}})}),Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(c){s1.cssPrefix=c,X4.forEach(l=>l(A))},get:function(){return s1.cssPrefix}}),_2.FontAwesomeConfig=A;const X4=[],B2=I4,L2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D1(){let c=12,l="";for(;c-- >0;)l+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return l}function n1(c){const l=[];for(let e=(c||[]).length>>>0;e--;)l[e]=c[e];return l}function Q4(c){return c.classList?n1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function x5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d3(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,": ").concat(c[e].trim(),";"),"")}function J4(c){return c.size!==L2.size||c.x!==L2.x||c.y!==L2.y||c.rotate!==L2.rotate||c.flipX||c.flipY}function b5(){const c="fa",l=u5,e=A.cssPrefix,a=A.replacementClass;let n=`:root, :host {
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
}`;if(e!==c||a!==l){const o=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(l),"g");n=n.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(r,".".concat(a))}return n}let N5=!1;function Z4(){A.autoAddCss&&!N5&&(function(c){if(!c||!y2)return;const l=R.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const e=R.head.childNodes;let a=null;for(let n=e.length-1;n>-1;n--){const o=e[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}R.head.insertBefore(l,a)}(b5()),N5=!0)}var Ht={mixout:()=>({dom:{css:b5,insertCss:Z4}}),hooks:()=>({beforeDOMElementCreation(){Z4()},beforeI2svg(){Z4()}})};const k2=_2||{};k2[w2]||(k2[w2]={}),k2[w2].styles||(k2[w2].styles={}),k2[w2].hooks||(k2[w2].hooks={}),k2[w2].shims||(k2[w2].shims=[]);var d2=k2[w2];const v5=[],y5=function(){R.removeEventListener("DOMContentLoaded",y5),M3=1,v5.map(c=>c())};let M3=!1;function O1(c){const{tag:l,attributes:e={},children:a=[]}=c;return typeof c=="string"?x5(c):"<".concat(l," ").concat(function(n){return Object.keys(n||{}).reduce((o,i)=>o+"".concat(i,'="').concat(x5(n[i]),'" '),"").trim()}(e),">").concat(a.map(O1).join(""),"</").concat(l,">")}function w5(c,l,e){if(c&&c[l]&&c[l][e])return{prefix:l,iconName:e,icon:c[l][e]}}y2&&(M3=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),M3||R.addEventListener("DOMContentLoaded",y5));var c0=function(c,l,e,a){var n,o,i,r=Object.keys(c),f=r.length,t=l;for(e===void 0?(n=1,i=c[r[0]]):(n=0,i=e);n<f;n++)i=t(i,c[o=r[n]],o,c);return i};function k5(c){const l=function(e){const a=[];let n=0;const o=e.length;for(;n<o;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<o){const r=e.charCodeAt(n++);(64512&r)==56320?a.push(((1023&i)<<10)+(1023&r)+65536):(a.push(i),n--)}else a.push(i)}return a}(c);return l.length===1?l[0].toString(16):null}function S5(c){return Object.keys(c).reduce((l,e)=>{const a=c[e];return a.icon?l[a.iconName]=a.icon:l[e]=a,l},{})}function l0(c,l){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=e,n=S5(l);typeof d2.hooks.addPack!="function"||a?d2.styles[c]={...d2.styles[c]||{},...n}:d2.hooks.addPack(c,S5(l)),c==="fas"&&l0("fa",l)}const{styles:U2,shims:Vt}=d2,It={[H]:Object.values(q2[H]),[a2]:Object.values(q2[a2]),[s2]:Object.values(q2[s2])};let e0=null,A5={},_5={},B5={},T5={},P5={};const qt={[H]:Object.keys(I2[H]),[a2]:Object.keys(I2[a2]),[s2]:Object.keys(I2[s2])},D5=()=>{const c=a=>c0(U2,(n,o,i)=>(n[i]=c0(o,a,{}),n),{});A5=c((a,n,o)=>(n[3]&&(a[n[3]]=o),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),_5=c((a,n,o)=>(a[o]=o,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),P5=c((a,n,o)=>{const i=n[2];return a[o]=o,i.forEach(r=>{a[r]=o}),a});const l="far"in U2||A.autoFetchSvg,e=c0(Vt,(a,n)=>{const o=n[0];let i=n[1];const r=n[2];return i!=="far"||l||(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:r}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:r}),a},{names:{},unicodes:{}});B5=e.names,T5=e.unicodes,e0=C3(A.styleDefault,{family:A.familyDefault})};var O5;function a0(c,l){return(A5[c]||{})[l]}function T2(c,l){return(P5[c]||{})[l]}function j5(c){return B5[c]||{prefix:null,iconName:null}}function P2(){return e0}function C3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=H}=l,a=I2[e][c],n=T1[e][c]||T1[e][a],o=c in d2.styles?c:null;return n||o||null}O5=c=>{e0=C3(c.styleDefault,{family:A.familyDefault})},X4.push(O5),D5();const Ut={[H]:Object.keys(q2[H]),[a2]:Object.keys(q2[a2]),[s2]:Object.keys(q2[s2])};function h3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=l,a={[H]:"".concat(A.cssPrefix,"-").concat(H),[a2]:"".concat(A.cssPrefix,"-").concat(a2),[s2]:"".concat(A.cssPrefix,"-").concat(s2)};let n=null,o=H;const i=Bt.filter(f=>f!==m5);i.forEach(f=>{(c.includes(a[f])||c.some(t=>Ut[f].includes(t)))&&(o=f)});const r=c.reduce((f,t)=>{const m=function(z,u){const M=u.split("-"),L=M[0],d=M.slice(1).join("-");return L!==z||d===""||(p=d,~Rt.indexOf(p))?null:d;var p}(A.cssPrefix,t);if(U2[t]?(t=It[o].includes(t)?Ot[o][t]:t,n=t,f.prefix=t):qt[o].indexOf(t)>-1?(n=t,f.prefix=C3(t,{family:o})):m?f.iconName=m:t===A.replacementClass||i.some(z=>t===a[z])||f.rest.push(t),!e&&f.prefix&&f.iconName){const z=n==="fa"?j5(f.iconName):{},u=T2(f.prefix,f.iconName);z.prefix&&(n=null),f.iconName=z.iconName||u||f.iconName,f.prefix=z.prefix||f.prefix,f.prefix!=="far"||U2.far||!U2.fas||A.autoFetchSvg||(f.prefix="fas")}return f},{prefix:null,iconName:null,rest:[]});return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),r.prefix||o!==a2||!U2.fass&&!A.autoFetchSvg||(r.prefix="fass",r.iconName=T2(r.prefix,r.iconName)||r.iconName),r.prefix||o!==s2||!U2.fasds&&!A.autoFetchSvg||(r.prefix="fasds",r.iconName=T2(r.prefix,r.iconName)||r.iconName),r.prefix!=="fa"&&n!=="fa"||(r.prefix=P2()||"fas"),r}let F5=[],o1={};const i1={},Wt=Object.keys(i1);function s0(c,l){for(var e=arguments.length,a=new Array(e>2?e-2:0),n=2;n<e;n++)a[n-2]=arguments[n];return(o1[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function W2(c){for(var l=arguments.length,e=new Array(l>1?l-1:0),a=1;a<l;a++)e[a-1]=arguments[a];(o1[c]||[]).forEach(n=>{n.apply(null,e)})}function D2(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return i1[c]?i1[c].apply(null,l):void 0}function n0(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const e=c.prefix||P2();if(l)return l=T2(e,l)||l,w5(E5.definitions,e,l)||w5(d2.styles,e,l)}const E5=new class{constructor(){this.definitions={}}add(){for(var c=arguments.length,l=new Array(c),e=0;e<c;e++)l[e]=arguments[e];const a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},l0(n,a[n]);const o=q2[H][n];o&&l0(o,a[n]),D5()})}reset(){this.definitions={}}_pullDefinitions(c,l){const e=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:i}=e[a],r=i[2];c[n]||(c[n]={}),r.length>0&&r.forEach(f=>{typeof f=="string"&&(c[n][f]=i)}),c[n][o]=i}),c}},Gt={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y2?(W2("beforeI2svg",c),D2("pseudoElements2svg",c),D2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;var e;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,e=()=>{Yt({autoReplaceSvgRoot:l}),W2("watch",c)},y2&&(M3?setTimeout(e,0):v5.push(e))}},$t={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:T2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=C3(c[0]);return{prefix:e,iconName:T2(e,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(A.cssPrefix,"-"))>-1||c.match(jt))){const l=h3(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||P2(),iconName:T2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=P2();return{prefix:l,iconName:T2(l,c)||c}}}},G2={noAuto:()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,W2("noAuto")},config:A,dom:Gt,parse:$t,library:E5,findIconDefinition:n0,toHtml:O1},Yt=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=R}=c;(Object.keys(d2.styles).length>0||A.autoFetchSvg)&&y2&&A.autoReplaceSvg&&G2.dom.i2svg({node:l})};function g3(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>O1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!y2)return;const e=R.createElement("div");return e.innerHTML=c.html,e.children}}),c}function o0(c){const{icons:{main:l,mask:e},prefix:a,iconName:n,transform:o,symbol:i,title:r,maskId:f,titleId:t,extra:m,watchable:z=!1}=c,{width:u,height:M}=e.found?e:l,L=a==="fak",d=[A.replacementClass,n?"".concat(A.cssPrefix,"-").concat(n):""].filter(v=>m.classes.indexOf(v)===-1).filter(v=>v!==""||!!v).concat(m.classes).join(" ");let p={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":n,class:d,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(M)}};const C=L&&!~m.classes.indexOf("fa-fw")?{width:"".concat(u/M*16*.0625,"em")}:{};z&&(p.attributes[V2]=""),r&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(t||D1())},children:[r]}),delete p.attributes.title);const g={...p,prefix:a,iconName:n,main:l,mask:e,maskId:f,transform:o,symbol:i,styles:{...C,...m.styles}},{children:N,attributes:x}=e.found&&l.found?D2("generateAbstractMask",g)||{children:[],attributes:{}}:D2("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=N,g.attributes=x,i?function(v){let{prefix:b,iconName:h,children:w,attributes:y,symbol:k}=v;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...y,id:k===!0?"".concat(b,"-").concat(A.cssPrefix,"-").concat(h):k},children:w}]}]}(g):function(v){let{children:b,main:h,mask:w,attributes:y,styles:k,transform:S}=v;if(J4(S)&&h.found&&!w.found){const{width:_,height:T}=h,D={x:_/T/2,y:.5};y.style=d3({...k,"transform-origin":"".concat(D.x+S.x/16,"em ").concat(D.y+S.y/16,"em")})}return[{tag:"svg",attributes:y,children:b}]}(g)}function R5(c){const{content:l,width:e,height:a,transform:n,title:o,extra:i,watchable:r=!1}=c,f={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};r&&(f[V2]="");const t={...i.styles};J4(n)&&(t.transform=function(u){let{transform:M,width:L=I4,height:d=I4,startCentered:p=!1}=u,C="";return C+=p&&f5?"translate(".concat(M.x/B2-L/2,"em, ").concat(M.y/B2-d/2,"em) "):p?"translate(calc(-50% + ".concat(M.x/B2,"em), calc(-50% + ").concat(M.y/B2,"em)) "):"translate(".concat(M.x/B2,"em, ").concat(M.y/B2,"em) "),C+="scale(".concat(M.size/B2*(M.flipX?-1:1),", ").concat(M.size/B2*(M.flipY?-1:1),") "),C+="rotate(".concat(M.rotate,"deg) "),C}({transform:n,startCentered:!0,width:e,height:a}),t["-webkit-transform"]=t.transform);const m=d3(t);m.length>0&&(f.style=m);const z=[];return z.push({tag:"span",attributes:f,children:[l]}),o&&z.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),z}const{styles:i0}=d2;function t0(c){const l=c[0],e=c[1],[a]=c.slice(4);let n=null;return n=Array.isArray(a)?{tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(K4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(K4.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(K4.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:e,icon:n}}const Kt={found:!1,width:512,height:512};function r0(c,l){let e=l;return l==="fa"&&A.styleDefault!==null&&(l=P2()),new Promise((a,n)=>{if(e==="fa"){const o=j5(c)||{};c=o.iconName||c,l=o.prefix||l}if(c&&l&&i0[l]&&i0[l][c])return a(t0(i0[l][c]));(function(o,i){d5||A.showMissingIcons||!o||console.error('Icon with name "'.concat(o,'" and prefix "').concat(i,'" is missing.'))})(c,l),a({...Kt,icon:A.showMissingIcons&&c&&D2("missingIconAbstract")||{}})})}const H5=()=>{},f0=A.measurePerformance&&L3&&L3.mark&&L3.measure?L3:{mark:H5,measure:H5},j1='FA "6.6.0"';var m0=c=>(f0.mark("".concat(j1," ").concat(c," begins")),()=>(l=>{f0.mark("".concat(j1," ").concat(l," ends")),f0.measure("".concat(j1," ").concat(l),"".concat(j1," ").concat(l," begins"),"".concat(j1," ").concat(l," ends"))})(c));const x3=()=>{};function V5(c){return typeof(c.getAttribute?c.getAttribute(V2):null)=="string"}function Xt(c){return R.createElementNS("http://www.w3.org/2000/svg",c)}function Qt(c){return R.createElement(c)}function I5(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=c.tag==="svg"?Xt:Qt}=l;if(typeof c=="string")return R.createTextNode(c);const a=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(I5(n,{ceFn:e}))}),a}const b3={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(e=>{l.parentNode.insertBefore(I5(e),l)}),l.getAttribute(V2)===null&&A.keepOriginalSource){let e=R.createComment(function(a){let n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(c){const l=c[0],e=c[1];if(~Q4(l).indexOf(A.replacementClass))return b3.replace(c);const a=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const o=e[0].attributes.class.split(" ").reduce((i,r)=>(r===A.replacementClass||r.match(a)?i.toSvg.push(r):i.toNode.push(r),i),{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",o.toNode.join(" "))}const n=e.map(o=>O1(o)).join(`
`);l.setAttribute(V2,""),l.innerHTML=n}};function q5(c){c()}function U5(c,l){const e=typeof l=="function"?l:x3;if(c.length===0)e();else{let a=q5;A.mutateApproach==="async"&&(a=_2.requestAnimationFrame||q5),a(()=>{const n=A.autoReplaceSvg===!0?b3.replace:b3[A.autoReplaceSvg]||b3.replace,o=m0("mutate");c.map(n),o(),e()})}}let z0=!1;function W5(){z0=!0}function p0(){z0=!1}let N3=null;function G5(c){if(!r5||!A.observeMutations)return;const{treeCallback:l=x3,nodeCallback:e=x3,pseudoElementsCallback:a=x3,observeMutationsRoot:n=R}=c;N3=new r5(o=>{if(z0)return;const i=P2();n1(o).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!V5(r.addedNodes[0])&&(A.searchPseudoElements&&a(r.target),l(r.target)),r.type==="attributes"&&r.target.parentNode&&A.searchPseudoElements&&a(r.target.parentNode),r.type==="attributes"&&V5(r.target)&&~Et.indexOf(r.attributeName))if(r.attributeName==="class"&&function(t){const m=t.getAttribute?t.getAttribute(U4):null,z=t.getAttribute?t.getAttribute(W4):null;return m&&z}(r.target)){const{prefix:t,iconName:m}=h3(Q4(r.target));r.target.setAttribute(U4,t||i),m&&r.target.setAttribute(W4,m)}else(f=r.target)&&f.classList&&f.classList.contains&&f.classList.contains(A.replacementClass)&&e(r.target);var f})}),y2&&N3.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $5(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:a,rest:n}=function(f){const t=f.getAttribute("data-prefix"),m=f.getAttribute("data-icon"),z=f.innerText!==void 0?f.innerText.trim():"";let u=h3(Q4(f));return u.prefix||(u.prefix=P2()),t&&m&&(u.prefix=t,u.iconName=m),u.iconName&&u.prefix||(u.prefix&&z.length>0&&(u.iconName=(M=u.prefix,L=f.innerText,(_5[M]||{})[L]||a0(u.prefix,k5(f.innerText)))),!u.iconName&&A.autoFetchSvg&&f.firstChild&&f.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=f.firstChild.data)),u;var M,L}(c),o=function(f){const t=n1(f.attributes).reduce((u,M)=>(u.name!=="class"&&u.name!=="style"&&(u[M.name]=M.value),u),{}),m=f.getAttribute("title"),z=f.getAttribute("data-fa-title-id");return A.autoA11y&&(m?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(z||D1()):(t["aria-hidden"]="true",t.focusable="false")),t}(c),i=s0("parseNodeAttributes",{},c);let r=l.styleParser?function(f){const t=f.getAttribute("style");let m=[];return t&&(m=t.split(";").reduce((z,u)=>{const M=u.split(":"),L=M[0],d=M.slice(1);return L&&d.length>0&&(z[L]=d.join(":").trim()),z},{})),m}(c):[];return{iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:L2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:r,attributes:o},...i}}const{styles:Jt}=d2;function Y5(c){const l=A.autoReplaceSvg==="nest"?$5(c,{styleParser:!1}):$5(c);return~l.extra.classes.indexOf(h5)?D2("generateLayersText",c,l):D2("generateSvgReplacementMutation",c,l)}let M2=new Set;function K5(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y2)return Promise.resolve();const e=R.documentElement.classList,a=m=>e.add("".concat(L5,"-").concat(m)),n=m=>e.remove("".concat(L5,"-").concat(m)),o=A.autoFetchSvg?M2:M5.map(m=>"fa-".concat(m)).concat(Object.keys(Jt));o.includes("fa")||o.push("fa");const i=[".".concat(h5,":not([").concat(V2,"])")].concat(o.map(m=>".".concat(m,":not([").concat(V2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let r=[];try{r=n1(c.querySelectorAll(i))}catch{}if(!(r.length>0))return Promise.resolve();a("pending"),n("complete");const f=m0("onTree"),t=r.reduce((m,z)=>{try{const u=Y5(z);u&&m.push(u)}catch(u){d5||u.name==="MissingIcon"&&console.error(u)}return m},[]);return new Promise((m,z)=>{Promise.all(t).then(u=>{U5(u,()=>{a("active"),a("complete"),n("pending"),typeof l=="function"&&l(),f(),m()})}).catch(u=>{f(),z(u)})})}function Zt(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y5(c).then(e=>{e&&U5([e],l)})}M5.map(c=>{M2.add("fa-".concat(c))}),Object.keys(I2[H]).map(M2.add.bind(M2)),Object.keys(I2[a2]).map(M2.add.bind(M2)),Object.keys(I2[s2]).map(M2.add.bind(M2)),M2=[...M2];const cr=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=L2,symbol:a=!1,mask:n=null,maskId:o=null,title:i=null,titleId:r=null,classes:f=[],attributes:t={},styles:m={}}=l;if(!c)return;const{prefix:z,iconName:u,icon:M}=c;return g3({type:"icon",...c},()=>(W2("beforeDOMElementCreation",{iconDefinition:c,params:l}),A.autoA11y&&(i?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||D1()):(t["aria-hidden"]="true",t.focusable="false")),o0({icons:{main:t0(M),mask:n?t0(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:u,transform:{...L2,...e},symbol:a,title:i,maskId:o,titleId:r,extra:{attributes:t,styles:m,classes:f}})))};var lr={mixout(){return{icon:(c=cr,function(l){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(l||{}).icon?l:n0(l||{});let{mask:n}=e;return n&&(n=(n||{}).icon?n:n0(n||{})),c(a,{...e,mask:n})})};var c},hooks:()=>({mutationObserverCallbacks:c=>(c.treeCallback=K5,c.nodeCallback=Zt,c)}),provides(c){c.i2svg=function(l){const{node:e=R,callback:a=()=>{}}=l;return K5(e,a)},c.generateSvgReplacementMutation=function(l,e){const{iconName:a,title:n,titleId:o,prefix:i,transform:r,symbol:f,mask:t,maskId:m,extra:z}=e;return new Promise((u,M)=>{Promise.all([r0(a,i),t.iconName?r0(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(L=>{let[d,p]=L;u([l,o0({icons:{main:d,mask:p},prefix:i,iconName:a,transform:r,symbol:f,maskId:m,title:n,titleId:o,extra:z,watchable:!0})])}).catch(M)})},c.generateAbstractIcon=function(l){let{children:e,attributes:a,main:n,transform:o,styles:i}=l;const r=d3(i);let f;return r.length>0&&(a.style=r),J4(o)&&(f=D2("generateAbstractTransformGrouping",{main:n,transform:o,containerWidth:n.width,iconWidth:n.width})),e.push(f||n.icon),{children:e,attributes:a}}}},er={mixout:()=>({layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=l;return g3({type:"layer"},()=>{W2("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(n=>{Array.isArray(n)?n.map(o=>{a=a.concat(o.abstract)}):a=a.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}})},ar={mixout:()=>({counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return g3({type:"counter",content:c},()=>(W2("beforeDOMElementCreation",{content:c,params:l}),function(i){const{content:r,title:f,extra:t}=i,m={...t.attributes,...f?{title:f}:{},class:t.classes.join(" ")},z=d3(t.styles);z.length>0&&(m.style=z);const u=[];return u.push({tag:"span",attributes:m,children:[r]}),f&&u.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),u}({content:c.toString(),title:e,extra:{attributes:n,styles:o,classes:["".concat(A.cssPrefix,"-layers-counter"),...a]}})))}})},sr={mixout:()=>({text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=L2,title:a=null,classes:n=[],attributes:o={},styles:i={}}=l;return g3({type:"text",content:c},()=>(W2("beforeDOMElementCreation",{content:c,params:l}),R5({content:c,transform:{...L2,...e},title:a,extra:{attributes:o,styles:i,classes:["".concat(A.cssPrefix,"-layers-text"),...n]}})))}}),provides(c){c.generateLayersText=function(l,e){const{title:a,transform:n,extra:o}=e;let i=null,r=null;if(f5){const f=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/f,r=t.height/f}return A.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([l,R5({content:l.innerHTML,width:i,height:r,transform:n,title:a,extra:o,watchable:!0})])}}};const nr=new RegExp('"',"ug"),X5=[1105920,1112319],Q5={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},u0=Object.keys(Q5).reduce((c,l)=>(c[l.toLowerCase()]=Q5[l],c),{}),or=Object.keys(u0).reduce((c,l)=>{const e=u0[l];return c[l]=e[900]||[...Object.entries(e)][0][1],c},{});function J5(c,l){const e="".concat("data-fa-pseudo-element-pending").concat(l.replace(":","-"));return new Promise((a,n)=>{if(c.getAttribute(e)!==null)return a();const o=n1(c.children).filter(z=>z.getAttribute(q4)===l)[0],i=_2.getComputedStyle(c,l),r=i.getPropertyValue("font-family"),f=r.match(Ft),t=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(o&&!f)return c.removeChild(o),a();if(f&&m!=="none"&&m!==""){const z=i.getPropertyValue("content");let u=function(g,N){const x=g.replace(/^['"]|['"]$/g,"").toLowerCase(),v=parseInt(N),b=isNaN(v)?"normal":v;return(u0[x]||{})[b]||or[x]}(r,t);const{value:M,isSecondary:L}=function(g){const N=g.replace(nr,""),x=function(h){const w=h.length;let y,k=h.charCodeAt(0);return k>=55296&&k<=56319&&w>1&&(y=h.charCodeAt(1),y>=56320&&y<=57343)?1024*(k-55296)+y-56320+65536:k}(N),v=x>=X5[0]&&x<=X5[1],b=N.length===2&&N[0]===N[1];return{value:k5(b?N[0]:N),isSecondary:v||b}}(z),d=f[0].startsWith("FontAwesome");let p=a0(u,M),C=p;if(d){const g=function(N){const x=T5[N],v=a0("fas",N);return x||(v?{prefix:"fas",iconName:v}:null)||{prefix:null,iconName:null}}(M);g.iconName&&g.prefix&&(p=g.iconName,u=g.prefix)}if(!p||L||o&&o.getAttribute(U4)===u&&o.getAttribute(W4)===C)a();else{c.setAttribute(e,C),o&&c.removeChild(o);const g={iconName:null,title:null,titleId:null,prefix:null,transform:L2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:N}=g;N.attributes[q4]=l,r0(p,u).then(x=>{const v=o0({...g,icons:{main:x,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:C,extra:N,watchable:!0}),b=R.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(b,c.firstChild):c.appendChild(b),b.outerHTML=v.map(h=>O1(h)).join(`
`),c.removeAttribute(e),a()}).catch(n)}}else a()})}function ir(c){return Promise.all([J5(c,"::before"),J5(c,"::after")])}function tr(c){return!(c.parentNode===document.head||~Dt.indexOf(c.tagName.toUpperCase())||c.getAttribute(q4)||c.parentNode&&c.parentNode.tagName==="svg")}function Z5(c){if(y2)return new Promise((l,e)=>{const a=n1(c.querySelectorAll("*")).filter(tr).map(ir),n=m0("searchPseudoElements");W5(),Promise.all(a).then(()=>{n(),p0(),l()}).catch(()=>{n(),p0(),e()})})}var rr={hooks:()=>({mutationObserverCallbacks:c=>(c.pseudoElementsCallback=Z5,c)}),provides(c){c.pseudoElements2svg=function(l){const{node:e=R}=l;A.searchPseudoElements&&Z5(e)}}};let c7=!1;var fr={mixout:()=>({dom:{unwatch(){W5(),c7=!0}}}),hooks:()=>({bootstrap(){G5(s0("mutationObserverCallbacks",{}))},noAuto(){N3&&N3.disconnect()},watch(c){const{observeMutationsRoot:l}=c;c7?p0():G5(s0("mutationObserverCallbacks",{observeMutationsRoot:l}))}})};const l7=c=>c.toLowerCase().split(" ").reduce((l,e)=>{const a=e.toLowerCase().split("-"),n=a[0];let o=a.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o}return l},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var mr={mixout:()=>({parse:{transform:c=>l7(c)}}),hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-transform");return e&&(c.transform=l7(e)),c}}),provides(c){c.generateAbstractTransformGrouping=function(l){let{main:e,transform:a,containerWidth:n,iconWidth:o}=l;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(32*a.x,", ").concat(32*a.y,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(r," ").concat(f," ").concat(t)},z={transform:"translate(".concat(o/2*-1," -256)")};return{tag:"g",attributes:{...i},children:[{tag:"g",attributes:{...m},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...z}}]}]}}}};const L0={x:0,y:0,width:"100%",height:"100%"};function e7(c){let l=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}var zr={hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-mask"),a=e?h3(e.split(" ").map(n=>n.trim())):{prefix:null,iconName:null,rest:[]};return a.prefix||(a.prefix=P2()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}),provides(c){c.generateAbstractMask=function(l){let{children:e,attributes:a,main:n,mask:o,maskId:i,transform:r}=l;const{width:f,icon:t}=n,{width:m,icon:z}=o,u=function(b){let{transform:h,containerWidth:w,iconWidth:y}=b;const k={transform:"translate(".concat(w/2," 256)")},S="translate(".concat(32*h.x,", ").concat(32*h.y,") "),_="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),T="rotate(".concat(h.rotate," 0 0)");return{outer:k,inner:{transform:"".concat(S," ").concat(_," ").concat(T)},path:{transform:"translate(".concat(y/2*-1," -256)")}}}({transform:r,containerWidth:m,iconWidth:f}),M={tag:"rect",attributes:{...L0,fill:"white"}},L=t.children?{children:t.children.map(e7)}:{},d={tag:"g",attributes:{...u.inner},children:[e7({tag:t.tag,attributes:{...t.attributes,...u.path},...L})]},p={tag:"g",attributes:{...u.outer},children:[d]},C="mask-".concat(i||D1()),g="clip-".concat(i||D1()),N={tag:"mask",attributes:{...L0,id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[M,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:(v=z,v.tag==="g"?v.children:[v])},N]};var v;return e.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(C,")"),...L0}}),{children:e,attributes:a}}}},pr={provides(c){let l=!1;_2.matchMedia&&(l=_2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...n,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return l||i.children.push({tag:"animate",attributes:{...n,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),e.push(i),e.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:l?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),l||e.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}};(function(c,l){let{mixoutsTo:e}=l;F5=c,o1={},Object.keys(i1).forEach(a=>{Wt.indexOf(a)===-1&&delete i1[a]}),F5.forEach(a=>{const n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(o=>{typeof n[o]=="function"&&(e[o]=n[o]),typeof n[o]=="object"&&Object.keys(n[o]).forEach(i=>{e[o]||(e[o]={}),e[o][i]=n[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{o1[i]||(o1[i]=[]),o1[i].push(o[i])})}a.provides&&a.provides(i1)})})([Ht,lr,er,ar,sr,rr,fr,mr,zr,pr,{hooks:()=>({parseNodeAttributes(c,l){const e=l.getAttribute("data-fa-symbol"),a=e!==null&&(e===""||e);return c.symbol=a,c}})}],{mixoutsTo:G2});const a7=G2.config,ur=G2.library,v3=G2.parse,Lr=G2.icon,dr=G2.text;function s7(c,l){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,a)}return e}function u2(c){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?s7(Object(e),!0).forEach(function(a){Z(c,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):s7(Object(e)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(e,a))})}return c}function y3(c){return y3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},y3(c)}function Z(c,l,e){return(l=function(a){var n=function(o){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,"string");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(a);return typeof n=="symbol"?n:n+""}(l))in c?Object.defineProperty(c,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[l]=e,c}function d0(c){return function(l){if(Array.isArray(l))return M0(l)}(c)||function(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}(c)||function(l,e){if(l){if(typeof l=="string")return M0(l,e);var a=Object.prototype.toString.call(l).slice(8,-1);return a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set"?Array.from(l):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M0(l,e):void 0}}(c)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
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
  `)})(),ur.add(TM);const PM=function(c){return(l,e)=>{p2(c,a=>l.use(a)),e&&j0(e,l,!0)}}(Rf);B.YmAlert=A7,B.YmButton=k3,B.YmButtonGroup=g0,B.YmCard=Z7,B.YmCollapse=g7,B.YmCollapseItem=x7,B.YmConfigProvider=ec,B.YmContextMenu=S7,B.YmDropdown=Q7,B.YmDropdownItem=J7,B.YmIcon=z7,B.YmInput=zc,B.YmLoading=hc,B.YmLoadingDirective=V3,B.YmLoadingService=R3,B.YmMessage=nc,B.YmMessageBox=E0,B.YmNotification=fc,B.YmOverlay=uc,B.YmPopconfirm=Y7,B.YmTooltip=$7,B.default=PM,B.en={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}},B.ja={name:"ja",el:{colorpicker:{confirm:"OK",clear:"クリア"},datepicker:{now:"現在",today:"今日",cancel:"キャンセル",clear:"クリア",confirm:"OK",selectDate:"日付を選択",selectTime:"時間を選択",startDate:"開始日",startTime:"開始時間",endDate:"終了日",endTime:"終了時間",prevYear:"前年",nextYear:"翌年",prevMonth:"前月",nextMonth:"翌月",year:"年",month1:"1月",month2:"2月",month3:"3月",month4:"4月",month5:"5月",month6:"6月",month7:"7月",month8:"8月",month9:"9月",month10:"10月",month11:"11月",month12:"12月",weeks:{sun:"日",mon:"月",tue:"火",wed:"水",thu:"木",fri:"金",sat:"土"},months:{jan:"1月",feb:"2月",mar:"3月",apr:"4月",may:"5月",jun:"6月",jul:"7月",aug:"8月",sep:"9月",oct:"10月",nov:"11月",dec:"12月"}},select:{loading:"ロード中",noMatch:"データなし",noData:"データなし",placeholder:"選択してください"},cascader:{noMatch:"データなし",loading:"ロード中",placeholder:"選択してください",noData:"データなし"},pagination:{goto:"",pagesize:"件/ページ",total:"総計 {total} 件",pageClassifier:"ページ目へ",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages"},messagebox:{title:"メッセージ",confirm:"OK",cancel:"キャンセル",error:"正しくない入力"},upload:{deleteTip:"Delキーを押して削除する",delete:"削除する",preview:"プレビュー",continue:"続行する"},table:{emptyText:"データなし",confirmFilter:"確認",resetFilter:"初期化",clearFilter:"すべて",sumText:"合計"},tour:{next:"次へ",previous:"前へ",finish:"ツアー終了"},tree:{emptyText:"データなし"},transfer:{noMatch:"データなし",noData:"データなし",titles:["リスト 1","リスト 2"],filterPlaceholder:"キーワードを入力",noCheckedFormat:"総計 {total} 件",hasCheckedFormat:"{checked}/{total} を選択した"},image:{error:"失敗"},pageHeader:{title:"戻る"},popconfirm:{confirmButtonText:"はい",cancelButtonText:"いいえ"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}},B.ko={name:"ko",el:{colorpicker:{confirm:"확인",clear:"초기화",defaultLabel:"색상 선택기",description:"현재 색상은 {color}입니다. Enter 키를 눌러 새 색상을 선택합니다."},datepicker:{now:"지금",today:"오늘",cancel:"취소",clear:"초기화",confirm:"확인",dateTablePrompt:"화살표 키를 사용하고 Enter를 눌러 날짜를 선택하십시오.",monthTablePrompt:"화살표 키를 사용하고 Enter를 눌러 월을 선택합니다.",yearTablePrompt:"화살표 키를 사용하고 Enter 키를 눌러 연도를 선택합니다.",selectDate:"날짜 선택",selectTime:"시간 선택",startDate:"시작 날짜",startTime:"시작 시간",endDate:"종료 날짜",endTime:"종료 시간",prevYear:"지난해",nextYear:"다음해",prevMonth:"지난달",nextMonth:"다음달",year:"년",month1:"1월",month2:"2월",month3:"3월",month4:"4월",month5:"5월",month6:"6월",month7:"7월",month8:"8월",month9:"9월",month10:"10월",month11:"11월",month12:"12월",weeks:{sun:"일",mon:"월",tue:"화",wed:"수",thu:"목",fri:"금",sat:"토"},months:{jan:"1월",feb:"2월",mar:"3월",apr:"4월",may:"5월",jun:"6월",jul:"7월",aug:"8월",sep:"9월",oct:"10월",nov:"11월",dec:"12월"}},inputNumber:{decrease:"값 증가",increase:"값 감소"},select:{loading:"불러오는 중",noMatch:"검색된 데이터 없음",noData:"데이터 없음",placeholder:"선택"},dropdown:{toggleDropdown:"드롭다운 전환"},cascader:{noMatch:"검색된 데이터 없음",loading:"불러오는 중",placeholder:"선택",noData:"데이터 없음"},pagination:{goto:"",pagesize:"건/페이지",total:"총 {total} 건",pageClassifier:"페이지로",page:"페이지",prev:"이전 페이지로 이동",next:"다음 페이지로 이동",currentPage:"페이지 {pager}",prevPages:"이전 {pager} 페이지",nextPages:"다음 {pager} 페이지",deprecationWarning:"더 이상 사용되지 않는 동작이 감지되었습니다. 자세한 내용은 el-pagination 문서를 참조하세요."},dialog:{close:"대화 상자 닫기"},drawer:{close:"대화 상자 닫기"},messagebox:{title:"메시지",confirm:"확인",cancel:"취소",error:"올바르지 않은 입력",close:"대화 상자 닫기"},upload:{deleteTip:"Delete 키를 눌러 삭제",delete:"삭제",preview:"미리보기",continue:"계속하기"},slider:{defaultLabel:"{min}과 {max} 사이의 슬라이더",defaultRangeStartLabel:"시작 값 선택",defaultRangeEndLabel:"종료 값 선택"},table:{emptyText:"데이터 없음",confirmFilter:"확인",resetFilter:"초기화",clearFilter:"전체",sumText:"합계"},tour:{next:"다음",previous:"이전",finish:"종료"},tree:{emptyText:"데이터 없음"},transfer:{noMatch:"검색된 데이터 없음",noData:"데이터 없음",titles:["리스트 1","리스트 2"],filterPlaceholder:"검색어를 입력하세요",noCheckedFormat:"총 {total} 건",hasCheckedFormat:"{checked}/{total} 선택됨"},image:{error:"불러오기 실패"},pageHeader:{title:"뒤로"},popconfirm:{confirmButtonText:"예",cancelButtonText:"아니오"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}},B.messageTypes=ac,B.notificationPosition=ic,B.notificationTypes=oc,B.provideGlobalConfig=j0,B.useGlobalConfig=lc,B.vLoading=V3,B.zhCn=O0,B.zhTw={name:"zh-tw",el:{colorpicker:{confirm:"確認",clear:"清空",defaultLabel:"色彩選擇器",description:"目前色彩為 {color}。按一下 Enter 以選擇新色彩。"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",dateTablePrompt:"使用方向鍵與 Enter 鍵以選擇日期",monthTablePrompt:"使用方向鍵與 Enter 鍵以選擇月份",yearTablePrompt:"使用方向鍵與 Enter 鍵以選擇年份",selectedDate:"已選日期",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",prevYear:"前一年",nextYear:"後一年",prevMonth:"上個月",nextMonth:"下個月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"減少數值",increase:"增加數值"},select:{loading:"載入中",noMatch:"無相符資料",noData:"無資料",placeholder:"請選擇"},dropdown:{toggleDropdown:"切換下拉選單"},cascader:{noMatch:"無相符資料",loading:"載入中",placeholder:"請選擇",noData:"無資料"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁",page:"頁",prev:"上一頁",next:"下一頁",currentPage:"第 {pager} 頁",prevPages:"向前 {pager} 頁",nextPages:"向后 {pager} 頁",deprecationWarning:"偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊"},dialog:{close:"關閉此對話框"},drawer:{close:"關閉此對話框"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!",close:"關閉此對話框"},upload:{deleteTip:"按一下 Delete 鍵以刪除",delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},slider:{defaultLabel:"滑桿介於 {min} 至 {max}",defaultRangeStartLabel:"選擇起始值",defaultRangeEndLabel:"選擇結束值"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"合計"},tour:{next:"下一步",previous:"上一步",finish:"結束導覽"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無相符資料",noData:"無資料",titles:["列表 1","列表 2"],filterPlaceholder:"請輸入搜尋內容",noCheckedFormat:"共 {total} 項",hasCheckedFormat:"已選 {checked}/{total} 項"},image:{error:"載入失敗"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"確認",cancelButtonText:"取消"},carousel:{leftArrow:"上一張投影片",rightArrow:"下一張投影片",indicator:"投影片切換至索引 {index}"}}},Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});