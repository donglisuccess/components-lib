import { defineComponent as ri, ref as ni, onMounted as ai, openBlock as ii, createElementBlock as oi } from "vue";
var At = function(t, e) {
  return At = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, At(t, e);
};
function R(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  At(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var h = function() {
  return h = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, h.apply(this, arguments);
};
function A(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, a = e.length, i; n < a; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
var ut, T, Cn, ye, ae, br, Rn, wn, $e = {}, Tn = [], si = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function _n(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ee(t, e, r) {
  var n, a, i, o = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : o[i] = e[i];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ut.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) o[i] === void 0 && (o[i] = t.defaultProps[i]);
  return Ye(t, o, n, a, null);
}
function Ye(t, e, r, n, a) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: a ?? ++Cn };
  return a == null && T.vnode != null && T.vnode(i), i;
}
function li() {
  return { current: null };
}
function le(t) {
  return t.children;
}
function ui(t, e, r, n, a) {
  var i;
  for (i in r) i === "children" || i === "key" || i in e || Ke(t, i, null, r[i], n);
  for (i in e) a && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === e[i] || Ke(t, i, e[i], r[i], n);
}
function Dr(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || si.test(e) ? r : r + "px";
}
function Ke(t, e, r, n, a) {
  var i;
  e: if (e === "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || Dr(t.style, e, "");
    if (r) for (e in r) n && r[e] === n[e] || Dr(t.style, e, r[e]);
  }
  else if (e[0] === "o" && e[1] === "n") i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n || t.addEventListener(e, i ? Rr : Cr, i) : t.removeEventListener(e, i ? Rr : Cr, i);
  else if (e !== "dangerouslySetInnerHTML") {
    if (a) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, r));
  }
}
function Cr(t) {
  ye = !0;
  try {
    return this.l[t.type + !1](T.event ? T.event(t) : t);
  } finally {
    ye = !1;
  }
}
function Rr(t) {
  ye = !0;
  try {
    return this.l[t.type + !0](T.event ? T.event(t) : t);
  } finally {
    ye = !1;
  }
}
function q(t, e) {
  this.props = t, this.context = e;
}
function He(t, e) {
  if (e == null) return t.__ ? He(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? He(t) : null;
}
function Mn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return Mn(t);
  }
}
function ci(t) {
  ye ? setTimeout(t) : Rn(t);
}
function Ot(t) {
  (!t.__d && (t.__d = !0) && ae.push(t) && !Je.__r++ || br !== T.debounceRendering) && ((br = T.debounceRendering) || ci)(Je);
}
function Je() {
  var t, e, r, n, a, i, o, s;
  for (ae.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }); t = ae.shift(); ) t.__d && (e = ae.length, n = void 0, a = void 0, o = (i = (r = t).__v).__e, (s = r.__P) && (n = [], (a = K({}, i)).__v = i.__v + 1, Zt(s, i, a, r.__n, s.ownerSVGElement !== void 0, i.__h != null ? [o] : null, n, o ?? He(i), i.__h), xn(n, i), i.__e != o && Mn(i)), ae.length > e && ae.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }));
  Je.__r = 0;
}
function kn(t, e, r, n, a, i, o, s, l, c) {
  var u, f, v, d, p, E, S, g = n && n.__k || Tn, b = g.length;
  for (r.__k = [], u = 0; u < e.length; u++) if ((d = r.__k[u] = (d = e[u]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ye(null, d, null, null, d) : Array.isArray(d) ? Ye(le, { children: d }, null, null, null) : d.__b > 0 ? Ye(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
    if (d.__ = r, d.__b = r.__b + 1, (v = g[u]) === null || v && d.key == v.key && d.type === v.type) g[u] = void 0;
    else for (f = 0; f < b; f++) {
      if ((v = g[f]) && d.key == v.key && d.type === v.type) {
        g[f] = void 0;
        break;
      }
      v = null;
    }
    Zt(t, d, v = v || $e, a, i, o, s, l, c), p = d.__e, (f = d.ref) && v.ref != f && (S || (S = []), v.ref && S.push(v.ref, null, d), S.push(f, d.__c || p, d)), p != null ? (E == null && (E = p), typeof d.type == "function" && d.__k === v.__k ? d.__d = l = In(d, l, t) : l = Pn(t, d, v, g, p, l), typeof r.type == "function" && (r.__d = l)) : l && v.__e == l && l.parentNode != t && (l = He(v));
  }
  for (r.__e = E, u = b; u--; ) g[u] != null && (typeof r.type == "function" && g[u].__e != null && g[u].__e == r.__d && (r.__d = Hn(n).nextSibling), An(g[u], g[u]));
  if (S) for (u = 0; u < S.length; u++) Nn(S[u], S[++u], S[++u]);
}
function In(t, e, r) {
  for (var n, a = t.__k, i = 0; a && i < a.length; i++) (n = a[i]) && (n.__ = t, e = typeof n.type == "function" ? In(n, e, r) : Pn(r, n, n, a, n.__e, e));
  return e;
}
function Qe(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
    Qe(r, e);
  }) : e.push(t)), e;
}
function Pn(t, e, r, n, a, i) {
  var o, s, l;
  if (e.__d !== void 0) o = e.__d, e.__d = void 0;
  else if (r == null || a != i || a.parentNode == null) e: if (i == null || i.parentNode !== t) t.appendChild(a), o = null;
  else {
    for (s = i, l = 0; (s = s.nextSibling) && l < n.length; l += 1) if (s == a) break e;
    t.insertBefore(a, i), o = i;
  }
  return o !== void 0 ? o : a.nextSibling;
}
function Hn(t) {
  var e, r, n;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((r = t.__k[e]) && (n = Hn(r))) return n;
  }
  return null;
}
function Zt(t, e, r, n, a, i, o, s, l) {
  var c, u, f, v, d, p, E, S, g, b, C, D, I, _, P, w = e.type;
  if (e.constructor !== void 0) return null;
  r.__h != null && (l = r.__h, s = e.__e = r.__e, e.__h = null, i = [s]), (c = T.__b) && c(e);
  try {
    e: if (typeof w == "function") {
      if (S = e.props, g = (c = w.contextType) && n[c.__c], b = c ? g ? g.props.value : c.__ : n, r.__c ? E = (u = e.__c = r.__c).__ = u.__E : ("prototype" in w && w.prototype.render ? e.__c = u = new w(S, b) : (e.__c = u = new q(S, b), u.constructor = w, u.render = di), g && g.sub(u), u.props = S, u.state || (u.state = {}), u.context = b, u.__n = n, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), w.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = K({}, u.__s)), K(u.__s, w.getDerivedStateFromProps(S, u.__s))), v = u.props, d = u.state, u.__v = e, f) w.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (w.getDerivedStateFromProps == null && S !== v && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, b), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(S, u.__s, b) === !1 || e.__v === r.__v) {
          for (e.__v !== r.__v && (u.props = S, u.state = u.__s, u.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(N) {
            N && (N.__ = e);
          }), C = 0; C < u._sb.length; C++) u.__h.push(u._sb[C]);
          u._sb = [], u.__h.length && o.push(u);
          break e;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, b), u.componentDidUpdate != null && u.__h.push(function() {
          u.componentDidUpdate(v, d, p);
        });
      }
      if (u.context = b, u.props = S, u.__P = t, D = T.__r, I = 0, "prototype" in w && w.prototype.render) {
        for (u.state = u.__s, u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), _ = 0; _ < u._sb.length; _++) u.__h.push(u._sb[_]);
        u._sb = [];
      } else do
        u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
      while (u.__d && ++I < 25);
      u.state = u.__s, u.getChildContext != null && (n = K(K({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (p = u.getSnapshotBeforeUpdate(v, d)), P = c != null && c.type === le && c.key == null ? c.props.children : c, kn(t, Array.isArray(P) ? P : [P], e, r, n, a, i, o, s, l), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), E && (u.__E = u.__ = null), u.__e = !1;
    } else i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = fi(r.__e, e, r, n, a, i, o, l);
    (c = T.diffed) && c(e);
  } catch (N) {
    e.__v = null, (l || i != null) && (e.__e = s, e.__h = !!l, i[i.indexOf(s)] = null), T.__e(N, e, r);
  }
}
function xn(t, e) {
  T.__c && T.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      T.__e(n, r.__v);
    }
  });
}
function fi(t, e, r, n, a, i, o, s) {
  var l, c, u, f = r.props, v = e.props, d = e.type, p = 0;
  if (d === "svg" && (a = !0), i != null) {
    for (; p < i.length; p++) if ((l = i[p]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
      t = l, i[p] = null;
      break;
    }
  }
  if (t == null) {
    if (d === null) return document.createTextNode(v);
    t = a ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, v.is && v), i = null, s = !1;
  }
  if (d === null) f === v || s && t.data === v || (t.data = v);
  else {
    if (i = i && ut.call(t.childNodes), c = (f = r.props || $e).dangerouslySetInnerHTML, u = v.dangerouslySetInnerHTML, !s) {
      if (i != null) for (f = {}, p = 0; p < t.attributes.length; p++) f[t.attributes[p].name] = t.attributes[p].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (ui(t, v, f, a, s), u) e.__k = [];
    else if (p = e.props.children, kn(t, Array.isArray(p) ? p : [p], e, r, n, a && d !== "foreignObject", i, o, i ? i[0] : r.__k && He(r, 0), s), i != null) for (p = i.length; p--; ) i[p] != null && _n(i[p]);
    s || ("value" in v && (p = v.value) !== void 0 && (p !== t.value || d === "progress" && !p || d === "option" && p !== f.value) && Ke(t, "value", p, f.value, !1), "checked" in v && (p = v.checked) !== void 0 && p !== t.checked && Ke(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Nn(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    T.__e(n, r);
  }
}
function An(t, e, r) {
  var n, a;
  if (T.unmount && T.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Nn(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      T.__e(i, e);
    }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k) for (a = 0; a < n.length; a++) n[a] && An(n[a], e, r || typeof t.type != "function");
  r || t.__e == null || _n(t.__e), t.__ = t.__e = t.__d = void 0;
}
function di(t, e, r) {
  return this.constructor(t, r);
}
function xe(t, e, r) {
  var n, a, i;
  T.__ && T.__(t, e), a = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], Zt(e, t = (!n && r || e).__k = ee(le, null, [t]), a || $e, $e, e.ownerSVGElement !== void 0, !n && r ? [r] : a ? null : e.firstChild ? ut.call(e.childNodes) : null, i, !n && r ? r : a ? a.__e : e.firstChild, n), xn(i, t);
}
function vi(t, e) {
  var r = { __c: e = "__cC" + wn++, __: t, Consumer: function(n, a) {
    return n.children(a);
  }, Provider: function(n) {
    var a, i;
    return this.getChildContext || (a = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && a.some(function(s) {
        s.__e = !0, Ot(s);
      });
    }, this.sub = function(o) {
      a.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        a.splice(a.indexOf(o), 1), s && s.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
ut = Tn.slice, T = { __e: function(t, e, r, n) {
  for (var a, i, o; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), o = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), o = a.__d), o) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Cn = 0, ye = !1, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, r), this.props)), t && K(r, t), t != null && this.__v && (e && this._sb.push(e), Ot(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ot(this));
}, q.prototype.render = le, ae = [], Rn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Je.__r = 0, wn = 0;
var j, Et, wr, On = [], St = [], Tr = T.__b, _r = T.__r, Mr = T.diffed, kr = T.__c, Ir = T.unmount;
function pi() {
  for (var t; t = On.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(je), t.__H.__h.forEach(Lt), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], T.__e(e, t.__v);
  }
}
T.__b = function(t) {
  j = null, Tr && Tr(t);
}, T.__r = function(t) {
  _r && _r(t);
  var e = (j = t.__c).__H;
  e && (Et === j ? (e.__h = [], j.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = St, r.__N = r.i = void 0;
  })) : (e.__h.forEach(je), e.__h.forEach(Lt), e.__h = [])), Et = j;
}, T.diffed = function(t) {
  Mr && Mr(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (On.push(e) !== 1 && wr === T.requestAnimationFrame || ((wr = T.requestAnimationFrame) || hi)(pi)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== St && (r.__ = r.__V), r.i = void 0, r.__V = St;
  })), Et = j = null;
}, T.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(je), r.__h = r.__h.filter(function(n) {
        return !n.__ || Lt(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], T.__e(n, r.__v);
    }
  }), kr && kr(t, e);
}, T.unmount = function(t) {
  Ir && Ir(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      je(n);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && T.__e(e, r.__v));
};
var Pr = typeof requestAnimationFrame == "function";
function hi(t) {
  var e, r = function() {
    clearTimeout(n), Pr && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Pr && (e = requestAnimationFrame(r));
}
function je(t) {
  var e = j, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), j = e;
}
function Lt(t) {
  var e = j;
  t.__c = t.__(), j = e;
}
function gi(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Hr(t, e) {
  for (var r in t) if (r !== "__source" && !(r in e)) return !0;
  for (var n in e) if (n !== "__source" && t[n] !== e[n]) return !0;
  return !1;
}
function xr(t) {
  this.props = t;
}
(xr.prototype = new q()).isPureReactComponent = !0, xr.prototype.shouldComponentUpdate = function(t, e) {
  return Hr(this.props, t) || Hr(this.state, e);
};
var Nr = T.__b;
T.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Nr && Nr(t);
};
var mi = T.__e;
T.__e = function(t, e, r, n) {
  if (t.then) {
    for (var a, i = e; i = i.__; ) if ((a = i.__c) && a.__c) return e.__e == null && (e.__e = r.__e, e.__k = r.__k), a.__c(t, e);
  }
  mi(t, e, r, n);
};
var Ar = T.unmount;
function Ln(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = gi({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return Ln(n, e, r);
  })), t;
}
function Vn(t, e, r) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return Vn(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
}
function bt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Un(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Be() {
  this.u = null, this.o = null;
}
T.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ar && Ar(t);
}, (bt.prototype = new q()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var a = Un(n.__v), i = !1, o = function() {
    i || (i = !0, r.__R = null, a ? a(s) : s());
  };
  r.__R = o;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Vn(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.t.pop(); ) u.forceUpdate();
    }
  }, l = e.__h === !0;
  n.__u++ || l || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(o, o);
}, bt.prototype.componentWillUnmount = function() {
  this.t = [];
}, bt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Ln(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var a = e.__a && ee(le, null, t.fallback);
  return a && (a.__h = null), [ee(le, null, e.__a ? null : t.children), a];
};
var Or = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (r = t.u; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    t.u = r = r[2];
  }
};
function yi(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Ei(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    xe(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), t.__v ? (e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, a) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), xe(ee(yi, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Si(t, e) {
  var r = ee(Ei, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(Be.prototype = new q()).__a = function(t) {
  var e = this, r = Un(e.__v), n = e.o.get(t);
  return n[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (n.push(a), Or(e, t, n)) : a();
    };
    r ? r(i) : i();
  };
}, Be.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Qe(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; ) this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, Be.prototype.componentDidUpdate = Be.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Or(t, r, e);
  });
};
var bi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Di = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ci = typeof document < "u", Ri = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Lr = T.event;
function wi() {
}
function Ti() {
  return this.cancelBubble;
}
function _i() {
  return this.defaultPrevented;
}
T.event = function(t) {
  return Lr && (t = Lr(t)), t.persist = wi, t.isPropagationStopped = Ti, t.isDefaultPrevented = _i, t.nativeEvent = t;
};
var Vr = { configurable: !0, get: function() {
  return this.class;
} }, Ur = T.vnode;
T.vnode = function(t) {
  var e = t.type, r = t.props, n = r;
  if (typeof e == "string") {
    var a = e.indexOf("-") === -1;
    for (var i in n = {}, r) {
      var o = r[i];
      Ci && i === "children" && e === "noscript" || i === "value" && "defaultValue" in r && o == null || (i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !Ri(r.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : a && Di.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), n[i] && (i = "oninputCapture")), n[i] = o);
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Qe(r.children).forEach(function(s) {
      s.props.selected = n.value.indexOf(s.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Qe(r.children).forEach(function(s) {
      s.props.selected = n.multiple ? n.defaultValue.indexOf(s.props.value) != -1 : n.defaultValue == s.props.value;
    })), t.props = n, r.class != r.className && (Vr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", Vr));
  }
  t.$$typeof = bi, Ur && Ur(t);
};
var Wr = T.__r;
T.__r = function(t) {
  Wr && Wr(t), t.__c;
};
var Br = typeof globalThis < "u" ? globalThis : window;
Br.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Br.FullCalendarVDom = {
  Component: q,
  createElement: ee,
  render: xe,
  createRef: li,
  Fragment: le,
  createContext: Ii,
  createPortal: Si,
  flushSync: Mi,
  unmountComponentAtNode: Pi
};
function Mi(t) {
  t();
  var e = T.debounceRendering, r = [];
  function n(a) {
    r.push(a);
  }
  for (T.debounceRendering = n, xe(ee(ki, {}), document.createElement("div")); r.length; )
    r.shift()();
  T.debounceRendering = e;
}
var ki = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      return ee("div", {});
    }, e.prototype.componentDidMount = function() {
      this.setState({});
    }, e;
  }(q)
);
function Ii(t) {
  var e = vi(t), r = e.Provider;
  return e.Provider = function() {
    var n = this, a = !this.getChildContext, i = r.apply(this, arguments);
    if (a) {
      var o = [];
      this.shouldComponentUpdate = function(s) {
        n.props.value !== s.value && o.forEach(function(l) {
          l.context = s.value, l.forceUpdate();
        });
      }, this.sub = function(s) {
        o.push(s);
        var l = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), l && l.call(s);
        };
      };
    }
    return i;
  }, e;
}
function Pi(t) {
  xe(null, t);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var Xt = FullCalendarVDom.Component, m = FullCalendarVDom.createElement, Hi = FullCalendarVDom.render, G = FullCalendarVDom.createRef, B = FullCalendarVDom.Fragment, Wn = FullCalendarVDom.createContext, xi = FullCalendarVDom.createPortal, Fr = FullCalendarVDom.flushSync, Ni = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var pe = (
  /** @class */
  function() {
    function t(e, r) {
      this.context = e, this.internalEventSource = r;
    }
    return t.prototype.remove = function() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId
      });
    }, t.prototype.refetch = function() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: !0
      });
    }, Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this.internalEventSource.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
      get: function() {
        return this.internalEventSource.meta.url;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "format", {
      get: function() {
        return this.internalEventSource.meta.format;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
function $t(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function U(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Ai(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Ai(t, e) {
  var r = t.matches || t.matchesSelector || t.msMatchesSelector;
  return r.call(t, e);
}
function Oi(t, e) {
  for (var r = t instanceof HTMLElement ? [t] : t, n = [], a = 0; a < r.length; a += 1)
    for (var i = r[a].querySelectorAll(e), o = 0; o < i.length; o += 1)
      n.push(i[o]);
  return n;
}
var Li = /(top|left|right|bottom|width|height)$/i;
function _e(t, e) {
  for (var r in e)
    Bn(t, r, e[r]);
}
function Bn(t, e, r) {
  r == null ? t.style[e] = "" : typeof r == "number" && Li.test(e) ? t.style[e] = r + "px" : t.style[e] = r;
}
function Fn(t) {
  var e, r;
  return (r = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && r !== void 0 ? r : t.target;
}
function zn(t) {
  return t.getRootNode ? t.getRootNode() : document;
}
var zr = 0;
function ct() {
  return zr += 1, "fc-dom-" + zr;
}
function ft(t) {
  t.preventDefault();
}
function Vi(t, e) {
  return function(r) {
    var n = U(r.target, t);
    n && e.call(n, r, n);
  };
}
function Gn(t, e, r, n) {
  var a = Vi(r, n);
  return t.addEventListener(e, a), function() {
    t.removeEventListener(e, a);
  };
}
function Ui(t, e, r, n) {
  var a;
  return Gn(t, "mouseover", e, function(i, o) {
    if (o !== a) {
      a = o, r(i, o);
      var s = function(l) {
        a = null, n(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
var Gr = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function Wi(t, e) {
  var r = function(n) {
    e(n), Gr.forEach(function(a) {
      t.removeEventListener(a, r);
    });
  };
  Gr.forEach(function(n) {
    t.addEventListener(n, r);
  });
}
function qn(t) {
  return h({ onClick: t }, Yn(t));
}
function Yn(t) {
  return {
    tabIndex: 0,
    onKeyDown: function(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
var qr = 0;
function De() {
  return qr += 1, String(qr);
}
function Kt() {
  document.body.classList.add("fc-not-allowed");
}
function Jt() {
  document.body.classList.remove("fc-not-allowed");
}
function Bi(t) {
  t.classList.add("fc-unselectable"), t.addEventListener("selectstart", ft);
}
function Fi(t) {
  t.classList.remove("fc-unselectable"), t.removeEventListener("selectstart", ft);
}
function zi(t) {
  t.addEventListener("contextmenu", ft);
}
function Gi(t) {
  t.removeEventListener("contextmenu", ft);
}
function qi(t) {
  var e = [], r = [], n, a;
  for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : Array.isArray(t) && (r = t), n = 0; n < r.length; n += 1)
    a = r[n], typeof a == "string" ? e.push(a.charAt(0) === "-" ? { field: a.substring(1), order: -1 } : { field: a, order: 1 }) : typeof a == "function" && e.push({ func: a });
  return e;
}
function Yi(t, e, r) {
  var n, a;
  for (n = 0; n < r.length; n += 1)
    if (a = ji(t, e, r[n]), a)
      return a;
  return 0;
}
function ji(t, e, r) {
  return r.func ? r.func(t, e) : Zi(t[r.field], e[r.field]) * (r.order || 1);
}
function Zi(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Dt(t, e) {
  var r = String(t);
  return "000".substr(0, e - r.length) + r;
}
function Me(t, e, r) {
  return typeof t == "function" ? t.apply(void 0, e) : typeof t == "string" ? e.reduce(function(n, a, i) {
    return n.replace("$" + i, a || "");
  }, t) : r;
}
function Xi(t, e) {
  return t - e;
}
function Ct(t) {
  return t % 1 === 0;
}
function $i(t) {
  var e = t.querySelector(".fc-scrollgrid-shrink-frame"), r = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!r)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  r.getBoundingClientRect().width;
}
var Ki = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Yr(t, e) {
  var r = J(t);
  return r[2] += e * 7, F(r);
}
function W(t, e) {
  var r = J(t);
  return r[2] += e, F(r);
}
function ue(t, e) {
  var r = J(t);
  return r[6] += e, F(r);
}
function Ji(t, e) {
  return Ce(t, e) / 7;
}
function Ce(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Qi(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function eo(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function to(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function ro(t, e) {
  var r = H(t), n = H(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ce(r, n)),
    milliseconds: e.valueOf() - n.valueOf() - (t.valueOf() - r.valueOf())
  };
}
function no(t, e) {
  var r = et(t, e);
  return r !== null && r % 7 === 0 ? r / 7 : null;
}
function et(t, e) {
  return Q(t) === Q(e) ? Math.round(Ce(t, e)) : null;
}
function H(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function ao(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function io(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function oo(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function so(t, e, r) {
  var n = t.getUTCFullYear(), a = Rt(t, n, e, r);
  if (a < 1)
    return Rt(t, n - 1, e, r);
  var i = Rt(t, n + 1, e, r);
  return i >= 1 ? Math.min(a, i) : a;
}
function Rt(t, e, r, n) {
  var a = F([e, 0, 1 + lo(e, r, n)]), i = H(t), o = Math.round(Ce(a, i));
  return Math.floor(o / 7) + 1;
}
function lo(t, e, r) {
  var n = 7 + e - r, a = (7 + F([t, 0, n]).getUTCDay() - e) % 7;
  return -a + n - 1;
}
function jr(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Zr(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function J(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function F(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC.apply(Date, t));
}
function jn(t) {
  return !isNaN(t.valueOf());
}
function Q(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Qt(t, e, r, n) {
  return {
    instanceId: De(),
    defId: t,
    range: e,
    forcedStartTzo: r ?? null,
    forcedEndTzo: n ?? null
  };
}
var tt = Object.prototype.hasOwnProperty;
function er(t, e) {
  var r = {};
  if (e)
    for (var n in e) {
      for (var a = [], i = t.length - 1; i >= 0; i -= 1) {
        var o = t[i][n];
        if (typeof o == "object" && o)
          a.unshift(o);
        else if (o !== void 0) {
          r[n] = o;
          break;
        }
      }
      a.length && (r[n] = er(a));
    }
  for (var i = t.length - 1; i >= 0; i -= 1) {
    var s = t[i];
    for (var l in s)
      l in r || (r[l] = s[l]);
  }
  return r;
}
function ce(t, e) {
  var r = {};
  for (var n in t)
    e(t[n], n) && (r[n] = t[n]);
  return r;
}
function fe(t, e) {
  var r = {};
  for (var n in t)
    r[n] = e(t[n], n);
  return r;
}
function Zn(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    e[a] = !0;
  }
  return e;
}
function tr(t) {
  var e = [];
  for (var r in t)
    e.push(t[r]);
  return e;
}
function X(t, e) {
  if (t === e)
    return !0;
  for (var r in t)
    if (tt.call(t, r) && !(r in e))
      return !1;
  for (var r in e)
    if (tt.call(e, r) && t[r] !== e[r])
      return !1;
  return !0;
}
function Xr(t, e) {
  var r = [];
  for (var n in t)
    tt.call(t, n) && (n in e || r.push(n));
  for (var n in e)
    tt.call(e, n) && t[n] !== e[n] && r.push(n);
  return r;
}
function wt(t, e, r) {
  if (r === void 0 && (r = {}), t === e)
    return !0;
  for (var n in e)
    if (!(n in t && uo(t[n], e[n], r[n]))) return !1;
  for (var n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function uo(t, e, r) {
  return t === e || r === !0 ? !0 : r ? r(t, e) : !1;
}
function co(t, e, r, n) {
  e === void 0 && (e = 0), n === void 0 && (n = 1);
  var a = [];
  r == null && (r = Object.keys(t).length);
  for (var i = e; i < r; i += n) {
    var o = t[i];
    o !== void 0 && a.push(o);
  }
  return a;
}
function fo(t, e, r, n) {
  for (var a = 0; a < n.length; a += 1) {
    var i = n[a].parse(t, r);
    if (i) {
      var o = t.allDay;
      return o == null && (o = e, o == null && (o = i.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: i.duration,
        typeData: i.typeData,
        typeId: a
      };
    }
  }
  return null;
}
function Ee(t, e, r) {
  var n = r.dateEnv, a = r.pluginHooks, i = r.options, o = t.defs, s = t.instances;
  s = ce(s, function(S) {
    return !o[S.defId].recurringDef;
  });
  for (var l in o) {
    var c = o[l];
    if (c.recurringDef) {
      var u = c.recurringDef.duration;
      u || (u = c.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
      for (var f = vo(c, u, e, n, a.recurringTypes), v = 0, d = f; v < d.length; v++) {
        var p = d[v], E = Qt(l, {
          start: p,
          end: n.add(p, u)
        });
        s[E.instanceId] = E;
      }
    }
  }
  return { defs: o, instances: s };
}
function vo(t, e, r, n, a) {
  var i = a[t.recurringDef.typeId], o = i.expand(t.recurringDef.typeData, {
    start: n.subtract(r.start, e),
    end: r.end
  }, n);
  return t.allDay && (o = o.map(H)), o;
}
var po = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function k(t, e) {
  var r;
  return typeof t == "string" ? ho(t) : typeof t == "object" && t ? $r(t) : typeof t == "number" ? $r((r = {}, r[e || "milliseconds"] = t, r)) : null;
}
function ho(t) {
  var e = po.exec(t);
  if (e) {
    var r = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: r * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: r * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function $r(t) {
  var e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, r = t.weeks || t.week;
  return r && (e.days += r * 7, e.specifiedWeeks = !0), e;
}
function go(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function mo(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function yo(t) {
  return ge(t) / 365;
}
function Eo(t) {
  return ge(t) / 30;
}
function ge(t) {
  return Ne(t) / 864e5;
}
function Ne(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Vt(t) {
  var e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function So(t, e, r) {
  r === void 0 && (r = !1);
  var n = t.toISOString();
  return n = n.replace(".000", ""), r && (n = n.replace("T00:00:00Z", "")), n.length > 10 && (e == null ? n = n.replace("Z", "") : e !== 0 && (n = n.replace("Z", rr(e, !0)))), n;
}
function Xn(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function rr(t, e) {
  e === void 0 && (e = !1);
  var r = t < 0 ? "-" : "+", n = Math.abs(t), a = Math.floor(n / 60), i = Math.round(n % 60);
  return e ? r + Dt(a, 2) + ":" + Dt(i, 2) : "GMT" + r + a + (i ? ":" + Dt(i, 2) : "");
}
function Se(t, e, r) {
  if (t === e)
    return !0;
  var n = t.length, a;
  if (n !== e.length)
    return !1;
  for (a = 0; a < n; a += 1)
    if (!(r ? r(t[a], e[a]) : t[a] === e[a]))
      return !1;
  return !0;
}
function M(t, e, r) {
  var n, a;
  return function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (!n)
      a = t.apply(this, i);
    else if (!Se(n, i)) {
      var s = t.apply(this, i);
      (!e || !e(s, a)) && (a = s);
    }
    return n = i, a;
  };
}
function Ze(t, e, r) {
  var n = this, a, i;
  return function(o) {
    if (!a)
      i = t.call(n, o);
    else if (!X(a, o)) {
      var s = t.call(n, o);
      i = s;
    }
    return a = o, i;
  };
}
var Kr = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, rt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Fe = /\s*([ap])\.?m\.?/i, bo = /,/g, Do = /\s+/g, Co = /\u200e/g, Ro = /UTC|GMT/, wo = (
  /** @class */
  function() {
    function t(e) {
      var r = {}, n = {}, a = 0;
      for (var i in e)
        i in Kr ? (n[i] = e[i], a = Math.max(Kr[i], a)) : (r[i] = e[i], i in rt && (a = Math.max(rt[i], a)));
      this.standardDateProps = r, this.extendedSettings = n, this.severity = a, this.buildFormattingFunc = M(Jr);
    }
    return t.prototype.format = function(e, r) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, r)(e);
    }, t.prototype.formatRange = function(e, r, n, a) {
      var i = this, o = i.standardDateProps, s = i.extendedSettings, l = Po(e.marker, r.marker, n.calendarSystem);
      if (!l)
        return this.format(e, n);
      var c = l;
      c > 1 && // the two dates are different in a way that's larger scale than time
      (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (c = 1);
      var u = this.format(e, n), f = this.format(r, n);
      if (u === f)
        return u;
      var v = Ho(o, c), d = Jr(v, s, n), p = d(e), E = d(r), S = xo(u, p, f, E), g = s.separator || a || n.defaultSeparator || "";
      return S ? S.before + p + g + E + S.after : u + g + f;
    }, t.prototype.getLargestUnit = function() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return "year";
        case 4:
          return "month";
        case 3:
          return "week";
        case 2:
          return "day";
        default:
          return "time";
      }
    }, t;
  }()
);
function Jr(t, e, r) {
  var n = Object.keys(t).length;
  return n === 1 && t.timeZoneName === "short" ? function(a) {
    return rr(a.timeZoneOffset);
  } : n === 0 && e.week ? function(a) {
    return Io(r.computeWeekNumber(a.marker), r.weekText, r.weekTextLong, r.locale, e.week);
  } : To(t, e, r);
}
function To(t, e, r) {
  t = h({}, t), e = h({}, e), _o(t, e), t.timeZone = "UTC";
  var n = new Intl.DateTimeFormat(r.locale.codes, t), a;
  if (e.omitZeroMinute) {
    var i = h({}, t);
    delete i.minute, a = new Intl.DateTimeFormat(r.locale.codes, i);
  }
  return function(o) {
    var s = o.marker, l;
    a && !s.getUTCMinutes() ? l = a : l = n;
    var c = l.format(s);
    return Mo(c, o, t, e, r);
  };
}
function _o(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Mo(t, e, r, n, a) {
  return t = t.replace(Co, ""), r.timeZoneName === "short" && (t = ko(t, a.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    rr(e.timeZoneOffset)
  ))), n.omitCommas && (t = t.replace(bo, "").trim()), n.omitZeroMinute && (t = t.replace(":00", "")), n.meridiem === !1 ? t = t.replace(Fe, "").trim() : n.meridiem === "narrow" ? t = t.replace(Fe, function(i, o) {
    return o.toLocaleLowerCase();
  }) : n.meridiem === "short" ? t = t.replace(Fe, function(i, o) {
    return o.toLocaleLowerCase() + "m";
  }) : n.meridiem === "lowercase" && (t = t.replace(Fe, function(i) {
    return i.toLocaleLowerCase();
  })), t = t.replace(Do, " "), t = t.trim(), t;
}
function ko(t, e) {
  var r = !1;
  return t = t.replace(Ro, function() {
    return r = !0, e;
  }), r || (t += " " + e), t;
}
function Io(t, e, r, n, a) {
  var i = [];
  return a === "long" ? i.push(r) : (a === "short" || a === "narrow") && i.push(e), (a === "long" || a === "short") && i.push(" "), i.push(n.simpleNumberFormat.format(t)), n.options.direction === "rtl" && i.reverse(), i.join("");
}
function Po(t, e, r) {
  return r.getMarkerYear(t) !== r.getMarkerYear(e) ? 5 : r.getMarkerMonth(t) !== r.getMarkerMonth(e) ? 4 : r.getMarkerDay(t) !== r.getMarkerDay(e) ? 2 : Q(t) !== Q(e) ? 1 : 0;
}
function Ho(t, e) {
  var r = {};
  for (var n in t)
    (!(n in rt) || // not a date part prop (like timeZone)
    rt[n] <= e) && (r[n] = t[n]);
  return r;
}
function xo(t, e, r, n) {
  for (var a = 0; a < t.length; ) {
    var i = t.indexOf(e, a);
    if (i === -1)
      break;
    var o = t.substr(0, i);
    a = i + e.length;
    for (var s = t.substr(a), l = 0; l < r.length; ) {
      var c = r.indexOf(n, l);
      if (c === -1)
        break;
      var u = r.substr(0, c);
      l = c + n.length;
      var f = r.substr(l);
      if (o === u && s === f)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Qr(t, e) {
  var r = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: r,
    year: r[0],
    month: r[1],
    day: r[2],
    hour: r[3],
    minute: r[4],
    second: r[5],
    millisecond: r[6]
  };
}
function nt(t, e, r, n) {
  var a = Qr(t, r.calendarSystem), i = e ? Qr(e, r.calendarSystem) : null;
  return {
    date: a,
    start: a,
    end: i,
    timeZone: r.timeZone,
    localeCodes: r.locale.codes,
    defaultSeparator: n || r.defaultSeparator
  };
}
var No = (
  /** @class */
  function() {
    function t(e) {
      this.cmdStr = e;
    }
    return t.prototype.format = function(e, r, n) {
      return r.cmdFormatter(this.cmdStr, nt(e, null, r, n));
    }, t.prototype.formatRange = function(e, r, n, a) {
      return n.cmdFormatter(this.cmdStr, nt(e, r, n, a));
    }, t;
  }()
), Ao = (
  /** @class */
  function() {
    function t(e) {
      this.func = e;
    }
    return t.prototype.format = function(e, r, n) {
      return this.func(nt(e, null, r, n));
    }, t.prototype.formatRange = function(e, r, n, a) {
      return this.func(nt(e, r, n, a));
    }, t;
  }()
);
function V(t) {
  return typeof t == "object" && t ? new wo(t) : typeof t == "string" ? new No(t) : typeof t == "function" ? new Ao(t) : null;
}
var en = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: k,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: k,
  defaultTimedEventDuration: k,
  nextDayThreshold: k,
  scrollTime: k,
  scrollTimeReset: Boolean,
  slotMinTime: k,
  slotMaxTime: k,
  dayPopoverFormat: V,
  slotDuration: k,
  snapDuration: k,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: V,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: qi,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: V,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: k,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: V,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: k,
  hiddenDays: y,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y
}, ke = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, tn = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  // internal
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, rn = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, ne = {
  headerToolbar: ve,
  footerToolbar: ve,
  buttonText: ve,
  buttonHints: ve,
  buttonIcons: ve,
  dateIncrement: ve
};
function ve(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? X(t, e) : t === e;
}
var Oo = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function Tt(t) {
  return er(t, ne);
}
function nr(t, e) {
  var r = {}, n = {};
  for (var a in e)
    a in t && (r[a] = e[a](t[a]));
  for (var a in t)
    a in e || (n[a] = t[a]);
  return { refined: r, extra: n };
}
function y(t) {
  return t;
}
function at(t, e, r, n) {
  for (var a = Y(), i = or(r), o = 0, s = t; o < s.length; o++) {
    var l = s[o], c = Kn(l, e, r, n, i);
    c && Ut(c, a);
  }
  return a;
}
function Ut(t, e) {
  return e === void 0 && (e = Y()), e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function ar(t, e) {
  var r = t.instances[e];
  if (r) {
    var n = t.defs[r.defId], a = dt(t, function(i) {
      return Lo(n, i);
    });
    return a.defs[n.defId] = n, a.instances[r.instanceId] = r, a;
  }
  return Y();
}
function Lo(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Y() {
  return { defs: {}, instances: {} };
}
function ir(t, e) {
  return {
    defs: h(h({}, t.defs), e.defs),
    instances: h(h({}, t.instances), e.instances)
  };
}
function dt(t, e) {
  var r = ce(t.defs, e), n = ce(t.instances, function(a) {
    return r[a.defId];
  });
  return { defs: r, instances: n };
}
function Vo(t, e) {
  var r = t.defs, n = t.instances, a = {}, i = {};
  for (var o in r)
    e.defs[o] || (a[o] = r[o]);
  for (var s in n)
    !e.instances[s] && // not explicitly excluded
    a[n[s].defId] && (i[s] = n[s]);
  return {
    defs: a,
    instances: i
  };
}
function Uo(t, e) {
  return Array.isArray(t) ? at(t, null, e, !0) : typeof t == "object" && t ? at([t], null, e, !0) : t != null ? String(t) : null;
}
function Wt(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
var it = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Wt,
  classNames: Wt,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Wo = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function ot(t, e) {
  var r = Uo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: r != null ? [r] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function Bo(t) {
  return t.reduce(Fo, Wo);
}
function Fo(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
var Xe = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, $n = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, zo = h(h(h({}, Xe), $n), { extendedProps: y });
function Kn(t, e, r, n, a) {
  a === void 0 && (a = or(r));
  var i = Jn(t, r, a), o = i.refined, s = i.extra, l = qo(e, r), c = fo(o, l, r.dateEnv, r.pluginHooks.recurringTypes);
  if (c) {
    var u = Bt(o, s, e ? e.sourceId : "", c.allDay, !!c.duration, r);
    return u.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: u, instance: null };
  }
  var f = Go(o, l, r, n);
  if (f) {
    var u = Bt(o, s, e ? e.sourceId : "", f.allDay, f.hasEnd, r), v = Qt(u.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return { def: u, instance: v };
  }
  return null;
}
function Jn(t, e, r) {
  return r === void 0 && (r = or(e)), nr(t, r);
}
function or(t) {
  return h(h(h({}, it), zo), t.pluginHooks.eventRefiners);
}
function Bt(t, e, r, n, a, i) {
  for (var o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: De(),
    sourceId: r,
    allDay: n,
    hasEnd: a,
    interactive: t.interactive,
    ui: ot(t, i),
    extendedProps: h(h({}, t.extendedProps || {}), e)
  }, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
    var c = l[s];
    h(o, c(t));
  }
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function Go(t, e, r, n) {
  var a = t.allDay, i, o = null, s = !1, l, c = null, u = t.start != null ? t.start : t.date;
  if (i = r.dateEnv.createMarkerMeta(u), i)
    o = i.marker;
  else if (!n)
    return null;
  return t.end != null && (l = r.dateEnv.createMarkerMeta(t.end)), a == null && (e != null ? a = e : a = (!i || i.isTimeUnspecified) && (!l || l.isTimeUnspecified)), a && o && (o = H(o)), l && (c = l.marker, a && (c = H(c)), o && c <= o && (c = null)), c ? s = !0 : n || (s = r.options.forceEventDuration || !1, c = r.dateEnv.add(o, a ? r.options.defaultAllDayEventDuration : r.options.defaultTimedEventDuration)), {
    allDay: a,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: i ? i.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function qo(t, e) {
  var r = null;
  return t && (r = t.defaultAllDay), r == null && (r = e.options.defaultAllDay), r;
}
function Qn(t) {
  var e = Math.floor(Ce(t.start, t.end)) || 1, r = H(t.start), n = W(r, e);
  return { start: r, end: n };
}
function ea(t, e) {
  e === void 0 && (e = k(0));
  var r = null, n = null;
  if (t.end) {
    n = H(t.end);
    var a = t.end.valueOf() - n.valueOf();
    a && a >= Ne(e) && (n = W(n, 1));
  }
  return t.start && (r = H(t.start), n && n <= r && (n = W(r, 1))), { start: r, end: n };
}
function he(t, e, r, n) {
  return n === "year" ? k(r.diffWholeYears(t, e), "year") : n === "month" ? k(r.diffWholeMonths(t, e), "month") : ro(t, e);
}
function Yo(t, e) {
  var r = null, n = null;
  return t.start && (r = e.createMarker(t.start)), t.end && (n = e.createMarker(t.end)), !r && !n || r && n && n < r ? null : { start: r, end: n };
}
function nn(t, e) {
  var r = [], n = e.start, a, i;
  for (t.sort(jo), a = 0; a < t.length; a += 1)
    i = t[a], i.start > n && r.push({ start: n, end: i.start }), i.end > n && (n = i.end);
  return n < e.end && r.push({ start: n, end: e.end }), r;
}
function jo(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ae(t, e) {
  var r = t.start, n = t.end, a = null;
  return e.start !== null && (r === null ? r = e.start : r = new Date(Math.max(r.valueOf(), e.start.valueOf()))), e.end != null && (n === null ? n = e.end : n = new Date(Math.min(n.valueOf(), e.end.valueOf()))), (r === null || n === null || r < n) && (a = { start: r, end: n }), a;
}
function Zo(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function sr(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function vt(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function oe(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Xo(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function an(t, e, r, n) {
  var a = {}, i = {}, o = {}, s = [], l = [], c = st(t.defs, e);
  for (var u in t.defs) {
    var f = t.defs[u], v = c[f.defId];
    v.display === "inverse-background" && (f.groupId ? (a[f.groupId] = [], o[f.groupId] || (o[f.groupId] = f)) : i[u] = []);
  }
  for (var d in t.instances) {
    var p = t.instances[d], f = t.defs[p.defId], v = c[f.defId], E = p.range, S = !f.allDay && n ? ea(E, n) : E, g = Ae(S, r);
    g && (v.display === "inverse-background" ? f.groupId ? a[f.groupId].push(g) : i[p.defId].push(g) : v.display !== "none" && (v.display === "background" ? s : l).push({
      def: f,
      ui: v,
      instance: p,
      range: g,
      isStart: S.start && S.start.valueOf() === g.start.valueOf(),
      isEnd: S.end && S.end.valueOf() === g.end.valueOf()
    }));
  }
  for (var b in a)
    for (var C = a[b], D = nn(C, r), I = 0, _ = D; I < _.length; I++) {
      var P = _[I], f = o[b], v = c[f.defId];
      s.push({
        def: f,
        ui: v,
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in i)
    for (var C = i[u], D = nn(C, r), w = 0, N = D; w < N.length; w++) {
      var P = N[w];
      s.push({
        def: t.defs[u],
        ui: c[u],
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: s, fg: l };
}
function on(t, e) {
  t.fcSeg = e;
}
function be(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function st(t, e) {
  return fe(t, function(r) {
    return ta(r, e);
  });
}
function ta(t, e) {
  var r = [];
  return e[""] && r.push(e[""]), e[t.defId] && r.push(e[t.defId]), r.push(t.ui), Bo(r);
}
function $o(t, e) {
  var r = t.map(Ko);
  return r.sort(function(n, a) {
    return Yi(n, a, e);
  }), r.map(function(n) {
    return n._seg;
  });
}
function Ko(t) {
  var e = t.eventRange, r = e.def, n = e.instance ? e.instance.range : e.range, a = n.start ? n.start.valueOf() : 0, i = n.end ? n.end.valueOf() : 0;
  return h(h(h({}, r.extendedProps), r), {
    id: r.publicId,
    start: a,
    end: i,
    duration: i - a,
    allDay: Number(r.allDay),
    _seg: t
  });
}
function Jo(t, e) {
  for (var r = e.pluginHooks, n = r.isDraggableTransformers, a = t.eventRange, i = a.def, o = a.ui, s = o.startEditable, l = 0, c = n; l < c.length; l++) {
    var u = c[l];
    s = u(s, i, o, e);
  }
  return s;
}
function Qo(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function es(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function ra(t, e, r, n, a, i, o) {
  var s = r.dateEnv, l = r.options, c = l.displayEventTime, u = l.displayEventEnd, f = t.eventRange.def, v = t.eventRange.instance;
  c == null && (c = n !== !1), u == null && (u = a !== !1);
  var d = v.range.start, p = v.range.end, E = t.start || t.eventRange.range.start, S = t.end || t.eventRange.range.end, g = H(d).valueOf() === H(E).valueOf(), b = H(ue(p, -1)).valueOf() === H(ue(S, -1)).valueOf();
  return c && !f.allDay && (g || b) ? (E = g ? d : E, S = b ? p : S, u && f.hasEnd ? s.formatRange(E, S, e, {
    forcedStartTzo: v.forcedStartTzo,
    forcedEndTzo: v.forcedEndTzo
  }) : s.format(E, e, {
    forcedTzo: v.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Ie(t, e, r) {
  var n = t.eventRange.range;
  return {
    isPast: n.end < e.start,
    isFuture: n.start >= e.end,
    isToday: e && oe(e, n.start)
  };
}
function ts(t) {
  var e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function rs(t) {
  return t.instance ? t.instance.instanceId : t.def.defId + ":" + t.range.start.toISOString();
}
function na(t, e) {
  var r = t.eventRange, n = r.def, a = r.instance, i = n.url;
  if (i)
    return { href: i };
  var o = e.emitter, s = e.options, l = s.eventInteractive;
  return l == null && (l = n.interactive, l == null && (l = !!o.hasHandlers("eventClick"))), l ? Yn(function(c) {
    o.trigger("eventClick", {
      el: c.target,
      event: new O(e, n, a),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
var ns = {
  start: y,
  end: y,
  allDay: Boolean
};
function as(t, e, r) {
  var n = is(t, e), a = n.range;
  if (!a.start)
    return null;
  if (!a.end) {
    if (r == null)
      return null;
    a.end = e.add(a.start, r);
  }
  return n;
}
function is(t, e) {
  var r = nr(t, ns), n = r.refined, a = r.extra, i = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, s = n.allDay;
  return s == null && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), h({ range: {
    start: i ? i.marker : null,
    end: o ? o.marker : null
  }, allDay: s }, a);
}
function os(t, e) {
  return Zo(t.range, e.range) && t.allDay === e.allDay && ss(t, e);
}
function ss(t, e) {
  for (var r in e)
    if (r !== "range" && r !== "allDay" && t[r] !== e[r])
      return !1;
  for (var r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function ls(t, e) {
  return h(h({}, ia(t.range, e, t.allDay)), { allDay: t.allDay });
}
function aa(t, e, r) {
  return h(h({}, ia(t, e, r)), { timeZone: e.timeZone });
}
function ia(t, e, r) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: r }),
    endStr: e.formatIso(t.end, { omitTime: r })
  };
}
function us(t, e, r) {
  var n = Jn({ editable: !1 }, r), a = Bt(
    n.refined,
    n.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    r
  );
  return {
    def: a,
    ui: ta(a, e),
    instance: Qt(a.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function oa(t, e, r) {
  r.emitter.trigger("select", h(h({}, lr(t, r)), { jsEvent: e ? e.origEvent : null, view: r.viewApi || r.calendarApi.view }));
}
function cs(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function lr(t, e) {
  for (var r = {}, n = 0, a = e.pluginHooks.dateSpanTransforms; n < a.length; n++) {
    var i = a[n];
    h(r, i(t, e));
  }
  return h(r, ls(t, e.dateEnv)), r;
}
function sn(t, e, r) {
  var n = r.dateEnv, a = r.options, i = e;
  return t ? (i = H(i), i = n.add(i, a.defaultAllDayEventDuration)) : i = n.add(i, a.defaultTimedEventDuration), i;
}
function ur(t, e, r, n) {
  var a = st(t.defs, e), i = Y();
  for (var o in t.defs) {
    var s = t.defs[o];
    i.defs[o] = fs(s, a[o], r, n);
  }
  for (var l in t.instances) {
    var c = t.instances[l], s = i.defs[c.defId];
    i.instances[l] = ds(c, s, a[c.defId], r, n);
  }
  return i;
}
function fs(t, e, r, n) {
  var a = r.standardProps || {};
  a.hasEnd == null && e.durationEditable && (r.startDelta || r.endDelta) && (a.hasEnd = !0);
  var i = h(h(h({}, t), a), { ui: h(h({}, t.ui), a.ui) });
  r.extendedProps && (i.extendedProps = h(h({}, i.extendedProps), r.extendedProps));
  for (var o = 0, s = n.pluginHooks.eventDefMutationAppliers; o < s.length; o++) {
    var l = s[o];
    l(i, r, n);
  }
  return !i.hasEnd && n.options.forceEventDuration && (i.hasEnd = !0), i;
}
function ds(t, e, r, n, a) {
  var i = a.dateEnv, o = n.standardProps && n.standardProps.allDay === !0, s = n.standardProps && n.standardProps.hasEnd === !1, l = h({}, t);
  return o && (l.range = Qn(l.range)), n.datesDelta && r.startEditable && (l.range = {
    start: i.add(l.range.start, n.datesDelta),
    end: i.add(l.range.end, n.datesDelta)
  }), n.startDelta && r.durationEditable && (l.range = {
    start: i.add(l.range.start, n.startDelta),
    end: l.range.end
  }), n.endDelta && r.durationEditable && (l.range = {
    start: l.range.start,
    end: i.add(l.range.end, n.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: sn(e.allDay, l.range.start, a)
  }), e.allDay && (l.range = {
    start: H(l.range.start),
    end: H(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = sn(e.allDay, l.range.start, a)), l;
}
var vs = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.type = e, this.getCurrentData = r, this.dateEnv = n;
    }
    return Object.defineProperty(t.prototype, "calendar", {
      get: function() {
        return this.getCurrentData().calendarApi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "title", {
      get: function() {
        return this.getCurrentData().viewTitle;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "activeStart", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "activeEnd", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "currentStart", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "currentEnd", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getOption = function(e) {
      return this.getCurrentData().options[e];
    }, t;
  }()
), ps = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  // for any network-related sources
  success: y,
  failure: y
};
function sa(t, e, r) {
  r === void 0 && (r = la(e));
  var n;
  if (typeof t == "string" ? n = { url: t } : typeof t == "function" || Array.isArray(t) ? n = { events: t } : typeof t == "object" && t && (n = t), n) {
    var a = nr(n, r), i = a.refined, o = a.extra, s = hs(i, e);
    if (s)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: De(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: ot(i, e),
        extendedProps: o
      };
  }
  return null;
}
function la(t) {
  return h(h(h({}, it), ps), t.pluginHooks.eventSourceRefiners);
}
function hs(t, e) {
  for (var r = e.pluginHooks.eventSourceDefs, n = r.length - 1; n >= 0; n -= 1) {
    var a = r[n], i = a.parseMeta(t);
    if (i)
      return { sourceDefId: n, meta: i };
  }
  return null;
}
function gs(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function ms(t, e) {
  var r = t.initialDate;
  return r != null ? e.createMarker(r) : Oe(t.now, e);
}
function Oe(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
var ys = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getCurrentData = function() {
      return this.currentDataManager.getCurrentData();
    }, t.prototype.dispatch = function(e) {
      return this.currentDataManager.dispatch(e);
    }, Object.defineProperty(t.prototype, "view", {
      get: function() {
        return this.getCurrentData().viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.batchRendering = function(e) {
      e();
    }, t.prototype.updateSize = function() {
      this.trigger("_resize", !0);
    }, t.prototype.setOption = function(e, r) {
      this.dispatch({
        type: "SET_OPTION",
        optionName: e,
        rawOptionValue: r
      });
    }, t.prototype.getOption = function(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }, t.prototype.getAvailableLocaleCodes = function() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }, t.prototype.on = function(e, r) {
      var n = this.currentDataManager;
      n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, r) : console.warn("Unknown listener name '" + e + "'");
    }, t.prototype.off = function(e, r) {
      this.currentDataManager.emitter.off(e, r);
    }, t.prototype.trigger = function(e) {
      for (var r, n = [], a = 1; a < arguments.length; a++)
        n[a - 1] = arguments[a];
      (r = this.currentDataManager.emitter).trigger.apply(r, A([e], n));
    }, t.prototype.changeView = function(e, r) {
      var n = this;
      this.batchRendering(function() {
        if (n.unselect(), r)
          if (r.start && r.end)
            n.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e
            }), n.dispatch({
              type: "SET_OPTION",
              optionName: "visibleRange",
              rawOptionValue: r
            });
          else {
            var a = n.getCurrentData().dateEnv;
            n.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e,
              dateMarker: a.createMarker(r)
            });
          }
        else
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          });
      });
    }, t.prototype.zoomTo = function(e, r) {
      var n = this.getCurrentData(), a;
      r = r || "day", a = n.viewSpecs[r] || this.getUnitViewSpec(r), this.unselect(), a ? this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: a.type,
        dateMarker: e
      }) : this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e
      });
    }, t.prototype.getUnitViewSpec = function(e) {
      var r = this.getCurrentData(), n = r.viewSpecs, a = r.toolbarConfig, i = [].concat(a.header ? a.header.viewsWithButtons : [], a.footer ? a.footer.viewsWithButtons : []), o, s;
      for (var l in n)
        i.push(l);
      for (o = 0; o < i.length; o += 1)
        if (s = n[i[o]], s && s.singleUnit === e)
          return s;
      return null;
    }, t.prototype.prev = function() {
      this.unselect(), this.dispatch({ type: "PREV" });
    }, t.prototype.next = function() {
      this.unselect(), this.dispatch({ type: "NEXT" });
    }, t.prototype.prevYear = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, -1)
      });
    }, t.prototype.nextYear = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, 1)
      });
    }, t.prototype.today = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: Oe(e.calendarOptions.now, e.dateEnv)
      });
    }, t.prototype.gotoDate = function(e) {
      var r = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: r.dateEnv.createMarker(e)
      });
    }, t.prototype.incrementDate = function(e) {
      var r = this.getCurrentData(), n = k(e);
      n && (this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: r.dateEnv.add(r.currentDate, n)
      }));
    }, t.prototype.getDate = function() {
      var e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }, t.prototype.formatDate = function(e, r) {
      var n = this.getCurrentData().dateEnv;
      return n.format(n.createMarker(e), V(r));
    }, t.prototype.formatRange = function(e, r, n) {
      var a = this.getCurrentData().dateEnv;
      return a.formatRange(a.createMarker(e), a.createMarker(r), V(n), n);
    }, t.prototype.formatIso = function(e, r) {
      var n = this.getCurrentData().dateEnv;
      return n.formatIso(n.createMarker(e), { omitTime: r });
    }, t.prototype.select = function(e, r) {
      var n;
      r == null ? e.start != null ? n = e : n = {
        start: e,
        end: null
      } : n = {
        start: e,
        end: r
      };
      var a = this.getCurrentData(), i = as(n, a.dateEnv, k({ days: 1 }));
      i && (this.dispatch({ type: "SELECT_DATES", selection: i }), oa(i, null, a));
    }, t.prototype.unselect = function(e) {
      var r = this.getCurrentData();
      r.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), cs(e, r));
    }, t.prototype.addEvent = function(e, r) {
      if (e instanceof O) {
        var n = e._def, a = e._instance, i = this.getCurrentData();
        return i.eventStore.defs[n.defId] || (this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Ut({ def: n, instance: a })
          // TODO: better util for two args?
        }), this.triggerEventAdd(e)), e;
      }
      var o = this.getCurrentData(), s;
      if (r instanceof pe)
        s = r.internalEventSource;
      else if (typeof r == "boolean")
        r && (s = tr(o.eventSources)[0]);
      else if (r != null) {
        var l = this.getEventSourceById(r);
        if (!l)
          return console.warn('Could not find an event source with ID "' + r + '"'), null;
        s = l.internalEventSource;
      }
      var c = Kn(e, s, o, !1);
      if (c) {
        var u = new O(o, c.def, c.def.recurringDef ? null : c.instance);
        return this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Ut(c)
        }), this.triggerEventAdd(u), u;
      }
      return null;
    }, t.prototype.triggerEventAdd = function(e) {
      var r = this, n = this.getCurrentData().emitter;
      n.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: function() {
          r.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: ua(e)
          });
        }
      });
    }, t.prototype.getEventById = function(e) {
      var r = this.getCurrentData(), n = r.eventStore, a = n.defs, i = n.instances;
      e = String(e);
      for (var o in a) {
        var s = a[o];
        if (s.publicId === e) {
          if (s.recurringDef)
            return new O(r, s, null);
          for (var l in i) {
            var c = i[l];
            if (c.defId === s.defId)
              return new O(r, s, c);
          }
        }
      }
      return null;
    }, t.prototype.getEvents = function() {
      var e = this.getCurrentData();
      return se(e.eventStore, e);
    }, t.prototype.removeAllEvents = function() {
      this.dispatch({ type: "REMOVE_ALL_EVENTS" });
    }, t.prototype.getEventSources = function() {
      var e = this.getCurrentData(), r = e.eventSources, n = [];
      for (var a in r)
        n.push(new pe(e, r[a]));
      return n;
    }, t.prototype.getEventSourceById = function(e) {
      var r = this.getCurrentData(), n = r.eventSources;
      e = String(e);
      for (var a in n)
        if (n[a].publicId === e)
          return new pe(r, n[a]);
      return null;
    }, t.prototype.addEventSource = function(e) {
      var r = this.getCurrentData();
      if (e instanceof pe)
        return r.eventSources[e.internalEventSource.sourceId] || this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [e.internalEventSource]
        }), e;
      var n = sa(e, r);
      return n ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }), new pe(r, n)) : null;
    }, t.prototype.removeAllEventSources = function() {
      this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
    }, t.prototype.refetchEvents = function() {
      this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
    }, t.prototype.scrollToTime = function(e) {
      var r = k(e);
      r && this.trigger("_scrollRequest", { time: r });
    }, t;
  }()
), O = (
  /** @class */
  function() {
    function t(e, r, n) {
      this._context = e, this._def = r, this._instance = n || null;
    }
    return t.prototype.setProp = function(e, r) {
      var n, a;
      if (e in $n)
        console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      else if (e === "id")
        r = Xe[e](r), this.mutate({
          standardProps: { publicId: r }
          // hardcoded internal name
        });
      else if (e in Xe)
        r = Xe[e](r), this.mutate({
          standardProps: (n = {}, n[e] = r, n)
        });
      else if (e in it) {
        var i = it[e](r);
        e === "color" ? i = { backgroundColor: r, borderColor: r } : e === "editable" ? i = { startEditable: r, durationEditable: r } : i = (a = {}, a[e] = r, a), this.mutate({
          standardProps: { ui: i }
        });
      } else
        console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
    }, t.prototype.setExtendedProp = function(e, r) {
      var n;
      this.mutate({
        extendedProps: (n = {}, n[e] = r, n)
      });
    }, t.prototype.setStart = function(e, r) {
      r === void 0 && (r = {});
      var n = this._context.dateEnv, a = n.createMarker(e);
      if (a && this._instance) {
        var i = this._instance.range, o = he(i.start, a, n, r.granularity);
        r.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
      }
    }, t.prototype.setEnd = function(e, r) {
      r === void 0 && (r = {});
      var n = this._context.dateEnv, a;
      if (!(e != null && (a = n.createMarker(e), !a)) && this._instance)
        if (a) {
          var i = he(this._instance.range.end, a, n, r.granularity);
          this.mutate({ endDelta: i });
        } else
          this.mutate({ standardProps: { hasEnd: !1 } });
    }, t.prototype.setDates = function(e, r, n) {
      n === void 0 && (n = {});
      var a = this._context.dateEnv, i = { allDay: n.allDay }, o = a.createMarker(e), s;
      if (o && !(r != null && (s = a.createMarker(r), !s)) && this._instance) {
        var l = this._instance.range;
        n.allDay === !0 && (l = Qn(l));
        var c = he(l.start, o, a, n.granularity);
        if (s) {
          var u = he(l.end, s, a, n.granularity);
          go(c, u) ? this.mutate({ datesDelta: c, standardProps: i }) : this.mutate({ startDelta: c, endDelta: u, standardProps: i });
        } else
          i.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: i });
      }
    }, t.prototype.moveStart = function(e) {
      var r = k(e);
      r && this.mutate({ startDelta: r });
    }, t.prototype.moveEnd = function(e) {
      var r = k(e);
      r && this.mutate({ endDelta: r });
    }, t.prototype.moveDates = function(e) {
      var r = k(e);
      r && this.mutate({ datesDelta: r });
    }, t.prototype.setAllDay = function(e, r) {
      r === void 0 && (r = {});
      var n = { allDay: e }, a = r.maintainDuration;
      a == null && (a = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = a), this.mutate({ standardProps: n });
    }, t.prototype.formatRange = function(e) {
      var r = this._context.dateEnv, n = this._instance, a = V(e);
      return this._def.hasEnd ? r.formatRange(n.range.start, n.range.end, a, {
        forcedStartTzo: n.forcedStartTzo,
        forcedEndTzo: n.forcedEndTzo
      }) : r.format(n.range.start, a, {
        forcedTzo: n.forcedStartTzo
      });
    }, t.prototype.mutate = function(e) {
      var r = this._instance;
      if (r) {
        var n = this._def, a = this._context, i = a.getCurrentData().eventStore, o = ar(i, r.instanceId), s = {
          "": {
            display: "",
            startEditable: !0,
            durationEditable: !0,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
          }
        };
        o = ur(o, s, e, a);
        var l = new t(a, n, r);
        this._def = o.defs[n.defId], this._instance = o.instances[r.instanceId], a.dispatch({
          type: "MERGE_EVENTS",
          eventStore: o
        }), a.emitter.trigger("eventChange", {
          oldEvent: l,
          event: this,
          relatedEvents: se(o, a, r),
          revert: function() {
            a.dispatch({
              type: "RESET_EVENTS",
              eventStore: i
            });
          }
        });
      }
    }, t.prototype.remove = function() {
      var e = this._context, r = ua(this);
      e.dispatch({
        type: "REMOVE_EVENTS",
        eventStore: r
      }), e.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert: function() {
          e.dispatch({
            type: "MERGE_EVENTS",
            eventStore: r
          });
        }
      });
    }, Object.defineProperty(t.prototype, "source", {
      get: function() {
        var e = this._def.sourceId;
        return e ? new pe(this._context, this._context.getCurrentData().eventSources[e]) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "start", {
      get: function() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "end", {
      get: function() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "startStr", {
      get: function() {
        var e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "endStr", {
      get: function() {
        var e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
      // computable props that all access the def
      // TODO: find a TypeScript-compatible way to do this at scale
      get: function() {
        return this._def.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "groupId", {
      get: function() {
        return this._def.groupId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "allDay", {
      get: function() {
        return this._def.allDay;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "title", {
      get: function() {
        return this._def.title;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
      get: function() {
        return this._def.url;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "display", {
      get: function() {
        return this._def.ui.display || "auto";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "startEditable", {
      get: function() {
        return this._def.ui.startEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "durationEditable", {
      get: function() {
        return this._def.ui.durationEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "constraint", {
      get: function() {
        return this._def.ui.constraints[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "overlap", {
      get: function() {
        return this._def.ui.overlap;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "allow", {
      get: function() {
        return this._def.ui.allows[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "backgroundColor", {
      get: function() {
        return this._def.ui.backgroundColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "borderColor", {
      get: function() {
        return this._def.ui.borderColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "textColor", {
      get: function() {
        return this._def.ui.textColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "classNames", {
      // NOTE: user can't modify these because Object.freeze was called in event-def parsing
      get: function() {
        return this._def.ui.classNames;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "extendedProps", {
      get: function() {
        return this._def.extendedProps;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toPlainObject = function(e) {
      e === void 0 && (e = {});
      var r = this._def, n = r.ui, a = this, i = a.startStr, o = a.endStr, s = {};
      return r.title && (s.title = r.title), i && (s.start = i), o && (s.end = o), r.publicId && (s.id = r.publicId), r.groupId && (s.groupId = r.groupId), r.url && (s.url = r.url), n.display && n.display !== "auto" && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(r.extendedProps).length && (e.collapseExtendedProps ? h(s, r.extendedProps) : s.extendedProps = r.extendedProps), s;
    }, t.prototype.toJSON = function() {
      return this.toPlainObject();
    }, t;
  }()
);
function ua(t) {
  var e, r, n = t._def, a = t._instance;
  return {
    defs: (e = {}, e[n.defId] = n, e),
    instances: a ? (r = {}, r[a.instanceId] = a, r) : {}
  };
}
function se(t, e, r) {
  var n = t.defs, a = t.instances, i = [], o = r ? r.instanceId : "";
  for (var s in a) {
    var l = a[s], c = n[l.defId];
    l.instanceId !== o && i.push(new O(e, c, l));
  }
  return i;
}
var ca = {};
function Es(t, e) {
  ca[t] = e;
}
function Ss(t) {
  return new ca[t]();
}
var bs = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getMarkerYear = function(e) {
      return e.getUTCFullYear();
    }, t.prototype.getMarkerMonth = function(e) {
      return e.getUTCMonth();
    }, t.prototype.getMarkerDay = function(e) {
      return e.getUTCDate();
    }, t.prototype.arrayToMarker = function(e) {
      return F(e);
    }, t.prototype.markerToArray = function(e) {
      return J(e);
    }, t;
  }()
);
Es("gregory", bs);
var Ds = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Cs(t) {
  var e = Ds.exec(t);
  if (e) {
    var r = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +("0." + e[12]) * 1e3 : 0));
    if (jn(r)) {
      var n = null;
      return e[13] && (n = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: r,
        isTimeUnspecified: !e[6],
        timeZoneOffset: n
      };
    }
  }
  return null;
}
var Rs = (
  /** @class */
  function() {
    function t(e) {
      var r = this.timeZone = e.timeZone, n = r !== "local" && r !== "UTC";
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(r)), this.canComputeOffset = !!(!n || this.namedTimeZoneImpl), this.calendarSystem = Ss(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }
    return t.prototype.createMarker = function(e) {
      var r = this.createMarkerMeta(e);
      return r === null ? null : r.marker;
    }, t.prototype.createNowMarker = function() {
      return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : F(jr(/* @__PURE__ */ new Date()));
    }, t.prototype.createMarkerMeta = function(e) {
      if (typeof e == "string")
        return this.parse(e);
      var r = null;
      return typeof e == "number" ? r = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (r = this.timestampToMarker(e))) : Array.isArray(e) && (r = F(e)), r === null || !jn(r) ? null : { marker: r, isTimeUnspecified: !1, forcedTzo: null };
    }, t.prototype.parse = function(e) {
      var r = Cs(e);
      if (r === null)
        return null;
      var n = r.marker, a = null;
      return r.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - r.timeZoneOffset * 60 * 1e3) : a = r.timeZoneOffset), { marker: n, isTimeUnspecified: r.isTimeUnspecified, forcedTzo: a };
    }, t.prototype.getYear = function(e) {
      return this.calendarSystem.getMarkerYear(e);
    }, t.prototype.getMonth = function(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }, t.prototype.add = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += r.years, n[1] += r.months, n[2] += r.days, n[6] += r.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.subtract = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] -= r.years, n[1] -= r.months, n[2] -= r.days, n[6] -= r.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.addYears = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += r, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.addMonths = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[1] += r, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.diffWholeYears = function(e, r) {
      var n = this.calendarSystem;
      return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) && n.getMarkerMonth(e) === n.getMarkerMonth(r) ? n.getMarkerYear(r) - n.getMarkerYear(e) : null;
    }, t.prototype.diffWholeMonths = function(e, r) {
      var n = this.calendarSystem;
      return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) ? n.getMarkerMonth(r) - n.getMarkerMonth(e) + (n.getMarkerYear(r) - n.getMarkerYear(e)) * 12 : null;
    }, t.prototype.greatestWholeUnit = function(e, r) {
      var n = this.diffWholeYears(e, r);
      return n !== null ? { unit: "year", value: n } : (n = this.diffWholeMonths(e, r), n !== null ? { unit: "month", value: n } : (n = no(e, r), n !== null ? { unit: "week", value: n } : (n = et(e, r), n !== null ? { unit: "day", value: n } : (n = Qi(e, r), Ct(n) ? { unit: "hour", value: n } : (n = eo(e, r), Ct(n) ? { unit: "minute", value: n } : (n = to(e, r), Ct(n) ? { unit: "second", value: n } : { unit: "millisecond", value: r.valueOf() - e.valueOf() }))))));
    }, t.prototype.countDurationsBetween = function(e, r, n) {
      var a;
      return n.years && (a = this.diffWholeYears(e, r), a !== null) ? a / yo(n) : n.months && (a = this.diffWholeMonths(e, r), a !== null) ? a / Eo(n) : n.days && (a = et(e, r), a !== null) ? a / ge(n) : (r.valueOf() - e.valueOf()) / Ne(n);
    }, t.prototype.startOf = function(e, r) {
      return r === "year" ? this.startOfYear(e) : r === "month" ? this.startOfMonth(e) : r === "week" ? this.startOfWeek(e) : r === "day" ? H(e) : r === "hour" ? ao(e) : r === "minute" ? io(e) : r === "second" ? oo(e) : null;
    }, t.prototype.startOfYear = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e)
      ]);
    }, t.prototype.startOfMonth = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e)
      ]);
    }, t.prototype.startOfWeek = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
      ]);
    }, t.prototype.computeWeekNumber = function(e) {
      return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : so(e, this.weekDow, this.weekDoy);
    }, t.prototype.format = function(e, r, n) {
      return n === void 0 && (n = {}), r.format({
        marker: e,
        timeZoneOffset: n.forcedTzo != null ? n.forcedTzo : this.offsetForMarker(e)
      }, this);
    }, t.prototype.formatRange = function(e, r, n, a) {
      return a === void 0 && (a = {}), a.isEndExclusive && (r = ue(r, -1)), n.formatRange({
        marker: e,
        timeZoneOffset: a.forcedStartTzo != null ? a.forcedStartTzo : this.offsetForMarker(e)
      }, {
        marker: r,
        timeZoneOffset: a.forcedEndTzo != null ? a.forcedEndTzo : this.offsetForMarker(r)
      }, this, a.defaultSeparator);
    }, t.prototype.formatIso = function(e, r) {
      r === void 0 && (r = {});
      var n = null;
      return r.omitTimeZoneOffset || (r.forcedTzo != null ? n = r.forcedTzo : n = this.offsetForMarker(e)), So(e, n, r.omitTime);
    }, t.prototype.timestampToMarker = function(e) {
      return this.timeZone === "local" ? F(jr(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : F(this.namedTimeZoneImpl.timestampToArray(e));
    }, t.prototype.offsetForMarker = function(e) {
      return this.timeZone === "local" ? -Zr(J(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(J(e)) : null;
    }, t.prototype.toDate = function(e, r) {
      return this.timeZone === "local" ? Zr(J(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(J(e)) * 1e3 * 60) : new Date(e.valueOf() - (r || 0));
    }, t;
  }()
), ws = [], fa = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, da = h(h({}, fa), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(t, e) {
      return e === "day" ? "Today" : "This " + t;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(t) {
    return "Show " + t + " more event" + (t === 1 ? "" : "s");
  }
});
function Ts(t) {
  for (var e = t.length > 0 ? t[0].code : "en", r = ws.concat(t), n = {
    en: da
  }, a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    n[o.code] = o;
  }
  return {
    map: n,
    defaultCode: e
  };
}
function va(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? pa(t.code, [t.code], t) : _s(t, e);
}
function _s(t, e) {
  var r = [].concat(t || []), n = Ms(r, e) || da;
  return pa(t, r, n);
}
function Ms(t, e) {
  for (var r = 0; r < t.length; r += 1)
    for (var n = t[r].toLocaleLowerCase().split("-"), a = n.length; a > 0; a -= 1) {
      var i = n.slice(0, a).join("-");
      if (e[i])
        return e[i];
    }
  return null;
}
function pa(t, e, r) {
  var n = er([fa, r], ["buttonText"]);
  delete n.code;
  var a = n.week;
  return delete n.week, {
    codeArg: t,
    codes: e,
    week: a,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: n
  };
}
var ks = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Is(t, e) {
  return at(Ps(t), null, e);
}
function Ps(t) {
  var e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter(function(r) {
    return r.daysOfWeek;
  }) : typeof t == "object" && t ? e = [t] : e = [], e = e.map(function(r) {
    return h(h({}, ks), r);
  }), e;
}
function Hs(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function ha(t, e) {
  var r = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return r.left < r.right && r.top < r.bottom ? r : !1;
}
function xs(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Ns(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function As(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
var _t;
function ga() {
  return _t == null && (_t = Os()), _t;
}
function Os() {
  if (typeof document > "u")
    return !0;
  var t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  var e = t.querySelector("div"), r = e.offsetHeight > 0;
  return document.body.removeChild(t), r;
}
function ma(t, e, r, n) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(n && !oe(n.activeRange, t)),
    isOther: !!(n && !oe(n.currentRange, t)),
    isToday: !!(e && oe(e, t)),
    isPast: !!(e && t < e.start),
    isFuture: !!(e && t >= e.end)
  };
}
function cr(t, e) {
  var r = [
    "fc-day",
    "fc-day-" + Ki[t.dow]
  ];
  return t.isDisabled ? r.push("fc-day-disabled") : (t.isToday && (r.push("fc-day-today"), r.push(e.getClass("today"))), t.isPast && r.push("fc-day-past"), t.isFuture && r.push("fc-day-future"), t.isOther && r.push("fc-day-other")), r;
}
var Ls = V({ year: "numeric", month: "long", day: "numeric" }), Vs = V({ week: "long" });
function fr(t, e, r, n) {
  r === void 0 && (r = "day"), n === void 0 && (n = !0);
  var a = t.dateEnv, i = t.options, o = t.calendarApi, s = a.format(e, r === "week" ? Vs : Ls);
  if (i.navLinks) {
    var l = a.toDate(e), c = function(u) {
      var f = r === "day" ? i.navLinkDayClick : r === "week" ? i.navLinkWeekClick : null;
      typeof f == "function" ? f.call(o, a.toDate(e), u) : (typeof f == "string" && (r = f), o.zoomTo(e, r));
    };
    return h({ title: Me(i.navLinkHint, [s, l], s), "data-navlink": "" }, n ? qn(c) : { onClick: c });
  }
  return { "aria-label": s };
}
var Mt = null;
function Us() {
  return Mt === null && (Mt = Ws()), Mt;
}
function Ws() {
  var t = document.createElement("div");
  _e(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  var e = t.firstChild, r = e.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return $t(t), r;
}
var kt;
function Bs() {
  return kt || (kt = Fs()), kt;
}
function Fs() {
  var t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  var e = ya(t);
  return document.body.removeChild(t), e;
}
function ya(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function zs(t, e) {
  e === void 0 && (e = !1);
  var r = window.getComputedStyle(t), n = parseInt(r.borderLeftWidth, 10) || 0, a = parseInt(r.borderRightWidth, 10) || 0, i = parseInt(r.borderTopWidth, 10) || 0, o = parseInt(r.borderBottomWidth, 10) || 0, s = ya(t), l = s.y - n - a, c = s.x - i - o, u = {
    borderLeft: n,
    borderRight: a,
    borderTop: i,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Us() && r.direction === "rtl" ? u.scrollbarLeft = l : u.scrollbarRight = l, e && (u.paddingLeft = parseInt(r.paddingLeft, 10) || 0, u.paddingRight = parseInt(r.paddingRight, 10) || 0, u.paddingTop = parseInt(r.paddingTop, 10) || 0, u.paddingBottom = parseInt(r.paddingBottom, 10) || 0), u;
}
function Gs(t, e, r) {
  e === void 0 && (e = !1);
  var n = dr(t), a = zs(t, e), i = {
    left: n.left + a.borderLeft + a.scrollbarLeft,
    right: n.right - a.borderRight - a.scrollbarRight,
    top: n.top + a.borderTop,
    bottom: n.bottom - a.borderBottom - a.scrollbarBottom
  };
  return e && (i.left += a.paddingLeft, i.right -= a.paddingRight, i.top += a.paddingTop, i.bottom -= a.paddingBottom), i;
}
function dr(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function qs(t) {
  for (var e = Ea(t), r = t.getBoundingClientRect(), n = 0, a = e; n < a.length; n++) {
    var i = a[n], o = ha(r, i.getBoundingClientRect());
    if (o)
      r = o;
    else
      return null;
  }
  return r;
}
function Ea(t) {
  for (var e = []; t instanceof HTMLElement; ) {
    var r = window.getComputedStyle(t);
    if (r.position === "fixed")
      break;
    /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function Ys(t, e, r) {
  var n = !1, a = function() {
    n || (n = !0, e.apply(this, arguments));
  }, i = function() {
    n || (n = !0, r && r.apply(this, arguments));
  }, o = t(a, i);
  o && typeof o.then == "function" && o.then(a, i);
}
var pt = (
  /** @class */
  function() {
    function t() {
      this.handlers = {}, this.thisContext = null;
    }
    return t.prototype.setThisContext = function(e) {
      this.thisContext = e;
    }, t.prototype.setOptions = function(e) {
      this.options = e;
    }, t.prototype.on = function(e, r) {
      js(this.handlers, e, r);
    }, t.prototype.off = function(e, r) {
      Zs(this.handlers, e, r);
    }, t.prototype.trigger = function(e) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      for (var a = this.handlers[e] || [], i = this.options && this.options[e], o = [].concat(i || [], a), s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        c.apply(this.thisContext, r);
      }
    }, t.prototype.hasHandlers = function(e) {
      return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
    }, t;
  }()
);
function js(t, e, r) {
  (t[e] || (t[e] = [])).push(r);
}
function Zs(t, e, r) {
  r ? t[e] && (t[e] = t[e].filter(function(n) {
    return n !== r;
  })) : delete t[e];
}
var Ft = (
  /** @class */
  function() {
    function t(e, r, n, a) {
      this.els = r;
      var i = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(i.left), a && this.buildElVerticals(i.top);
    }
    return t.prototype.buildElHorizontals = function(e) {
      for (var r = [], n = [], a = 0, i = this.els; a < i.length; a++) {
        var o = i[a], s = o.getBoundingClientRect();
        r.push(s.left - e), n.push(s.right - e);
      }
      this.lefts = r, this.rights = n;
    }, t.prototype.buildElVerticals = function(e) {
      for (var r = [], n = [], a = 0, i = this.els; a < i.length; a++) {
        var o = i[a], s = o.getBoundingClientRect();
        r.push(s.top - e), n.push(s.bottom - e);
      }
      this.tops = r, this.bottoms = n;
    }, t.prototype.leftToIndex = function(e) {
      var r = this, n = r.lefts, a = r.rights, i = n.length, o;
      for (o = 0; o < i; o += 1)
        if (e >= n[o] && e < a[o])
          return o;
    }, t.prototype.topToIndex = function(e) {
      var r = this, n = r.tops, a = r.bottoms, i = n.length, o;
      for (o = 0; o < i; o += 1)
        if (e >= n[o] && e < a[o])
          return o;
    }, t.prototype.getWidth = function(e) {
      return this.rights[e] - this.lefts[e];
    }, t.prototype.getHeight = function(e) {
      return this.bottoms[e] - this.tops[e];
    }, t;
  }()
), vr = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getMaxScrollTop = function() {
      return this.getScrollHeight() - this.getClientHeight();
    }, t.prototype.getMaxScrollLeft = function() {
      return this.getScrollWidth() - this.getClientWidth();
    }, t.prototype.canScrollVertically = function() {
      return this.getMaxScrollTop() > 0;
    }, t.prototype.canScrollHorizontally = function() {
      return this.getMaxScrollLeft() > 0;
    }, t.prototype.canScrollUp = function() {
      return this.getScrollTop() > 0;
    }, t.prototype.canScrollDown = function() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }, t.prototype.canScrollLeft = function() {
      return this.getScrollLeft() > 0;
    }, t.prototype.canScrollRight = function() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }, t;
  }()
), Xs = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.el = r, n;
    }
    return e.prototype.getScrollTop = function() {
      return this.el.scrollTop;
    }, e.prototype.getScrollLeft = function() {
      return this.el.scrollLeft;
    }, e.prototype.setScrollTop = function(r) {
      this.el.scrollTop = r;
    }, e.prototype.setScrollLeft = function(r) {
      this.el.scrollLeft = r;
    }, e.prototype.getScrollWidth = function() {
      return this.el.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return this.el.scrollHeight;
    }, e.prototype.getClientHeight = function() {
      return this.el.clientHeight;
    }, e.prototype.getClientWidth = function() {
      return this.el.clientWidth;
    }, e;
  }(vr)
), $s = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollTop = function() {
      return window.pageYOffset;
    }, e.prototype.getScrollLeft = function() {
      return window.pageXOffset;
    }, e.prototype.setScrollTop = function(r) {
      window.scroll(window.pageXOffset, r);
    }, e.prototype.setScrollLeft = function(r) {
      window.scroll(r, window.pageYOffset);
    }, e.prototype.getScrollWidth = function() {
      return document.documentElement.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return document.documentElement.scrollHeight;
    }, e.prototype.getClientHeight = function() {
      return document.documentElement.clientHeight;
    }, e.prototype.getClientWidth = function() {
      return document.documentElement.clientWidth;
    }, e;
  }(vr)
), Le = (
  /** @class */
  function() {
    function t(e) {
      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }
    return t.prototype.setIconOverride = function(e) {
      var r, n;
      if (typeof e == "object" && e) {
        r = h({}, this.iconClasses);
        for (n in e)
          r[n] = this.applyIconOverridePrefix(e[n]);
        this.iconClasses = r;
      } else e === !1 && (this.iconClasses = {});
    }, t.prototype.applyIconOverridePrefix = function(e) {
      var r = this.iconOverridePrefix;
      return r && e.indexOf(r) !== 0 && (e = r + e), e;
    }, t.prototype.getClass = function(e) {
      return this.classes[e] || "";
    }, t.prototype.getIconClass = function(e, r) {
      var n;
      return r && this.rtlIconClasses ? n = this.rtlIconClasses[e] || this.iconClasses[e] : n = this.iconClasses[e], n ? this.baseIconClass + " " + n : "";
    }, t.prototype.getCustomButtonIconClass = function(e) {
      var r;
      return this.iconOverrideCustomButtonOption && (r = e[this.iconOverrideCustomButtonOption], r) ? this.baseIconClass + " " + this.applyIconOverridePrefix(r) : "";
    }, t;
  }()
);
Le.prototype.classes = {};
Le.prototype.iconClasses = {};
Le.prototype.baseIconClass = "";
Le.prototype.iconOverridePrefix = "";
var Ks = (
  /** @class */
  function() {
    function t(e, r, n, a) {
      var i = this;
      this.execFunc = e, this.emitter = r, this.scrollTime = n, this.scrollTimeReset = a, this.handleScrollRequest = function(o) {
        i.queuedRequest = h({}, i.queuedRequest || {}, o), i.drain();
      }, r.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }
    return t.prototype.detach = function() {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }, t.prototype.update = function(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }, t.prototype.fireInitialScroll = function() {
      this.handleScrollRequest({
        time: this.scrollTime
      });
    }, t.prototype.drain = function() {
      this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
    }, t;
  }()
), de = Wn({});
function Js(t, e, r, n, a, i, o, s, l, c, u, f, v) {
  return {
    dateEnv: a,
    options: r,
    pluginHooks: o,
    emitter: c,
    dispatch: s,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: n,
    theme: i,
    isRtl: r.direction === "rtl",
    addResizeHandler: function(d) {
      c.on("_resize", d);
    },
    removeResizeHandler: function(d) {
      c.off("_resize", d);
    },
    createScrollResponder: function(d) {
      return new Ks(d, c, k(r.scrollTime), r.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: v
  };
}
var ht = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.shouldComponentUpdate = function(r, n) {
      return this.debug && console.log(Xr(r, this.props), Xr(n, this.state)), !wt(this.props, r, this.propEquality) || !wt(this.state, n, this.stateEquality);
    }, e.prototype.safeSetState = function(r) {
      wt(this.state, h(h({}, this.state), r), this.stateEquality) || this.setState(r);
    }, e.addPropsEquality = Qs, e.addStateEquality = el, e.contextType = de, e;
  }(Xt)
);
ht.prototype.propEquality = {};
ht.prototype.stateEquality = {};
var x = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.contextType = de, e;
  }(ht)
);
function Qs(t) {
  var e = Object.create(this.prototype.propEquality);
  h(e, t), this.prototype.propEquality = e;
}
function el(t) {
  var e = Object.create(this.prototype.stateEquality);
  h(e, t), this.prototype.stateEquality = e;
}
function $(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
var Re = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.uid = De(), r;
    }
    return e.prototype.prepareHits = function() {
    }, e.prototype.queryHit = function(r, n, a, i) {
      return null;
    }, e.prototype.isValidSegDownEl = function(r) {
      return !this.props.eventDrag && // HACK
      !this.props.eventResize && // HACK
      !U(r, ".fc-event-mirror");
    }, e.prototype.isValidDateDownEl = function(r) {
      return !U(r, ".fc-event:not(.fc-bg-event)") && !U(r, ".fc-more-link") && // a "more.." link
      !U(r, "a[data-navlink]") && // a clickable nav link
      !U(r, ".fc-popover");
    }, e;
  }(x)
);
function te(t) {
  return {
    id: De(),
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    contentTypeHandlers: t.contentTypeHandlers || {},
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function tl(t, e) {
  var r = {}, n = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function a(i) {
    for (var o = 0, s = i; o < s.length; o++) {
      var l = s[o];
      r[l.id] || (r[l.id] = !0, a(l.deps), n = nl(n, l));
    }
  }
  return t && a(t), a(e), n;
}
function rl() {
  var t = [], e = [], r;
  return function(n, a) {
    return (!r || !Se(n, t) || !Se(a, e)) && (r = tl(n, a)), t = n, e = a, r;
  };
}
function nl(t, e) {
  return {
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: h(h({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: h(h({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: h(h({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: h(h({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: h(h({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    contentTypeHandlers: h(h({}, t.contentTypeHandlers), e.contentTypeHandlers),
    listenerRefiners: h(h({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: h(h({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: h(h({}, t.propSetHandlers), e.propSetHandlers)
  };
}
var re = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  }(Le)
);
re.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
re.prototype.baseIconClass = "fc-icon";
re.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
re.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
re.prototype.iconOverrideOption = "buttonIcons";
re.prototype.iconOverrideCustomButtonOption = "icon";
re.prototype.iconOverridePrefix = "fc-icon-";
function al(t, e) {
  var r = {}, n;
  for (n in t)
    zt(n, r, t, e);
  for (n in e)
    zt(n, r, t, e);
  return r;
}
function zt(t, e, r, n) {
  if (e[t])
    return e[t];
  var a = il(t, e, r, n);
  return a && (e[t] = a), a;
}
function il(t, e, r, n) {
  var a = r[t], i = n[t], o = function(u) {
    return a && a[u] !== null ? a[u] : i && i[u] !== null ? i[u] : null;
  }, s = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = zt(l, e, r, n);
  }
  return !s && c && (s = c.component), s ? {
    type: t,
    component: s,
    defaults: h(h({}, c ? c.defaults : {}), a ? a.rawOptions : {}),
    overrides: h(h({}, c ? c.overrides : {}), i ? i.rawOptions : {})
  } : null;
}
var we = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.rootElRef = G(), r.handleRootEl = function(n) {
        $(r.rootElRef, n), r.props.elRef && $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props, a = n.hookProps;
      return m(pr, { hookProps: a, didMount: n.didMount, willUnmount: n.willUnmount, elRef: this.handleRootEl }, function(i) {
        return m(ba, { hookProps: a, content: n.content, defaultContent: n.defaultContent, backupElRef: r.rootElRef }, function(o, s) {
          return n.children(i, Ca(n.classNames, a), o, s);
        });
      });
    }, e;
  }(x)
), Sa = Wn(0);
function ba(t) {
  return m(Sa.Consumer, null, function(e) {
    return m(ol, h({ renderId: e }, t));
  });
}
var ol = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.innerElRef = G(), r;
    }
    return e.prototype.render = function() {
      return this.props.children(this.innerElRef, this.renderInnerContent());
    }, e.prototype.componentDidMount = function() {
      this.updateCustomContent();
    }, e.prototype.componentDidUpdate = function() {
      this.updateCustomContent();
    }, e.prototype.componentWillUnmount = function() {
      this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
    }, e.prototype.renderInnerContent = function() {
      var r = this.customContentInfo, n = this.getInnerContent(), a = this.getContentMeta(n);
      return !r || r.contentKey !== a.contentKey ? (r && (r.destroy && r.destroy(), r = this.customContentInfo = null), a.contentKey && (r = this.customContentInfo = h({ contentKey: a.contentKey, contentVal: n[a.contentKey] }, a.buildLifecycleFuncs()))) : r && (r.contentVal = n[a.contentKey]), r ? [] : n;
    }, e.prototype.getInnerContent = function() {
      var r = this.props, n = ln(r.content, r.hookProps);
      return n === void 0 && (n = ln(r.defaultContent, r.hookProps)), n ?? null;
    }, e.prototype.getContentMeta = function(r) {
      var n = this.context.pluginHooks.contentTypeHandlers, a = "", i = null;
      if (r) {
        for (var o in n)
          if (r[o] !== void 0) {
            a = o, i = n[o];
            break;
          }
      }
      return { contentKey: a, buildLifecycleFuncs: i };
    }, e.prototype.updateCustomContent = function() {
      this.customContentInfo && this.customContentInfo.render(
        this.innerElRef.current || this.props.backupElRef.current,
        // the element to render into
        this.customContentInfo.contentVal
      );
    }, e;
  }(x)
), pr = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleRootEl = function(n) {
        r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      return this.props.children(this.handleRootEl);
    }, e.prototype.componentDidMount = function() {
      var r = this.props.didMount;
      r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
    }, e.prototype.componentWillUnmount = function() {
      var r = this.props.willUnmount;
      r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
    }, e;
  }(x)
);
function Da() {
  var t, e, r = [];
  return function(n, a) {
    return (!e || !X(e, a) || n !== t) && (t = n, e = a, r = Ca(n, a)), r;
  };
}
function Ca(t, e) {
  return typeof t == "function" && (t = t(e)), Wt(t);
}
function ln(t, e) {
  return typeof t == "function" ? t(e, m) : t;
}
var Gt = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.normalizeClassNames = Da(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = a.options, o = { view: a.viewApi }, s = this.normalizeClassNames(i.viewClassNames, o);
      return m(pr, { hookProps: o, didMount: i.viewDidMount, willUnmount: i.viewWillUnmount, elRef: n.elRef }, function(l) {
        return n.children(l, ["fc-" + n.viewSpec.type + "-view", "fc-view"].concat(s));
      });
    }, e;
  }(x)
);
function un(t) {
  return fe(t, sl);
}
function sl(t) {
  var e = typeof t == "function" ? { component: t } : t, r = e.component;
  return e.content && (r = ll(e)), {
    superType: e.type,
    component: r,
    rawOptions: e
  };
}
function ll(t) {
  return function(e) {
    return m(de.Consumer, null, function(r) {
      return m(Gt, { viewSpec: r.viewSpec }, function(n, a) {
        var i = h(h({}, e), { nextDayThreshold: r.options.nextDayThreshold });
        return m(we, { hookProps: i, classNames: t.classNames, content: t.content, didMount: t.didMount, willUnmount: t.willUnmount, elRef: n }, function(o, s, l, c) {
          return m("div", { className: a.concat(s).join(" "), ref: o }, c);
        });
      });
    });
  };
}
function ul(t, e, r, n) {
  var a = un(t), i = un(e.views), o = al(a, i);
  return fe(o, function(s) {
    return cl(s, i, e, r, n);
  });
}
function cl(t, e, r, n, a) {
  var i = t.overrides.duration || t.defaults.duration || n.duration || r.duration, o = null, s = "", l = "", c = {};
  if (i && (o = fl(i), o)) {
    var u = Vt(o);
    s = u.unit, u.value === 1 && (l = s, c = e[s] ? e[s].rawOptions : {});
  }
  var f = function(d) {
    var p = d.buttonText || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  }, v = function(d) {
    var p = d.buttonHints || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: h(h({}, c), t.overrides),
    buttonTextOverride: f(n) || f(r) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: f(a) || t.defaults.buttonText || f(ke) || t.type,
    // not DRY
    buttonTitleOverride: v(n) || v(r) || t.overrides.buttonHint,
    buttonTitleDefault: v(a) || t.defaults.buttonHint || v(ke)
    // will eventually fall back to buttonText
  };
}
var cn = {};
function fl(t) {
  var e = JSON.stringify(t), r = cn[e];
  return r === void 0 && (r = k(t), cn[e] = r), r;
}
var Ra = (
  /** @class */
  function() {
    function t(e) {
      this.props = e, this.nowDate = Oe(e.nowInput, e.dateEnv), this.initHiddenDays();
    }
    return t.prototype.buildPrev = function(e, r, n) {
      var a = this.props.dateEnv, i = a.subtract(
        a.startOf(r, e.currentRangeUnit),
        // important for start-of-month
        e.dateIncrement
      );
      return this.build(i, -1, n);
    }, t.prototype.buildNext = function(e, r, n) {
      var a = this.props.dateEnv, i = a.add(
        a.startOf(r, e.currentRangeUnit),
        // important for start-of-month
        e.dateIncrement
      );
      return this.build(i, 1, n);
    }, t.prototype.build = function(e, r, n) {
      n === void 0 && (n = !0);
      var a = this.props, i, o, s, l, c, u;
      return i = this.buildValidRange(), i = this.trimHiddenDays(i), n && (e = Xo(e, i)), o = this.buildCurrentRangeInfo(e, r), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), c = l, a.showNonCurrentDates || (c = Ae(c, o.range)), c = this.adjustActiveRange(c), c = Ae(c, i), u = sr(o.range, i), {
        // constraint for where prev/next operations can go and where events can be dragged/resized to.
        // an object with optional start and end properties.
        validRange: i,
        // range the view is formally responsible for.
        // for example, a month view might have 1st-31st, excluding padded dates
        currentRange: o.range,
        // name of largest unit being displayed, like "month" or "week"
        currentRangeUnit: o.unit,
        isRangeAllDay: s,
        // dates that display events and accept drag-n-drop
        // will be `null` if no dates accept events
        activeRange: c,
        // date range with a rendered skeleton
        // includes not-active days that need some sort of DOM
        renderRange: l,
        // Duration object that denotes the first visible time of any given day
        slotMinTime: a.slotMinTime,
        // Duration object that denotes the exclusive visible end time of any given day
        slotMaxTime: a.slotMaxTime,
        isValid: u,
        // how far the current date will move for a prev/next operation
        dateIncrement: this.buildDateIncrement(o.duration)
        // pass a fallback (might be null) ^
      };
    }, t.prototype.buildValidRange = function() {
      var e = this.props.validRangeInput, r = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
      return this.refineRange(r) || { start: null, end: null };
    }, t.prototype.buildCurrentRangeInfo = function(e, r) {
      var n = this.props, a = null, i = null, o = null, s;
      return n.duration ? (a = n.duration, i = n.durationUnit, o = this.buildRangeFromDuration(e, r, a, i)) : (s = this.props.dayCount) ? (i = "day", o = this.buildRangeFromDayCount(e, r, s)) : (o = this.buildCustomVisibleRange(e)) ? i = n.dateEnv.greatestWholeUnit(o.start, o.end).unit : (a = this.getFallbackDuration(), i = Vt(a).unit, o = this.buildRangeFromDuration(e, r, a, i)), { duration: a, unit: i, range: o };
    }, t.prototype.getFallbackDuration = function() {
      return k({ day: 1 });
    }, t.prototype.adjustActiveRange = function(e) {
      var r = this.props, n = r.dateEnv, a = r.usesMinMaxTime, i = r.slotMinTime, o = r.slotMaxTime, s = e.start, l = e.end;
      return a && (ge(i) < 0 && (s = H(s), s = n.add(s, i)), ge(o) > 1 && (l = H(l), l = W(l, -1), l = n.add(l, o))), { start: s, end: l };
    }, t.prototype.buildRangeFromDuration = function(e, r, n, a) {
      var i = this.props, o = i.dateEnv, s = i.dateAlignment, l, c, u;
      if (!s) {
        var f = this.props.dateIncrement;
        f && Ne(f) < Ne(n) ? s = Vt(f).unit : s = a;
      }
      ge(n) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, r), l = H(l));
      function v() {
        l = o.startOf(e, s), c = o.add(l, n), u = { start: l, end: c };
      }
      return v(), this.trimHiddenDays(u) || (e = this.skipHiddenDays(e, r), v()), u;
    }, t.prototype.buildRangeFromDayCount = function(e, r, n) {
      var a = this.props, i = a.dateEnv, o = a.dateAlignment, s = 0, l = e, c;
      o && (l = i.startOf(l, o)), l = H(l), l = this.skipHiddenDays(l, r), c = l;
      do
        c = W(c, 1), this.isHiddenDay(c) || (s += 1);
      while (s < n);
      return { start: l, end: c };
    }, t.prototype.buildCustomVisibleRange = function(e) {
      var r = this.props, n = r.visibleRangeInput, a = typeof n == "function" ? n.call(r.calendarApi, r.dateEnv.toDate(e)) : n, i = this.refineRange(a);
      return i && (i.start == null || i.end == null) ? null : i;
    }, t.prototype.buildRenderRange = function(e, r, n) {
      return e;
    }, t.prototype.buildDateIncrement = function(e) {
      var r = this.props.dateIncrement, n;
      return r || ((n = this.props.dateAlignment) ? k(1, n) : e || k({ days: 1 }));
    }, t.prototype.refineRange = function(e) {
      if (e) {
        var r = Yo(e, this.props.dateEnv);
        return r && (r = ea(r)), r;
      }
      return null;
    }, t.prototype.initHiddenDays = function() {
      var e = this.props.hiddenDays || [], r = [], n = 0, a;
      for (this.props.weekends === !1 && e.push(0, 6), a = 0; a < 7; a += 1)
        (r[a] = e.indexOf(a) !== -1) || (n += 1);
      if (!n)
        throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = r;
    }, t.prototype.trimHiddenDays = function(e) {
      var r = e.start, n = e.end;
      return r && (r = this.skipHiddenDays(r)), n && (n = this.skipHiddenDays(n, -1, !0)), r == null || n == null || r < n ? { start: r, end: n } : null;
    }, t.prototype.isHiddenDay = function(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }, t.prototype.skipHiddenDays = function(e, r, n) {
      for (r === void 0 && (r = 1), n === void 0 && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? r : 0) + 7) % 7]; )
        e = W(e, r);
      return e;
    }, t;
  }()
);
function dl(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function vl(t, e) {
  var r;
  switch (e.type) {
    case "SET_OPTION":
      return h(h({}, t), (r = {}, r[e.optionName] = e.rawOptionValue, r));
    default:
      return t;
  }
}
function pl(t, e, r, n) {
  var a;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return n.build(e.dateMarker || r);
    case "CHANGE_DATE":
      return n.build(e.dateMarker);
    case "PREV":
      if (a = n.buildPrev(t, r), a.isValid)
        return a;
      break;
    case "NEXT":
      if (a = n.buildNext(t, r), a.isValid)
        return a;
      break;
  }
  return t;
}
function hl(t, e, r) {
  var n = e ? e.activeRange : null;
  return Ta({}, Dl(t, r), n, r);
}
function gl(t, e, r, n) {
  var a = r ? r.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ta(t, e.sources, a, n);
    case "REMOVE_EVENT_SOURCE":
      return yl(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? _a(t, a, n) : t;
    case "FETCH_EVENT_SOURCES":
      return hr(t, e.sourceIds ? (
        // why no type?
        Zn(e.sourceIds)
      ) : Ma(t, n), a, e.isRefetch || !1, n);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return bl(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function ml(t, e, r) {
  var n = e ? e.activeRange : null;
  return hr(t, Ma(t, r), n, !0, r);
}
function wa(t) {
  for (var e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ta(t, e, r, n) {
  for (var a = {}, i = 0, o = e; i < o.length; i++) {
    var s = o[i];
    a[s.sourceId] = s;
  }
  return r && (a = _a(a, r, n)), h(h({}, t), a);
}
function yl(t, e) {
  return ce(t, function(r) {
    return r.sourceId !== e;
  });
}
function _a(t, e, r) {
  return hr(t, ce(t, function(n) {
    return El(n, e, r);
  }), e, !1, r);
}
function El(t, e, r) {
  return ka(t, r) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function hr(t, e, r, n, a) {
  var i = {};
  for (var o in t) {
    var s = t[o];
    e[o] ? i[o] = Sl(s, r, n, a) : i[o] = s;
  }
  return i;
}
function Sl(t, e, r, n) {
  var a = n.options, i = n.calendarApi, o = n.pluginHooks.eventSourceDefs[t.sourceDefId], s = De();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: r,
    context: n
  }, function(l) {
    var c = l.rawEvents;
    a.eventSourceSuccess && (c = a.eventSourceSuccess.call(i, c, l.xhr) || c), t.success && (c = t.success.call(i, c, l.xhr) || c), n.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: c
    });
  }, function(l) {
    console.warn(l.message, l), a.eventSourceFailure && a.eventSourceFailure.call(i, l), t.failure && t.failure(l), n.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: l
    });
  }), h(h({}, t), { isFetching: !0, latestFetchId: s });
}
function bl(t, e, r, n) {
  var a, i = t[e];
  return i && // not already removed
  r === i.latestFetchId ? h(h({}, t), (a = {}, a[e] = h(h({}, i), { isFetching: !1, fetchRange: n }), a)) : t;
}
function Ma(t, e) {
  return ce(t, function(r) {
    return ka(r, e);
  });
}
function Dl(t, e) {
  var r = la(e), n = [].concat(t.eventSources || []), a = [];
  t.initialEvents && n.unshift(t.initialEvents), t.events && n.unshift(t.events);
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i], l = sa(s, e, r);
    l && a.push(l);
  }
  return a;
}
function ka(t, e) {
  var r = e.pluginHooks.eventSourceDefs;
  return !r[t.sourceDefId].ignoreRange;
}
function Cl(t, e, r, n, a) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return Rl(t, r[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, a);
    case "ADD_EVENTS":
      return Tl(
        t,
        e.eventStore,
        // new ones
        n ? n.activeRange : null,
        a
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return ir(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Ee(t, n.activeRange, a) : t;
    case "REMOVE_EVENTS":
      return Vo(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Ia(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return dt(t, function(i) {
        return !i.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Y();
    default:
      return t;
  }
}
function Rl(t, e, r, n, a, i) {
  if (e && // not already removed
  r === e.latestFetchId) {
    var o = at(wl(a, e, i), e, i);
    return n && (o = Ee(o, n, i)), ir(Ia(t, e.sourceId), o);
  }
  return t;
}
function wl(t, e, r) {
  var n = r.options.eventDataTransform, a = e ? e.eventDataTransform : null;
  return a && (t = fn(t, a)), n && (t = fn(t, n)), t;
}
function fn(t, e) {
  var r;
  if (!e)
    r = t;
  else {
    r = [];
    for (var n = 0, a = t; n < a.length; n++) {
      var i = a[n], o = e(i);
      o ? r.push(o) : o == null && r.push(i);
    }
  }
  return r;
}
function Tl(t, e, r, n) {
  return r && (e = Ee(e, r, n)), ir(t, e);
}
function _l(t, e, r) {
  var n = t.defs, a = fe(t.instances, function(i) {
    var o = n[i.defId];
    return o.allDay || o.recurringDef ? i : h(h({}, i), { range: {
      start: r.createMarker(e.toDate(i.range.start, i.forcedStartTzo)),
      end: r.createMarker(e.toDate(i.range.end, i.forcedEndTzo))
    }, forcedStartTzo: r.canComputeOffset ? null : i.forcedStartTzo, forcedEndTzo: r.canComputeOffset ? null : i.forcedEndTzo });
  });
  return { defs: n, instances: a };
}
function Ia(t, e) {
  return dt(t, function(r) {
    return r.sourceId !== e;
  });
}
function Ml(t, e) {
  return {
    defs: t.defs,
    instances: ce(t.instances, function(r) {
      return !e[r.instanceId];
    })
  };
}
function kl(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Il(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Pl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function Hl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function xl(t, e, r, n, a) {
  var i = t.headerToolbar ? dn(t.headerToolbar, t, e, r, n, a) : null, o = t.footerToolbar ? dn(t.footerToolbar, t, e, r, n, a) : null;
  return { header: i, footer: o };
}
function dn(t, e, r, n, a, i) {
  var o = {}, s = [], l = !1;
  for (var c in t) {
    var u = t[c], f = Nl(u, e, r, n, a, i);
    o[c] = f.widgets, s.push.apply(s, f.viewsWithButtons), l = l || f.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function Nl(t, e, r, n, a, i) {
  var o = e.direction === "rtl", s = e.customButtons || {}, l = r.buttonText || {}, c = e.buttonText || {}, u = r.buttonHints || {}, f = e.buttonHints || {}, v = t ? t.split(" ") : [], d = [], p = !1, E = v.map(function(S) {
    return S.split(",").map(function(g) {
      if (g === "title")
        return p = !0, { buttonName: g };
      var b, C, D, I, _, P;
      if (b = s[g])
        D = function(L) {
          b.click && b.click.call(L.target, L, L.target);
        }, (I = n.getCustomButtonIconClass(b)) || (I = n.getIconClass(g, o)) || (_ = b.text), P = b.hint || b.text;
      else if (C = a[g]) {
        d.push(g), D = function() {
          i.changeView(g);
        }, (_ = C.buttonTextOverride) || (I = n.getIconClass(g, o)) || (_ = C.buttonTextDefault);
        var w = C.buttonTextOverride || C.buttonTextDefault;
        P = Me(
          C.buttonTitleOverride || C.buttonTitleDefault || e.viewHint,
          [w, g],
          // view-name = buttonName
          w
        );
      } else if (i[g])
        if (D = function() {
          i[g]();
        }, (_ = l[g]) || (I = n.getIconClass(g, o)) || (_ = c[g]), g === "prevYear" || g === "nextYear") {
          var N = g === "prevYear" ? "prev" : "next";
          P = Me(u[N] || f[N], [
            c.year || "year",
            "year"
          ], c[g]);
        } else
          P = function(L) {
            return Me(u[g] || f[g], [
              c[L] || L,
              L
            ], c[g]);
          };
      return { buttonName: g, buttonClick: D, buttonIcon: I, buttonText: _, buttonHint: P };
    });
  });
  return { widgets: E, viewsWithButtons: d, hasTitle: p };
}
var Al = {
  ignoreRange: !0,
  parseMeta: function(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch: function(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
}, Ol = te({
  eventSourceDefs: [Al]
}), Ll = {
  parseMeta: function(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch: function(t, e, r) {
    var n = t.context.dateEnv, a = t.eventSource.meta;
    Ys(a.bind(null, aa(t.range, n)), function(i) {
      e({ rawEvents: i });
    }, r);
  }
}, Vl = te({
  eventSourceDefs: [Ll]
});
function Ul(t, e, r, n, a) {
  t = t.toUpperCase();
  var i = null;
  t === "GET" ? e = Wl(e, r) : i = Pa(r);
  var o = new XMLHttpRequest();
  o.open(t, e, !0), t !== "GET" && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
    if (o.status >= 200 && o.status < 400) {
      var s = !1, l = void 0;
      try {
        l = JSON.parse(o.responseText), s = !0;
      } catch {
      }
      s ? n(l, o) : a("Failure parsing JSON", o);
    } else
      a("Request failed", o);
  }, o.onerror = function() {
    a("Request failed", o);
  }, o.send(i);
}
function Wl(t, e) {
  return t + (t.indexOf("?") === -1 ? "?" : "&") + Pa(e);
}
function Pa(t) {
  var e = [];
  for (var r in t)
    e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e.join("&");
}
var Bl = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, Fl = {
  parseMeta: function(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch: function(t, e, r) {
    var n = t.eventSource.meta, a = Gl(n, t.range, t.context);
    Ul(n.method, n.url, a, function(i, o) {
      e({ rawEvents: i, xhr: o });
    }, function(i, o) {
      r({ message: i, xhr: o });
    });
  }
}, zl = te({
  eventSourceRefiners: Bl,
  eventSourceDefs: [Fl]
});
function Gl(t, e, r) {
  var n = r.dateEnv, a = r.options, i, o, s, l, c = {};
  return i = t.startParam, i == null && (i = a.startParam), o = t.endParam, o == null && (o = a.endParam), s = t.timeZoneParam, s == null && (s = a.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, h(c, l), c[i] = n.formatIso(e.start), c[o] = n.formatIso(e.end), n.timeZone !== "local" && (c[s] = n.timeZone), c;
}
var ql = {
  daysOfWeek: y,
  startTime: k,
  endTime: k,
  duration: k,
  startRecur: y,
  endRecur: y
}, Yl = {
  parse: function(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      var r = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, n = void 0;
      return t.duration && (n = t.duration), !n && t.startTime && t.endTime && (n = mo(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: n,
        typeData: r
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand: function(t, e, r) {
    var n = Ae(e, { start: t.startRecur, end: t.endRecur });
    return n ? Zl(t.daysOfWeek, t.startTime, n, r) : [];
  }
}, jl = te({
  recurringTypes: [Yl],
  eventRefiners: ql
});
function Zl(t, e, r, n) {
  for (var a = t ? Zn(t) : null, i = H(r.start), o = r.end, s = []; i < o; ) {
    var l = void 0;
    (!a || a[i.getUTCDay()]) && (e ? l = n.add(i, e) : l = i, s.push(l)), i = W(i, 1);
  }
  return s;
}
var Xl = te({
  optionChangeHandlers: {
    events: function(t, e) {
      vn([t], e);
    },
    eventSources: vn
  }
});
function vn(t, e) {
  for (var r = tr(e.getCurrentData().eventSources), n = [], a = 0, i = t; a < i.length; a++) {
    for (var o = i[a], s = !1, l = 0; l < r.length; l += 1)
      if (r[l]._raw === o) {
        r.splice(l, 1), s = !0;
        break;
      }
    s || n.push(o);
  }
  for (var c = 0, u = r; c < u.length; c++) {
    var f = u[c];
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: f.sourceId
    });
  }
  for (var v = 0, d = n; v < d.length; v++) {
    var p = d[v];
    e.calendarApi.addEventSource(p);
  }
}
function $l(t, e) {
  e.emitter.trigger("datesSet", h(h({}, aa(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Kl(t, e) {
  var r = e.emitter;
  r.hasHandlers("eventsSet") && r.trigger("eventsSet", se(t, e));
}
var Jl = [
  Ol,
  Vl,
  zl,
  jl,
  Xl,
  te({
    isLoadingFuncs: [
      function(t) {
        return wa(t.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: Ql,
      domNodes: eu
    },
    propSetHandlers: {
      dateProfile: $l,
      eventStore: Kl
    }
  })
];
function Ql() {
  var t = null, e = "";
  function r(a, i) {
    (a !== t || i !== e) && (a.innerHTML = i), t = a, e = i;
  }
  function n() {
    t.innerHTML = "", t = null, e = "";
  }
  return { render: r, destroy: n };
}
function eu() {
  var t = null, e = [];
  function r(a, i) {
    var o = Array.prototype.slice.call(i);
    if (a !== t || !Se(e, o)) {
      for (var s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        a.appendChild(c);
      }
      n();
    }
    t = a, e = o;
  }
  function n() {
    e.forEach($t), e = [], t = null;
  }
  return { render: r, destroy: n };
}
var gr = (
  /** @class */
  function() {
    function t(e) {
      this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
    }
    return t.prototype.request = function(e) {
      this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
        // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this),
        e
      ));
    }, t.prototype.pause = function(e) {
      e === void 0 && (e = "");
      var r = this.pauseDepths;
      r[e] = (r[e] || 0) + 1, this.clearTimeout();
    }, t.prototype.resume = function(e, r) {
      e === void 0 && (e = "");
      var n = this.pauseDepths;
      if (e in n) {
        if (r)
          delete n[e];
        else {
          n[e] -= 1;
          var a = n[e];
          a <= 0 && delete n[e];
        }
        this.tryDrain();
      }
    }, t.prototype.isPaused = function() {
      return Object.keys(this.pauseDepths).length;
    }, t.prototype.tryDrain = function() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty; )
          this.isDirty = !1, this.drained();
        this.isRunning = !1;
      }
    }, t.prototype.clear = function() {
      this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
    }, t.prototype.clearTimeout = function() {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
    }, t.prototype.drained = function() {
      this.drainedOption && this.drainedOption();
    }, t;
  }()
), tu = (
  /** @class */
  function() {
    function t(e, r) {
      this.runTaskOption = e, this.drainedOption = r, this.queue = [], this.delayedRunner = new gr(this.drain.bind(this));
    }
    return t.prototype.request = function(e, r) {
      this.queue.push(e), this.delayedRunner.request(r);
    }, t.prototype.pause = function(e) {
      this.delayedRunner.pause(e);
    }, t.prototype.resume = function(e, r) {
      this.delayedRunner.resume(e, r);
    }, t.prototype.drain = function() {
      for (var e = this.queue; e.length; ) {
        for (var r = [], n = void 0; n = e.shift(); )
          this.runTask(n), r.push(n);
        this.drained(r);
      }
    }, t.prototype.runTask = function(e) {
      this.runTaskOption && this.runTaskOption(e);
    }, t.prototype.drained = function(e) {
      this.drainedOption && this.drainedOption(e);
    }, t;
  }()
);
function ru(t, e, r) {
  var n;
  return /^(year|month)$/.test(t.currentRangeUnit) ? n = t.currentRange : n = t.activeRange, r.formatRange(n.start, n.end, V(e.titleFormat || nu(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function nu(t) {
  var e = t.currentRangeUnit;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  var r = et(t.currentRange.start, t.currentRange.end);
  return r !== null && r > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var Ha = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.computeOptionsData = M(this._computeOptionsData), this.computeCurrentViewData = M(this._computeCurrentViewData), this.organizeRawLocales = M(Ts), this.buildLocale = M(va), this.buildPluginHooks = rl(), this.buildDateEnv = M(au), this.buildTheme = M(iu), this.parseToolbars = M(xl), this.buildViewSpecs = M(ul), this.buildDateProfileGenerator = Ze(ou), this.buildViewApi = M(su), this.buildViewUiProps = Ze(cu), this.buildEventUiBySource = M(lu, X), this.buildEventUiBases = M(uu), this.parseContextBusinessHours = Ze(fu), this.buildTitle = M(ru), this.emitter = new pt(), this.actionRunner = new tu(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
        return r.data;
      }, this.dispatch = function(C) {
        r.actionRunner.request(C);
      }, this.props = e, this.actionRunner.pause();
      var n = {}, a = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = a.calendarOptions.initialView || a.pluginHooks.initialView, o = this.computeCurrentViewData(i, a, e.optionOverrides, n);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(o.options);
      var s = ms(a.calendarOptions, a.dateEnv), l = o.dateProfileGenerator.build(s);
      oe(l.activeRange, s) || (s = l.currentRange.start);
      for (var c = {
        dateEnv: a.dateEnv,
        options: a.calendarOptions,
        pluginHooks: a.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, u = 0, f = a.pluginHooks.contextInit; u < f.length; u++) {
        var v = f[u];
        v(c);
      }
      for (var d = hl(a.calendarOptions, l, c), p = {
        dynamicOptionOverrides: n,
        currentViewType: i,
        currentDate: s,
        dateProfile: l,
        businessHours: this.parseContextBusinessHours(c),
        eventSources: d,
        eventUiBases: {},
        eventStore: Y(),
        renderableEventStore: Y(),
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(c).selectionConfig
      }, E = h(h({}, c), p), S = 0, g = a.pluginHooks.reducers; S < g.length; S++) {
        var b = g[S];
        h(p, b(null, null, E));
      }
      It(p, c) && this.emitter.trigger("loading", !0), this.state = p, this.updateData(), this.actionRunner.resume();
    }
    return t.prototype.resetOptions = function(e, r) {
      var n = this.props;
      n.optionOverrides = r ? h(h({}, n.optionOverrides), e) : e, this.actionRunner.request({
        type: "NOTHING"
      });
    }, t.prototype._handleAction = function(e) {
      var r = this, n = r.props, a = r.state, i = r.emitter, o = vl(a.dynamicOptionOverrides, e), s = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), l = dl(a.currentViewType, e), c = this.computeCurrentViewData(l, s, n.optionOverrides, o);
      n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(c.options);
      var u = {
        dateEnv: s.dateEnv,
        options: s.calendarOptions,
        pluginHooks: s.pluginHooks,
        calendarApi: n.calendarApi,
        dispatch: this.dispatch,
        emitter: i,
        getCurrentData: this.getCurrentData
      }, f = a.currentDate, v = a.dateProfile;
      this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (v = c.dateProfileGenerator.build(f)), f = gs(f, e), v = pl(v, e, f, c.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
      e.type === "NEXT" || // "
      !oe(v.currentRange, f)) && (f = v.currentRange.start);
      for (var d = gl(a.eventSources, e, v, u), p = Cl(a.eventStore, e, d, v, u), E = wa(d), S = E && !c.options.progressiveEventRendering && a.renderableEventStore || p, g = this.buildViewUiProps(u), b = g.eventUiSingleBase, C = g.selectionConfig, D = this.buildEventUiBySource(d), I = this.buildEventUiBases(S.defs, b, D), _ = {
        dynamicOptionOverrides: o,
        currentViewType: l,
        currentDate: f,
        dateProfile: v,
        eventSources: d,
        eventStore: p,
        renderableEventStore: S,
        selectionConfig: C,
        eventUiBases: I,
        businessHours: this.parseContextBusinessHours(u),
        dateSelection: kl(a.dateSelection, e),
        eventSelection: Il(a.eventSelection, e),
        eventDrag: Pl(a.eventDrag, e),
        eventResize: Hl(a.eventResize, e)
      }, P = h(h({}, u), _), w = 0, N = s.pluginHooks.reducers; w < N.length; w++) {
        var L = N[w];
        h(_, L(a, e, P));
      }
      var Z = It(a, u), z = It(_, u);
      !Z && z ? i.trigger("loading", !0) : Z && !z && i.trigger("loading", !1), this.state = _, n.onAction && n.onAction(e);
    }, t.prototype.updateData = function() {
      var e = this, r = e.props, n = e.state, a = this.data, i = this.computeOptionsData(r.optionOverrides, n.dynamicOptionOverrides, r.calendarApi), o = this.computeCurrentViewData(n.currentViewType, i, r.optionOverrides, n.dynamicOptionOverrides), s = this.data = h(h(h({ viewTitle: this.buildTitle(n.dateProfile, o.options, i.dateEnv), calendarApi: r.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), o), n), l = i.pluginHooks.optionChangeHandlers, c = a && a.calendarOptions, u = i.calendarOptions;
      if (c && c !== u) {
        c.timeZone !== u.timeZone && (n.eventSources = s.eventSources = ml(s.eventSources, n.dateProfile, s), n.eventStore = s.eventStore = _l(s.eventStore, a.dateEnv, s.dateEnv));
        for (var f in l)
          c[f] !== u[f] && l[f](u[f], s);
      }
      r.onData && r.onData(s);
    }, t.prototype._computeOptionsData = function(e, r, n) {
      var a = this.processRawCalendarOptions(e, r), i = a.refinedOptions, o = a.pluginHooks, s = a.localeDefaults, l = a.availableLocaleData, c = a.extra;
      pn(c);
      var u = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, o, l, i.defaultRangeSeparator), f = this.buildViewSpecs(o.views, e, r, s), v = this.buildTheme(i, o), d = this.parseToolbars(i, e, v, f, n);
      return {
        calendarOptions: i,
        pluginHooks: o,
        dateEnv: u,
        viewSpecs: f,
        theme: v,
        toolbarConfig: d,
        localeDefaults: s,
        availableRawLocales: l.map
      };
    }, t.prototype.processRawCalendarOptions = function(e, r) {
      var n = Tt([
        ke,
        e,
        r
      ]), a = n.locales, i = n.locale, o = this.organizeRawLocales(a), s = o.map, l = this.buildLocale(i || o.defaultCode, s).options, c = this.buildPluginHooks(e.plugins || [], Jl), u = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, en), tn), rn), c.listenerRefiners), c.optionRefiners), f = {}, v = Tt([
        ke,
        l,
        e,
        r
      ]), d = {}, p = this.currentCalendarOptionsInput, E = this.currentCalendarOptionsRefined, S = !1;
      for (var g in v)
        g !== "plugins" && (v[g] === p[g] || ne[g] && g in p && ne[g](p[g], v[g]) ? d[g] = E[g] : u[g] ? (d[g] = u[g](v[g]), S = !0) : f[g] = p[g]);
      return S && (this.currentCalendarOptionsInput = v, this.currentCalendarOptionsRefined = d), {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: c,
        availableLocaleData: o,
        localeDefaults: l,
        extra: f
      };
    }, t.prototype._computeCurrentViewData = function(e, r, n, a) {
      var i = r.viewSpecs[e];
      if (!i)
        throw new Error('viewType "' + e + `" is not available. Please make sure you've loaded all neccessary plugins`);
      var o = this.processRawViewOptions(i, r.pluginHooks, r.localeDefaults, n, a), s = o.refinedOptions, l = o.extra;
      pn(l);
      var c = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
        duration: i.duration,
        durationUnit: i.durationUnit,
        usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
        dateEnv: r.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: s.slotMinTime,
        slotMaxTime: s.slotMaxTime,
        showNonCurrentDates: s.showNonCurrentDates,
        dayCount: s.dayCount,
        dateAlignment: s.dateAlignment,
        dateIncrement: s.dateIncrement,
        hiddenDays: s.hiddenDays,
        weekends: s.weekends,
        nowInput: s.now,
        validRangeInput: s.validRange,
        visibleRangeInput: s.visibleRange,
        monthMode: s.monthMode,
        fixedWeekCount: s.fixedWeekCount
      }), u = this.buildViewApi(e, this.getCurrentData, r.dateEnv);
      return { viewSpec: i, options: s, dateProfileGenerator: c, viewApi: u };
    }, t.prototype.processRawViewOptions = function(e, r, n, a, i) {
      var o = Tt([
        ke,
        e.optionDefaults,
        n,
        a,
        e.optionOverrides,
        i
      ]), s = h(h(h(h(h(h({}, en), tn), rn), Oo), r.listenerRefiners), r.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, f = !1, v = {};
      for (var d in o)
        o[d] === c[d] || ne[d] && ne[d](o[d], c[d]) ? l[d] = u[d] : (o[d] === this.currentCalendarOptionsInput[d] || ne[d] && ne[d](o[d], this.currentCalendarOptionsInput[d]) ? d in this.currentCalendarOptionsRefined && (l[d] = this.currentCalendarOptionsRefined[d]) : s[d] ? l[d] = s[d](o[d]) : v[d] = o[d], f = !0);
      return f && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: v
      };
    }, t;
  }()
);
function au(t, e, r, n, a, i, o, s) {
  var l = va(e || o.defaultCode, o.map);
  return new Rs({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: i.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: r,
    firstDay: n,
    weekText: a,
    cmdFormatter: i.cmdFormatter,
    defaultSeparator: s
  });
}
function iu(t, e) {
  var r = e.themeClasses[t.themeSystem] || re;
  return new r(t);
}
function ou(t) {
  var e = t.dateProfileGeneratorClass || Ra;
  return new e(t);
}
function su(t, e, r) {
  return new vs(t, e, r);
}
function lu(t) {
  return fe(t, function(e) {
    return e.ui;
  });
}
function uu(t, e, r) {
  var n = { "": e };
  for (var a in t) {
    var i = t[a];
    i.sourceId && r[i.sourceId] && (n[a] = r[i.sourceId]);
  }
  return n;
}
function cu(t) {
  var e = t.options;
  return {
    eventUiSingleBase: ot({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: ot({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function It(t, e) {
  for (var r = 0, n = e.pluginHooks.isLoadingFuncs; r < n.length; r++) {
    var a = n[r];
    if (a(t))
      return !0;
  }
  return !1;
}
function fu(t) {
  return Is(t.options.businessHours, t);
}
function pn(t, e) {
  for (var r in t)
    console.warn("Unknown option '" + r + "'");
}
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleData = function(a) {
      n.dataManager ? n.setState(a) : n.state = a;
    }, n.dataManager = new Ha({
      optionOverrides: r.optionOverrides,
      calendarApi: r.calendarApi,
      onData: n.handleData
    }), n;
  }
  return e.prototype.render = function() {
    return this.props.children(this.state);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.optionOverrides;
    n !== r.optionOverrides && this.dataManager.resetOptions(n);
  }, e;
})(Xt);
var du = (
  /** @class */
  function() {
    function t() {
      this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
    }
    return t.prototype.addSegs = function(e) {
      for (var r = [], n = 0, a = e; n < a.length; n++) {
        var i = a[n];
        this.insertEntry(i, r);
      }
      return r;
    }, t.prototype.insertEntry = function(e, r) {
      var n = this.findInsertion(e);
      return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, r);
    }, t.prototype.isInsertionValid = function(e, r) {
      return (this.maxCoord === -1 || e.levelCoord + r.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
    }, t.prototype.handleInvalidInsertion = function(e, r, n) {
      return this.allowReslicing && e.touchingEntry ? this.splitEntry(r, e.touchingEntry, n) : (n.push(r), 0);
    }, t.prototype.splitEntry = function(e, r, n) {
      var a = 0, i = [], o = e.span, s = r.span;
      return o.start < s.start && (a += this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: { start: o.start, end: s.start }
      }, i)), o.end > s.end && (a += this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: { start: s.end, end: o.end }
      }, i)), a ? (n.push.apply(n, A([{
        index: e.index,
        thickness: e.thickness,
        span: xa(s, o)
        // guaranteed to intersect
      }], i)), a) : (n.push(e), 0);
    }, t.prototype.insertEntryAt = function(e, r) {
      var n = this, a = n.entriesByLevel, i = n.levelCoords;
      r.lateral === -1 ? (Pt(i, r.level, r.levelCoord), Pt(a, r.level, [e])) : Pt(a[r.level], r.lateral, e), this.stackCnts[Pe(e)] = r.stackCnt;
    }, t.prototype.findInsertion = function(e) {
      for (var r = this, n = r.levelCoords, a = r.entriesByLevel, i = r.strictOrder, o = r.stackCnts, s = n.length, l = 0, c = -1, u = -1, f = null, v = 0, d = 0; d < s; d += 1) {
        var p = n[d];
        if (!i && p >= l + e.thickness)
          break;
        for (
          var E = a[d], S = void 0, g = gn(E, e.span.start, hn), b = g[0] + g[1];
          // loop through entries that horizontally intersect
          (S = E[b]) && // but not past the whole entry list
          S.span.start < e.span.end;
        ) {
          var C = p + S.thickness;
          C > l && (l = C, f = S, c = d, u = b), C === l && (v = Math.max(v, o[Pe(S)] + 1)), b += 1;
        }
      }
      var D = 0;
      if (f)
        for (D = c + 1; D < s && n[D] < l; )
          D += 1;
      var I = -1;
      return D < s && n[D] === l && (I = gn(a[D], e.span.end, hn)[0]), {
        touchingLevel: c,
        touchingLateral: u,
        touchingEntry: f,
        stackCnt: v,
        levelCoord: l,
        level: D,
        lateral: I
      };
    }, t.prototype.toRects = function() {
      for (var e = this, r = e.entriesByLevel, n = e.levelCoords, a = r.length, i = [], o = 0; o < a; o += 1)
        for (var s = r[o], l = n[o], c = 0, u = s; c < u.length; c++) {
          var f = u[c];
          i.push(h(h({}, f), { levelCoord: l }));
        }
      return i;
    }, t;
  }()
);
function hn(t) {
  return t.span.end;
}
function Pe(t) {
  return t.index + ":" + t.span.start;
}
function xa(t, e) {
  var r = Math.max(t.start, e.start), n = Math.min(t.end, e.end);
  return r < n ? { start: r, end: n } : null;
}
function Pt(t, e, r) {
  t.splice(e, 0, r);
}
function gn(t, e, r) {
  var n = 0, a = t.length;
  if (!a || e < r(t[n]))
    return [0, 0];
  if (e > r(t[a - 1]))
    return [a, 0];
  for (; n < a; ) {
    var i = Math.floor(n + (a - n) / 2), o = r(t[i]);
    if (e < o)
      a = i;
    else if (e > o)
      n = i + 1;
    else
      return [i, 1];
  }
  return [n, 0];
}
var Te = (
  /** @class */
  function() {
    function t(e) {
      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }
    return t.prototype.destroy = function() {
    }, t;
  }()
);
function vu(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function mr(t) {
  var e;
  return e = {}, e[t.component.uid] = t, e;
}
var qt = {}, Na = (
  /** @class */
  function() {
    function t(e, r) {
      this.emitter = new pt();
    }
    return t.prototype.destroy = function() {
    }, t.prototype.setMirrorIsVisible = function(e) {
    }, t.prototype.setMirrorNeedsRevert = function(e) {
    }, t.prototype.setAutoScrollEnabled = function(e) {
    }, t;
  }()
), yr = {}, pu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props.widgetGroups.map(function(a) {
        return r.renderWidgetGroup(a);
      });
      return m.apply(void 0, A(["div", { className: "fc-toolbar-chunk" }], n));
    }, e.prototype.renderWidgetGroup = function(r) {
      for (var n = this.props, a = this.context.theme, i = [], o = !0, s = 0, l = r; s < l.length; s++) {
        var c = l[s], u = c.buttonName, f = c.buttonClick, v = c.buttonText, d = c.buttonIcon, p = c.buttonHint;
        if (u === "title")
          o = !1, i.push(m("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
        else {
          var E = u === n.activeButton, S = !n.isTodayEnabled && u === "today" || !n.isPrevEnabled && u === "prev" || !n.isNextEnabled && u === "next", g = ["fc-" + u + "-button", a.getClass("button")];
          E && g.push(a.getClass("buttonActive")), i.push(m("button", { type: "button", title: typeof p == "function" ? p(n.navUnit) : p, disabled: S, "aria-pressed": E, className: g.join(" "), onClick: f }, v || (d ? m("span", { className: d }) : "")));
        }
      }
      if (i.length > 1) {
        var b = o && a.getClass("buttonGroup") || "";
        return m.apply(void 0, A(["div", { className: b }], i));
      }
      return i[0];
    }, e;
  }(x)
), mn = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.model, a = r.extraClassName, i = !1, o, s, l = n.sectionWidgets, c = l.center;
      l.left ? (i = !0, o = l.left) : o = l.start, l.right ? (i = !0, s = l.right) : s = l.end;
      var u = [
        a || "",
        "fc-toolbar",
        i ? "fc-toolbar-ltr" : ""
      ];
      return m(
        "div",
        { className: u.join(" ") },
        this.renderSection("start", o || []),
        this.renderSection("center", c || []),
        this.renderSection("end", s || [])
      );
    }, e.prototype.renderSection = function(r, n) {
      var a = this.props;
      return m(pu, { key: r, widgetGroups: n, title: a.title, navUnit: a.navUnit, activeButton: a.activeButton, isTodayEnabled: a.isTodayEnabled, isPrevEnabled: a.isPrevEnabled, isNextEnabled: a.isNextEnabled, titleId: a.titleId });
    }, e;
  }(x)
), hu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        availableWidth: null
      }, r.handleEl = function(n) {
        r.el = n, $(r.props.elRef, n), r.updateAvailableWidth();
      }, r.handleResize = function() {
        r.updateAvailableWidth();
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.state, i = n.aspectRatio, o = [
        "fc-view-harness",
        i || n.liquid || n.height ? "fc-view-harness-active" : "fc-view-harness-passive"
        // let the view do the height
      ], s = "", l = "";
      return i ? a.availableWidth !== null ? s = a.availableWidth / i : l = 1 / i * 100 + "%" : s = n.height || "", m("div", { "aria-labelledby": n.labeledById, ref: this.handleEl, className: o.join(" "), style: { height: s, paddingBottom: l } }, n.children);
    }, e.prototype.componentDidMount = function() {
      this.context.addResizeHandler(this.handleResize);
    }, e.prototype.componentWillUnmount = function() {
      this.context.removeResizeHandler(this.handleResize);
    }, e.prototype.updateAvailableWidth = function() {
      this.el && // needed. but why?
      this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
    }, e;
  }(x)
), gu = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.handleSegClick = function(a, i) {
        var o = n.component, s = o.context, l = be(i);
        if (l && // might be the <div> surrounding the more link
        o.isValidSegDownEl(a.target)) {
          var c = U(a.target, ".fc-event-forced-url"), u = c ? c.querySelector("a[href]").href : "";
          s.emitter.trigger("eventClick", {
            el: i,
            event: new O(o.context, l.eventRange.def, l.eventRange.instance),
            jsEvent: a,
            view: s.viewApi
          }), u && !a.defaultPrevented && (window.location.href = u);
        }
      }, n.destroy = Gn(
        r.el,
        "click",
        ".fc-event",
        // on both fg and bg events
        n.handleSegClick
      ), n;
    }
    return e;
  }(Te)
), mu = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.handleEventElRemove = function(a) {
        a === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
      }, n.handleSegEnter = function(a, i) {
        be(i) && (n.currentSegEl = i, n.triggerEvent("eventMouseEnter", a, i));
      }, n.handleSegLeave = function(a, i) {
        n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", a, i));
      }, n.removeHoverListeners = Ui(
        r.el,
        ".fc-event",
        // on both fg and bg events
        n.handleSegEnter,
        n.handleSegLeave
      ), n;
    }
    return e.prototype.destroy = function() {
      this.removeHoverListeners();
    }, e.prototype.triggerEvent = function(r, n, a) {
      var i = this.component, o = i.context, s = be(a);
      (!n || i.isValidSegDownEl(n.target)) && o.emitter.trigger(r, {
        el: a,
        event: new O(o, s.eventRange.def, s.eventRange.instance),
        jsEvent: n,
        view: o.viewApi
      });
    }, e;
  }(Te)
), yu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.buildViewContext = M(Js), r.buildViewPropTransformers = M(Su), r.buildToolbarProps = M(Eu), r.headerRef = G(), r.footerRef = G(), r.interactionsStore = {}, r.state = {
        viewLabelId: ct()
      }, r.registerInteractiveComponent = function(n, a) {
        var i = vu(n, a), o = [
          gu,
          mu
        ], s = o.concat(r.props.pluginHooks.componentInteractions), l = s.map(function(c) {
          return new c(i);
        });
        r.interactionsStore[n.uid] = l, qt[n.uid] = i;
      }, r.unregisterInteractiveComponent = function(n) {
        var a = r.interactionsStore[n.uid];
        if (a) {
          for (var i = 0, o = a; i < o.length; i++) {
            var s = o[i];
            s.destroy();
          }
          delete r.interactionsStore[n.uid];
        }
        delete qt[n.uid];
      }, r.resizeRunner = new gr(function() {
        r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", { view: r.props.viewApi });
      }), r.handleWindowResize = function(n) {
        var a = r.props.options;
        a.handleWindowResize && n.target === window && r.resizeRunner.request(a.windowResizeDelay);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.toolbarConfig, a = r.options, i = this.buildToolbarProps(
        r.viewSpec,
        r.dateProfile,
        r.dateProfileGenerator,
        r.currentDate,
        Oe(r.options.now, r.dateEnv),
        // TODO: use NowTimer????
        r.viewTitle
      ), o = !1, s = "", l;
      r.isHeightAuto || r.forPrint ? s = "" : a.height != null ? o = !0 : a.contentHeight != null ? s = a.contentHeight : l = Math.max(a.aspectRatio, 0.5);
      var c = this.buildViewContext(r.viewSpec, r.viewApi, r.options, r.dateProfileGenerator, r.dateEnv, r.theme, r.pluginHooks, r.dispatch, r.getCurrentData, r.emitter, r.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
      return m(
        de.Provider,
        { value: c },
        n.header && m(mn, h({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, i)),
        m(
          hu,
          { liquid: o, height: s, aspectRatio: l, labeledById: u },
          this.renderView(r),
          this.buildAppendContent()
        ),
        n.footer && m(mn, h({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
      );
    }, e.prototype.componentDidMount = function() {
      var r = this.props;
      this.calendarInteractions = r.pluginHooks.calendarInteractions.map(function(i) {
        return new i(r);
      }), window.addEventListener("resize", this.handleWindowResize);
      var n = r.pluginHooks.propSetHandlers;
      for (var a in n)
        n[a](r[a], r);
    }, e.prototype.componentDidUpdate = function(r) {
      var n = this.props, a = n.pluginHooks.propSetHandlers;
      for (var i in a)
        n[i] !== r[i] && a[i](n[i], n);
    }, e.prototype.componentWillUnmount = function() {
      window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
      for (var r = 0, n = this.calendarInteractions; r < n.length; r++) {
        var a = n[r];
        a.destroy();
      }
      this.props.emitter.trigger("_unmount");
    }, e.prototype.buildAppendContent = function() {
      var r = this.props, n = r.pluginHooks.viewContainerAppends.map(function(a) {
        return a(r);
      });
      return m.apply(void 0, A([B, {}], n));
    }, e.prototype.renderView = function(r) {
      for (var n = r.pluginHooks, a = r.viewSpec, i = {
        dateProfile: r.dateProfile,
        businessHours: r.businessHours,
        eventStore: r.renderableEventStore,
        eventUiBases: r.eventUiBases,
        dateSelection: r.dateSelection,
        eventSelection: r.eventSelection,
        eventDrag: r.eventDrag,
        eventResize: r.eventResize,
        isHeightAuto: r.isHeightAuto,
        forPrint: r.forPrint
      }, o = this.buildViewPropTransformers(n.viewPropsTransformers), s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        h(i, c.transform(i, r));
      }
      var u = a.component;
      return m(u, h({}, i));
    }, e;
  }(ht)
);
function Eu(t, e, r, n, a, i) {
  var o = r.build(a, void 0, !1), s = r.buildPrev(e, n, !1), l = r.buildNext(e, n, !1);
  return {
    title: i,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !oe(e.currentRange, a),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function Su(t) {
  return t.map(function(e) {
    return new e();
  });
}
var bu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        forPrint: !1
      }, r.handleBeforePrint = function() {
        r.setState({ forPrint: !0 });
      }, r.handleAfterPrint = function() {
        r.setState({ forPrint: !1 });
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.options, a = this.state.forPrint, i = a || n.height === "auto" || n.contentHeight === "auto", o = !i && n.height != null ? n.height : "", s = [
        "fc",
        a ? "fc-media-print" : "fc-media-screen",
        "fc-direction-" + n.direction,
        r.theme.getClass("root")
      ];
      return ga() || s.push("fc-liquid-hack"), r.children(s, o, i, a);
    }, e.prototype.componentDidMount = function() {
      var r = this.props.emitter;
      r.on("_beforeprint", this.handleBeforePrint), r.on("_afterprint", this.handleAfterPrint);
    }, e.prototype.componentWillUnmount = function() {
      var r = this.props.emitter;
      r.off("_beforeprint", this.handleBeforePrint), r.off("_afterprint", this.handleAfterPrint);
    }, e;
  }(x)
);
function Du(t, e) {
  return !t || e > 10 ? V({ weekday: "short" }) : e > 1 ? V({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : V({ weekday: "long" });
}
var Aa = "fc-col-header-cell";
function Oa(t) {
  return t.text;
}
var Cu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.dateEnv, a = r.options, i = r.theme, o = r.viewApi, s = this.props, l = s.date, c = s.dateProfile, u = ma(l, s.todayRange, null, c), f = [Aa].concat(cr(u, i)), v = n.format(l, s.dayHeaderFormat), d = !u.isDisabled && s.colCnt > 1 ? fr(this.context, l) : {}, p = h(h(h({ date: n.toDate(l), view: o }, s.extraHookProps), { text: v }), u);
      return m(we, { hookProps: p, classNames: a.dayHeaderClassNames, content: a.dayHeaderContent, defaultContent: Oa, didMount: a.dayHeaderDidMount, willUnmount: a.dayHeaderWillUnmount }, function(E, S, g, b) {
        return m(
          "th",
          h({ ref: E, role: "columnheader", className: f.concat(S).join(" "), "data-date": u.isDisabled ? void 0 : Xn(l), colSpan: s.colSpan }, s.extraDataAttrs),
          m("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && m("a", h({ ref: g, className: [
            "fc-col-header-cell-cushion",
            s.isSticky ? "fc-sticky" : ""
          ].join(" ") }, d), b))
        );
      });
    }, e;
  }(x)
), Ru = V({ weekday: "long" }), wu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = this.context, a = n.dateEnv, i = n.theme, o = n.viewApi, s = n.options, l = W(/* @__PURE__ */ new Date(2592e5), r.dow), c = {
        dow: r.dow,
        isDisabled: !1,
        isFuture: !1,
        isPast: !1,
        isToday: !1,
        isOther: !1
      }, u = [Aa].concat(cr(c, i), r.extraClassNames || []), f = a.format(l, r.dayHeaderFormat), v = h(h(h(h({
        // TODO: make this public?
        date: l
      }, c), { view: o }), r.extraHookProps), { text: f });
      return m(we, { hookProps: v, classNames: s.dayHeaderClassNames, content: s.dayHeaderContent, defaultContent: Oa, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, function(d, p, E, S) {
        return m(
          "th",
          h({ ref: d, role: "columnheader", className: u.concat(p).join(" "), colSpan: r.colSpan }, r.extraDataAttrs),
          m(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            m("a", { "aria-label": a.format(l, Ru), className: [
              "fc-col-header-cell-cushion",
              r.isSticky ? "fc-sticky" : ""
            ].join(" "), ref: E }, S)
          )
        );
      });
    }, e;
  }(x)
), La = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var a = t.call(this, r, n) || this;
      return a.initialNowDate = Oe(n.options.now, n.dateEnv), a.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), a.state = a.computeTiming().currentState, a;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.state;
      return n.children(a.nowDate, a.todayRange);
    }, e.prototype.componentDidMount = function() {
      this.setTimeout();
    }, e.prototype.componentDidUpdate = function(r) {
      r.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }, e.prototype.componentWillUnmount = function() {
      this.clearTimeout();
    }, e.prototype.computeTiming = function() {
      var r = this, n = r.props, a = r.context, i = ue(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), o = a.dateEnv.startOf(i, n.unit), s = a.dateEnv.add(o, k(1, n.unit)), l = s.valueOf() - i.valueOf();
      return l = Math.min(1e3 * 60 * 60 * 24, l), {
        currentState: { nowDate: o, todayRange: yn(o) },
        nextState: { nowDate: s, todayRange: yn(s) },
        waitMs: l
      };
    }, e.prototype.setTimeout = function() {
      var r = this, n = this.computeTiming(), a = n.nextState, i = n.waitMs;
      this.timeoutId = setTimeout(function() {
        r.setState(a, function() {
          r.setTimeout();
        });
      }, i);
    }, e.prototype.clearTimeout = function() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }, e.contextType = de, e;
  }(Xt)
);
function yn(t) {
  var e = H(t), r = W(e, 1);
  return { start: e, end: r };
}
var Tu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.createDayHeaderFormatter = M(_u), r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = this.props, a = n.dates, i = n.dateProfile, o = n.datesRepDistinctDays, s = n.renderIntro, l = this.createDayHeaderFormatter(r.options.dayHeaderFormat, o, a.length);
      return m(La, { unit: "day" }, function(c, u) {
        return m(
          "tr",
          { role: "row" },
          s && s("day"),
          a.map(function(f) {
            return o ? m(Cu, { key: f.toISOString(), date: f, dateProfile: i, todayRange: u, colCnt: a.length, dayHeaderFormat: l }) : m(wu, { key: f.getUTCDay(), dow: f.getUTCDay(), dayHeaderFormat: l });
          })
        );
      });
    }, e;
  }(x)
);
function _u(t, e, r) {
  return t || Du(e, r);
}
var Mu = (
  /** @class */
  function() {
    function t(e, r) {
      for (var n = e.start, a = e.end, i = [], o = [], s = -1; n < a; )
        r.isHiddenDay(n) ? i.push(s + 0.5) : (s += 1, i.push(s), o.push(n)), n = W(n, 1);
      this.dates = o, this.indices = i, this.cnt = o.length;
    }
    return t.prototype.sliceRange = function(e) {
      var r = this.getDateDayIndex(e.start), n = this.getDateDayIndex(W(e.end, -1)), a = Math.max(0, r), i = Math.min(this.cnt - 1, n);
      return a = Math.ceil(a), i = Math.floor(i), a <= i ? {
        firstIndex: a,
        lastIndex: i,
        isStart: r === a,
        isEnd: n === i
      } : null;
    }, t.prototype.getDateDayIndex = function(e) {
      var r = this.indices, n = Math.floor(Ce(this.dates[0], e));
      return n < 0 ? r[0] - 1 : n >= r.length ? r[r.length - 1] + 1 : r[n];
    }, t;
  }()
), ku = (
  /** @class */
  function() {
    function t(e, r) {
      var n = e.dates, a, i, o;
      if (r) {
        for (i = n[0].getUTCDay(), a = 1; a < n.length && n[a].getUTCDay() !== i; a += 1)
          ;
        o = Math.ceil(n.length / a);
      } else
        o = 1, a = n.length;
      this.rowCnt = o, this.colCnt = a, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }
    return t.prototype.buildCells = function() {
      for (var e = [], r = 0; r < this.rowCnt; r += 1) {
        for (var n = [], a = 0; a < this.colCnt; a += 1)
          n.push(this.buildCell(r, a));
        e.push(n);
      }
      return e;
    }, t.prototype.buildCell = function(e, r) {
      var n = this.daySeries.dates[e * this.colCnt + r];
      return {
        key: n.toISOString(),
        date: n
      };
    }, t.prototype.buildHeaderDates = function() {
      for (var e = [], r = 0; r < this.colCnt; r += 1)
        e.push(this.cells[0][r].date);
      return e;
    }, t.prototype.sliceRange = function(e) {
      var r = this.colCnt, n = this.daySeries.sliceRange(e), a = [];
      if (n)
        for (var i = n.firstIndex, o = n.lastIndex, s = i; s <= o; ) {
          var l = Math.floor(s / r), c = Math.min((l + 1) * r, o + 1);
          a.push({
            row: l,
            firstCol: s % r,
            lastCol: (c - 1) % r,
            isStart: n.isStart && s === i,
            isEnd: n.isEnd && c - 1 === o
          }), s = c;
        }
      return a;
    }, t;
  }()
), Iu = (
  /** @class */
  function() {
    function t() {
      this.sliceBusinessHours = M(this._sliceBusinessHours), this.sliceDateSelection = M(this._sliceDateSpan), this.sliceEventStore = M(this._sliceEventStore), this.sliceEventDrag = M(this._sliceInteraction), this.sliceEventResize = M(this._sliceInteraction), this.forceDayIfListItem = !1;
    }
    return t.prototype.sliceProps = function(e, r, n, a) {
      for (var i = [], o = 4; o < arguments.length; o++)
        i[o - 4] = arguments[o];
      var s = e.eventUiBases, l = this.sliceEventStore.apply(this, A([e.eventStore, s, r, n], i));
      return {
        dateSelectionSegs: this.sliceDateSelection.apply(this, A([e.dateSelection, s, a], i)),
        businessHourSegs: this.sliceBusinessHours.apply(this, A([e.businessHours, r, n, a], i)),
        fgEventSegs: l.fg,
        bgEventSegs: l.bg,
        eventDrag: this.sliceEventDrag.apply(this, A([e.eventDrag, s, r, n], i)),
        eventResize: this.sliceEventResize.apply(this, A([e.eventResize, s, r, n], i)),
        eventSelection: e.eventSelection
      };
    }, t.prototype.sliceNowDate = function(e, r) {
      for (var n = [], a = 2; a < arguments.length; a++)
        n[a - 2] = arguments[a];
      return this._sliceDateSpan.apply(this, A([
        { range: { start: e, end: ue(e, 1) }, allDay: !1 },
        {},
        r
      ], n));
    }, t.prototype._sliceBusinessHours = function(e, r, n, a) {
      for (var i = [], o = 4; o < arguments.length; o++)
        i[o - 4] = arguments[o];
      return e ? this._sliceEventStore.apply(this, A([
        Ee(e, Ht(r, !!n), a),
        {},
        r,
        n
      ], i)).bg : [];
    }, t.prototype._sliceEventStore = function(e, r, n, a) {
      for (var i = [], o = 4; o < arguments.length; o++)
        i[o - 4] = arguments[o];
      if (e) {
        var s = an(e, r, Ht(n, !!a), a);
        return {
          bg: this.sliceEventRanges(s.bg, i),
          fg: this.sliceEventRanges(s.fg, i)
        };
      }
      return { bg: [], fg: [] };
    }, t.prototype._sliceInteraction = function(e, r, n, a) {
      for (var i = [], o = 4; o < arguments.length; o++)
        i[o - 4] = arguments[o];
      if (!e)
        return null;
      var s = an(e.mutatedEvents, r, Ht(n, !!a), a);
      return {
        segs: this.sliceEventRanges(s.fg, i),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent
      };
    }, t.prototype._sliceDateSpan = function(e, r, n) {
      for (var a = [], i = 3; i < arguments.length; i++)
        a[i - 3] = arguments[i];
      if (!e)
        return [];
      for (var o = us(e, r, n), s = this.sliceRange.apply(this, A([e.range], a)), l = 0, c = s; l < c.length; l++) {
        var u = c[l];
        u.eventRange = o;
      }
      return s;
    }, t.prototype.sliceEventRanges = function(e, r) {
      for (var n = [], a = 0, i = e; a < i.length; a++) {
        var o = i[a];
        n.push.apply(n, this.sliceEventRange(o, r));
      }
      return n;
    }, t.prototype.sliceEventRange = function(e, r) {
      var n = e.range;
      this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
        start: n.start,
        end: W(n.start, 1)
      });
      for (var a = this.sliceRange.apply(this, A([n], r)), i = 0, o = a; i < o.length; i++) {
        var s = o[i];
        s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
      }
      return a;
    }, t;
  }()
);
function Ht(t, e) {
  var r = t.activeRange;
  return e ? r : {
    start: ue(r.start, t.slotMinTime.milliseconds),
    end: ue(r.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Va(t, e, r) {
  var n = t.mutatedEvents.instances;
  for (var a in n)
    if (!vt(e.validRange, n[a].range))
      return !1;
  return Ua({ eventDrag: t }, r);
}
function Pu(t, e, r) {
  return vt(e.validRange, t.range) ? Ua({ dateSelection: t }, r) : !1;
}
function Ua(t, e) {
  var r = e.getCurrentData(), n = h({ businessHours: r.businessHours, dateSelection: "", eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || Hu)(n, e);
}
function Hu(t, e, r, n) {
  return r === void 0 && (r = {}), !(t.eventDrag && !xu(t, e, r, n) || t.dateSelection && !Nu(t, e, r, n));
}
function xu(t, e, r, n) {
  var a = e.getCurrentData(), i = t.eventDrag, o = i.mutatedEvents, s = o.defs, l = o.instances, c = st(s, i.isEvent ? t.eventUiBases : { "": a.selectionConfig });
  n && (c = fe(c, n));
  var u = Ml(t.eventStore, i.affectedEvents.instances), f = u.defs, v = u.instances, d = st(f, t.eventUiBases);
  for (var p in l) {
    var E = l[p], S = E.range, g = c[E.defId], b = s[E.defId];
    if (!Wa(g.constraints, S, u, t.businessHours, e))
      return !1;
    var C = e.options.eventOverlap, D = typeof C == "function" ? C : null;
    for (var I in v) {
      var _ = v[I];
      if (sr(S, _.range)) {
        var P = d[_.defId].overlap;
        if (P === !1 && i.isEvent || g.overlap === !1 || D && !D(
          new O(e, f[_.defId], _),
          // still event
          new O(e, b, E)
        ))
          return !1;
      }
    }
    for (var w = a.eventStore, N = 0, L = g.allows; N < L.length; N++) {
      var Z = L[N], z = h(h({}, r), { range: E.range, allDay: b.allDay }), Ue = w.defs[b.defId], We = w.instances[p], yt = void 0;
      if (Ue ? yt = new O(e, Ue, We) : yt = new O(e, b), !Z(lr(z, e), yt))
        return !1;
    }
  }
  return !0;
}
function Nu(t, e, r, n) {
  var a = t.eventStore, i = a.defs, o = a.instances, s = t.dateSelection, l = s.range, c = e.getCurrentData().selectionConfig;
  if (n && (c = n(c)), !Wa(c.constraints, l, a, t.businessHours, e))
    return !1;
  var u = e.options.selectOverlap, f = typeof u == "function" ? u : null;
  for (var v in o) {
    var d = o[v];
    if (sr(l, d.range) && (c.overlap === !1 || f && !f(new O(e, i[d.defId], d), null)))
      return !1;
  }
  for (var p = 0, E = c.allows; p < E.length; p++) {
    var S = E[p], g = h(h({}, r), s);
    if (!S(lr(g, e), null))
      return !1;
  }
  return !0;
}
function Wa(t, e, r, n, a) {
  for (var i = 0, o = t; i < o.length; i++) {
    var s = o[i];
    if (!Ou(Au(s, e, r, n, a), e))
      return !1;
  }
  return !0;
}
function Au(t, e, r, n, a) {
  return t === "businessHours" ? xt(Ee(n, e, a)) : typeof t == "string" ? xt(dt(r, function(i) {
    return i.groupId === t;
  })) : typeof t == "object" && t ? xt(Ee(t, e, a)) : [];
}
function xt(t) {
  var e = t.instances, r = [];
  for (var n in e)
    r.push(e[n].range);
  return r;
}
function Ou(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    if (vt(a, e))
      return !0;
  }
  return !1;
}
var ze = /^(visible|hidden)$/, Lu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleEl = function(n) {
        r.el = n, $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.liquid, a = r.liquidIsAbsolute, i = n && a, o = ["fc-scroller"];
      return n && (a ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: o.join(" "), style: {
        overflowX: r.overflowX,
        overflowY: r.overflowY,
        left: i && -(r.overcomeLeft || 0) || "",
        right: i && -(r.overcomeRight || 0) || "",
        bottom: i && -(r.overcomeBottom || 0) || "",
        marginLeft: !i && -(r.overcomeLeft || 0) || "",
        marginRight: !i && -(r.overcomeRight || 0) || "",
        marginBottom: !i && -(r.overcomeBottom || 0) || "",
        maxHeight: r.maxHeight || ""
      } }, r.children);
    }, e.prototype.needsXScrolling = function() {
      if (ze.test(this.props.overflowX))
        return !1;
      for (var r = this.el, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), a = r.children, i = 0; i < a.length; i += 1) {
        var o = a[i];
        if (o.getBoundingClientRect().width > n)
          return !0;
      }
      return !1;
    }, e.prototype.needsYScrolling = function() {
      if (ze.test(this.props.overflowY))
        return !1;
      for (var r = this.el, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), a = r.children, i = 0; i < a.length; i += 1) {
        var o = a[i];
        if (o.getBoundingClientRect().height > n)
          return !0;
      }
      return !1;
    }, e.prototype.getXScrollbarWidth = function() {
      return ze.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }, e.prototype.getYScrollbarWidth = function() {
      return ze.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }, e;
  }(x)
), ie = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(n, a) {
        var i = r, o = i.depths, s = i.currentMap, l = !1, c = !1;
        n !== null ? (l = a in s, s[a] = n, o[a] = (o[a] || 0) + 1, c = !0) : (o[a] -= 1, o[a] || (delete s[a], delete r.callbackMap[a], l = !0)), r.masterCallback && (l && r.masterCallback(null, String(a)), c && r.masterCallback(n, String(a)));
      };
    }
    return t.prototype.createRef = function(e) {
      var r = this, n = this.callbackMap[e];
      return n || (n = this.callbackMap[e] = function(a) {
        r.handleValue(a, String(e));
      }), n;
    }, t.prototype.collect = function(e, r, n) {
      return co(this.currentMap, e, r, n);
    }, t.prototype.getAll = function() {
      return tr(this.currentMap);
    }, t;
  }()
);
function Vu(t) {
  for (var e = Oi(t, ".fc-scrollgrid-shrink"), r = 0, n = 0, a = e; n < a.length; n++) {
    var i = a[n];
    r = Math.max(r, $i(i));
  }
  return Math.ceil(r);
}
function Ba(t, e) {
  return t.liquid && e.liquid;
}
function Uu(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Ba(t, e);
}
function Wu(t, e, r, n) {
  var a = r.expandRows, i = typeof e.content == "function" ? e.content(r) : m("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: r.tableMinWidth,
      width: r.clientWidth,
      height: a ? r.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, r.tableColGroupNode, m(n ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(r) : e.rowContent));
  return i;
}
function Bu(t, e) {
  return Se(t, e, X);
}
function Fu(t, e) {
  for (var r = [], n = 0, a = t; n < a.length; n++)
    for (var i = a[n], o = i.span || 1, s = 0; s < o; s += 1)
      r.push(m("col", { style: {
        width: i.width === "shrink" ? zu(e) : i.width || "",
        minWidth: i.minWidth || ""
      } }));
  return m.apply(void 0, A(["colgroup", {}], r));
}
function zu(t) {
  return t ?? 4;
}
function Gu(t) {
  for (var e = 0, r = t; e < r.length; e++) {
    var n = r[e];
    if (n.width === "shrink")
      return !0;
  }
  return !1;
}
function qu(t, e) {
  var r = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && r.push("fc-scrollgrid-liquid"), r;
}
function Yu(t, e) {
  var r = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + t.type,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && r.push("fc-scrollgrid-section-liquid"), t.isSticky && r.push("fc-scrollgrid-section-sticky"), r;
}
function ju(t) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function En(t) {
  var e = t.stickyHeaderDates;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Zu(t) {
  var e = t.stickyFooterScrollbar;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
var Fa = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.processCols = M(function(n) {
        return n;
      }, Bu), r.renderMicroColGroup = M(Fu), r.scrollerRefs = new ie(), r.scrollerElRefs = new ie(r._handleScrollerEl.bind(r)), r.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, r.handleSizing = function() {
        r.safeSetState(h({ shrinkWidth: r.computeShrinkWidth() }, r.computeScrollerDims()));
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.state, i = r.context, o = n.sections || [], s = this.processCols(n.cols), l = this.renderMicroColGroup(s, a.shrinkWidth), c = qu(n.liquid, i);
      n.collapsibleWidth && c.push("fc-scrollgrid-collapsible");
      for (var u = o.length, f = 0, v, d = [], p = [], E = []; f < u && (v = o[f]).type === "header"; )
        d.push(this.renderSection(v, l, !0)), f += 1;
      for (; f < u && (v = o[f]).type === "body"; )
        p.push(this.renderSection(v, l, !1)), f += 1;
      for (; f < u && (v = o[f]).type === "footer"; )
        E.push(this.renderSection(v, l, !0)), f += 1;
      var S = !ga(), g = { role: "rowgroup" };
      return m("table", {
        role: "grid",
        className: c.join(" "),
        style: { height: n.height }
      }, !!(!S && d.length) && m.apply(void 0, A(["thead", g], d)), !!(!S && p.length) && m.apply(void 0, A(["tbody", g], p)), !!(!S && E.length) && m.apply(void 0, A(["tfoot", g], E)), S && m.apply(void 0, A(A(A(["tbody", g], d), p), E)));
    }, e.prototype.renderSection = function(r, n, a) {
      return "outerContent" in r ? m(B, { key: r.key }, r.outerContent) : m("tr", { key: r.key, role: "presentation", className: Yu(r, this.props.liquid).join(" ") }, this.renderChunkTd(r, n, r.chunk, a));
    }, e.prototype.renderChunkTd = function(r, n, a, i) {
      if ("outerContent" in a)
        return a.outerContent;
      var o = this.props, s = this.state, l = s.forceYScrollbars, c = s.scrollerClientWidths, u = s.scrollerClientHeights, f = Uu(o, r), v = Ba(o, r), d = o.liquid ? l ? "scroll" : f ? "auto" : "hidden" : "visible", p = r.key, E = Wu(r, a, {
        tableColGroupNode: n,
        tableMinWidth: "",
        clientWidth: !o.collapsibleWidth && c[p] !== void 0 ? c[p] : null,
        clientHeight: u[p] !== void 0 ? u[p] : null,
        expandRows: r.expandRows,
        syncRowHeights: !1,
        rowSyncHeights: [],
        reportRowHeightChange: function() {
        }
      }, i);
      return m(i ? "th" : "td", {
        ref: a.elRef,
        role: "presentation"
      }, m(
        "div",
        { className: "fc-scroller-harness" + (v ? " fc-scroller-harness-liquid" : "") },
        m(Lu, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: d, overflowX: o.liquid ? "hidden" : "visible", maxHeight: r.maxHeight, liquid: v, liquidIsAbsolute: !0 }, E)
      ));
    }, e.prototype._handleScrollerEl = function(r, n) {
      var a = Xu(this.props.sections, n);
      a && $(a.chunk.scrollerElRef, r);
    }, e.prototype.componentDidMount = function() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }, e.prototype.componentDidUpdate = function() {
      this.handleSizing();
    }, e.prototype.componentWillUnmount = function() {
      this.context.removeResizeHandler(this.handleSizing);
    }, e.prototype.computeShrinkWidth = function() {
      return Gu(this.props.cols) ? Vu(this.scrollerElRefs.getAll()) : 0;
    }, e.prototype.computeScrollerDims = function() {
      var r = Bs(), n = this, a = n.scrollerRefs, i = n.scrollerElRefs, o = !1, s = {}, l = {};
      for (var c in a.currentMap) {
        var u = a.currentMap[c];
        if (u && u.needsYScrolling()) {
          o = !0;
          break;
        }
      }
      for (var f = 0, v = this.props.sections; f < v.length; f++) {
        var d = v[f], c = d.key, p = i.currentMap[c];
        if (p) {
          var E = p.parentNode;
          s[c] = Math.floor(E.getBoundingClientRect().width - (o ? r.y : 0)), l[c] = Math.floor(E.getBoundingClientRect().height);
        }
      }
      return { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l };
    }, e;
  }(x)
);
Fa.addStateEquality({
  scrollerClientWidths: X,
  scrollerClientHeights: X
});
function Xu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    if (a.key === e)
      return a;
  }
  return null;
}
var Er = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.elRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = a.options, o = n.seg, s = o.eventRange, l = s.ui, c = {
        event: new O(a, s.def, s.instance),
        view: a.viewApi,
        timeText: n.timeText,
        textColor: l.textColor,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        isDraggable: !n.disableDragging && Jo(o, a),
        isStartResizable: !n.disableResizing && Qo(o, a),
        isEndResizable: !n.disableResizing && es(o),
        isMirror: !!(n.isDragging || n.isResizing || n.isDateSelecting),
        isStart: !!o.isStart,
        isEnd: !!o.isEnd,
        isPast: !!n.isPast,
        isFuture: !!n.isFuture,
        isToday: !!n.isToday,
        isSelected: !!n.isSelected,
        isDragging: !!n.isDragging,
        isResizing: !!n.isResizing
      }, u = ts(c).concat(l.classNames);
      return m(we, { hookProps: c, classNames: i.eventClassNames, content: i.eventContent, defaultContent: n.defaultContent, didMount: i.eventDidMount, willUnmount: i.eventWillUnmount, elRef: this.elRef }, function(f, v, d, p) {
        return n.children(f, u.concat(v), d, p, c);
      });
    }, e.prototype.componentDidMount = function() {
      on(this.elRef.current, this.props.seg);
    }, e.prototype.componentDidUpdate = function(r) {
      var n = this.props.seg;
      n !== r.seg && on(this.elRef.current, n);
    }, e;
  }(x)
), $u = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = n.seg, o = a.options.eventTimeFormat || n.defaultTimeFormat, s = ra(i, o, a, n.defaultDisplayEventTime, n.defaultDisplayEventEnd);
      return m(Er, { seg: i, timeText: s, disableDragging: n.disableDragging, disableResizing: n.disableResizing, defaultContent: n.defaultContent || Ku, isDragging: n.isDragging, isResizing: n.isResizing, isDateSelecting: n.isDateSelecting, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(l, c, u, f, v) {
        return m(
          "a",
          h({ className: n.extraClassNames.concat(c).join(" "), style: {
            borderColor: v.borderColor,
            backgroundColor: v.backgroundColor
          }, ref: l }, na(i, a)),
          m("div", { className: "fc-event-main", ref: u, style: { color: v.textColor } }, f),
          v.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
          v.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
        );
      });
    }, e;
  }(x)
);
function Ku(t) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, t.event.title || m(B, null, " "))
    )
  );
}
var Ju = V({ day: "numeric" }), za = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = a.options, o = Ga({
        date: n.date,
        dateProfile: n.dateProfile,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        extraProps: n.extraHookProps,
        viewApi: a.viewApi,
        dateEnv: a.dateEnv
      });
      return m(ba, { hookProps: o, content: i.dayCellContent, defaultContent: n.defaultContent }, n.children);
    }, e;
  }(x)
);
function Ga(t) {
  var e = t.date, r = t.dateEnv, n = ma(e, t.todayRange, null, t.dateProfile);
  return h(h(h({ date: r.toDate(e), view: t.viewApi }, n), { dayNumberText: t.showDayNumber ? r.format(e, Ju) : "" }), t.extraProps);
}
var qa = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.refineHookProps = Ze(Ga), r.normalizeClassNames = Da(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = a.options, o = this.refineHookProps({
        date: n.date,
        dateProfile: n.dateProfile,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        extraProps: n.extraHookProps,
        viewApi: a.viewApi,
        dateEnv: a.dateEnv
      }), s = cr(o, a.theme).concat(o.isDisabled ? [] : this.normalizeClassNames(i.dayCellClassNames, o)), l = o.isDisabled ? {} : {
        "data-date": Xn(n.date)
      };
      return m(pr, { hookProps: o, didMount: i.dayCellDidMount, willUnmount: i.dayCellWillUnmount, elRef: n.elRef }, function(c) {
        return n.children(c, s, l, o.isDisabled);
      });
    }, e;
  }(x)
);
function Qu(t) {
  return m("div", { className: "fc-" + t });
}
var ec = function(t) {
  return m(Er, { defaultContent: tc, seg: t.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: t.isPast, isFuture: t.isFuture, isToday: t.isToday }, function(e, r, n, a, i) {
    return m("div", { ref: e, className: ["fc-bg-event"].concat(r).join(" "), style: {
      backgroundColor: i.backgroundColor
    } }, a);
  });
};
function tc(t) {
  var e = t.event.title;
  return e && m("div", { className: "fc-event-title" }, t.event.title);
}
var rc = function(t) {
  return m(de.Consumer, null, function(e) {
    var r = e.dateEnv, n = e.options, a = t.date, i = n.weekNumberFormat || t.defaultFormat, o = r.computeWeekNumber(a), s = r.format(a, i), l = { num: o, text: s, date: a };
    return m(we, { hookProps: l, classNames: n.weekNumberClassNames, content: n.weekNumberContent, defaultContent: nc, didMount: n.weekNumberDidMount, willUnmount: n.weekNumberWillUnmount }, t.children);
  });
};
function nc(t) {
  return t.text;
}
var Nt = 10, ac = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        titleId: ct()
      }, r.handleRootEl = function(n) {
        r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
      }, r.handleDocumentMouseDown = function(n) {
        var a = Fn(n);
        r.rootEl.contains(a) || r.handleCloseClick();
      }, r.handleDocumentKeyDown = function(n) {
        n.key === "Escape" && r.handleCloseClick();
      }, r.handleCloseClick = function() {
        var n = r.props.onClose;
        n && n();
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.theme, a = r.options, i = this, o = i.props, s = i.state, l = [
        "fc-popover",
        n.getClass("popover")
      ].concat(o.extraClassNames || []);
      return xi(m(
        "div",
        h({ id: o.id, className: l.join(" "), "aria-labelledby": s.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
        m(
          "div",
          { className: "fc-popover-header " + n.getClass("popoverHeader") },
          m("span", { className: "fc-popover-title", id: s.titleId }, o.title),
          m("span", { className: "fc-popover-close " + n.getIconClass("close"), title: a.closeHint, onClick: this.handleCloseClick })
        ),
        m("div", { className: "fc-popover-body " + n.getClass("popoverContent") }, o.children)
      ), o.parentEl);
    }, e.prototype.componentDidMount = function() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
    }, e.prototype.componentWillUnmount = function() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }, e.prototype.updateSize = function() {
      var r = this.context.isRtl, n = this.props, a = n.alignmentEl, i = n.alignGridTop, o = this.rootEl, s = qs(a);
      if (s) {
        var l = o.getBoundingClientRect(), c = i ? U(a, ".fc-scrollgrid").getBoundingClientRect().top : s.top, u = r ? s.right - l.width : s.left;
        c = Math.max(c, Nt), u = Math.min(u, document.documentElement.clientWidth - Nt - l.width), u = Math.max(u, Nt);
        var f = o.offsetParent.getBoundingClientRect();
        _e(o, {
          top: c - f.top,
          left: u - f.left
        });
      }
    }, e;
  }(x)
), ic = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleRootEl = function(n) {
        r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
          el: n,
          useEventCenter: !1
        }) : r.context.unregisterInteractiveComponent(r);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.options, a = r.dateEnv, i = this.props, o = i.startDate, s = i.todayRange, l = i.dateProfile, c = a.format(o, n.dayPopoverFormat);
      return m(qa, { date: o, dateProfile: l, todayRange: s, elRef: this.handleRootEl }, function(u, f, v) {
        return m(
          ac,
          { elRef: u, id: i.id, title: c, extraClassNames: ["fc-more-popover"].concat(f), extraAttrs: v, parentEl: i.parentEl, alignmentEl: i.alignmentEl, alignGridTop: i.alignGridTop, onClose: i.onClose },
          m(za, { date: o, dateProfile: l, todayRange: s }, function(d, p) {
            return p && m("div", { className: "fc-more-popover-misc", ref: d }, p);
          }),
          i.children
        );
      });
    }, e.prototype.queryHit = function(r, n, a, i) {
      var o = this, s = o.rootEl, l = o.props;
      return r >= 0 && r < a && n >= 0 && n < i ? {
        dateProfile: l.dateProfile,
        dateSpan: h({ allDay: !0, range: {
          start: l.startDate,
          end: l.endDate
        } }, l.extraDateSpan),
        dayEl: s,
        rect: {
          left: 0,
          top: 0,
          right: a,
          bottom: i
        },
        layer: 1
        // important when comparing with hits from other components
      } : null;
    }, e;
  }(Re)
), oc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.linkElRef = G(), r.state = {
        isPopoverOpen: !1,
        popoverId: ct()
      }, r.handleClick = function(n) {
        var a = r, i = a.props, o = a.context, s = o.options.moreLinkClick, l = Sn(i).start;
        function c(u) {
          var f = u.eventRange, v = f.def, d = f.instance, p = f.range;
          return {
            event: new O(o, v, d),
            start: o.dateEnv.toDate(p.start),
            end: o.dateEnv.toDate(p.end),
            isStart: u.isStart,
            isEnd: u.isEnd
          };
        }
        typeof s == "function" && (s = s({
          date: l,
          allDay: !!i.allDayDate,
          allSegs: i.allSegs.map(c),
          hiddenSegs: i.hiddenSegs.map(c),
          jsEvent: n,
          view: o.viewApi
        })), !s || s === "popover" ? r.setState({ isPopoverOpen: !0 }) : typeof s == "string" && o.calendarApi.zoomTo(l, s);
      }, r.handlePopoverClose = function() {
        r.setState({ isPopoverOpen: !1 });
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this, a = n.props, i = n.state;
      return m(de.Consumer, null, function(o) {
        var s = o.viewApi, l = o.options, c = o.calendarApi, u = l.moreLinkText, f = a.moreCnt, v = Sn(a), d = typeof u == "function" ? u.call(c, f) : "+" + f + " " + u, p = Me(l.moreLinkHint, [f], d), E = {
          num: f,
          shortText: "+" + f,
          text: d,
          view: s
        };
        return m(
          B,
          null,
          !!a.moreCnt && m(we, { elRef: r.linkElRef, hookProps: E, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: a.defaultContent || sc, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(S, g, b, C) {
            return a.children(S, ["fc-more-link"].concat(g), b, C, r.handleClick, p, i.isPopoverOpen, i.isPopoverOpen ? i.popoverId : "");
          }),
          i.isPopoverOpen && m(ic, { id: i.popoverId, startDate: v.start, endDate: v.end, dateProfile: a.dateProfile, todayRange: a.todayRange, extraDateSpan: a.extraDateSpan, parentEl: r.parentEl, alignmentEl: a.alignmentElRef.current, alignGridTop: a.alignGridTop, onClose: r.handlePopoverClose }, a.popoverContent())
        );
      });
    }, e.prototype.componentDidMount = function() {
      this.updateParentEl();
    }, e.prototype.componentDidUpdate = function() {
      this.updateParentEl();
    }, e.prototype.updateParentEl = function() {
      this.linkElRef.current && (this.parentEl = U(this.linkElRef.current, ".fc-view-harness"));
    }, e;
  }(x)
);
function sc(t) {
  return t.text;
}
function Sn(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: W(t.allDayDate, 1)
    };
  var e = t.hiddenSegs;
  return {
    start: lc(e),
    end: cc(e)
  };
}
function lc(t) {
  return t.reduce(uc).eventRange.range.start;
}
function uc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function cc(t) {
  return t.reduce(fc).eventRange.range.end;
}
function fc(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var dc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      n === void 0 && (n = {});
      var a = t.call(this) || this;
      return a.isRendering = !1, a.isRendered = !1, a.currentClassNames = [], a.customContentRenderId = 0, a.handleAction = function(i) {
        switch (i.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            a.renderRunner.tryDrain();
        }
      }, a.handleData = function(i) {
        a.currentData = i, a.renderRunner.request(i.calendarOptions.rerenderDelay);
      }, a.handleRenderRequest = function() {
        if (a.isRendering) {
          a.isRendered = !0;
          var i = a.currentData;
          Fr(function() {
            Hi(m(bu, { options: i.calendarOptions, theme: i.theme, emitter: i.emitter }, function(o, s, l, c) {
              return a.setClassNames(o), a.setHeight(s), m(
                Sa.Provider,
                { value: a.customContentRenderId },
                m(yu, h({ isHeightAuto: l, forPrint: c }, i))
              );
            }), a.el);
          });
        } else a.isRendered && (a.isRendered = !1, Ni(a.el), a.setClassNames([]), a.setHeight(""));
      }, a.el = r, a.renderRunner = new gr(a.handleRenderRequest), new Ha({
        optionOverrides: n,
        calendarApi: a,
        onAction: a.handleAction,
        onData: a.handleData
      }), a;
    }
    return Object.defineProperty(e.prototype, "view", {
      get: function() {
        return this.currentData.viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.render = function() {
      var r = this.isRendering;
      r ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), r && this.updateSize();
    }, e.prototype.destroy = function() {
      this.isRendering && (this.isRendering = !1, this.renderRunner.request());
    }, e.prototype.updateSize = function() {
      var r = this;
      Fr(function() {
        t.prototype.updateSize.call(r);
      });
    }, e.prototype.batchRendering = function(r) {
      this.renderRunner.pause("batchRendering"), r(), this.renderRunner.resume("batchRendering");
    }, e.prototype.pauseRendering = function() {
      this.renderRunner.pause("pauseRendering");
    }, e.prototype.resumeRendering = function() {
      this.renderRunner.resume("pauseRendering", !0);
    }, e.prototype.resetOptions = function(r, n) {
      this.currentDataManager.resetOptions(r, n);
    }, e.prototype.setClassNames = function(r) {
      if (!Se(r, this.currentClassNames)) {
        for (var n = this.el.classList, a = 0, i = this.currentClassNames; a < i.length; a++) {
          var o = i[a];
          n.remove(o);
        }
        for (var s = 0, l = r; s < l.length; s++) {
          var o = l[s];
          n.add(o);
        }
        this.currentClassNames = r;
      }
    }, e.prototype.setHeight = function(r) {
      Bn(this.el, "height", r);
    }, e;
  }(ys)
);
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var vc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.headerElRef = G(), r;
    }
    return e.prototype.renderSimpleLayout = function(r, n) {
      var a = this, i = a.props, o = a.context, s = [], l = En(o.options);
      return r && s.push({
        type: "header",
        key: "header",
        isSticky: l,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: r
        }
      }), s.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunk: { content: n }
      }), m(Gt, { viewSpec: o.viewSpec }, function(c, u) {
        return m(
          "div",
          { ref: c, className: ["fc-daygrid"].concat(u).join(" ") },
          m(Fa, { liquid: !i.isHeightAuto && !i.forPrint, collapsibleWidth: i.forPrint, cols: [], sections: s })
        );
      });
    }, e.prototype.renderHScrollLayout = function(r, n, a, i) {
      var o = this.context.pluginHooks.scrollGridImpl;
      if (!o)
        throw new Error("No ScrollGrid implementation");
      var s = this, l = s.props, c = s.context, u = !l.forPrint && En(c.options), f = !l.forPrint && Zu(c.options), v = [];
      return r && v.push({
        type: "header",
        key: "header",
        isSticky: u,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: r
        }]
      }), v.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunks: [{
          key: "main",
          content: n
        }]
      }), f && v.push({
        type: "footer",
        key: "footer",
        isSticky: !0,
        chunks: [{
          key: "main",
          content: ju
        }]
      }), m(Gt, { viewSpec: c.viewSpec }, function(d, p) {
        return m(
          "div",
          { ref: d, className: ["fc-daygrid"].concat(p).join(" ") },
          m(o, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: a, minWidth: i }] }], sections: v })
        );
      });
    }, e;
  }(Re)
);
function Ge(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var a = 0, i = t; a < i.length; a++) {
    var o = i[a];
    r[o.row].push(o);
  }
  return r;
}
function qe(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var a = 0, i = t; a < i.length; a++) {
    var o = i[a];
    r[o.firstCol].push(o);
  }
  return r;
}
function bn(t, e) {
  var r = [];
  if (t) {
    for (var n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (var a = 0, i = t.segs; a < i.length; a++) {
      var o = i[a];
      r[o.row].segs.push(o);
    }
  } else
    for (var n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
var pc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = fr(this.context, r.date);
      return m(za, { date: r.date, dateProfile: r.dateProfile, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, defaultContent: hc }, function(a, i) {
        return (i || r.forceDayTop) && m(
          "div",
          { className: "fc-daygrid-day-top", ref: a },
          m("a", h({ id: r.dayNumberId, className: "fc-daygrid-day-number" }, n), i || m(B, null, " "))
        );
      });
    }, e;
  }(x)
);
function hc(t) {
  return t.dayNumberText;
}
var Ya = V({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function ja(t) {
  var e = t.eventRange.ui.display;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
var Za = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props;
      return m($u, h({}, r, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Ya, defaultDisplayEventEnd: r.defaultDisplayEventEnd, disableResizing: !r.seg.eventRange.def.allDay }));
    }, e;
  }(x)
), Xa = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context, i = a.options.eventTimeFormat || Ya, o = ra(n.seg, i, a, !0, n.defaultDisplayEventEnd);
      return m(Er, { seg: n.seg, timeText: o, defaultContent: gc, isDragging: n.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(s, l, c, u) {
        return (
          // we don't use styles!
          m("a", h({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: s }, na(n.seg, a)), u)
        );
      });
    }, e;
  }(x)
);
function gc(t) {
  return m(
    B,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m("div", { className: "fc-event-title" }, t.event.title || m(B, null, " "))
  );
}
var mc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.compileSegs = M(yc), r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = this.compileSegs(r.singlePlacements), a = n.allSegs, i = n.invisibleSegs;
      return m(oc, { dateProfile: r.dateProfile, todayRange: r.todayRange, allDayDate: r.allDayDate, moreCnt: r.moreCnt, allSegs: a, hiddenSegs: i, alignmentElRef: r.alignmentElRef, alignGridTop: r.alignGridTop, extraDateSpan: r.extraDateSpan, popoverContent: function() {
        var o = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
        return m(B, null, a.map(function(s) {
          var l = s.eventRange.instance.instanceId;
          return m("div", { className: "fc-daygrid-event-harness", key: l, style: {
            visibility: o[l] ? "hidden" : ""
          } }, ja(s) ? m(Xa, h({ seg: s, isDragging: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))) : m(Za, h({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))));
        }));
      } }, function(o, s, l, c, u, f, v, d) {
        return m("a", h({ ref: o, className: ["fc-daygrid-more-link"].concat(s).join(" "), title: f, "aria-expanded": v, "aria-controls": d }, qn(u)), c);
      });
    }, e;
  }(x)
);
function yc(t) {
  for (var e = [], r = [], n = 0, a = t; n < a.length; n++) {
    var i = a[n];
    e.push(i.seg), i.isVisible || r.push(i.seg);
  }
  return { allSegs: e, invisibleSegs: r };
}
var Ec = V({ week: "narrow" }), Sc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.rootElRef = G(), r.state = {
        dayNumberId: ct()
      }, r.handleRootEl = function(n) {
        $(r.rootElRef, n), $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.context, a = r.props, i = r.state, o = r.rootElRef, s = a.date, l = a.dateProfile, c = fr(n, s, "week");
      return m(qa, { date: s, dateProfile: l, todayRange: a.todayRange, showDayNumber: a.showDayNumber, extraHookProps: a.extraHookProps, elRef: this.handleRootEl }, function(u, f, v, d) {
        return m(
          "td",
          h({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(f, a.extraClassNames || []).join(" ") }, v, a.extraDataAttrs, a.showDayNumber ? { "aria-labelledby": i.dayNumberId } : {}),
          m(
            "div",
            {
              className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
              ref: a.innerElRef
              /* different from hook system! RENAME */
            },
            a.showWeekNumber && m(rc, { date: s, defaultFormat: Ec }, function(p, E, S, g) {
              return m("a", h({ ref: p, className: ["fc-daygrid-week-number"].concat(E).join(" ") }, c), g);
            }),
            !d && m(pc, { date: s, dateProfile: l, showDayNumber: a.showDayNumber, dayNumberId: i.dayNumberId, forceDayTop: a.forceDayTop, todayRange: a.todayRange, extraHookProps: a.extraHookProps }),
            m(
              "div",
              { className: "fc-daygrid-day-events", ref: a.fgContentElRef },
              a.fgContent,
              m(
                "div",
                { className: "fc-daygrid-day-bottom", style: { marginTop: a.moreMarginTop } },
                m(mc, { allDayDate: s, singlePlacements: a.singlePlacements, moreCnt: a.moreCnt, alignmentElRef: o, alignGridTop: !a.showDayNumber, extraDateSpan: a.extraDateSpan, dateProfile: a.dateProfile, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, todayRange: a.todayRange })
              )
            ),
            m("div", { className: "fc-daygrid-day-bg" }, a.bgContent)
          )
        );
      });
    }, e;
  }(Re)
);
function bc(t, e, r, n, a, i, o) {
  var s = new Rc();
  s.allowReslicing = !0, s.strictOrder = n, e === !0 || r === !0 ? (s.maxCoord = i, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof r == "number" && (s.maxStackCnt = r, s.hiddenConsumes = !0);
  for (var l = [], c = [], u = 0; u < t.length; u += 1) {
    var f = t[u], v = f.eventRange.instance.instanceId, d = a[v];
    d != null ? l.push({
      index: u,
      thickness: d,
      span: {
        start: f.firstCol,
        end: f.lastCol + 1
      }
    }) : c.push(f);
  }
  for (var p = s.addSegs(l), E = s.toRects(), S = Dc(E, t, o), g = S.singleColPlacements, b = S.multiColPlacements, C = S.leftoverMargins, D = [], I = [], _ = 0, P = c; _ < P.length; _++) {
    var f = P[_];
    b[f.firstCol].push({
      seg: f,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = f.firstCol; w <= f.lastCol; w += 1)
      g[w].push({
        seg: me(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    D.push(0);
  for (var N = 0, L = p; N < L.length; N++) {
    var Z = L[N], f = t[Z.index], z = Z.span;
    b[z.start].push({
      seg: me(f, z.start, z.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = z.start; w < z.end; w += 1)
      D[w] += 1, g[w].push({
        seg: me(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    I.push(C[w]);
  return { singleColPlacements: g, multiColPlacements: b, moreCnts: D, moreMarginTops: I };
}
function Dc(t, e, r) {
  for (var n = Cc(t, r.length), a = [], i = [], o = [], s = 0; s < r.length; s += 1) {
    for (var l = n[s], c = [], u = 0, f = 0, v = 0, d = l; v < d.length; v++) {
      var p = d[v], E = e[p.index];
      c.push({
        seg: me(E, s, s + 1, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: p.levelCoord - u
      }), u = p.levelCoord + p.thickness;
    }
    var S = [];
    u = 0, f = 0;
    for (var g = 0, b = l; g < b.length; g++) {
      var p = b[g], E = e[p.index], C = p.span.end - p.span.start > 1, D = p.span.start === s;
      f += p.levelCoord - u, u = p.levelCoord + p.thickness, C ? (f += p.thickness, D && S.push({
        seg: me(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: p.levelCoord,
        marginTop: 0
      })) : D && (S.push({
        seg: me(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: f
        // claim the margin
      }), f = 0);
    }
    a.push(c), i.push(S), o.push(f);
  }
  return { singleColPlacements: a, multiColPlacements: i, leftoverMargins: o };
}
function Cc(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r.push([]);
  for (var a = 0, i = t; a < i.length; a++)
    for (var o = i[a], n = o.span.start; n < o.span.end; n += 1)
      r[n].push(o);
  return r;
}
function me(t, e, r, n) {
  if (t.firstCol === e && t.lastCol === r - 1)
    return t;
  var a = t.eventRange, i = a.range, o = Ae(i, {
    start: n[e].date,
    end: W(n[r - 1].date, 1)
  });
  return h(h({}, t), { firstCol: e, lastCol: r - 1, eventRange: {
    def: a.def,
    ui: h(h({}, a.ui), { durationEditable: !1 }),
    instance: a.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === i.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === i.end.valueOf() });
}
var Rc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.hiddenConsumes = !1, r.forceHidden = {}, r;
    }
    return e.prototype.addSegs = function(r) {
      for (var n = this, a = t.prototype.addSegs.call(this, r), i = this.entriesByLevel, o = function(l) {
        return !n.forceHidden[Pe(l)];
      }, s = 0; s < i.length; s += 1)
        i[s] = i[s].filter(o);
      return a;
    }, e.prototype.handleInvalidInsertion = function(r, n, a) {
      var i = this, o = i.entriesByLevel, s = i.forceHidden, l = r.touchingEntry, c = r.touchingLevel, u = r.touchingLateral;
      if (this.hiddenConsumes && l) {
        var f = Pe(l);
        if (!s[f])
          if (this.allowReslicing) {
            var v = h(h({}, l), { span: xa(l.span, n.span) }), d = Pe(v);
            s[d] = !0, o[c][u] = v, this.splitEntry(l, n, a);
          } else
            s[f] = !0, a.push(l);
      }
      return t.prototype.handleInvalidInsertion.call(this, r, n, a);
    }, e;
  }(du)
), $a = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.cellElRefs = new ie(), r.frameElRefs = new ie(), r.fgElRefs = new ie(), r.segHarnessRefs = new ie(), r.rootElRef = G(), r.state = {
        framePositions: null,
        maxContentHeight: null,
        eventInstanceHeights: {}
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this, a = n.props, i = n.state, o = n.context, s = o.options, l = a.cells.length, c = qe(a.businessHourSegs, l), u = qe(a.bgEventSegs, l), f = qe(this.getHighlightSegs(), l), v = qe(this.getMirrorSegs(), l), d = bc($o(a.fgEventSegs, s.eventOrder), a.dayMaxEvents, a.dayMaxEventRows, s.eventOrderStrict, i.eventInstanceHeights, i.maxContentHeight, a.cells), p = d.singleColPlacements, E = d.multiColPlacements, S = d.moreCnts, g = d.moreMarginTops, b = (
        // TODO: messy way to compute this
        a.eventDrag && a.eventDrag.affectedInstances || a.eventResize && a.eventResize.affectedInstances || {}
      );
      return m(
        "tr",
        { ref: this.rootElRef, role: "row" },
        a.renderIntro && a.renderIntro(),
        a.cells.map(function(C, D) {
          var I = r.renderFgSegs(D, a.forPrint ? p[D] : E[D], a.todayRange, b), _ = r.renderFgSegs(D, wc(v[D], E), a.todayRange, {}, !!a.eventDrag, !!a.eventResize, !1);
          return m(Sc, { key: C.key, elRef: r.cellElRefs.createRef(C.key), innerElRef: r.frameElRefs.createRef(C.key), dateProfile: a.dateProfile, date: C.date, showDayNumber: a.showDayNumbers, showWeekNumber: a.showWeekNumbers && D === 0, forceDayTop: a.showWeekNumbers, todayRange: a.todayRange, eventSelection: a.eventSelection, eventDrag: a.eventDrag, eventResize: a.eventResize, extraHookProps: C.extraHookProps, extraDataAttrs: C.extraDataAttrs, extraClassNames: C.extraClassNames, extraDateSpan: C.extraDateSpan, moreCnt: S[D], moreMarginTop: g[D], singlePlacements: p[D], fgContentElRef: r.fgElRefs.createRef(C.key), fgContent: (
            // Fragment scopes the keys
            m(
              B,
              null,
              m(B, null, I),
              m(B, null, _)
            )
          ), bgContent: (
            // Fragment scopes the keys
            m(
              B,
              null,
              r.renderFillSegs(f[D], "highlight"),
              r.renderFillSegs(c[D], "non-business"),
              r.renderFillSegs(u[D], "bg-event")
            )
          ) });
        })
      );
    }, e.prototype.componentDidMount = function() {
      this.updateSizing(!0);
    }, e.prototype.componentDidUpdate = function(r, n) {
      var a = this.props;
      this.updateSizing(!X(r, a));
    }, e.prototype.getHighlightSegs = function() {
      var r = this.props;
      return r.eventDrag && r.eventDrag.segs.length ? r.eventDrag.segs : r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : r.dateSelectionSegs;
    }, e.prototype.getMirrorSegs = function() {
      var r = this.props;
      return r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : [];
    }, e.prototype.renderFgSegs = function(r, n, a, i, o, s, l) {
      var c = this.context, u = this.props.eventSelection, f = this.state.framePositions, v = this.props.cells.length === 1, d = o || s || l, p = [];
      if (f)
        for (var E = 0, S = n; E < S.length; E++) {
          var g = S[E], b = g.seg, C = b.eventRange.instance.instanceId, D = C + ":" + r, I = g.isVisible && !i[C], _ = g.isAbsolute, P = "", w = "";
          _ && (c.isRtl ? (w = 0, P = f.lefts[b.lastCol] - f.lefts[b.firstCol]) : (P = 0, w = f.rights[b.firstCol] - f.rights[b.lastCol])), p.push(m("div", { className: "fc-daygrid-event-harness" + (_ ? " fc-daygrid-event-harness-abs" : ""), key: D, ref: d ? null : this.segHarnessRefs.createRef(D), style: {
            visibility: I ? "" : "hidden",
            marginTop: _ ? "" : g.marginTop,
            top: _ ? g.absoluteTop : "",
            left: P,
            right: w
          } }, ja(b) ? m(Xa, h({ seg: b, isDragging: o, isSelected: C === u, defaultDisplayEventEnd: v }, Ie(b, a))) : m(Za, h({ seg: b, isDragging: o, isResizing: s, isDateSelecting: l, isSelected: C === u, defaultDisplayEventEnd: v }, Ie(b, a)))));
        }
      return p;
    }, e.prototype.renderFillSegs = function(r, n) {
      var a = this.context.isRtl, i = this.props.todayRange, o = this.state.framePositions, s = [];
      if (o)
        for (var l = 0, c = r; l < c.length; l++) {
          var u = c[l], f = a ? {
            right: 0,
            left: o.lefts[u.lastCol] - o.lefts[u.firstCol]
          } : {
            left: 0,
            right: o.rights[u.firstCol] - o.rights[u.lastCol]
          };
          s.push(m("div", { key: rs(u.eventRange), className: "fc-daygrid-bg-harness", style: f }, n === "bg-event" ? m(ec, h({ seg: u }, Ie(u, i))) : Qu(n)));
        }
      return m.apply(void 0, A([B, {}], s));
    }, e.prototype.updateSizing = function(r) {
      var n = this, a = n.props, i = n.frameElRefs;
      if (!a.forPrint && a.clientWidth !== null) {
        if (r) {
          var o = a.cells.map(function(f) {
            return i.currentMap[f.key];
          });
          if (o.length) {
            var s = this.rootElRef.current;
            this.setState({
              framePositions: new Ft(
                s,
                o,
                !0,
                // isHorizontal
                !1
              )
            });
          }
        }
        var l = this.state.eventInstanceHeights, c = this.queryEventInstanceHeights(), u = a.dayMaxEvents === !0 || a.dayMaxEventRows === !0;
        this.safeSetState({
          // HACK to prevent oscillations of events being shown/hidden from max-event-rows
          // Essentially, once you compute an element's height, never null-out.
          // TODO: always display all events, as visibility:hidden?
          eventInstanceHeights: h(h({}, l), c),
          maxContentHeight: u ? this.computeMaxContentHeight() : null
        });
      }
    }, e.prototype.queryEventInstanceHeights = function() {
      var r = this.segHarnessRefs.currentMap, n = {};
      for (var a in r) {
        var i = Math.round(r[a].getBoundingClientRect().height), o = a.split(":")[0];
        n[o] = Math.max(n[o] || 0, i);
      }
      return n;
    }, e.prototype.computeMaxContentHeight = function() {
      var r = this.props.cells[0].key, n = this.cellElRefs.currentMap[r], a = this.fgElRefs.currentMap[r];
      return n.getBoundingClientRect().bottom - a.getBoundingClientRect().top;
    }, e.prototype.getCellEls = function() {
      var r = this.cellElRefs.currentMap;
      return this.props.cells.map(function(n) {
        return r[n.key];
      });
    }, e;
  }(Re)
);
$a.addStateEquality({
  eventInstanceHeights: X
});
function wc(t, e) {
  if (!t.length)
    return [];
  var r = Tc(e);
  return t.map(function(n) {
    return {
      seg: n,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: r[n.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function Tc(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++)
    for (var a = n[r], i = 0, o = a; i < o.length; i++) {
      var s = o[i];
      e[s.seg.eventRange.instance.instanceId] = s.absoluteTop;
    }
  return e;
}
var _c = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.splitBusinessHourSegs = M(Ge), r.splitBgEventSegs = M(Ge), r.splitFgEventSegs = M(Ge), r.splitDateSelectionSegs = M(Ge), r.splitEventDrag = M(bn), r.splitEventResize = M(bn), r.rowRefs = new ie(), r.handleRootEl = function(n) {
        r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
          el: n,
          isHitComboAllowed: r.props.isHitComboAllowed
        }) : r.context.unregisterInteractiveComponent(r);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props, a = n.dateProfile, i = n.dayMaxEventRows, o = n.dayMaxEvents, s = n.expandRows, l = n.cells.length, c = this.splitBusinessHourSegs(n.businessHourSegs, l), u = this.splitBgEventSegs(n.bgEventSegs, l), f = this.splitFgEventSegs(n.fgEventSegs, l), v = this.splitDateSelectionSegs(n.dateSelectionSegs, l), d = this.splitEventDrag(n.eventDrag, l), p = this.splitEventResize(n.eventResize, l), E = o === !0 || i === !0;
      E && !s && (E = !1, i = null, o = null);
      var S = [
        "fc-daygrid-body",
        E ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
        s ? "" : "fc-daygrid-body-natural"
        // will height of one row depend on the others?
      ];
      return m(
        "div",
        { className: S.join(" "), ref: this.handleRootEl, style: {
          // these props are important to give this wrapper correct dimensions for interactions
          // TODO: if we set it here, can we avoid giving to inner tables?
          width: n.clientWidth,
          minWidth: n.tableMinWidth
        } },
        m(La, { unit: "day" }, function(g, b) {
          return m(
            B,
            null,
            m(
              "table",
              { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                width: n.clientWidth,
                minWidth: n.tableMinWidth,
                height: s ? n.clientHeight : ""
              } },
              n.colGroupNode,
              m("tbody", { role: "presentation" }, n.cells.map(function(C, D) {
                return m($a, {
                  ref: r.rowRefs.createRef(D),
                  key: C.length ? C[0].date.toISOString() : D,
                  showDayNumbers: l > 1,
                  showWeekNumbers: n.showWeekNumbers,
                  todayRange: b,
                  dateProfile: a,
                  cells: C,
                  renderIntro: n.renderRowIntro,
                  businessHourSegs: c[D],
                  eventSelection: n.eventSelection,
                  bgEventSegs: u[D].filter(Mc),
                  fgEventSegs: f[D],
                  dateSelectionSegs: v[D],
                  eventDrag: d[D],
                  eventResize: p[D],
                  dayMaxEvents: o,
                  dayMaxEventRows: i,
                  clientWidth: n.clientWidth,
                  clientHeight: n.clientHeight,
                  forPrint: n.forPrint
                });
              }))
            )
          );
        })
      );
    }, e.prototype.prepareHits = function() {
      this.rowPositions = new Ft(
        this.rootEl,
        this.rowRefs.collect().map(function(r) {
          return r.getCellEls()[0];
        }),
        // first cell el in each row. TODO: not optimal
        !1,
        !0
      ), this.colPositions = new Ft(
        this.rootEl,
        this.rowRefs.currentMap[0].getCellEls(),
        // cell els in first row
        !0,
        // horizontal
        !1
      );
    }, e.prototype.queryHit = function(r, n) {
      var a = this, i = a.colPositions, o = a.rowPositions, s = i.leftToIndex(r), l = o.topToIndex(n);
      if (l != null && s != null) {
        var c = this.props.cells[l][s];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: h({ range: this.getCellRange(l, s), allDay: !0 }, c.extraDateSpan),
          dayEl: this.getCellEl(l, s),
          rect: {
            left: i.lefts[s],
            right: i.rights[s],
            top: o.tops[l],
            bottom: o.bottoms[l]
          },
          layer: 0
        };
      }
      return null;
    }, e.prototype.getCellEl = function(r, n) {
      return this.rowRefs.currentMap[r].getCellEls()[n];
    }, e.prototype.getCellRange = function(r, n) {
      var a = this.props.cells[r][n].date, i = W(a, 1);
      return { start: a, end: i };
    }, e;
  }(Re)
);
function Mc(t) {
  return t.eventRange.def.allDay;
}
var kc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.forceDayIfListItem = !0, r;
    }
    return e.prototype.sliceRange = function(r, n) {
      return n.sliceRange(r);
    }, e;
  }(Iu)
), Ic = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.slicer = new kc(), r.tableRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, a = r.context;
      return m(_c, h({ ref: this.tableRef }, this.slicer.sliceProps(n, n.dateProfile, n.nextDayThreshold, a, n.dayTableModel), { dateProfile: n.dateProfile, cells: n.dayTableModel.cells, colGroupNode: n.colGroupNode, tableMinWidth: n.tableMinWidth, renderRowIntro: n.renderRowIntro, dayMaxEvents: n.dayMaxEvents, dayMaxEventRows: n.dayMaxEventRows, showWeekNumbers: n.showWeekNumbers, expandRows: n.expandRows, headerAlignElRef: n.headerAlignElRef, clientWidth: n.clientWidth, clientHeight: n.clientHeight, forPrint: n.forPrint }));
    }, e;
  }(Re)
), Pc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.buildDayTableModel = M(Hc), r.headerRef = G(), r.tableRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.context, a = n.options, i = n.dateProfileGenerator, o = this.props, s = this.buildDayTableModel(o.dateProfile, i), l = a.dayHeaders && m(Tu, { ref: this.headerRef, dateProfile: o.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), c = function(u) {
        return m(Ic, { ref: r.tableRef, dateProfile: o.dateProfile, dayTableModel: s, businessHours: o.businessHours, dateSelection: o.dateSelection, eventStore: o.eventStore, eventUiBases: o.eventUiBases, eventSelection: o.eventSelection, eventDrag: o.eventDrag, eventResize: o.eventResize, nextDayThreshold: a.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: a.dayMaxEvents, dayMaxEventRows: a.dayMaxEventRows, showWeekNumbers: a.weekNumbers, expandRows: !o.isHeightAuto, headerAlignElRef: r.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: o.forPrint });
      };
      return a.dayMinWidth ? this.renderHScrollLayout(l, c, s.colCnt, a.dayMinWidth) : this.renderSimpleLayout(l, c);
    }, e;
  }(vc)
);
function Hc(t, e) {
  var r = new Mu(t.renderRange, e);
  return new ku(r, /year|month|week/.test(t.currentRangeUnit));
}
var xc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.buildRenderRange = function(r, n, a) {
      var i = this.props.dateEnv, o = t.prototype.buildRenderRange.call(this, r, n, a), s = o.start, l = o.end, c;
      if (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), c = i.startOfWeek(l), c.valueOf() !== l.valueOf() && (l = Yr(c, 1))), this.props.monthMode && this.props.fixedWeekCount) {
        var u = Math.ceil(
          // could be partial weeks due to hiddenDays
          Ji(s, l)
        );
        l = Yr(l, 6 - u);
      }
      return { start: s, end: l };
    }, e;
  }(Ra)
), Nc = te({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Pc,
      dateProfileGeneratorClass: xc
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
yr.touchMouseIgnoreWait = 500;
var Yt = 0, lt = 0, jt = !1, Sr = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(n) {
        if (!r.shouldIgnoreMouse() && Ac(n) && r.tryStart(n)) {
          var a = r.createEventFromMouse(n, !0);
          r.emitter.trigger("pointerdown", a), r.initScrollWatch(a), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp);
        }
      }, this.handleMouseMove = function(n) {
        var a = r.createEventFromMouse(n);
        r.recordCoords(a), r.emitter.trigger("pointermove", a);
      }, this.handleMouseUp = function(n) {
        document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(n)), r.cleanup();
      }, this.handleTouchStart = function(n) {
        if (r.tryStart(n)) {
          r.isTouchDragging = !0;
          var a = r.createEventFromTouch(n, !0);
          r.emitter.trigger("pointerdown", a), r.initScrollWatch(a);
          var i = n.target;
          r.shouldIgnoreMove || i.addEventListener("touchmove", r.handleTouchMove), i.addEventListener("touchend", r.handleTouchEnd), i.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0);
        }
      }, this.handleTouchMove = function(n) {
        var a = r.createEventFromTouch(n);
        r.recordCoords(a), r.emitter.trigger("pointermove", a);
      }, this.handleTouchEnd = function(n) {
        if (r.isDragging) {
          var a = n.target;
          a.removeEventListener("touchmove", r.handleTouchMove), a.removeEventListener("touchend", r.handleTouchEnd), a.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(n)), r.cleanup(), r.isTouchDragging = !1, Oc();
        }
      }, this.handleTouchScroll = function() {
        r.wasTouchScroll = !0;
      }, this.handleScroll = function(n) {
        if (!r.shouldIgnoreMove) {
          var a = window.pageXOffset - r.prevScrollX + r.prevPageX, i = window.pageYOffset - r.prevScrollY + r.prevPageY;
          r.emitter.trigger("pointermove", {
            origEvent: n,
            isTouch: r.isTouchDragging,
            subjectEl: r.subjectEl,
            pageX: a,
            pageY: i,
            deltaX: a - r.origPageX,
            deltaY: i - r.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new pt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Lc();
    }
    return t.prototype.destroy = function() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Vc();
    }, t.prototype.tryStart = function(e) {
      var r = this.querySubjectEl(e), n = e.target;
      return r && (!this.handleSelector || U(n, this.handleSelector)) ? (this.subjectEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
    }, t.prototype.cleanup = function() {
      jt = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
    }, t.prototype.querySubjectEl = function(e) {
      return this.selector ? U(e.target, this.selector) : this.containerEl;
    }, t.prototype.shouldIgnoreMouse = function() {
      return Yt || this.isTouchDragging;
    }, t.prototype.cancelTouchScroll = function() {
      this.isDragging && (jt = !0);
    }, t.prototype.initScrollWatch = function(e) {
      this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
    }, t.prototype.recordCoords = function(e) {
      this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
    }, t.prototype.destroyScrollWatch = function() {
      this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
    }, t.prototype.createEventFromMouse = function(e, r) {
      var n = 0, a = 0;
      return r ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, a = e.pageY - this.origPageY), {
        origEvent: e,
        isTouch: !1,
        subjectEl: this.subjectEl,
        pageX: e.pageX,
        pageY: e.pageY,
        deltaX: n,
        deltaY: a
      };
    }, t.prototype.createEventFromTouch = function(e, r) {
      var n = e.touches, a, i, o = 0, s = 0;
      return n && n.length ? (a = n[0].pageX, i = n[0].pageY) : (a = e.pageX, i = e.pageY), r ? (this.origPageX = a, this.origPageY = i) : (o = a - this.origPageX, s = i - this.origPageY), {
        origEvent: e,
        isTouch: !0,
        subjectEl: this.subjectEl,
        pageX: a,
        pageY: i,
        deltaX: o,
        deltaY: s
      };
    }, t;
  }()
);
function Ac(t) {
  return t.button === 0 && !t.ctrlKey;
}
function Oc() {
  Yt += 1, setTimeout(function() {
    Yt -= 1;
  }, yr.touchMouseIgnoreWait);
}
function Lc() {
  lt += 1, lt === 1 && window.addEventListener("touchmove", Ka, { passive: !1 });
}
function Vc() {
  lt -= 1, lt || window.removeEventListener("touchmove", Ka, { passive: !1 });
}
function Ka(t) {
  jt && t.preventDefault();
}
var Uc = (
  /** @class */
  function() {
    function t() {
      this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }
    return t.prototype.start = function(e, r, n) {
      this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = r - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
    }, t.prototype.handleMove = function(e, r) {
      this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = r - window.pageYOffset - this.origScreenY, this.updateElPosition();
    }, t.prototype.setIsVisible = function(e) {
      e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
    }, t.prototype.stop = function(e, r) {
      var n = this, a = function() {
        n.cleanup(), r();
      };
      e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
      (this.deltaX || this.deltaY) ? this.doRevertAnimation(a, this.revertDuration) : setTimeout(a, 0);
    }, t.prototype.doRevertAnimation = function(e, r) {
      var n = this.mirrorEl, a = this.sourceEl.getBoundingClientRect();
      n.style.transition = "top " + r + "ms,left " + r + "ms", _e(n, {
        left: a.left,
        top: a.top
      }), Wi(n, function() {
        n.style.transition = "", e();
      });
    }, t.prototype.cleanup = function() {
      this.mirrorEl && ($t(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
    }, t.prototype.updateElPosition = function() {
      this.sourceEl && this.isVisible && _e(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }, t.prototype.getMirrorEl = function() {
      var e = this.sourceElRect, r = this.mirrorEl;
      return r || (r = this.mirrorEl = this.sourceEl.cloneNode(!0), r.classList.add("fc-unselectable"), r.classList.add("fc-event-dragging"), _e(r, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: e.right - e.left,
        height: e.bottom - e.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      }), this.parentNode.appendChild(r)), r;
    }, t;
  }()
), Ja = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var a = t.call(this) || this;
      return a.handleScroll = function() {
        a.scrollTop = a.scrollController.getScrollTop(), a.scrollLeft = a.scrollController.getScrollLeft(), a.handleScrollChange();
      }, a.scrollController = r, a.doesListening = n, a.scrollTop = a.origScrollTop = r.getScrollTop(), a.scrollLeft = a.origScrollLeft = r.getScrollLeft(), a.scrollWidth = r.getScrollWidth(), a.scrollHeight = r.getScrollHeight(), a.clientWidth = r.getClientWidth(), a.clientHeight = r.getClientHeight(), a.clientRect = a.computeClientRect(), a.doesListening && a.getEventTarget().addEventListener("scroll", a.handleScroll), a;
    }
    return e.prototype.destroy = function() {
      this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }, e.prototype.getScrollTop = function() {
      return this.scrollTop;
    }, e.prototype.getScrollLeft = function() {
      return this.scrollLeft;
    }, e.prototype.setScrollTop = function(r) {
      this.scrollController.setScrollTop(r), this.doesListening || (this.scrollTop = Math.max(Math.min(r, this.getMaxScrollTop()), 0), this.handleScrollChange());
    }, e.prototype.setScrollLeft = function(r) {
      this.scrollController.setScrollLeft(r), this.doesListening || (this.scrollLeft = Math.max(Math.min(r, this.getMaxScrollLeft()), 0), this.handleScrollChange());
    }, e.prototype.getClientWidth = function() {
      return this.clientWidth;
    }, e.prototype.getClientHeight = function() {
      return this.clientHeight;
    }, e.prototype.getScrollWidth = function() {
      return this.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return this.scrollHeight;
    }, e.prototype.handleScrollChange = function() {
    }, e;
  }(vr)
), Qa = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      return t.call(this, new Xs(r), n) || this;
    }
    return e.prototype.getEventTarget = function() {
      return this.scrollController.el;
    }, e.prototype.computeClientRect = function() {
      return Gs(this.scrollController.el);
    }, e;
  }(Ja)
), Wc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      return t.call(this, new $s(), r) || this;
    }
    return e.prototype.getEventTarget = function() {
      return window;
    }, e.prototype.computeClientRect = function() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }, e.prototype.handleScrollChange = function() {
      this.clientRect = this.computeClientRect();
    }, e;
  }(Ja)
), Dn = typeof performance == "function" ? performance.now : Date.now, Bc = (
  /** @class */
  function() {
    function t() {
      var e = this;
      this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
        if (e.isAnimating) {
          var r = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
          if (r) {
            var n = Dn();
            e.handleSide(r, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n);
          } else
            e.isAnimating = !1;
        }
      };
    }
    return t.prototype.start = function(e, r, n) {
      this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, r));
    }, t.prototype.handleMove = function(e, r) {
      if (this.isEnabled) {
        var n = e - window.pageXOffset, a = r - window.pageYOffset, i = this.pointerScreenY === null ? 0 : a - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
        i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = a, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Dn()));
      }
    }, t.prototype.stop = function() {
      if (this.isEnabled) {
        this.isAnimating = !1;
        for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
          var n = r[e];
          n.destroy();
        }
        this.scrollCaches = null;
      }
    }, t.prototype.requestAnimation = function(e) {
      this.msSinceRequest = e, requestAnimationFrame(this.animate);
    }, t.prototype.handleSide = function(e, r) {
      var n = e.scrollCache, a = this.edgeThreshold, i = a - e.distance, o = (
        // the closer to the edge, the faster we scroll
        i * i / (a * a) * // quadratic
        this.maxVelocity * r
      ), s = 1;
      switch (e.name) {
        case "left":
          s = -1;
        case "right":
          n.setScrollLeft(n.getScrollLeft() + o * s);
          break;
        case "top":
          s = -1;
        case "bottom":
          n.setScrollTop(n.getScrollTop() + o * s);
          break;
      }
    }, t.prototype.computeBestEdge = function(e, r) {
      for (var n = this.edgeThreshold, a = null, i = this.scrollCaches || [], o = 0, s = i; o < s.length; o++) {
        var l = s[o], c = l.clientRect, u = e - c.left, f = c.right - e, v = r - c.top, d = c.bottom - r;
        u >= 0 && f >= 0 && v >= 0 && d >= 0 && (v <= n && this.everMovedUp && l.canScrollUp() && (!a || a.distance > v) && (a = { scrollCache: l, name: "top", distance: v }), d <= n && this.everMovedDown && l.canScrollDown() && (!a || a.distance > d) && (a = { scrollCache: l, name: "bottom", distance: d }), u <= n && this.everMovedLeft && l.canScrollLeft() && (!a || a.distance > u) && (a = { scrollCache: l, name: "left", distance: u }), f <= n && this.everMovedRight && l.canScrollRight() && (!a || a.distance > f) && (a = { scrollCache: l, name: "right", distance: f }));
      }
      return a;
    }, t.prototype.buildCaches = function(e) {
      return this.queryScrollEls(e).map(function(r) {
        return r === window ? new Wc(!1) : new Qa(r, !1);
      });
    }, t.prototype.queryScrollEls = function(e) {
      for (var r = [], n = 0, a = this.scrollQuery; n < a.length; n++) {
        var i = a[n];
        typeof i == "object" ? r.push(i) : r.push.apply(r, Array.prototype.slice.call(zn(e).querySelectorAll(i)));
      }
      return r;
    }, t;
  }()
), Ve = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var a = t.call(this, r) || this;
      a.containerEl = r, a.delay = null, a.minDistance = 0, a.touchScrollAllowed = !0, a.mirrorNeedsRevert = !1, a.isInteracting = !1, a.isDragging = !1, a.isDelayEnded = !1, a.isDistanceSurpassed = !1, a.delayTimeoutId = null, a.onPointerDown = function(o) {
        a.isDragging || (a.isInteracting = !0, a.isDelayEnded = !1, a.isDistanceSurpassed = !1, Bi(document.body), zi(document.body), o.isTouch || o.origEvent.preventDefault(), a.emitter.trigger("pointerdown", o), a.isInteracting && // not destroyed via pointerdown handler
        !a.pointer.shouldIgnoreMove && (a.mirror.setIsVisible(!1), a.mirror.start(o.subjectEl, o.pageX, o.pageY), a.startDelay(o), a.minDistance || a.handleDistanceSurpassed(o)));
      }, a.onPointerMove = function(o) {
        if (a.isInteracting) {
          if (a.emitter.trigger("pointermove", o), !a.isDistanceSurpassed) {
            var s = a.minDistance, l = void 0, c = o.deltaX, u = o.deltaY;
            l = c * c + u * u, l >= s * s && a.handleDistanceSurpassed(o);
          }
          a.isDragging && (o.origEvent.type !== "scroll" && (a.mirror.handleMove(o.pageX, o.pageY), a.autoScroller.handleMove(o.pageX, o.pageY)), a.emitter.trigger("dragmove", o));
        }
      }, a.onPointerUp = function(o) {
        a.isInteracting && (a.isInteracting = !1, Fi(document.body), Gi(document.body), a.emitter.trigger("pointerup", o), a.isDragging && (a.autoScroller.stop(), a.tryStopDrag(o)), a.delayTimeoutId && (clearTimeout(a.delayTimeoutId), a.delayTimeoutId = null));
      };
      var i = a.pointer = new Sr(r);
      return i.emitter.on("pointerdown", a.onPointerDown), i.emitter.on("pointermove", a.onPointerMove), i.emitter.on("pointerup", a.onPointerUp), n && (i.selector = n), a.mirror = new Uc(), a.autoScroller = new Bc(), a;
    }
    return e.prototype.destroy = function() {
      this.pointer.destroy(), this.onPointerUp({});
    }, e.prototype.startDelay = function(r) {
      var n = this;
      typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(function() {
        n.delayTimeoutId = null, n.handleDelayEnd(r);
      }, this.delay) : this.handleDelayEnd(r);
    }, e.prototype.handleDelayEnd = function(r) {
      this.isDelayEnded = !0, this.tryStartDrag(r);
    }, e.prototype.handleDistanceSurpassed = function(r) {
      this.isDistanceSurpassed = !0, this.tryStartDrag(r);
    }, e.prototype.tryStartDrag = function(r) {
      this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(r.pageX, r.pageY, this.containerEl), this.emitter.trigger("dragstart", r), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
    }, e.prototype.tryStopDrag = function(r) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, r));
    }, e.prototype.stopDrag = function(r) {
      this.isDragging = !1, this.emitter.trigger("dragend", r);
    }, e.prototype.setIgnoreMove = function(r) {
      this.pointer.shouldIgnoreMove = r;
    }, e.prototype.setMirrorIsVisible = function(r) {
      this.mirror.setIsVisible(r);
    }, e.prototype.setMirrorNeedsRevert = function(r) {
      this.mirrorNeedsRevert = r;
    }, e.prototype.setAutoScrollEnabled = function(r) {
      this.autoScroller.isEnabled = r;
    }, e;
  }(Na)
), Fc = (
  /** @class */
  function() {
    function t(e) {
      this.origRect = dr(e), this.scrollCaches = Ea(e).map(function(r) {
        return new Qa(r, !0);
      });
    }
    return t.prototype.destroy = function() {
      for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
        var n = r[e];
        n.destroy();
      }
    }, t.prototype.computeLeft = function() {
      for (var e = this.origRect.left, r = 0, n = this.scrollCaches; r < n.length; r++) {
        var a = n[r];
        e += a.origScrollLeft - a.getScrollLeft();
      }
      return e;
    }, t.prototype.computeTop = function() {
      for (var e = this.origRect.top, r = 0, n = this.scrollCaches; r < n.length; r++) {
        var a = n[r];
        e += a.origScrollTop - a.getScrollTop();
      }
      return e;
    }, t.prototype.isWithinClipping = function(e, r) {
      for (var n = { left: e, top: r }, a = 0, i = this.scrollCaches; a < i.length; a++) {
        var o = i[a];
        if (!zc(o.getEventTarget()) && !Hs(n, o.clientRect))
          return !1;
      }
      return !0;
    }, t;
  }()
);
function zc(t) {
  var e = t.tagName;
  return e === "HTML" || e === "BODY";
}
var gt = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(a) {
        var i = n.dragging;
        n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(a), n.initialHit || !n.requireInitial ? (i.setIgnoreMove(!1), n.emitter.trigger("pointerdown", a)) : i.setIgnoreMove(!0);
      }, this.handleDragStart = function(a) {
        n.emitter.trigger("dragstart", a), n.handleMove(a, !0);
      }, this.handleDragMove = function(a) {
        n.emitter.trigger("dragmove", a), n.handleMove(a);
      }, this.handlePointerUp = function(a) {
        n.releaseHits(), n.emitter.trigger("pointerup", a);
      }, this.handleDragEnd = function(a) {
        n.movingHit && n.emitter.trigger("hitupdate", null, !0, a), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", a);
      }, this.droppableStore = r, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new pt();
    }
    return t.prototype.processFirstCoord = function(e) {
      var r = { left: e.pageX, top: e.pageY }, n = r, a = e.subjectEl, i;
      a instanceof HTMLElement && (i = dr(a), n = xs(n, i));
      var o = this.initialHit = this.queryHitForOffset(n.left, n.top);
      if (o) {
        if (this.useSubjectCenter && i) {
          var s = ha(i, o.rect);
          s && (n = Ns(s));
        }
        this.coordAdjust = As(n, r);
      } else
        this.coordAdjust = { left: 0, top: 0 };
    }, t.prototype.handleMove = function(e, r) {
      var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      (r || !mt(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
    }, t.prototype.prepareHits = function() {
      this.offsetTrackers = fe(this.droppableStore, function(e) {
        return e.component.prepareHits(), new Fc(e.el);
      });
    }, t.prototype.releaseHits = function() {
      var e = this.offsetTrackers;
      for (var r in e)
        e[r].destroy();
      this.offsetTrackers = {};
    }, t.prototype.queryHitForOffset = function(e, r) {
      var n = this, a = n.droppableStore, i = n.offsetTrackers, o = null;
      for (var s in a) {
        var l = a[s].component, c = i[s];
        if (c && // wasn't destroyed mid-drag
        c.isWithinClipping(e, r)) {
          var u = c.computeLeft(), f = c.computeTop(), v = e - u, d = r - f, p = c.origRect, E = p.right - p.left, S = p.bottom - p.top;
          if (
            // must be within the element's bounds
            v >= 0 && v < E && d >= 0 && d < S
          ) {
            var g = l.queryHit(v, d, E, S);
            g && // make sure the hit is within activeRange, meaning it's not a dead cell
            vt(g.dateProfile.activeRange, g.dateSpan.range) && (!o || g.layer > o.layer) && (g.componentId = s, g.context = l.context, g.rect.left += u, g.rect.right += u, g.rect.top += f, g.rect.bottom += f, o = g);
          }
        }
      }
      return o;
    }, t;
  }()
);
function mt(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : os(t.dateSpan, e.dateSpan);
}
function ei(t, e) {
  for (var r = {}, n = 0, a = e.pluginHooks.datePointTransforms; n < a.length; n++) {
    var i = a[n];
    h(r, i(t, e));
  }
  return h(r, Gc(t, e.dateEnv)), r;
}
function Gc(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
var qc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.handlePointerDown = function(i) {
        var o = n.dragging, s = i.origEvent.target;
        o.setIgnoreMove(!n.component.isValidDateDownEl(s));
      }, n.handleDragEnd = function(i) {
        var o = n.component, s = n.dragging.pointer;
        if (!s.wasTouchScroll) {
          var l = n.hitDragging, c = l.initialHit, u = l.finalHit;
          if (c && u && mt(c, u)) {
            var f = o.context, v = h(h({}, ei(c.dateSpan, f)), { dayEl: c.dayEl, jsEvent: i.origEvent, view: f.viewApi || f.calendarApi.view });
            f.emitter.trigger("dateClick", v);
          }
        }
      }, n.dragging = new Ve(r.el), n.dragging.autoScroller.isEnabled = !1;
      var a = n.hitDragging = new gt(n.dragging, mr(r));
      return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e;
  }(Te)
), Yc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.dragSelection = null, n.handlePointerDown = function(l) {
        var c = n, u = c.component, f = c.dragging, v = u.context.options, d = v.selectable && u.isValidDateDownEl(l.origEvent.target);
        f.setIgnoreMove(!d), f.delay = l.isTouch ? jc(u) : null;
      }, n.handleDragStart = function(l) {
        n.component.context.calendarApi.unselect(l);
      }, n.handleHitUpdate = function(l, c) {
        var u = n.component.context, f = null, v = !1;
        if (l) {
          var d = n.hitDragging.initialHit, p = l.componentId === d.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(d, l);
          p || (f = Zc(d, l, u.pluginHooks.dateSelectionTransformers)), (!f || !Pu(f, l.dateProfile, u)) && (v = !0, f = null);
        }
        f ? u.dispatch({ type: "SELECT_DATES", selection: f }) : c || u.dispatch({ type: "UNSELECT_DATES" }), v ? Kt() : Jt(), c || (n.dragSelection = f);
      }, n.handlePointerUp = function(l) {
        n.dragSelection && (oa(n.dragSelection, l, n.component.context), n.dragSelection = null);
      };
      var a = r.component, i = a.context.options, o = n.dragging = new Ve(r.el);
      o.touchScrollAllowed = !1, o.minDistance = i.selectMinDistance || 0, o.autoScroller.isEnabled = i.dragScroll;
      var s = n.hitDragging = new gt(n.dragging, mr(r));
      return s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e;
  }(Te)
);
function jc(t) {
  var e = t.context.options, r = e.selectLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
function Zc(t, e, r) {
  var n = t.dateSpan, a = e.dateSpan, i = [
    n.range.start,
    n.range.end,
    a.range.start,
    a.range.end
  ];
  i.sort(Xi);
  for (var o = {}, s = 0, l = r; s < l.length; s++) {
    var c = l[s], u = c(t, e);
    if (u === !1)
      return null;
    u && h(o, u);
  }
  return o.range = { start: i[0], end: i[3] }, o.allDay = n.allDay, o;
}
var ti = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.subjectEl = null, n.subjectSeg = null, n.isDragging = !1, n.eventRange = null, n.relevantEvents = null, n.receivingContext = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(l) {
        var c = l.origEvent.target, u = n, f = u.component, v = u.dragging, d = v.mirror, p = f.context.options, E = f.context;
        n.subjectEl = l.subjectEl;
        var S = n.subjectSeg = be(l.subjectEl), g = n.eventRange = S.eventRange, b = g.instance.instanceId;
        n.relevantEvents = ar(E.getCurrentData().eventStore, b), v.minDistance = l.isTouch ? 0 : p.eventDragMinDistance, v.delay = // only do a touch delay if touch and this event hasn't been selected yet
        l.isTouch && b !== f.props.eventSelection ? $c(f) : null, p.fixedMirrorParent ? d.parentNode = p.fixedMirrorParent : d.parentNode = U(c, ".fc"), d.revertDuration = p.dragRevertDuration;
        var C = f.isValidSegDownEl(c) && !U(c, ".fc-event-resizer");
        v.setIgnoreMove(!C), n.isDragging = C && l.subjectEl.classList.contains("fc-event-draggable");
      }, n.handleDragStart = function(l) {
        var c = n.component.context, u = n.eventRange, f = u.instance.instanceId;
        l.isTouch ? f !== n.component.props.eventSelection && c.dispatch({ type: "SELECT_EVENT", eventInstanceId: f }) : c.dispatch({ type: "UNSELECT_EVENT" }), n.isDragging && (c.calendarApi.unselect(l), c.emitter.trigger("eventDragStart", {
          el: n.subjectEl,
          event: new O(c, u.def, u.instance),
          jsEvent: l.origEvent,
          view: c.viewApi
        }));
      }, n.handleHitUpdate = function(l, c) {
        if (n.isDragging) {
          var u = n.relevantEvents, f = n.hitDragging.initialHit, v = n.component.context, d = null, p = null, E = null, S = !1, g = {
            affectedEvents: u,
            mutatedEvents: Y(),
            isEvent: !0
          };
          if (l) {
            d = l.context;
            var b = d.options;
            v === d || b.editable && b.droppable ? (p = Xc(f, l, d.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (E = ur(u, d.getCurrentData().eventUiBases, p, d), g.mutatedEvents = E, Va(g, l.dateProfile, d) || (S = !0, p = null, E = null, g.mutatedEvents = Y()))) : d = null;
          }
          n.displayDrag(d, g), S ? Kt() : Jt(), c || (v === d && // TODO: write test for this
          mt(f, l) && (p = null), n.dragging.setMirrorNeedsRevert(!p), n.dragging.setMirrorIsVisible(!l || !zn(n.subjectEl).querySelector(".fc-event-mirror")), n.receivingContext = d, n.validMutation = p, n.mutatedRelevantEvents = E);
        }
      }, n.handlePointerUp = function() {
        n.isDragging || n.cleanup();
      }, n.handleDragEnd = function(l) {
        if (n.isDragging) {
          var c = n.component.context, u = c.viewApi, f = n, v = f.receivingContext, d = f.validMutation, p = n.eventRange.def, E = n.eventRange.instance, S = new O(c, p, E), g = n.relevantEvents, b = n.mutatedRelevantEvents, C = n.hitDragging.finalHit;
          if (n.clearDrag(), c.emitter.trigger("eventDragStop", {
            el: n.subjectEl,
            event: S,
            jsEvent: l.origEvent,
            view: u
          }), d) {
            if (v === c) {
              var D = new O(c, b.defs[p.defId], E ? b.instances[E.instanceId] : null);
              c.dispatch({
                type: "MERGE_EVENTS",
                eventStore: b
              });
              for (var I = {
                oldEvent: S,
                event: D,
                relatedEvents: se(b, c, E),
                revert: function() {
                  c.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: g
                    // the pre-change data
                  });
                }
              }, _ = {}, P = 0, w = c.getCurrentData().pluginHooks.eventDropTransformers; P < w.length; P++) {
                var N = w[P];
                h(_, N(d, c));
              }
              c.emitter.trigger("eventDrop", h(h(h({}, I), _), { el: l.subjectEl, delta: d.datesDelta, jsEvent: l.origEvent, view: u })), c.emitter.trigger("eventChange", I);
            } else if (v) {
              var L = {
                event: S,
                relatedEvents: se(g, c, E),
                revert: function() {
                  c.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: g
                  });
                }
              };
              c.emitter.trigger("eventLeave", h(h({}, L), { draggedEl: l.subjectEl, view: u })), c.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: g
              }), c.emitter.trigger("eventRemove", L);
              var Z = b.defs[p.defId], z = b.instances[E.instanceId], Ue = new O(v, Z, z);
              v.dispatch({
                type: "MERGE_EVENTS",
                eventStore: b
              });
              var We = {
                event: Ue,
                relatedEvents: se(b, v, z),
                revert: function() {
                  v.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: b
                  });
                }
              };
              v.emitter.trigger("eventAdd", We), l.isTouch && v.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: E.instanceId
              }), v.emitter.trigger("drop", h(h({}, ei(C.dateSpan, v)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: C.context.viewApi })), v.emitter.trigger("eventReceive", h(h({}, We), { draggedEl: l.subjectEl, view: C.context.viewApi }));
            }
          } else
            c.emitter.trigger("_noEventDrop");
        }
        n.cleanup();
      };
      var a = n.component, i = a.context.options, o = n.dragging = new Ve(r.el);
      o.pointer.selector = e.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = i.dragScroll;
      var s = n.hitDragging = new gt(n.dragging, qt);
      return s.useSubjectCenter = r.useEventCenter, s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), s.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e.prototype.displayDrag = function(r, n) {
      var a = this.component.context, i = this.receivingContext;
      i && i !== r && (i === a ? i.dispatch({
        type: "SET_EVENT_DRAG",
        state: {
          affectedEvents: n.affectedEvents,
          mutatedEvents: Y(),
          isEvent: !0
        }
      }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), r && r.dispatch({ type: "SET_EVENT_DRAG", state: n });
    }, e.prototype.clearDrag = function() {
      var r = this.component.context, n = this.receivingContext;
      n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), r !== n && r.dispatch({ type: "UNSET_EVENT_DRAG" });
    }, e.prototype.cleanup = function() {
      this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
    }, e.SELECTOR = ".fc-event-draggable, .fc-event-resizable", e;
  }(Te)
);
function Xc(t, e, r) {
  var n = t.dateSpan, a = e.dateSpan, i = n.range.start, o = a.range.start, s = {};
  n.allDay !== a.allDay && (s.allDay = a.allDay, s.hasEnd = e.context.options.allDayMaintainDuration, a.allDay && (i = H(i)));
  var l = he(i, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  l.milliseconds && (s.allDay = !1);
  for (var c = {
    datesDelta: l,
    standardProps: s
  }, u = 0, f = r; u < f.length; u++) {
    var v = f[u];
    v(c, t, e);
  }
  return c;
}
function $c(t) {
  var e = t.context.options, r = e.eventLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
var Kc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(s) {
        var l = n.component, c = n.querySegEl(s), u = be(c), f = n.eventRange = u.eventRange;
        n.dragging.minDistance = l.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && n.component.props.eventSelection !== f.instance.instanceId);
      }, n.handleDragStart = function(s) {
        var l = n.component.context, c = n.eventRange;
        n.relevantEvents = ar(l.getCurrentData().eventStore, n.eventRange.instance.instanceId);
        var u = n.querySegEl(s);
        n.draggingSegEl = u, n.draggingSeg = be(u), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
          el: u,
          event: new O(l, c.def, c.instance),
          jsEvent: s.origEvent,
          view: l.viewApi
        });
      }, n.handleHitUpdate = function(s, l, c) {
        var u = n.component.context, f = n.relevantEvents, v = n.hitDragging.initialHit, d = n.eventRange.instance, p = null, E = null, S = !1, g = {
          affectedEvents: f,
          mutatedEvents: Y(),
          isEvent: !0
        };
        if (s) {
          var b = s.componentId === v.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(v, s);
          b || (p = Jc(v, s, c.subjectEl.classList.contains("fc-event-resizer-start"), d.range));
        }
        p && (E = ur(f, u.getCurrentData().eventUiBases, p, u), g.mutatedEvents = E, Va(g, s.dateProfile, u) || (S = !0, p = null, E = null, g.mutatedEvents = null)), E ? u.dispatch({
          type: "SET_EVENT_RESIZE",
          state: g
        }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), S ? Kt() : Jt(), l || (p && mt(v, s) && (p = null), n.validMutation = p, n.mutatedRelevantEvents = E);
      }, n.handleDragEnd = function(s) {
        var l = n.component.context, c = n.eventRange.def, u = n.eventRange.instance, f = new O(l, c, u), v = n.relevantEvents, d = n.mutatedRelevantEvents;
        if (l.emitter.trigger("eventResizeStop", {
          el: n.draggingSegEl,
          event: f,
          jsEvent: s.origEvent,
          view: l.viewApi
        }), n.validMutation) {
          var p = new O(l, d.defs[c.defId], u ? d.instances[u.instanceId] : null);
          l.dispatch({
            type: "MERGE_EVENTS",
            eventStore: d
          });
          var E = {
            oldEvent: f,
            event: p,
            relatedEvents: se(d, l, u),
            revert: function() {
              l.dispatch({
                type: "MERGE_EVENTS",
                eventStore: v
                // the pre-change events
              });
            }
          };
          l.emitter.trigger("eventResize", h(h({}, E), { el: n.draggingSegEl, startDelta: n.validMutation.startDelta || k(0), endDelta: n.validMutation.endDelta || k(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", E);
        } else
          l.emitter.trigger("_noEventResize");
        n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null;
      };
      var a = r.component, i = n.dragging = new Ve(r.el);
      i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = a.context.options.dragScroll;
      var o = n.hitDragging = new gt(n.dragging, mr(r));
      return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragstart", n.handleDragStart), o.emitter.on("hitupdate", n.handleHitUpdate), o.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e.prototype.querySegEl = function(r) {
      return U(r.subjectEl, ".fc-event");
    }, e;
  }(Te)
);
function Jc(t, e, r, n) {
  var a = t.context.dateEnv, i = t.dateSpan.range.start, o = e.dateSpan.range.start, s = he(i, o, a, t.largeUnit);
  if (r) {
    if (a.add(n.start, s) < n.end)
      return { startDelta: s };
  } else if (a.add(n.end, s) > n.start)
    return { endDelta: s };
  return null;
}
var Qc = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(a) {
        a.jsEvent && (r.isRecentPointerDateSelect = !0);
      }, this.onDocumentPointerDown = function(a) {
        var i = r.context.options.unselectCancel, o = Fn(a.origEvent);
        r.matchesCancel = !!U(o, i), r.matchesEvent = !!U(o, ti.SELECTOR);
      }, this.onDocumentPointerUp = function(a) {
        var i = r.context, o = r.documentPointer, s = i.getCurrentData();
        if (!o.wasTouchScroll) {
          if (s.dateSelection && // an existing date selection?
          !r.isRecentPointerDateSelect) {
            var l = i.options.unselectAuto;
            l && (!l || !r.matchesCancel) && i.calendarApi.unselect(a);
          }
          s.eventSelection && // an existing event selected?
          !r.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
        }
        r.isRecentPointerDateSelect = !1;
      };
      var n = this.documentPointer = new Sr(document);
      n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }
    return t.prototype.destroy = function() {
      this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    }, t;
  }()
), ef = {
  fixedMirrorParent: y
}, tf = {
  dateClick: y,
  eventDragStart: y,
  eventDragStop: y,
  eventDrop: y,
  eventResizeStart: y,
  eventResizeStop: y,
  eventResize: y,
  drop: y,
  eventReceive: y,
  eventLeave: y
};
yr.dataAttrPrefix = "";
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(i) {
      n.emitter.trigger("pointerdown", i), n.shouldIgnoreMove || n.emitter.trigger("dragstart", i);
    }, n.handlePointerMove = function(i) {
      n.shouldIgnoreMove || n.emitter.trigger("dragmove", i);
    }, n.handlePointerUp = function(i) {
      n.emitter.trigger("pointerup", i), n.shouldIgnoreMove || n.emitter.trigger("dragend", i);
    };
    var a = n.pointer = new Sr(r);
    return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("pointermove", n.handlePointerMove), a.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy();
  }, e.prototype.setIgnoreMove = function(r) {
    this.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    if (r)
      this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
    else {
      var n = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      n && (this.currentMirrorEl = n, n.style.visibility = "hidden");
    }
  }, e;
})(Na);
var rf = te({
  componentInteractions: [qc, Yc, ti, Kc],
  calendarInteractions: [Qc],
  elementDraggingImpl: Ve,
  optionRefiners: ef,
  listenerRefiners: tf
});
const nf = { id: "calendar" }, af = /* @__PURE__ */ ri({
  __name: "index",
  props: {
    // 日历上显示的语言
    local: {
      type: String,
      default: "zh-cn"
    },
    // 视图模式
    initalView: {
      type: String,
      default: "dayGridMonth"
    },
    // 按钮文字
    buttonText: {
      type: Object,
      default: () => ({
        today: "今天",
        month: "月",
        week: "周",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        pre: "上一月",
        next: "下一月"
      })
    },
    // 头部工具栏
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    // 底部工具栏
    footerToolbar: {
      type: Object
    },
    // 日历事件
    events: {
      type: Array,
      default: () => []
    },
    // 显示结束时间
    displayEventEnd: {
      type: Boolean,
      default: !1
    },
    // 自定义渲染内容
    eventContent: {
      type: Function
    }
  },
  emits: ["dateClick", "eventClick"],
  setup(t, { emit: e }) {
    const r = t, n = e;
    let a = ni();
    const i = () => {
      let o = document.getElementById("calendar");
      o && (console.log("触发"), a.value = new dc(o, {
        // 使用到的插件
        plugins: [Nc, rf],
        //视图模式
        initialView: r.initalView,
        // 语言
        locale: r.local,
        // 按钮文字
        buttonText: r.buttonText,
        // 头部工具栏
        headerToolbar: r.headerToolbar,
        // 底部工具栏
        footerToolbar: r.footerToolbar,
        // 事件源
        eventSources: [
          {
            events(s, l) {
              r.events.length ? l(r.events) : l([]);
            }
          }
        ],
        // 点击日历的某一天
        dateClick(s) {
          n("dateClick", s);
        },
        // 点击日历上的事件
        eventClick(s) {
          n("eventClick", s);
        },
        // 是否显示结束时间
        displayEventEnd: r.displayEventEnd,
        // 自定义渲染内容
        eventContent: r.eventContent
      }), a.value.render());
    };
    return ai(() => {
      i();
    }), (o, s) => (ii(), oi("div", nf));
  }
}), sf = {
  install(t) {
    t.component("my-calendar", af);
  }
};
export {
  sf as default
};
