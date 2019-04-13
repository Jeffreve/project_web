!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function o(e) {
        var t = pe[e] = {};
        return Z.each(e.match(fe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ye, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? Z.parseJSON(n) : n)
            } catch (e) {
            }
            me.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return K.activeElement
        } catch (e) {
        }
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (o = ge.access(e), s = ge.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) Z.event.add(t, i, l[i][n])
            }
            me.hasData(e) && (a = me.access(e), u = Z.extend({}, a), me.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r = Z(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : Z.css(r[0], "display");
        return r.detach(), i
    }

    function b(e) {
        var t = K, n = Me[e];
        return n || (n = x(e, t), "none" !== n && n || (Pe = (Pe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = x(e, t), Pe.detach()), Me[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || $e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), We.test(s) && Re.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ue.length; i--;) if ((t = Ue[i] + n) in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Z.css(e, n + be[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + be[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + be[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + be[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + be[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = $e(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = w(e, t, o), (i < 0 || null == i) && (i = e.style[t]), We.test(i)) return i;
            r = s && (J.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function D(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) r = e[s], r.style && (o[s] = ge.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && we(r) && (o[s] = ge.access(r, "olddisplay", b(r.nodeName)))) : o[s] || (i = we(r), (n && "none" !== n || !i) && ge.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; s < a; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function S() {
        return setTimeout(function () {
            Ve = void 0
        }), Ve = Z.now()
    }

    function A(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = be[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (Ze[t] || []).concat(Ze["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c = this, f = {}, p = e.style, d = e.nodeType && we(e), h = ge.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), "none" === l && (l = b(e.nodeName)), "inline" === l && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Ge.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                if ("show" !== i || !h || void 0 === h[r]) continue;
                d = !0
            }
            f[r] = h && h[r] || Z.style(e, r)
        }
        if (!Z.isEmptyObject(f)) {
            h ? "hidden" in h && (d = h.hidden) : h = ge.access(e, "fxshow", {}), o && (h.hidden = !d), d ? Z(e).show() : c.done(function () {
                Z(e).hide()
            }), c.done(function () {
                var t;
                ge.remove(e, "fxshow");
                for (t in f) Z.style(e, t, f[t])
            });
            for (r in f) s = L(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = Z.cssHooks[r]) && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0, s = Ke.length, a = Z.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = Ve || S(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ve || S(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); o < s; o++) if (r = Ke[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(fe) || [];
            if (Z.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, s = e === vt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function (t, i) {
            n || bt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== Z.type(t)) r(e, t); else for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var I = [], _ = I.slice, X = I.concat, z = I.push, U = I.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty,
        Q = "".trim, J = {}, K = e.document, Z = function (e, t) {
            return new Z.fn.init(e, t)
        }, ee = /^-ms-/, te = /-([\da-z])/gi, ne = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: "2.1.0", constructor: Z, selector: "", length: 0, toArray: function () {
            return _.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : _.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(_.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: z, sort: I.sort, splice: I.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        }, isPlainObject: function (e) {
            if ("object" !== Z.type(e) || e.nodeType || Z.isWindow(e)) return !1;
            try {
                if (e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            return !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(ee, "ms-").replace(te, ne)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i = 0, o = e.length, s = n(e);
            if (r) {
                if (s) for (; i < o && !1 !== t.apply(e[i], r); i++) ; else for (i in e) if (!1 === t.apply(e[i], r)) break
            } else if (s) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : Q.call(e)
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        }, map: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a) for (; o < s; o++) null != (i = t(e[o], o, r)) && u.push(i); else for (o in e) null != (i = t(e[o], o, r)) && u.push(i);
            return X.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e)) return r = _.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i
        }, now: Date.now, support: J
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, l, p, d, h, g, m;
            if ((t ? t.ownerDocument || t : R) !== A && S(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (q && !r) {
                if (i = me.exec(e)) if (s = i[1]) {
                    if (9 === a) {
                        if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && P(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!H || !H.test(e))) {
                    if (h = d = M, g = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (p = c(e), (d = t.getAttribute("id")) ? h = d.replace(ye, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = p.length; l--;) p[l] = h + f(p[l]);
                        g = ve.test(e) && u(t.parentNode) || t, m = p.join(",")
                    }
                    if (m) try {
                        return J.apply(n, g.querySelectorAll(m)), n
                    } catch (e) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && typeof e.getElementsByTagName !== z && e
        }

        function l() {
        }

        function c(e, n) {
            var r, i, o, s, a, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                r && !(i = ae.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ue.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : I(e, u).slice(0)
        }

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = $++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l = [W, o];
                if (s) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (u = t[M] || (t[M] = {}), (a = u[r]) && a[0] === W && a[1] === o) return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s)) return !0
                }
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function g(e, t, n, i, o, s) {
            return i && !i[M] && (i = g(i)), o && !o[M] && (o = g(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = [], d = [], g = s.length, m = r || y(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !r && t ? m : h(m, p, e, a, u), x = n ? o || (r ? e : g || i) ? [] : s : v;
                if (n && n(v, x, a, u), i) for (l = h(x, d), i(l, [], a, u), c = l.length; c--;) (f = l[c]) && (x[d[c]] = !(v[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;) (f = x[c]) && l.push(v[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;) (f = x[c]) && (l = o ? Z.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = h(x === s ? x.splice(g, x.length) : x), o ? o(null, s, x, u) : J.apply(s, x)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, s, !0), l = p(function (e) {
                return Z.call(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                return !o && (r || n !== E) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; a < i; a++) if (n = T.relative[e[a].type]) c = [p(d(c), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                    for (r = ++a; r < i && !T.relative[e[r].type]; r++) ;
                    return g(a > 1 && d(c), a > 1 && f(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(se, "$1"), n, a < r && m(e.slice(a, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                }
                c.push(n)
            }
            return d(c)
        }

        function v(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
                var c, f, p, d = 0, g = "0", m = r && [], v = [], y = E, x = r || o && T.find.TAG("*", l),
                    b = W += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (E = s !== A && s); g !== w && null != (c = x[g]); g++) {
                    if (o && c) {
                        for (f = 0; p = e[f++];) if (p(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (W = b)
                    }
                    i && ((c = !p && c) && d--, r && m.push(c))
                }
                if (d += g, i && g !== d) {
                    for (f = 0; p = n[f++];) p(m, v, s, a);
                    if (r) {
                        if (d > 0) for (; g--;) m[g] || v[g] || (v[g] = G.call(u));
                        v = h(v)
                    }
                    J.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b, E = y), m
            };
            return i ? r(s) : s
        }

        function y(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function x(e, t, n, r) {
            var i, o, s, a, l, p = c(e);
            if (!r && 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(xe, be), t) || [])[0])) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((l = T.find[a]) && (r = l(s.matches[0].replace(xe, be), ve.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return J.apply(n, r), n;
                    break
                }
            }
            return k(e, p)(r, t, !q, n, ve.test(e) && u(t.parentNode) || t), n
        }

        var b, w, T, C, N, k, E, D, j, S, A, L, q, H, O, F, P, M = "sizzle" + -new Date, R = e.document, W = 0, $ = 0,
            B = n(), I = n(), _ = n(), X = function (e, t) {
                return e === t && (j = !0), 0
            }, z = "undefined", U = 1 << 31, V = {}.hasOwnProperty, Y = [], G = Y.pop, Q = Y.push, J = Y.push, K = Y.slice,
            Z = Y.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            te = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ne.replace("w", "w#"),
            ie = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + te + "*\\]",
            oe = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
            se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            ae = new RegExp("^" + te + "*," + te + "*"), ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
            le = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"), ce = new RegExp(oe),
            fe = new RegExp("^" + re + "$"), pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
            }, de = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"), be = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            J.apply(Y = K.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: Y.length ? function (e, t) {
                    Q.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, S = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : R, r = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, L = n.documentElement, q = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                S()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                S()
            })), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(n.getElementsByClassName) && i(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function (e) {
                return L.appendChild(e).id = M, !n.getElementsByName || !n.getElementsByName(M).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== z && q) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(xe, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(xe, be);
                return function (e) {
                    var n = typeof e.getAttributeNode !== z && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== z) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== z && q) return t.getElementsByClassName(e)
            }, O = [], H = [], (w.qsa = ge.test(n.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = ge.test(F = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", oe)
            }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(L.compareDocumentPosition), P = t || ge.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === R && P(R, e) ? -1 : t === n || t.ownerDocument === R && P(R, t) ? 1 : D ? Z.call(D, e) - Z.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var r, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? Z.call(D, e) - Z.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, n) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && S(e), n = n.replace(le, "='$1']"), w.matchesSelector && q && (!O || !O.test(n)) && (!H || !H.test(n))) try {
                var r = F.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && S(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && S(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, be), e[3] = (e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ce.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[M] || (m[M] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [W, d, p];
                                    break
                                }
                            } else if (y && (l = (t[M] || (t[M] = {}))[e]) && l[0] === W) p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[M] || (f[M] = {}))[e] = [W, p]), f !== t));) ;
                            return (p -= i) === r || p % r == 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = Z.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(se, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === L
                }, focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return he.test(e.nodeName)
                }, input: function (e) {
                    return de.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: a(function () {
                    return [0]
                }), last: a(function (e, t) {
                    return [t - 1]
                }), eq: a(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: a(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: a(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: a(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: a(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[b] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in{submit: !0, reset: !0}) T.pseudos[b] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return l.prototype = T.filters = T.pseudos, T.setFilters = new l, k = t.compile = function (e, t) {
            var n, r = [], i = [], o = _[e + " "];
            if (!o) {
                for (t || (t = c(e)), n = t.length; n--;) o = m(t[n]), o[M] ? r.push(o) : i.push(o);
                o = _(e, v(i, r))
            }
            return o
        }, w.sortStable = M.split("").sort(X).join("") === M, w.detectDuplicates = !!j, S(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(ee, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = re, Z.expr = re.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = re.uniqueSort, Z.text = re.getText, Z.isXMLDoc = re.isXML, Z.contains = re.contains;
    var ie = Z.expr.match.needsContext, oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; t < n; t++) if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && ie.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ae, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function (e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ae).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), oe.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? void 0 !== ae.ready ? ae.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    }).prototype = Z.fn, ae = Z(K);
    var le = /^(?:parents|prev(?:Until|All))/, ce = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && Z(e).is(n)) break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (Z.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ie.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (ce[e] || Z.unique(i), le.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var fe = /\S+/g, pe = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? pe[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && a < s; a++) if (!1 === u[a].apply(o[0], o[1]) && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var n = u.length;
                    !function t(n) {
                        Z.each(n, function (n, r) {
                            var i = Z.type(r);
                            "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                        })
                    }(arguments), r ? s = u.length : t && (i = n, c(t))
                }
                return this
            }, remove: function () {
                return u && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], s = 0, this
            }, disable: function () {
                return u = l = t = void 0, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = void 0, t || f.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return Z.Deferred(function (n) {
                            Z.each(t, function (t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, Z.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var de;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== e && --Z.readyWait > 0 || (de.resolveWith(K, [Z]), Z.fn.trigger && Z(K).trigger("ready").off("ready")))
        }
    }), Z.ready.promise = function (t) {
        return de || (de = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), de.promise(t)
    }, Z.ready.promise();
    var he = Z.access = function (e, t, n, r, i, o, s) {
        var a = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(Z(e), n)
            })), t)) for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t) this.cache[o] = {}; else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(fe) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new a, me = new a, ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ye = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return me.hasData(e) || ge.hasData(e)
        }, data: function (e, t, n) {
            return me.access(e, t, n)
        }, removeData: function (e, t) {
            me.remove(e, t)
        }, _data: function (e, t, n) {
            return ge.access(e, t, n)
        }, _removeData: function (e, t) {
            ge.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = me.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r]));
                    ge.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                me.set(this, e)
            }) : he(this, function (t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (void 0 !== (n = me.get(o, e))) return n;
                    if (void 0 !== (n = me.get(o, r))) return n;
                    if (void 0 !== (n = u(o, r, void 0))) return n
                } else this.each(function () {
                    var n = me.get(this, r);
                    me.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                me.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || Z.isArray(n) ? r = ge.access(e, t, Z.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: Z.Callbacks("once memory").add(function () {
                    ge.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = ge.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, be = ["Top", "Right", "Bottom", "Left"],
        we = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        }, Te = /^(?:checkbox|radio)$/i;
    !function () {
        var e = K.createDocumentFragment(), t = e.appendChild(K.createElement("div"));
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>", J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    J.focusinBubbles = "onfocusin" in e;
    var Ce = /^key/, Ne = /^(?:mouse|contextmenu)|click/, ke = /^(?:focusinfocus|focusoutblur)$/,
        Ee = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ge.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return void 0 !== Z && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(fe) || [""], l = t.length; l--;) a = Ee.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ge.hasData(e) && ge.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(fe) || [""], l = t.length; l--;) if (a = Ee.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || Z.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ge.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || K], d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !ke.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, ke.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ge.get(s, "events") || {})[t.type] && ge.get(s, "handle"), c && c.apply(s, n), (c = l && s[l]) && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (ge.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (!0 !== u.disabled || "click" !== e.type) {
                for (r = [], n = 0; n < a; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ne.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== f() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === f() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        if (!(this instanceof Z.Event)) return new Z.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), this[Z.expando] = !0
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, Z.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || Z.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), J.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = ge.access(r, t);
                i || r.addEventListener(e, n, !0), ge.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = ge.access(r, t) - 1;
                i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = c; else if (!r) return this;
            return 1 === i && (o = r, r = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = c), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Z.event.trigger(e, t, n, !0)
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, je = /<([\w:]+)/,
        Se = /<|&#?\w+;/, Ae = /<(?:script|style|link)/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^$|\/(?:java|ecma)script/i, He = /^true\/(.*)/, Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, Z.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++) y(o[r], s[r]);
            if (t) if (n) for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++) m(o[r], s[r]); else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) if ((i = e[p]) || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i); else if (Se.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (je.exec(i) || ["", ""])[1].toLowerCase(), a = Fe[s] || Fe._default, o.innerHTML = a[1] + i.replace(De, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) qe.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function (e) {
            for (var t, n, r, i, o, s, a = Z.event.special, u = 0; void 0 !== (n = e[u]); u++) {
                if (Z.acceptData(n) && (o = n[ge.expando]) && (t = ge.cache[o])) {
                    if (r = Object.keys(t.events || {}), r.length) for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    ge.cache[o] && delete ge.cache[o]
                }
                delete me.cache[n[me.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return he(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    p(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return he(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !Fe[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(De, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = X.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !J.checkClone && Le.test(p)) return this.each(function (n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; u < l; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; u < o; u++) s = i[u], qe.test(s.type || "") && !ge.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Oe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Pe, Me = {}, Re = /^margin/, We = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), $e = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }

        var n, r, i = K.documentElement, o = K.createElement("div"), s = K.createElement("div");
        s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(s), e.getComputedStyle && Z.extend(J, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(K.createElement("div"));
                return n.style.cssText = s.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.innerHTML = "", t
            }
        })
    }(), Z.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var Be = /^(none|table(?!-c[ea]).+)/, Ie = new RegExp("^(" + xe + ")(.*)$", "i"),
        _e = new RegExp("^([+-])=(" + xe + ")", "i"),
        Xe = {position: "absolute", visibility: "hidden", display: "block"}, ze = {letterSpacing: 0, fontWeight: 400},
        Ue = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                if (t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                o = typeof n, "string" === o && (i = _e.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return 0 === e.offsetWidth && Be.test(Z.css(e, "display")) ? Z.swap(e, Xe, function () {
                    return E(e, t, r)
                }) : E(e, t, r)
            }, set: function (e, n, r) {
                var i = r && $e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(J.reliableMarginRight, function (e, t) {
        if (t) return Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"])
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + be[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Re.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function (e, t) {
            return he(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = $e(e), i = t.length; s < i; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return D(this, !0)
        }, hide: function () {
            return D(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                we(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Ve, Ye, Ge = /^(?:toggle|show|hide)$/, Qe = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        Je = /queueHooks$/, Ke = [q], Ze = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Qe.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Qe.exec(Z.css(n.elem, e)), a = 1, u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do {
                        a = a || ".5", s /= a, Z.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(O, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ze[n] = Ze[n] || [], Ze[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Ke.unshift(e) : Ke.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(we).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
                var t = O(this, Z.extend({}, e), o);
                (i || ge.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = ge.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && Je.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = ge.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Ve = Z.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Ve = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e),
            e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Ye || (Ye = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Ye), Ye = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = K.createElement("input"), t = K.createElement("select"), n = t.appendChild(K.createElement("option"));
        e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
    }();
    var et, tt = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return he(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? et : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(fe);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), et = {
        set: function (e, t, n) {
            return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = tt[t] || Z.find.attr;
        tt[t] = function (e, t, r) {
            var i, o;
            return r || (o = tt[t], tt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, tt[t] = o), i
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return he(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || nt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(fe) || []; u < l; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(fe) || []; u < l; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var t, r = 0, i = Z(this), o = e.match(fe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else "undefined" !== n && "boolean" !== n || (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(rt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var it = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = Z.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(it, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++) if (n = r[u], (n.selected || u === i) && (J.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(Z(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                if (Z.isArray(t)) return e.checked = Z.inArray(Z(e).val(), t) >= 0
            }
        }, J.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ot = Z.now(), st = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
    };
    var at, ut, lt = /#.*$/, ct = /([?&])_=[^&]*/, ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, dt = /^(?:GET|HEAD)$/, ht = /^\/\//,
        gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, mt = {}, vt = {}, yt = "*/".concat("*");
    try {
        ut = location.href
    } catch (e) {
        ut = K.createElement("a"), ut.href = "", ut = ut.href
    }
    at = gt.exec(ut.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut,
            type: "GET",
            isLocal: pt.test(at[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(mt),
        ajaxTransport: F(vt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), (b = w.getResponseHeader("etag")) && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(),
                g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s) for (s = {}; t = ft.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? o : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (x < 2) for (t in e) m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || ut) + "").replace(lt, "").replace(ht, at[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(fe) || [""], null == f.crossDomain && (u = gt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === at[1] && u[2] === at[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (at[3] || ("http:" === at[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(mt, f, t, w), 2 === x) return w;
            l = f.global, l && 0 == Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !dt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (st.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ct.test(i) ? i.replace(ct, "$1_=" + ot++) : i + (st.test(i) ? "&" : "?") + "_=" + ot++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x)) return w.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1}) w[c](f[c]);
            if (r = P(vt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var xt = /%20/g, bt = /\[\]$/, wt = /\r?\n/g, Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(xt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !Te.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(wt, "\r\n")}
                }) : {name: t.name, value: n.replace(wt, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Nt = 0, kt = {}, Et = {0: 200, 1223: 204}, Dt = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function () {
        for (var e in kt) kt[e]()
    }), J.cors = !!Dt && "withCredentials" in Dt, J.ajax = Dt = !!Dt, Z.ajaxTransport(function (e) {
        var t;
        if (J.cors || Dt && !e.crossDomain) return {
            send: function (n, r) {
                var i, o = e.xhr(), s = ++Nt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete kt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Et[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = kt[s] = t("abort"), o.send(e.hasContent && e.data || null)
            }, abort: function () {
                t && t()
            }
        }
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var jt = [], St = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = jt.pop() || Z.expando + "_" + ot++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s,
            a = !1 !== t.jsonp && (St.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && St.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(St, "$1" + i) : !1 !== t.jsonp && (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, jt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var r = oe.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var At = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Lt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Lt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Lt
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return he(this, function (t, i, o) {
                var s = B(t);
                if (void 0 === o) return s ? s[n] : t[i];
                s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(J.pixelPosition, function (e, n) {
            if (n) return n = w(e, t), We.test(n) ? Z(e).position()[t] + "px" : n
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                return he(this, function (t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var qt = e.jQuery, Ht = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Ht), t && e.jQuery === Z && (e.jQuery = qt), Z
    }, void 0 === t && (e.jQuery = e.$ = Z), Z
});
(function () {
    function n(n, r, t) {
        for (var e = (t || 0) - 1, o = n ? n.length : 0; ++e < o;) if (n[e] === r) return e;
        return -1
    }

    function r(r, t) {
        var e = typeof t;
        if (r = r.cache, "boolean" == e || null == t) return r[t] ? 0 : -1;
        "number" != e && "string" != e && (e = "object");
        var o = "number" == e ? t : _ + t;
        return r = (r = r[e]) && r[o], "object" == e ? r && n(r, t) > -1 ? 0 : -1 : r ? 0 : -1
    }

    function t(n) {
        var r = this.cache, t = typeof n;
        if ("boolean" == t || null == n) r[n] = !0; else {
            "number" != t && "string" != t && (t = "object");
            var e = "number" == t ? n : _ + n, o = r[t] || (r[t] = {});
            "object" == t ? (o[e] || (o[e] = [])).push(n) : o[e] = !0
        }
    }

    function e(n) {
        return n.charCodeAt(0)
    }

    function o(n, r) {
        for (var t = n.criteria, e = r.criteria, o = -1, a = t.length; ++o < a;) {
            var u = t[o], i = e[o];
            if (u !== i) {
                if (u > i || void 0 === u) return 1;
                if (u < i || void 0 === i) return -1
            }
        }
        return n.index - r.index
    }

    function a(n) {
        var r = -1, e = n.length, o = n[0], a = n[e / 2 | 0], u = n[e - 1];
        if (o && "object" == typeof o && a && "object" == typeof a && u && "object" == typeof u) return !1;
        var i = l();
        i.false = i.null = i.true = i.undefined = !1;
        var c = l();
        for (c.array = n, c.cache = i, c.push = t; ++r < e;) c.push(n[r]);
        return c
    }

    function u(n) {
        return "\\" + Z[n]
    }

    function i() {
        return g.pop() || []
    }

    function l() {
        return y.pop() || {
            array: null,
            cache: null,
            criteria: null,
            false: !1,
            index: 0,
            null: !1,
            number: null,
            object: null,
            push: null,
            string: null,
            true: !1,
            undefined: !1,
            value: null
        }
    }

    function c(n) {
        return "function" != typeof n.toString && "string" == typeof(n + "")
    }

    function f(n) {
        n.length = 0, g.length < w && g.push(n)
    }

    function s(n) {
        var r = n.cache;
        r && s(r), n.array = n.cache = n.criteria = n.object = n.number = n.string = n.value = null, y.length < w && y.push(n)
    }

    function p(n, r, t) {
        r || (r = 0), void 0 === t && (t = n ? n.length : 0);
        for (var e = -1, o = t - r || 0, a = Array(o < 0 ? 0 : o); ++e < o;) a[e] = n[r + e];
        return a
    }

    function h(t) {
        function g(n) {
            return n && "object" == typeof n && !se(n) && Kt.call(n, "__wrapped__") ? n : new y(n)
        }

        function y(n, r) {
            this.__chain__ = !!r, this.__wrapped__ = n
        }

        function w(n) {
            function r() {
                if (e) {
                    var n = p(e);
                    Ut.apply(n, arguments)
                }
                if (this instanceof r) {
                    var a = rn(t.prototype), u = t.apply(a, n || arguments);
                    return Fn(u) ? u : a
                }
                return t.apply(o, n || arguments)
            }

            var t = n[0], e = n[2], o = n[4];
            return fe(r, n), r
        }

        function Z(n, r, t, e, o) {
            if (t) {
                var a = t(n);
                if (void 0 !== a) return a
            }
            if (!Fn(n)) return n;
            var u = $t.call(n);
            if (!G[u] || !le.nodeClass && c(n)) return n;
            var l = ue[u];
            switch (u) {
                case H:
                case W:
                    return new l(+n);
                case K:
                case V:
                    return new l(n);
                case M:
                    return a = l(n.source, O.exec(n)), a.lastIndex = n.lastIndex, a
            }
            var s = se(n);
            if (r) {
                var h = !e;
                e || (e = i()), o || (o = i());
                for (var v = e.length; v--;) if (e[v] == n) return o[v];
                a = s ? l(n.length) : {}
            } else a = s ? p(n) : xe({}, n);
            return s && (Kt.call(n, "index") && (a.index = n.index), Kt.call(n, "input") && (a.input = n.input)), r ? (e.push(n), o.push(a), (s ? we : Ce)(n, function (n, u) {
                a[u] = Z(n, r, t, e, o)
            }), h && (f(e), f(o)), a) : a
        }

        function rn(n, r) {
            return Fn(n) ? Xt(n) : {}
        }

        function tn(n, r, t) {
            if ("function" != typeof n) return at;
            if (void 0 === r || !("prototype" in n)) return n;
            var e = n.__bindData__;
            if (void 0 === e && (le.funcNames && (e = !n.name), !(e = e || !le.funcDecomp))) {
                var o = qt.call(n);
                le.funcNames || (e = !S.test(o)), e || (e = N.test(o), fe(n, e))
            }
            if (!1 === e || !0 !== e && 1 & e[1]) return n;
            switch (t) {
                case 1:
                    return function (t) {
                        return n.call(r, t)
                    };
                case 2:
                    return function (t, e) {
                        return n.call(r, t, e)
                    };
                case 3:
                    return function (t, e, o) {
                        return n.call(r, t, e, o)
                    };
                case 4:
                    return function (t, e, o, a) {
                        return n.call(r, t, e, o, a)
                    }
            }
            return qr(n, r)
        }

        function en(n) {
            function r() {
                var n = l ? u : this;
                if (o) {
                    var v = p(o);
                    Ut.apply(v, arguments)
                }
                if ((a || f) && (v || (v = p(arguments)), a && Ut.apply(v, a), f && v.length < i)) return e |= 16, en([t, s ? e : -4 & e, v, null, u, i]);
                if (v || (v = arguments), c && (t = n[h]), this instanceof r) {
                    n = rn(t.prototype);
                    var g = t.apply(n, v);
                    return Fn(g) ? g : n
                }
                return t.apply(n, v)
            }

            var t = n[0], e = n[1], o = n[2], a = n[3], u = n[4], i = n[5], l = 1 & e, c = 2 & e, f = 4 & e, s = 8 & e,
                h = t;
            return fe(r, n), r
        }

        function on(t, e) {
            var o = -1, u = yn(), i = t ? t.length : 0, l = i >= m && u === n, c = [];
            if (l) {
                var f = a(e);
                f ? (u = r, e = f) : l = !1
            }
            for (; ++o < i;) {
                var p = t[o];
                u(e, p) < 0 && c.push(p)
            }
            return l && s(e), c
        }

        function un(n, r, t, e) {
            for (var o = (e || 0) - 1, a = n ? n.length : 0, u = []; ++o < a;) {
                var i = n[o];
                if (i && "object" == typeof i && "number" == typeof i.length && (se(i) || mn(i))) {
                    r || (i = un(i, r, t));
                    var l = -1, c = i.length, f = u.length;
                    for (u.length += c; ++l < c;) u[f++] = i[l]
                } else t || u.push(i)
            }
            return u
        }

        function ln(n, r, t, e, o, a) {
            if (t) {
                var u = t(n, r);
                if (void 0 !== u) return !!u
            }
            if (n === r) return 0 !== n || 1 / n == 1 / r;
            var l = typeof n, s = typeof r;
            if (!(n !== n || n && Y[l] || r && Y[s])) return !1;
            if (null == n || null == r) return n === r;
            var p = $t.call(n), h = $t.call(r);
            if (p == F && (p = U), h == F && (h = U), p != h) return !1;
            switch (p) {
                case H:
                case W:
                    return +n == +r;
                case K:
                    return n != +n ? r != +r : 0 == n ? 1 / n == 1 / r : n == +r;
                case M:
                case V:
                    return n == At(r)
            }
            var v = p == B;
            if (!v) {
                var g = Kt.call(n, "__wrapped__"), y = Kt.call(r, "__wrapped__");
                if (g || y) return ln(g ? n.__wrapped__ : n, y ? r.__wrapped__ : r, t, e, o, a);
                if (p != U || !le.nodeClass && (c(n) || c(r))) return !1;
                var b = !le.argsObject && mn(n) ? Ot : n.constructor, d = !le.argsObject && mn(r) ? Ot : r.constructor;
                if (b != d && !($n(b) && b instanceof b && $n(d) && d instanceof d) && "constructor" in n && "constructor" in r) return !1
            }
            var _ = !o;
            o || (o = i()), a || (a = i());
            for (var m = o.length; m--;) if (o[m] == n) return a[m] == r;
            var w = 0;
            if (u = !0, o.push(n), a.push(r), v) {
                if (m = n.length, w = r.length, (u = w == m) || e) for (; w--;) {
                    var x = m, j = r[w];
                    if (e) for (; x-- && !(u = ln(n[x], j, t, e, o, a));) ; else if (!(u = ln(n[w], j, t, e, o, a))) break
                }
            } else ke(r, function (r, i, l) {
                if (Kt.call(l, i)) return w++, u = Kt.call(n, i) && ln(n[i], r, t, e, o, a)
            }), u && !e && ke(n, function (n, r, t) {
                if (Kt.call(t, r)) return u = --w > -1
            });
            return o.pop(), a.pop(), _ && (f(o), f(a)), u
        }

        function cn(n, r, t, e, o) {
            (se(r) ? or : Ce)(r, function (r, a) {
                var u, i, l = r, c = n[a];
                if (r && ((i = se(r)) || Pe(r))) {
                    for (var f = e.length; f--;) if (u = e[f] == r) {
                        c = o[f];
                        break
                    }
                    if (!u) {
                        var s;
                        t && (l = t(c, r), (s = void 0 !== l) && (c = l)), s || (c = i ? se(c) ? c : [] : Pe(c) ? c : {}), e.push(r), o.push(c), s || cn(c, r, t, e, o)
                    }
                } else t && void 0 === (l = t(c, r)) && (l = r), void 0 !== l && (c = l);
                n[a] = c
            })
        }

        function fn(n, r) {
            return n + Wt(ae() * (r - n + 1))
        }

        function sn(t, e, o) {
            var u = -1, l = yn(), c = t ? t.length : 0, p = [], h = !e && c >= m && l === n, v = o || h ? i() : p;
            if (h) {
                var g = a(v);
                l = r, v = g
            }
            for (; ++u < c;) {
                var y = t[u], b = o ? o(y, u, t) : y;
                (e ? !u || v[v.length - 1] !== b : l(v, b) < 0) && ((o || h) && v.push(b), p.push(y))
            }
            return h ? (f(v.array), s(v)) : o && f(v), p
        }

        function pn(n) {
            return function (r, t, e) {
                var o = {};
                if (t = g.createCallback(t, e, 3), se(r)) for (var a = -1, u = r.length; ++a < u;) {
                    var i = r[a];
                    n(o, i, t(i, a, r), r)
                } else we(r, function (r, e, a) {
                    n(o, r, t(r, e, a), a)
                });
                return o
            }
        }

        function hn(n, r, t, e, o, a) {
            var u = 1 & r, i = 2 & r, l = 4 & r, c = 16 & r, f = 32 & r;
            if (!i && !$n(n)) throw new It;
            c && !t.length && (r &= -17, c = t = !1), f && !e.length && (r &= -33, f = e = !1);
            var s = n && n.__bindData__;
            return s && !0 !== s ? (s = p(s), s[2] && (s[2] = p(s[2])), s[3] && (s[3] = p(s[3])), !u || 1 & s[1] || (s[4] = o), !u && 1 & s[1] && (r |= 8), !l || 4 & s[1] || (s[5] = a), c && Ut.apply(s[2] || (s[2] = []), t), f && Jt.apply(s[3] || (s[3] = []), e), s[1] |= r, hn.apply(null, s)) : (1 == r || 17 === r ? w : en)([n, r, t, e, o, a])
        }

        function vn() {
            X.shadowedProps = D, X.array = X.bottom = X.loop = X.top = "", X.init = "iterable", X.useHas = !0;
            for (var n, r = 0; n = arguments[r]; r++) for (var t in n) X[t] = n[t];
            var e = X.args;
            return X.firstArg = /^[^,]+/.exec(e)[0], Ct("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + e + ") {\n" + ce(X) + "\n}")(tn, q, Nt, Kt, d, mn, se, zn, X.keys, Rt, Y, ie, V, Tt, $t)
        }

        function gn(n) {
            return be[n]
        }

        function yn() {
            var r = (r = g.indexOf) === Cr ? n : r;
            return r
        }

        function bn(n) {
            return "function" == typeof n && Ft.test(n)
        }

        function dn(n) {
            var r, t;
            return !(!(n && $t.call(n) == U && (r = n.constructor, !$n(r) || r instanceof r)) || !le.argsClass && mn(n) || !le.nodeClass && c(n)) && (le.ownLast ? (ke(n, function (n, r, e) {
                return t = Kt.call(e, r), !1
            }), !1 !== t) : (ke(n, function (n, r) {
                t = r
            }), void 0 === t || Kt.call(n, t)))
        }

        function _n(n) {
            return de[n]
        }

        function mn(n) {
            return n && "object" == typeof n && "number" == typeof n.length && $t.call(n) == F || !1
        }

        function wn(n, r, t, e) {
            return "boolean" != typeof r && null != r && (e = t, t = r, r = !1), Z(n, r, "function" == typeof t && tn(t, e, 1))
        }

        function xn(n, r, t) {
            return Z(n, !0, "function" == typeof r && tn(r, t, 1))
        }

        function jn(n, r) {
            var t = rn(n);
            return r ? xe(t, r) : t
        }

        function kn(n, r, t) {
            var e;
            return r = g.createCallback(r, t, 3), Ce(n, function (n, t, o) {
                if (r(n, t, o)) return e = t, !1
            }), e
        }

        function Cn(n, r, t) {
            var e;
            return r = g.createCallback(r, t, 3), En(n, function (n, t, o) {
                if (r(n, t, o)) return e = t, !1
            }), e
        }

        function Pn(n, r, t) {
            var e = [];
            ke(n, function (n, r) {
                e.push(r, n)
            });
            var o = e.length;
            for (r = tn(r, t, 3); o-- && !1 !== r(e[o--], e[o], n);) ;
            return n
        }

        function En(n, r, t) {
            var e = he(n), o = e.length;
            for (r = tn(r, t, 3); o--;) {
                var a = e[o];
                if (!1 === r(n[a], a, n)) break
            }
            return n
        }

        function On(n) {
            var r = [];
            return ke(n, function (n, t) {
                $n(n) && r.push(t)
            }), r.sort()
        }

        function Sn(n, r) {
            return !!n && Kt.call(n, r)
        }

        function An(n) {
            for (var r = -1, t = he(n), e = t.length, o = {}; ++r < e;) {
                var a = t[r];
                o[n[a]] = a
            }
            return o
        }

        function In(n) {
            return !0 === n || !1 === n || n && "object" == typeof n && $t.call(n) == H || !1
        }

        function Ln(n) {
            return n && "object" == typeof n && $t.call(n) == W || !1
        }

        function Nn(n) {
            return n && 1 === n.nodeType || !1
        }

        function Rn(n) {
            var r = !0;
            if (!n) return r;
            var t = $t.call(n), e = n.length;
            return t == B || t == V || (le.argsClass ? t == F : mn(n)) || t == U && "number" == typeof e && $n(n.splice) ? !e : (Ce(n, function () {
                return r = !1
            }), r)
        }

        function Tn(n, r, t, e) {
            return ln(n, r, "function" == typeof t && tn(t, e, 2))
        }

        function Dn(n) {
            return Zt(n) && !ne(parseFloat(n))
        }

        function $n(n) {
            return "function" == typeof n
        }

        function Fn(n) {
            return !(!n || !Y[typeof n])
        }

        function Bn(n) {
            return Wn(n) && n != +n
        }

        function Hn(n) {
            return null === n
        }

        function Wn(n) {
            return "number" == typeof n || n && "object" == typeof n && $t.call(n) == K || !1
        }

        function qn(n) {
            return n && Y[typeof n] && $t.call(n) == M || !1
        }

        function zn(n) {
            return "string" == typeof n || n && "object" == typeof n && $t.call(n) == V || !1
        }

        function Kn(n) {
            return void 0 === n
        }

        function Un(n, r, t) {
            var e = {};
            return r = g.createCallback(r, t, 3), Ce(n, function (n, t, o) {
                e[t] = r(n, t, o)
            }), e
        }

        function Mn(n) {
            var r = arguments, t = 2;
            if (!Fn(n)) return n;
            if ("number" != typeof r[2] && (t = r.length), t > 3 && "function" == typeof r[t - 2]) var e = tn(r[--t - 1], r[t--], 2); else t > 2 && "function" == typeof r[t - 1] && (e = r[--t]);
            for (var o = p(arguments, 1, t), a = -1, u = i(), l = i(); ++a < t;) cn(n, o[a], e, u, l);
            return f(u), f(l), n
        }

        function Vn(n, r, t) {
            var e = {};
            if ("function" != typeof r) {
                var o = [];
                ke(n, function (n, r) {
                    o.push(r)
                }), o = on(o, un(arguments, !0, !1, 1));
                for (var a = -1, u = o.length; ++a < u;) {
                    var i = o[a];
                    e[i] = n[i]
                }
            } else r = g.createCallback(r, t, 3), ke(n, function (n, t, o) {
                r(n, t, o) || (e[t] = n)
            });
            return e
        }

        function Gn(n) {
            for (var r = -1, t = he(n), e = t.length, o = wt(e); ++r < e;) {
                var a = t[r];
                o[r] = [a, n[a]]
            }
            return o
        }

        function Jn(n, r, t) {
            var e = {};
            if ("function" != typeof r) for (var o = -1, a = un(arguments, !0, !1, 1), u = Fn(n) ? a.length : 0; ++o < u;) {
                var i = a[o];
                i in n && (e[i] = n[i])
            } else r = g.createCallback(r, t, 3), ke(n, function (n, t, o) {
                r(n, t, o) && (e[t] = n)
            });
            return e
        }

        function Qn(n, r, t, e) {
            var o = se(n);
            if (null == t) if (o) t = []; else {
                var a = n && n.constructor, u = a && a.prototype;
                t = rn(u)
            }
            return r && (r = g.createCallback(r, e, 4), (o ? we : Ce)(n, function (n, e, o) {
                return r(t, n, e, o)
            })), t
        }

        function Xn(n) {
            for (var r = -1, t = he(n), e = t.length, o = wt(e); ++r < e;) o[r] = n[t[r]];
            return o
        }

        function Yn(n) {
            var r = arguments, t = -1, e = un(r, !0, !1, 1), o = r[2] && r[2][r[1]] === n ? 1 : e.length, a = wt(o);
            for (le.unindexedChars && zn(n) && (n = n.split("")); ++t < o;) a[t] = n[e[t]];
            return a
        }

        function Zn(n, r, t) {
            var e = -1, o = yn(), a = n ? n.length : 0, u = !1;
            return t = (t < 0 ? te(0, a + t) : t) || 0, se(n) ? u = o(n, r, t) > -1 : "number" == typeof a ? u = (zn(n) ? n.indexOf(r, t) : o(n, r, t)) > -1 : we(n, function (n) {
                if (++e >= t) return !(u = n === r)
            }), u
        }

        function nr(n, r, t) {
            var e = !0;
            if (r = g.createCallback(r, t, 3), se(n)) for (var o = -1, a = n.length; ++o < a && (e = !!r(n[o], o, n));) ; else we(n, function (n, t, o) {
                return e = !!r(n, t, o)
            });
            return e
        }

        function rr(n, r, t) {
            var e = [];
            if (r = g.createCallback(r, t, 3), se(n)) for (var o = -1, a = n.length; ++o < a;) {
                var u = n[o];
                r(u, o, n) && e.push(u)
            } else we(n, function (n, t, o) {
                r(n, t, o) && e.push(n)
            });
            return e
        }

        function tr(n, r, t) {
            if (r = g.createCallback(r, t, 3), !se(n)) {
                var e;
                return we(n, function (n, t, o) {
                    if (r(n, t, o)) return e = n, !1
                }), e
            }
            for (var o = -1, a = n.length; ++o < a;) {
                var u = n[o];
                if (r(u, o, n)) return u
            }
        }

        function er(n, r, t) {
            var e;
            return r = g.createCallback(r, t, 3), ar(n, function (n, t, o) {
                if (r(n, t, o)) return e = n, !1
            }), e
        }

        function or(n, r, t) {
            if (r && void 0 === t && se(n)) for (var e = -1, o = n.length; ++e < o && !1 !== r(n[e], e, n);) ; else we(n, r, t);
            return n
        }

        function ar(n, r, t) {
            var e = n, o = n ? n.length : 0;
            if (r = r && void 0 === t ? r : tn(r, t, 3), se(n)) for (; o-- && !1 !== r(n[o], o, n);) ; else {
                if ("number" != typeof o) {
                    var a = he(n);
                    o = a.length
                } else le.unindexedChars && zn(n) && (e = n.split(""));
                we(n, function (n, t, u) {
                    return t = a ? a[--o] : --o, r(e[t], t, u)
                })
            }
            return n
        }

        function ur(n, r) {
            var t = p(arguments, 2), e = -1, o = "function" == typeof r, a = n ? n.length : 0,
                u = wt("number" == typeof a ? a : 0);
            return or(n, function (n) {
                u[++e] = (o ? r : n[r]).apply(n, t)
            }), u
        }

        function ir(n, r, t) {
            var e = -1, o = n ? n.length : 0, a = wt("number" == typeof o ? o : 0);
            if (r = g.createCallback(r, t, 3), se(n)) for (; ++e < o;) a[e] = r(n[e], e, n); else we(n, function (n, t, o) {
                a[++e] = r(n, t, o)
            });
            return a
        }

        function lr(n, r, t) {
            var o = -1 / 0, a = o;
            if ("function" != typeof r && t && t[r] === n && (r = null), null == r && se(n)) for (var u = -1, i = n.length; ++u < i;) {
                var l = n[u];
                l > a && (a = l)
            } else r = null == r && zn(n) ? e : g.createCallback(r, t, 3), we(n, function (n, t, e) {
                var u = r(n, t, e);
                u > o && (o = u, a = n)
            });
            return a
        }

        function cr(n, r, t) {
            var o = 1 / 0, a = o;
            if ("function" != typeof r && t && t[r] === n && (r = null), null == r && se(n)) for (var u = -1, i = n.length; ++u < i;) {
                var l = n[u];
                l < a && (a = l)
            } else r = null == r && zn(n) ? e : g.createCallback(r, t, 3), we(n, function (n, t, e) {
                var u = r(n, t, e);
                u < o && (o = u, a = n)
            });
            return a
        }

        function fr(n, r, t, e) {
            var o = arguments.length < 3;
            if (r = g.createCallback(r, e, 4), se(n)) {
                var a = -1, u = n.length;
                for (o && (t = n[++a]); ++a < u;) t = r(t, n[a], a, n)
            } else we(n, function (n, e, a) {
                t = o ? (o = !1, n) : r(t, n, e, a)
            });
            return t
        }

        function sr(n, r, t, e) {
            var o = arguments.length < 3;
            return r = g.createCallback(r, e, 4), ar(n, function (n, e, a) {
                t = o ? (o = !1, n) : r(t, n, e, a)
            }), t
        }

        function pr(n, r, t) {
            return r = g.createCallback(r, t, 3), rr(n, function (n, t, e) {
                return !r(n, t, e)
            })
        }

        function hr(n, r, t) {
            if (n && "number" != typeof n.length ? n = Xn(n) : le.unindexedChars && zn(n) && (n = n.split("")), null == r || t) return n ? n[fn(0, n.length - 1)] : v;
            var e = vr(n);
            return e.length = ee(te(0, r), e.length), e
        }

        function vr(n) {
            var r = -1, t = n ? n.length : 0, e = wt("number" == typeof t ? t : 0);
            return or(n, function (n) {
                var t = fn(0, ++r);
                e[r] = e[t], e[t] = n
            }), e
        }

        function gr(n) {
            var r = n ? n.length : 0;
            return "number" == typeof r ? r : he(n).length
        }

        function yr(n, r, t) {
            var e;
            if (r = g.createCallback(r, t, 3), se(n)) for (var o = -1, a = n.length; ++o < a && !(e = r(n[o], o, n));) ; else we(n, function (n, t, o) {
                return !(e = r(n, t, o))
            });
            return !!e
        }

        function br(n, r, t) {
            var e = -1, a = se(r), u = n ? n.length : 0, c = wt("number" == typeof u ? u : 0);
            for (a || (r = g.createCallback(r, t, 3)), or(n, function (n, t, o) {
                var u = c[++e] = l();
                a ? u.criteria = ir(r, function (r) {
                    return n[r]
                }) : (u.criteria = i())[0] = r(n, t, o), u.index = e, u.value = n
            }), u = c.length, c.sort(o); u--;) {
                var p = c[u];
                c[u] = p.value, a || f(p.criteria), s(p)
            }
            return c
        }

        function dr(n) {
            return n && "number" == typeof n.length ? le.unindexedChars && zn(n) ? n.split("") : p(n) : Xn(n)
        }

        function _r(n) {
            for (var r = -1, t = n ? n.length : 0, e = []; ++r < t;) {
                var o = n[r];
                o && e.push(o)
            }
            return e
        }

        function mr(n) {
            return on(n, un(arguments, !0, !0, 1))
        }

        function wr(n, r, t) {
            var e = -1, o = n ? n.length : 0;
            for (r = g.createCallback(r, t, 3); ++e < o;) if (r(n[e], e, n)) return e;
            return -1
        }

        function xr(n, r, t) {
            var e = n ? n.length : 0;
            for (r = g.createCallback(r, t, 3); e--;) if (r(n[e], e, n)) return e;
            return -1
        }

        function jr(n, r, t) {
            var e = 0, o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var a = -1;
                for (r = g.createCallback(r, t, 3); ++a < o && r(n[a], a, n);) e++
            } else if (null == (e = r) || t) return n ? n[0] : v;
            return p(n, 0, ee(te(0, e), o))
        }

        function kr(n, r, t, e) {
            return "boolean" != typeof r && null != r && (e = t, t = "function" != typeof r && e && e[r] === n ? null : r, r = !1), null != t && (n = ir(n, t, e)), un(n, r)
        }

        function Cr(r, t, e) {
            if ("number" == typeof e) {
                var o = r ? r.length : 0;
                e = e < 0 ? te(0, o + e) : e || 0
            } else if (e) {
                var a = Rr(r, t);
                return r[a] === t ? a : -1
            }
            return n(r, t, e)
        }

        function Pr(n, r, t) {
            var e = 0, o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var a = o;
                for (r = g.createCallback(r, t, 3); a-- && r(n[a], a, n);) e++
            } else e = null == r || t ? 1 : r || e;
            return p(n, 0, ee(te(0, o - e), o))
        }

        function Er() {
            for (var t = [], e = -1, o = arguments.length, u = i(), l = yn(), c = l === n, p = i(); ++e < o;) {
                var h = arguments[e];
                (se(h) || mn(h)) && (t.push(h), u.push(c && h.length >= m && a(e ? t[e] : p)))
            }
            var v = t[0], g = -1, y = v ? v.length : 0, b = [];
            n:for (; ++g < y;) {
                var d = u[0];
                if (h = v[g], (d ? r(d, h) : l(p, h)) < 0) {
                    for (e = o, (d || p).push(h); --e;) if (d = u[e], (d ? r(d, h) : l(t[e], h)) < 0) continue n;
                    b.push(h)
                }
            }
            for (; o--;) (d = u[o]) && s(d);
            return f(u), f(p), b
        }

        function Or(n, r, t) {
            var e = 0, o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var a = o;
                for (r = g.createCallback(r, t, 3); a-- && r(n[a], a, n);) e++
            } else if (null == (e = r) || t) return n ? n[o - 1] : v;
            return p(n, te(0, o - e))
        }

        function Sr(n, r, t) {
            var e = n ? n.length : 0;
            for ("number" == typeof t && (e = (t < 0 ? te(0, e + t) : ee(t, e - 1)) + 1); e--;) if (n[e] === r) return e;
            return -1
        }

        function Ar(n) {
            for (var r = arguments, t = 0, e = r.length, o = n ? n.length : 0; ++t < e;) for (var a = -1, u = r[t]; ++a < o;) n[a] === u && (Gt.call(n, a--, 1), o--);
            return n
        }

        function Ir(n, r, t) {
            n = +n || 0, t = "number" == typeof t ? t : +t || 1, null == r && (r = n, n = 0);
            for (var e = -1, o = te(0, Bt((r - n) / (t || 1))), a = wt(o); ++e < o;) a[e] = n, n += t;
            return a
        }

        function Lr(n, r, t) {
            var e = -1, o = n ? n.length : 0, a = [];
            for (r = g.createCallback(r, t, 3); ++e < o;) {
                var u = n[e];
                r(u, e, n) && (a.push(u), Gt.call(n, e--, 1), o--)
            }
            return a
        }

        function Nr(n, r, t) {
            if ("number" != typeof r && null != r) {
                var e = 0, o = -1, a = n ? n.length : 0;
                for (r = g.createCallback(r, t, 3); ++o < a && r(n[o], o, n);) e++
            } else e = null == r || t ? 1 : te(0, r);
            return p(n, e)
        }

        function Rr(n, r, t, e) {
            var o = 0, a = n ? n.length : o;
            for (t = t ? g.createCallback(t, e, 1) : at, r = t(r); o < a;) {
                var u = o + a >>> 1;
                t(n[u]) < r ? o = u + 1 : a = u
            }
            return o
        }

        function Tr() {
            return sn(un(arguments, !0, !0))
        }

        function Dr(n, r, t, e) {
            return "boolean" != typeof r && null != r && (e = t, t = "function" != typeof r && e && e[r] === n ? null : r, r = !1), null != t && (t = g.createCallback(t, e, 3)), sn(n, r, t)
        }

        function $r(n) {
            return on(n, p(arguments, 1))
        }

        function Fr() {
            for (var n = -1, r = arguments.length; ++n < r;) {
                var t = arguments[n];
                if (se(t) || mn(t)) var e = e ? sn(on(e, t).concat(on(t, e))) : t
            }
            return e || []
        }

        function Br() {
            for (var n = arguments.length > 1 ? arguments : arguments[0], r = -1, t = n ? lr(Ae(n, "length")) : 0, e = wt(t < 0 ? 0 : t); ++r < t;) e[r] = Ae(n, r);
            return e
        }

        function Hr(n, r) {
            var t = -1, e = n ? n.length : 0, o = {};
            for (r || !e || se(n[0]) || (r = []); ++t < e;) {
                var a = n[t];
                r ? o[a] = r[t] : a && (o[a[0]] = a[1])
            }
            return o
        }

        function Wr(n, r) {
            if (!$n(r)) throw new It;
            return function () {
                if (--n < 1) return r.apply(this, arguments)
            }
        }

        function qr(n, r) {
            return arguments.length > 2 ? hn(n, 17, p(arguments, 2), null, r) : hn(n, 1, null, null, r)
        }

        function zr(n) {
            for (var r = arguments.length > 1 ? un(arguments, !0, !1, 1) : On(n), t = -1, e = r.length; ++t < e;) {
                var o = r[t];
                n[o] = hn(n[o], 1, null, null, n)
            }
            return n
        }

        function Kr(n, r) {
            return arguments.length > 2 ? hn(r, 19, p(arguments, 2), null, n) : hn(r, 3, null, null, n)
        }

        function Ur() {
            for (var n = arguments, r = n.length; r--;) if (!$n(n[r])) throw new It;
            return function () {
                for (var r = arguments, t = n.length; t--;) r = [n[t].apply(this, r)];
                return r[0]
            }
        }

        function Mr(n, r) {
            return r = "number" == typeof r ? r : +r || n.length, hn(n, 4, null, null, null, r)
        }

        function Vr(n, r, t) {
            var e, o, a, u, i, l, c, f = 0, s = !1, p = !0;
            if (!$n(n)) throw new It;
            if (r = te(0, r) || 0, !0 === t) {
                var h = !0;
                p = !1
            } else Fn(t) && (h = t.leading, s = "maxWait" in t && (te(r, t.maxWait) || 0), p = "trailing" in t ? t.trailing : p);
            var g = function () {
                var t = r - (Le() - u);
                if (t <= 0) {
                    o && Ht(o);
                    var s = c;
                    o = l = c = v, s && (f = Le(), a = n.apply(i, e), l || o || (e = i = null))
                } else l = Vt(g, t)
            }, y = function () {
                l && Ht(l), o = l = c = v, (p || s !== r) && (f = Le(), a = n.apply(i, e), l || o || (e = i = null))
            };
            return function () {
                if (e = arguments, u = Le(), i = this, c = p && (l || !h), !1 === s) var t = h && !l; else {
                    o || h || (f = u);
                    var v = s - (u - f), b = v <= 0;
                    b ? (o && (o = Ht(o)), f = u, a = n.apply(i, e)) : o || (o = Vt(y, v))
                }
                return b && l ? l = Ht(l) : l || r === s || (l = Vt(g, r)), t && (b = !0, a = n.apply(i, e)), !b || l || o || (e = i = null), a
            }
        }

        function Gr(n) {
            if (!$n(n)) throw new It;
            var r = p(arguments, 1);
            return Vt(function () {
                n.apply(v, r)
            }, 1)
        }

        function Jr(n, r) {
            if (!$n(n)) throw new It;
            var t = p(arguments, 2);
            return Vt(function () {
                n.apply(v, t)
            }, r)
        }

        function Qr(n, r) {
            if (!$n(n)) throw new It;
            var t = function () {
                var e = t.cache, o = r ? r.apply(this, arguments) : _ + arguments[0];
                return Kt.call(e, o) ? e[o] : e[o] = n.apply(this, arguments)
            };
            return t.cache = {}, t
        }

        function Xr(n) {
            var r, t;
            if (!$n(n)) throw new It;
            return function () {
                return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
            }
        }

        function Yr(n) {
            return hn(n, 16, p(arguments, 1))
        }

        function Zr(n) {
            return hn(n, 32, null, p(arguments, 1))
        }

        function nt(n, r, t) {
            var e = !0, o = !0;
            if (!$n(n)) throw new It;
            return !1 === t ? e = !1 : Fn(t) && (e = "leading" in t ? t.leading : e, o = "trailing" in t ? t.trailing : o), J.leading = e, J.maxWait = r, J.trailing = o, Vr(n, r, J)
        }

        function rt(n, r) {
            return hn(r, 16, [n])
        }

        function tt(n) {
            return function () {
                return n
            }
        }

        function et(n, r, t) {
            var e = typeof n;
            if (null == n || "function" == e) return tn(n, r, t);
            if ("object" != e) return ct(n);
            var o = he(n), a = o[0], u = n[a];
            return 1 != o.length || u !== u || Fn(u) ? function (r) {
                for (var t = o.length, e = !1; t-- && (e = ln(r[o[t]], n[o[t]], null, !0));) ;
                return e
            } : function (n) {
                var r = n[a];
                return u === r && (0 !== u || 1 / u == 1 / r)
            }
        }

        function ot(n) {
            return null == n ? "" : At(n).replace(me, gn)
        }

        function at(n) {
            return n
        }

        function ut(n, r, t) {
            var e = !0, o = r && On(r);
            r && (t || o.length) || (null == t && (t = r), a = y, r = n, n = g, o = On(r)), !1 === t ? e = !1 : Fn(t) && "chain" in t && (e = t.chain);
            var a = n, u = $n(a);
            or(o, function (t) {
                var o = n[t] = r[t];
                u && (a.prototype[t] = function () {
                    var r = this.__chain__, t = this.__wrapped__, u = [t];
                    Ut.apply(u, arguments);
                    var i = o.apply(n, u);
                    if (e || r) {
                        if (t === i && Fn(i)) return this;
                        i = new a(i), i.__chain__ = r
                    }
                    return i
                })
            })
        }

        function it() {
            return t._ = Dt, this
        }

        function lt() {
        }

        function ct(n) {
            return function (r) {
                return r[n]
            }
        }

        function ft(n, r, t) {
            var e = null == n, o = null == r;
            if (null == t && ("boolean" == typeof n && o ? (t = n, n = 1) : o || "boolean" != typeof r || (t = r, o = !0)), e && o && (r = 1), n = +n || 0, o ? (r = n, n = 0) : r = +r || 0, t || n % 1 || r % 1) {
                var a = ae();
                return ee(n + a * (r - n + parseFloat("1e-" + ((a + "").length - 1))), r)
            }
            return fn(n, r)
        }

        function st(n, r) {
            if (n) {
                var t = n[r];
                return $n(t) ? n[r]() : t
            }
        }

        function pt(n, r, t) {
            var e = g.templateSettings;
            n = At(n || ""), t = je({}, t, e);
            var o, a = je({}, t.imports, e.imports), i = he(a), l = Xn(a), c = 0, f = t.interpolate || L,
                s = "__p += '",
                p = St((t.escape || L).source + "|" + f.source + "|" + (f === A ? E : L).source + "|" + (t.evaluate || L).source + "|$", "g");
            n.replace(p, function (r, t, e, a, i, l) {
                return e || (e = a), s += n.slice(c, l).replace(R, u), t && (s += "' +\n__e(" + t + ") +\n'"), i && (o = !0, s += "';\n" + i + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), c = l + r.length, r
            }), s += "';\n";
            var h = t.variable, y = h;
            y || (h = "obj", s = "with (" + h + ") {\n" + s + "\n}\n"), s = (o ? s.replace(j, "") : s).replace(C, "$1").replace(P, "$1;"), s = "function(" + h + ") {\n" + (y ? "" : h + " || (" + h + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
            var b = "\n/*\n//# sourceURL=" + (t.sourceURL || "/lodash/template/source[" + $++ + "]") + "\n*/";
            try {
                var d = Ct(i, "return " + s + b).apply(v, l)
            } catch (n) {
                throw n.source = s, n
            }
            return r ? d(r) : (d.source = s, d)
        }

        function ht(n, r, t) {
            n = (n = +n) > -1 ? n : 0;
            var e = -1, o = wt(n);
            for (r = tn(r, t, 1); ++e < n;) o[e] = r(e);
            return o
        }

        function vt(n) {
            return null == n ? "" : At(n).replace(_e, _n)
        }

        function gt(n) {
            var r = ++b;
            return At(null == n ? "" : n) + r
        }

        function yt(n) {
            return n = new y(n), n.__chain__ = !0, n
        }

        function bt(n, r) {
            return r(n), n
        }

        function dt() {
            return this.__chain__ = !0, this
        }

        function _t() {
            return At(this.__wrapped__)
        }

        function mt() {
            return this.__wrapped__
        }

        t = t ? an.defaults(nn.Object(), t, an.pick(nn, T)) : nn;
        var wt = t.Array, xt = t.Boolean, jt = t.Date, kt = t.Error, Ct = t.Function, Pt = t.Math, Et = t.Number,
            Ot = t.Object, St = t.RegExp, At = t.String, It = t.TypeError, Lt = [], Nt = kt.prototype,
            Rt = Ot.prototype, Tt = At.prototype, Dt = t._, $t = Rt.toString,
            Ft = St("^" + At($t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Bt = Pt.ceil, Ht = t.clearTimeout, Wt = Pt.floor, qt = Ct.prototype.toString,
            zt = bn(zt = Ot.getPrototypeOf) && zt, Kt = Rt.hasOwnProperty, Ut = Lt.push, Mt = Rt.propertyIsEnumerable,
            Vt = t.setTimeout, Gt = Lt.splice, Jt = Lt.unshift, Qt = function () {
                try {
                    var n = {}, r = bn(r = Ot.defineProperty) && r, t = r(n, n, n) && r
                } catch (n) {
                }
                return t
            }(), Xt = bn(Xt = Ot.create) && Xt, Yt = bn(Yt = wt.isArray) && Yt, Zt = t.isFinite, ne = t.isNaN,
            re = bn(re = Ot.keys) && re, te = Pt.max, ee = Pt.min, oe = t.parseInt, ae = Pt.random, ue = {};
        ue[B] = wt, ue[H] = xt, ue[W] = jt, ue[z] = Ct, ue[U] = Ot, ue[K] = Et, ue[M] = St, ue[V] = At;
        var ie = {};
        ie[B] = ie[W] = ie[K] = {
            constructor: !0,
            toLocaleString: !0,
            toString: !0,
            valueOf: !0
        }, ie[H] = ie[V] = {constructor: !0, toString: !0, valueOf: !0}, ie[q] = ie[z] = ie[M] = {
            constructor: !0,
            toString: !0
        }, ie[U] = {constructor: !0}, function () {
            for (var n = D.length; n--;) {
                var r = D[n];
                for (var t in ie) Kt.call(ie, t) && !Kt.call(ie[t], r) && (ie[t][r] = !1)
            }
        }(), y.prototype = g.prototype;
        var le = g.support = {};
        !function () {
            var n = function () {
                this.x = 1
            }, r = {0: 1, length: 1}, e = [];
            n.prototype = {valueOf: 1, y: 1};
            for (var o in new n) e.push(o);
            for (o in arguments) ;
            le.argsClass = $t.call(arguments) == F, le.argsObject = arguments.constructor == Ot && !(arguments instanceof wt), le.enumErrorProps = Mt.call(Nt, "message") || Mt.call(Nt, "name"), le.enumPrototypes = Mt.call(n, "prototype"), le.funcDecomp = !bn(t.WinRTError) && N.test(h), le.funcNames = "string" == typeof Ct.name, le.nonEnumArgs = 0 != o, le.nonEnumShadows = !/valueOf/.test(e), le.ownLast = "x" != e[0], le.spliceObjects = (Lt.splice.call(r, 0, 1), !r[0]), le.unindexedChars = "x"[0] + Ot("x")[0] != "xx";
            try {
                le.nodeClass = !($t.call(document) == U && !({toString: 0} + ""))
            } catch (n) {
                le.nodeClass = !0
            }
        }(1), g.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: A,
            variable: "",
            imports: {_: g}
        };
        var ce = function (n) {
            var r = "var index, iterable = " + n.firstArg + ", result = " + n.init + ";\nif (!iterable) return result;\n" + n.top + ";";
            n.array ? (r += "\nvar length = iterable.length; index = -1;\nif (" + n.array + ") {  ", le.unindexedChars && (r += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), r += "\n  while (++index < length) {\n    " + n.loop + ";\n  }\n}\nelse {  ") : le.nonEnumArgs && (r += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + n.loop + ";\n    }\n  } else {  "), le.enumPrototypes && (r += "\n  var skipProto = typeof iterable == 'function';\n  "), le.enumErrorProps && (r += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
            var t = [];
            if (le.enumPrototypes && t.push('!(skipProto && index == "prototype")'), le.enumErrorProps && t.push('!(skipErrorProps && (index == "message" || index == "name"))'), n.useHas && n.keys) r += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", t.length && (r += "    if (" + t.join(" && ") + ") {\n  "), r += n.loop + ";    ", t.length && (r += "\n    }"), r += "\n  }  "; else if (r += "\n  for (index in iterable) {\n", n.useHas && t.push("hasOwnProperty.call(iterable, index)"), t.length && (r += "    if (" + t.join(" && ") + ") {\n  "), r += n.loop + ";    ", t.length && (r += "\n    }"), r += "\n  }    ", le.nonEnumShadows) {
                for (r += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) r += "\n    index = '" + n.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", n.useHas || (r += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), r += ") {\n      " + n.loop + ";\n    }      ";
                r += "\n  }    "
            }
            return (n.array || le.nonEnumArgs) && (r += "\n}"), r += n.bottom + ";\nreturn result"
        };
        Xt || (rn = function () {
            function n() {
            }

            return function (r) {
                if (Fn(r)) {
                    n.prototype = r;
                    var e = new n;
                    n.prototype = null
                }
                return e || t.Object()
            }
        }());
        var fe = Qt ? function (n, r) {
            Q.value = r, Qt(n, "__bindData__", Q)
        } : lt;
        le.argsClass || (mn = function (n) {
            return n && "object" == typeof n && "number" == typeof n.length && Kt.call(n, "callee") && !Mt.call(n, "callee") || !1
        });
        var se = Yt || function (n) {
                return n && "object" == typeof n && "number" == typeof n.length && $t.call(n) == B || !1
            }, pe = vn({
                args: "object",
                init: "[]",
                top: "if (!(objectTypes[typeof object])) return result",
                loop: "result.push(index)"
            }), he = re ? function (n) {
                return Fn(n) ? le.enumPrototypes && "function" == typeof n || le.nonEnumArgs && n.length && mn(n) ? pe(n) : re(n) : []
            } : pe, ve = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                array: "typeof length == 'number'",
                keys: he,
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            }, ge = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                keys: he,
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            }, ye = {top: "if (!objectTypes[typeof iterable]) return result;\n" + ve.top, array: !1},
            be = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, de = An(be),
            _e = St("(" + he(de).join("|") + ")", "g"), me = St("[" + he(be).join("") + "]", "g"), we = vn(ve),
            xe = vn(ge, {
                top: ge.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
            }), je = vn(ge), ke = vn(ve, ye, {useHas: !1}), Ce = vn(ve, ye);
        $n(/x/) && ($n = function (n) {
            return "function" == typeof n && $t.call(n) == z
        });
        var Pe = zt ? function (n) {
            if (!n || $t.call(n) != U || !le.argsClass && mn(n)) return !1;
            var r = n.valueOf, t = bn(r) && (t = zt(r)) && zt(t);
            return t ? n == t || zt(n) == t : dn(n)
        } : dn, Ee = pn(function (n, r, t) {
            Kt.call(n, t) ? n[t]++ : n[t] = 1
        }), Oe = pn(function (n, r, t) {
            (Kt.call(n, t) ? n[t] : n[t] = []).push(r)
        }), Se = pn(function (n, r, t) {
            n[t] = r
        }), Ae = ir, Ie = rr, Le = bn(Le = jt.now) && Le || function () {
            return (new jt).getTime()
        }, Ne = 8 == oe(x + "08") ? oe : function (n, r) {
            return oe(zn(n) ? n.replace(I, "") : n, r || 0)
        };
        return g.after = Wr, g.assign = xe, g.at = Yn, g.bind = qr, g.bindAll = zr, g.bindKey = Kr, g.chain = yt, g.compact = _r, g.compose = Ur, g.constant = tt, g.countBy = Ee, g.create = jn, g.createCallback = et, g.curry = Mr, g.debounce = Vr, g.defaults = je, g.defer = Gr, g.delay = Jr, g.difference = mr, g.filter = rr, g.flatten = kr, g.forEach = or, g.forEachRight = ar, g.forIn = ke, g.forInRight = Pn, g.forOwn = Ce, g.forOwnRight = En, g.functions = On, g.groupBy = Oe, g.indexBy = Se, g.initial = Pr, g.intersection = Er, g.invert = An, g.invoke = ur, g.keys = he, g.map = ir, g.mapValues = Un, g.max = lr, g.memoize = Qr, g.merge = Mn, g.min = cr, g.omit = Vn, g.once = Xr, g.pairs = Gn, g.partial = Yr, g.partialRight = Zr, g.pick = Jn, g.pluck = Ae, g.property = ct, g.pull = Ar, g.range = Ir, g.reject = pr, g.remove = Lr, g.rest = Nr, g.shuffle = vr, g.sortBy = br, g.tap = bt, g.throttle = nt, g.times = ht, g.toArray = dr, g.transform = Qn, g.union = Tr, g.uniq = Dr, g.values = Xn, g.where = Ie, g.without = $r, g.wrap = rt, g.xor = Fr, g.zip = Br, g.zipObject = Hr, g.collect = ir, g.drop = Nr, g.each = or, g.eachRight = ar, g.extend = xe, g.methods = On, g.object = Hr, g.select = rr, g.tail = Nr, g.unique = Dr, g.unzip = Br, ut(g), g.clone = wn, g.cloneDeep = xn, g.contains = Zn, g.escape = ot, g.every = nr, g.find = tr, g.findIndex = wr, g.findKey = kn, g.findLast = er, g.findLastIndex = xr, g.findLastKey = Cn, g.has = Sn, g.identity = at, g.indexOf = Cr, g.isArguments = mn, g.isArray = se, g.isBoolean = In, g.isDate = Ln, g.isElement = Nn,g.isEmpty = Rn,g.isEqual = Tn,g.isFinite = Dn,g.isFunction = $n,g.isNaN = Bn,g.isNull = Hn,g.isNumber = Wn,g.isObject = Fn,g.isPlainObject = Pe,g.isRegExp = qn,g.isString = zn,g.isUndefined = Kn,g.lastIndexOf = Sr,g.mixin = ut,g.noConflict = it,g.noop = lt,g.now = Le,g.parseInt = Ne,g.random = ft,g.reduce = fr,g.reduceRight = sr,g.result = st,g.runInContext = h,g.size = gr,g.some = yr,g.sortedIndex = Rr,g.template = pt,g.unescape = vt,g.uniqueId = gt,g.all = nr,g.any = yr,g.detect = tr,g.findWhere = tr,g.foldl = fr,g.foldr = sr,g.include = Zn,g.inject = fr,ut(function () {
            var n = {};
            return Ce(g, function (r, t) {
                g.prototype[t] || (n[t] = r)
            }), n
        }(), !1),g.first = jr,g.last = Or,g.sample = hr,g.take = jr,g.head = jr,Ce(g, function (n, r) {
            var t = "sample" !== r;
            g.prototype[r] || (g.prototype[r] = function (r, e) {
                var o = this.__chain__, a = n(this.__wrapped__, r, e);
                return o || null != r && (!e || t && "function" == typeof r) ? new y(a, o) : a
            })
        }),g.VERSION = "2.4.1",g.prototype.chain = dt,g.prototype.toString = _t,g.prototype.value = mt,g.prototype.valueOf = mt,we(["join", "pop", "shift"], function (n) {
            var r = Lt[n];
            g.prototype[n] = function () {
                var n = this.__chain__, t = r.apply(this.__wrapped__, arguments);
                return n ? new y(t, n) : t
            }
        }),we(["push", "reverse", "sort", "unshift"], function (n) {
            var r = Lt[n];
            g.prototype[n] = function () {
                return r.apply(this.__wrapped__, arguments), this
            }
        }),we(["concat", "slice", "splice"], function (n) {
            var r = Lt[n];
            g.prototype[n] = function () {
                return new y(r.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }),le.spliceObjects || we(["pop", "shift", "splice"], function (n) {
            var r = Lt[n], t = "splice" == n;
            g.prototype[n] = function () {
                var n = this.__chain__, e = this.__wrapped__, o = r.apply(e, arguments);
                return 0 === e.length && delete e[0], n || t ? new y(o, n) : o
            }
        }),g
    }

    var v, g = [], y = [], b = 0, d = {}, _ = +new Date + "", m = 75, w = 40,
        x = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　", j = /\b__p \+= '';/g, C = /\b(__p \+=) '' \+/g,
        P = /(__e\(.*?\)|\b__t\)) \+\n'';/g, E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, O = /\w*$/,
        S = /^\s*function[ \n\r\t]+\w/, A = /<%=([\s\S]+?)%>/g, I = RegExp("^[" + x + "]*0+(?=.$)"), L = /($^)/,
        N = /\bthis\b/, R = /['\n\r\t\u2028\u2029\\]/g,
        T = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        D = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        $ = 0, F = "[object Arguments]", B = "[object Array]", H = "[object Boolean]", W = "[object Date]",
        q = "[object Error]", z = "[object Function]", K = "[object Number]", U = "[object Object]",
        M = "[object RegExp]", V = "[object String]", G = {};
    G[z] = !1, G[F] = G[B] = G[H] = G[W] = G[K] = G[U] = G[M] = G[V] = !0;
    var J = {leading: !1, maxWait: 0, trailing: !1}, Q = {configurable: !1, enumerable: !1, value: null, writable: !1},
        X = {
            args: "",
            array: null,
            bottom: "",
            firstArg: "",
            init: "",
            keys: null,
            loop: "",
            shadowedProps: null,
            support: null,
            top: "",
            useHas: !1
        }, Y = {boolean: !1, function: !0, object: !0, number: !1, string: !1, undefined: !1},
        Z = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
        nn = Y[typeof window] && window || this, rn = Y[typeof exports] && exports && !exports.nodeType && exports,
        tn = Y[typeof module] && module && !module.nodeType && module, en = tn && tn.exports === rn && rn,
        on = Y[typeof global] && global;
    !on || on.global !== on && on.window !== on || (nn = on);
    var an = h();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (nn._ = an, define(function () {
        return an
    })) : rn && tn ? en ? (tn.exports = an)._ = an : rn._ = an : nn._ = an
}).call(this);
!function (e, t) {
    void 0 !== e.rails && e.error("jquery-ujs has already been loaded!");
    var a, n = e(document);
    e.rails = a = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var a = e('meta[name="csrf-token"]').attr("content");
            a && t.setRequestHeader("X-CSRF-Token", a)
        },
        refreshCSRFTokens: function () {
            var t = e("meta[name=csrf-token]").attr("content"), a = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + a + '"]').val(t)
        },
        fire: function (t, a, n) {
            var r = e.Event(a);
            return t.trigger(r, n), !1 !== r.result
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (t) {
            var n, r, i, o, l, d, s, u;
            if (a.fire(t, "ajax:before")) {
                if (o = t.data("cross-domain"), l = void 0 === o ? null : o, d = t.data("with-credentials") || null, s = t.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, t.is("form")) {
                    n = t.attr("method"), r = t.attr("action"), i = t.serializeArray();
                    var c = t.data("ujs:submit-button");
                    c && (i.push(c), t.data("ujs:submit-button", null))
                } else t.is(a.inputChangeSelector) ? (n = t.data("method"), r = t.data("url"), i = t.serialize(), t.data("params") && (i = i + "&" + t.data("params"))) : t.is(a.buttonClickSelector) ? (n = t.data("method") || "get", r = t.data("url"), i = t.serialize(), t.data("params") && (i = i + "&" + t.data("params"))) : (n = t.data("method"), r = a.href(t), i = t.data("params") || null);
                u = {
                    type: n || "GET", data: i, dataType: s, beforeSend: function (e, n) {
                        return void 0 === n.dataType && e.setRequestHeader("accept", "*/*;q=0.5, " + n.accepts.script), a.fire(t, "ajax:beforeSend", [e, n])
                    }, success: function (e, a, n) {
                        t.trigger("ajax:success", [e, a, n])
                    }, complete: function (e, a) {
                        t.trigger("ajax:complete", [e, a])
                    }, error: function (e, a, n) {
                        t.trigger("ajax:error", [e, a, n])
                    }, crossDomain: l
                }, d && (u.xhrFields = {withCredentials: d}), r && (u.url = r);
                var m = a.ajax(u);
                return t.trigger("ajax:send", m), m
            }
            return !1
        },
        handleMethod: function (t) {
            var n = a.href(t), r = t.data("method"), i = t.attr("target"),
                o = e("meta[name=csrf-token]").attr("content"), l = e("meta[name=csrf-param]").attr("content"),
                d = e('<form method="post" action="' + n + '"></form>'),
                s = '<input name="_method" value="' + r + '" type="hidden" />';
            void 0 !== l && void 0 !== o && (s += '<input name="' + l + '" value="' + o + '" type="hidden" />'), i && d.attr("target", i), d.hide().append(s).appendTo("body"), d.submit()
        },
        disableFormElements: function (t) {
            t.find(a.disableSelector).each(function () {
                var t = e(this), a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[a]()), t[a](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(a.enableSelector).each(function () {
                var t = e(this), a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[a](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"), r = !1;
            return !n || (a.fire(e, "confirm") && (r = a.confirm(n), t = a.fire(e, "confirm:complete", [r])), r && t)
        },
        blankInputs: function (t, a, n) {
            var r, i, o = e(), l = a || "input,textarea", d = t.find(l);
            return d.each(function () {
                if (r = e(this), !(i = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val()) == !n) {
                    if (r.is("input[type=radio]") && d.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    o = o.add(r)
                }
            }), !!o.length && o
        },
        nonBlankInputs: function (e, t) {
            return a.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return a.stopEverything(e)
            })
        },
        enableElement: function (e) {
            void 0 !== e.data("ujs:enable-with") && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, a.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || a.CSRFProtection(n)
    }), n.delegate(a.linkDisableSelector, "ajax:complete", function () {
        a.enableElement(e(this))
    }), n.delegate(a.linkClickSelector, "click.rails", function (t) {
        var n = e(this), r = n.data("method"), i = n.data("params"), o = t.metaKey || t.ctrlKey;
        if (!a.allowAction(n)) return a.stopEverything(t);
        if (!o && n.is(a.linkDisableSelector) && a.disableElement(n), void 0 !== n.data("remote")) {
            if (o && (!r || "GET" === r) && !i) return !0;
            var l = a.handleRemote(n);
            return !1 === l ? a.enableElement(n) : l.error(function () {
                a.enableElement(n)
            }), !1
        }
        return n.data("method") ? (a.handleMethod(n), !1) : void 0
    }), n.delegate(a.buttonClickSelector, "click.rails", function (t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.formSubmitSelector, "submit.rails", function (t) {
        var n = e(this), r = void 0 !== n.data("remote"), i = a.blankInputs(n, a.requiredInputSelector),
            o = a.nonBlankInputs(n, a.fileInputSelector);
        if (!a.allowAction(n)) return a.stopEverything(t);
        if (i && void 0 == n.attr("novalidate") && a.fire(n, "ajax:aborted:required", [i])) return a.stopEverything(t);
        if (r) {
            if (o) {
                setTimeout(function () {
                    a.disableFormElements(n)
                }, 13);
                var l = a.fire(n, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    a.enableFormElements(n)
                }, 13), l
            }
            return a.handleRemote(n), !1
        }
        setTimeout(function () {
            a.disableFormElements(n)
        }, 13)
    }), n.delegate(a.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!a.allowAction(n)) return a.stopEverything(t);
        var r = n.attr("name"), i = r ? {name: r, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", i)
    }), n.delegate(a.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && a.disableFormElements(e(this))
    }), n.delegate(a.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && a.enableFormElements(e(this))
    }), e(function () {
        a.refreshCSRFTokens()
    }))
}(jQuery);
!function (t) {
    "use strict";
    t(function () {
        t.support.transition = function () {
            var t = function () {
                var t, e = document.createElement("bootstrap"), i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (t in i) if (void 0 !== e.style[t]) return i[t]
            }();
            return t && {end: t}
        }()
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]', i = function (i) {
        t(i).on("click", e, this.close)
    };
    i.prototype.close = function (e) {
        function i() {
            n.trigger("closed").remove()
        }

        var n, s = t(this), o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), n = t(o), e && e.preventDefault(), n.length || (n = s.hasClass("alert") ? s : s.parent()), n.trigger(e = t.Event("close")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.on(t.support.transition.end, i) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var n = t(this), s = n.data("alert");
            s || n.data("alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.alert.data-api", e, i.prototype.close)
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, i)
    };
    e.prototype.setState = function (t) {
        var e = "disabled", i = this.$element, n = i.data(), s = i.is("input") ? "val" : "html";
        t += "Text", n.resetText || i.data("resetText", i[s]()), i[s](n[t] || this.options[t]), setTimeout(function () {
            "loadingText" == t ? i.addClass(e).attr(e, e) : i.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("button"), o = "object" == typeof i && i;
            s || n.data("button", s = new e(this, o)), "toggle" == i ? s.toggle() : i && s.setState(i)
        })
    }, t.fn.button.defaults = {loadingText: "loading..."}, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.button.data-api", "[data-toggle^=button]", function (e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle")
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.prototype = {
        cycle: function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, getActiveIndex: function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, to: function (e) {
            var i = this.getActiveIndex(), n = this;
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid", function () {
                n.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
        }, pause: function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        }, next: function () {
            if (!this.sliding) return this.slide("next")
        }, prev: function () {
            if (!this.sliding) return this.slide("prev")
        }, slide: function (e, i) {
            var n, s = this.$element.find(".item.active"), o = i || s[e](), a = this.interval,
                r = "next" == e ? "left" : "right", h = "next" == e ? "first" : "last", l = this;
            if (this.sliding = !0, a && this.pause(), o = o.length ? o : this.$element.find(".item")[h](), n = t.Event("slide", {
                    relatedTarget: o[0],
                    direction: r
                }), !o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                        var e = t(l.$indicators.children()[l.getActiveIndex()]);
                        e && e.addClass("active")
                    })), t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
                    o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), this.$element.one(t.support.transition.end, function () {
                        o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                            l.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
                    s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return a && this.cycle(), this
            }
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("carousel"),
                o = t.extend({}, t.fn.carousel.defaults, "object" == typeof i && i),
                a = "string" == typeof i ? i : o.slide;
            s || n.data("carousel", s = new e(this, o)), "number" == typeof i ? s.to(i) : a ? s[a]() : o.interval && s.pause().cycle()
        })
    }, t.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var i, n, s = t(this), o = t(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = t.extend({}, o.data(), s.data());
        o.carousel(a), (n = s.attr("data-slide-to")) && o.data("carousel").pause().to(n).cycle(), e.preventDefault()
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, i), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.prototype = {
        constructor: e, dimension: function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, show: function () {
            var e, i, n, s;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (e = this.dimension(), i = t.camelCase(["scroll", e].join("-")), (n = this.$parent && this.$parent.find("> .accordion-group > .in")) && n.length) {
                    if ((s = n.data("collapse")) && s.transitioning) return;
                    n.collapse("hide"), s || n.data("collapse", null)
                }
                this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][i])
            }
        }, hide: function () {
            var e;
            !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
        }, reset: function (t) {
            var e = this.dimension();
            return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
        }, transition: function (e, i, n) {
            var s = this, o = function () {
                "show" == i.type && s.reset(), s.transitioning = 0, s.$element.trigger(n)
            };
            this.$element.trigger(i), i.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
        }, toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var i = t.fn.collapse;
    t.fn.collapse = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("collapse"),
                o = t.extend({}, t.fn.collapse.defaults, n.data(), "object" == typeof i && i);
            s || n.data("collapse", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.collapse.defaults = {toggle: !0}, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (e) {
        var i, n = t(this),
            s = n.attr("data-target") || e.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s).data("collapse") ? "toggle" : n.data();
        n[t(s).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(s).collapse(o)
    })
}(window.jQuery), function (t) {
    "use strict";

    function e() {
        t(n).each(function () {
            i(t(this)).removeClass("open")
        })
    }

    function i(e) {
        var i, n = e.attr("data-target");
        return n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), i = n && t(n), i && i.length || (i = e.parent()), i
    }

    var n = "[data-toggle=dropdown]", s = function (e) {
        var i = t(e).on("click.dropdown.data-api", this.toggle);
        t("html").on("click.dropdown.data-api", function () {
            i.parent().removeClass("open")
        })
    };
    s.prototype = {
        constructor: s, toggle: function (n) {
            var s, o, a = t(this);
            if (!a.is(".disabled, :disabled")) return s = i(a), o = s.hasClass("open"), e(), o || s.toggleClass("open"), a.focus(), !1
        }, keydown: function (e) {
            var s, o, a, r, h;
            if (/(38|40|27)/.test(e.keyCode) && (s = t(this), e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled"))) {
                if (a = i(s), !(r = a.hasClass("open")) || r && 27 == e.keyCode) return 27 == e.which && a.find(n).focus(), s.click();
                o = t("[role=menu] li:not(.divider):visible a", a), o.length && (h = o.index(o.filter(":focus")), 38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < o.length - 1 && h++, ~h || (h = 0), o.eq(h).focus())
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var i = t(this), n = i.data("dropdown");
            n || i.data("dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.dropdown-menu", function (t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", n, s.prototype.toggle).on("keydown.dropdown.data-api", n + ", [role=menu]", s.prototype.keydown)
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e, toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        }, show: function () {
            var e = this, i = t.Event("show");
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
                var i = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), i ? e.$element.one(t.support.transition.end, function () {
                    e.$element.focus().trigger("shown")
                }) : e.$element.focus().trigger("shown")
            }))
        }, hide: function (e) {
            e && e.preventDefault();
            e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        }, enforceFocus: function () {
            var e = this;
            t(document).on("focusin.modal", function (t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        }, escape: function () {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        }, hideWithTransition: function () {
            var e = this, i = setTimeout(function () {
                e.$element.off(t.support.transition.end), e.hideModal()
            }, 500);
            this.$element.one(t.support.transition.end, function () {
                clearTimeout(i), e.hideModal()
            })
        }, hideModal: function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.removeBackdrop(), t.$element.trigger("hidden")
            })
        }, removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, backdrop: function (e) {
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = t.support.transition && i;
                if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                n ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
        }
    };
    var i = t.fn.modal;
    t.fn.modal = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("modal"),
                o = t.extend({}, t.fn.modal.defaults, n.data(), "object" == typeof i && i);
            s || n.data("modal", s = new e(this, o)), "string" == typeof i ? s[i]() : o.show && s.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function (e) {
        var i = t(this), n = i.attr("href"), s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), i.data());
        e.preventDefault(), s.modal(o).one("hide", function () {
            i.focus()
        })
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("tooltip", t, e)
    };
    e.prototype = {
        constructor: e, init: function (e, i, n) {
            var s, o, a, r, h;
            for (this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.enabled = !0, a = this.options.trigger.split(" "), h = a.length; h--;) r = a[h], "click" == r ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != r && (s = "hover" == r ? "mouseenter" : "focus", o = "hover" == r ? "mouseleave" : "blur", this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, getOptions: function (e) {
            return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, enter: function (e) {
            var i, n = t.fn[this.type].defaults, s = {};
            if (this._options && t.each(this._options, function (t, e) {
                    n[t] != e && (s[t] = e)
                }, this), i = t(e.currentTarget)[this.type](s).data(this.type), !i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }, leave: function (e) {
            var i = t(e.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout && clearTimeout(this.timeout), !i.options.delay || !i.options.delay.hide) return i.hide();
            i.hoverState = "out", this.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)
        }, show: function () {
            var e, i, n, s, o, a, r = t.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), i = this.getPosition(), n = e[0].offsetWidth, s = e[0].offsetHeight, o) {
                    case"bottom":
                        a = {top: i.top + i.height, left: i.left + i.width / 2 - n / 2};
                        break;
                    case"top":
                        a = {top: i.top - s, left: i.left + i.width / 2 - n / 2};
                        break;
                    case"left":
                        a = {top: i.top + i.height / 2 - s / 2, left: i.left - n};
                        break;
                    case"right":
                        a = {top: i.top + i.height / 2 - s / 2, left: i.left + i.width}
                }
                this.applyPlacement(a, o), this.$element.trigger("shown")
            }
        }, applyPlacement: function (t, e) {
            var i, n, s, o, a = this.tip(), r = a[0].offsetWidth, h = a[0].offsetHeight;
            a.offset(t).addClass(e).addClass("in"), i = a[0].offsetWidth, n = a[0].offsetHeight, "top" == e && n != h && (t.top = t.top + h - n, o = !0), "bottom" == e || "top" == e ? (s = 0, t.left < 0 && (s = -2 * t.left, t.left = 0, a.offset(t), i = a[0].offsetWidth, n = a[0].offsetHeight), this.replaceArrow(s - r + i, i, "left")) : this.replaceArrow(n - h, n, "top"), o && a.offset(t)
        }, replaceArrow: function (t, e, i) {
            this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
        }, setContent: function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, hide: function () {
            var e = this.tip(), i = t.Event("hide");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) return e.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? function () {
                var i = setTimeout(function () {
                    e.off(t.support.transition.end).detach()
                }, 500);
                e.one(t.support.transition.end, function () {
                    clearTimeout(i), e.detach()
                })
            }() : e.detach(), this.$element.trigger("hidden"), this
        }, fixTitle: function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, hasContent: function () {
            return this.getTitle()
        }, getPosition: function () {
            var e = this.$element[0];
            return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset())
        }, getTitle: function () {
            var t = this.$element, e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, tip: function () {
            return this.$tip = this.$tip || t(this.options.template)
        }, arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, enable: function () {
            this.enabled = !0
        }, disable: function () {
            this.enabled = !1
        }, toggleEnabled: function () {
            this.enabled = !this.enabled
        }, toggle: function (e) {
            var i = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
            i.tip().hasClass("in") ? i.hide() : i.show()
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("tooltip"), o = "object" == typeof i && i;
            s || n.data("tooltip", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(window.jQuery), function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e, setContent: function () {
            var t = this.tip(), e = this.getTitle(), i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](i), t.removeClass("fade top bottom left right in")
        }, hasContent: function () {
            return this.getTitle() || this.getContent()
        }, getContent: function () {
            var t = this.$element, e = this.options;
            return ("function" == typeof e.content ? e.content.call(t[0]) : e.content) || t.attr("data-content")
        }, tip: function () {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var i = t.fn.popover;
    t.fn.popover = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("popover"), o = "object" == typeof i && i;
            s || n.data("popover", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(window.jQuery), function (t) {
    "use strict";

    function e(e, i) {
        var n, s = t.proxy(this.process, this), o = t(t(e).is("body") ? window : e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, i), this.$scrollElement = o.on("scroll.scroll-spy.data-api", s), this.selector = (this.options.target || (n = t(e).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
    }

    e.prototype = {
        constructor: e, refresh: function () {
            var e = this;
            this.offsets = t([]), this.targets = t([]), this.$body.find(this.selector).map(function () {
                var i = t(this), n = i.data("target") || i.attr("href"), s = /^#\w/.test(n) && t(n);
                return s && s.length && [[s.position().top + (!t.isWindow(e.$scrollElement.get(0)) && e.$scrollElement.scrollTop()), n]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, process: function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = i - this.$scrollElement.height(), s = this.offsets, o = this.targets, a = this.activeTarget;
            if (e >= n) return a != (t = o.last()[0]) && this.activate(t);
            for (t = s.length; t--;) a != o[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(o[t])
        }, activate: function (e) {
            var i, n;
            this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        }
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("scrollspy"), o = "object" == typeof i && i;
            s || n.data("scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {offset: 10}, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e, show: function () {
            var e, i, n, s = this.element, o = s.closest("ul:not(.dropdown-menu)"), a = s.attr("data-target");
            a || (a = s.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), s.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], n = t.Event("show", {relatedTarget: e}), s.trigger(n), n.isDefaultPrevented() || (i = t(a), this.activate(s.parent("li"), o), this.activate(i, i.parent(), function () {
                s.trigger({type: "shown", relatedTarget: e})
            })))
        }, activate: function (e, i, n) {
            function s() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
            }

            var o = i.find("> .active"), a = n && t.support.transition && o.hasClass("fade");
            a ? o.one(t.support.transition.end, s) : s(), o.removeClass("in")
        }
    };
    var i = t.fn.tab;
    t.fn.tab = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("tab");
            s || n.data("tab", s = new e(this)), "string" == typeof i && s[i]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
    };
    e.prototype = {
        constructor: e, select: function () {
            var t = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(t)).change(), this.hide()
        }, updater: function (t) {
            return t
        }, show: function () {
            var e = t.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
            return this.$menu.insertAfter(this.$element).css({
                top: e.top + e.height,
                left: e.left
            }).show(), this.shown = !0, this
        }, hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        }, lookup: function (e) {
            var i;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (i = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, i ? this.process(i) : this)
        }, process: function (e) {
            var i = this;
            return e = t.grep(e, function (t) {
                return i.matcher(t)
            }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        }, matcher: function (t) {
            return ~t.toLowerCase().indexOf(this.query.toLowerCase())
        }, sorter: function (t) {
            for (var e, i = [], n = [], s = []; e = t.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? n.push(e) : s.push(e) : i.push(e);
            return i.concat(n, s)
        }, highlighter: function (t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(new RegExp("(" + e + ")", "ig"), function (t, e) {
                return "<strong>" + e + "</strong>"
            })
        }, render: function (e) {
            var i = this;
            return e = t(e).map(function (e, n) {
                return e = t(i.options.item).attr("data-value", n), e.find("a").html(i.highlighter(n)), e[0]
            }), e.first().addClass("active"), this.$menu.html(e), this
        }, next: function (e) {
            var i = this.$menu.find(".active").removeClass("active"), n = i.next();
            n.length || (n = t(this.$menu.find("li")[0])), n.addClass("active")
        }, prev: function (t) {
            var e = this.$menu.find(".active").removeClass("active"), i = e.prev();
            i.length || (i = this.$menu.find("li").last()), i.addClass("active")
        }, listen: function () {
            this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
        }, eventSupported: function (t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        }, move: function (t) {
            if (this.shown) {
                switch (t.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.prev();
                        break;
                    case 40:
                        t.preventDefault(), this.next()
                }
                t.stopPropagation()
            }
        }, keydown: function (e) {
            this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
        }, keypress: function (t) {
            this.suppressKeyPressRepeat || this.move(t)
        }, keyup: function (t) {
            switch (t.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            t.stopPropagation(), t.preventDefault()
        }, focus: function (t) {
            this.focused = !0
        }, blur: function (t) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        }, click: function (t) {
            t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
        }, mouseenter: function (e) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
        }, mouseleave: function (t) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var i = t.fn.typeahead;
    t.fn.typeahead = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("typeahead"), o = "object" == typeof i && i;
            s || n.data("typeahead", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function () {
        return t.fn.typeahead = i, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (e) {
        var i = t(this);
        i.data("typeahead") || i.typeahead(i.data())
    })
}(window.jQuery), function (t) {
    "use strict";
    var e = function (e, i) {
        this.options = t.extend({}, t.fn.affix.defaults, i), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = t(e), this.checkPosition()
    };
    e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e, i = t(document).height(), n = this.$window.scrollTop(), s = this.$element.offset(),
                o = this.options.offset, a = o.bottom, r = o.top;
            "object" != typeof o && (a = r = o), "function" == typeof r && (r = o.top()), "function" == typeof a && (a = o.bottom()), e = !(null != this.unpin && n + this.unpin <= s.top) && (null != a && s.top + this.$element.height() >= i - a ? "bottom" : null != r && n <= r && "top"), this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? s.top - n : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (e ? "-" + e : "")))
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function (i) {
        return this.each(function () {
            var n = t(this), s = n.data("affix"), o = "object" == typeof i && i;
            s || n.data("affix", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {offset: 0}, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this), i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
        })
    })
}(window.jQuery);
(function () {
    !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery)
    }(function (t) {
        "use strict";
        var e, o, n, r, i, s, a, c, l;
        return "caret", e = function () {
            function e(t) {
                this.$inputor = t, this.domInputor = this.$inputor[0]
            }

            return e.prototype.setPos = function (t) {
                return this.domInputor
            }, e.prototype.getIEPosition = function () {
                return this.getPosition()
            }, e.prototype.getPosition = function () {
                var t, e;
                return e = this.getOffset(), t = this.$inputor.offset(), e.left -= t.left, e.top -= t.top, e
            }, e.prototype.getOldIEPos = function () {
                var t, e;
                return e = s.selection.createRange(), t = s.body.createTextRange(), t.moveToElementText(this.domInputor), t.setEndPoint("EndToEnd", e), t.text.length
            }, e.prototype.getPos = function () {
                var t, e, o;
                return (o = this.range()) ? (t = o.cloneRange(), t.selectNodeContents(this.domInputor), t.setEnd(o.endContainer, o.endOffset), e = t.toString().length, t.detach(), e) : s.selection ? this.getOldIEPos() : void 0
            }, e.prototype.getOldIEOffset = function () {
                var t, e;
                return t = s.selection.createRange().duplicate(), t.moveStart("character", -1), e = t.getBoundingClientRect(), {
                    height: e.bottom - e.top,
                    left: e.left,
                    top: e.top
                }
            }, e.prototype.getOffset = function (e) {
                var o, n, r, i;
                if (c.getSelection && (r = this.range())) {
                    if (r.endOffset - 1 < 0) return null;
                    o = r.cloneRange(), o.setStart(r.endContainer, r.endOffset - 1), o.setEnd(r.endContainer, r.endOffset), i = o.getBoundingClientRect(), n = {
                        height: i.height,
                        left: i.left + i.width,
                        top: i.top
                    }, o.detach()
                } else s.selection && (n = this.getOldIEOffset());
                return n && (n.top += t(c).scrollTop(), n.left += t(c).scrollLeft()), n
            }, e.prototype.range = function () {
                var t;
                if (c.getSelection) return t = c.getSelection(), t.rangeCount > 0 ? t.getRangeAt(0) : null
            }, e
        }(), o = function () {
            function e(t) {
                this.$inputor = t, this.domInputor = this.$inputor[0]
            }

            return e.prototype.getIEPos = function () {
                var t, e, o, n, r, i, a;
                return e = this.domInputor, i = s.selection.createRange(), r = 0, i && i.parentElement() === e && (n = e.value.replace(/\r\n/g, "\n"), o = n.length, a = e.createTextRange(), a.moveToBookmark(i.getBookmark()), t = e.createTextRange(), t.collapse(!1), r = a.compareEndPoints("StartToEnd", t) > -1 ? o : -a.moveStart("character", -o)), r
            }, e.prototype.getPos = function () {
                return s.selection ? this.getIEPos() : this.domInputor.selectionStart
            }, e.prototype.setPos = function (t) {
                var e, o;
                return e = this.domInputor, s.selection ? (o = e.createTextRange(), o.move("character", t), o.select()) : e.setSelectionRange && e.setSelectionRange(t, t), e
            }, e.prototype.getIEOffset = function (t) {
                var e, o, n, r;
                return o = this.domInputor.createTextRange(), t || (t = this.getPos()), o.move("character", t), n = o.boundingLeft, r = o.boundingTop, e = o.boundingHeight, {
                    left: n,
                    top: r,
                    height: e
                }
            }, e.prototype.getOffset = function (e) {
                var o, n, r;
                return o = this.$inputor, s.selection ? (n = this.getIEOffset(e), n.top += t(c).scrollTop() + o.scrollTop(), n.left += t(c).scrollLeft() + o.scrollLeft(), n) : (n = o.offset(), r = this.getPosition(e), n = {
                    left: n.left + r.left - o.scrollLeft(),
                    top: n.top + r.top - o.scrollTop(),
                    height: r.height
                })
            }, e.prototype.getPosition = function (e) {
                var o, r, i, s, a, c;
                return o = this.$inputor, i = function (e) {
                    return t("<div></div>").text(e).html().replace(/\r\n|\r|\n/g, "<br/>").replace(/\s/g, "&nbsp;")
                }, void 0 === e && (e = this.getPos()), c = o.val().slice(0, e), r = o.val().slice(e), s = "<span style='position: relative; display: inline;'>" + i(c) + "</span>", s += "<span id='caret' style='position: relative; display: inline;'>|</span>", s += "<span style='position: relative; display: inline;'>" + i(r) + "</span>", a = new n(o), a.create(s).rect()
            }, e.prototype.getIEPosition = function (t) {
                var e, o, n, r, i;
                return n = this.getIEOffset(t), o = this.$inputor.offset(), r = n.left - o.left, i = n.top - o.top, e = n.height, {
                    left: r,
                    top: i,
                    height: e
                }
            }, e
        }(), n = function () {
            function e(t) {
                this.$inputor = t
            }

            return e.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"], e.prototype.mirrorCss = function () {
                var e, o = this;
                return e = {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    zIndex: -2e4
                }, "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"), t.each(this.css_attr, function (t, n) {
                    return e[n] = o.$inputor.css(n)
                }), e
            }, e.prototype.create = function (e) {
                return this.$mirror = t("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(e), this.$inputor.after(this.$mirror), this
            }, e.prototype.rect = function () {
                var t, e, o;
                return t = this.$mirror.find("#caret"), e = t.position(), o = {
                    left: e.left,
                    top: e.top,
                    height: t.height()
                }, this.$mirror.remove(), o
            }, e
        }(), r = {
            contentEditable: function (t) {
                return !(!t[0].contentEditable || "true" !== t[0].contentEditable)
            }
        }, i = {
            pos: function (t) {
                return t || 0 === t ? this.setPos(t) : this.getPos()
            }, position: function (t) {
                return s.selection ? this.getIEPosition(t) : this.getPosition(t)
            }, offset: function (t) {
                return this.getOffset(t)
            }
        }, s = null, c = null, a = null, l = function (t) {
            var e;
            return (e = null != t ? t.iframe : void 0) ? (a = e, c = e.contentWindow, s = e.contentDocument || c.document) : (a = void 0, c = window, s = document)
        }, function (t) {
            s = t[0].ownerDocument, c = s.defaultView || s.parentWindow;
            try {
                return a = c.frameElement
            } catch (t) {
                t
            }
        }, t.fn.caret = function (n, s, a) {
            var c;
            return i[n] ? (t.isPlainObject(s) ? (l(s), s = void 0) : l(a), c = r.contentEditable(this) ? new e(this) : new o(this), i[n].apply(c, [s])) : t.error("Method " + n + " does not exist on jQuery.caret")
        }, t.fn.caret.EditableCaret = e, t.fn.caret.InputCaret = o, t.fn.caret.Utils = r, t.fn.caret.apis = i
    })
}).call(this);
(function () {
    !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery)
    }(function (t) {
        var e, i, n, r, o, s, a, h = [].slice;
        i = function () {
            function e(e) {
                this.current_flag = null, this.controllers = {}, this.alias_maps = {}, this.$inputor = t(e), this.setIframe(), this.listen()
            }

            return e.prototype.createContainer = function (e) {
                if (0 === (this.$el = t("#atwho-container", e)).length) return t(e.body).append(this.$el = t("<div id='atwho-container'></div>"))
            }, e.prototype.setIframe = function (t, e) {
                var i;
                return null == e && (e = !1), t ? (this.window = t.contentWindow, this.document = t.contentDocument || this.window.document, this.iframe = t) : (this.document = document, this.window = window, this.iframe = null), (this.iframeStandalone = e) ? (null != (i = this.$el) && i.remove(), this.createContainer(this.document)) : this.createContainer(document)
            }, e.prototype.controller = function (t) {
                var e, i, n, r;
                if (this.alias_maps[t]) i = this.controllers[this.alias_maps[t]]; else {
                    r = this.controllers;
                    for (n in r) if (e = r[n], n === t) {
                        i = e;
                        break
                    }
                }
                return i || this.controllers[this.current_flag]
            }, e.prototype.set_context_for = function (t) {
                return this.current_flag = t, this
            }, e.prototype.reg = function (t, e) {
                var i, r;
                return i = (r = this.controllers)[t] || (r[t] = new n(this, t)), e.alias && (this.alias_maps[e.alias] = t), i.init(e), this
            }, e.prototype.listen = function () {
                return this.$inputor.on("keyup.atwhoInner", function (t) {
                    return function (e) {
                        return t.on_keyup(e)
                    }
                }(this)).on("keydown.atwhoInner", function (t) {
                    return function (e) {
                        return t.on_keydown(e)
                    }
                }(this)).on("scroll.atwhoInner", function (t) {
                    return function (e) {
                        var i;
                        return null != (i = t.controller()) ? i.view.hide(e) : void 0
                    }
                }(this)).on("blur.atwhoInner", function (t) {
                    return function (e) {
                        var i;
                        if (i = t.controller()) return i.view.hide(e, i.get_opt("display_timeout"))
                    }
                }(this)).on("click.atwhoInner", function (t) {
                    return function (e) {
                        var i;
                        return null != (i = t.controller()) ? i.view.hide(e) : void 0
                    }
                }(this))
            }, e.prototype.shutdown = function () {
                var t, e, i;
                i = this.controllers;
                for (e in i) t = i[e], t.destroy(), delete this.controllers[e];
                return this.$inputor.off(".atwhoInner"), this.$el.remove()
            }, e.prototype.dispatch = function () {
                return t.map(this.controllers, function (t) {
                    return function (e) {
                        var i;
                        return (i = e.get_opt("delay")) ? (clearTimeout(t.delayedCallback), t.delayedCallback = setTimeout(function () {
                            if (e.look_up()) return t.set_context_for(e.at)
                        }, i)) : e.look_up() ? t.set_context_for(e.at) : void 0
                    }
                }(this))
            }, e.prototype.on_keyup = function (e) {
                var i;
                switch (e.keyCode) {
                    case o.ESC:
                        e.preventDefault(), null != (i = this.controller()) && i.view.hide();
                        break;
                    case o.DOWN:
                    case o.UP:
                    case o.CTRL:
                        t.noop();
                        break;
                    case o.P:
                    case o.N:
                        e.ctrlKey || this.dispatch();
                        break;
                    default:
                        this.dispatch()
                }
            }, e.prototype.on_keydown = function (e) {
                var i, n;
                if ((i = null != (n = this.controller()) ? n.view : void 0) && i.visible()) switch (e.keyCode) {
                    case o.ESC:
                        e.preventDefault(), i.hide(e);
                        break;
                    case o.UP:
                        e.preventDefault(), i.prev();
                        break;
                    case o.DOWN:
                        e.preventDefault(), i.next();
                        break;
                    case o.P:
                        if (!e.ctrlKey) return;
                        e.preventDefault(), i.prev();
                        break;
                    case o.N:
                        if (!e.ctrlKey) return;
                        e.preventDefault(), i.next();
                        break;
                    case o.TAB:
                    case o.ENTER:
                        if (!i.visible()) return;
                        e.preventDefault(), i.choose(e);
                        break;
                    default:
                        t.noop()
                }
            }, e
        }(), n = function () {
            function e(e, i) {
                this.app = e, this.at = i, this.$inputor = this.app.$inputor, this.id = this.$inputor[0].id || this.uid(), this.setting = null, this.query = null, this.pos = 0, this.cur_rect = null, this.range = null, 0 === (this.$el = t("#atwho-ground-" + this.id, this.app.$el)).length && this.app.$el.append(this.$el = t("<div id='atwho-ground-" + this.id + "'></div>")), this.model = new s(this), this.view = new a(this)
            }

            return e.prototype.uid = function () {
                return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
            }, e.prototype.init = function (e) {
                return this.setting = t.extend({}, this.setting || t.fn.atwho.default, e), this.view.init(), this.model.reload(this.setting.data)
            }, e.prototype.destroy = function () {
                return this.trigger("beforeDestroy"), this.model.destroy(), this.view.destroy(), this.$el.remove()
            }, e.prototype.call_default = function () {
                var e, i, n;
                n = arguments[0], e = 2 <= arguments.length ? h.call(arguments, 1) : [];
                try {
                    return r[n].apply(this, e)
                } catch (e) {
                    return i = e, t.error(i + " Or maybe At.js doesn't have function " + n)
                }
            }, e.prototype.trigger = function (t, e) {
                var i, n;
                return null == e && (e = []), e.push(this), i = this.get_opt("alias"), n = i ? t + "-" + i + ".atwho" : t + ".atwho", this.$inputor.trigger(n, e)
            }, e.prototype.callbacks = function (t) {
                return this.get_opt("callbacks")[t] || r[t]
            }, e.prototype.get_opt = function (t, e) {
                try {
                    return this.setting[t]
                } catch (t) {
                    return t, null
                }
            }, e.prototype.content = function () {
                return this.$inputor.is("textarea, input") ? this.$inputor.val() : this.$inputor.text()
            }, e.prototype.catch_query = function () {
                var t, e, i, n, r, o;
                return e = this.content(), t = this.$inputor.caret("pos", {iframe: this.app.iframe}), o = e.slice(0, t), n = this.callbacks("matcher").call(this, this.at, o, this.get_opt("start_with_space")), "string" == typeof n && n.length <= this.get_opt("max_len", 20) ? (r = t - n.length, i = r + n.length, this.pos = r, n = {
                    text: n,
                    head_pos: r,
                    end_pos: i
                }, this.trigger("matched", [this.at, n.text])) : (n = null, this.view.hide()), this.query = n
            }, e.prototype.rect = function () {
                var e, i, n;
                if (e = this.$inputor.caret("offset", this.pos - 1, {iframe: this.app.iframe})) return this.app.iframe && !this.app.iframeStandalone && (i = t(this.app.iframe).offset(), e.left += i.left, e.top += i.top), this.$inputor.is("[contentEditable]") && (e = this.cur_rect || (this.cur_rect = e)), n = this.app.document.selection ? 0 : 2, {
                    left: e.left,
                    top: e.top,
                    bottom: e.top + e.height + n
                }
            }, e.prototype.reset_rect = function () {
                if (this.$inputor.is("[contentEditable]")) return this.cur_rect = null
            }, e.prototype.mark_range = function () {
                var t;
                if (this.$inputor.is("[contentEditable]")) return this.app.window.getSelection && (t = this.app.window.getSelection()).rangeCount > 0 ? this.range = t.getRangeAt(0) : this.app.document.selection ? this.ie8_range = this.app.document.selection.createRange() : void 0
            }, e.prototype.insert_content_for = function (e) {
                var i, n, r;
                return n = e.data("value"), r = this.get_opt("insert_tpl"), this.$inputor.is("textarea, input") || !r ? n : (i = t.extend({}, e.data("item-data"), {
                    "atwho-data-value": n,
                    "atwho-at": this.at
                }), this.callbacks("tpl_eval").call(this, r, i))
            }, e.prototype.insert = function (e, i) {
                var n, r, o, s, a, h, l, u, c;
                return n = this.$inputor, c = this.callbacks("inserting_wrapper").call(this, n, e, this.get_opt("suffix")), n.is("textarea, input") ? (h = n.val(), l = h.slice(0, Math.max(this.query.head_pos - this.at.length, 0)), u = "" + l + c + h.slice(this.query.end_pos || 0), n.val(u), n.caret("pos", l.length + c.length, {iframe: this.app.iframe})) : (s = this.range) ? (o = s.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length, s.setStart(s.endContainer, Math.max(o, 0)), s.setEnd(s.endContainer, s.endOffset), s.deleteContents(), r = t(c, this.app.document)[0], s.insertNode(r), s.setEndAfter(r), s.collapse(!1), a = this.app.window.getSelection(), a.removeAllRanges(), a.addRange(s)) : (s = this.ie8_range) && (s.moveStart("character", this.query.end_pos - this.query.head_pos - this.at.length), s.pasteHTML(c), s.collapse(!1), s.select()), n.is(":focus") || n.focus(), n.change()
            }, e.prototype.render_view = function (t) {
                var e;
                return e = this.get_opt("search_key"), t = this.callbacks("sorter").call(this, this.query.text, t.slice(0, 1001), e), this.view.render(t.slice(0, this.get_opt("limit")))
            }, e.prototype.look_up = function () {
                var e, i;
                if (e = this.catch_query()) return i = function (t) {
                    return t && t.length > 0 ? this.render_view(t) : this.view.hide()
                }, this.model.query(e.text, t.proxy(i, this)), e
            }, e
        }(), s = function () {
            function e(t) {
                this.context = t, this.at = this.context.at, this.storage = this.context.$inputor
            }

            return e.prototype.destroy = function () {
                return this.storage.data(this.at, null)
            }, e.prototype.saved = function () {
                return this.fetch() > 0
            }, e.prototype.query = function (t, e) {
                var i, n, r;
                return i = this.fetch(), n = this.context.get_opt("search_key"), i = this.context.callbacks("filter").call(this.context, t, i, n) || [], r = this.context.callbacks("remote_filter"), i.length > 0 || !r && 0 === i.length ? e(i) : r.call(this.context, t, e)
            }, e.prototype.fetch = function () {
                return this.storage.data(this.at) || []
            }, e.prototype.save = function (t) {
                return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, t || []))
            }, e.prototype.load = function (t) {
                if (!this.saved() && t) return this._load(t)
            }, e.prototype.reload = function (t) {
                return this._load(t)
            }, e.prototype._load = function (e) {
                return "string" == typeof e ? t.ajax(e, {dataType: "json"}).done(function (t) {
                    return function (e) {
                        return t.save(e)
                    }
                }(this)) : this.save(e)
            }, e
        }(), a = function () {
            function e(e) {
                this.context = e, this.$el = t("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"), this.timeout_id = null, this.context.$el.append(this.$el), this.bind_event()
            }

            return e.prototype.init = function () {
                var t;
                return t = this.context.get_opt("alias") || this.context.at.charCodeAt(0), this.$el.attr({id: "at-view-" + t})
            }, e.prototype.destroy = function () {
                return this.$el.remove()
            }, e.prototype.bind_event = function () {
                var e;
                return e = this.$el.find("ul"), e.on("mouseenter.atwho-view", "li", function (i) {
                    return e.find(".cur").removeClass("cur"), t(i.currentTarget).addClass("cur")
                }).on("click", function (t) {
                    return function (e) {
                        return t.choose(e), e.preventDefault()
                    }
                }(this))
            }, e.prototype.visible = function () {
                return this.$el.is(":visible")
            }, e.prototype.choose = function (t) {
                var e, i;
                if ((e = this.$el.find(".cur")).length && (i = this.context.insert_content_for(e), this.context.insert(this.context.callbacks("before_insert").call(this.context, i, e), e), this.context.trigger("inserted", [e, t]), this.hide(t)), this.context.get_opt("hide_without_suffix")) return this.stop_showing = !0
            }, e.prototype.reposition = function (e) {
                var i, n, r, o;
                return o = this.context.app.iframeStandalone ? this.context.app.window : window, e.bottom + this.$el.height() - t(o).scrollTop() > t(o).height() && (e.bottom = e.top - this.$el.height()), e.left > (n = t(o).width() - this.$el.width() - 5) && (e.left = n), i = {
                    left: e.left,
                    top: e.bottom
                }, null != (r = this.context.callbacks("before_reposition")) && r.call(this.context, i), this.$el.offset(i), this.context.trigger("reposition", [i])
            }, e.prototype.next = function () {
                var t, e;
                return t = this.$el.find(".cur").removeClass("cur"), e = t.next(), e.length || (e = this.$el.find("li:first")), e.addClass("cur")
            }, e.prototype.prev = function () {
                var t, e;
                return t = this.$el.find(".cur").removeClass("cur"), e = t.prev(), e.length || (e = this.$el.find("li:last")), e.addClass("cur")
            }, e.prototype.show = function () {
                var t;
                return this.stop_showing ? void(this.stop_showing = !1) : (this.context.mark_range(), this.visible() || (this.$el.show(), this.context.trigger("shown")), (t = this.context.rect()) ? this.reposition(t) : void 0)
            }, e.prototype.hide = function (t, e) {
                var i;
                if (this.visible()) return isNaN(e) ? (this.context.reset_rect(), this.$el.hide(), this.context.trigger("hidden", [t])) : (i = function (t) {
                    return function () {
                        return t.hide()
                    }
                }(this), clearTimeout(this.timeout_id), this.timeout_id = setTimeout(i, e))
            }, e.prototype.render = function (e) {
                var i, n, r, o, s, a, h;
                if (!(t.isArray(e) && e.length > 0)) return void this.hide();
                for (this.$el.find("ul").empty(), n = this.$el.find("ul"), s = this.context.get_opt("tpl"), a = 0, h = e.length; a < h; a++) r = e[a], r = t.extend({}, r, {"atwho-at": this.context.at}), o = this.context.callbacks("tpl_eval").call(this.context, s, r), i = t(this.context.callbacks("highlighter").call(this.context, o, this.context.query.text)), i.data("item-data", r), n.append(i);
                return this.show(), this.context.get_opt("highlight_first") ? n.find("li:first").addClass("cur") : void 0
            }, e
        }(), o = {
            DOWN: 40,
            UP: 38,
            ESC: 27,
            TAB: 9,
            ENTER: 13,
            CTRL: 17,
            P: 80,
            N: 78
        }, r = {
            before_save: function (e) {
                var i, n, r, o;
                if (!t.isArray(e)) return e;
                for (o = [], n = 0, r = e.length; n < r; n++) i = e[n], t.isPlainObject(i) ? o.push(i) : o.push({name: i});
                return o
            }, matcher: function (t, e, i) {
                var n, r, o, s;
                return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), i && (t = "(?:^|\\s)" + t), o = decodeURI("%C3%80"), s = decodeURI("%C3%BF"), r = new RegExp(t + "([A-Za-z" + o + "-" + s + "0-9_+-]*)$|" + t + "([^\\x00-\\xff]*)$", "gi"), n = r.exec(e), n ? n[2] || n[1] : null
            }, filter: function (t, e, i) {
                var n, r, o, s;
                for (s = [], r = 0, o = e.length; r < o; r++) n = e[r], ~new String(n[i]).toLowerCase().indexOf(t.toLowerCase()) && s.push(n);
                return s
            }, remote_filter: null, sorter: function (t, e, i) {
                var n, r, o, s;
                if (!t) return e;
                for (s = [], r = 0, o = e.length; r < o; r++) n = e[r], n.atwho_order = new String(n[i]).toLowerCase().indexOf(t.toLowerCase()), n.atwho_order > -1 && s.push(n);
                return s.sort(function (t, e) {
                    return t.atwho_order - e.atwho_order
                })
            }, tpl_eval: function (t, e) {
                try {
                    return t.replace(/\$\{([^\}]*)\}/g, function (t, i, n) {
                        return e[i]
                    })
                } catch (t) {
                    return t, ""
                }
            }, highlighter: function (t, e) {
                var i;
                return e ? (i = new RegExp(">\\s*(\\w*?)(" + e.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), t.replace(i, function (t, e, i, n) {
                    return "> " + e + "<strong>" + i + "</strong>" + n + " <"
                })) : t
            }, before_insert: function (t, e) {
                return t
            }, inserting_wrapper: function (t, e, i) {
                var n, r;
                return n = "" === i ? i : i || " ", t.is("textarea, input") ? "" + e + n : "true" === t.attr("contentEditable") ? (n = "" === i ? i : i || "&nbsp;", /firefox/i.test(navigator.userAgent) ? r = "<span>" + e + n + "</span>" : (i = "<span contenteditable='false'>" + n + "<span>", r = "<span contenteditable='false'>" + e + i + "</span>"), this.app.document.selection && (r = "<span contenteditable='true'>" + e + "</span>"), r) : void 0
            }
        }, e = {
            load: function (t, e) {
                var i;
                if (i = this.controller(t)) return i.model.load(e)
            }, setIframe: function (t, e) {
                return this.setIframe(t, e), null
            }, run: function () {
                return this.dispatch()
            }, destroy: function () {
                return this.shutdown(), this.$inputor.data("atwho", null)
            }
        }, t.fn.atwho = function (n) {
            var r, o;
            return o = arguments, r = null, this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function () {
                var s, a;
                return (a = (s = t(this)).data("atwho")) || s.data("atwho", a = new i(this)), "object" != typeof n && n ? e[n] && a ? r = e[n].apply(a, Array.prototype.slice.call(o, 1)) : t.error("Method " + n + " does not exist on jQuery.caret") : a.reg(n.at, n)
            }), r || this
        }, t.fn.atwho.default = {
            at: void 0,
            alias: void 0,
            data: null,
            tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
            insert_tpl: "<span id='${id}'>${atwho-data-value}</span>",
            callbacks: r,
            search_key: "name",
            suffix: void 0,
            hide_without_suffix: !1,
            start_with_space: !0,
            highlight_first: !0,
            limit: 5,
            max_len: 20,
            display_timeout: 300,
            delay: null
        }
    })
}).call(this);
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var r;
        "undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self), r.markdownit = e()
    }
}(function () {
    var e;
    return function e(r, t, n) {
        function s(o, a) {
            if (!t[o]) {
                if (!r[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (i) return i(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = t[o] = {exports: {}};
                r[o][0].call(u.exports, function (e) {
                    var t = r[o][1][e];
                    return s(t || e)
                }, u, u.exports, e, r, t, n)
            }
            return t[o].exports
        }

        for (var i = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
        return s
    }({
        1: [function (e, r, t) {
            "use strict";
            r.exports = {
                Aacute: "Á",
                aacute: "á",
                Abreve: "Ă",
                abreve: "ă",
                ac: "∾",
                acd: "∿",
                acE: "∾̳",
                Acirc: "Â",
                acirc: "â",
                acute: "´",
                Acy: "А",
                acy: "а",
                AElig: "Æ",
                aelig: "æ",
                af: "⁡",
                Afr: "𝔄",
                afr: "𝔞",
                Agrave: "À",
                agrave: "à",
                alefsym: "ℵ",
                aleph: "ℵ",
                Alpha: "Α",
                alpha: "α",
                Amacr: "Ā",
                amacr: "ā",
                amalg: "⨿",
                AMP: "&",
                amp: "&",
                And: "⩓",
                and: "∧",
                andand: "⩕",
                andd: "⩜",
                andslope: "⩘",
                andv: "⩚",
                ang: "∠",
                ange: "⦤",
                angle: "∠",
                angmsd: "∡",
                angmsdaa: "⦨",
                angmsdab: "⦩",
                angmsdac: "⦪",
                angmsdad: "⦫",
                angmsdae: "⦬",
                angmsdaf: "⦭",
                angmsdag: "⦮",
                angmsdah: "⦯",
                angrt: "∟",
                angrtvb: "⊾",
                angrtvbd: "⦝",
                angsph: "∢",
                angst: "Å",
                angzarr: "⍼",
                Aogon: "Ą",
                aogon: "ą",
                Aopf: "𝔸",
                aopf: "𝕒",
                ap: "≈",
                apacir: "⩯",
                apE: "⩰",
                ape: "≊",
                apid: "≋",
                apos: "'",
                ApplyFunction: "⁡",
                approx: "≈",
                approxeq: "≊",
                Aring: "Å",
                aring: "å",
                Ascr: "𝒜",
                ascr: "𝒶",
                Assign: "≔",
                ast: "*",
                asymp: "≈",
                asympeq: "≍",
                Atilde: "Ã",
                atilde: "ã",
                Auml: "Ä",
                auml: "ä",
                awconint: "∳",
                awint: "⨑",
                backcong: "≌",
                backepsilon: "϶",
                backprime: "‵",
                backsim: "∽",
                backsimeq: "⋍",
                Backslash: "∖",
                Barv: "⫧",
                barvee: "⊽",
                Barwed: "⌆",
                barwed: "⌅",
                barwedge: "⌅",
                bbrk: "⎵",
                bbrktbrk: "⎶",
                bcong: "≌",
                Bcy: "Б",
                bcy: "б",
                bdquo: "„",
                becaus: "∵",
                Because: "∵",
                because: "∵",
                bemptyv: "⦰",
                bepsi: "϶",
                bernou: "ℬ",
                Bernoullis: "ℬ",
                Beta: "Β",
                beta: "β",
                beth: "ℶ",
                between: "≬",
                Bfr: "𝔅",
                bfr: "𝔟",
                bigcap: "⋂",
                bigcirc: "◯",
                bigcup: "⋃",
                bigodot: "⨀",
                bigoplus: "⨁",
                bigotimes: "⨂",
                bigsqcup: "⨆",
                bigstar: "★",
                bigtriangledown: "▽",
                bigtriangleup: "△",
                biguplus: "⨄",
                bigvee: "⋁",
                bigwedge: "⋀",
                bkarow: "⤍",
                blacklozenge: "⧫",
                blacksquare: "▪",
                blacktriangle: "▴",
                blacktriangledown: "▾",
                blacktriangleleft: "◂",
                blacktriangleright: "▸",
                blank: "␣",
                blk12: "▒",
                blk14: "░",
                blk34: "▓",
                block: "█",
                bne: "=⃥",
                bnequiv: "≡⃥",
                bNot: "⫭",
                bnot: "⌐",
                Bopf: "𝔹",
                bopf: "𝕓",
                bot: "⊥",
                bottom: "⊥",
                bowtie: "⋈",
                boxbox: "⧉",
                boxDL: "╗",
                boxDl: "╖",
                boxdL: "╕",
                boxdl: "┐",
                boxDR: "╔",
                boxDr: "╓",
                boxdR: "╒",
                boxdr: "┌",
                boxH: "═",
                boxh: "─",
                boxHD: "╦",
                boxHd: "╤",
                boxhD: "╥",
                boxhd: "┬",
                boxHU: "╩",
                boxHu: "╧",
                boxhU: "╨",
                boxhu: "┴",
                boxminus: "⊟",
                boxplus: "⊞",
                boxtimes: "⊠",
                boxUL: "╝",
                boxUl: "╜",
                boxuL: "╛",
                boxul: "┘",
                boxUR: "╚",
                boxUr: "╙",
                boxuR: "╘",
                boxur: "└",
                boxV: "║",
                boxv: "│",
                boxVH: "╬",
                boxVh: "╫",
                boxvH: "╪",
                boxvh: "┼",
                boxVL: "╣",
                boxVl: "╢",
                boxvL: "╡",
                boxvl: "┤",
                boxVR: "╠",
                boxVr: "╟",
                boxvR: "╞",
                boxvr: "├",
                bprime: "‵",
                Breve: "˘",
                breve: "˘",
                brvbar: "¦",
                Bscr: "ℬ",
                bscr: "𝒷",
                bsemi: "⁏",
                bsim: "∽",
                bsime: "⋍",
                bsol: "\\",
                bsolb: "⧅",
                bsolhsub: "⟈",
                bull: "•",
                bullet: "•",
                bump: "≎",
                bumpE: "⪮",
                bumpe: "≏",
                Bumpeq: "≎",
                bumpeq: "≏",
                Cacute: "Ć",
                cacute: "ć",
                Cap: "⋒",
                cap: "∩",
                capand: "⩄",
                capbrcup: "⩉",
                capcap: "⩋",
                capcup: "⩇",
                capdot: "⩀",
                CapitalDifferentialD: "ⅅ",
                caps: "∩︀",
                caret: "⁁",
                caron: "ˇ",
                Cayleys: "ℭ",
                ccaps: "⩍",
                Ccaron: "Č",
                ccaron: "č",
                Ccedil: "Ç",
                ccedil: "ç",
                Ccirc: "Ĉ",
                ccirc: "ĉ",
                Cconint: "∰",
                ccups: "⩌",
                ccupssm: "⩐",
                Cdot: "Ċ",
                cdot: "ċ",
                cedil: "¸",
                Cedilla: "¸",
                cemptyv: "⦲",
                cent: "¢",
                CenterDot: "·",
                centerdot: "·",
                Cfr: "ℭ",
                cfr: "𝔠",
                CHcy: "Ч",
                chcy: "ч",
                check: "✓",
                checkmark: "✓",
                Chi: "Χ",
                chi: "χ",
                cir: "○",
                circ: "ˆ",
                circeq: "≗",
                circlearrowleft: "↺",
                circlearrowright: "↻",
                circledast: "⊛",
                circledcirc: "⊚",
                circleddash: "⊝",
                CircleDot: "⊙",
                circledR: "®",
                circledS: "Ⓢ",
                CircleMinus: "⊖",
                CirclePlus: "⊕",
                CircleTimes: "⊗",
                cirE: "⧃",
                cire: "≗",
                cirfnint: "⨐",
                cirmid: "⫯",
                cirscir: "⧂",
                ClockwiseContourIntegral: "∲",
                CloseCurlyDoubleQuote: "”",
                CloseCurlyQuote: "’",
                clubs: "♣",
                clubsuit: "♣",
                Colon: "∷",
                colon: ":",
                Colone: "⩴",
                colone: "≔",
                coloneq: "≔",
                comma: ",",
                commat: "@",
                comp: "∁",
                compfn: "∘",
                complement: "∁",
                complexes: "ℂ",
                cong: "≅",
                congdot: "⩭",
                Congruent: "≡",
                Conint: "∯",
                conint: "∮",
                ContourIntegral: "∮",
                Copf: "ℂ",
                copf: "𝕔",
                coprod: "∐",
                Coproduct: "∐",
                COPY: "©",
                copy: "©",
                copysr: "℗",
                CounterClockwiseContourIntegral: "∳",
                crarr: "↵",
                Cross: "⨯",
                cross: "✗",
                Cscr: "𝒞",
                cscr: "𝒸",
                csub: "⫏",
                csube: "⫑",
                csup: "⫐",
                csupe: "⫒",
                ctdot: "⋯",
                cudarrl: "⤸",
                cudarrr: "⤵",
                cuepr: "⋞",
                cuesc: "⋟",
                cularr: "↶",
                cularrp: "⤽",
                Cup: "⋓",
                cup: "∪",
                cupbrcap: "⩈",
                CupCap: "≍",
                cupcap: "⩆",
                cupcup: "⩊",
                cupdot: "⊍",
                cupor: "⩅",
                cups: "∪︀",
                curarr: "↷",
                curarrm: "⤼",
                curlyeqprec: "⋞",
                curlyeqsucc: "⋟",
                curlyvee: "⋎",
                curlywedge: "⋏",
                curren: "¤",
                curvearrowleft: "↶",
                curvearrowright: "↷",
                cuvee: "⋎",
                cuwed: "⋏",
                cwconint: "∲",
                cwint: "∱",
                cylcty: "⌭",
                Dagger: "‡",
                dagger: "†",
                daleth: "ℸ",
                Darr: "↡",
                dArr: "⇓",
                darr: "↓",
                dash: "‐",
                Dashv: "⫤",
                dashv: "⊣",
                dbkarow: "⤏",
                dblac: "˝",
                Dcaron: "Ď",
                dcaron: "ď",
                Dcy: "Д",
                dcy: "д",
                DD: "ⅅ",
                dd: "ⅆ",
                ddagger: "‡",
                ddarr: "⇊",
                DDotrahd: "⤑",
                ddotseq: "⩷",
                deg: "°",
                Del: "∇",
                Delta: "Δ",
                delta: "δ",
                demptyv: "⦱",
                dfisht: "⥿",
                Dfr: "𝔇",
                dfr: "𝔡",
                dHar: "⥥",
                dharl: "⇃",
                dharr: "⇂",
                DiacriticalAcute: "´",
                DiacriticalDot: "˙",
                DiacriticalDoubleAcute: "˝",
                DiacriticalGrave: "`",
                DiacriticalTilde: "˜",
                diam: "⋄",
                Diamond: "⋄",
                diamond: "⋄",
                diamondsuit: "♦",
                diams: "♦",
                die: "¨",
                DifferentialD: "ⅆ",
                digamma: "ϝ",
                disin: "⋲",
                div: "÷",
                divide: "÷",
                divideontimes: "⋇",
                divonx: "⋇",
                DJcy: "Ђ",
                djcy: "ђ",
                dlcorn: "⌞",
                dlcrop: "⌍",
                dollar: "$",
                Dopf: "𝔻",
                dopf: "𝕕",
                Dot: "¨",
                dot: "˙",
                DotDot: "⃜",
                doteq: "≐",
                doteqdot: "≑",
                DotEqual: "≐",
                dotminus: "∸",
                dotplus: "∔",
                dotsquare: "⊡",
                doublebarwedge: "⌆",
                DoubleContourIntegral: "∯",
                DoubleDot: "¨",
                DoubleDownArrow: "⇓",
                DoubleLeftArrow: "⇐",
                DoubleLeftRightArrow: "⇔",
                DoubleLeftTee: "⫤",
                DoubleLongLeftArrow: "⟸",
                DoubleLongLeftRightArrow: "⟺",
                DoubleLongRightArrow: "⟹",
                DoubleRightArrow: "⇒",
                DoubleRightTee: "⊨",
                DoubleUpArrow: "⇑",
                DoubleUpDownArrow: "⇕",
                DoubleVerticalBar: "∥",
                DownArrow: "↓",
                Downarrow: "⇓",
                downarrow: "↓",
                DownArrowBar: "⤓",
                DownArrowUpArrow: "⇵",
                DownBreve: "̑",
                downdownarrows: "⇊",
                downharpoonleft: "⇃",
                downharpoonright: "⇂",
                DownLeftRightVector: "⥐",
                DownLeftTeeVector: "⥞",
                DownLeftVector: "↽",
                DownLeftVectorBar: "⥖",
                DownRightTeeVector: "⥟",
                DownRightVector: "⇁",
                DownRightVectorBar: "⥗",
                DownTee: "⊤",
                DownTeeArrow: "↧",
                drbkarow: "⤐",
                drcorn: "⌟",
                drcrop: "⌌",
                Dscr: "𝒟",
                dscr: "𝒹",
                DScy: "Ѕ",
                dscy: "ѕ",
                dsol: "⧶",
                Dstrok: "Đ",
                dstrok: "đ",
                dtdot: "⋱",
                dtri: "▿",
                dtrif: "▾",
                duarr: "⇵",
                duhar: "⥯",
                dwangle: "⦦",
                DZcy: "Џ",
                dzcy: "џ",
                dzigrarr: "⟿",
                Eacute: "É",
                eacute: "é",
                easter: "⩮",
                Ecaron: "Ě",
                ecaron: "ě",
                ecir: "≖",
                Ecirc: "Ê",
                ecirc: "ê",
                ecolon: "≕",
                Ecy: "Э",
                ecy: "э",
                eDDot: "⩷",
                Edot: "Ė",
                eDot: "≑",
                edot: "ė",
                ee: "ⅇ",
                efDot: "≒",
                Efr: "𝔈",
                efr: "𝔢",
                eg: "⪚",
                Egrave: "È",
                egrave: "è",
                egs: "⪖",
                egsdot: "⪘",
                el: "⪙",
                Element: "∈",
                elinters: "⏧",
                ell: "ℓ",
                els: "⪕",
                elsdot: "⪗",
                Emacr: "Ē",
                emacr: "ē",
                empty: "∅",
                emptyset: "∅",
                EmptySmallSquare: "◻",
                emptyv: "∅",
                EmptyVerySmallSquare: "▫",
                emsp: " ",
                emsp13: " ",
                emsp14: " ",
                ENG: "Ŋ",
                eng: "ŋ",
                ensp: " ",
                Eogon: "Ę",
                eogon: "ę",
                Eopf: "𝔼",
                eopf: "𝕖",
                epar: "⋕",
                eparsl: "⧣",
                eplus: "⩱",
                epsi: "ε",
                Epsilon: "Ε",
                epsilon: "ε",
                epsiv: "ϵ",
                eqcirc: "≖",
                eqcolon: "≕",
                eqsim: "≂",
                eqslantgtr: "⪖",
                eqslantless: "⪕",
                Equal: "⩵",
                equals: "=",
                EqualTilde: "≂",
                equest: "≟",
                Equilibrium: "⇌",
                equiv: "≡",
                equivDD: "⩸",
                eqvparsl: "⧥",
                erarr: "⥱",
                erDot: "≓",
                Escr: "ℰ",
                escr: "ℯ",
                esdot: "≐",
                Esim: "⩳",
                esim: "≂",
                Eta: "Η",
                eta: "η",
                ETH: "Ð",
                eth: "ð",
                Euml: "Ë",
                euml: "ë",
                euro: "€",
                excl: "!",
                exist: "∃",
                Exists: "∃",
                expectation: "ℰ",
                ExponentialE: "ⅇ",
                exponentiale: "ⅇ",
                fallingdotseq: "≒",
                Fcy: "Ф",
                fcy: "ф",
                female: "♀",
                ffilig: "ﬃ",
                fflig: "ﬀ",
                ffllig: "ﬄ",
                Ffr: "𝔉",
                ffr: "𝔣",
                filig: "ﬁ",
                FilledSmallSquare: "◼",
                FilledVerySmallSquare: "▪",
                fjlig: "fj",
                flat: "♭",
                fllig: "ﬂ",
                fltns: "▱",
                fnof: "ƒ",
                Fopf: "𝔽",
                fopf: "𝕗",
                ForAll: "∀",
                forall: "∀",
                fork: "⋔",
                forkv: "⫙",
                Fouriertrf: "ℱ",
                fpartint: "⨍",
                frac12: "½",
                frac13: "⅓",
                frac14: "¼",
                frac15: "⅕",
                frac16: "⅙",
                frac18: "⅛",
                frac23: "⅔",
                frac25: "⅖",
                frac34: "¾",
                frac35: "⅗",
                frac38: "⅜",
                frac45: "⅘",
                frac56: "⅚",
                frac58: "⅝",
                frac78: "⅞",
                frasl: "⁄",
                frown: "⌢",
                Fscr: "ℱ",
                fscr: "𝒻",
                gacute: "ǵ",
                Gamma: "Γ",
                gamma: "γ",
                Gammad: "Ϝ",
                gammad: "ϝ",
                gap: "⪆",
                Gbreve: "Ğ",
                gbreve: "ğ",
                Gcedil: "Ģ",
                Gcirc: "Ĝ",
                gcirc: "ĝ",
                Gcy: "Г",
                gcy: "г",
                Gdot: "Ġ",
                gdot: "ġ",
                gE: "≧",
                ge: "≥",
                gEl: "⪌",
                gel: "⋛",
                geq: "≥",
                geqq: "≧",
                geqslant: "⩾",
                ges: "⩾",
                gescc: "⪩",
                gesdot: "⪀",
                gesdoto: "⪂",
                gesdotol: "⪄",
                gesl: "⋛︀",
                gesles: "⪔",
                Gfr: "𝔊",
                gfr: "𝔤",
                Gg: "⋙",
                gg: "≫",
                ggg: "⋙",
                gimel: "ℷ",
                GJcy: "Ѓ",
                gjcy: "ѓ",
                gl: "≷",
                gla: "⪥",
                glE: "⪒",
                glj: "⪤",
                gnap: "⪊",
                gnapprox: "⪊",
                gnE: "≩",
                gne: "⪈",
                gneq: "⪈",
                gneqq: "≩",
                gnsim: "⋧",
                Gopf: "𝔾",
                gopf: "𝕘",
                grave: "`",
                GreaterEqual: "≥",
                GreaterEqualLess: "⋛",
                GreaterFullEqual: "≧",
                GreaterGreater: "⪢",
                GreaterLess: "≷",
                GreaterSlantEqual: "⩾",
                GreaterTilde: "≳",
                Gscr: "𝒢",
                gscr: "ℊ",
                gsim: "≳",
                gsime: "⪎",
                gsiml: "⪐",
                GT: ">",
                Gt: "≫",
                gt: ">",
                gtcc: "⪧",
                gtcir: "⩺",
                gtdot: "⋗",
                gtlPar: "⦕",
                gtquest: "⩼",
                gtrapprox: "⪆",
                gtrarr: "⥸",
                gtrdot: "⋗",
                gtreqless: "⋛",
                gtreqqless: "⪌",
                gtrless: "≷",
                gtrsim: "≳",
                gvertneqq: "≩︀",
                gvnE: "≩︀",
                Hacek: "ˇ",
                hairsp: " ",
                half: "½",
                hamilt: "ℋ",
                HARDcy: "Ъ",
                hardcy: "ъ",
                hArr: "⇔",
                harr: "↔",
                harrcir: "⥈",
                harrw: "↭",
                Hat: "^",
                hbar: "ℏ",
                Hcirc: "Ĥ",
                hcirc: "ĥ",
                hearts: "♥",
                heartsuit: "♥",
                hellip: "…",
                hercon: "⊹",
                Hfr: "ℌ",
                hfr: "𝔥",
                HilbertSpace: "ℋ",
                hksearow: "⤥",
                hkswarow: "⤦",
                hoarr: "⇿",
                homtht: "∻",
                hookleftarrow: "↩",
                hookrightarrow: "↪",
                Hopf: "ℍ",
                hopf: "𝕙",
                horbar: "―",
                HorizontalLine: "─",
                Hscr: "ℋ",
                hscr: "𝒽",
                hslash: "ℏ",
                Hstrok: "Ħ",
                hstrok: "ħ",
                HumpDownHump: "≎",
                HumpEqual: "≏",
                hybull: "⁃",
                hyphen: "‐",
                Iacute: "Í",
                iacute: "í",
                ic: "⁣",
                Icirc: "Î",
                icirc: "î",
                Icy: "И",
                icy: "и",
                Idot: "İ",
                IEcy: "Е",
                iecy: "е",
                iexcl: "¡",
                iff: "⇔",
                Ifr: "ℑ",
                ifr: "𝔦",
                Igrave: "Ì",
                igrave: "ì",
                ii: "ⅈ",
                iiiint: "⨌",
                iiint: "∭",
                iinfin: "⧜",
                iiota: "℩",
                IJlig: "Ĳ",
                ijlig: "ĳ",
                Im: "ℑ",
                Imacr: "Ī",
                imacr: "ī",
                image: "ℑ",
                ImaginaryI: "ⅈ",
                imagline: "ℐ",
                imagpart: "ℑ",
                imath: "ı",
                imof: "⊷",
                imped: "Ƶ",
                Implies: "⇒",
                in: "∈",
                incare: "℅",
                infin: "∞",
                infintie: "⧝",
                inodot: "ı",
                Int: "∬",
                int: "∫",
                intcal: "⊺",
                integers: "ℤ",
                Integral: "∫",
                intercal: "⊺",
                Intersection: "⋂",
                intlarhk: "⨗",
                intprod: "⨼",
                InvisibleComma: "⁣",
                InvisibleTimes: "⁢",
                IOcy: "Ё",
                iocy: "ё",
                Iogon: "Į",
                iogon: "į",
                Iopf: "𝕀",
                iopf: "𝕚",
                Iota: "Ι",
                iota: "ι",
                iprod: "⨼",
                iquest: "¿",
                Iscr: "ℐ",
                iscr: "𝒾",
                isin: "∈",
                isindot: "⋵",
                isinE: "⋹",
                isins: "⋴",
                isinsv: "⋳",
                isinv: "∈",
                it: "⁢",
                Itilde: "Ĩ",
                itilde: "ĩ",
                Iukcy: "І",
                iukcy: "і",
                Iuml: "Ï",
                iuml: "ï",
                Jcirc: "Ĵ",
                jcirc: "ĵ",
                Jcy: "Й",
                jcy: "й",
                Jfr: "𝔍",
                jfr: "𝔧",
                jmath: "ȷ",
                Jopf: "𝕁",
                jopf: "𝕛",
                Jscr: "𝒥",
                jscr: "𝒿",
                Jsercy: "Ј",
                jsercy: "ј",
                Jukcy: "Є",
                jukcy: "є",
                Kappa: "Κ",
                kappa: "κ",
                kappav: "ϰ",
                Kcedil: "Ķ",
                kcedil: "ķ",
                Kcy: "К",
                kcy: "к",
                Kfr: "𝔎",
                kfr: "𝔨",
                kgreen: "ĸ",
                KHcy: "Х",
                khcy: "х",
                KJcy: "Ќ",
                kjcy: "ќ",
                Kopf: "𝕂",
                kopf: "𝕜",
                Kscr: "𝒦",
                kscr: "𝓀",
                lAarr: "⇚",
                Lacute: "Ĺ",
                lacute: "ĺ",
                laemptyv: "⦴",
                lagran: "ℒ",
                Lambda: "Λ",
                lambda: "λ",
                Lang: "⟪",
                lang: "⟨",
                langd: "⦑",
                langle: "⟨",
                lap: "⪅",
                Laplacetrf: "ℒ",
                laquo: "«",
                Larr: "↞",
                lArr: "⇐",
                larr: "←",
                larrb: "⇤",
                larrbfs: "⤟",
                larrfs: "⤝",
                larrhk: "↩",
                larrlp: "↫",
                larrpl: "⤹",
                larrsim: "⥳",
                larrtl: "↢",
                lat: "⪫",
                lAtail: "⤛",
                latail: "⤙",
                late: "⪭",
                lates: "⪭︀",
                lBarr: "⤎",
                lbarr: "⤌",
                lbbrk: "❲",
                lbrace: "{",
                lbrack: "[",
                lbrke: "⦋",
                lbrksld: "⦏",
                lbrkslu: "⦍",
                Lcaron: "Ľ",
                lcaron: "ľ",
                Lcedil: "Ļ",
                lcedil: "ļ",
                lceil: "⌈",
                lcub: "{",
                Lcy: "Л",
                lcy: "л",
                ldca: "⤶",
                ldquo: "“",
                ldquor: "„",
                ldrdhar: "⥧",
                ldrushar: "⥋",
                ldsh: "↲",
                lE: "≦",
                le: "≤",
                LeftAngleBracket: "⟨",
                LeftArrow: "←",
                Leftarrow: "⇐",
                leftarrow: "←",
                LeftArrowBar: "⇤",
                LeftArrowRightArrow: "⇆",
                leftarrowtail: "↢",
                LeftCeiling: "⌈",
                LeftDoubleBracket: "⟦",
                LeftDownTeeVector: "⥡",
                LeftDownVector: "⇃",
                LeftDownVectorBar: "⥙",
                LeftFloor: "⌊",
                leftharpoondown: "↽",
                leftharpoonup: "↼",
                leftleftarrows: "⇇",
                LeftRightArrow: "↔",
                Leftrightarrow: "⇔",
                leftrightarrow: "↔",
                leftrightarrows: "⇆",
                leftrightharpoons: "⇋",
                leftrightsquigarrow: "↭",
                LeftRightVector: "⥎",
                LeftTee: "⊣",
                LeftTeeArrow: "↤",
                LeftTeeVector: "⥚",
                leftthreetimes: "⋋",
                LeftTriangle: "⊲",
                LeftTriangleBar: "⧏",
                LeftTriangleEqual: "⊴",
                LeftUpDownVector: "⥑",
                LeftUpTeeVector: "⥠",
                LeftUpVector: "↿",
                LeftUpVectorBar: "⥘",
                LeftVector: "↼",
                LeftVectorBar: "⥒",
                lEg: "⪋",
                leg: "⋚",
                leq: "≤",
                leqq: "≦",
                leqslant: "⩽",
                les: "⩽",
                lescc: "⪨",
                lesdot: "⩿",
                lesdoto: "⪁",
                lesdotor: "⪃",
                lesg: "⋚︀",
                lesges: "⪓",
                lessapprox: "⪅",
                lessdot: "⋖",
                lesseqgtr: "⋚",
                lesseqqgtr: "⪋",
                LessEqualGreater: "⋚",
                LessFullEqual: "≦",
                LessGreater: "≶",
                lessgtr: "≶",
                LessLess: "⪡",
                lesssim: "≲",
                LessSlantEqual: "⩽",
                LessTilde: "≲",
                lfisht: "⥼",
                lfloor: "⌊",
                Lfr: "𝔏",
                lfr: "𝔩",
                lg: "≶",
                lgE: "⪑",
                lHar: "⥢",
                lhard: "↽",
                lharu: "↼",
                lharul: "⥪",
                lhblk: "▄",
                LJcy: "Љ",
                ljcy: "љ",
                Ll: "⋘",
                ll: "≪",
                llarr: "⇇",
                llcorner: "⌞",
                Lleftarrow: "⇚",
                llhard: "⥫",
                lltri: "◺",
                Lmidot: "Ŀ",
                lmidot: "ŀ",
                lmoust: "⎰",
                lmoustache: "⎰",
                lnap: "⪉",
                lnapprox: "⪉",
                lnE: "≨",
                lne: "⪇",
                lneq: "⪇",
                lneqq: "≨",
                lnsim: "⋦",
                loang: "⟬",
                loarr: "⇽",
                lobrk: "⟦",
                LongLeftArrow: "⟵",
                Longleftarrow: "⟸",
                longleftarrow: "⟵",
                LongLeftRightArrow: "⟷",
                Longleftrightarrow: "⟺",
                longleftrightarrow: "⟷",
                longmapsto: "⟼",
                LongRightArrow: "⟶",
                Longrightarrow: "⟹",
                longrightarrow: "⟶",
                looparrowleft: "↫",
                looparrowright: "↬",
                lopar: "⦅",
                Lopf: "𝕃",
                lopf: "𝕝",
                loplus: "⨭",
                lotimes: "⨴",
                lowast: "∗",
                lowbar: "_",
                LowerLeftArrow: "↙",
                LowerRightArrow: "↘",
                loz: "◊",
                lozenge: "◊",
                lozf: "⧫",
                lpar: "(",
                lparlt: "⦓",
                lrarr: "⇆",
                lrcorner: "⌟",
                lrhar: "⇋",
                lrhard: "⥭",
                lrm: "‎",
                lrtri: "⊿",
                lsaquo: "‹",
                Lscr: "ℒ",
                lscr: "𝓁",
                Lsh: "↰",
                lsh: "↰",
                lsim: "≲",
                lsime: "⪍",
                lsimg: "⪏",
                lsqb: "[",
                lsquo: "‘",
                lsquor: "‚",
                Lstrok: "Ł",
                lstrok: "ł",
                LT: "<",
                Lt: "≪",
                lt: "<",
                ltcc: "⪦",
                ltcir: "⩹",
                ltdot: "⋖",
                lthree: "⋋",
                ltimes: "⋉",
                ltlarr: "⥶",
                ltquest: "⩻",
                ltri: "◃",
                ltrie: "⊴",
                ltrif: "◂",
                ltrPar: "⦖",
                lurdshar: "⥊",
                luruhar: "⥦",
                lvertneqq: "≨︀",
                lvnE: "≨︀",
                macr: "¯",
                male: "♂",
                malt: "✠",
                maltese: "✠",
                Map: "⤅",
                map: "↦",
                mapsto: "↦",
                mapstodown: "↧",
                mapstoleft: "↤",
                mapstoup: "↥",
                marker: "▮",
                mcomma: "⨩",
                Mcy: "М",
                mcy: "м",
                mdash: "—",
                mDDot: "∺",
                measuredangle: "∡",
                MediumSpace: " ",
                Mellintrf: "ℳ",
                Mfr: "𝔐",
                mfr: "𝔪",
                mho: "℧",
                micro: "µ",
                mid: "∣",
                midast: "*",
                midcir: "⫰",
                middot: "·",
                minus: "−",
                minusb: "⊟",
                minusd: "∸",
                minusdu: "⨪",
                MinusPlus: "∓",
                mlcp: "⫛",
                mldr: "…",
                mnplus: "∓",
                models: "⊧",
                Mopf: "𝕄",
                mopf: "𝕞",
                mp: "∓",
                Mscr: "ℳ",
                mscr: "𝓂",
                mstpos: "∾",
                Mu: "Μ",
                mu: "μ",
                multimap: "⊸",
                mumap: "⊸",
                nabla: "∇",
                Nacute: "Ń",
                nacute: "ń",
                nang: "∠⃒",
                nap: "≉",
                napE: "⩰̸",
                napid: "≋̸",
                napos: "ŉ",
                napprox: "≉",
                natur: "♮",
                natural: "♮",
                naturals: "ℕ",
                nbsp: " ",
                nbump: "≎̸",
                nbumpe: "≏̸",
                ncap: "⩃",
                Ncaron: "Ň",
                ncaron: "ň",
                Ncedil: "Ņ",
                ncedil: "ņ",
                ncong: "≇",
                ncongdot: "⩭̸",
                ncup: "⩂",
                Ncy: "Н",
                ncy: "н",
                ndash: "–",
                ne: "≠",
                nearhk: "⤤",
                neArr: "⇗",
                nearr: "↗",
                nearrow: "↗",
                nedot: "≐̸",
                NegativeMediumSpace: "​",
                NegativeThickSpace: "​",
                NegativeThinSpace: "​",
                NegativeVeryThinSpace: "​",
                nequiv: "≢",
                nesear: "⤨",
                nesim: "≂̸",
                NestedGreaterGreater: "≫",
                NestedLessLess: "≪",
                NewLine: "\n",
                nexist: "∄",
                nexists: "∄",
                Nfr: "𝔑",
                nfr: "𝔫",
                ngE: "≧̸",
                nge: "≱",
                ngeq: "≱",
                ngeqq: "≧̸",
                ngeqslant: "⩾̸",
                nges: "⩾̸",
                nGg: "⋙̸",
                ngsim: "≵",
                nGt: "≫⃒",
                ngt: "≯",
                ngtr: "≯",
                nGtv: "≫̸",
                nhArr: "⇎",
                nharr: "↮",
                nhpar: "⫲",
                ni: "∋",
                nis: "⋼",
                nisd: "⋺",
                niv: "∋",
                NJcy: "Њ",
                njcy: "њ",
                nlArr: "⇍",
                nlarr: "↚",
                nldr: "‥",
                nlE: "≦̸",
                nle: "≰",
                nLeftarrow: "⇍",
                nleftarrow: "↚",
                nLeftrightarrow: "⇎",
                nleftrightarrow: "↮",
                nleq: "≰",
                nleqq: "≦̸",
                nleqslant: "⩽̸",
                nles: "⩽̸",
                nless: "≮",
                nLl: "⋘̸",
                nlsim: "≴",
                nLt: "≪⃒",
                nlt: "≮",
                nltri: "⋪",
                nltrie: "⋬",
                nLtv: "≪̸",
                nmid: "∤",
                NoBreak: "⁠",
                NonBreakingSpace: " ",
                Nopf: "ℕ",
                nopf: "𝕟",
                Not: "⫬",
                not: "¬",
                NotCongruent: "≢",
                NotCupCap: "≭",
                NotDoubleVerticalBar: "∦",
                NotElement: "∉",
                NotEqual: "≠",
                NotEqualTilde: "≂̸",
                NotExists: "∄",
                NotGreater: "≯",
                NotGreaterEqual: "≱",
                NotGreaterFullEqual: "≧̸",
                NotGreaterGreater: "≫̸",
                NotGreaterLess: "≹",
                NotGreaterSlantEqual: "⩾̸",
                NotGreaterTilde: "≵",
                NotHumpDownHump: "≎̸",
                NotHumpEqual: "≏̸",
                notin: "∉",
                notindot: "⋵̸",
                notinE: "⋹̸",
                notinva: "∉",
                notinvb: "⋷",
                notinvc: "⋶",
                NotLeftTriangle: "⋪",
                NotLeftTriangleBar: "⧏̸",
                NotLeftTriangleEqual: "⋬",
                NotLess: "≮",
                NotLessEqual: "≰",
                NotLessGreater: "≸",
                NotLessLess: "≪̸",
                NotLessSlantEqual: "⩽̸",
                NotLessTilde: "≴",
                NotNestedGreaterGreater: "⪢̸",
                NotNestedLessLess: "⪡̸",
                notni: "∌",
                notniva: "∌",
                notnivb: "⋾",
                notnivc: "⋽",
                NotPrecedes: "⊀",
                NotPrecedesEqual: "⪯̸",
                NotPrecedesSlantEqual: "⋠",
                NotReverseElement: "∌",
                NotRightTriangle: "⋫",
                NotRightTriangleBar: "⧐̸",
                NotRightTriangleEqual: "⋭",
                NotSquareSubset: "⊏̸",
                NotSquareSubsetEqual: "⋢",
                NotSquareSuperset: "⊐̸",
                NotSquareSupersetEqual: "⋣",
                NotSubset: "⊂⃒",
                NotSubsetEqual: "⊈",
                NotSucceeds: "⊁",
                NotSucceedsEqual: "⪰̸",
                NotSucceedsSlantEqual: "⋡",
                NotSucceedsTilde: "≿̸",
                NotSuperset: "⊃⃒",
                NotSupersetEqual: "⊉",
                NotTilde: "≁",
                NotTildeEqual: "≄",
                NotTildeFullEqual: "≇",
                NotTildeTilde: "≉",
                NotVerticalBar: "∤",
                npar: "∦",
                nparallel: "∦",
                nparsl: "⫽⃥",
                npart: "∂̸",
                npolint: "⨔",
                npr: "⊀",
                nprcue: "⋠",
                npre: "⪯̸",
                nprec: "⊀",
                npreceq: "⪯̸",
                nrArr: "⇏",
                nrarr: "↛",
                nrarrc: "⤳̸",
                nrarrw: "↝̸",
                nRightarrow: "⇏",
                nrightarrow: "↛",
                nrtri: "⋫",
                nrtrie: "⋭",
                nsc: "⊁",
                nsccue: "⋡",
                nsce: "⪰̸",
                Nscr: "𝒩",
                nscr: "𝓃",
                nshortmid: "∤",
                nshortparallel: "∦",
                nsim: "≁",
                nsime: "≄",
                nsimeq: "≄",
                nsmid: "∤",
                nspar: "∦",
                nsqsube: "⋢",
                nsqsupe: "⋣",
                nsub: "⊄",
                nsubE: "⫅̸",
                nsube: "⊈",
                nsubset: "⊂⃒",
                nsubseteq: "⊈",
                nsubseteqq: "⫅̸",
                nsucc: "⊁",
                nsucceq: "⪰̸",
                nsup: "⊅",
                nsupE: "⫆̸",
                nsupe: "⊉",
                nsupset: "⊃⃒",
                nsupseteq: "⊉",
                nsupseteqq: "⫆̸",
                ntgl: "≹",
                Ntilde: "Ñ",
                ntilde: "ñ",
                ntlg: "≸",
                ntriangleleft: "⋪",
                ntrianglelefteq: "⋬",
                ntriangleright: "⋫",
                ntrianglerighteq: "⋭",
                Nu: "Ν",
                nu: "ν",
                num: "#",
                numero: "№",
                numsp: " ",
                nvap: "≍⃒",
                nVDash: "⊯",
                nVdash: "⊮",
                nvDash: "⊭",
                nvdash: "⊬",
                nvge: "≥⃒",
                nvgt: ">⃒",
                nvHarr: "⤄",
                nvinfin: "⧞",
                nvlArr: "⤂",
                nvle: "≤⃒",
                nvlt: "<⃒",
                nvltrie: "⊴⃒",
                nvrArr: "⤃",
                nvrtrie: "⊵⃒",
                nvsim: "∼⃒",
                nwarhk: "⤣",
                nwArr: "⇖",
                nwarr: "↖",
                nwarrow: "↖",
                nwnear: "⤧",
                Oacute: "Ó",
                oacute: "ó",
                oast: "⊛",
                ocir: "⊚",
                Ocirc: "Ô",
                ocirc: "ô",
                Ocy: "О",
                ocy: "о",
                odash: "⊝",
                Odblac: "Ő",
                odblac: "ő",
                odiv: "⨸",
                odot: "⊙",
                odsold: "⦼",
                OElig: "Œ",
                oelig: "œ",
                ofcir: "⦿",
                Ofr: "𝔒",
                ofr: "𝔬",
                ogon: "˛",
                Ograve: "Ò",
                ograve: "ò",
                ogt: "⧁",
                ohbar: "⦵",
                ohm: "Ω",
                oint: "∮",
                olarr: "↺",
                olcir: "⦾",
                olcross: "⦻",
                oline: "‾",
                olt: "⧀",
                Omacr: "Ō",
                omacr: "ō",
                Omega: "Ω",
                omega: "ω",
                Omicron: "Ο",
                omicron: "ο",
                omid: "⦶",
                ominus: "⊖",
                Oopf: "𝕆",
                oopf: "𝕠",
                opar: "⦷",
                OpenCurlyDoubleQuote: "“",
                OpenCurlyQuote: "‘",
                operp: "⦹",
                oplus: "⊕",
                Or: "⩔",
                or: "∨",
                orarr: "↻",
                ord: "⩝",
                order: "ℴ",
                orderof: "ℴ",
                ordf: "ª",
                ordm: "º",
                origof: "⊶",
                oror: "⩖",
                orslope: "⩗",
                orv: "⩛",
                oS: "Ⓢ",
                Oscr: "𝒪",
                oscr: "ℴ",
                Oslash: "Ø",
                oslash: "ø",
                osol: "⊘",
                Otilde: "Õ",
                otilde: "õ",
                Otimes: "⨷",
                otimes: "⊗",
                otimesas: "⨶",
                Ouml: "Ö",
                ouml: "ö",
                ovbar: "⌽",
                OverBar: "‾",
                OverBrace: "⏞",
                OverBracket: "⎴",
                OverParenthesis: "⏜",
                par: "∥",
                para: "¶",
                parallel: "∥",
                parsim: "⫳",
                parsl: "⫽",
                part: "∂",
                PartialD: "∂",
                Pcy: "П",
                pcy: "п",
                percnt: "%",
                period: ".",
                permil: "‰",
                perp: "⊥",
                pertenk: "‱",
                Pfr: "𝔓",
                pfr: "𝔭",
                Phi: "Φ",
                phi: "φ",
                phiv: "ϕ",
                phmmat: "ℳ",
                phone: "☎",
                Pi: "Π",
                pi: "π",
                pitchfork: "⋔",
                piv: "ϖ",
                planck: "ℏ",
                planckh: "ℎ",
                plankv: "ℏ",
                plus: "+",
                plusacir: "⨣",
                plusb: "⊞",
                pluscir: "⨢",
                plusdo: "∔",
                plusdu: "⨥",
                pluse: "⩲",
                PlusMinus: "±",
                plusmn: "±",
                plussim: "⨦",
                plustwo: "⨧",
                pm: "±",
                Poincareplane: "ℌ",
                pointint: "⨕",
                Popf: "ℙ",
                popf: "𝕡",
                pound: "£",
                Pr: "⪻",
                pr: "≺",
                prap: "⪷",
                prcue: "≼",
                prE: "⪳",
                pre: "⪯",
                prec: "≺",
                precapprox: "⪷",
                preccurlyeq: "≼",
                Precedes: "≺",
                PrecedesEqual: "⪯",
                PrecedesSlantEqual: "≼",
                PrecedesTilde: "≾",
                preceq: "⪯",
                precnapprox: "⪹",
                precneqq: "⪵",
                precnsim: "⋨",
                precsim: "≾",
                Prime: "″",
                prime: "′",
                primes: "ℙ",
                prnap: "⪹",
                prnE: "⪵",
                prnsim: "⋨",
                prod: "∏",
                Product: "∏",
                profalar: "⌮",
                profline: "⌒",
                profsurf: "⌓",
                prop: "∝",
                Proportion: "∷",
                Proportional: "∝",
                propto: "∝",
                prsim: "≾",
                prurel: "⊰",
                Pscr: "𝒫",
                pscr: "𝓅",
                Psi: "Ψ",
                psi: "ψ",
                puncsp: " ",
                Qfr: "𝔔",
                qfr: "𝔮",
                qint: "⨌",
                Qopf: "ℚ",
                qopf: "𝕢",
                qprime: "⁗",
                Qscr: "𝒬",
                qscr: "𝓆",
                quaternions: "ℍ",
                quatint: "⨖",
                quest: "?",
                questeq: "≟",
                QUOT: '"',
                quot: '"',
                rAarr: "⇛",
                race: "∽̱",
                Racute: "Ŕ",
                racute: "ŕ",
                radic: "√",
                raemptyv: "⦳",
                Rang: "⟫",
                rang: "⟩",
                rangd: "⦒",
                range: "⦥",
                rangle: "⟩",
                raquo: "»",
                Rarr: "↠",
                rArr: "⇒",
                rarr: "→",
                rarrap: "⥵",
                rarrb: "⇥",
                rarrbfs: "⤠",
                rarrc: "⤳",
                rarrfs: "⤞",
                rarrhk: "↪",
                rarrlp: "↬",
                rarrpl: "⥅",
                rarrsim: "⥴",
                Rarrtl: "⤖",
                rarrtl: "↣",
                rarrw: "↝",
                rAtail: "⤜",
                ratail: "⤚",
                ratio: "∶",
                rationals: "ℚ",
                RBarr: "⤐",
                rBarr: "⤏",
                rbarr: "⤍",
                rbbrk: "❳",
                rbrace: "}",
                rbrack: "]",
                rbrke: "⦌",
                rbrksld: "⦎",
                rbrkslu: "⦐",
                Rcaron: "Ř",
                rcaron: "ř",
                Rcedil: "Ŗ",
                rcedil: "ŗ",
                rceil: "⌉",
                rcub: "}",
                Rcy: "Р",
                rcy: "р",
                rdca: "⤷",
                rdldhar: "⥩",
                rdquo: "”",
                rdquor: "”",
                rdsh: "↳",
                Re: "ℜ",
                real: "ℜ",
                realine: "ℛ",
                realpart: "ℜ",
                reals: "ℝ",
                rect: "▭",
                REG: "®",
                reg: "®",
                ReverseElement: "∋",
                ReverseEquilibrium: "⇋",
                ReverseUpEquilibrium: "⥯",
                rfisht: "⥽",
                rfloor: "⌋",
                Rfr: "ℜ",
                rfr: "𝔯",
                rHar: "⥤",
                rhard: "⇁",
                rharu: "⇀",
                rharul: "⥬",
                Rho: "Ρ",
                rho: "ρ",
                rhov: "ϱ",
                RightAngleBracket: "⟩",
                RightArrow: "→",
                Rightarrow: "⇒",
                rightarrow: "→",
                RightArrowBar: "⇥",
                RightArrowLeftArrow: "⇄",
                rightarrowtail: "↣",
                RightCeiling: "⌉",
                RightDoubleBracket: "⟧",
                RightDownTeeVector: "⥝",
                RightDownVector: "⇂",
                RightDownVectorBar: "⥕",
                RightFloor: "⌋",
                rightharpoondown: "⇁",
                rightharpoonup: "⇀",
                rightleftarrows: "⇄",
                rightleftharpoons: "⇌",
                rightrightarrows: "⇉",
                rightsquigarrow: "↝",
                RightTee: "⊢",
                RightTeeArrow: "↦",
                RightTeeVector: "⥛",
                rightthreetimes: "⋌",
                RightTriangle: "⊳",
                RightTriangleBar: "⧐",
                RightTriangleEqual: "⊵",
                RightUpDownVector: "⥏",
                RightUpTeeVector: "⥜",
                RightUpVector: "↾",
                RightUpVectorBar: "⥔",
                RightVector: "⇀",
                RightVectorBar: "⥓",
                ring: "˚",
                risingdotseq: "≓",
                rlarr: "⇄",
                rlhar: "⇌",
                rlm: "‏",
                rmoust: "⎱",
                rmoustache: "⎱",
                rnmid: "⫮",
                roang: "⟭",
                roarr: "⇾",
                robrk: "⟧",
                ropar: "⦆",
                Ropf: "ℝ",
                ropf: "𝕣",
                roplus: "⨮",
                rotimes: "⨵",
                RoundImplies: "⥰",
                rpar: ")",
                rpargt: "⦔",
                rppolint: "⨒",
                rrarr: "⇉",
                Rrightarrow: "⇛",
                rsaquo: "›",
                Rscr: "ℛ",
                rscr: "𝓇",
                Rsh: "↱",
                rsh: "↱",
                rsqb: "]",
                rsquo: "’",
                rsquor: "’",
                rthree: "⋌",
                rtimes: "⋊",
                rtri: "▹",
                rtrie: "⊵",
                rtrif: "▸",
                rtriltri: "⧎",
                RuleDelayed: "⧴",
                ruluhar: "⥨",
                rx: "℞",
                Sacute: "Ś",
                sacute: "ś",
                sbquo: "‚",
                Sc: "⪼",
                sc: "≻",
                scap: "⪸",
                Scaron: "Š",
                scaron: "š",
                sccue: "≽",
                scE: "⪴",
                sce: "⪰",
                Scedil: "Ş",
                scedil: "ş",
                Scirc: "Ŝ",
                scirc: "ŝ",
                scnap: "⪺",
                scnE: "⪶",
                scnsim: "⋩",
                scpolint: "⨓",
                scsim: "≿",
                Scy: "С",
                scy: "с",
                sdot: "⋅",
                sdotb: "⊡",
                sdote: "⩦",
                searhk: "⤥",
                seArr: "⇘",
                searr: "↘",
                searrow: "↘",
                sect: "§",
                semi: ";",
                seswar: "⤩",
                setminus: "∖",
                setmn: "∖",
                sext: "✶",
                Sfr: "𝔖",
                sfr: "𝔰",
                sfrown: "⌢",
                sharp: "♯",
                SHCHcy: "Щ",
                shchcy: "щ",
                SHcy: "Ш",
                shcy: "ш",
                ShortDownArrow: "↓",
                ShortLeftArrow: "←",
                shortmid: "∣",
                shortparallel: "∥",
                ShortRightArrow: "→",
                ShortUpArrow: "↑",
                shy: "­",
                Sigma: "Σ",
                sigma: "σ",
                sigmaf: "ς",
                sigmav: "ς",
                sim: "∼",
                simdot: "⩪",
                sime: "≃",
                simeq: "≃",
                simg: "⪞",
                simgE: "⪠",
                siml: "⪝",
                simlE: "⪟",
                simne: "≆",
                simplus: "⨤",
                simrarr: "⥲",
                slarr: "←",
                SmallCircle: "∘",
                smallsetminus: "∖",
                smashp: "⨳",
                smeparsl: "⧤",
                smid: "∣",
                smile: "⌣",
                smt: "⪪",
                smte: "⪬",
                smtes: "⪬︀",
                SOFTcy: "Ь",
                softcy: "ь",
                sol: "/",
                solb: "⧄",
                solbar: "⌿",
                Sopf: "𝕊",
                sopf: "𝕤",
                spades: "♠",
                spadesuit: "♠",
                spar: "∥",
                sqcap: "⊓",
                sqcaps: "⊓︀",
                sqcup: "⊔",
                sqcups: "⊔︀",
                Sqrt: "√",
                sqsub: "⊏",
                sqsube: "⊑",
                sqsubset: "⊏",
                sqsubseteq: "⊑",
                sqsup: "⊐",
                sqsupe: "⊒",
                sqsupset: "⊐",
                sqsupseteq: "⊒",
                squ: "□",
                Square: "□",
                square: "□",
                SquareIntersection: "⊓",
                SquareSubset: "⊏",
                SquareSubsetEqual: "⊑",
                SquareSuperset: "⊐",
                SquareSupersetEqual: "⊒",
                SquareUnion: "⊔",
                squarf: "▪",
                squf: "▪",
                srarr: "→",
                Sscr: "𝒮",
                sscr: "𝓈",
                ssetmn: "∖",
                ssmile: "⌣",
                sstarf: "⋆",
                Star: "⋆",
                star: "☆",
                starf: "★",
                straightepsilon: "ϵ",
                straightphi: "ϕ",
                strns: "¯",
                Sub: "⋐",
                sub: "⊂",
                subdot: "⪽",
                subE: "⫅",
                sube: "⊆",
                subedot: "⫃",
                submult: "⫁",
                subnE: "⫋",
                subne: "⊊",
                subplus: "⪿",
                subrarr: "⥹",
                Subset: "⋐",
                subset: "⊂",
                subseteq: "⊆",
                subseteqq: "⫅",
                SubsetEqual: "⊆",
                subsetneq: "⊊",
                subsetneqq: "⫋",
                subsim: "⫇",
                subsub: "⫕",
                subsup: "⫓",
                succ: "≻",
                succapprox: "⪸",
                succcurlyeq: "≽",
                Succeeds: "≻",
                SucceedsEqual: "⪰",
                SucceedsSlantEqual: "≽",
                SucceedsTilde: "≿",
                succeq: "⪰",
                succnapprox: "⪺",
                succneqq: "⪶",
                succnsim: "⋩",
                succsim: "≿",
                SuchThat: "∋",
                Sum: "∑",
                sum: "∑",
                sung: "♪",
                Sup: "⋑",
                sup: "⊃",
                sup1: "¹",
                sup2: "²",
                sup3: "³",
                supdot: "⪾",
                supdsub: "⫘",
                supE: "⫆",
                supe: "⊇",
                supedot: "⫄",
                Superset: "⊃",
                SupersetEqual: "⊇",
                suphsol: "⟉",
                suphsub: "⫗",
                suplarr: "⥻",
                supmult: "⫂",
                supnE: "⫌",
                supne: "⊋",
                supplus: "⫀",
                Supset: "⋑",
                supset: "⊃",
                supseteq: "⊇",
                supseteqq: "⫆",
                supsetneq: "⊋",
                supsetneqq: "⫌",
                supsim: "⫈",
                supsub: "⫔",
                supsup: "⫖",
                swarhk: "⤦",
                swArr: "⇙",
                swarr: "↙",
                swarrow: "↙",
                swnwar: "⤪",
                szlig: "ß",
                Tab: "\t",
                target: "⌖",
                Tau: "Τ",
                tau: "τ",
                tbrk: "⎴",
                Tcaron: "Ť",
                tcaron: "ť",
                Tcedil: "Ţ",
                tcedil: "ţ",
                Tcy: "Т",
                tcy: "т",
                tdot: "⃛",
                telrec: "⌕",
                Tfr: "𝔗",
                tfr: "𝔱",
                there4: "∴",
                Therefore: "∴",
                therefore: "∴",
                Theta: "Θ",
                theta: "θ",
                thetasym: "ϑ",
                thetav: "ϑ",
                thickapprox: "≈",
                thicksim: "∼",
                ThickSpace: "  ",
                thinsp: " ",
                ThinSpace: " ",
                thkap: "≈",
                thksim: "∼",
                THORN: "Þ",
                thorn: "þ",
                Tilde: "∼",
                tilde: "˜",
                TildeEqual: "≃",
                TildeFullEqual: "≅",
                TildeTilde: "≈",
                times: "×",
                timesb: "⊠",
                timesbar: "⨱",
                timesd: "⨰",
                tint: "∭",
                toea: "⤨",
                top: "⊤",
                topbot: "⌶",
                topcir: "⫱",
                Topf: "𝕋",
                topf: "𝕥",
                topfork: "⫚",
                tosa: "⤩",
                tprime: "‴",
                TRADE: "™",
                trade: "™",
                triangle: "▵",
                triangledown: "▿",
                triangleleft: "◃",
                trianglelefteq: "⊴",
                triangleq: "≜",
                triangleright: "▹",
                trianglerighteq: "⊵",
                tridot: "◬",
                trie: "≜",
                triminus: "⨺",
                TripleDot: "⃛",
                triplus: "⨹",
                trisb: "⧍",
                tritime: "⨻",
                trpezium: "⏢",
                Tscr: "𝒯",
                tscr: "𝓉",
                TScy: "Ц",
                tscy: "ц",
                TSHcy: "Ћ",
                tshcy: "ћ",
                Tstrok: "Ŧ",
                tstrok: "ŧ",
                twixt: "≬",
                twoheadleftarrow: "↞",
                twoheadrightarrow: "↠",
                Uacute: "Ú",
                uacute: "ú",
                Uarr: "↟",
                uArr: "⇑",
                uarr: "↑",
                Uarrocir: "⥉",
                Ubrcy: "Ў",
                ubrcy: "ў",
                Ubreve: "Ŭ",
                ubreve: "ŭ",
                Ucirc: "Û",
                ucirc: "û",
                Ucy: "У",
                ucy: "у",
                udarr: "⇅",
                Udblac: "Ű",
                udblac: "ű",
                udhar: "⥮",
                ufisht: "⥾",
                Ufr: "𝔘",
                ufr: "𝔲",
                Ugrave: "Ù",
                ugrave: "ù",
                uHar: "⥣",
                uharl: "↿",
                uharr: "↾",
                uhblk: "▀",
                ulcorn: "⌜",
                ulcorner: "⌜",
                ulcrop: "⌏",
                ultri: "◸",
                Umacr: "Ū",
                umacr: "ū",
                uml: "¨",
                UnderBar: "_",
                UnderBrace: "⏟",
                UnderBracket: "⎵",
                UnderParenthesis: "⏝",
                Union: "⋃",
                UnionPlus: "⊎",
                Uogon: "Ų",
                uogon: "ų",
                Uopf: "𝕌",
                uopf: "𝕦",
                UpArrow: "↑",
                Uparrow: "⇑",
                uparrow: "↑",
                UpArrowBar: "⤒",
                UpArrowDownArrow: "⇅",
                UpDownArrow: "↕",
                Updownarrow: "⇕",
                updownarrow: "↕",
                UpEquilibrium: "⥮",
                upharpoonleft: "↿",
                upharpoonright: "↾",
                uplus: "⊎",
                UpperLeftArrow: "↖",
                UpperRightArrow: "↗",
                Upsi: "ϒ",
                upsi: "υ",
                upsih: "ϒ",
                Upsilon: "Υ",
                upsilon: "υ",
                UpTee: "⊥",
                UpTeeArrow: "↥",
                upuparrows: "⇈",
                urcorn: "⌝",
                urcorner: "⌝",
                urcrop: "⌎",
                Uring: "Ů",
                uring: "ů",
                urtri: "◹",
                Uscr: "𝒰",
                uscr: "𝓊",
                utdot: "⋰",
                Utilde: "Ũ",
                utilde: "ũ",
                utri: "▵",
                utrif: "▴",
                uuarr: "⇈",
                Uuml: "Ü",
                uuml: "ü",
                uwangle: "⦧",
                vangrt: "⦜",
                varepsilon: "ϵ",
                varkappa: "ϰ",
                varnothing: "∅",
                varphi: "ϕ",
                varpi: "ϖ",
                varpropto: "∝",
                vArr: "⇕",
                varr: "↕",
                varrho: "ϱ",
                varsigma: "ς",
                varsubsetneq: "⊊︀",
                varsubsetneqq: "⫋︀",
                varsupsetneq: "⊋︀",
                varsupsetneqq: "⫌︀",
                vartheta: "ϑ",
                vartriangleleft: "⊲",
                vartriangleright: "⊳",
                Vbar: "⫫",
                vBar: "⫨",
                vBarv: "⫩",
                Vcy: "В",
                vcy: "в",
                VDash: "⊫",
                Vdash: "⊩",
                vDash: "⊨",
                vdash: "⊢",
                Vdashl: "⫦",
                Vee: "⋁",
                vee: "∨",
                veebar: "⊻",
                veeeq: "≚",
                vellip: "⋮",
                Verbar: "‖",
                verbar: "|",
                Vert: "‖",
                vert: "|",
                VerticalBar: "∣",
                VerticalLine: "|",
                VerticalSeparator: "❘",
                VerticalTilde: "≀",
                VeryThinSpace: " ",
                Vfr: "𝔙",
                vfr: "𝔳",
                vltri: "⊲",
                vnsub: "⊂⃒",
                vnsup: "⊃⃒",
                Vopf: "𝕍",
                vopf: "𝕧",
                vprop: "∝",
                vrtri: "⊳",
                Vscr: "𝒱",
                vscr: "𝓋",
                vsubnE: "⫋︀",
                vsubne: "⊊︀",
                vsupnE: "⫌︀",
                vsupne: "⊋︀",
                Vvdash: "⊪",
                vzigzag: "⦚",
                Wcirc: "Ŵ",
                wcirc: "ŵ",
                wedbar: "⩟",
                Wedge: "⋀",
                wedge: "∧",
                wedgeq: "≙",
                weierp: "℘",
                Wfr: "𝔚",
                wfr: "𝔴",
                Wopf: "𝕎",
                wopf: "𝕨",
                wp: "℘",
                wr: "≀",
                wreath: "≀",
                Wscr: "𝒲",
                wscr: "𝓌",
                xcap: "⋂",
                xcirc: "◯",
                xcup: "⋃",
                xdtri: "▽",
                Xfr: "𝔛",
                xfr: "𝔵",
                xhArr: "⟺",
                xharr: "⟷",
                Xi: "Ξ",
                xi: "ξ",
                xlArr: "⟸",
                xlarr: "⟵",
                xmap: "⟼",
                xnis: "⋻",
                xodot: "⨀",
                Xopf: "𝕏",
                xopf: "𝕩",
                xoplus: "⨁",
                xotime: "⨂",
                xrArr: "⟹",
                xrarr: "⟶",
                Xscr: "𝒳",
                xscr: "𝓍",
                xsqcup: "⨆",
                xuplus: "⨄",
                xutri: "△",
                xvee: "⋁",
                xwedge: "⋀",
                Yacute: "Ý",
                yacute: "ý",
                YAcy: "Я",
                yacy: "я",
                Ycirc: "Ŷ",
                ycirc: "ŷ",
                Ycy: "Ы",
                ycy: "ы",
                yen: "¥",
                Yfr: "𝔜",
                yfr: "𝔶",
                YIcy: "Ї",
                yicy: "ї",
                Yopf: "𝕐",
                yopf: "𝕪",
                Yscr: "𝒴",
                yscr: "𝓎",
                YUcy: "Ю",
                yucy: "ю",
                Yuml: "Ÿ",
                yuml: "ÿ",
                Zacute: "Ź",
                zacute: "ź",
                Zcaron: "Ž",
                zcaron: "ž",
                Zcy: "З",
                zcy: "з",
                Zdot: "Ż",
                zdot: "ż",
                zeetrf: "ℨ",
                ZeroWidthSpace: "​",
                Zeta: "Ζ",
                zeta: "ζ",
                Zfr: "ℨ",
                zfr: "𝔷",
                ZHcy: "Ж",
                zhcy: "ж",
                zigrarr: "⇝",
                Zopf: "ℤ",
                zopf: "𝕫",
                Zscr: "𝒵",
                zscr: "𝓏",
                zwj: "‍",
                zwnj: "‌"
            }
        }, {}], 2: [function (e, r, t) {
            "use strict";
            var n = {};
            ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function (e) {
                n[e] = !0
            }), r.exports = n
        }, {}], 3: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                return e = e.source, r = r || "", function t(n, s) {
                    return n ? (s = s.source, e = e.replace(n, s), t) : new RegExp(e, r)
                }
            }

            var s = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, i = /[^"'=<>`\x00-\x20]+/, o = /'[^']*'/, a = /"[^"]*"/,
                l = n(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", i)("single_quoted", o)("double_quoted", a)(),
                c = n(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", s)("attr_value", l)(),
                u = n(/<[A-Za-z][A-Za-z0-9\-]*attribute*\s*\/?>/)("attribute", c)(),
                p = /<\/[A-Za-z][A-Za-z0-9\-]*\s*>/, h = /<!--[\s\S]*?-->/, f = /<[?].*?[?]>/, d = /<![A-Z]+\s+[^>]*>/,
                g = /<!\[CDATA\[[\s\S]*?\]\]>/,
                m = n(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", u)("close_tag", p)("comment", h)("processing", f)("declaration", d)("cdata", g)();
            r.exports.HTML_TAG_RE = m
        }, {}], 4: [function (e, r, t) {
            "use strict";
            r.exports = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"]
        }, {}], 5: [function (e, r, t) {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e)
            }

            function s(e) {
                return "[object String]" === n(e)
            }

            function i(e, r) {
                return x.call(e, r)
            }

            function o(e) {
                return Array.prototype.slice.call(arguments, 1).forEach(function (r) {
                    if (r) {
                        if ("object" != typeof r) throw new TypeError(r + "must be object");
                        Object.keys(r).forEach(function (t) {
                            e[t] = r[t]
                        })
                    }
                }), e
            }

            function a(e, r, t) {
                return [].concat(e.slice(0, r), t, e.slice(r + 1))
            }

            function l(e) {
                return e.indexOf("\\") < 0 ? e : e.replace(A, "$1")
            }

            function c(e) {
                return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 != (65535 & e) && 65534 != (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
            }

            function u(e) {
                if (e > 65535) {
                    e -= 65536;
                    var r = 55296 + (e >> 10), t = 56320 + (1023 & e);
                    return String.fromCharCode(r, t)
                }
                return String.fromCharCode(e)
            }

            function p(e, r) {
                var t = 0;
                return i(C, r) ? C[r] : 35 === r.charCodeAt(0) && q.test(r) && (t = "x" === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10), c(t)) ? u(t) : e
            }

            function h(e) {
                return e.indexOf("&") < 0 ? e : e.replace(w, p)
            }

            function f(e) {
                return D[e]
            }

            function d(e) {
                return E.test(e) ? e.replace(S, f) : e
            }

            function g(e, r, t) {
                var n = e.charCodeAt(0);
                return n >= 55296 && n <= 56319 ? r >= t.length - 1 ? "�" : (n = t.charCodeAt(r + 1), n < 56320 || n > 57343 ? "�" : e) : 0 === r ? "�" : (n = t.charCodeAt(r - 1), n < 55552 || n > 56319 ? "�" : e)
            }

            function m(e) {
                return M.test(e) ? e.replace(L, g) : e
            }

            function b(e) {
                var r = h(e);
                try {
                    r = decodeURI(r)
                } catch (e) {
                }
                return encodeURI(m(r))
            }

            function k(e) {
                return e.replace(T, "\\$&")
            }

            function v(e) {
                if (e >= 8192 && e <= 8202) return !0;
                switch (e) {
                    case 9:
                    case 10:
                    case 13:
                    case 12:
                    case 32:
                    case 160:
                    case 5760:
                    case 8239:
                    case 8287:
                    case 12288:
                        return !0
                }
                return !1
            }

            function y(e) {
                return F.test(e)
            }

            function _(e) {
                switch (e) {
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 41:
                    case 42:
                    case 43:
                    case 44:
                    case 45:
                    case 46:
                    case 47:
                    case 58:
                    case 59:
                    case 60:
                    case 61:
                    case 62:
                    case 63:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 124:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }

            var x = Object.prototype.hasOwnProperty, A = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
                w = /&([a-z#][a-z0-9]{1,31});/gi, q = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, C = e("./entities"),
                E = /[&<>"]/, S = /[&<>"]/g, D = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"},
                M = /[\uD800-\uDFFF]/, L = /[\uD800-\uDFFF]/g, T = /[.?*+^$[\]\\(){}|-]/g,
                F = /[\x21-\x23\x25-\x2A\x2C-\x2F\x3A\x3B\x3F\x40\x5B-\x5D\x5F\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
            t.assign = o, t.isString = s, t.has = i, t.unescapeMd = l, t.isValidEntityCode = c, t.fromCodePoint = u, t.replaceEntities = h, t.escapeHtml = d,
                t.arrayReplaceAt = a, t.normalizeLink = b, t.isWhiteSpace = v, t.isMdAsciiPunct = _, t.isPunctChar = y, t.escapeRE = k
        }, {"./entities": 1}], 6: [function (e, r, t) {
            "use strict";
            t.parseLinkLabel = e("./parse_link_label"), t.parseLinkDestination = e("./parse_link_destination"), t.parseLinkTitle = e("./parse_link_title")
        }, {"./parse_link_destination": 8, "./parse_link_label": 9, "./parse_link_title": 10}], 7: [function (e, r, t) {
            "use strict";
            r.exports = function (e) {
                return e.trim().replace(/\s+/g, " ").toUpperCase()
            }
        }, {}], 8: [function (e, r, t) {
            "use strict";
            var n = e("../common/utils").normalizeLink, s = e("../common/utils").unescapeMd;
            r.exports = function (e, r, t) {
                var i, o, a = r, l = {ok: !1, pos: 0, lines: 0, str: ""};
                if (60 === e.charCodeAt(r)) {
                    for (r++; r < t;) {
                        if (10 === (i = e.charCodeAt(r))) return l;
                        if (62 === i) return l.pos = r + 1, l.str = n(s(e.slice(a + 1, r))), l.ok = !0, l;
                        92 === i && r + 1 < t ? r += 2 : r++
                    }
                    return l
                }
                for (o = 0; r < t && 32 !== (i = e.charCodeAt(r)) && !(i < 32 || 127 === i);) if (92 === i && r + 1 < t) r += 2; else {
                    if (40 === i && ++o > 1) break;
                    if (41 === i && --o < 0) break;
                    r++
                }
                return a === r ? l : (l.str = n(s(e.slice(a, r))), l.lines = 0, l.pos = r, l.ok = !0, l)
            }
        }, {"../common/utils": 5}], 9: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t) {
                var n, s, i, o, a = -1, l = e.posMax, c = e.pos;
                if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
                for (e.pos = r + 1, n = 1; e.pos < l;) {
                    if (93 === (i = e.src.charCodeAt(e.pos)) && 0 === --n) {
                        s = !0;
                        break
                    }
                    if (o = e.pos, e.md.inline.skipToken(e), 91 === i) if (o === e.pos - 1) n++; else if (t) return e.pos = c, -1
                }
                return s ? (a = e.pos, e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = n - 1, e.pos = c, a
            }
        }, {}], 10: [function (e, r, t) {
            "use strict";
            var n = e("../common/utils").unescapeMd;
            r.exports = function (e, r, t) {
                var s, i, o = 0, a = r, l = {ok: !1, pos: 0, lines: 0, str: ""};
                if (r >= t) return l;
                if (34 !== (i = e.charCodeAt(r)) && 39 !== i && 40 !== i) return l;
                for (r++, 40 === i && (i = 41); r < t;) {
                    if ((s = e.charCodeAt(r)) === i) return l.pos = r + 1, l.lines = o, l.str = n(e.slice(a + 1, r)), l.ok = !0, l;
                    10 === s ? o++ : 92 === s && r + 1 < t && (r++, 10 === e.charCodeAt(r) && o++), r++
                }
                return l
            }
        }, {"../common/utils": 5}], 11: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                if (!(this instanceof n)) return new n(e, r);
                r || s.isString(e) || (r = e || {}, e = "default"), this.inline = new c, this.block = new l, this.core = new a, this.renderer = new o, this.utils = s, this.helpers = i, this.options = {}, this.configure(e), r && this.set(r)
            }

            var s = e("./common/utils"), i = e("./helpers"), o = e("./renderer"), a = e("./parser_core"),
                l = e("./parser_block"), c = e("./parser_inline"),
                u = {default: e("./presets/default"), zero: e("./presets/zero"), commonmark: e("./presets/commonmark")};
            n.prototype.set = function (e) {
                return s.assign(this.options, e), this
            }, n.prototype.configure = function (e) {
                var r, t = this;
                if (s.isString(e) && (r = e, !(e = u[r]))) throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
                if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
                return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function (r) {
                    e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules)
                }), this
            }, n.prototype.enable = function (e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (r) {
                    t = t.concat(this[r].ruler.enable(e, !0))
                }, this);
                var n = e.filter(function (e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
                return this
            }, n.prototype.disable = function (e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (r) {
                    t = t.concat(this[r].ruler.disable(e, !0))
                }, this);
                var n = e.filter(function (e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
                return this
            }, n.prototype.use = function (e) {
                var r = [this].concat(Array.prototype.slice.call(arguments, 1));
                return e.apply(e, r), this
            }, n.prototype.parse = function (e, r) {
                var t = new this.core.State(e, this, r);
                return this.core.process(t), t.tokens
            }, n.prototype.render = function (e, r) {
                return r = r || {}, this.renderer.render(this.parse(e, r), this.options, r)
            }, n.prototype.parseInline = function (e, r) {
                var t = new this.core.State(e, this, r);
                return t.inlineMode = !0, this.core.process(t), t.tokens
            }, n.prototype.renderInline = function (e, r) {
                return r = r || {}, this.renderer.render(this.parseInline(e, r), this.options, r)
            }, r.exports = n
        }, {
            "./common/utils": 5,
            "./helpers": 6,
            "./parser_block": 12,
            "./parser_core": 13,
            "./parser_inline": 14,
            "./presets/commonmark": 15,
            "./presets/default": 16,
            "./presets/zero": 17,
            "./renderer": 18
        }], 12: [function (e, r, t) {
            "use strict";

            function n() {
                this.ruler = new s;
                for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], {alt: (i[e][2] || []).slice()})
            }

            var s = e("./ruler"),
                i = [["code", e("./rules_block/code")], ["fence", e("./rules_block/fence"), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", e("./rules_block/blockquote"), ["paragraph", "reference", "blockquote", "list"]], ["hr", e("./rules_block/hr"), ["paragraph", "reference", "blockquote", "list"]], ["list", e("./rules_block/list"), ["paragraph", "reference", "blockquote"]], ["reference", e("./rules_block/reference"), ["reference"]], ["heading", e("./rules_block/heading"), ["paragraph", "reference", "blockquote"]], ["lheading", e("./rules_block/lheading")], ["html_block", e("./rules_block/html_block"), ["paragraph", "reference", "blockquote"]], ["table", e("./rules_block/table"), ["paragraph", "reference"]], ["paragraph", e("./rules_block/paragraph")]];
            n.prototype.tokenize = function (e, r, t) {
                for (var n, s = this.ruler.getRules(""), i = s.length, o = r, a = !1, l = e.md.options.maxNesting; o < t && (e.line = o = e.skipEmptyLines(o), !(o >= t)) && !(e.tShift[o] < e.blkIndent);) {
                    if (e.level >= l) {
                        e.line = t;
                        break
                    }
                    for (n = 0; n < i && !s[n](e, o, t, !1); n++) ;
                    if (e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), (o = e.line) < t && e.isEmpty(o)) {
                        if (a = !0, ++o < t && "list" === e.parentType && e.isEmpty(o)) break;
                        e.line = o
                    }
                }
            }, n.prototype.parse = function (e, r, t, n) {
                var s;
                if (!e) return [];
                s = new this.State(e, r, t, n), this.tokenize(s, s.line, s.lineMax)
            }, n.prototype.State = e("./rules_block/state_block"), r.exports = n
        }, {
            "./ruler": 19,
            "./rules_block/blockquote": 20,
            "./rules_block/code": 21,
            "./rules_block/fence": 22,
            "./rules_block/heading": 23,
            "./rules_block/hr": 24,
            "./rules_block/html_block": 25,
            "./rules_block/lheading": 26,
            "./rules_block/list": 27,
            "./rules_block/paragraph": 28,
            "./rules_block/reference": 29,
            "./rules_block/state_block": 30,
            "./rules_block/table": 31
        }], 13: [function (e, r, t) {
            "use strict";

            function n() {
                this.ruler = new s;
                for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1])
            }

            var s = e("./ruler"),
                i = [["normalize", e("./rules_core/normalize")], ["block", e("./rules_core/block")], ["inline", e("./rules_core/inline")], ["replacements", e("./rules_core/replacements")], ["smartquotes", e("./rules_core/smartquotes")], ["linkify", e("./rules_core/linkify")]];
            n.prototype.process = function (e) {
                var r, t, n;
                for (n = this.ruler.getRules(""), r = 0, t = n.length; r < t; r++) n[r](e)
            }, n.prototype.State = e("./rules_core/state_core"), r.exports = n
        }, {
            "./ruler": 19,
            "./rules_core/block": 32,
            "./rules_core/inline": 33,
            "./rules_core/linkify": 34,
            "./rules_core/normalize": 35,
            "./rules_core/replacements": 36,
            "./rules_core/smartquotes": 37,
            "./rules_core/state_core": 38
        }], 14: [function (e, r, t) {
            "use strict";

            function n(e) {
                var r = e.trim().toLowerCase();
                return r = o(r), !(r.indexOf(":") >= 0 && l.indexOf(r.split(":")[0]) >= 0)
            }

            function s() {
                this.validateLink = n, this.ruler = new i;
                for (var e = 0; e < a.length; e++) this.ruler.push(a[e][0], a[e][1])
            }

            var i = e("./ruler"), o = e("./common/utils").replaceEntities,
                a = [["text", e("./rules_inline/text")], ["newline", e("./rules_inline/newline")], ["escape", e("./rules_inline/escape")], ["backticks", e("./rules_inline/backticks")], ["strikethrough", e("./rules_inline/strikethrough")], ["emphasis", e("./rules_inline/emphasis")], ["link", e("./rules_inline/link")], ["image", e("./rules_inline/image")], ["autolink", e("./rules_inline/autolink")], ["html_inline", e("./rules_inline/html_inline")], ["entity", e("./rules_inline/entity")]],
                l = ["vbscript", "javascript", "file"];
            s.prototype.skipToken = function (e) {
                var r, t, n = e.pos, s = this.ruler.getRules(""), i = s.length, o = e.md.options.maxNesting;
                if ((t = e.cacheGet(n)) > 0) return void(e.pos = t);
                if (e.level < o) {
                    for (r = 0; r < i; r++) if (s[r](e, !0)) return void e.cacheSet(n, e.pos);
                    e.pos++
                } else e.pos = e.max;
                e.cacheSet(n, e.pos)
            }, s.prototype.tokenize = function (e) {
                for (var r, t, n = this.ruler.getRules(""), s = n.length, i = e.posMax, o = e.md.options.maxNesting; e.pos < i;) {
                    if (e.level >= o) {
                        e.pos = i;
                        break
                    }
                    for (t = 0; t < s && !(r = n[t](e, !1)); t++) ;
                    if (r) {
                        if (e.pos >= i) break
                    } else e.pending += e.src[e.pos++]
                }
                e.pending && e.pushPending()
            }, s.prototype.parse = function (e, r, t, n) {
                var s = new this.State(e, r, t, n);
                this.tokenize(s)
            }, s.prototype.State = e("./rules_inline/state_inline"), r.exports = s
        }, {
            "./common/utils": 5,
            "./ruler": 19,
            "./rules_inline/autolink": 39,
            "./rules_inline/backticks": 40,
            "./rules_inline/emphasis": 41,
            "./rules_inline/entity": 42,
            "./rules_inline/escape": 43,
            "./rules_inline/html_inline": 44,
            "./rules_inline/image": 45,
            "./rules_inline/link": 46,
            "./rules_inline/newline": 47,
            "./rules_inline/state_inline": 48,
            "./rules_inline/strikethrough": 49,
            "./rules_inline/text": 50
        }], 15: [function (e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !0,
                    xhtmlOut: !0,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {rules: ["normalize", "block", "inline"]},
                    block: {rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]},
                    inline: {rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"]}
                }
            }
        }, {}], 16: [function (e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                }, components: {core: {}, block: {}, inline: {}}
            }
        }, {}], 17: [function (e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {rules: ["normalize", "block", "inline"]},
                    block: {rules: ["paragraph"]},
                    inline: {rules: ["text"]}
                }
            }
        }, {}], 18: [function (e, r, t) {
            "use strict";

            function n() {
                this.rules = s({}, l)
            }

            var s = e("./common/utils").assign, i = e("./common/utils").unescapeMd,
                o = e("./common/utils").replaceEntities, a = e("./common/utils").escapeHtml, l = {};
            l.blockquote_open = function () {
                return "<blockquote>\n"
            }, l.blockquote_close = function () {
                return "</blockquote>\n"
            }, l.code_block = function (e, r) {
                return "<pre><code>" + a(e[r].content) + "</code></pre>\n"
            }, l.code_inline = function (e, r) {
                return "<code>" + a(e[r].content) + "</code>"
            }, l.fence = function (e, r, t) {
                var n, s = e[r], l = "", c = t.langPrefix, u = "";
                return s.params && (u = a(o(i(s.params.split(/\s+/g)[0]))), l = ' class="' + c + u + '"'), n = t.highlight ? t.highlight(s.content, u) || a(s.content) : a(s.content), "<pre><code" + l + ">" + n + "</code></pre>\n"
            }, l.heading_open = function (e, r) {
                return "<h" + e[r].hLevel + ">"
            }, l.heading_close = function (e, r) {
                return "</h" + e[r].hLevel + ">\n"
            }, l.hr = function (e, r, t) {
                return t.xhtmlOut ? "<hr />\n" : "<hr>\n"
            }, l.bullet_list_open = function () {
                return "<ul>\n"
            }, l.bullet_list_close = function () {
                return "</ul>\n"
            }, l.list_item_open = function (e, r) {
                var t = e[r + 1];
                return "list_item_close" === t.type || "paragraph_open" === t.type && t.tight ? "<li>" : "<li>\n"
            }, l.list_item_close = function () {
                return "</li>\n"
            }, l.ordered_list_open = function (e, r) {
                return e[r].order > 1 ? '<ol start="' + e[r].order + '">\n' : "<ol>\n"
            }, l.ordered_list_close = function () {
                return "</ol>\n"
            }, l.paragraph_open = function (e, r) {
                return e[r].tight ? "" : "<p>"
            }, l.paragraph_close = function (e, r) {
                return !0 === e[r].tight ? "close" === e[r + 1].type.slice(-5) ? "" : "\n" : "</p>\n"
            }, l.link_open = function (e, r) {
                var t = e[r].title ? ' title="' + a(o(e[r].title)) + '"' : "",
                    n = e[r].target ? ' target="' + a(e[r].target) + '"' : "";
                return '<a href="' + a(e[r].href) + '"' + t + n + ">"
            }, l.link_close = function () {
                return "</a>"
            }, l.image = function (e, r, t, n, s) {
                var i = ' src="' + a(e[r].src) + '"', l = e[r].title ? ' title="' + a(o(e[r].title)) + '"' : "";
                return "<img" + i + ' alt="' + s.renderInlineAsText(e[r].tokens, t, n) + '"' + l + (t.xhtmlOut ? " /" : "") + ">"
            }, l.table_open = function () {
                return "<table>\n"
            }, l.table_close = function () {
                return "</table>\n"
            }, l.thead_open = function () {
                return "<thead>\n"
            }, l.thead_close = function () {
                return "</thead>\n"
            }, l.tbody_open = function () {
                return "<tbody>\n"
            }, l.tbody_close = function () {
                return "</tbody>\n"
            }, l.tr_open = function () {
                return "<tr>"
            }, l.tr_close = function () {
                return "</tr>\n"
            }, l.th_open = function (e, r) {
                return e[r].align ? '<th style="text-align:' + e[r].align + '">' : "<th>"
            }, l.th_close = function () {
                return "</th>"
            }, l.td_open = function (e, r) {
                return e[r].align ? '<td style="text-align:' + e[r].align + '">' : "<td>"
            }, l.td_close = function () {
                return "</td>"
            }, l.strong_open = function () {
                return "<strong>"
            }, l.strong_close = function () {
                return "</strong>"
            }, l.em_open = function () {
                return "<em>"
            }, l.em_close = function () {
                return "</em>"
            }, l.s_open = function () {
                return "<s>"
            }, l.s_close = function () {
                return "</s>"
            }, l.hardbreak = function (e, r, t) {
                return t.xhtmlOut ? "<br />\n" : "<br>\n"
            }, l.softbreak = function (e, r, t) {
                return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
            }, l.text = function (e, r) {
                return a(e[r].content)
            }, l.html_block = function (e, r) {
                return e[r].content
            }, l.html_inline = function (e, r) {
                return e[r].content
            }, n.prototype.renderInline = function (e, r, t) {
                for (var n = "", s = this.rules, i = 0, o = e.length; i < o; i++) n += s[e[i].type](e, i, r, t, this);
                return n
            }, n.prototype.renderInlineAsText = function (e, r, t) {
                for (var n = "", s = this.rules, i = 0, o = e.length; i < o; i++) "text" === e[i].type ? n += s.text(e, i, r, t, this) : "image" === e[i].type && (n += this.renderInlineAsText(e[i].tokens, r, t));
                return n
            }, n.prototype.render = function (e, r, t) {
                var n, s, i = "", o = this.rules;
                for (n = 0, s = e.length; n < s; n++) "inline" === e[n].type ? i += this.renderInline(e[n].children, r, t) : i += o[e[n].type](e, n, r, t, this);
                return i
            }, r.exports = n
        }, {"./common/utils": 5}], 19: [function (e, r, t) {
            "use strict";

            function n() {
                this.__rules__ = [], this.__cache__ = null
            }

            n.prototype.__find__ = function (e) {
                for (var r = 0; r < this.__rules__.length; r++) if (this.__rules__[r].name === e) return r;
                return -1
            }, n.prototype.__compile__ = function () {
                var e = this, r = [""];
                e.__rules__.forEach(function (e) {
                    e.enabled && e.alt.forEach(function (e) {
                        r.indexOf(e) < 0 && r.push(e)
                    })
                }), e.__cache__ = {}, r.forEach(function (r) {
                    e.__cache__[r] = [], e.__rules__.forEach(function (t) {
                        t.enabled && (r && t.alt.indexOf(r) < 0 || e.__cache__[r].push(t.fn))
                    })
                })
            }, n.prototype.at = function (e, r, t) {
                var n = this.__find__(e), s = t || {};
                if (-1 === n) throw new Error("Parser rule not found: " + e);
                this.__rules__[n].fn = r, this.__rules__[n].alt = s.alt || [], this.__cache__ = null
            }, n.prototype.before = function (e, r, t, n) {
                var s = this.__find__(e), i = n || {};
                if (-1 === s) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s, 0, {name: r, enabled: !0, fn: t, alt: i.alt || []}), this.__cache__ = null
            }, n.prototype.after = function (e, r, t, n) {
                var s = this.__find__(e), i = n || {};
                if (-1 === s) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s + 1, 0, {name: r, enabled: !0, fn: t, alt: i.alt || []}), this.__cache__ = null
            }, n.prototype.push = function (e, r, t) {
                var n = t || {};
                this.__rules__.push({name: e, enabled: !0, fn: r, alt: n.alt || []}), this.__cache__ = null
            }, n.prototype.enable = function (e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function (e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !0, t.push(e)
                }, this), this.__cache__ = null, t
            }, n.prototype.enableOnly = function (e, r) {
                Array.isArray(e) || (e = [e]), this.__rules__.forEach(function (e) {
                    e.enabled = !1
                }), this.enable(e, r)
            }, n.prototype.disable = function (e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function (e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !1, t.push(e)
                }, this), this.__cache__ = null, t
            }, n.prototype.getRules = function (e) {
                return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
            }, r.exports = n
        }, {}], 20: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t, n) {
                var s, i, o, a, l, c, u, p, h, f, d, g = e.bMarks[r] + e.tShift[r], m = e.eMarks[r];
                if (g > m) return !1;
                if (62 !== e.src.charCodeAt(g++)) return !1;
                if (n) return !0;
                for (32 === e.src.charCodeAt(g) && g++, l = e.blkIndent, e.blkIndent = 0, a = [e.bMarks[r]], e.bMarks[r] = g, g = g < m ? e.skipSpaces(g) : g, i = g >= m, o = [e.tShift[r]], e.tShift[r] = g - e.bMarks[r], p = e.md.block.ruler.getRules("blockquote"), s = r + 1; s < t && (g = e.bMarks[s] + e.tShift[s], m = e.eMarks[s], !(g >= m)); s++) if (62 !== e.src.charCodeAt(g++)) {
                    if (i) break;
                    for (d = !1, h = 0, f = p.length; h < f; h++) if (p[h](e, s, t, !0)) {
                        d = !0;
                        break
                    }
                    if (d) break;
                    a.push(e.bMarks[s]), o.push(e.tShift[s]), e.tShift[s] = -1337
                } else 32 === e.src.charCodeAt(g) && g++, a.push(e.bMarks[s]), e.bMarks[s] = g, g = g < m ? e.skipSpaces(g) : g, i = g >= m, o.push(e.tShift[s]), e.tShift[s] = g - e.bMarks[s];
                for (c = e.parentType, e.parentType = "blockquote", e.tokens.push({
                    type: "blockquote_open",
                    lines: u = [r, 0],
                    level: e.level++
                }), e.md.block.tokenize(e, r, s), e.tokens.push({
                    type: "blockquote_close",
                    level: --e.level
                }), e.parentType = c, u[1] = e.line, h = 0; h < o.length; h++) e.bMarks[h + r] = a[h], e.tShift[h + r] = o[h];
                return e.blkIndent = l, !0
            }
        }, {}], 21: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t) {
                var n, s;
                if (e.tShift[r] - e.blkIndent < 4) return !1;
                for (s = n = r + 1; n < t;) if (e.isEmpty(n)) n++; else {
                    if (!(e.tShift[n] - e.blkIndent >= 4)) break;
                    n++, s = n
                }
                return e.line = n, e.tokens.push({
                    type: "code_block",
                    content: e.getLines(r, s, 4 + e.blkIndent, !0),
                    lines: [r, e.line],
                    level: e.level
                }), !0
            }
        }, {}], 22: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t, n) {
                var s, i, o, a, l, c = !1, u = e.bMarks[r] + e.tShift[r], p = e.eMarks[r];
                if (u + 3 > p) return !1;
                if (126 !== (s = e.src.charCodeAt(u)) && 96 !== s) return !1;
                if (l = u, u = e.skipChars(u, s), (i = u - l) < 3) return !1;
                if (o = e.src.slice(u, p).trim(), o.indexOf("`") >= 0) return !1;
                if (n) return !0;
                for (a = r; !(++a >= t) && (u = l = e.bMarks[a] + e.tShift[a], p = e.eMarks[a], !(u < p && e.tShift[a] < e.blkIndent));) if (e.src.charCodeAt(u) === s && !(e.tShift[a] - e.blkIndent >= 4 || (u = e.skipChars(u, s)) - l < i || (u = e.skipSpaces(u)) < p)) {
                    c = !0;
                    break
                }
                return i = e.tShift[r], e.line = a + (c ? 1 : 0), e.tokens.push({
                    type: "fence",
                    params: o,
                    content: e.getLines(r + 1, a, i, !0),
                    lines: [r, e.line],
                    level: e.level
                }), !0
            }
        }, {}], 23: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t, n) {
                var s, i, o, a = e.bMarks[r] + e.tShift[r], l = e.eMarks[r];
                if (a >= l) return !1;
                if (35 !== (s = e.src.charCodeAt(a)) || a >= l) return !1;
                for (i = 1, s = e.src.charCodeAt(++a); 35 === s && a < l && i <= 6;) i++, s = e.src.charCodeAt(++a);
                return !(i > 6 || a < l && 32 !== s) && (!!n || (l = e.skipCharsBack(l, 32, a), o = e.skipCharsBack(l, 35, a), o > a && 32 === e.src.charCodeAt(o - 1) && (l = o), e.line = r + 1, e.tokens.push({
                    type: "heading_open",
                    hLevel: i,
                    lines: [r, e.line],
                    level: e.level
                }), a < l && e.tokens.push({
                    type: "inline",
                    content: e.src.slice(a, l).trim(),
                    level: e.level + 1,
                    lines: [r, e.line],
                    children: []
                }), e.tokens.push({type: "heading_close", hLevel: i, level: e.level}), !0))
            }
        }, {}], 24: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t, n) {
                var s, i, o, a = e.bMarks[r], l = e.eMarks[r];
                if ((a += e.tShift[r]) > l) return !1;
                if (42 !== (s = e.src.charCodeAt(a++)) && 45 !== s && 95 !== s) return !1;
                for (i = 1; a < l;) {
                    if ((o = e.src.charCodeAt(a++)) !== s && 32 !== o) return !1;
                    o === s && i++
                }
                return !(i < 3) && (!!n || (e.line = r + 1, e.tokens.push({
                    type: "hr",
                    lines: [r, e.line],
                    level: e.level
                }), !0))
            }
        }, {}], 25: [function (e, r, t) {
            "use strict";

            function n(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122
            }

            var s = e("../common/html_blocks"), i = /^<([a-zA-Z]{1,15})[\s\/>]/, o = /^<\/([a-zA-Z]{1,15})[\s>]/;
            r.exports = function (e, r, t, a) {
                var l, c, u, p = e.bMarks[r], h = e.eMarks[r], f = e.tShift[r];
                if (p += f, !e.md.options.html) return !1;
                if (f > 3 || p + 2 >= h) return !1;
                if (60 !== e.src.charCodeAt(p)) return !1;
                if (33 === (l = e.src.charCodeAt(p + 1)) || 63 === l) {
                    if (a) return !0
                } else {
                    if (47 !== l && !n(l)) return !1;
                    if (47 === l) {
                        if (!(c = e.src.slice(p, h).match(o))) return !1
                    } else if (!(c = e.src.slice(p, h).match(i))) return !1;
                    if (!0 !== s[c[1].toLowerCase()]) return !1;
                    if (a) return !0
                }
                for (u = r + 1; u < e.lineMax && !e.isEmpty(u);) u++;
                return e.line = u, e.tokens.push({
                    type: "html_block",
                    level: e.level,
                    lines: [r, e.line],
                    content: e.getLines(r, u, 0, !0)
                }), !0
            }
        }, {"../common/html_blocks": 2}], 26: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t) {
                var n, s, i, o = r + 1;
                return !(o >= t) && (!(e.tShift[o] < e.blkIndent) && (!(e.tShift[o] - e.blkIndent > 3) && (s = e.bMarks[o] + e.tShift[o], i = e.eMarks[o], !(s >= i) && ((45 === (n = e.src.charCodeAt(s)) || 61 === n) && (s = e.skipChars(s, n), !((s = e.skipSpaces(s)) < i) && (s = e.bMarks[r] + e.tShift[r], e.line = o + 1, e.tokens.push({
                    type: "heading_open",
                    hLevel: 61 === n ? 1 : 2,
                    lines: [r, e.line],
                    level: e.level
                }), e.tokens.push({
                    type: "inline",
                    content: e.src.slice(s, e.eMarks[r]).trim(),
                    level: e.level + 1,
                    lines: [r, e.line - 1],
                    children: []
                }), e.tokens.push({type: "heading_close", hLevel: 61 === n ? 1 : 2, level: e.level}), !0))))))
            }
        }, {}], 27: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                var t, n, s;
                return n = e.bMarks[r] + e.tShift[r], s = e.eMarks[r], n >= s ? -1 : (t = e.src.charCodeAt(n++), 42 !== t && 45 !== t && 43 !== t ? -1 : n < s && 32 !== e.src.charCodeAt(n) ? -1 : n)
            }

            function s(e, r) {
                var t, n = e.bMarks[r] + e.tShift[r], s = e.eMarks[r];
                if (n + 1 >= s) return -1;
                if ((t = e.src.charCodeAt(n++)) < 48 || t > 57) return -1;
                for (; ;) {
                    if (n >= s) return -1;
                    if (!((t = e.src.charCodeAt(n++)) >= 48 && t <= 57)) {
                        if (41 === t || 46 === t) break;
                        return -1
                    }
                }
                return n < s && 32 !== e.src.charCodeAt(n) ? -1 : n
            }

            function i(e, r) {
                var t, n, s = e.level + 2;
                for (t = r + 2, n = e.tokens.length - 2; t < n; t++) e.tokens[t].level === s && "paragraph_open" === e.tokens[t].type && (e.tokens[t + 2].tight = !0, e.tokens[t].tight = !0, t += 2)
            }

            r.exports = function (e, r, t, o) {
                var a, l, c, u, p, h, f, d, g, m, b, k, v, y, _, x, A, w, q, C, E, S, D = !0;
                if ((d = s(e, r)) >= 0) v = !0; else {
                    if (!((d = n(e, r)) >= 0)) return !1;
                    v = !1
                }
                if (k = e.src.charCodeAt(d - 1), o) return !0;
                for (_ = e.tokens.length, v ? (f = e.bMarks[r] + e.tShift[r], b = Number(e.src.substr(f, d - f - 1)), e.tokens.push({
                    type: "ordered_list_open",
                    order: b,
                    lines: A = [r, 0],
                    level: e.level++
                })) : e.tokens.push({
                    type: "bullet_list_open",
                    lines: A = [r, 0],
                    level: e.level++
                }), a = r, x = !1, q = e.md.block.ruler.getRules("list"); !(!(a < t) || (y = e.skipSpaces(d), g = e.eMarks[a], m = y >= g ? 1 : y - d, m > 4 && (m = 1), m < 1 && (m = 1), l = d - e.bMarks[a] + m, e.tokens.push({
                    type: "list_item_open",
                    lines: w = [r, 0],
                    level: e.level++
                }), u = e.blkIndent, p = e.tight, c = e.tShift[r], h = e.parentType, e.tShift[r] = y - e.bMarks[r], e.blkIndent = l, e.tight = !0, e.parentType = "list", e.md.block.tokenize(e, r, t, !0), e.tight && !x || (D = !1), x = e.line - r > 1 && e.isEmpty(e.line - 1), e.blkIndent = u, e.tShift[r] = c, e.tight = p, e.parentType = h, e.tokens.push({
                    type: "list_item_close",
                    level: --e.level
                }), a = r = e.line, w[1] = a, y = e.bMarks[r], a >= t) || e.isEmpty(a) || e.tShift[a] < e.blkIndent);) {
                    for (S = !1, C = 0, E = q.length; C < E; C++) if (q[C](e, a, t, !0)) {
                        S = !0;
                        break
                    }
                    if (S) break;
                    if (v) {
                        if ((d = s(e, a)) < 0) break
                    } else if ((d = n(e, a)) < 0) break;
                    if (k !== e.src.charCodeAt(d - 1)) break
                }
                return e.tokens.push({
                    type: v ? "ordered_list_close" : "bullet_list_close",
                    level: --e.level
                }), A[1] = a, e.line = a, D && i(e, _), !0
            }
        }, {}], 28: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r) {
                var t, n, s, i, o, a, l = r + 1;
                if (t = e.lineMax, l < t && !e.isEmpty(l)) for (a = e.md.block.ruler.getRules("paragraph"); l < t && !e.isEmpty(l); l++) if (!(e.tShift[l] - e.blkIndent > 3)) {
                    for (s = !1, i = 0, o = a.length; i < o; i++) if (a[i](e, l, t, !0)) {
                        s = !0;
                        break
                    }
                    if (s) break
                }
                return n = e.getLines(r, l, e.blkIndent, !1).trim(), e.line = l, n.length && (e.tokens.push({
                    type: "paragraph_open",
                    tight: !1,
                    lines: [r, e.line],
                    level: e.level
                }), e.tokens.push({
                    type: "inline",
                    content: n,
                    level: e.level + 1,
                    lines: [r, e.line],
                    children: []
                }), e.tokens.push({type: "paragraph_close", tight: !1, level: e.level})), !0
            }
        }, {}], 29: [function (e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_destination"), s = e("../helpers/parse_link_title"),
                i = e("../helpers/normalize_reference");
            r.exports = function (e, r, t, o) {
                var a, l, c, u, p, h, f, d, g, m, b, k, v, y, _, x = 0, A = e.bMarks[r] + e.tShift[r], w = e.eMarks[r],
                    q = r + 1;
                if (A >= w) return !1;
                if (91 !== e.src.charCodeAt(A)) return !1;
                if (u = e.lineMax, q < u && !e.isEmpty(q)) for (y = e.md.block.ruler.getRules("references"); q < u && !e.isEmpty(q); q++) if (!(e.tShift[q] - e.blkIndent > 3)) {
                    for (v = !1, h = 0, f = y.length; h < f; h++) if (y[h](e, q, u, !0)) {
                        v = !0;
                        break
                    }
                    if (v) break
                }
                for (k = e.getLines(r, q, e.blkIndent, !1).trim(), w = k.length, A = 1; A < w; A++) {
                    if (91 === (a = k.charCodeAt(A))) return !1;
                    if (93 === a) {
                        g = A;
                        break
                    }
                    10 === a ? x++ : 92 === a && ++A < w && 10 === k.charCodeAt(A) && x++
                }
                if (g < 0 || 58 !== k.charCodeAt(g + 1)) return !1;
                for (A = g + 2; A < w; A++) if (10 === (a = k.charCodeAt(A))) x++; else if (32 !== a) break;
                if (m = n(k, A, w), !m.ok) return !1;
                if (!e.md.inline.validateLink(m.str)) return !1;
                for (p = m.str, A = m.pos, x += m.lines, l = A, c = x, b = A; A < w; A++) if (10 === (a = k.charCodeAt(A))) x++; else if (32 !== a) break;
                for (m = s(k, A, w), A < w && b !== A && m.ok ? (_ = m.str, A = m.pos, x += m.lines) : (_ = "", A = l, x = c); A < w && 32 === k.charCodeAt(A);) A++;
                return !(A < w && 10 !== k.charCodeAt(A)) && (!!o || (d = i(k.slice(1, g)), void 0 === e.env.references && (e.env.references = {}), void 0 === e.env.references[d] && (e.env.references[d] = {
                    title: _,
                    href: p
                }), e.line = r + x + 1, !0))
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_title": 10
        }], 30: [function (e, r, t) {
            "use strict";

            function n(e, r, t, n) {
                var s, i, o, a, l, c, u;
                for (this.src = e, this.md = r, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, c = 0, u = !1, o = a = c = 0, l = i.length; a < l; a++) {
                    if (s = i.charCodeAt(a), !u) {
                        if (32 === s) {
                            c++;
                            continue
                        }
                        u = !0
                    }
                    10 !== s && a !== l - 1 || (10 !== s && a++, this.bMarks.push(o), this.eMarks.push(a), this.tShift.push(c), u = !1, c = 0, o = a + 1)
                }
                this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1
            }

            n.prototype.isEmpty = function (e) {
                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
            }, n.prototype.skipEmptyLines = function (e) {
                for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++) ;
                return e
            }, n.prototype.skipSpaces = function (e) {
                for (var r = this.src.length; e < r && 32 === this.src.charCodeAt(e); e++) ;
                return e
            }, n.prototype.skipChars = function (e, r) {
                for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++) ;
                return e
            }, n.prototype.skipCharsBack = function (e, r, t) {
                if (e <= t) return e;
                for (; e > t;) if (r !== this.src.charCodeAt(--e)) return e + 1;
                return e
            }, n.prototype.getLines = function (e, r, t, n) {
                var s, i, o, a, l, c = e;
                if (e >= r) return "";
                if (c + 1 === r) return i = this.bMarks[c] + Math.min(this.tShift[c], t), o = n ? this.bMarks[r] : this.eMarks[r - 1], this.src.slice(i, o);
                for (a = new Array(r - e), s = 0; c < r; c++, s++) l = this.tShift[c], l > t && (l = t), l < 0 && (l = 0), i = this.bMarks[c] + l, o = c + 1 < r || n ? this.eMarks[c] + 1 : this.eMarks[c], a[s] = this.src.slice(i, o);
                return a.join("")
            }, r.exports = n
        }, {}], 31: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                var t = e.bMarks[r] + e.blkIndent, n = e.eMarks[r];
                return e.src.substr(t, n - t)
            }

            r.exports = function (e, r, t, s) {
                var i, o, a, l, c, u, p, h, f, d;
                if (r + 2 > t) return !1;
                if (c = r + 1, e.tShift[c] < e.blkIndent) return !1;
                if ((a = e.bMarks[c] + e.tShift[c]) >= e.eMarks[c]) return !1;
                if (124 !== (i = e.src.charCodeAt(a)) && 45 !== i && 58 !== i) return !1;
                if (o = n(e, r + 1), !/^[-:| ]+$/.test(o)) return !1;
                if ((u = o.split("|")) <= 2) return !1;
                for (p = [], l = 0; l < u.length; l++) {
                    if (!(h = u[l].trim())) {
                        if (0 === l || l === u.length - 1) continue;
                        return !1
                    }
                    if (!/^:?-+:?$/.test(h)) return !1;
                    58 === h.charCodeAt(h.length - 1) ? p.push(58 === h.charCodeAt(0) ? "center" : "right") : 58 === h.charCodeAt(0) ? p.push("left") : p.push("")
                }
                if (o = n(e, r).trim(), -1 === o.indexOf("|")) return !1;
                if (u = o.replace(/^\||\|$/g, "").split("|"), p.length !== u.length) return !1;
                if (s) return !0;
                for (e.tokens.push({
                    type: "table_open",
                    lines: f = [r, 0],
                    level: e.level++
                }), e.tokens.push({
                    type: "thead_open",
                    lines: [r, r + 1],
                    level: e.level++
                }), e.tokens.push({
                    type: "tr_open",
                    lines: [r, r + 1],
                    level: e.level++
                }), l = 0; l < u.length; l++) e.tokens.push({
                    type: "th_open",
                    align: p[l],
                    lines: [r, r + 1],
                    level: e.level++
                }), e.tokens.push({
                    type: "inline",
                    content: u[l].trim(),
                    lines: [r, r + 1],
                    level: e.level,
                    children: []
                }), e.tokens.push({type: "th_close", level: --e.level});
                for (e.tokens.push({type: "tr_close", level: --e.level}), e.tokens.push({
                    type: "thead_close",
                    level: --e.level
                }), e.tokens.push({
                    type: "tbody_open",
                    lines: d = [r + 2, 0],
                    level: e.level++
                }), c = r + 2; c < t && !(e.tShift[c] < e.blkIndent) && (o = n(e, c).trim(), -1 !== o.indexOf("|")); c++) {
                    for (u = o.replace(/^\||\|$/g, "").split("|"), e.tokens.push({
                        type: "tr_open",
                        level: e.level++
                    }), l = 0; l < u.length; l++) e.tokens.push({
                        type: "td_open",
                        align: p[l],
                        level: e.level++
                    }), e.tokens.push({
                        type: "inline",
                        content: u[l].replace(/^\|? *| *\|?$/g, ""),
                        level: e.level,
                        children: []
                    }), e.tokens.push({type: "td_close", level: --e.level});
                    e.tokens.push({type: "tr_close", level: --e.level})
                }
                return e.tokens.push({type: "tbody_close", level: --e.level}), e.tokens.push({
                    type: "table_close",
                    level: --e.level
                }), f[1] = d[1] = c, e.line = c, !0
            }
        }, {}], 32: [function (e, r, t) {
            "use strict";
            r.exports = function (e) {
                e.inlineMode ? e.tokens.push({
                    type: "inline",
                    content: e.src,
                    level: 0,
                    lines: [0, 1],
                    children: []
                }) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
            }
        }, {}], 33: [function (e, r, t) {
            "use strict";
            r.exports = function (e) {
                var r, t, n, s = e.tokens;
                for (t = 0, n = s.length; t < n; t++) r = s[t], "inline" === r.type && e.md.inline.parse(r.content, e.md, e.env, r.children)
            }
        }, {}], 34: [function (e, r, t) {
            "use strict";

            function n(e) {
                return /^<a[>\s]/i.test(e)
            }

            function s(e) {
                return /^<\/a\s*>/i.test(e)
            }

            function i() {
                var e = [], r = new o({
                    stripPrefix: !1, url: !0, email: !0, twitter: !1, replaceFn: function (r, t) {
                        switch (t.getType()) {
                            case"url":
                                e.push({text: t.matchedText, url: t.getUrl()});
                                break;
                            case"email":
                                e.push({text: t.matchedText, url: "mailto:" + t.getEmail().replace(/^mailto:/i, "")})
                        }
                        return !1
                    }
                });
                return {links: e, autolinker: r}
            }

            var o = e("autolinker"), a = e("../common/utils").arrayReplaceAt, l = /www|@|\:\/\//;
            r.exports = function (e) {
                var r, t, o, c, u, p, h, f, d, g, m, b, k, v = e.tokens, y = null;
                if (e.md.options.linkify) for (t = 0, o = v.length; t < o; t++) if ("inline" === v[t].type) for (c = v[t].children, m = 0, r = c.length - 1; r >= 0; r--) if (u = c[r], "link_close" !== u.type) {
                    if ("html_inline" === u.type && (n(u.content) && m > 0 && m--, s(u.content) && m++), !(m > 0) && "text" === u.type && l.test(u.content)) {
                        if (y || (y = i(), b = y.links, k = y.autolinker), p = u.content, b.length = 0, k.link(p), !b.length) continue;
                        for (h = [], g = u.level, f = 0; f < b.length; f++) e.md.inline.validateLink(b[f].url) && (d = p.indexOf(b[f].text), d && (g = g, h.push({
                            type: "text",
                            content: p.slice(0, d),
                            level: g
                        })), h.push({
                            type: "link_open",
                            href: b[f].url,
                            target: "",
                            title: "",
                            level: g++
                        }), h.push({type: "text", content: b[f].text, level: g}), h.push({
                            type: "link_close",
                            level: --g
                        }), p = p.slice(d + b[f].text.length));
                        p.length && h.push({type: "text", content: p, level: g}), v[t].children = c = a(c, r, h)
                    }
                } else for (r--; c[r].level !== u.level && "link_open" !== c[r].type;) r--
            }
        }, {"../common/utils": 5, autolinker: 51}], 35: [function (e, r, t) {
            "use strict";
            var n = /[\n\t]/g, s = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, i = /\u0000/g;
            r.exports = function (e) {
                var r, t, o;
                e.normalizeInput && (r = e.src.replace(s, "\n"), r = r.replace(i, "�"), r.indexOf("\t") >= 0 && (t = 0, o = 0, r = r.replace(n, function (e, n) {
                    var s;
                    return 10 === r.charCodeAt(n) ? (t = n + 1, o = 0, e) : (s = "    ".slice((n - t - o) % 4), o = n - t + 1, s)
                })), e.src = r)
            }
        }, {}], 36: [function (e, r, t) {
            "use strict";

            function n(e) {
                return e.indexOf("(") < 0 ? e : e.replace(i, function (e, r) {
                    return o[r.toLowerCase()]
                })
            }

            var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, i = /\((c|tm|r|p)\)/gi, o = {c: "©", r: "®", p: "§", tm: "™"};
            r.exports = function (e) {
                var r, t, i, o, a;
                if (e.md.options.typographer) for (a = e.tokens.length - 1; a >= 0; a--) if ("inline" === e.tokens[a].type) for (o = e.tokens[a].children, r = o.length - 1; r >= 0; r--) t = o[r], "text" === t.type && (i = t.content, i = n(i), s.test(i) && (i = i.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), t.content = i)
            }
        }, {}], 37: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                return !(r < 0 || r >= e.length) && !a.test(e[r])
            }

            function s(e, r, t) {
                return e.substr(0, r) + t + e.substr(r + 1)
            }

            var i = /['"]/, o = /['"]/g, a = /[-\s()\[\]]/;
            r.exports = function (e) {
                var r, t, a, l, c, u, p, h, f, d, g, m, b, k, v, y, _;
                if (e.md.options.typographer) for (_ = [], v = e.tokens.length - 1; v >= 0; v--) if ("inline" === e.tokens[v].type) for (y = e.tokens[v].children, _.length = 0, r = 0; r < y.length; r++) if (t = y[r], "text" === t.type && !i.test(t.text)) {
                    for (p = y[r].level, b = _.length - 1; b >= 0 && !(_[b].level <= p); b--) ;
                    _.length = b + 1, a = t.content, c = 0, u = a.length;
                    e:for (; c < u && (o.lastIndex = c, l = o.exec(a));) if (h = !n(a, l.index - 1), c = l.index + 1, k = "'" === l[0], (f = !n(a, c)) || h) {
                        if (g = !f, m = !h) for (b = _.length - 1; b >= 0 && (d = _[b], !(_[b].level < p)); b--) if (d.single === k && _[b].level === p) {
                            d = _[b], k ? (y[d.token].content = s(y[d.token].content, d.pos, e.md.options.quotes[2]), t.content = s(t.content, l.index, e.md.options.quotes[3])) : (y[d.token].content = s(y[d.token].content, d.pos, e.md.options.quotes[0]), t.content = s(t.content, l.index, e.md.options.quotes[1])), _.length = b;
                            continue e
                        }
                        g ? _.push({
                            token: r,
                            pos: l.index,
                            single: k,
                            level: p
                        }) : m && k && (t.content = s(t.content, l.index, "’"))
                    } else k && (t.content = s(t.content, l.index, "’"))
                }
            }
        }, {}], 38: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r, t) {
                this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.normalizeInput = !0, this.md = r
            }
        }, {}], 39: [function (e, r, t) {
            "use strict";
            var n = e("../common/url_schemas"), s = e("../common/utils").normalizeLink,
                i = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
                o = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
            r.exports = function (e, r) {
                var t, a, l, c, u, p = e.pos;
                return 60 === e.src.charCodeAt(p) && (t = e.src.slice(p), !(t.indexOf(">") < 0) && ((a = t.match(o)) ? !(n.indexOf(a[1].toLowerCase()) < 0) && (c = a[0].slice(1, -1), u = s(c),
                !!e.md.inline.validateLink(c) && (r || (e.push({
                    type: "link_open",
                    href: u,
                    target: "",
                    level: e.level
                }), e.push({type: "text", content: c, level: e.level + 1}), e.push({
                    type: "link_close",
                    level: e.level
                })), e.pos += a[0].length, !0)) : !!(l = t.match(i)) && (c = l[0].slice(1, -1), u = s("mailto:" + c), !!e.md.inline.validateLink(u) && (r || (e.push({
                    type: "link_open",
                    href: u,
                    target: "",
                    level: e.level
                }), e.push({type: "text", content: c, level: e.level + 1}), e.push({
                    type: "link_close",
                    level: e.level
                })), e.pos += l[0].length, !0))))
            }
        }, {"../common/url_schemas": 4, "../common/utils": 5}], 40: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r) {
                var t, n, s, i, o, a = e.pos;
                if (96 !== e.src.charCodeAt(a)) return !1;
                for (t = a, a++, n = e.posMax; a < n && 96 === e.src.charCodeAt(a);) a++;
                for (s = e.src.slice(t, a), i = o = a; -1 !== (i = e.src.indexOf("`", o));) {
                    for (o = i + 1; o < n && 96 === e.src.charCodeAt(o);) o++;
                    if (o - i === s.length) return r || e.push({
                        type: "code_inline",
                        content: e.src.slice(a, i).replace(/[ \n]+/g, " ").trim(),
                        level: e.level
                    }), e.pos = o, !0
                }
                return r || (e.pending += s), e.pos += s.length, !0
            }
        }, {}], 41: [function (e, r, t) {
            "use strict";

            function n(e) {
                return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122
            }

            function s(e, r) {
                var t, s, l, c, u, p, h, f = r, d = !0, g = !0, m = e.posMax, b = e.src.charCodeAt(r);
                for (t = r > 0 ? e.src.charCodeAt(r - 1) : -1; f < m && e.src.charCodeAt(f) === b;) f++;
                return f >= m && (d = !1), l = f - r, s = f < m ? e.src.charCodeAt(f) : -1, u = t >= 0 && (a(t) || o(String.fromCharCode(t))), h = s >= 0 && (a(s) || o(String.fromCharCode(s))), c = t >= 0 && i(t), p = s >= 0 && i(s), p ? d = !1 : h && (c || u || -1 === t || (d = !1)), c ? g = !1 : u && (p || h || -1 === s || (g = !1)), 95 === b && (n(t) && (d = !1), n(s) && (g = !1)), {
                    can_open: d,
                    can_close: g,
                    delims: l
                }
            }

            var i = e("../common/utils").isWhiteSpace, o = e("../common/utils").isPunctChar,
                a = e("../common/utils").isMdAsciiPunct;
            r.exports = function (e, r) {
                var t, n, i, o, a, l, c, u = e.posMax, p = e.pos, h = e.src.charCodeAt(p);
                if (95 !== h && 42 !== h) return !1;
                if (r) return !1;
                if (c = s(e, p), t = c.delims, !c.can_open) return e.pos += t, e.pending += e.src.slice(p, e.pos), !0;
                for (e.pos = p + t, l = [t]; e.pos < u;) if (e.src.charCodeAt(e.pos) !== h) e.md.inline.skipToken(e); else {
                    if (c = s(e, e.pos), n = c.delims, c.can_close) {
                        for (o = l.pop(), a = n; o !== a;) {
                            if (a < o) {
                                l.push(o - a);
                                break
                            }
                            if (a -= o, 0 === l.length) break;
                            e.pos += o, o = l.pop()
                        }
                        if (0 === l.length) {
                            t = o, i = !0;
                            break
                        }
                        e.pos += n;
                        continue
                    }
                    c.can_open && l.push(n), e.pos += n
                }
                if (!i) return e.pos = p, !1;
                for (e.posMax = e.pos, e.pos = p + t, n = t; n > 1; n -= 2) e.push({
                    type: "strong_open",
                    level: e.level++
                });
                for (n % 2 && e.push({
                    type: "em_open",
                    level: e.level++
                }), e.md.inline.tokenize(e), n % 2 && e.push({
                    type: "em_close",
                    level: --e.level
                }), n = t; n > 1; n -= 2) e.push({type: "strong_close", level: --e.level});
                return e.pos = e.posMax + t, e.posMax = u, !0
            }
        }, {"../common/utils": 5}], 42: [function (e, r, t) {
            "use strict";
            var n = e("../common/entities"), s = e("../common/utils").has, i = e("../common/utils").isValidEntityCode,
                o = e("../common/utils").fromCodePoint, a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
                l = /^&([a-z][a-z0-9]{1,31});/i;
            r.exports = function (e, r) {
                var t, c, u = e.pos, p = e.posMax;
                if (38 !== e.src.charCodeAt(u)) return !1;
                if (u + 1 < p) if (35 === e.src.charCodeAt(u + 1)) {
                    if (c = e.src.slice(u).match(a)) return r || (t = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), e.pending += o(i(t) ? t : 65533)), e.pos += c[0].length, !0
                } else if ((c = e.src.slice(u).match(l)) && s(n, c[1])) return r || (e.pending += n[c[1]]), e.pos += c[0].length, !0;
                return r || (e.pending += "&"), e.pos++, !0
            }
        }, {"../common/entities": 1, "../common/utils": 5}], 43: [function (e, r, t) {
            "use strict";
            for (var n = [], s = 0; s < 256; s++) n.push(0);
            "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
                n[e.charCodeAt(0)] = 1
            }), r.exports = function (e, r) {
                var t, s = e.pos, i = e.posMax;
                if (92 !== e.src.charCodeAt(s)) return !1;
                if (++s < i) {
                    if ((t = e.src.charCodeAt(s)) < 256 && 0 !== n[t]) return r || (e.pending += e.src[s]), e.pos += 2, !0;
                    if (10 === t) {
                        for (r || e.push({
                            type: "hardbreak",
                            level: e.level
                        }), s++; s < i && 32 === e.src.charCodeAt(s);) s++;
                        return e.pos = s, !0
                    }
                }
                return r || (e.pending += "\\"), e.pos++, !0
            }
        }, {}], 44: [function (e, r, t) {
            "use strict";

            function n(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122
            }

            var s = e("../common/html_re").HTML_TAG_RE, i = /^<!--[\s\S]*?-->$/;
            r.exports = function (e, r) {
                var t, o, a, l, c = e.pos;
                return !!e.md.options.html && (a = e.posMax, !(60 !== e.src.charCodeAt(c) || c + 2 >= a) && (!(33 !== (t = e.src.charCodeAt(c + 1)) && 63 !== t && 47 !== t && !n(t)) && (!!(o = e.src.slice(c).match(s)) && (l = e.src.slice(c, c + o[0].length), (!i.test(l) || !/(^>|^->|--|-$)/.test(l.slice(4, -3))) && (r || e.push({
                    type: "html_inline",
                    content: l,
                    level: e.level
                }), e.pos += o[0].length, !0)))))
            }
        }, {"../common/html_re": 3}], 45: [function (e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label"), s = e("../helpers/parse_link_destination"),
                i = e("../helpers/parse_link_title"), o = e("../helpers/normalize_reference");
            r.exports = function (e, r) {
                var t, a, l, c, u, p, h, f, d, g, m, b = e.pos, k = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos)) return !1;
                if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                if (u = e.pos + 2, (c = n(e, e.pos + 1, !1)) < 0) return !1;
                if ((p = c + 1) < k && 40 === e.src.charCodeAt(p)) {
                    for (p++; p < k && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (p >= k) return !1;
                    for (m = p, f = s(e.src, p, e.posMax), f.ok && e.md.inline.validateLink(f.str) ? (a = f.str, p = f.pos) : a = "", m = p; p < k && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (f = i(e.src, p, e.posMax), p < k && m !== p && f.ok) for (d = f.str, p = f.pos; p < k && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ; else d = "";
                    if (p >= k || 41 !== e.src.charCodeAt(p)) return e.pos = b, !1;
                    p++
                } else {
                    if (void 0 === e.env.references) return !1;
                    for (; p < k && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (p < k && 91 === e.src.charCodeAt(p) ? (m = p + 1, p = n(e, p), p >= 0 ? l = e.src.slice(m, p++) : p = c + 1) : p = c + 1, l || (l = e.src.slice(u, c)), !(h = e.env.references[o(l)])) return e.pos = b, !1;
                    a = h.href, d = h.title
                }
                if (!r) {
                    e.pos = u, e.posMax = c;
                    var v = new e.md.inline.State(e.src.slice(u, c), e.md, e.env, g = []);
                    v.md.inline.tokenize(v), e.push({type: "image", src: a, title: d, tokens: g, level: e.level})
                }
                return e.pos = p, e.posMax = k, !0
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_label": 9,
            "../helpers/parse_link_title": 10
        }], 46: [function (e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label"), s = e("../helpers/parse_link_destination"),
                i = e("../helpers/parse_link_title"), o = e("../helpers/normalize_reference");
            r.exports = function (e, r) {
                var t, a, l, c, u, p, h, f, d, g = e.pos, m = e.posMax, b = e.pos;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                if (u = e.pos + 1, (c = n(e, e.pos, !0)) < 0) return !1;
                if ((p = c + 1) < m && 40 === e.src.charCodeAt(p)) {
                    for (p++; p < m && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (p >= m) return !1;
                    for (b = p, h = s(e.src, p, e.posMax), h.ok && e.md.inline.validateLink(h.str) ? (a = h.str, p = h.pos) : a = "", b = p; p < m && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (h = i(e.src, p, e.posMax), p < m && b !== p && h.ok) for (d = h.str, p = h.pos; p < m && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ; else d = "";
                    if (p >= m || 41 !== e.src.charCodeAt(p)) return e.pos = g, !1;
                    p++
                } else {
                    if (void 0 === e.env.references) return !1;
                    for (; p < m && (32 === (t = e.src.charCodeAt(p)) || 10 === t); p++) ;
                    if (p < m && 91 === e.src.charCodeAt(p) ? (b = p + 1, p = n(e, p), p >= 0 ? l = e.src.slice(b, p++) : p = c + 1) : p = c + 1, l || (l = e.src.slice(u, c)), !(f = e.env.references[o(l)])) return e.pos = g, !1;
                    a = f.href, d = f.title
                }
                return r || (e.pos = u, e.posMax = c, e.push({
                    type: "link_open",
                    href: a,
                    target: "",
                    title: d,
                    level: e.level++
                }), e.md.inline.tokenize(e), e.push({
                    type: "link_close",
                    level: --e.level
                })), e.pos = p, e.posMax = m, !0
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_label": 9,
            "../helpers/parse_link_title": 10
        }], 47: [function (e, r, t) {
            "use strict";
            r.exports = function (e, r) {
                var t, n, s = e.pos;
                if (10 !== e.src.charCodeAt(s)) return !1;
                for (t = e.pending.length - 1, n = e.posMax, r || (t >= 0 && 32 === e.pending.charCodeAt(t) ? t >= 1 && 32 === e.pending.charCodeAt(t - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push({
                    type: "hardbreak",
                    level: e.level
                })) : (e.pending = e.pending.slice(0, -1), e.push({
                    type: "softbreak",
                    level: e.level
                })) : e.push({type: "softbreak", level: e.level})), s++; s < n && 32 === e.src.charCodeAt(s);) s++;
                return e.pos = s, !0
            }
        }, {}], 48: [function (e, r, t) {
            "use strict";

            function n(e, r, t, n) {
                this.src = e, this.env = t, this.md = r, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.labelUnmatchedScopes = 0
            }

            n.prototype.pushPending = function () {
                this.tokens.push({type: "text", content: this.pending, level: this.pendingLevel}), this.pending = ""
            }, n.prototype.push = function (e) {
                this.pending && this.pushPending(), this.tokens.push(e), this.pendingLevel = this.level
            }, n.prototype.cacheSet = function (e, r) {
                for (var t = this.cache.length; t <= e; t++) this.cache.push(0);
                this.cache[e] = r
            }, n.prototype.cacheGet = function (e) {
                return e < this.cache.length ? this.cache[e] : 0
            }, r.exports = n
        }, {}], 49: [function (e, r, t) {
            "use strict";

            function n(e, r) {
                var t, n, s, i = r, o = !0, a = !0, l = e.posMax, c = e.src.charCodeAt(r);
                for (t = r > 0 ? e.src.charCodeAt(r - 1) : -1; i < l && e.src.charCodeAt(i) === c;) i++;
                return i >= l && (o = !1), s = i - r, n = i < l ? e.src.charCodeAt(i) : -1, 32 !== n && 10 !== n || (o = !1), 32 !== t && 10 !== t || (a = !1), {
                    can_open: o,
                    can_close: a,
                    delims: s
                }
            }

            r.exports = function (e, r) {
                var t, s, i, o, a, l, c = e.posMax, u = e.pos, p = e.src.charCodeAt(u);
                if (126 !== p) return !1;
                if (r) return !1;
                if (l = n(e, u), t = l.delims, !l.can_open) return e.pos += t, e.pending += e.src.slice(u, e.pos), !0;
                if ((a = Math.floor(t / 2)) <= 0) return !1;
                for (e.pos = u + t; e.pos < c;) if (e.src.charCodeAt(e.pos) !== p) e.md.inline.skipToken(e); else {
                    if (l = n(e, e.pos), s = l.delims, i = Math.floor(s / 2), l.can_close) {
                        if (i >= a) {
                            e.pos += s - 2, o = !0;
                            break
                        }
                        a -= i, e.pos += s;
                        continue
                    }
                    l.can_open && (a += i), e.pos += s
                }
                return o ? (e.posMax = e.pos, e.pos = u + 2, e.push({
                    type: "s_open",
                    level: e.level++
                }), e.md.inline.tokenize(e), e.push({
                    type: "s_close",
                    level: --e.level
                }), e.pos = e.posMax + 2, e.posMax = c, !0) : (e.pos = u, !1)
            }
        }, {}], 50: [function (e, r, t) {
            "use strict";

            function n(e) {
                switch (e) {
                    case 10:
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }

            r.exports = function (e, r) {
                for (var t = e.pos; t < e.posMax && !n(e.src.charCodeAt(t));) t++;
                return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0)
            }
        }, {}], 51: [function (r, t, n) {
            !function (r, s) {
                "function" == typeof e && e.amd ? e([], function () {
                    return r.returnExportsGlobal = s()
                }) : "object" == typeof n ? t.exports = s() : r.Autolinker = s()
            }(this, function () {
                var e = function (r) {
                    e.Util.assign(this, r), this.matchValidator = new e.MatchValidator
                };
                return e.prototype = {
                    constructor: e,
                    urls: !0,
                    email: !0,
                    twitter: !0,
                    newWindow: !0,
                    stripPrefix: !0,
                    className: "",
                    htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,
                    matcherRegex: function () {
                        var e = /(^|[^\w])@(\w{1,15})/, r = /(?:[\-;:&=\+\$,\w\.]+@)/,
                            t = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
                            n = /(?:www\.)/, s = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
                            i = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
                            o = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
                        return new RegExp(["(", e.source, ")", "|", "(", r.source, s.source, i.source, ")", "|", "(", "(?:", "(", t.source, s.source, ")", "|", "(?:", "(.?//)?", n.source, s.source, ")", "|", "(?:", "(.?//)?", s.source, i.source, ")", ")", "(?:" + o.source + ")?", ")"].join(""), "gi")
                    }(),
                    charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
                    link: function (r) {
                        var t = this, n = this.getHtmlParser(), s = this.htmlCharacterEntitiesRegex, i = 0, o = [];
                        return n.parse(r, {
                            processHtmlNode: function (e, r, t) {
                                "a" === r && (t ? i = Math.max(i - 1, 0) : i++), o.push(e)
                            }, processTextNode: function (r) {
                                if (0 === i) for (var n = e.Util.splitAndCapture(r, s), a = 0, l = n.length; a < l; a++) {
                                    var c = n[a], u = t.processTextNode(c);
                                    o.push(u)
                                } else o.push(r)
                            }
                        }), o.join("")
                    },
                    getHtmlParser: function () {
                        var r = this.htmlParser;
                        return r || (r = this.htmlParser = new e.HtmlParser), r
                    },
                    getTagBuilder: function () {
                        var r = this.tagBuilder;
                        return r || (r = this.tagBuilder = new e.AnchorTagBuilder({
                            newWindow: this.newWindow,
                            truncate: this.truncate,
                            className: this.className
                        })), r
                    },
                    processTextNode: function (e) {
                        var r = this;
                        return e.replace(this.matcherRegex, function (e, t, n, s, i, o, a, l, c) {
                            var u = r.processCandidateMatch(e, t, n, s, i, o, a, l, c);
                            if (u) {
                                var p = r.createMatchReturnVal(u.match, u.matchStr);
                                return u.prefixStr + p + u.suffixStr
                            }
                            return e
                        })
                    },
                    processCandidateMatch: function (r, t, n, s, i, o, a, l, c) {
                        var u, p = l || c, h = "", f = "";
                        if (t && !this.twitter || i && !this.email || o && !this.urls || !this.matchValidator.isValidMatch(o, a, p)) return null;
                        if (this.matchHasUnbalancedClosingParen(r) && (r = r.substr(0, r.length - 1), f = ")"), i) u = new e.match.Email({
                            matchedText: r,
                            email: i
                        }); else if (t) n && (h = n, r = r.slice(1)), u = new e.match.Twitter({
                            matchedText: r,
                            twitterHandle: s
                        }); else {
                            if (p) {
                                var d = p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                                d && (h = d, r = r.slice(1))
                            }
                            u = new e.match.Url({
                                matchedText: r,
                                url: r,
                                protocolUrlMatch: !!a,
                                protocolRelativeMatch: !!p,
                                stripPrefix: this.stripPrefix
                            })
                        }
                        return {prefixStr: h, suffixStr: f, matchStr: r, match: u}
                    },
                    matchHasUnbalancedClosingParen: function (e) {
                        if (")" === e.charAt(e.length - 1)) {
                            var r = e.match(/\(/g), t = e.match(/\)/g);
                            if ((r && r.length || 0) < (t && t.length || 0)) return !0
                        }
                        return !1
                    },
                    createMatchReturnVal: function (r, t) {
                        var n;
                        return this.replaceFn && (n = this.replaceFn.call(this, this, r)), "string" == typeof n ? n : !1 === n ? t : n instanceof e.HtmlTag ? n.toString() : this.getTagBuilder().build(r).toString()
                    }
                }, e.link = function (r, t) {
                    return new e(t).link(r)
                }, e.match = {}, e.Util = {
                    abstractMethod: function () {
                        throw"abstract"
                    }, assign: function (e, r) {
                        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
                        return e
                    }, extend: function (r, t) {
                        var n = r.prototype, s = function () {
                        };
                        s.prototype = n;
                        var i;
                        i = t.hasOwnProperty("constructor") ? t.constructor : function () {
                            n.constructor.apply(this, arguments)
                        };
                        var o = i.prototype = new s;
                        return o.constructor = i, o.superclass = n, delete t.constructor, e.Util.assign(o, t), i
                    }, ellipsis: function (e, r, t) {
                        return e.length > r && (t = null == t ? ".." : t, e = e.substring(0, r - t.length) + t), e
                    }, indexOf: function (e, r) {
                        if (Array.prototype.indexOf) return e.indexOf(r);
                        for (var t = 0, n = e.length; t < n; t++) if (e[t] === r) return t;
                        return -1
                    }, splitAndCapture: function (e, r) {
                        if (!r.global) throw new Error("`splitRegex` must have the 'g' flag set");
                        for (var t, n = [], s = 0; t = r.exec(e);) n.push(e.substring(s, t.index)), n.push(t[0]), s = t.index + t[0].length;
                        return n.push(e.substring(s)), n
                    }
                }, e.HtmlParser = e.Util.extend(Object, {
                    htmlRegex: function () {
                        var e = /[0-9a-zA-Z][0-9a-zA-Z:]*/, r = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
                            t = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/, n = r.source + "(?:\\s*=\\s*" + t.source + ")?";
                        return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", n, "|", t.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + e.source + ")", "(?:", "\\s+", n, ")*", "\\s*/?", ">", ")"].join(""), "gi")
                    }(), parse: function (e, r) {
                        r = r || {};
                        for (var t, n = r.processHtmlNode || function () {
                        }, s = r.processTextNode || function () {
                        }, i = this.htmlRegex, o = 0; null !== (t = i.exec(e));) {
                            var a = t[0], l = t[1] || t[3], c = !!t[2], u = e.substring(o, t.index);
                            u && s(u), n(a, l.toLowerCase(), c), o = t.index + a.length
                        }
                        if (o < e.length) {
                            var p = e.substring(o);
                            p && s(p)
                        }
                    }
                }), e.HtmlTag = e.Util.extend(Object, {
                    whitespaceRegex: /\s+/, constructor: function (r) {
                        e.Util.assign(this, r), this.innerHtml = this.innerHtml || this.innerHTML
                    }, setTagName: function (e) {
                        return this.tagName = e, this
                    }, getTagName: function () {
                        return this.tagName || ""
                    }, setAttr: function (e, r) {
                        return this.getAttrs()[e] = r, this
                    }, getAttr: function (e) {
                        return this.getAttrs()[e]
                    }, setAttrs: function (r) {
                        var t = this.getAttrs();
                        return e.Util.assign(t, r), this
                    }, getAttrs: function () {
                        return this.attrs || (this.attrs = {})
                    }, setClass: function (e) {
                        return this.setAttr("class", e)
                    }, addClass: function (r) {
                        for (var t, n = this.getClass(), s = this.whitespaceRegex, i = e.Util.indexOf, o = n ? n.split(s) : [], a = r.split(s); t = a.shift();) -1 === i(o, t) && o.push(t);
                        return this.getAttrs().class = o.join(" "), this
                    }, removeClass: function (r) {
                        for (var t, n = this.getClass(), s = this.whitespaceRegex, i = e.Util.indexOf, o = n ? n.split(s) : [], a = r.split(s); o.length && (t = a.shift());) {
                            var l = i(o, t);
                            -1 !== l && o.splice(l, 1)
                        }
                        return this.getAttrs().class = o.join(" "), this
                    }, getClass: function () {
                        return this.getAttrs().class || ""
                    }, hasClass: function (e) {
                        return -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ")
                    }, setInnerHtml: function (e) {
                        return this.innerHtml = e, this
                    }, getInnerHtml: function () {
                        return this.innerHtml || ""
                    }, toString: function () {
                        var e = this.getTagName(), r = this.buildAttrsStr();
                        return r = r ? " " + r : "", ["<", e, r, ">", this.getInnerHtml(), "</", e, ">"].join("")
                    }, buildAttrsStr: function () {
                        if (!this.attrs) return "";
                        var e = this.getAttrs(), r = [];
                        for (var t in e) e.hasOwnProperty(t) && r.push(t + '="' + e[t] + '"');
                        return r.join(" ")
                    }
                }), e.MatchValidator = e.Util.extend(Object, {
                    invalidProtocolRelMatchRegex: /^[\w]\/\//,
                    hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
                    uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
                    hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
                    isValidMatch: function (e, r, t) {
                        return !(r && !this.isValidUriScheme(r) || this.urlMatchDoesNotHaveProtocolOrDot(e, r) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, r) || this.isInvalidProtocolRelativeMatch(t))
                    },
                    isValidUriScheme: function (e) {
                        var r = e.match(this.uriSchemeRegex)[0];
                        return "javascript:" !== r && "vbscript:" !== r
                    },
                    urlMatchDoesNotHaveProtocolOrDot: function (e, r) {
                        return !(!e || r && this.hasFullProtocolRegex.test(r) || -1 !== e.indexOf("."))
                    },
                    urlMatchDoesNotHaveAtLeastOneWordChar: function (e, r) {
                        return !(!e || !r) && !this.hasWordCharAfterProtocolRegex.test(e)
                    },
                    isInvalidProtocolRelativeMatch: function (e) {
                        return !!e && this.invalidProtocolRelMatchRegex.test(e)
                    }
                }), e.AnchorTagBuilder = e.Util.extend(Object, {
                    constructor: function (r) {
                        e.Util.assign(this, r)
                    }, build: function (r) {
                        return new e.HtmlTag({
                            tagName: "a",
                            attrs: this.createAttrs(r.getType(), r.getAnchorHref()),
                            innerHtml: this.processAnchorText(r.getAnchorText())
                        })
                    }, createAttrs: function (e, r) {
                        var t = {href: r}, n = this.createCssClass(e);
                        return n && (t.class = n), this.newWindow && (t.target = "_blank"), t
                    }, createCssClass: function (e) {
                        var r = this.className;
                        return r ? r + " " + r + "-" + e : ""
                    }, processAnchorText: function (e) {
                        return e = this.doTruncate(e)
                    }, doTruncate: function (r) {
                        return e.Util.ellipsis(r, this.truncate || Number.POSITIVE_INFINITY)
                    }
                }), e.match.Match = e.Util.extend(Object, {
                    constructor: function (r) {
                        e.Util.assign(this, r)
                    }, getType: e.Util.abstractMethod, getMatchedText: function () {
                        return this.matchedText
                    }, getAnchorHref: e.Util.abstractMethod, getAnchorText: e.Util.abstractMethod
                }), e.match.Email = e.Util.extend(e.match.Match, {
                    getType: function () {
                        return "email"
                    }, getEmail: function () {
                        return this.email
                    }, getAnchorHref: function () {
                        return "mailto:" + this.email
                    }, getAnchorText: function () {
                        return this.email
                    }
                }), e.match.Twitter = e.Util.extend(e.match.Match, {
                    getType: function () {
                        return "twitter"
                    }, getTwitterHandle: function () {
                        return this.twitterHandle
                    }, getAnchorHref: function () {
                        return "https://twitter.com/" + this.twitterHandle
                    }, getAnchorText: function () {
                        return "@" + this.twitterHandle
                    }
                }), e.match.Url = e.Util.extend(e.match.Match, {
                    urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
                    protocolRelativeRegex: /^\/\//,
                    protocolPrepended: !1,
                    getType: function () {
                        return "url"
                    },
                    getUrl: function () {
                        var e = this.url;
                        return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e
                    },
                    getAnchorHref: function () {
                        return this.getUrl().replace(/&amp;/g, "&")
                    },
                    getAnchorText: function () {
                        var e = this.getUrl();
                        return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix && (e = this.stripUrlPrefix(e)), e = this.removeTrailingSlash(e)
                    },
                    stripUrlPrefix: function (e) {
                        return e.replace(this.urlPrefixRegex, "")
                    },
                    stripProtocolRelativePrefix: function (e) {
                        return e.replace(this.protocolRelativeRegex, "")
                    },
                    removeTrailingSlash: function (e) {
                        return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
                    }
                }), e
            })
        }, {}], 52: [function (e, r, t) {
            "use strict";
            r.exports = e("./lib/")
        }, {"./lib/": 11}]
    }, {}, [52])(52)
});
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0, function () {
    function e(e) {
        function t(e) {
            var t = e.charCodeAt(0);
            if (92 !== t) return t;
            var n = e.charAt(1);
            return (t = u[n]) ? t : "0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
        }

        function n(e) {
            return e < 32 ? (e < 16 ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), "\\" !== e && "-" !== e && "[" !== e && "]" !== e || (e = "\\" + e), e)
        }

        function r(e) {
            for (var r = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), e = [], a = [], s = "^" === r[0], i = s ? 1 : 0, o = r.length; i < o; ++i) {
                var l = r[i];
                if (/\\[bdsw]/i.test(l)) e.push(l); else {
                    var c, l = t(l);
                    i + 2 < o && "-" === r[i + 1] ? (c = t(r[i + 2]), i += 2) : c = l, a.push([l, c]), c < 65 || l > 122 || (c < 65 || l > 90 || a.push([32 | Math.max(65, l), 32 | Math.min(c, 90)]), c < 97 || l > 122 || a.push([-33 & Math.max(97, l), -33 & Math.min(c, 122)]))
                }
            }
            for (a.sort(function (e, t) {
                return e[0] - t[0] || t[1] - e[1]
            }), r = [], l = [NaN, NaN], i = 0; i < a.length; ++i) o = a[i], o[0] <= l[1] + 1 ? l[1] = Math.max(l[1], o[1]) : r.push(l = o);
            for (a = ["["], s && a.push("^"), a.push.apply(a, e), i = 0; i < r.length; ++i) o = r[i], a.push(n(o[0])), o[1] > o[0] && (o[1] + 1 > o[0] && a.push("-"), a.push(n(o[1])));
            return a.push("]"), a.join("")
        }

        for (var a = 0, s = !1, i = !1, o = 0, l = e.length; o < l; ++o) {
            var c = e[o];
            if (c.ignoreCase) i = !0; else if (/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                s = !0, i = !1;
                break
            }
        }
        for (var u = {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13}, d = [], o = 0, l = e.length; o < l; ++o) {
            if (c = e[o], c.global || c.multiline) throw Error("" + c);
            d.push("(?:" + function (e) {
                for (var t = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), n = t.length, i = [], o = 0, l = 0; o < n; ++o) {
                    var c = t[o];
                    "(" === c ? ++l : "\\" === c.charAt(0) && (c = +c.substring(1)) && c <= l && (i[c] = -1)
                }
                for (o = 1; o < i.length; ++o) -1 === i[o] && (i[o] = ++a);
                for (l = o = 0; o < n; ++o) c = t[o], "(" === c ? (++l, void 0 === i[l] && (t[o] = "(?:")) : "\\" === c.charAt(0) && (c = +c.substring(1)) && c <= l && (t[o] = "\\" + i[l]);
                for (l = o = 0; o < n; ++o) "^" === t[o] && "^" !== t[o + 1] && (t[o] = "");
                if (e.ignoreCase && s) for (o = 0; o < n; ++o) c = t[o], e = c.charAt(0), c.length >= 2 && "[" === e ? t[o] = r(c) : "\\" !== e && (t[o] = c.replace(/[A-Za-z]/g, function (e) {
                    return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                }));
                return t.join("")
            }(c) + ")")
        }
        return RegExp(d.join("|"), i ? "gi" : "g")
    }

    function t(e) {
        function t(e) {
            switch (e.nodeType) {
                case 1:
                    if (r.test(e.className)) break;
                    for (var n = e.firstChild; n; n = n.nextSibling) t(n);
                    n = e.nodeName, "BR" !== n && "LI" !== n || (a[o] = "\n", i[o << 1] = s++, i[o++ << 1 | 1] = e);
                    break;
                case 3:
                case 4:
                    n = e.nodeValue, n.length && (n = l ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "), a[o] = n, i[o << 1] = s, s += n.length, i[o++ << 1 | 1] = e)
            }
        }

        var n, r = /(?:^|\s)nocode(?:\s|$)/, a = [], s = 0, i = [], o = 0;
        e.currentStyle ? n = e.currentStyle.whiteSpace : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
        var l = n && "pre" === n.substring(0, 3);
        return t(e), {a: a.join("").replace(/\n$/, ""), c: i}
    }

    function n(e, t, n, r) {
        t && (e = {a: t, d: e}, n(e), r.push.apply(r, e.e))
    }

    function r(t, r) {
        function a(e) {
            for (var t = e.d, c = [t, "pln"], u = 0, d = e.a.match(s) || [], p = {}, h = 0, f = d.length; h < f; ++h) {
                var g, m = d[h], y = p[m], v = void 0;
                if ("string" == typeof y) g = !1; else {
                    var w = i[m.charAt(0)];
                    if (w) v = m.match(w[1]), y = w[0]; else {
                        for (g = 0; g < l; ++g) if (w = r[g], v = m.match(w[1])) {
                            y = w[0];
                            break
                        }
                        v || (y = "pln")
                    }
                    !(g = y.length >= 5 && "lang-" === y.substring(0, 5)) || v && "string" == typeof v[1] || (g = !1, y = "src"), g || (p[m] = y)
                }
                if (w = u, u += m.length, g) {
                    g = v[1];
                    var b = m.indexOf(g), S = b + g.length;
                    v[2] && (S = m.length - v[2].length, b = S - g.length), y = y.substring(5), n(t + w, m.substring(0, b), a, c), n(t + w + b, g, o(y, g), c), n(t + w + S, m.substring(S), a, c)
                } else c.push(t + w, y)
            }
            e.e = c
        }

        var s, i = {};
        !function () {
            for (var n = t.concat(r), a = [], o = {}, l = 0, c = n.length; l < c; ++l) {
                var u = n[l], d = u[3];
                if (d) for (var p = d.length; --p >= 0;) i[d.charAt(p)] = u;
                u = u[1], d = "" + u, o.hasOwnProperty(d) || (a.push(u), o[d] = q)
            }
            a.push(/[\S\s]/), s = e(a)
        }();
        var l = r.length;
        return a
    }

    function a(e) {
        var t = [], n = [];
        e.tripleQuotedStrings ? t.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : t.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), e.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var a = e.hashComments;
        return a && (e.cStyleComments ? (a > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : t.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : t.push(["com", /^#[^\n\r]*/, q, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]), n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), e.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*\/])(?:[^\/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (a = e.types) && n.push(["typ", a]), e = ("" + e.keywords).replace(/^ | $/g, ""), e.length && n.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]), t.push(["pln", /^\s+/, q, " \r\n\t "]), n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'.\/@\\`]*/, q]), r(t, n)
    }

    function s(e, t) {
        function n(e) {
            switch (e.nodeType) {
                case 1:
                    if (s.test(e.className)) break;
                    if ("BR" === e.nodeName) r(e), e.parentNode && e.parentNode.removeChild(e); else for (e = e.firstChild; e; e = e.nextSibling) n(e);
                    break;
                case 3:
                case 4:
                    if (l) {
                        var t = e.nodeValue, a = t.match(i);
                        if (a) {
                            var c = t.substring(0, a.index);
                            e.nodeValue = c, (t = t.substring(a.index + a[0].length)) && e.parentNode.insertBefore(o.createTextNode(t), e.nextSibling), r(e), c || e.parentNode.removeChild(e)
                        }
                    }
            }
        }

        function r(e) {
            function t(e, n) {
                var r = n ? e.cloneNode(!1) : e, a = e.parentNode;
                if (a) {
                    var a = t(a, 1), s = e.nextSibling;
                    a.appendChild(r);
                    for (var i = s; i; i = s) s = i.nextSibling, a.appendChild(i)
                }
                return r
            }

            for (; !e.nextSibling;) if (!(e = e.parentNode)) return;
            for (var n, e = t(e.nextSibling, 0); (n = e.parentNode) && 1 === n.nodeType;) e = n;
            c.push(e)
        }

        var a, s = /(?:^|\s)nocode(?:\s|$)/, i = /\r\n?|\n/, o = e.ownerDocument;
        e.currentStyle ? a = e.currentStyle.whiteSpace : window.getComputedStyle && (a = o.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
        var l = a && "pre" === a.substring(0, 3);
        for (a = o.createElement("LI"); e.firstChild;) a.appendChild(e.firstChild);
        for (var c = [a], u = 0; u < c.length; ++u) n(c[u]);
        t === (0 | t) && c[0].setAttribute("value", t);
        var d = o.createElement("OL");
        d.className = "linenums";
        for (var p = Math.max(0, t - 1 | 0) || 0, u = 0, h = c.length; u < h; ++u) a = c[u], a.className = "L" + (u + p) % 10, a.firstChild || a.appendChild(o.createTextNode(" ")), d.appendChild(a);
        e.appendChild(d)
    }

    function i(e, t) {
        for (var n = t.length; --n >= 0;) {
            var r = t[n];
            w.hasOwnProperty(r) ? window.console && console.warn("cannot override language handler %s", r) : w[r] = e
        }
    }

    function o(e, t) {
        return e && w.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), w[e]
    }

    function l(e) {
        var n = e.g;
        try {
            var r = t(e.h), a = r.a;
            e.a = a, e.c = r.c, e.d = 0, o(n, a)(e);
            var s = /\bMSIE\b/.test(navigator.userAgent), n = /\n/g, i = e.a, l = i.length, r = 0, c = e.c,
                u = c.length, a = 0, d = e.e, p = d.length, e = 0;
            d[p] = l;
            var h, f;
            for (f = h = 0; f < p;) d[f] !== d[f + 2] ? (d[h++] = d[f++], d[h++] = d[f++]) : f += 2;
            for (p = h, f = h = 0; f < p;) {
                for (var g = d[f], m = d[f + 1], y = f + 2; y + 2 <= p && d[y + 1] === m;) y += 2;
                d[h++] = g, d[h++] = m, f = y
            }
            for (d.length = h; a < u;) {
                var v, w = c[a + 2] || l, b = d[e + 2] || l, y = Math.min(w, b), S = c[a + 1];
                if (1 !== S.nodeType && (v = i.substring(r, y))) {
                    s && (v = v.replace(n, "\r")), S.nodeValue = v;
                    var x = S.ownerDocument, N = x.createElement("SPAN");
                    N.className = d[e + 1];
                    var C = S.parentNode;
                    C.replaceChild(N, S), N.appendChild(S), r < w && (c[a + 1] = S = x.createTextNode(i.substring(y, w)), C.insertBefore(S, N.nextSibling))
                }
                r = y, r >= w && (a += 2), r >= b && (e += 2)
            }
        } catch (e) {
            "console" in window && console.log(e && e.stack ? e.stack : e)
        }
    }

    var c = ["break,continue,do,else,for,if,return,while"],
        u = [[c, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        d = [u, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        p = [u, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
        h = [p, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
        u = [u, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        f = [c, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        g = [c, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        c = [c, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        m = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
        y = /\S/, v = a({
            keywords: [d, h, u, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, g, c],
            hashComments: !0,
            cStyleComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), w = {};
    i(v, ["default-code"]), i(r([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), i(r([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'\/>]|\/(?=\s)))/], ["pun", /^[\/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]), i(r([], [["atv", /^[\S\s]+/]]), ["uq.val"]), i(a({
        keywords: d,
        hashComments: !0,
        cStyleComments: !0,
        types: m
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), i(a({keywords: "null,true,false"}), ["json"]), i(a({
        keywords: h,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: m
    }), ["cs"]), i(a({keywords: p, cStyleComments: !0}), ["java"]), i(a({
        keywords: c,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bsh", "csh", "sh"]), i(a({
        keywords: f,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py"]), i(a({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["perl", "pl", "pm"]), i(a({
        keywords: g,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb"]), i(a({
        keywords: u,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["js"]), i(a({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]), i(r([], [["str", /^[\S\s]+/]]), ["regex"]), window.prettyPrintOne = function (e, t, n) {
        var r = document.createElement("PRE");
        return r.innerHTML = e, n && s(r, n), l({g: t, i: n, h: r}), r.innerHTML
    }, window.prettyPrint = function (e) {
        function t() {
            for (var n = window.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : 1 / 0; d < r.length && c.now() < n; d++) {
                var a = r[d], i = a.className;
                if (i.indexOf("prettyprint") >= 0) {
                    var o, h, i = i.match(p);
                    if (h = !i) {
                        h = a;
                        for (var f = void 0, g = h.firstChild; g; g = g.nextSibling) var m = g.nodeType, f = 1 === m ? f ? h : g : 3 === m && y.test(g.nodeValue) ? h : f;
                        h = (o = f === h ? void 0 : f) && "CODE" === o.tagName
                    }
                    for (h && (i = o.className.match(p)), i && (i = i[1]), h = !1, f = a.parentNode; f; f = f.parentNode) if (("pre" === f.tagName || "code" === f.tagName || "xmp" === f.tagName) && f.className && f.className.indexOf("prettyprint") >= 0) {
                        h = !0;
                        break
                    }
                    h || ((h = !!(h = a.className.match(/\blinenums\b(?::(\d+))?/)) && (!h[1] || !h[1].length || +h[1])) && s(a, h), u = {
                        g: i,
                        h: a,
                        i: h
                    }, l(u))
                }
            }
            d < r.length ? setTimeout(t, 250) : e && e()
        }

        for (var n = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], r = [], a = 0; a < n.length; ++a) for (var i = 0, o = n[a].length; i < o; ++i) r.push(n[a][i]);
        var n = q, c = Date;
        c.now || (c = {
            now: function () {
                return +new Date
            }
        });
        var u, d = 0, p = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        t()
    }, window.PR = {
        createSimpleLexer: r,
        registerLangHandler: i,
        sourceDecorator: a,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    }
}();
var QRCode;
!function () {
    function t(t) {
        this.mode = h.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
        for (var e = 0, r = this.data.length; e < r; e++) {
            var o = [], i = this.data.charCodeAt(e);
            i > 65536 ? (o[0] = 240 | (1835008 & i) >>> 18, o[1] = 128 | (258048 & i) >>> 12, o[2] = 128 | (4032 & i) >>> 6, o[3] = 128 | 63 & i) : i > 2048 ? (o[0] = 224 | (61440 & i) >>> 12, o[1] = 128 | (4032 & i) >>> 6, o[2] = 128 | 63 & i) : i > 128 ? (o[0] = 192 | (1984 & i) >>> 6, o[1] = 128 | 63 & i) : o[0] = i, this.parsedData.push(o)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function e(t, e) {
        this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function r(t, e) {
        if (void 0 == t.length) throw new Error(t.length + "/" + e);
        for (var r = 0; r < t.length && 0 == t[r];) r++;
        this.num = new Array(t.length - r + e);
        for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r]
    }

    function o(t, e) {
        this.totalCount = t, this.dataCount = e
    }

    function i() {
        this.buffer = [], this.length = 0
    }

    function n() {
        var t = !1, e = navigator.userAgent;
        if (/android/i.test(e)) {
            t = !0;
            var r = e.toString().match(/android ([0-9]\.[0-9])/i);
            r && r[1] && (t = parseFloat(r[1]))
        }
        return t
    }

    function a(t, e) {
        for (var r = 1, o = s(t), i = 0, n = c.length; i <= n; i++) {
            var a = 0;
            switch (e) {
                case l.L:
                    a = c[i][0];
                    break;
                case l.M:
                    a = c[i][1];
                    break;
                case l.Q:
                    a = c[i][2];
                    break;
                case l.H:
                    a = c[i][3]
            }
            if (o <= a) break;
            r++
        }
        if (r > c.length) throw new Error("Too long data");
        return r
    }

    function s(t) {
        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return e.length + (e.length != t ? 3 : 0)
    }

    t.prototype = {
        getLength: function (t) {
            return this.parsedData.length
        }, write: function (t) {
            for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8)
        }
    }, e.prototype = {
        addData: function (e) {
            var r = new t(e);
            this.dataList.push(r), this.dataCache = null
        }, isDark: function (t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
        }, getModuleCount: function () {
            return this.moduleCount
        }, make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
        }, makeImpl: function (t, r) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var o = 0; o < this.moduleCount; o++) {
                this.modules[o] = new Array(this.moduleCount);
                for (var i = 0; i < this.moduleCount; i++) this.modules[o][i] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, r), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r)
        }, setupPositionProbePattern: function (t, e) {
            for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var o = -1; o <= 7; o++) e + o <= -1 || this.moduleCount <= e + o || (this.modules[t + r][e + o] = 0 <= r && r <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= o && o <= 4)
        }, getBestMaskPattern: function () {
            for (var t = 0, e = 0, r = 0; r < 8; r++) {
                this.makeImpl(!0, r);
                var o = f.getLostPoint(this);
                (0 == r || t > o) && (t = o, e = r)
            }
            return e
        }, createMovieClip: function (t, e, r) {
            var o = t.createEmptyMovieClip(e, r);
            this.make();
            for (var i = 0; i < this.modules.length; i++) for (var n = 1 * i, a = 0; a < this.modules[i].length; a++) {
                var s = 1 * a, h = this.modules[i][a];
                h && (o.beginFill(0, 100), o.moveTo(s, n), o.lineTo(s + 1, n), o.lineTo(s + 1, n + 1), o.lineTo(s, n + 1), o.endFill())
            }
            return o
        }, setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        }, setupPositionAdjustPattern: function () {
            for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
                var o = t[e], i = t[r];
                if (null == this.modules[o][i]) for (var n = -2; n <= 2; n++) for (var a = -2; a <= 2; a++) this.modules[o + n][i + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a
            }
        }, setupTypeNumber: function (t) {
            for (var e = f.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o
            }
            for (var r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o
            }
        }, setupTypeInfo: function (t, e) {
            for (var r = this.errorCorrectLevel << 3 | e, o = f.getBCHTypeInfo(r), i = 0; i < 15; i++) {
                var n = !t && 1 == (o >> i & 1);
                i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n
            }
            for (var i = 0; i < 15; i++) {
                var n = !t && 1 == (o >> i & 1);
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n
            }
            this.modules[this.moduleCount - 8][8] = !t
        }, mapData: function (t, e) {
            for (var r = -1, o = this.moduleCount - 1, i = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                for (var s = 0; s < 2; s++) if (null == this.modules[o][a - s]) {
                    var h = !1;
                    n < t.length && (h = 1 == (t[n] >>> i & 1));
                    var l = f.getMask(e, o, a - s);
                    l && (h = !h), this.modules[o][a - s] = h, i--, -1 == i && (n++, i = 7)
                }
                if ((o += r) < 0 || this.moduleCount <= o) {
                    o -= r, r = -r;
                    break
                }
            }
        }
    }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (t, r, n) {
        for (var a = o.getRSBlocks(t, r), s = new i, h = 0; h < n.length; h++) {
            var l = n[h];
            s.put(l.mode, 4), s.put(l.getLength(), f.getLengthInBits(l.mode, t)), l.write(s)
        }
        for (var u = 0, h = 0; h < a.length; h++) u += a[h].dataCount;
        if (s.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * u + ")");
        for (s.getLengthInBits() + 4 <= 8 * u && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
        for (; ;) {
            if (s.getLengthInBits() >= 8 * u) break;
            if (s.put(e.PAD0, 8), s.getLengthInBits() >= 8 * u) break;
            s.put(e.PAD1, 8)
        }
        return e.createBytes(s, a)
    }, e.createBytes = function (t, e) {
        for (var o = 0, i = 0, n = 0, a = new Array(e.length), s = new Array(e.length), h = 0; h < e.length; h++) {
            var l = e[h].dataCount, u = e[h].totalCount - l;
            i = Math.max(i, l), n = Math.max(n, u), a[h] = new Array(l);
            for (var g = 0; g < a[h].length; g++) a[h][g] = 255 & t.buffer[g + o];
            o += l;
            var d = f.getErrorCorrectPolynomial(u), c = new r(a[h], d.getLength() - 1), p = c.mod(d);
            s[h] = new Array(d.getLength() - 1);
            for (var g = 0; g < s[h].length; g++) {
                var m = g + p.getLength() - s[h].length;
                s[h][g] = m >= 0 ? p.get(m) : 0
            }
        }
        for (var v = 0, g = 0; g < e.length; g++) v += e[g].totalCount;
        for (var _ = new Array(v), C = 0, g = 0; g < i; g++) for (var h = 0; h < e.length; h++) g < a[h].length && (_[C++] = a[h][g]);
        for (var g = 0; g < n; g++) for (var h = 0; h < e.length; h++) g < s[h].length && (_[C++] = s[h][g]);
        return _
    };
    for (var h = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, l = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, u = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, f = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (t) {
            for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
            return (t << 10 | e) ^ f.G15_MASK
        },
        getBCHTypeNumber: function (t) {
            for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
            return t << 12 | e
        },
        getBCHDigit: function (t) {
            for (var e = 0; 0 != t;) e++, t >>>= 1;
            return e
        },
        getPatternPosition: function (t) {
            return f.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function (t, e, r) {
            switch (t) {
                case u.PATTERN000:
                    return (e + r) % 2 == 0;
                case u.PATTERN001:
                    return e % 2 == 0;
                case u.PATTERN010:
                    return r % 3 == 0;
                case u.PATTERN011:
                    return (e + r) % 3 == 0;
                case u.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                case u.PATTERN101:
                    return e * r % 2 + e * r % 3 == 0;
                case u.PATTERN110:
                    return (e * r % 2 + e * r % 3) % 2 == 0;
                case u.PATTERN111:
                    return (e * r % 3 + (e + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial: function (t) {
            for (var e = new r([1], 0), o = 0; o < t; o++) e = e.multiply(new r([1, g.gexp(o)], 0));
            return e
        },
        getLengthInBits: function (t, e) {
            if (1 <= e && e < 10) switch (t) {
                case h.MODE_NUMBER:
                    return 10;
                case h.MODE_ALPHA_NUM:
                    return 9;
                case h.MODE_8BIT_BYTE:
                case h.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + t)
            } else if (e < 27) switch (t) {
                case h.MODE_NUMBER:
                    return 12;
                case h.MODE_ALPHA_NUM:
                    return 11;
                case h.MODE_8BIT_BYTE:
                    return 16;
                case h.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + t)
            } else {
                if (!(e < 41)) throw new Error("type:" + e);
                switch (t) {
                    case h.MODE_NUMBER:
                        return 14;
                    case h.MODE_ALPHA_NUM:
                        return 13;
                    case h.MODE_8BIT_BYTE:
                        return 16;
                    case h.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                }
            }
        },
        getLostPoint: function (t) {
            for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++) for (var i = 0; i < e; i++) {
                for (var n = 0, a = t.isDark(o, i), s = -1; s <= 1; s++) if (!(o + s < 0 || e <= o + s)) for (var h = -1; h <= 1; h++) i + h < 0 || e <= i + h || 0 == s && 0 == h || a == t.isDark(o + s, i + h) && n++;
                n > 5 && (r += 3 + n - 5)
            }
            for (var o = 0; o < e - 1; o++) for (var i = 0; i < e - 1; i++) {
                var l = 0;
                t.isDark(o, i) && l++, t.isDark(o + 1, i) && l++, t.isDark(o, i + 1) && l++, t.isDark(o + 1, i + 1) && l++, 0 != l && 4 != l || (r += 3)
            }
            for (var o = 0; o < e; o++) for (var i = 0; i < e - 6; i++) t.isDark(o, i) && !t.isDark(o, i + 1) && t.isDark(o, i + 2) && t.isDark(o, i + 3) && t.isDark(o, i + 4) && !t.isDark(o, i + 5) && t.isDark(o, i + 6) && (r += 40);
            for (var i = 0; i < e; i++) for (var o = 0; o < e - 6; o++) t.isDark(o, i) && !t.isDark(o + 1, i) && t.isDark(o + 2, i) && t.isDark(o + 3, i) && t.isDark(o + 4, i) && !t.isDark(o + 5, i) && t.isDark(o + 6, i) && (r += 40);
            for (var u = 0, i = 0; i < e; i++) for (var o = 0; o < e; o++) t.isDark(o, i) && u++;
            return r += Math.abs(100 * u / e / e - 50) / 5 * 10
        }
    }, g = {
        glog: function (t) {
            if (t < 1) throw new Error("glog(" + t + ")");
            return g.LOG_TABLE[t]
        }, gexp: function (t) {
            for (; t < 0;) t += 255;
            for (; t >= 256;) t -= 255;
            return g.EXP_TABLE[t]
        }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
    }, d = 0; d < 8; d++) g.EXP_TABLE[d] = 1 << d;
    for (var d = 8; d < 256; d++) g.EXP_TABLE[d] = g.EXP_TABLE[d - 4] ^ g.EXP_TABLE[d - 5] ^ g.EXP_TABLE[d - 6] ^ g.EXP_TABLE[d - 8];
    for (var d = 0; d < 255; d++) g.LOG_TABLE[g.EXP_TABLE[d]] = d;
    r.prototype = {
        get: function (t) {
            return this.num[t]
        }, getLength: function () {
            return this.num.length
        }, multiply: function (t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), o = 0; o < this.getLength(); o++) for (var i = 0; i < t.getLength(); i++) e[o + i] ^= g.gexp(g.glog(this.get(o)) + g.glog(t.get(i)));
            return new r(e, 0)
        }, mod: function (t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), o = new Array(this.getLength()), i = 0; i < this.getLength(); i++) o[i] = this.get(i);
            for (var i = 0; i < t.getLength(); i++) o[i] ^= g.gexp(g.glog(t.get(i)) + e);
            return new r(o, 0).mod(t)
        }
    }, o.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], o.getRSBlocks = function (t, e) {
        var r = o.getRsBlockTable(t, e);
        if (void 0 == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var i = r.length / 3, n = [], a = 0; a < i; a++) for (var s = r[3 * a + 0], h = r[3 * a + 1], l = r[3 * a + 2], u = 0; u < s; u++) n.push(new o(h, l));
        return n
    }, o.getRsBlockTable = function (t, e) {
        switch (e) {
            case l.L:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case l.M:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case l.Q:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case l.H:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
        }
    }, i.prototype = {
        get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        }, put: function (t, e) {
            for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
    };
    var c = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        p = function () {
            var t = function (t, e) {
                this._el = t, this._htOption = e
            };
            return t.prototype.draw = function (t) {
                function e(t, e) {
                    var r = document.createElementNS("http://www.w3.org/2000/svg", t);
                    for (var o in e) e.hasOwnProperty(o) && r.setAttribute(o, e[o]);
                    return r
                }

                var r = this._htOption, o = this._el, i = t.getModuleCount();
                Math.floor(r.width / i), Math.floor(r.height / i);
                this.clear();
                var n = e("svg", {
                    viewBox: "0 0 " + String(i) + " " + String(i),
                    width: "100%",
                    height: "100%",
                    fill: r.colorLight
                });
                n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o.appendChild(n), n.appendChild(e("rect", {
                    fill: r.colorLight,
                    width: "100%",
                    height: "100%"
                })), n.appendChild(e("rect", {fill: r.colorDark, width: "1", height: "1", id: "template"}));
                for (var a = 0; a < i; a++) for (var s = 0; s < i; s++) if (t.isDark(a, s)) {
                    var h = e("use", {x: String(a), y: String(s)});
                    h.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), n.appendChild(h)
                }
            }, t.prototype.clear = function () {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, t
        }(), m = "svg" === document.documentElement.tagName.toLowerCase(), v = m ? p : function () {
            return "undefined" != typeof CanvasRenderingContext2D
        }() ? function () {
            function t() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function e(t, e) {
                var r = this;
                if (r._fFail = e, r._fSuccess = t, null === r._bSupportDataURI) {
                    var o = document.createElement("img"), i = function () {
                        r._bSupportDataURI = !1, r._fFail && r._fFail.call(r)
                    }, n = function () {
                        r._bSupportDataURI = !0, r._fSuccess && r._fSuccess.call(r)
                    };
                    return o.onabort = i, o.onerror = i, o.onload = n, void(o.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                !0 === r._bSupportDataURI && r._fSuccess ? r._fSuccess.call(r) : !1 === r._bSupportDataURI && r._fFail && r._fFail.call(r)
            }

            if (this._android && this._android <= 2.1) {
                var r = 1 / window.devicePixelRatio, o = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function (t, e, i, n, a, s, h, l, u) {
                    if ("nodeName" in t && /img/i.test(t.nodeName)) for (var f = arguments.length - 1; f >= 1; f--) arguments[f] = arguments[f] * r; else void 0 === l && (arguments[1] *= r, arguments[2] *= r, arguments[3] *= r, arguments[4] *= r);
                    o.apply(this, arguments)
                }
            }
            var i = function (t, e) {
                this._bIsPainted = !1, this._android = n(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return i.prototype.draw = function (t) {
                var e = this._elImage, r = this._oContext, o = this._htOption, i = t.getModuleCount(), n = o.width / i,
                    a = o.height / i, s = Math.round(n), h = Math.round(a);
                e.style.display = "none", this.clear();
                for (var l = 0; l < i; l++) for (var u = 0; u < i; u++) {
                    var f = t.isDark(l, u), g = u * n, d = l * a;
                    r.strokeStyle = f ? o.colorDark : o.colorLight, r.lineWidth = 1, r.fillStyle = f ? o.colorDark : o.colorLight, r.fillRect(g, d, n, a), r.strokeRect(Math.floor(g) + .5, Math.floor(d) + .5, s, h), r.strokeRect(Math.ceil(g) - .5, Math.ceil(d) - .5, s, h)
                }
                this._bIsPainted = !0
            }, i.prototype.makeImage = function () {
                this._bIsPainted && e.call(this, t)
            }, i.prototype.isPainted = function () {
                return this._bIsPainted
            }, i.prototype.clear = function () {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, i.prototype.round = function (t) {
                return t ? Math.floor(1e3 * t) / 1e3 : t
            }, i
        }() : function () {
            var t = function (t, e) {
                this._el = t, this._htOption = e
            };
            return t.prototype.draw = function (t) {
                for (var e = this._htOption, r = this._el, o = t.getModuleCount(), i = Math.floor(e.width / o), n = Math.floor(e.height / o), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < o; s++) {
                    a.push("<tr>");
                    for (var h = 0; h < o; h++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + n + "px;background-color:" + (t.isDark(s, h) ? e.colorDark : e.colorLight) + ';"></td>');
                    a.push("</tr>")
                }
                a.push("</table>"), r.innerHTML = a.join("");
                var l = r.childNodes[0], u = (e.width - l.offsetWidth) / 2, f = (e.height - l.offsetHeight) / 2;
                u > 0 && f > 0 && (l.style.margin = f + "px " + u + "px")
            }, t.prototype.clear = function () {
                this._el.innerHTML = ""
            }, t
        }();
    QRCode = function (t, e) {
        if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: l.H
            }, "string" == typeof e && (e = {text: e}), e) for (var r in e) this._htOption[r] = e[r];
        "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (v = p), this._android = n(), this._el = t, this._oQRCode = null, this._oDrawing = new v(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function (t) {
        this._oQRCode = new e(a(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = l
}();
$(document).ready(function () {
    function t() {
        i.css({top: e, right: 0})
    }

    function n() {
        $(document.body).height() < o ? $("#footer").addClass("fix-bottom") : $("#footer").removeClass("fix-bottom")
    }

    var o = $(window).height(), i = $("#backtotop"), e = o - i.height() - 200;
    i.click(function () {
        return $("html,body").animate({scrollTop: 0}), !1
    }), $(window).scroll(function () {
        $(window).scrollTop() > 200 ? i.fadeIn() : i.fadeOut()
    }), t(), n(), $(window).resize(t), $(window).resize(n), $(".topic_content a,.reply_content a").attr("target", "_blank"), prettyPrint(), $(".submit_btn").click(function () {
        $(this).button("loading")
    }), $(".sponsor_outlink").click(function () {
        var t = $(this), n = t.data("label");
        ga("send", "event", "banner", "click", n, 1, {nonInteraction: 1})
    })
});
$(document).ready(function () {
    var e = $("#responsive-sidebar-trigger"), t = $("#sidebar-mask"), o = $("#sidebar"), n = $("#main"),
        a = $(window).width(), i = 0, c = 0, d = {x: 0, y: 0}, h = a / 3, r = function () {
            var a = e.data("is-show"), i = n.height(), c = o.outerHeight();
            o.css({right: a ? -300 : 0}), e.data("is-show", !a), !a && i < c && n.height(c), t[a ? "fadeOut" : "fadeIn"]().height($("body").height()), o[a ? "hide" : "show"]()
        }, s = function (e) {
            var t = e.targetTouches;
            i = +t[0].pageX, c = +t[0].pageY, d.x = d.y = 0, document.body.addEventListener("touchmove", u, !1), document.body.addEventListener("touchend", g, !1)
        }, u = function (e) {
            var t = e.changedTouches;
            d.x = +t[0].pageX - i, d.y = +t[0].pageY - c, Math.abs(d.x) > Math.abs(d.y) && e.preventDefault()
        }, g = function (t) {
            var o = t.changedTouches, n = e.data("is-show");
            d.x = +o[0].pageX - i, !n && i > 3 * a / 4 && Math.abs(d.x) > h && e.trigger("click"), n && i < 1 * a / 4 && Math.abs(d.x) > h && e.trigger("click"), i = c = 0, d.x = d.y = 0, document.body.removeEventListener("touchmove", u, !1), document.body.removeEventListener("touchend", g, !1)
        };
    ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && document.body.addEventListener("touchstart", s), e.on("click", r), t.on("click", function () {
        e.trigger("click")
    })
});
