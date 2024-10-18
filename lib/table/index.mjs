import { defineComponent as Ct, ref as k, computed as ne, onMounted as wt, watch as V, resolveComponent as B, resolveDirective as Ot, openBlock as g, createElementBlock as m, withDirectives as It, createBlock as _, unref as j, withCtx as oe, Fragment as Se, renderList as xt, createVNode as Pt, renderSlot as R, resolveDynamicComponent as Ce, withModifiers as ie, toDisplayString as Et, createCommentVNode as se, isRef as we, normalizeStyle as Lt } from "vue";
const Oe = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase();
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dt() {
  this.__data__ = [], this.size = 0;
}
var kt = Dt;
function Bt(e, t) {
  return e === t || e !== e && t !== t;
}
var tt = Bt, Ft = tt;
function Gt(e, t) {
  for (var r = e.length; r--; )
    if (Ft(e[r][0], t))
      return r;
  return -1;
}
var X = Gt, Ut = X, zt = Array.prototype, Nt = zt.splice;
function Kt(e) {
  var t = this.__data__, r = Ut(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Nt.call(t, r, 1), --this.size, !0;
}
var Vt = Kt, Rt = X;
function Ht(e) {
  var t = this.__data__, r = Rt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var qt = Ht, Wt = X;
function Jt(e) {
  return Wt(this.__data__, e) > -1;
}
var Yt = Jt, Xt = X;
function Zt(e, t) {
  var r = this.__data__, a = Xt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Qt = Zt, er = kt, tr = Vt, rr = qt, ar = Yt, nr = Qt;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = er;
x.prototype.delete = tr;
x.prototype.get = rr;
x.prototype.has = ar;
x.prototype.set = nr;
var Z = x, or = Z;
function ir() {
  this.__data__ = new or(), this.size = 0;
}
var sr = ir;
function cr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var lr = cr;
function ur(e) {
  return this.__data__.get(e);
}
var fr = ur;
function pr(e) {
  return this.__data__.has(e);
}
var vr = pr, gr = typeof H == "object" && H && H.Object === Object && H, rt = gr, dr = rt, yr = typeof self == "object" && self && self.Object === Object && self, br = dr || yr || Function("return this")(), $ = br, $r = $, hr = $r.Symbol, ge = hr, Ie = ge, at = Object.prototype, _r = at.hasOwnProperty, Tr = at.toString, F = Ie ? Ie.toStringTag : void 0;
function mr(e) {
  var t = _r.call(e, F), r = e[F];
  try {
    e[F] = void 0;
    var a = !0;
  } catch {
  }
  var n = Tr.call(e);
  return a && (t ? e[F] = r : delete e[F]), n;
}
var jr = mr, Ar = Object.prototype, Sr = Ar.toString;
function Cr(e) {
  return Sr.call(e);
}
var wr = Cr, xe = ge, Or = jr, Ir = wr, xr = "[object Null]", Pr = "[object Undefined]", Pe = xe ? xe.toStringTag : void 0;
function Er(e) {
  return e == null ? e === void 0 ? Pr : xr : Pe && Pe in Object(e) ? Or(e) : Ir(e);
}
var Q = Er;
function Lr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var G = Lr, Mr = Q, Dr = G, kr = "[object AsyncFunction]", Br = "[object Function]", Fr = "[object GeneratorFunction]", Gr = "[object Proxy]";
function Ur(e) {
  if (!Dr(e))
    return !1;
  var t = Mr(e);
  return t == Br || t == Fr || t == kr || t == Gr;
}
var nt = Ur, zr = $, Nr = zr["__core-js_shared__"], Kr = Nr, ce = Kr, Ee = function() {
  var e = /[^.]+$/.exec(ce && ce.keys && ce.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vr(e) {
  return !!Ee && Ee in e;
}
var Rr = Vr, Hr = Function.prototype, qr = Hr.toString;
function Wr(e) {
  if (e != null) {
    try {
      return qr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ot = Wr, Jr = nt, Yr = Rr, Xr = G, Zr = ot, Qr = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ta = Function.prototype, ra = Object.prototype, aa = ta.toString, na = ra.hasOwnProperty, oa = RegExp(
  "^" + aa.call(na).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ia(e) {
  if (!Xr(e) || Yr(e))
    return !1;
  var t = Jr(e) ? oa : ea;
  return t.test(Zr(e));
}
var sa = ia;
function ca(e, t) {
  return e == null ? void 0 : e[t];
}
var la = ca, ua = sa, fa = la;
function pa(e, t) {
  var r = fa(e, t);
  return ua(r) ? r : void 0;
}
var S = pa, va = S, ga = $, da = va(ga, "Map"), de = da, ya = S, ba = ya(Object, "create"), ee = ba, Le = ee;
function $a() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
var ha = $a;
function _a(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ta = _a, ma = ee, ja = "__lodash_hash_undefined__", Aa = Object.prototype, Sa = Aa.hasOwnProperty;
function Ca(e) {
  var t = this.__data__;
  if (ma) {
    var r = t[e];
    return r === ja ? void 0 : r;
  }
  return Sa.call(t, e) ? t[e] : void 0;
}
var wa = Ca, Oa = ee, Ia = Object.prototype, xa = Ia.hasOwnProperty;
function Pa(e) {
  var t = this.__data__;
  return Oa ? t[e] !== void 0 : xa.call(t, e);
}
var Ea = Pa, La = ee, Ma = "__lodash_hash_undefined__";
function Da(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = La && t === void 0 ? Ma : t, this;
}
var ka = Da, Ba = ha, Fa = Ta, Ga = wa, Ua = Ea, za = ka;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Ba;
P.prototype.delete = Fa;
P.prototype.get = Ga;
P.prototype.has = Ua;
P.prototype.set = za;
var Na = P, Me = Na, Ka = Z, Va = de;
function Ra() {
  this.size = 0, this.__data__ = {
    hash: new Me(),
    map: new (Va || Ka)(),
    string: new Me()
  };
}
var Ha = Ra;
function qa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Wa = qa, Ja = Wa;
function Ya(e, t) {
  var r = e.__data__;
  return Ja(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var te = Ya, Xa = te;
function Za(e) {
  var t = Xa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Qa = Za, en = te;
function tn(e) {
  return en(this, e).get(e);
}
var rn = tn, an = te;
function nn(e) {
  return an(this, e).has(e);
}
var on = nn, sn = te;
function cn(e, t) {
  var r = sn(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var ln = cn, un = Ha, fn = Qa, pn = rn, vn = on, gn = ln;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = un;
E.prototype.delete = fn;
E.prototype.get = pn;
E.prototype.has = vn;
E.prototype.set = gn;
var dn = E, yn = Z, bn = de, $n = dn, hn = 200;
function _n(e, t) {
  var r = this.__data__;
  if (r instanceof yn) {
    var a = r.__data__;
    if (!bn || a.length < hn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $n(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Tn = _n, mn = Z, jn = sr, An = lr, Sn = fr, Cn = vr, wn = Tn;
function L(e) {
  var t = this.__data__ = new mn(e);
  this.size = t.size;
}
L.prototype.clear = jn;
L.prototype.delete = An;
L.prototype.get = Sn;
L.prototype.has = Cn;
L.prototype.set = wn;
var On = L;
function In(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var xn = In, Pn = S, En = function() {
  try {
    var e = Pn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ln = En, De = Ln;
function Mn(e, t, r) {
  t == "__proto__" && De ? De(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var it = Mn, Dn = it, kn = tt, Bn = Object.prototype, Fn = Bn.hasOwnProperty;
function Gn(e, t, r) {
  var a = e[t];
  (!(Fn.call(e, t) && kn(a, r)) || r === void 0 && !(t in e)) && Dn(e, t, r);
}
var st = Gn, Un = st, zn = it;
function Nn(e, t, r, a) {
  var n = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], p = a ? a(r[c], e[c], c, r, e) : void 0;
    p === void 0 && (p = e[c]), n ? zn(r, c, p) : Un(r, c, p);
  }
  return r;
}
var re = Nn;
function Kn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Vn = Kn;
function Rn(e) {
  return e != null && typeof e == "object";
}
var U = Rn, Hn = Q, qn = U, Wn = "[object Arguments]";
function Jn(e) {
  return qn(e) && Hn(e) == Wn;
}
var Yn = Jn, ke = Yn, Xn = U, ct = Object.prototype, Zn = ct.hasOwnProperty, Qn = ct.propertyIsEnumerable, eo = ke(/* @__PURE__ */ function() {
  return arguments;
}()) ? ke : function(e) {
  return Xn(e) && Zn.call(e, "callee") && !Qn.call(e, "callee");
}, to = eo, ro = Array.isArray, ye = ro, W = { exports: {} };
function ao() {
  return !1;
}
var no = ao;
W.exports;
(function(e, t) {
  var r = $, a = no, n = t && !t.nodeType && t, s = n && !0 && e && !e.nodeType && e, o = s && s.exports === n, c = o ? r.Buffer : void 0, p = c ? c.isBuffer : void 0, v = p || a;
  e.exports = v;
})(W, W.exports);
var lt = W.exports, oo = 9007199254740991, io = /^(?:0|[1-9]\d*)$/;
function so(e, t) {
  var r = typeof e;
  return t = t ?? oo, !!t && (r == "number" || r != "symbol" && io.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var co = so, lo = 9007199254740991;
function uo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lo;
}
var ut = uo, fo = Q, po = ut, vo = U, go = "[object Arguments]", yo = "[object Array]", bo = "[object Boolean]", $o = "[object Date]", ho = "[object Error]", _o = "[object Function]", To = "[object Map]", mo = "[object Number]", jo = "[object Object]", Ao = "[object RegExp]", So = "[object Set]", Co = "[object String]", wo = "[object WeakMap]", Oo = "[object ArrayBuffer]", Io = "[object DataView]", xo = "[object Float32Array]", Po = "[object Float64Array]", Eo = "[object Int8Array]", Lo = "[object Int16Array]", Mo = "[object Int32Array]", Do = "[object Uint8Array]", ko = "[object Uint8ClampedArray]", Bo = "[object Uint16Array]", Fo = "[object Uint32Array]", u = {};
u[xo] = u[Po] = u[Eo] = u[Lo] = u[Mo] = u[Do] = u[ko] = u[Bo] = u[Fo] = !0;
u[go] = u[yo] = u[Oo] = u[bo] = u[Io] = u[$o] = u[ho] = u[_o] = u[To] = u[mo] = u[jo] = u[Ao] = u[So] = u[Co] = u[wo] = !1;
function Go(e) {
  return vo(e) && po(e.length) && !!u[fo(e)];
}
var Uo = Go;
function zo(e) {
  return function(t) {
    return e(t);
  };
}
var be = zo, J = { exports: {} };
J.exports;
(function(e, t) {
  var r = rt, a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s && r.process, c = function() {
    try {
      var p = n && n.require && n.require("util").types;
      return p || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(J, J.exports);
var $e = J.exports, No = Uo, Ko = be, Be = $e, Fe = Be && Be.isTypedArray, Vo = Fe ? Ko(Fe) : No, Ro = Vo, Ho = Vn, qo = to, Wo = ye, Jo = lt, Yo = co, Xo = Ro, Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function ei(e, t) {
  var r = Wo(e), a = !r && qo(e), n = !r && !a && Jo(e), s = !r && !a && !n && Xo(e), o = r || a || n || s, c = o ? Ho(e.length, String) : [], p = c.length;
  for (var v in e)
    (t || Qo.call(e, v)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    Yo(v, p))) && c.push(v);
  return c;
}
var ft = ei, ti = Object.prototype;
function ri(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ti;
  return e === r;
}
var he = ri;
function ai(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var pt = ai, ni = pt, oi = ni(Object.keys, Object), ii = oi, si = he, ci = ii, li = Object.prototype, ui = li.hasOwnProperty;
function fi(e) {
  if (!si(e))
    return ci(e);
  var t = [];
  for (var r in Object(e))
    ui.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var pi = fi, vi = nt, gi = ut;
function di(e) {
  return e != null && gi(e.length) && !vi(e);
}
var vt = di, yi = ft, bi = pi, $i = vt;
function hi(e) {
  return $i(e) ? yi(e) : bi(e);
}
var _e = hi, _i = re, Ti = _e;
function mi(e, t) {
  return e && _i(t, Ti(t), e);
}
var ji = mi;
function Ai(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Si = Ai, Ci = G, wi = he, Oi = Si, Ii = Object.prototype, xi = Ii.hasOwnProperty;
function Pi(e) {
  if (!Ci(e))
    return Oi(e);
  var t = wi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !xi.call(e, a)) || r.push(a);
  return r;
}
var Ei = Pi, Li = ft, Mi = Ei, Di = vt;
function ki(e) {
  return Di(e) ? Li(e, !0) : Mi(e);
}
var Te = ki, Bi = re, Fi = Te;
function Gi(e, t) {
  return e && Bi(t, Fi(t), e);
}
var Ui = Gi, Y = { exports: {} };
Y.exports;
(function(e, t) {
  var r = $, a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function p(v, C) {
    if (C)
      return v.slice();
    var y = v.length, T = c ? c(y) : new v.constructor(y);
    return v.copy(T), T;
  }
  e.exports = p;
})(Y, Y.exports);
var zi = Y.exports;
function Ni(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Ki = Ni;
function Vi(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = 0, s = []; ++r < a; ) {
    var o = e[r];
    t(o, r, e) && (s[n++] = o);
  }
  return s;
}
var Ri = Vi;
function Hi() {
  return [];
}
var gt = Hi, qi = Ri, Wi = gt, Ji = Object.prototype, Yi = Ji.propertyIsEnumerable, Ge = Object.getOwnPropertySymbols, Xi = Ge ? function(e) {
  return e == null ? [] : (e = Object(e), qi(Ge(e), function(t) {
    return Yi.call(e, t);
  }));
} : Wi, me = Xi, Zi = re, Qi = me;
function es(e, t) {
  return Zi(e, Qi(e), t);
}
var ts = es;
function rs(e, t) {
  for (var r = -1, a = t.length, n = e.length; ++r < a; )
    e[n + r] = t[r];
  return e;
}
var dt = rs, as = pt, ns = as(Object.getPrototypeOf, Object), yt = ns, os = dt, is = yt, ss = me, cs = gt, ls = Object.getOwnPropertySymbols, us = ls ? function(e) {
  for (var t = []; e; )
    os(t, ss(e)), e = is(e);
  return t;
} : cs, bt = us, fs = re, ps = bt;
function vs(e, t) {
  return fs(e, ps(e), t);
}
var gs = vs, ds = dt, ys = ye;
function bs(e, t, r) {
  var a = t(e);
  return ys(e) ? a : ds(a, r(e));
}
var $t = bs, $s = $t, hs = me, _s = _e;
function Ts(e) {
  return $s(e, _s, hs);
}
var ms = Ts, js = $t, As = bt, Ss = Te;
function Cs(e) {
  return js(e, Ss, As);
}
var ws = Cs, Os = S, Is = $, xs = Os(Is, "DataView"), Ps = xs, Es = S, Ls = $, Ms = Es(Ls, "Promise"), Ds = Ms, ks = S, Bs = $, Fs = ks(Bs, "Set"), Gs = Fs, Us = S, zs = $, Ns = Us(zs, "WeakMap"), Ks = Ns, le = Ps, ue = de, fe = Ds, pe = Gs, ve = Ks, ht = Q, M = ot, Ue = "[object Map]", Vs = "[object Object]", ze = "[object Promise]", Ne = "[object Set]", Ke = "[object WeakMap]", Ve = "[object DataView]", Rs = M(le), Hs = M(ue), qs = M(fe), Ws = M(pe), Js = M(ve), A = ht;
(le && A(new le(new ArrayBuffer(1))) != Ve || ue && A(new ue()) != Ue || fe && A(fe.resolve()) != ze || pe && A(new pe()) != Ne || ve && A(new ve()) != Ke) && (A = function(e) {
  var t = ht(e), r = t == Vs ? e.constructor : void 0, a = r ? M(r) : "";
  if (a)
    switch (a) {
      case Rs:
        return Ve;
      case Hs:
        return Ue;
      case qs:
        return ze;
      case Ws:
        return Ne;
      case Js:
        return Ke;
    }
  return t;
});
var je = A, Ys = Object.prototype, Xs = Ys.hasOwnProperty;
function Zs(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Xs.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Qs = Zs, ec = $, tc = ec.Uint8Array, rc = tc, Re = rc;
function ac(e) {
  var t = new e.constructor(e.byteLength);
  return new Re(t).set(new Re(e)), t;
}
var Ae = ac, nc = Ae;
function oc(e, t) {
  var r = t ? nc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var ic = oc, sc = /\w*$/;
function cc(e) {
  var t = new e.constructor(e.source, sc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var lc = cc, He = ge, qe = He ? He.prototype : void 0, We = qe ? qe.valueOf : void 0;
function uc(e) {
  return We ? Object(We.call(e)) : {};
}
var fc = uc, pc = Ae;
function vc(e, t) {
  var r = t ? pc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var gc = vc, dc = Ae, yc = ic, bc = lc, $c = fc, hc = gc, _c = "[object Boolean]", Tc = "[object Date]", mc = "[object Map]", jc = "[object Number]", Ac = "[object RegExp]", Sc = "[object Set]", Cc = "[object String]", wc = "[object Symbol]", Oc = "[object ArrayBuffer]", Ic = "[object DataView]", xc = "[object Float32Array]", Pc = "[object Float64Array]", Ec = "[object Int8Array]", Lc = "[object Int16Array]", Mc = "[object Int32Array]", Dc = "[object Uint8Array]", kc = "[object Uint8ClampedArray]", Bc = "[object Uint16Array]", Fc = "[object Uint32Array]";
function Gc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Oc:
      return dc(e);
    case _c:
    case Tc:
      return new a(+e);
    case Ic:
      return yc(e, r);
    case xc:
    case Pc:
    case Ec:
    case Lc:
    case Mc:
    case Dc:
    case kc:
    case Bc:
    case Fc:
      return hc(e, r);
    case mc:
      return new a();
    case jc:
    case Cc:
      return new a(e);
    case Ac:
      return bc(e);
    case Sc:
      return new a();
    case wc:
      return $c(e);
  }
}
var Uc = Gc, zc = G, Je = Object.create, Nc = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!zc(t))
      return {};
    if (Je)
      return Je(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Kc = Nc, Vc = Kc, Rc = yt, Hc = he;
function qc(e) {
  return typeof e.constructor == "function" && !Hc(e) ? Vc(Rc(e)) : {};
}
var Wc = qc, Jc = je, Yc = U, Xc = "[object Map]";
function Zc(e) {
  return Yc(e) && Jc(e) == Xc;
}
var Qc = Zc, el = Qc, tl = be, Ye = $e, Xe = Ye && Ye.isMap, rl = Xe ? tl(Xe) : el, al = rl, nl = je, ol = U, il = "[object Set]";
function sl(e) {
  return ol(e) && nl(e) == il;
}
var cl = sl, ll = cl, ul = be, Ze = $e, Qe = Ze && Ze.isSet, fl = Qe ? ul(Qe) : ll, pl = fl, vl = On, gl = xn, dl = st, yl = ji, bl = Ui, $l = zi, hl = Ki, _l = ts, Tl = gs, ml = ms, jl = ws, Al = je, Sl = Qs, Cl = Uc, wl = Wc, Ol = ye, Il = lt, xl = al, Pl = G, El = pl, Ll = _e, Ml = Te, Dl = 1, kl = 2, Bl = 4, _t = "[object Arguments]", Fl = "[object Array]", Gl = "[object Boolean]", Ul = "[object Date]", zl = "[object Error]", Tt = "[object Function]", Nl = "[object GeneratorFunction]", Kl = "[object Map]", Vl = "[object Number]", mt = "[object Object]", Rl = "[object RegExp]", Hl = "[object Set]", ql = "[object String]", Wl = "[object Symbol]", Jl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Xl = "[object DataView]", Zl = "[object Float32Array]", Ql = "[object Float64Array]", eu = "[object Int8Array]", tu = "[object Int16Array]", ru = "[object Int32Array]", au = "[object Uint8Array]", nu = "[object Uint8ClampedArray]", ou = "[object Uint16Array]", iu = "[object Uint32Array]", l = {};
l[_t] = l[Fl] = l[Yl] = l[Xl] = l[Gl] = l[Ul] = l[Zl] = l[Ql] = l[eu] = l[tu] = l[ru] = l[Kl] = l[Vl] = l[mt] = l[Rl] = l[Hl] = l[ql] = l[Wl] = l[au] = l[nu] = l[ou] = l[iu] = !0;
l[zl] = l[Tt] = l[Jl] = !1;
function q(e, t, r, a, n, s) {
  var o, c = t & Dl, p = t & kl, v = t & Bl;
  if (r && (o = n ? r(e, a, n, s) : r(e)), o !== void 0)
    return o;
  if (!Pl(e))
    return e;
  var C = Ol(e);
  if (C) {
    if (o = Sl(e), !c)
      return hl(e, o);
  } else {
    var y = Al(e), T = y == Tt || y == Nl;
    if (Il(e))
      return $l(e, c);
    if (y == mt || y == _t || T && !n) {
      if (o = p || T ? {} : wl(e), !c)
        return p ? Tl(e, bl(o, e)) : _l(e, yl(o, e));
    } else {
      if (!l[y])
        return n ? e : {};
      o = Cl(e, y, c);
    }
  }
  s || (s = new vl());
  var z = s.get(e);
  if (z)
    return z;
  s.set(e, o), El(e) ? e.forEach(function(b) {
    o.add(q(b, t, r, b, e, s));
  }) : xl(e) && e.forEach(function(b, h) {
    o.set(h, q(b, t, r, h, e, s));
  });
  var w = v ? p ? jl : ml : p ? Ml : Ll, N = C ? void 0 : w(e);
  return gl(N || e, function(b, h) {
    N && (h = b, b = e[h]), dl(o, h, q(b, t, r, h, e, s));
  }), o;
}
var su = q, cu = su, lu = 1, uu = 4;
function fu(e) {
  return cu(e, lu | uu);
}
var pu = fu;
const et = /* @__PURE__ */ Mt(pu), vu = {
  key: 0,
  class: "editContent"
}, gu = {
  key: 1,
  class: "iconStyle"
}, du = {
  key: 1,
  class: "content"
}, yu = { key: 1 }, bu = /* @__PURE__ */ Ct({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    dataList: {
      type: Array,
      required: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    // 显示在加载图标下方的加载文案
    elementLoadingText: {
      type: String
    },
    // 自定义加载图标
    elementLoadingSpinner: {
      type: String
    },
    // 自定义加载图标
    elementLoadingSvg: {
      type: String
    },
    // 背景遮盖颜色
    elementLoadingBackground: {
      type: String
    },
    checkIcon: {
      type: String,
      default: "Check"
    },
    closeIcon: {
      type: String,
      default: "Close"
    },
    // 是否整行可编辑
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 可编辑的操作项下标
    isEditRowIndex: {
      type: String,
      default: ""
    },
    // 是否显示分页信息
    pagination: {
      type: Boolean,
      default: !1
    },
    // 分页下标
    pageIndex: {
      type: Number,
      default: 1
    },
    // 每一页展示条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总共条数
    total: {
      type: Number,
      default: 0
    },
    // 分页下拉列表
    pageSizes: {
      type: Array,
      default: [10, 20, 30, 40]
    },
    pageinationAlign: {
      type: String,
      default: "right"
    }
  },
  emits: ["confirm", "cancel", "update:isEditRowIndex", "update:pageIndex", "update:pageSize", "handleSizeChange", "handleCurrentChange"],
  setup(e, { emit: t }) {
    const r = e, a = t;
    let n = k(r.pageIndex), s = k(r.pageSize), o = k(""), c = k(et(r.dataList)), p = k(r.isEditRowIndex), v = ne(() => r.pageinationAlign === "left" ? "flex-start" : r.pageinationAlign === "right" ? "flex-end" : "center");
    wt(() => {
      c.value.forEach((i) => {
        i.isEdit = !1;
      });
    });
    const C = (i) => {
      o.value = i.$index + i.column.id;
    }, y = (i) => {
      o.value = "", a("confirm", i);
    }, T = (i) => {
      o.value = "", a("cancel", i);
    }, z = ne(() => r.options.filter((i) => !i.action)), w = ne(() => r.options.find((i) => i.action)), N = (i) => {
      a("handleSizeChange", i);
    }, b = (i) => {
      a("handleCurrentChange", i);
    }, h = (i, O, ae) => {
      var K;
      O.label === ((K = w.value) == null ? void 0 : K.label) && r.isEditRowIndex === p.value && r.isEditRow && (i.isEdit = !i.isEdit, c.value.forEach((D) => {
        D !== i && (D.isEdit = !1);
      }), i.isEdit || a("update:isEditRowIndex", ""));
    };
    return V(() => r.dataList, (i) => {
      c.value = et(i);
    }, { deep: !0 }), V(() => r.isEditRowIndex, (i) => {
      i && (p.value = i);
    }), V(() => n.value, (i) => {
      a("update:pageIndex", i);
    }), V(() => s.value, (i) => {
      a("update:pageSize", i);
    }), (i, O) => {
      const ae = B("el-input"), K = B("el-icon-edit"), D = B("el-table-column"), jt = B("el-table"), At = B("el-pagination"), St = Ot("loading");
      return g(), m("div", null, [
        It((g(), _(jt, {
          data: j(c),
          "element-loading-text": e.elementLoadingText,
          "element-loading-spinner": e.elementLoadingSpinner,
          "element-loading-svg": e.elementLoadingSvg,
          "element-loading-background": e.elementLoadingBackground,
          onRowClick: h
        }, {
          default: oe(() => [
            (g(!0), m(
              Se,
              null,
              xt(z.value, (f) => (g(), _(D, {
                key: f,
                label: f.label,
                prop: f.prop,
                align: f.align,
                width: f.width
              }, {
                default: oe((d) => [
                  d.row.isEdit ? (g(), _(ae, {
                    key: 0,
                    size: "small",
                    modelValue: d.row[f.prop],
                    "onUpdate:modelValue": (I) => d.row[f.prop] = I
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (g(), m(
                    Se,
                    { key: 1 },
                    [
                      j(o) === d.$index + d.column.id ? (g(), m("div", vu, [
                        Pt(ae, {
                          size: "small",
                          modelValue: d.row[f.prop],
                          "onUpdate:modelValue": (I) => d.row[f.prop] = I
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        i.$slots.customIcon ? R(i.$slots, "customIcon", {
                          key: 0,
                          scope: d
                        }, void 0, !0) : (g(), m("div", gu, [
                          (g(), _(Ce(`el-icon${j(Oe)(e.checkIcon)}`), {
                            class: "icon-check",
                            onClick: ie((I) => y(d), ["stop"])
                          }, null, 8, ["onClick"])),
                          (g(), _(Ce(`el-icon${j(Oe)(e.closeIcon)}`), {
                            class: "icon-close",
                            onClick: ie((I) => T(d), ["stop"])
                          }, null, 8, ["onClick"]))
                        ]))
                      ])) : (g(), m("div", du, [
                        f.slot ? R(i.$slots, f.prop, {
                          key: 0,
                          scope: d
                        }, void 0, !0) : (g(), m(
                          "span",
                          yu,
                          Et(d.row[f.prop]),
                          1
                          /* TEXT */
                        )),
                        f.editable ? (g(), _(K, {
                          key: 2,
                          onClick: ie((I) => C(d), ["stop"]),
                          class: "editIcon"
                        }, null, 8, ["onClick"])) : se("v-if", !0)
                      ]))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "prop", "align", "width"]))),
              128
              /* KEYED_FRAGMENT */
            )),
            w.value ? (g(), _(D, {
              key: 0,
              label: w.value.label,
              align: w.value.align
            }, {
              default: oe((f) => [
                f.row.isEdit ? R(i.$slots, "editAction", {
                  key: 0,
                  scope: f
                }, void 0, !0) : R(i.$slots, "action", {
                  key: 1,
                  scope: f
                }, void 0, !0)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["label", "align"])) : se("v-if", !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["data", "element-loading-text", "element-loading-spinner", "element-loading-svg", "element-loading-background"])), [
          [St, e.loading]
        ]),
        e.pagination ? (g(), _(At, {
          key: 0,
          class: "paginationStyle",
          currentPage: j(n),
          "onUpdate:currentPage": O[0] || (O[0] = (f) => we(n) ? n.value = f : n = f),
          "page-size": j(s),
          "onUpdate:pageSize": O[1] || (O[1] = (f) => we(s) ? s.value = f : s = f),
          "page-sizes": e.pageSizes,
          layout: "total, sizes, prev, pager, next, jumper",
          total: e.total,
          style: Lt({ "justify-content": j(v) }),
          onSizeChange: N,
          onCurrentChange: b
        }, null, 8, ["currentPage", "page-size", "page-sizes", "total", "style"])) : se("v-if", !0)
      ]);
    };
  }
}), $u = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, n] of t)
    r[a] = n;
  return r;
}, hu = /* @__PURE__ */ $u(bu, [["__scopeId", "data-v-a12894de"]]), Tu = {
  install(e) {
    e.component("my-table", hu);
  }
};
export {
  Tu as default
};
