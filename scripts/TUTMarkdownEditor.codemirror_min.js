!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.CodeMirror = t()
}(this, function() {
    "use strict";
    var e = navigator.userAgent
      , t = navigator.platform
      , g = /gecko\/\d/i.test(e)
      , r = /MSIE \d/.test(e)
      , n = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e)
      , i = /Edge\/(\d+)/.exec(e)
      , x = r || n || i
      , C = x && (r ? document.documentMode || 6 : +(i || n)[1])
      , b = !i && /WebKit\//.test(e)
      , o = b && /Qt\/\d+\.\d+/.test(e)
      , l = !i && /Chrome\//.test(e)
      , v = /Opera\//.test(e)
      , a = /Apple Computer/.test(navigator.vendor)
      , s = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e)
      , u = /PhantomJS/.test(e)
      , c = !i && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e)
      , h = /Android/.test(e)
      , f = c || h || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e)
      , w = c || /Mac/.test(t)
      , d = /\bCrOS\b/.test(e)
      , p = /win/i.test(t)
      , m = v && e.match(/Version\/(\d*\.\d*)/);
    (m = m && Number(m[1])) && 15 <= m && (b = !(v = !1));
    var y = w && (o || v && (null == m || m < 12.11))
      , S = g || x && 9 <= C;
    function L(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }
    var k, T = function(e, t) {
        var r = e.className
          , n = L(t).exec(r);
        if (n) {
            var i = r.slice(n.index + n[0].length);
            e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
        }
    };
    function M(e) {
        for (var t = e.childNodes.length; 0 < t; --t)
            e.removeChild(e.firstChild);
        return e
    }
    function N(e, t) {
        return M(e).appendChild(t)
    }
    function A(e, t, r, n) {
        var i = document.createElement(e);
        if (r && (i.className = r),
        n && (i.style.cssText = n),
        "string" == typeof t)
            i.appendChild(document.createTextNode(t));
        else if (t)
            for (var o = 0; o < t.length; ++o)
                i.appendChild(t[o]);
        return i
    }
    function O(e, t, r, n) {
        var i = A(e, t, r, n);
        return i.setAttribute("role", "presentation"),
        i
    }
    function D(e, t) {
        if (3 == t.nodeType && (t = t.parentNode),
        e.contains)
            return e.contains(t);
        do {
            if (11 == t.nodeType && (t = t.host),
            t == e)
                return !0
        } while (t = t.parentNode)
    }
    function W() {
        var t;
        try {
            t = document.activeElement
        } catch (e) {
            t = document.body || null
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
            t = t.shadowRoot.activeElement;
        return t
    }
    function H(e, t) {
        var r = e.className;
        L(t).test(r) || (e.className += (r ? " " : "") + t)
    }
    function F(e, t) {
        for (var r = e.split(" "), n = 0; n < r.length; n++)
            r[n] && !L(r[n]).test(t) && (t += " " + r[n]);
        return t
    }
    k = document.createRange ? function(e, t, r, n) {
        var i = document.createRange();
        return i.setEnd(n || e, r),
        i.setStart(e, t),
        i
    }
    : function(e, t, r) {
        var n = document.body.createTextRange();
        try {
            n.moveToElementText(e.parentNode)
        } catch (e) {
            return n
        }
        return n.collapse(!0),
        n.moveEnd("character", r),
        n.moveStart("character", t),
        n
    }
    ;
    var P = function(e) {
        e.select()
    };
    function E(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
            return e.apply(null, t)
        }
    }
    function I(e, t, r) {
        for (var n in t = t || {},
        e)
            !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
        return t
    }
    function z(e, t, r, n, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = n || 0, l = i || 0; ; ) {
            var s = e.indexOf("\t", o);
            if (s < 0 || t <= s)
                return l + (t - o);
            l += s - o,
            l += r - l % r,
            o = s + 1
        }
    }
    c ? P = function(e) {
        e.selectionStart = 0,
        e.selectionEnd = e.value.length
    }
    : x && (P = function(e) {
        try {
            e.select()
        } catch (e) {}
    }
    );
    var R = function() {
        this.id = null
    };
    function B(e, t) {
        for (var r = 0; r < e.length; ++r)
            if (e[r] == t)
                return r;
        return -1
    }
    R.prototype.set = function(e, t) {
        clearTimeout(this.id),
        this.id = setTimeout(t, e)
    }
    ;
    var G = 30
      , U = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    }
      , V = {
        scroll: !1
    }
      , K = {
        origin: "*mouse"
    }
      , j = {
        origin: "+move"
    };
    function X(e, t, r) {
        for (var n = 0, i = 0; ; ) {
            var o = e.indexOf("\t", n);
            -1 == o && (o = e.length);
            var l = o - n;
            if (o == e.length || t <= i + l)
                return n + Math.min(l, t - i);
            if (i += o - n,
            n = o + 1,
            t <= (i += r - i % r))
                return n
        }
    }
    var Y = [""];
    function _(e) {
        for (; Y.length <= e; )
            Y.push($(Y) + " ");
        return Y[e]
    }
    function $(e) {
        return e[e.length - 1]
    }
    function q(e, t) {
        for (var r = [], n = 0; n < e.length; n++)
            r[n] = t(e[n], n);
        return r
    }
    function Z() {}
    function Q(e, t) {
        var r;
        return r = Object.create ? Object.create(e) : (Z.prototype = e,
        new Z),
        t && I(t, r),
        r
    }
    var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function ee(e) {
        return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || J.test(e))
    }
    function te(e, t) {
        return t ? !!(-1 < t.source.indexOf("\\w") && ee(e)) || t.test(e) : ee(e)
    }
    function re(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
                return !1;
        return !0
    }
    var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function ie(e) {
        return 768 <= e.charCodeAt(0) && ne.test(e)
    }
    function oe(e, t, r) {
        for (; (r < 0 ? 0 < t : t < e.length) && ie(e.charAt(t)); )
            t += r;
        return t
    }
    function le(e, t, r) {
        for (var n = r < t ? -1 : 1; ; ) {
            if (t == r)
                return t;
            var i = (t + r) / 2
              , o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t)
                return e(o) ? t : r;
            e(o) ? r = o : t = o + n
        }
    }
    var se = null;
    function ae(e, t, r) {
        var n;
        se = null;
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t)
                return i;
            o.to == t && (o.from != o.to && "before" == r ? n = i : se = i),
            o.from == t && (o.from != o.to && "before" != r ? n = i : se = i)
        }
        return null != n ? n : se
    }
    var ue, ce, he, fe, de, pe, ge, ve = (ue = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
    ce = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
    he = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
    fe = /[stwN]/,
    de = /[LRr]/,
    pe = /[Lb1n]/,
    ge = /[1n]/,
    function(e, t) {
        var r = "ltr" == t ? "L" : "R";
        if (0 == e.length || "ltr" == t && !he.test(e))
            return !1;
        for (var n, i = e.length, o = [], l = 0; l < i; ++l)
            o.push((n = e.charCodeAt(l)) <= 247 ? ue.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? ce.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L");
        for (var s = 0, a = r; s < i; ++s) {
            var u = o[s];
            "m" == u ? o[s] = a : a = u
        }
        for (var c = 0, h = r; c < i; ++c) {
            var f = o[c];
            "1" == f && "r" == h ? o[c] = "n" : de.test(f) && "r" == (h = f) && (o[c] = "R")
        }
        for (var d = 1, p = o[0]; d < i - 1; ++d) {
            var g = o[d];
            "+" == g && "1" == p && "1" == o[d + 1] ? o[d] = "1" : "," != g || p != o[d + 1] || "1" != p && "n" != p || (o[d] = p),
            p = g
        }
        for (var v = 0; v < i; ++v) {
            var m = o[v];
            if ("," == m)
                o[v] = "N";
            else if ("%" == m) {
                var y = void 0;
                for (y = v + 1; y < i && "%" == o[y]; ++y)
                    ;
                for (var b = v && "!" == o[v - 1] || y < i && "1" == o[y] ? "1" : "N", w = v; w < y; ++w)
                    o[w] = b;
                v = y - 1
            }
        }
        for (var x = 0, C = r; x < i; ++x) {
            var S = o[x];
            "L" == C && "1" == S ? o[x] = "L" : de.test(S) && (C = S)
        }
        for (var L = 0; L < i; ++L)
            if (fe.test(o[L])) {
                var k = void 0;
                for (k = L + 1; k < i && fe.test(o[k]); ++k)
                    ;
                for (var T = "L" == (L ? o[L - 1] : r), M = T == ("L" == (k < i ? o[k] : r)) ? T ? "L" : "R" : r, N = L; N < k; ++N)
                    o[N] = M;
                L = k - 1
            }
        for (var O, A = [], D = 0; D < i; )
            if (pe.test(o[D])) {
                var W = D;
                for (++D; D < i && pe.test(o[D]); ++D)
                    ;
                A.push(new me(0,W,D))
            } else {
                var H = D
                  , F = A.length;
                for (++D; D < i && "L" != o[D]; ++D)
                    ;
                for (var P = H; P < D; )
                    if (ge.test(o[P])) {
                        H < P && A.splice(F, 0, new me(1,H,P));
                        var E = P;
                        for (++P; P < D && ge.test(o[P]); ++P)
                            ;
                        A.splice(F, 0, new me(2,E,P)),
                        H = P
                    } else
                        ++P;
                H < D && A.splice(F, 0, new me(1,H,D))
            }
        return "ltr" == t && (1 == A[0].level && (O = e.match(/^\s+/)) && (A[0].from = O[0].length,
        A.unshift(new me(0,0,O[0].length))),
        1 == $(A).level && (O = e.match(/\s+$/)) && ($(A).to -= O[0].length,
        A.push(new me(0,i - O[0].length,i)))),
        "rtl" == t ? A.reverse() : A
    }
    );
    function me(e, t, r) {
        this.level = e,
        this.from = t,
        this.to = r
    }
    function ye(e, t) {
        var r = e.order;
        return null == r && (r = e.order = ve(e.text, t)),
        r
    }
    var be = []
      , we = function(e, t, r) {
        if (e.addEventListener)
            e.addEventListener(t, r, !1);
        else if (e.attachEvent)
            e.attachEvent("on" + t, r);
        else {
            var n = e._handlers || (e._handlers = {});
            n[t] = (n[t] || be).concat(r)
        }
    };
    function xe(e, t) {
        return e._handlers && e._handlers[t] || be
    }
    function Ce(e, t, r) {
        if (e.removeEventListener)
            e.removeEventListener(t, r, !1);
        else if (e.detachEvent)
            e.detachEvent("on" + t, r);
        else {
            var n = e._handlers
              , i = n && n[t];
            if (i) {
                var o = B(i, r);
                -1 < o && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
            }
        }
    }
    function Se(e, t) {
        var r = xe(e, t);
        if (r.length)
            for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
                r[i].apply(null, n)
    }
    function Le(e, t, r) {
        return "string" == typeof t && (t = {
            type: t,
            preventDefault: function() {
                this.defaultPrevented = !0
            }
        }),
        Se(e, r || t.type, e, t),
        Ae(t) || t.codemirrorIgnore
    }
    function ke(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
            for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n)
                -1 == B(r, t[n]) && r.push(t[n])
    }
    function Te(e, t) {
        return 0 < xe(e, t).length
    }
    function Me(e) {
        e.prototype.on = function(e, t) {
            we(this, e, t)
        }
        ,
        e.prototype.off = function(e, t) {
            Ce(this, e, t)
        }
    }
    function Ne(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function Oe(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function Ae(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }
    function De(e) {
        Ne(e),
        Oe(e)
    }
    function We(e) {
        return e.target || e.srcElement
    }
    function He(e) {
        var t = e.which;
        return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
        w && e.ctrlKey && 1 == t && (t = 3),
        t
    }
    var Fe, Pe, Ee = function() {
        if (x && C < 9)
            return !1;
        var e = A("div");
        return "draggable"in e || "dragDrop"in e
    }();
    function Ie(e) {
        if (null == Fe) {
            var t = A("span", "​");
            N(e, A("span", [t, document.createTextNode("x")])),
            0 != e.firstChild.offsetHeight && (Fe = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(x && C < 8))
        }
        var r = Fe ? A("span", "​") : A("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return r.setAttribute("cm-text", ""),
        r
    }
    function ze(e) {
        if (null != Pe)
            return Pe;
        var t = N(e, document.createTextNode("AخA"))
          , r = k(t, 0, 1).getBoundingClientRect()
          , n = k(t, 1, 2).getBoundingClientRect();
        return M(e),
        !(!r || r.left == r.right) && (Pe = n.right - r.right < 3)
    }
    var Re, Be = 3 != "\n\nb".split(/\n/).length ? function(e) {
        for (var t = 0, r = [], n = e.length; t <= n; ) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i)
              , l = o.indexOf("\r");
            -1 != l ? (r.push(o.slice(0, l)),
            t += l + 1) : (r.push(o),
            t = i + 1)
        }
        return r
    }
    : function(e) {
        return e.split(/\r\n?|\n/)
    }
    , Ge = window.getSelection ? function(e) {
        try {
            return e.selectionStart != e.selectionEnd
        } catch (e) {
            return !1
        }
    }
    : function(e) {
        var t;
        try {
            t = e.ownerDocument.selection.createRange()
        } catch (e) {}
        return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
    }
    , Ue = "oncopy"in (Re = A("div")) || (Re.setAttribute("oncopy", "return;"),
    "function" == typeof Re.oncopy), Ve = null;
    var Ke = {}
      , je = {};
    function Xe(e) {
        if ("string" == typeof e && je.hasOwnProperty(e))
            e = je[e];
        else if (e && "string" == typeof e.name && je.hasOwnProperty(e.name)) {
            var t = je[e.name];
            "string" == typeof t && (t = {
                name: t
            }),
            (e = Q(t, e)).name = t.name
        } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return Xe("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return Xe("application/json")
        }
        return "string" == typeof e ? {
            name: e
        } : e || {
            name: "null"
        }
    }
    function Ye(e, t) {
        t = Xe(t);
        var r = Ke[t.name];
        if (!r)
            return Ye(e, "text/plain");
        var n = r(e, t);
        if (_e.hasOwnProperty(t.name)) {
            var i = _e[t.name];
            for (var o in i)
                i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]),
                n[o] = i[o])
        }
        if (n.name = t.name,
        t.helperType && (n.helperType = t.helperType),
        t.modeProps)
            for (var l in t.modeProps)
                n[l] = t.modeProps[l];
        return n
    }
    var _e = {};
    function $e(e, t) {
        I(t, _e.hasOwnProperty(e) ? _e[e] : _e[e] = {})
    }
    function qe(e, t) {
        if (!0 === t)
            return t;
        if (e.copyState)
            return e.copyState(t);
        var r = {};
        for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])),
            r[n] = i
        }
        return r
    }
    function Ze(e, t) {
        for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
            t = r.state,
            e = r.mode;
        return r || {
            mode: e,
            state: t
        }
    }
    function Qe(e, t, r) {
        return !e.startState || e.startState(t, r)
    }
    var Je = function(e, t, r) {
        this.pos = this.start = 0,
        this.string = e,
        this.tabSize = t || 8,
        this.lastColumnPos = this.lastColumnValue = 0,
        this.lineStart = 0,
        this.lineOracle = r
    };
    function et(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
            throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var r = e; !r.lines; )
            for (var n = 0; ; ++n) {
                var i = r.children[n]
                  , o = i.chunkSize();
                if (t < o) {
                    r = i;
                    break
                }
                t -= o
            }
        return r.lines[t]
    }
    function tt(e, r, n) {
        var i = []
          , o = r.line;
        return e.iter(r.line, n.line + 1, function(e) {
            var t = e.text;
            o == n.line && (t = t.slice(0, n.ch)),
            o == r.line && (t = t.slice(r.ch)),
            i.push(t),
            ++o
        }),
        i
    }
    function rt(e, t, r) {
        var n = [];
        return e.iter(t, r, function(e) {
            n.push(e.text)
        }),
        n
    }
    function nt(e, t) {
        var r = t - e.height;
        if (r)
            for (var n = e; n; n = n.parent)
                n.height += r
    }
    function it(e) {
        if (null == e.parent)
            return null;
        for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; n = (t = n).parent)
            for (var i = 0; n.children[i] != t; ++i)
                r += n.children[i].chunkSize();
        return r + t.first
    }
    function ot(e, t) {
        var r = e.first;
        e: do {
            for (var n = 0; n < e.children.length; ++n) {
                var i = e.children[n]
                  , o = i.height;
                if (t < o) {
                    e = i;
                    continue e
                }
                t -= o,
                r += i.chunkSize()
            }
            return r
        } while (!e.lines);
        for (var l = 0; l < e.lines.length; ++l) {
            var s = e.lines[l].height;
            if (t < s)
                break;
            t -= s
        }
        return r + l
    }
    function lt(e, t) {
        return t >= e.first && t < e.first + e.size
    }
    function st(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function at(e, t, r) {
        if (void 0 === r && (r = null),
        !(this instanceof at))
            return new at(e,t,r);
        this.line = e,
        this.ch = t,
        this.sticky = r
    }
    function ut(e, t) {
        return e.line - t.line || e.ch - t.ch
    }
    function ct(e, t) {
        return e.sticky == t.sticky && 0 == ut(e, t)
    }
    function ht(e) {
        return at(e.line, e.ch)
    }
    function ft(e, t) {
        return ut(e, t) < 0 ? t : e
    }
    function dt(e, t) {
        return ut(e, t) < 0 ? e : t
    }
    function pt(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }
    function gt(e, t) {
        if (t.line < e.first)
            return at(e.first, 0);
        var r = e.first + e.size - 1;
        return t.line > r ? at(r, et(e, r).text.length) : function(e, t) {
            var r = e.ch;
            return null == r || t < r ? at(e.line, t) : r < 0 ? at(e.line, 0) : e
        }(t, et(e, t.line).text.length)
    }
    function vt(e, t) {
        for (var r = [], n = 0; n < t.length; n++)
            r[n] = gt(e, t[n]);
        return r
    }
    Je.prototype.eol = function() {
        return this.pos >= this.string.length
    }
    ,
    Je.prototype.sol = function() {
        return this.pos == this.lineStart
    }
    ,
    Je.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0
    }
    ,
    Je.prototype.next = function() {
        if (this.pos < this.string.length)
            return this.string.charAt(this.pos++)
    }
    ,
    Je.prototype.eat = function(e) {
        var t = this.string.charAt(this.pos);
        if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos,
            t
    }
    ,
    Je.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
            ;
        return this.pos > t
    }
    ,
    Je.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
            ++this.pos;
        return this.pos > e
    }
    ,
    Je.prototype.skipToEnd = function() {
        this.pos = this.string.length
    }
    ,
    Je.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        if (-1 < t)
            return this.pos = t,
            !0
    }
    ,
    Je.prototype.backUp = function(e) {
        this.pos -= e
    }
    ,
    Je.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = z(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
        this.lastColumnPos = this.start),
        this.lastColumnValue - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
    }
    ,
    Je.prototype.indentation = function() {
        return z(this.string, null, this.tabSize) - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
    }
    ,
    Je.prototype.match = function(e, t, r) {
        if ("string" != typeof e) {
            var n = this.string.slice(this.pos).match(e);
            return n && 0 < n.index ? null : (n && !1 !== t && (this.pos += n[0].length),
            n)
        }
        function i(e) {
            return r ? e.toLowerCase() : e
        }
        if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length),
            !0
    }
    ,
    Je.prototype.current = function() {
        return this.string.slice(this.start, this.pos)
    }
    ,
    Je.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
            return t()
        } finally {
            this.lineStart -= e
        }
    }
    ,
    Je.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e)
    }
    ,
    Je.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos)
    }
    ;
    var mt = function(e, t) {
        this.state = e,
        this.lookAhead = t
    }
      , yt = function(e, t, r, n) {
        this.state = t,
        this.doc = e,
        this.line = r,
        this.maxLookAhead = n || 0,
        this.baseTokens = null,
        this.baseTokenPos = 1
    };
    function bt(t, r, n, e) {
        var a = [t.state.modeGen]
          , i = {};
        Nt(t, r.text, t.doc.mode, n, function(e, t) {
            return a.push(e, t)
        }, i, e);
        for (var u = n.state, o = function(e) {
            n.baseTokens = a;
            var o = t.state.overlays[e]
              , l = 1
              , s = 0;
            n.state = !0,
            Nt(t, r.text, o.mode, n, function(e, t) {
                for (var r = l; s < e; ) {
                    var n = a[l];
                    e < n && a.splice(l, 1, e, a[l + 1], n),
                    l += 2,
                    s = Math.min(e, n)
                }
                if (t)
                    if (o.opaque)
                        a.splice(r, l - r, e, "overlay " + t),
                        l = r + 2;
                    else
                        for (; r < l; r += 2) {
                            var i = a[r + 1];
                            a[r + 1] = (i ? i + " " : "") + "overlay " + t
                        }
            }, i),
            n.state = u,
            n.baseTokens = null,
            n.baseTokenPos = 1
        }, l = 0; l < t.state.overlays.length; ++l)
            o(l);
        return {
            styles: a,
            classes: i.bgClass || i.textClass ? i : null
        }
    }
    function wt(e, t, r) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = xt(e, it(t))
              , i = t.text.length > e.options.maxHighlightLength && qe(e.doc.mode, n.state)
              , o = bt(e, t, n);
            i && (n.state = i),
            t.stateAfter = n.save(!i),
            t.styles = o.styles,
            o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null),
            r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
        }
        return t.styles
    }
    function xt(r, n, e) {
        var t = r.doc
          , i = r.display;
        if (!t.mode.startState)
            return new yt(t,!0,n);
        var o = function(e, t, r) {
            for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; l < s; --s) {
                if (s <= o.first)
                    return o.first;
                var a = et(o, s - 1)
                  , u = a.stateAfter;
                if (u && (!r || s + (u instanceof mt ? u.lookAhead : 0) <= o.modeFrontier))
                    return s;
                var c = z(a.text, null, e.options.tabSize);
                (null == i || c < n) && (i = s - 1,
                n = c)
            }
            return i
        }(r, n, e)
          , l = o > t.first && et(t, o - 1).stateAfter
          , s = l ? yt.fromSaved(t, l, o) : new yt(t,Qe(t.mode),o);
        return t.iter(o, n, function(e) {
            Ct(r, e.text, s);
            var t = s.line;
            e.stateAfter = t == n - 1 || t % 5 == 0 || t >= i.viewFrom && t < i.viewTo ? s.save() : null,
            s.nextLine()
        }),
        e && (t.modeFrontier = s.line),
        s
    }
    function Ct(e, t, r, n) {
        var i = e.doc.mode
          , o = new Je(t,e.options.tabSize,r);
        for (o.start = o.pos = n || 0,
        "" == t && St(i, r.state); !o.eol(); )
            Lt(i, o, r.state),
            o.start = o.pos
    }
    function St(e, t) {
        if (e.blankLine)
            return e.blankLine(t);
        if (e.innerMode) {
            var r = Ze(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
        }
    }
    function Lt(e, t, r, n) {
        for (var i = 0; i < 10; i++) {
            n && (n[0] = Ze(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start)
                return o
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
    }
    yt.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
        t
    }
    ,
    yt.prototype.baseToken = function(e) {
        if (!this.baseTokens)
            return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e
        }
    }
    ,
    yt.prototype.nextLine = function() {
        this.line++,
        0 < this.maxLookAhead && this.maxLookAhead--
    }
    ,
    yt.fromSaved = function(e, t, r) {
        return t instanceof mt ? new yt(e,qe(e.mode, t.state),r,t.lookAhead) : new yt(e,qe(e.mode, t),r)
    }
    ,
    yt.prototype.save = function(e) {
        var t = !1 !== e ? qe(this.doc.mode, this.state) : this.state;
        return 0 < this.maxLookAhead ? new mt(t,this.maxLookAhead) : t
    }
    ;
    var kt = function(e, t, r) {
        this.start = e.start,
        this.end = e.pos,
        this.string = e.current(),
        this.type = t || null,
        this.state = r
    };
    function Tt(e, t, r, n) {
        var i, o, l = e.doc, s = l.mode, a = et(l, (t = gt(l, t)).line), u = xt(e, t.line, r), c = new Je(a.text,e.options.tabSize,u);
        for (n && (o = []); (n || c.pos < t.ch) && !c.eol(); )
            c.start = c.pos,
            i = Lt(s, c, u.state),
            n && o.push(new kt(c,i,qe(l.mode, u.state)));
        return n ? o : new kt(c,i,u.state)
    }
    function Mt(e, t) {
        if (e)
            for (; ; ) {
                var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!r)
                    break;
                e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                var n = r[1] ? "bgClass" : "textClass";
                null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2])
            }
        return e
    }
    function Nt(e, t, r, n, i, o, l) {
        var s = r.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var a, u = 0, c = null, h = new Je(t,e.options.tabSize,n), f = e.options.addModeClass && [null];
        for ("" == t && Mt(St(r, n.state), o); !h.eol(); ) {
            if (a = h.pos > e.options.maxHighlightLength ? (s = !1,
            l && Ct(e, t, n, h.pos),
            h.pos = t.length,
            null) : Mt(Lt(r, h, n.state, f), o),
            f) {
                var d = f[0].name;
                d && (a = "m-" + (a ? d + " " + a : d))
            }
            if (!s || c != a) {
                for (; u < h.start; )
                    i(u = Math.min(h.start, u + 5e3), c);
                c = a
            }
            h.start = h.pos
        }
        for (; u < h.pos; ) {
            var p = Math.min(h.pos, u + 5e3);
            i(p, c),
            u = p
        }
    }
    var Ot = !1
      , At = !1;
    function Dt(e, t, r) {
        this.marker = e,
        this.from = t,
        this.to = r
    }
    function Wt(e, t) {
        if (e)
            for (var r = 0; r < e.length; ++r) {
                var n = e[r];
                if (n.marker == t)
                    return n
            }
    }
    function Ht(e, t) {
        for (var r, n = 0; n < e.length; ++n)
            e[n] != t && (r = r || []).push(e[n]);
        return r
    }
    function Ft(e, t) {
        if (t.full)
            return null;
        var r = lt(e, t.from.line) && et(e, t.from.line).markedSpans
          , n = lt(e, t.to.line) && et(e, t.to.line).markedSpans;
        if (!r && !n)
            return null;
        var i = t.from.ch
          , o = t.to.ch
          , l = 0 == ut(t.from, t.to)
          , s = function(e, t, r) {
            var n;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i]
                      , l = o.marker;
                    if (null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
                        var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                        (n = n || []).push(new Dt(l,o.from,s ? null : o.to))
                    }
                }
            return n
        }(r, i, l)
          , a = function(e, t, r) {
            var n;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i]
                      , l = o.marker;
                    if (null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
                        var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                        (n = n || []).push(new Dt(l,s ? null : o.from - t,null == o.to ? null : o.to - t))
                    }
                }
            return n
        }(n, o, l)
          , u = 1 == t.text.length
          , c = $(t.text).length + (u ? i : 0);
        if (s)
            for (var h = 0; h < s.length; ++h) {
                var f = s[h];
                if (null == f.to) {
                    var d = Wt(a, f.marker);
                    d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
                }
            }
        if (a)
            for (var p = 0; p < a.length; ++p) {
                var g = a[p];
                if (null != g.to && (g.to += c),
                null == g.from)
                    Wt(s, g.marker) || (g.from = c,
                    u && (s = s || []).push(g));
                else
                    g.from += c,
                    u && (s = s || []).push(g)
            }
        s = s && Pt(s),
        a && a != s && (a = Pt(a));
        var v = [s];
        if (!u) {
            var m, y = t.text.length - 2;
            if (0 < y && s)
                for (var b = 0; b < s.length; ++b)
                    null == s[b].to && (m = m || []).push(new Dt(s[b].marker,null,null));
            for (var w = 0; w < y; ++w)
                v.push(m);
            v.push(a)
        }
        return v
    }
    function Pt(e) {
        for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
        }
        return e.length ? e : null
    }
    function Et(e) {
        var t = e.markedSpans;
        if (t) {
            for (var r = 0; r < t.length; ++r)
                t[r].marker.detachLine(e);
            e.markedSpans = null
        }
    }
    function It(e, t) {
        if (t) {
            for (var r = 0; r < t.length; ++r)
                t[r].marker.attachLine(e);
            e.markedSpans = t
        }
    }
    function zt(e) {
        return e.inclusiveLeft ? -1 : 0
    }
    function Rt(e) {
        return e.inclusiveRight ? 1 : 0
    }
    function Bt(e, t) {
        var r = e.lines.length - t.lines.length;
        if (0 != r)
            return r;
        var n = e.find()
          , i = t.find()
          , o = ut(n.from, i.from) || zt(e) - zt(t);
        if (o)
            return -o;
        var l = ut(n.to, i.to) || Rt(e) - Rt(t);
        return l || t.id - e.id
    }
    function Gt(e, t) {
        var r, n = At && e.markedSpans;
        if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
                (i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Bt(r, i.marker) < 0) && (r = i.marker);
        return r
    }
    function Ut(e) {
        return Gt(e, !0)
    }
    function Vt(e) {
        return Gt(e, !1)
    }
    function Kt(e, t) {
        var r, n = At && e.markedSpans;
        if (n)
            for (var i = 0; i < n.length; ++i) {
                var o = n[i];
                o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Bt(r, o.marker) < 0) && (r = o.marker)
            }
        return r
    }
    function jt(e, t, r, n, i) {
        var o = et(e, t)
          , l = At && o.markedSpans;
        if (l)
            for (var s = 0; s < l.length; ++s) {
                var a = l[s];
                if (a.marker.collapsed) {
                    var u = a.marker.find(0)
                      , c = ut(u.from, r) || zt(a.marker) - zt(i)
                      , h = ut(u.to, n) || Rt(a.marker) - Rt(i);
                    if (!(0 <= c && h <= 0 || c <= 0 && 0 <= h) && (c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? 0 <= ut(u.to, r) : 0 < ut(u.to, r)) || 0 <= c && (a.marker.inclusiveRight && i.inclusiveLeft ? ut(u.from, n) <= 0 : ut(u.from, n) < 0)))
                        return !0
                }
            }
    }
    function Xt(e) {
        for (var t; t = Ut(e); )
            e = t.find(-1, !0).line;
        return e
    }
    function Yt(e, t) {
        var r = et(e, t)
          , n = Xt(r);
        return r == n ? t : it(n)
    }
    function _t(e, t) {
        if (t > e.lastLine())
            return t;
        var r, n = et(e, t);
        if (!$t(e, n))
            return t;
        for (; r = Vt(n); )
            n = r.find(1, !0).line;
        return it(n) + 1
    }
    function $t(e, t) {
        var r = At && t.markedSpans;
        if (r)
            for (var n = void 0, i = 0; i < r.length; ++i)
                if ((n = r[i]).marker.collapsed) {
                    if (null == n.from)
                        return !0;
                    if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && qt(e, t, n))
                        return !0
                }
    }
    function qt(e, t, r) {
        if (null == r.to) {
            var n = r.marker.find(1, !0);
            return qt(e, n.line, Wt(n.line.markedSpans, r.marker))
        }
        if (r.marker.inclusiveRight && r.to == t.text.length)
            return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && qt(e, t, i))
                return !0
    }
    function Zt(e) {
        for (var t = 0, r = (e = Xt(e)).parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e)
                break;
            t += i.height
        }
        for (var o = r.parent; o; o = (r = o).parent)
            for (var l = 0; l < o.children.length; ++l) {
                var s = o.children[l];
                if (s == r)
                    break;
                t += s.height
            }
        return t
    }
    function Qt(e) {
        if (0 == e.height)
            return 0;
        for (var t, r = e.text.length, n = e; t = Ut(n); ) {
            var i = t.find(0, !0);
            n = i.from.line,
            r += i.from.ch - i.to.ch
        }
        for (n = e; t = Vt(n); ) {
            var o = t.find(0, !0);
            r -= n.text.length - o.from.ch,
            r += (n = o.to.line).text.length - o.to.ch
        }
        return r
    }
    function Jt(e) {
        var r = e.display
          , t = e.doc;
        r.maxLine = et(t, t.first),
        r.maxLineLength = Qt(r.maxLine),
        r.maxLineChanged = !0,
        t.iter(function(e) {
            var t = Qt(e);
            t > r.maxLineLength && (r.maxLineLength = t,
            r.maxLine = e)
        })
    }
    var er = function(e, t, r) {
        this.text = e,
        It(this, t),
        this.height = r ? r(this) : 1
    };
    er.prototype.lineNo = function() {
        return it(this)
    }
    ,
    Me(er);
    var tr = {}
      , rr = {};
    function nr(e, t) {
        if (!e || /^\s*$/.test(e))
            return null;
        var r = t.addModeClass ? rr : tr;
        return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
    }
    function ir(e, t) {
        var r = O("span", null, null, b ? "padding-right: .1px" : null)
          , n = {
            pre: O("pre", [r], "CodeMirror-line"),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line
              , l = void 0;
            n.pos = 0,
            n.addToken = lr,
            ze(e.display.measure) && (l = ye(o, e.doc.direction)) && (n.addToken = sr(n.addToken, l)),
            n.map = [],
            ur(o, n, wt(e, o, t != e.display.externalMeasured && it(o))),
            o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = F(o.styleClasses.bgClass, n.bgClass || "")),
            o.styleClasses.textClass && (n.textClass = F(o.styleClasses.textClass, n.textClass || ""))),
            0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Ie(e.display.measure))),
            0 == i ? (t.measure.map = n.map,
            t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
            (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        if (b) {
            var s = n.content.lastChild;
            (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
        }
        return Se(e, "renderLine", e, t.line, n.pre),
        n.pre.className && (n.textClass = F(n.pre.className, n.textClass || "")),
        n
    }
    function or(e) {
        var t = A("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16),
        t.setAttribute("aria-label", t.title),
        t
    }
    function lr(e, t, r, n, i, o, l) {
        if (t) {
            var s, a = e.splitSpaces ? function(e, t) {
                if (1 < e.length && !/  /.test(e))
                    return e;
                for (var r = t, n = "", i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
                    n += o,
                    r = " " == o
                }
                return n
            }(t, e.trailingSpace) : t, u = e.cm.state.specialChars, c = !1;
            if (u.test(t)) {
                s = document.createDocumentFragment();
                for (var h = 0; ; ) {
                    u.lastIndex = h;
                    var f = u.exec(t)
                      , d = f ? f.index - h : t.length - h;
                    if (d) {
                        var p = document.createTextNode(a.slice(h, h + d));
                        x && C < 9 ? s.appendChild(A("span", [p])) : s.appendChild(p),
                        e.map.push(e.pos, e.pos + d, p),
                        e.col += d,
                        e.pos += d
                    }
                    if (!f)
                        break;
                    h += 1 + d;
                    var g = void 0;
                    if ("\t" == f[0]) {
                        var v = e.cm.options.tabSize
                          , m = v - e.col % v;
                        (g = s.appendChild(A("span", _(m), "cm-tab"))).setAttribute("role", "presentation"),
                        g.setAttribute("cm-text", "\t"),
                        e.col += m
                    } else
                        "\r" == f[0] || "\n" == f[0] ? (g = s.appendChild(A("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", f[0]) : ((g = e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text", f[0]),
                        x && C < 9 ? s.appendChild(A("span", [g])) : s.appendChild(g)),
                        e.col += 1;
                    e.map.push(e.pos, e.pos + 1, g),
                    e.pos++
                }
            } else
                e.col += t.length,
                s = document.createTextNode(a),
                e.map.push(e.pos, e.pos + t.length, s),
                x && C < 9 && (c = !0),
                e.pos += t.length;
            if (e.trailingSpace = 32 == a.charCodeAt(t.length - 1),
            r || n || i || c || o) {
                var y = r || "";
                n && (y += n),
                i && (y += i);
                var b = A("span", [s], y, o);
                if (l)
                    for (var w in l)
                        l.hasOwnProperty(w) && "style" != w && "class" != w && b.setAttribute(w, l[w]);
                return e.content.appendChild(b)
            }
            e.content.appendChild(s)
        }
    }
    function sr(h, f) {
        return function(e, t, r, n, i, o, l) {
            r = r ? r + " cm-force-border" : "cm-force-border";
            for (var s = e.pos, a = s + t.length; ; ) {
                for (var u = void 0, c = 0; c < f.length && !((u = f[c]).to > s && u.from <= s); c++)
                    ;
                if (u.to >= a)
                    return h(e, t, r, n, i, o, l);
                h(e, t.slice(0, u.to - s), r, n, null, o, l),
                n = null,
                t = t.slice(u.to - s),
                s = u.to
            }
        }
    }
    function ar(e, t, r, n) {
        var i = !n && r.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
        !n && e.cm.display.input.needsContentAttribute && (i = i || e.content.appendChild(document.createElement("span"))).setAttribute("cm-marker", r.id),
        i && (e.cm.display.input.setUneditable(i),
        e.content.appendChild(i)),
        e.pos += t,
        e.trailingSpace = !1
    }
    function ur(e, t, r) {
        var n = e.markedSpans
          , i = e.text
          , o = 0;
        if (n)
            for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
                if (m == p) {
                    a = u = c = s = "",
                    h = f = null,
                    m = 1 / 0;
                    for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                        var x = n[w]
                          , C = x.marker;
                        if ("bookmark" == C.type && x.from == p && C.widgetNode)
                            y.push(C);
                        else if (x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p)) {
                            if (null != x.to && x.to != p && m > x.to && (m = x.to,
                            u = ""),
                            C.className && (a += " " + C.className),
                            C.css && (s = (s ? s + ";" : "") + C.css),
                            C.startStyle && x.from == p && (c += " " + C.startStyle),
                            C.endStyle && x.to == m && (b = b || []).push(C.endStyle, x.to),
                            C.title && ((f = f || {}).title = C.title),
                            C.attributes)
                                for (var S in C.attributes)
                                    (f = f || {})[S] = C.attributes[S];
                            C.collapsed && (!h || Bt(h.marker, C) < 0) && (h = x)
                        } else
                            x.from > p && m > x.from && (m = x.from)
                    }
                    if (b)
                        for (var L = 0; L < b.length; L += 2)
                            b[L + 1] == m && (u += " " + b[L]);
                    if (!h || h.from == p)
                        for (var k = 0; k < y.length; ++k)
                            ar(t, 0, y[k]);
                    if (h && (h.from || 0) == p) {
                        if (ar(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from),
                        null == h.to)
                            return;
                        h.to == p && (h = !1)
                    }
                }
                if (d <= p)
                    break;
                for (var T = Math.min(d, m); ; ) {
                    if (v) {
                        var M = p + v.length;
                        if (!h) {
                            var N = T < M ? v.slice(0, T - p) : v;
                            t.addToken(t, N, l ? l + a : a, c, p + N.length == m ? u : "", s, f)
                        }
                        if (T <= M) {
                            v = v.slice(T - p),
                            p = T;
                            break
                        }
                        p = M,
                        c = ""
                    }
                    v = i.slice(o, o = r[g++]),
                    l = nr(r[g++], t.cm.options)
                }
            }
        else
            for (var O = 1; O < r.length; O += 2)
                t.addToken(t, i.slice(o, o = r[O]), nr(r[O + 1], t.cm.options))
    }
    function cr(e, t, r) {
        this.line = t,
        this.rest = function(e) {
            for (var t, r; t = Vt(e); )
                e = t.find(1, !0).line,
                (r = r || []).push(e);
            return r
        }(t),
        this.size = this.rest ? it($(this.rest)) - r + 1 : 1,
        this.node = this.text = null,
        this.hidden = $t(e, t)
    }
    function hr(e, t, r) {
        for (var n, i = [], o = t; o < r; o = n) {
            var l = new cr(e.doc,et(e.doc, o),o);
            n = o + l.size,
            i.push(l)
        }
        return i
    }
    var fr = null;
    var dr = null;
    function pr(e, t) {
        var r = xe(e, t);
        if (r.length) {
            var n, i = Array.prototype.slice.call(arguments, 2);
            fr ? n = fr.delayedCallbacks : dr ? n = dr : (n = dr = [],
            setTimeout(gr, 0));
            for (var o = function(e) {
                n.push(function() {
                    return r[e].apply(null, i)
                })
            }, l = 0; l < r.length; ++l)
                o(l)
        }
    }
    function gr() {
        var e = dr;
        dr = null;
        for (var t = 0; t < e.length; ++t)
            e[t]()
    }
    function vr(e, t, r, n) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? br(e, t) : "gutter" == o ? xr(e, t, r, n) : "class" == o ? wr(e, t) : "widget" == o && Cr(e, t, n)
        }
        t.changes = null
    }
    function mr(e) {
        return e.node == e.text && (e.node = A("div", null, null, "position: relative"),
        e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
        e.node.appendChild(e.text),
        x && C < 8 && (e.node.style.zIndex = 2)),
        e.node
    }
    function yr(e, t) {
        var r = e.display.externalMeasured;
        return r && r.line == t.line ? (e.display.externalMeasured = null,
        t.measure = r.measure,
        r.built) : ir(e, t)
    }
    function br(e, t) {
        var r = t.text.className
          , n = yr(e, t);
        t.text == t.node && (t.node = n.pre),
        t.text.parentNode.replaceChild(n.pre, t.text),
        t.text = n.pre,
        n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass,
        t.textClass = n.textClass,
        wr(e, t)) : r && (t.text.className = r)
    }
    function wr(e, t) {
        !function(e, t) {
            var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (r && (r += " CodeMirror-linebackground"),
            t.background)
                r ? t.background.className = r : (t.background.parentNode.removeChild(t.background),
                t.background = null);
            else if (r) {
                var n = mr(t);
                t.background = n.insertBefore(A("div", null, r), n.firstChild),
                e.display.input.setUneditable(t.background)
            }
        }(e, t),
        t.line.wrapClass ? mr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = r || ""
    }
    function xr(e, t, r, n) {
        if (t.gutter && (t.node.removeChild(t.gutter),
        t.gutter = null),
        t.gutterBackground && (t.node.removeChild(t.gutterBackground),
        t.gutterBackground = null),
        t.line.gutterClass) {
            var i = mr(t);
            t.gutterBackground = A("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"),
            e.display.input.setUneditable(t.gutterBackground),
            i.insertBefore(t.gutterBackground, t.text)
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
            var l = mr(t)
              , s = t.gutter = A("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
            if (e.display.input.setUneditable(s),
            l.insertBefore(s, t.text),
            t.line.gutterClass && (s.className += " " + t.line.gutterClass),
            !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(A("div", st(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))),
            o)
                for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
                    var u = e.display.gutterSpecs[a].className
                      , c = o.hasOwnProperty(u) && o[u];
                    c && s.appendChild(A("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px"))
                }
        }
    }
    function Cr(e, t, r) {
        t.alignable && (t.alignable = null);
        for (var n = t.node.firstChild, i = void 0; n; n = i)
            i = n.nextSibling,
            "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
        Sr(e, t, r)
    }
    function Sr(e, t, r) {
        if (Lr(e, t.line, t, r, !0),
        t.rest)
            for (var n = 0; n < t.rest.length; n++)
                Lr(e, t.rest[n], t, r, !1)
    }
    function Lr(e, t, r, n, i) {
        if (t.widgets)
            for (var o = mr(r), l = 0, s = t.widgets; l < s.length; ++l) {
                var a = s[l]
                  , u = A("div", [a.node], "CodeMirror-linewidget");
                a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
                kr(a, u, r, n),
                e.display.input.setUneditable(u),
                i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u),
                pr(a, "redraw")
            }
    }
    function kr(e, t, r, n) {
        if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            t.style.left = n.fixedPos + "px",
            e.coverGutter || (i -= n.gutterTotalWidth,
            t.style.paddingLeft = n.gutterTotalWidth + "px"),
            t.style.width = i + "px"
        }
        e.coverGutter && (t.style.zIndex = 5,
        t.style.position = "relative",
        e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
    }
    function Tr(e) {
        if (null != e.height)
            return e.height;
        var t = e.doc.cm;
        if (!t)
            return 0;
        if (!D(document.body, e.node)) {
            var r = "position: relative;";
            e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"),
            N(t.display.measure, A("div", [e.node], null, r))
        }
        return e.height = e.node.parentNode.offsetHeight
    }
    function Mr(e, t) {
        for (var r = We(t); r != e.wrapper; r = r.parentNode)
            if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover)
                return !0
    }
    function Nr(e) {
        return e.lineSpace.offsetTop
    }
    function Or(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }
    function Ar(e) {
        if (e.cachedPaddingH)
            return e.cachedPaddingH;
        var t = N(e.measure, A("pre", "x", "CodeMirror-line-like"))
          , r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
          , n = {
            left: parseInt(r.paddingLeft),
            right: parseInt(r.paddingRight)
        };
        return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n),
        n
    }
    function Dr(e) {
        return G - e.display.nativeBarWidth
    }
    function Wr(e) {
        return e.display.scroller.clientWidth - Dr(e) - e.display.barWidth
    }
    function Hr(e) {
        return e.display.scroller.clientHeight - Dr(e) - e.display.barHeight
    }
    function Fr(e, t, r) {
        if (e.line == t)
            return {
                map: e.measure.map,
                cache: e.measure.cache
            };
        for (var n = 0; n < e.rest.length; n++)
            if (e.rest[n] == t)
                return {
                    map: e.measure.maps[n],
                    cache: e.measure.caches[n]
                };
        for (var i = 0; i < e.rest.length; i++)
            if (it(e.rest[i]) > r)
                return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
    }
    function Pr(e, t, r, n) {
        return zr(e, Ir(e, t), r, n)
    }
    function Er(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[pn(e, t)];
        var r = e.display.externalMeasured;
        return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
    }
    function Ir(e, t) {
        var r = it(t)
          , n = Er(e, r);
        n && !n.text ? n = null : n && n.changes && (vr(e, n, r, un(e)),
        e.curOp.forceUpdate = !0);
        var i = Fr(n = n || function(e, t) {
            var r = it(t = Xt(t))
              , n = e.display.externalMeasured = new cr(e.doc,t,r);
            n.lineN = r;
            var i = n.built = ir(e, n);
            return n.text = i.pre,
            N(e.display.lineMeasure, i.pre),
            n
        }(e, t), t, r);
        return {
            line: t,
            view: n,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
        }
    }
    function zr(e, t, r, n, i) {
        t.before && (r = -1);
        var o, l = r + (n || "");
        return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
        t.hasHeights || (function(e, t, r) {
            var n = e.options.lineWrapping
              , i = n && Wr(e);
            if (!t.measure.heights || n && t.measure.width != i) {
                var o = t.measure.heights = [];
                if (n) {
                    t.measure.width = i;
                    for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
                        var a = l[s]
                          , u = l[s + 1];
                        2 < Math.abs(a.bottom - u.bottom) && o.push((a.bottom + u.top) / 2 - r.top)
                    }
                }
                o.push(r.bottom - r.top)
            }
        }(e, t.view, t.rect),
        t.hasHeights = !0),
        (o = function(e, t, r, n) {
            var i, o = Gr(t.map, r, n), l = o.node, s = o.start, a = o.end, u = o.collapse;
            if (3 == l.nodeType) {
                for (var c = 0; c < 4; c++) {
                    for (; s && ie(t.line.text.charAt(o.coverStart + s)); )
                        --s;
                    for (; o.coverStart + a < o.coverEnd && ie(t.line.text.charAt(o.coverStart + a)); )
                        ++a;
                    if ((i = x && C < 9 && 0 == s && a == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Ur(k(l, s, a).getClientRects(), n)).left || i.right || 0 == s)
                        break;
                    a = s,
                    s -= 1,
                    u = "right"
                }
                x && C < 11 && (i = function(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function(e) {
                        if (null != Ve)
                            return Ve;
                        var t = N(e, A("span", "x"))
                          , r = t.getBoundingClientRect()
                          , n = k(t, 0, 1).getBoundingClientRect();
                        return Ve = 1 < Math.abs(r.left - n.left)
                    }(e))
                        return t;
                    var r = screen.logicalXDPI / screen.deviceXDPI
                      , n = screen.logicalYDPI / screen.deviceYDPI;
                    return {
                        left: t.left * r,
                        right: t.right * r,
                        top: t.top * n,
                        bottom: t.bottom * n
                    }
                }(e.display.measure, i))
            } else {
                var h;
                0 < s && (u = n = "right"),
                i = e.options.lineWrapping && 1 < (h = l.getClientRects()).length ? h["right" == n ? h.length - 1 : 0] : l.getBoundingClientRect()
            }
            if (x && C < 9 && !s && (!i || !i.left && !i.right)) {
                var f = l.parentNode.getClientRects()[0];
                i = f ? {
                    left: f.left,
                    right: f.left + an(e.display),
                    top: f.top,
                    bottom: f.bottom
                } : Br
            }
            for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, g = (d + p) / 2, v = t.view.measure.heights, m = 0; m < v.length - 1 && !(g < v[m]); m++)
                ;
            var y = m ? v[m - 1] : 0
              , b = v[m]
              , w = {
                left: ("right" == u ? i.right : i.left) - t.rect.left,
                right: ("left" == u ? i.left : i.right) - t.rect.left,
                top: y,
                bottom: b
            };
            i.left || i.right || (w.bogus = !0);
            e.options.singleCursorHeightPerLine || (w.rtop = d,
            w.rbottom = p);
            return w
        }(e, t, r, n)).bogus || (t.cache[l] = o)),
        {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
        }
    }
    var Rr, Br = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    function Gr(e, t, r) {
        for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
            if (s = e[u],
            a = e[u + 1],
            t < s ? (i = 0,
            o = 1,
            l = "left") : t < a ? o = (i = t - s) + 1 : (u == e.length - 3 || t == a && e[u + 3] > t) && (i = (o = a - s) - 1,
            a <= t && (l = "right")),
            null != i) {
                if (n = e[u + 2],
                s == a && r == (n.insertLeft ? "left" : "right") && (l = r),
                "left" == r && 0 == i)
                    for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                        n = e[2 + (u -= 3)],
                        l = "left";
                if ("right" == r && i == a - s)
                    for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                        n = e[(u += 3) + 2],
                        l = "right";
                break
            }
        return {
            node: n,
            start: i,
            end: o,
            collapse: l,
            coverStart: s,
            coverEnd: a
        }
    }
    function Ur(e, t) {
        var r = Br;
        if ("left" == t)
            for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++)
                ;
        else
            for (var i = e.length - 1; 0 <= i && (r = e[i]).left == r.right; i--)
                ;
        return r
    }
    function Vr(e) {
        if (e.measure && (e.measure.cache = {},
        e.measure.heights = null,
        e.rest))
            for (var t = 0; t < e.rest.length; t++)
                e.measure.caches[t] = {}
    }
    function Kr(e) {
        e.display.externalMeasure = null,
        M(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
            Vr(e.display.view[t])
    }
    function jr(e) {
        Kr(e),
        e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
        e.options.lineWrapping || (e.display.maxLineChanged = !0),
        e.display.lineNumChars = null
    }
    function Xr() {
        return l && h ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function Yr() {
        return l && h ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function _r(e) {
        var t = 0;
        if (e.widgets)
            for (var r = 0; r < e.widgets.length; ++r)
                e.widgets[r].above && (t += Tr(e.widgets[r]));
        return t
    }
    function $r(e, t, r, n, i) {
        if (!i) {
            var o = _r(t);
            r.top += o,
            r.bottom += o
        }
        if ("line" == n)
            return r;
        n = n || "local";
        var l = Zt(t);
        if ("local" == n ? l += Nr(e.display) : l -= e.display.viewOffset,
        "page" == n || "window" == n) {
            var s = e.display.lineSpace.getBoundingClientRect();
            l += s.top + ("window" == n ? 0 : Yr());
            var a = s.left + ("window" == n ? 0 : Xr());
            r.left += a,
            r.right += a
        }
        return r.top += l,
        r.bottom += l,
        r
    }
    function qr(e, t, r) {
        if ("div" == r)
            return t;
        var n = t.left
          , i = t.top;
        if ("page" == r)
            n -= Xr(),
            i -= Yr();
        else if ("local" == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            n += o.left,
            i += o.top
        }
        var l = e.display.lineSpace.getBoundingClientRect();
        return {
            left: n - l.left,
            top: i - l.top
        }
    }
    function Zr(e, t, r, n, i) {
        return $r(e, n = n || et(e.doc, t.line), Pr(e, n, t.ch, i), r)
    }
    function Qr(n, e, i, o, l, s) {
        function a(e, t) {
            var r = zr(n, l, e, t ? "right" : "left", s);
            return t ? r.left = r.right : r.right = r.left,
            $r(n, o, r, i)
        }
        o = o || et(n.doc, e.line),
        l = l || Ir(n, o);
        var u = ye(o, n.doc.direction)
          , t = e.ch
          , r = e.sticky;
        if (t >= o.text.length ? (t = o.text.length,
        r = "before") : t <= 0 && (t = 0,
        r = "after"),
        !u)
            return a("before" == r ? t - 1 : t, "before" == r);
        function c(e, t, r) {
            return a(r ? e - 1 : e, 1 == u[t].level != r)
        }
        var h = ae(u, t, r)
          , f = se
          , d = c(t, h, "before" == r);
        return null != f && (d.other = c(t, f, "before" != r)),
        d
    }
    function Jr(e, t) {
        var r = 0;
        t = gt(e.doc, t),
        e.options.lineWrapping || (r = an(e.display) * t.ch);
        var n = et(e.doc, t.line)
          , i = Zt(n) + Nr(e.display);
        return {
            left: r,
            right: r,
            top: i,
            bottom: i + n.height
        }
    }
    function en(e, t, r, n, i) {
        var o = at(e, t, r);
        return o.xRel = i,
        n && (o.outside = n),
        o
    }
    function tn(e, t, r) {
        var n = e.doc;
        if ((r += e.display.viewOffset) < 0)
            return en(n.first, 0, null, -1, -1);
        var i = ot(n, r)
          , o = n.first + n.size - 1;
        if (o < i)
            return en(n.first + n.size - 1, et(n, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var l = et(n, i); ; ) {
            var s = ln(e, l, i, t, r)
              , a = Kt(l, s.ch + (0 < s.xRel || 0 < s.outside ? 1 : 0));
            if (!a)
                return s;
            var u = a.find(1);
            if (u.line == i)
                return u;
            l = et(n, i = u.line)
        }
    }
    function rn(t, e, r, n) {
        n -= _r(e);
        var i = e.text.length
          , o = le(function(e) {
            return zr(t, r, e - 1).bottom <= n
        }, i, 0);
        return {
            begin: o,
            end: i = le(function(e) {
                return zr(t, r, e).top > n
            }, o, i)
        }
    }
    function nn(e, t, r, n) {
        return rn(e, t, r = r || Ir(e, t), $r(e, t, zr(e, r, n), "line").top)
    }
    function on(e, t, r, n) {
        return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
    }
    function ln(r, e, t, n, i) {
        i -= Zt(e);
        var o = Ir(r, e)
          , l = _r(e)
          , s = 0
          , a = e.text.length
          , u = !0
          , c = ye(e, r.doc.direction);
        if (c) {
            var h = (r.options.lineWrapping ? function(e, t, r, n, i, o, l) {
                var s = rn(e, t, n, l)
                  , a = s.begin
                  , u = s.end;
                /\s/.test(t.text.charAt(u - 1)) && u--;
                for (var c = null, h = null, f = 0; f < i.length; f++) {
                    var d = i[f];
                    if (!(d.from >= u || d.to <= a)) {
                        var p = 1 != d.level
                          , g = zr(e, n, p ? Math.min(u, d.to) - 1 : Math.max(a, d.from)).right
                          , v = g < o ? o - g + 1e9 : g - o;
                        (!c || v < h) && (c = d,
                        h = v)
                    }
                }
                c = c || i[i.length - 1];
                c.from < a && (c = {
                    from: a,
                    to: c.to,
                    level: c.level
                });
                c.to > u && (c = {
                    from: c.from,
                    to: u,
                    level: c.level
                });
                return c
            }
            : function(n, i, o, l, s, a, u) {
                var e = le(function(e) {
                    var t = s[e]
                      , r = 1 != t.level;
                    return on(Qr(n, at(o, r ? t.to : t.from, r ? "before" : "after"), "line", i, l), a, u, !0)
                }, 0, s.length - 1)
                  , t = s[e];
                if (0 < e) {
                    var r = 1 != t.level
                      , c = Qr(n, at(o, r ? t.from : t.to, r ? "after" : "before"), "line", i, l);
                    on(c, a, u, !0) && c.top > u && (t = s[e - 1])
                }
                return t
            }
            )(r, e, t, o, c, n, i);
            s = (u = 1 != h.level) ? h.from : h.to - 1,
            a = u ? h.to : h.from - 1
        }
        var f, d, p = null, g = null, v = le(function(e) {
            var t = zr(r, o, e);
            return t.top += l,
            t.bottom += l,
            !!on(t, n, i, !1) && (t.top <= i && t.left <= n && (p = e,
            g = t),
            !0)
        }, s, a), m = !1;
        if (g) {
            var y = n - g.left < g.right - n
              , b = y == u;
            v = p + (b ? 0 : 1),
            d = b ? "after" : "before",
            f = y ? g.left : g.right
        } else {
            u || v != a && v != s || v++,
            d = 0 == v ? "after" : v == e.text.length ? "before" : zr(r, o, v - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before";
            var w = Qr(r, at(t, v, d), "line", e, o);
            f = w.left,
            m = i < w.top ? -1 : i >= w.bottom ? 1 : 0
        }
        return en(t, v = oe(e.text, v, 1), d, m, n - f)
    }
    function sn(e) {
        if (null != e.cachedTextHeight)
            return e.cachedTextHeight;
        if (null == Rr) {
            Rr = A("pre", null, "CodeMirror-line-like");
            for (var t = 0; t < 49; ++t)
                Rr.appendChild(document.createTextNode("x")),
                Rr.appendChild(A("br"));
            Rr.appendChild(document.createTextNode("x"))
        }
        N(e.measure, Rr);
        var r = Rr.offsetHeight / 50;
        return 3 < r && (e.cachedTextHeight = r),
        M(e.measure),
        r || 1
    }
    function an(e) {
        if (null != e.cachedCharWidth)
            return e.cachedCharWidth;
        var t = A("span", "xxxxxxxxxx")
          , r = A("pre", [t], "CodeMirror-line-like");
        N(e.measure, r);
        var n = t.getBoundingClientRect()
          , i = (n.right - n.left) / 10;
        return 2 < i && (e.cachedCharWidth = i),
        i || 10
    }
    function un(e) {
        for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling,
        ++l) {
            var s = e.display.gutterSpecs[l].className;
            r[s] = o.offsetLeft + o.clientLeft + i,
            n[s] = o.clientWidth
        }
        return {
            fixedPos: cn(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth
        }
    }
    function cn(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }
    function hn(n) {
        var i = sn(n.display)
          , o = n.options.lineWrapping
          , l = o && Math.max(5, n.display.scroller.clientWidth / an(n.display) - 3);
        return function(e) {
            if ($t(n.doc, e))
                return 0;
            var t = 0;
            if (e.widgets)
                for (var r = 0; r < e.widgets.length; r++)
                    e.widgets[r].height && (t += e.widgets[r].height);
            return o ? t + (Math.ceil(e.text.length / l) || 1) * i : t + i
        }
    }
    function fn(e) {
        var t = e.doc
          , r = hn(e);
        t.iter(function(e) {
            var t = r(e);
            t != e.height && nt(e, t)
        })
    }
    function dn(e, t, r, n) {
        var i = e.display;
        if (!r && "true" == We(t).getAttribute("cm-not-content"))
            return null;
        var o, l, s = i.lineSpace.getBoundingClientRect();
        try {
            o = t.clientX - s.left,
            l = t.clientY - s.top
        } catch (t) {
            return null
        }
        var a, u = tn(e, o, l);
        if (n && 1 == u.xRel && (a = et(e.doc, u.line).text).length == u.ch) {
            var c = z(a, a.length, e.options.tabSize) - a.length;
            u = at(u.line, Math.max(0, Math.round((o - Ar(e.display).left) / an(e.display)) - c))
        }
        return u
    }
    function pn(e, t) {
        if (t >= e.display.viewTo)
            return null;
        if ((t -= e.display.viewFrom) < 0)
            return null;
        for (var r = e.display.view, n = 0; n < r.length; n++)
            if ((t -= r[n].size) < 0)
                return n
    }
    function gn(e, t, r, n) {
        null == t && (t = e.doc.first),
        null == r && (r = e.doc.first + e.doc.size),
        n = n || 0;
        var i = e.display;
        if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
        e.curOp.viewChanged = !0,
        t >= i.viewTo)
            At && Yt(e.doc, t) < i.viewTo && mn(e);
        else if (r <= i.viewFrom)
            At && _t(e.doc, r + n) > i.viewFrom ? mn(e) : (i.viewFrom += n,
            i.viewTo += n);
        else if (t <= i.viewFrom && r >= i.viewTo)
            mn(e);
        else if (t <= i.viewFrom) {
            var o = yn(e, r, r + n, 1);
            o ? (i.view = i.view.slice(o.index),
            i.viewFrom = o.lineN,
            i.viewTo += n) : mn(e)
        } else if (r >= i.viewTo) {
            var l = yn(e, t, t, -1);
            l ? (i.view = i.view.slice(0, l.index),
            i.viewTo = l.lineN) : mn(e)
        } else {
            var s = yn(e, t, t, -1)
              , a = yn(e, r, r + n, 1);
            s && a ? (i.view = i.view.slice(0, s.index).concat(hr(e, s.lineN, a.lineN)).concat(i.view.slice(a.index)),
            i.viewTo += n) : mn(e)
        }
        var u = i.externalMeasured;
        u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null))
    }
    function vn(e, t, r) {
        e.curOp.viewChanged = !0;
        var n = e.display
          , i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
        !(t < n.viewFrom || t >= n.viewTo)) {
            var o = n.view[pn(e, t)];
            if (null != o.node) {
                var l = o.changes || (o.changes = []);
                -1 == B(l, r) && l.push(r)
            }
        }
    }
    function mn(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first,
        e.display.view = [],
        e.display.viewOffset = 0
    }
    function yn(e, t, r, n) {
        var i, o = pn(e, t), l = e.display.view;
        if (!At || r == e.doc.first + e.doc.size)
            return {
                index: o,
                lineN: r
            };
        for (var s = e.display.viewFrom, a = 0; a < o; a++)
            s += l[a].size;
        if (s != t) {
            if (0 < n) {
                if (o == l.length - 1)
                    return null;
                i = s + l[o].size - t,
                o++
            } else
                i = s - t;
            t += i,
            r += i
        }
        for (; Yt(e.doc, r) != r; ) {
            if (o == (n < 0 ? 0 : l.length - 1))
                return null;
            r += n * l[o - (n < 0 ? 1 : 0)].size,
            o += n
        }
        return {
            index: o,
            lineN: r
        }
    }
    function bn(e) {
        for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || i.node && !i.changes || ++r
        }
        return r
    }
    function wn(e) {
        e.display.input.showSelection(e.display.input.prepareSelection())
    }
    function xn(e, t) {
        void 0 === t && (t = !0);
        for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++)
            if (t || l != r.sel.primIndex) {
                var s = r.sel.ranges[l];
                if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                    var a = s.empty();
                    (a || e.options.showCursorWhenSelecting) && Cn(e, s.head, i),
                    a || Ln(e, s, o)
                }
            }
        return n
    }
    function Cn(e, t, r) {
        var n = Qr(e, t, "div", null, null, !e.options.singleCursorHeightPerLine)
          , i = r.appendChild(A("div", " ", "CodeMirror-cursor"));
        if (i.style.left = n.left + "px",
        i.style.top = n.top + "px",
        i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px",
        n.other) {
            var o = r.appendChild(A("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            o.style.display = "",
            o.style.left = n.other.left + "px",
            o.style.top = n.other.top + "px",
            o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
        }
    }
    function Sn(e, t) {
        return e.top - t.top || e.left - t.left
    }
    function Ln(l, e, t) {
        var r = l.display
          , n = l.doc
          , i = document.createDocumentFragment()
          , o = Ar(l.display)
          , T = o.left
          , M = Math.max(r.sizerWidth, Wr(l) - r.sizer.offsetLeft) - o.right
          , N = "ltr" == n.direction;
        function O(e, t, r, n) {
            t < 0 && (t = 0),
            t = Math.round(t),
            n = Math.round(n),
            i.appendChild(A("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? M - e : r) + "px;\n                             height: " + (n - t) + "px"))
        }
        function s(r, y, b) {
            var w, x, o = et(n, r), C = o.text.length;
            function S(e, t) {
                return Zr(l, at(r, e), "div", o, t)
            }
            function L(e, t, r) {
                var n = nn(l, o, null, e)
                  , i = "ltr" == t == ("after" == r) ? "left" : "right";
                return S("after" == r ? n.begin : n.end - (/\s/.test(o.text.charAt(n.end - 1)) ? 2 : 1), i)[i]
            }
            var k = ye(o, n.direction);
            return function(e, t, r, n) {
                if (!e)
                    return n(t, r, "ltr", 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                    var l = e[o];
                    (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", o),
                    i = !0)
                }
                i || n(t, r, "ltr")
            }(k, y || 0, null == b ? C : b, function(e, t, r, n) {
                var i = "ltr" == r
                  , o = S(e, i ? "left" : "right")
                  , l = S(t - 1, i ? "right" : "left")
                  , s = null == y && 0 == e
                  , a = null == b && t == C
                  , u = 0 == n
                  , c = !k || n == k.length - 1;
                if (l.top - o.top <= 3) {
                    var h = (N ? a : s) && c
                      , f = (N ? s : a) && u ? T : (i ? o : l).left
                      , d = h ? M : (i ? l : o).right;
                    O(f, o.top, d - f, o.bottom)
                } else {
                    var p, g, v, m;
                    m = i ? (p = N && s && u ? T : o.left,
                    g = N ? M : L(e, r, "before"),
                    v = N ? T : L(t, r, "after"),
                    N && a && c ? M : l.right) : (p = N ? L(e, r, "before") : T,
                    g = !N && s && u ? M : o.right,
                    v = !N && a && c ? T : l.left,
                    N ? L(t, r, "after") : M),
                    O(p, o.top, g - p, o.bottom),
                    o.bottom < l.top && O(T, o.bottom, null, l.top),
                    O(v, l.top, m - v, l.bottom)
                }
                (!w || Sn(o, w) < 0) && (w = o),
                Sn(l, w) < 0 && (w = l),
                (!x || Sn(o, x) < 0) && (x = o),
                Sn(l, x) < 0 && (x = l)
            }),
            {
                start: w,
                end: x
            }
        }
        var a = e.from()
          , u = e.to();
        if (a.line == u.line)
            s(a.line, a.ch, u.ch);
        else {
            var c = et(n, a.line)
              , h = et(n, u.line)
              , f = Xt(c) == Xt(h)
              , d = s(a.line, a.ch, f ? c.text.length + 1 : null).end
              , p = s(u.line, f ? 0 : null, u.ch).start;
            f && (d.top < p.top - 2 ? (O(d.right, d.top, null, d.bottom),
            O(T, p.top, p.left, p.bottom)) : O(d.right, d.top, p.left - d.right, d.bottom)),
            d.bottom < p.top && O(T, d.bottom, null, p.top)
        }
        t.appendChild(i)
    }
    function kn(e) {
        if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            t.cursorDiv.style.visibility = "",
            0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function() {
                return t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
        }
    }
    function Tn(e) {
        e.state.focused || (e.display.input.focus(),
        Nn(e))
    }
    function Mn(e) {
        e.state.delayingBlurEvent = !0,
        setTimeout(function() {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1,
            On(e))
        }, 100)
    }
    function Nn(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
        "nocursor" != e.options.readOnly && (e.state.focused || (Se(e, "focus", e, t),
        e.state.focused = !0,
        H(e.display.wrapper, "CodeMirror-focused"),
        e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(),
        b && setTimeout(function() {
            return e.display.input.reset(!0)
        }, 20)),
        e.display.input.receivedFocus()),
        kn(e))
    }
    function On(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (Se(e, "blur", e, t),
        e.state.focused = !1,
        T(e.display.wrapper, "CodeMirror-focused")),
        clearInterval(e.display.blinker),
        setTimeout(function() {
            e.state.focused || (e.display.shift = !1)
        }, 150))
    }
    function An(e) {
        for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
            var i = t.view[n]
              , o = e.options.lineWrapping
              , l = void 0
              , s = 0;
            if (!i.hidden) {
                if (x && C < 8) {
                    var a = i.node.offsetTop + i.node.offsetHeight;
                    l = a - r,
                    r = a
                } else {
                    var u = i.node.getBoundingClientRect();
                    l = u.bottom - u.top,
                    !o && i.text.firstChild && (s = i.text.firstChild.getBoundingClientRect().right - u.left - 1)
                }
                var c = i.line.height - l;
                if ((.005 < c || c < -.005) && (nt(i.line, l),
                Dn(i.line),
                i.rest))
                    for (var h = 0; h < i.rest.length; h++)
                        Dn(i.rest[h]);
                if (s > e.display.sizerWidth) {
                    var f = Math.ceil(s / an(e.display));
                    f > e.display.maxLineLength && (e.display.maxLineLength = f,
                    e.display.maxLine = i.line,
                    e.display.maxLineChanged = !0)
                }
            }
        }
    }
    function Dn(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
                var r = e.widgets[t]
                  , n = r.node.parentNode;
                n && (r.height = n.offsetHeight)
            }
    }
    function Wn(e, t, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
        n = Math.floor(n - Nr(e));
        var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight
          , o = ot(t, n)
          , l = ot(t, i);
        if (r && r.ensure) {
            var s = r.ensure.from.line
              , a = r.ensure.to.line;
            s < o ? l = ot(t, Zt(et(t, o = s)) + e.wrapper.clientHeight) : Math.min(a, t.lastLine()) >= l && (o = ot(t, Zt(et(t, a)) - e.wrapper.clientHeight),
            l = a)
        }
        return {
            from: o,
            to: Math.max(l, o + 1)
        }
    }
    function Hn(e, t) {
        var r = e.display
          , n = sn(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop
          , o = Hr(e)
          , l = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + Or(r)
          , a = t.top < n
          , u = t.bottom > s - n;
        if (t.top < i)
            l.scrollTop = a ? 0 : t.top;
        else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? s : t.bottom) - o);
            c != i && (l.scrollTop = c)
        }
        var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft
          , f = Wr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0)
          , d = t.right - t.left > f;
        return d && (t.right = t.left + f),
        t.left < 10 ? l.scrollLeft = 0 : t.left < h ? l.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - f),
        l
    }
    function Fn(e, t) {
        null != t && (In(e),
        e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
    }
    function Pn(e) {
        In(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
        }
    }
    function En(e, t, r) {
        null == t && null == r || In(e),
        null != t && (e.curOp.scrollLeft = t),
        null != r && (e.curOp.scrollTop = r)
    }
    function In(e) {
        var t = e.curOp.scrollToPos;
        t && (e.curOp.scrollToPos = null,
        zn(e, Jr(e, t.from), Jr(e, t.to), t.margin))
    }
    function zn(e, t, r, n) {
        var i = Hn(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n
        });
        En(e, i.scrollLeft, i.scrollTop)
    }
    function Rn(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (g || hi(e, {
            top: t
        }),
        Bn(e, t, !0),
        g && hi(e),
        li(e, 100))
    }
    function Bn(e, t, r) {
        t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
        e.display.scroller.scrollTop == t && !r || (e.doc.scrollTop = t,
        e.display.scrollbars.setScrollTop(t),
        e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
    }
    function Gn(e, t, r, n) {
        t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
        (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t,
        pi(e),
        e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
        e.display.scrollbars.setScrollLeft(t))
    }
    function Un(e) {
        var t = e.display
          , r = t.gutters.offsetWidth
          , n = Math.round(e.doc.height + Or(e.display));
        return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Dr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r
        }
    }
    function Vn(e, t, r) {
        this.cm = r;
        var n = this.vert = A("div", [A("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
          , i = this.horiz = A("div", [A("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        n.tabIndex = i.tabIndex = -1,
        e(n),
        e(i),
        we(n, "scroll", function() {
            n.clientHeight && t(n.scrollTop, "vertical")
        }),
        we(i, "scroll", function() {
            i.clientWidth && t(i.scrollLeft, "horizontal")
        }),
        this.checkedZeroWidth = !1,
        x && C < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }
    Vn.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1
          , r = e.scrollHeight > e.clientHeight + 1
          , n = e.nativeBarWidth;
        if (r) {
            this.vert.style.display = "block",
            this.vert.style.bottom = t ? n + "px" : "0";
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
        } else
            this.vert.style.display = "",
            this.vert.firstChild.style.height = "0";
        if (t) {
            this.horiz.style.display = "block",
            this.horiz.style.right = r ? n + "px" : "0",
            this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
        } else
            this.horiz.style.display = "",
            this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == n && this.zeroWidthHack(),
        this.checkedZeroWidth = !0),
        {
            right: r ? n : 0,
            bottom: t ? n : 0
        }
    }
    ,
    Vn.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
        this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
    }
    ,
    Vn.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e),
        this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
    }
    ,
    Vn.prototype.zeroWidthHack = function() {
        var e = w && !s ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e,
        this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
        this.disableHoriz = new R,
        this.disableVert = new R
    }
    ,
    Vn.prototype.enableZeroWidthBar = function(r, n, i) {
        r.style.pointerEvents = "auto",
        n.set(1e3, function e() {
            var t = r.getBoundingClientRect();
            ("vert" == i ? document.elementFromPoint(t.right - 1, (t.top + t.bottom) / 2) : document.elementFromPoint((t.right + t.left) / 2, t.bottom - 1)) != r ? r.style.pointerEvents = "none" : n.set(1e3, e)
        })
    }
    ,
    Vn.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz),
        e.removeChild(this.vert)
    }
    ;
    function Kn() {}
    function jn(e, t) {
        t = t || Un(e);
        var r = e.display.barWidth
          , n = e.display.barHeight;
        Xn(e, t);
        for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++)
            r != e.display.barWidth && e.options.lineWrapping && An(e),
            Xn(e, Un(e)),
            r = e.display.barWidth,
            n = e.display.barHeight
    }
    function Xn(e, t) {
        var r = e.display
          , n = r.scrollbars.update(t);
        r.sizer.style.paddingRight = (r.barWidth = n.right) + "px",
        r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px",
        r.heightForcer.style.borderBottom = n.bottom + "px solid transparent",
        n.right && n.bottom ? (r.scrollbarFiller.style.display = "block",
        r.scrollbarFiller.style.height = n.bottom + "px",
        r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "",
        n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block",
        r.gutterFiller.style.height = n.bottom + "px",
        r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
    }
    Kn.prototype.update = function() {
        return {
            bottom: 0,
            right: 0
        }
    }
    ,
    Kn.prototype.setScrollLeft = function() {}
    ,
    Kn.prototype.setScrollTop = function() {}
    ,
    Kn.prototype.clear = function() {}
    ;
    var Yn = {
        native: Vn,
        null: Kn
    };
    function _n(r) {
        r.display.scrollbars && (r.display.scrollbars.clear(),
        r.display.scrollbars.addClass && T(r.display.wrapper, r.display.scrollbars.addClass)),
        r.display.scrollbars = new Yn[r.options.scrollbarStyle](function(e) {
            r.display.wrapper.insertBefore(e, r.display.scrollbarFiller),
            we(e, "mousedown", function() {
                r.state.focused && setTimeout(function() {
                    return r.display.input.focus()
                }, 0)
            }),
            e.setAttribute("cm-not-content", "true")
        }
        ,function(e, t) {
            "horizontal" == t ? Gn(r, e) : Rn(r, e)
        }
        ,r),
        r.display.scrollbars.addClass && H(r.display.wrapper, r.display.scrollbars.addClass)
    }
    var $n = 0;
    function qn(e) {
        e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++$n
        },
        function(e) {
            fr ? fr.ops.push(e) : e.ownsGroup = fr = {
                ops: [e],
                delayedCallbacks: []
            }
        }(e.curOp)
    }
    function Zn(e) {
        var t = e.curOp;
        t && function(e, t) {
            var r = e.ownsGroup;
            if (r)
                try {
                    !function(e) {
                        var t = e.delayedCallbacks
                          , r = 0;
                        do {
                            for (; r < t.length; r++)
                                t[r].call(null);
                            for (var n = 0; n < e.ops.length; n++) {
                                var i = e.ops[n];
                                if (i.cursorActivityHandlers)
                                    for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                            }
                        } while (r < t.length)
                    }(r)
                } finally {
                    fr = null,
                    t(r)
                }
        }(t, function(e) {
            for (var t = 0; t < e.ops.length; t++)
                e.ops[t].cm.curOp = null;
            !function(e) {
                for (var t = e.ops, r = 0; r < t.length; r++)
                    Qn(t[r]);
                for (var n = 0; n < t.length; n++)
                    (i = t[n]).updatedDisplay = i.mustUpdate && ui(i.cm, i.update);
                var i;
                for (var o = 0; o < t.length; o++)
                    Jn(t[o]);
                for (var l = 0; l < t.length; l++)
                    ei(t[l]);
                for (var s = 0; s < t.length; s++)
                    ti(t[s])
            }(e)
        })
    }
    function Qn(e) {
        var t = e.cm
          , r = t.display;
        !function(e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth,
            t.heightForcer.style.height = Dr(e) + "px",
            t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
            t.sizer.style.borderRightWidth = Dr(e) + "px",
            t.scrollbarsClipped = !0)
        }(t),
        e.updateMaxLine && Jt(t),
        e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping,
        e.update = e.mustUpdate && new ai(t,e.mustUpdate && {
            top: e.scrollTop,
            ensure: e.scrollToPos
        },e.forceUpdate)
    }
    function Jn(e) {
        var t = e.cm
          , r = t.display;
        e.updatedDisplay && An(t),
        e.barMeasure = Un(t),
        r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Pr(t, r.maxLine, r.maxLine.text.length).left + 3,
        t.display.sizerWidth = e.adjustWidthTo,
        e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Dr(t) + t.display.barWidth),
        e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Wr(t))),
        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
    }
    function ei(e) {
        var t = e.cm;
        null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
        e.maxScrollLeft < t.doc.scrollLeft && Gn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
        t.display.maxLineChanged = !1);
        var r = e.focus && e.focus == W();
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
        !e.updatedDisplay && e.startHeight == t.doc.height || jn(t, e.barMeasure),
        e.updatedDisplay && di(t, e.barMeasure),
        e.selectionChanged && kn(t),
        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
        r && Tn(e.cm)
    }
    function ti(e) {
        var t = e.cm
          , r = t.display
          , n = t.doc;
        e.updatedDisplay && ci(t, e.update),
        null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null),
        null != e.scrollTop && Bn(t, e.scrollTop, e.forceScroll),
        null != e.scrollLeft && Gn(t, e.scrollLeft, !0, !0),
        e.scrollToPos && function(e, t) {
            if (!Le(e, "scrollCursorIntoView")) {
                var r = e.display
                  , n = r.sizer.getBoundingClientRect()
                  , i = null;
                if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                null != i && !u) {
                    var o = A("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Nr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Dr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                    e.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    e.display.lineSpace.removeChild(o)
                }
            }
        }(t, function(e, t, r, n) {
            var i;
            null == n && (n = 0),
            e.options.lineWrapping || t != r || (r = "before" == (t = t.ch ? at(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? at(t.line, t.ch + 1, "before") : t);
            for (var o = 0; o < 5; o++) {
                var l = !1
                  , s = Qr(e, t)
                  , a = r && r != t ? Qr(e, r) : s
                  , u = Hn(e, i = {
                    left: Math.min(s.left, a.left),
                    top: Math.min(s.top, a.top) - n,
                    right: Math.max(s.left, a.left),
                    bottom: Math.max(s.bottom, a.bottom) + n
                })
                  , c = e.doc.scrollTop
                  , h = e.doc.scrollLeft;
                if (null != u.scrollTop && (Rn(e, u.scrollTop),
                1 < Math.abs(e.doc.scrollTop - c) && (l = !0)),
                null != u.scrollLeft && (Gn(e, u.scrollLeft),
                1 < Math.abs(e.doc.scrollLeft - h) && (l = !0)),
                !l)
                    break
            }
            return i
        }(t, gt(n, e.scrollToPos.from), gt(n, e.scrollToPos.to), e.scrollToPos.margin));
        var i = e.maybeHiddenMarkers
          , o = e.maybeUnhiddenMarkers;
        if (i)
            for (var l = 0; l < i.length; ++l)
                i[l].lines.length || Se(i[l], "hide");
        if (o)
            for (var s = 0; s < o.length; ++s)
                o[s].lines.length && Se(o[s], "unhide");
        r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
        e.changeObjs && Se(t, "changes", t, e.changeObjs),
        e.update && e.update.finish()
    }
    function ri(e, t) {
        if (e.curOp)
            return t();
        qn(e);
        try {
            return t()
        } finally {
            Zn(e)
        }
    }
    function ni(e, t) {
        return function() {
            if (e.curOp)
                return t.apply(e, arguments);
            qn(e);
            try {
                return t.apply(e, arguments)
            } finally {
                Zn(e)
            }
        }
    }
    function ii(e) {
        return function() {
            if (this.curOp)
                return e.apply(this, arguments);
            qn(this);
            try {
                return e.apply(this, arguments)
            } finally {
                Zn(this)
            }
        }
    }
    function oi(t) {
        return function() {
            var e = this.cm;
            if (!e || e.curOp)
                return t.apply(this, arguments);
            qn(e);
            try {
                return t.apply(this, arguments)
            } finally {
                Zn(e)
            }
        }
    }
    function li(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, E(si, e))
    }
    function si(a) {
        var u = a.doc;
        if (!(u.highlightFrontier >= a.display.viewTo)) {
            var c = +new Date + a.options.workTime
              , h = xt(a, u.highlightFrontier)
              , f = [];
            u.iter(h.line, Math.min(u.first + u.size, a.display.viewTo + 500), function(e) {
                if (h.line >= a.display.viewFrom) {
                    var t = e.styles
                      , r = e.text.length > a.options.maxHighlightLength ? qe(u.mode, h.state) : null
                      , n = bt(a, e, h, !0);
                    r && (h.state = r),
                    e.styles = n.styles;
                    var i = e.styleClasses
                      , o = n.classes;
                    o ? e.styleClasses = o : i && (e.styleClasses = null);
                    for (var l = !t || t.length != e.styles.length || i != o && (!i || !o || i.bgClass != o.bgClass || i.textClass != o.textClass), s = 0; !l && s < t.length; ++s)
                        l = t[s] != e.styles[s];
                    l && f.push(h.line),
                    e.stateAfter = h.save(),
                    h.nextLine()
                } else
                    e.text.length <= a.options.maxHighlightLength && Ct(a, e.text, h),
                    e.stateAfter = h.line % 5 == 0 ? h.save() : null,
                    h.nextLine();
                if (+new Date > c)
                    return li(a, a.options.workDelay),
                    !0
            }),
            u.highlightFrontier = h.line,
            u.modeFrontier = Math.max(u.modeFrontier, h.line),
            f.length && ri(a, function() {
                for (var e = 0; e < f.length; e++)
                    vn(a, f[e], "text")
            })
        }
    }
    var ai = function(e, t, r) {
        var n = e.display;
        this.viewport = t,
        this.visible = Wn(n, e.doc, t),
        this.editorIsHidden = !n.wrapper.offsetWidth,
        this.wrapperHeight = n.wrapper.clientHeight,
        this.wrapperWidth = n.wrapper.clientWidth,
        this.oldDisplayWidth = Wr(e),
        this.force = r,
        this.dims = un(e),
        this.events = []
    };
    function ui(e, t) {
        var r = e.display
          , n = e.doc;
        if (t.editorIsHidden)
            return mn(e),
            !1;
        if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == bn(e))
            return !1;
        gi(e) && (mn(e),
        t.dims = un(e));
        var i = n.first + n.size
          , o = Math.max(t.visible.from - e.options.viewportMargin, n.first)
          , l = Math.min(i, t.visible.to + e.options.viewportMargin);
        r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)),
        r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)),
        At && (o = Yt(e.doc, o),
        l = _t(e.doc, l));
        var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
        !function(e, t, r) {
            var n = e.display;
            0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = hr(e, t, r),
            n.viewFrom = t) : (n.viewFrom > t ? n.view = hr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(pn(e, t))),
            n.viewFrom = t,
            n.viewTo < r ? n.view = n.view.concat(hr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, pn(e, r)))),
            n.viewTo = r
        }(e, o, l),
        r.viewOffset = Zt(et(e.doc, r.viewFrom)),
        e.display.mover.style.top = r.viewOffset + "px";
        var a = bn(e);
        if (!s && 0 == a && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
            return !1;
        var u = function(e) {
            if (e.hasFocus())
                return null;
            var t = W();
            if (!t || !D(e.display.lineDiv, t))
                return null;
            var r = {
                activeElt: t
            };
            if (window.getSelection) {
                var n = window.getSelection();
                n.anchorNode && n.extend && D(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode,
                r.anchorOffset = n.anchorOffset,
                r.focusNode = n.focusNode,
                r.focusOffset = n.focusOffset)
            }
            return r
        }(e);
        return 4 < a && (r.lineDiv.style.display = "none"),
        function(r, e, t) {
            var n = r.display
              , i = r.options.lineNumbers
              , o = n.lineDiv
              , l = o.firstChild;
            function s(e) {
                var t = e.nextSibling;
                return b && w && r.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e),
                t
            }
            for (var a = n.view, u = n.viewFrom, c = 0; c < a.length; c++) {
                var h = a[c];
                if (h.hidden)
                    ;
                else if (h.node && h.node.parentNode == o) {
                    for (; l != h.node; )
                        l = s(l);
                    var f = i && null != e && e <= u && h.lineNumber;
                    h.changes && (-1 < B(h.changes, "gutter") && (f = !1),
                    vr(r, h, u, t)),
                    f && (M(h.lineNumber),
                    h.lineNumber.appendChild(document.createTextNode(st(r.options, u)))),
                    l = h.node.nextSibling
                } else {
                    var d = (v = u,
                    m = t,
                    void 0,
                    y = yr(p = r, g = h),
                    g.text = g.node = y.pre,
                    y.bgClass && (g.bgClass = y.bgClass),
                    y.textClass && (g.textClass = y.textClass),
                    wr(p, g),
                    xr(p, g, v, m),
                    Sr(p, g, m),
                    g.node);
                    o.insertBefore(d, l)
                }
                u += h.size
            }
            var p, g, v, m, y;
            for (; l; )
                l = s(l)
        }(e, r.updateLineNumbers, t.dims),
        4 < a && (r.lineDiv.style.display = ""),
        r.renderedView = r.view,
        function(e) {
            if (e && e.activeElt && e.activeElt != W() && (e.activeElt.focus(),
            e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) {
                var t = window.getSelection()
                  , r = document.createRange();
                r.setEnd(e.anchorNode, e.anchorOffset),
                r.collapse(!1),
                t.removeAllRanges(),
                t.addRange(r),
                t.extend(e.focusNode, e.focusOffset)
            }
        }(u),
        M(r.cursorDiv),
        M(r.selectionDiv),
        r.gutters.style.height = r.sizer.style.minHeight = 0,
        s && (r.lastWrapHeight = t.wrapperHeight,
        r.lastWrapWidth = t.wrapperWidth,
        li(e, 400)),
        !(r.updateLineNumbers = null)
    }
    function ci(e, t) {
        for (var r = t.viewport, n = !0; (n && e.options.lineWrapping && t.oldDisplayWidth != Wr(e) || (r && null != r.top && (r = {
            top: Math.min(e.doc.height + Or(e.display) - Hr(e), r.top)
        }),
        t.visible = Wn(e.display, e.doc, r),
        !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && ui(e, t); n = !1) {
            An(e);
            var i = Un(e);
            wn(e),
            jn(e, i),
            di(e, i),
            t.force = !1
        }
        t.signal(e, "update", e),
        e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
        e.display.reportedViewFrom = e.display.viewFrom,
        e.display.reportedViewTo = e.display.viewTo)
    }
    function hi(e, t) {
        var r = new ai(e,t);
        if (ui(e, r)) {
            An(e),
            ci(e, r);
            var n = Un(e);
            wn(e),
            jn(e, n),
            di(e, n),
            r.finish()
        }
    }
    function fi(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px"
    }
    function di(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px",
        e.display.heightForcer.style.top = t.docHeight + "px",
        e.display.gutters.style.height = t.docHeight + e.display.barHeight + Dr(e) + "px"
    }
    function pi(e) {
        var t = e.display
          , r = t.view;
        if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var n = cn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
                if (!r[l].hidden) {
                    e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o),
                    r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                    var s = r[l].alignable;
                    if (s)
                        for (var a = 0; a < s.length; a++)
                            s[a].style.left = o
                }
            e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
        }
    }
    function gi(e) {
        if (!e.options.lineNumbers)
            return !1;
        var t = e.doc
          , r = st(e.options, t.first + t.size - 1)
          , n = e.display;
        if (r.length == n.lineNumChars)
            return !1;
        var i = n.measure.appendChild(A("div", [A("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
          , o = i.firstChild.offsetWidth
          , l = i.offsetWidth - o;
        return n.lineGutter.style.width = "",
        n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1,
        n.lineNumWidth = n.lineNumInnerWidth + l,
        n.lineNumChars = n.lineNumInnerWidth ? r.length : -1,
        n.lineGutter.style.width = n.lineNumWidth + "px",
        fi(e.display),
        !0
    }
    function vi(e, t) {
        for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i]
              , l = null;
            if ("string" != typeof o && (l = o.style,
            o = o.className),
            "CodeMirror-linenumbers" == o) {
                if (!t)
                    continue;
                n = !0
            }
            r.push({
                className: o,
                style: l
            })
        }
        return t && !n && r.push({
            className: "CodeMirror-linenumbers",
            style: null
        }),
        r
    }
    function mi(e) {
        var t = e.gutters
          , r = e.gutterSpecs;
        M(t),
        e.lineGutter = null;
        for (var n = 0; n < r.length; ++n) {
            var i = r[n]
              , o = i.className
              , l = i.style
              , s = t.appendChild(A("div", null, "CodeMirror-gutter " + o));
            l && (s.style.cssText = l),
            "CodeMirror-linenumbers" == o && ((e.lineGutter = s).style.width = (e.lineNumWidth || 1) + "px")
        }
        t.style.display = r.length ? "" : "none",
        fi(e)
    }
    function yi(e) {
        mi(e.display),
        gn(e),
        pi(e)
    }
    function bi(e, t, r, n) {
        var i = this;
        this.input = r,
        i.scrollbarFiller = A("div", null, "CodeMirror-scrollbar-filler"),
        i.scrollbarFiller.setAttribute("cm-not-content", "true"),
        i.gutterFiller = A("div", null, "CodeMirror-gutter-filler"),
        i.gutterFiller.setAttribute("cm-not-content", "true"),
        i.lineDiv = O("div", null, "CodeMirror-code"),
        i.selectionDiv = A("div", null, null, "position: relative; z-index: 1"),
        i.cursorDiv = A("div", null, "CodeMirror-cursors"),
        i.measure = A("div", null, "CodeMirror-measure"),
        i.lineMeasure = A("div", null, "CodeMirror-measure"),
        i.lineSpace = O("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
        var o = O("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = A("div", [o], null, "position: relative"),
        i.sizer = A("div", [i.mover], "CodeMirror-sizer"),
        i.sizerWidth = null,
        i.heightForcer = A("div", null, null, "position: absolute; height: " + G + "px; width: 1px;"),
        i.gutters = A("div", null, "CodeMirror-gutters"),
        i.lineGutter = null,
        i.scroller = A("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"),
        i.scroller.setAttribute("tabIndex", "-1"),
        i.wrapper = A("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"),
        x && C < 8 && (i.gutters.style.zIndex = -1,
        i.scroller.style.paddingRight = 0),
        b || g && f || (i.scroller.draggable = !0),
        e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
        i.viewFrom = i.viewTo = t.first,
        i.reportedViewFrom = i.reportedViewTo = t.first,
        i.view = [],
        i.renderedView = null,
        i.externalMeasured = null,
        i.viewOffset = 0,
        i.lastWrapHeight = i.lastWrapWidth = 0,
        i.updateLineNumbers = null,
        i.nativeBarWidth = i.barHeight = i.barWidth = 0,
        i.scrollbarsClipped = !1,
        i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null,
        i.alignWidgets = !1,
        i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null,
        i.maxLine = null,
        i.maxLineLength = 0,
        i.maxLineChanged = !1,
        i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null,
        i.shift = !1,
        i.selForContextMenu = null,
        i.activeTouch = null,
        i.gutterSpecs = vi(n.gutters, n.lineNumbers),
        mi(i),
        r.init(i)
    }
    ai.prototype.signal = function(e, t) {
        Te(e, t) && this.events.push(arguments)
    }
    ,
    ai.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
            Se.apply(null, this.events[e])
    }
    ;
    var wi = 0
      , xi = null;
    function Ci(e) {
        var t = e.wheelDeltaX
          , r = e.wheelDeltaY;
        return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
        null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta),
        {
            x: t,
            y: r
        }
    }
    function Si(e) {
        var t = Ci(e);
        return t.x *= xi,
        t.y *= xi,
        t
    }
    function Li(e, t) {
        var r = Ci(t)
          , n = r.x
          , i = r.y
          , o = e.display
          , l = o.scroller
          , s = l.scrollWidth > l.clientWidth
          , a = l.scrollHeight > l.clientHeight;
        if (n && s || i && a) {
            if (i && w && b)
                e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
                    for (var h = 0; h < c.length; h++)
                        if (c[h].node == u) {
                            e.display.currentWheelTarget = u;
                            break e
                        }
            if (n && !g && !v && null != xi)
                return i && a && Rn(e, Math.max(0, l.scrollTop + i * xi)),
                Gn(e, Math.max(0, l.scrollLeft + n * xi)),
                (!i || i && a) && Ne(t),
                void (o.wheelStartX = null);
            if (i && null != xi) {
                var f = i * xi
                  , d = e.doc.scrollTop
                  , p = d + o.wrapper.clientHeight;
                f < 0 ? d = Math.max(0, d + f - 50) : p = Math.min(e.doc.height, p + f + 50),
                hi(e, {
                    top: d,
                    bottom: p
                })
            }
            wi < 20 && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft,
            o.wheelStartY = l.scrollTop,
            o.wheelDX = n,
            o.wheelDY = i,
            setTimeout(function() {
                if (null != o.wheelStartX) {
                    var e = l.scrollLeft - o.wheelStartX
                      , t = l.scrollTop - o.wheelStartY
                      , r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                    o.wheelStartX = o.wheelStartY = null,
                    r && (xi = (xi * wi + r) / (wi + 1),
                    ++wi)
                }
            }, 200)) : (o.wheelDX += n,
            o.wheelDY += i))
        }
    }
    x ? xi = -.53 : g ? xi = 15 : l ? xi = -.7 : a && (xi = -1 / 3);
    var ki = function(e, t) {
        this.ranges = e,
        this.primIndex = t
    };
    ki.prototype.primary = function() {
        return this.ranges[this.primIndex]
    }
    ,
    ki.prototype.equals = function(e) {
        if (e == this)
            return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
            return !1;
        for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t]
              , n = e.ranges[t];
            if (!ct(r.anchor, n.anchor) || !ct(r.head, n.head))
                return !1
        }
        return !0
    }
    ,
    ki.prototype.deepCopy = function() {
        for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new Ti(ht(this.ranges[t].anchor),ht(this.ranges[t].head));
        return new ki(e,this.primIndex)
    }
    ,
    ki.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty())
                return !0;
        return !1
    }
    ,
    ki.prototype.contains = function(e, t) {
        t = t || e;
        for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (0 <= ut(t, n.from()) && ut(e, n.to()) <= 0)
                return r
        }
        return -1
    }
    ;
    var Ti = function(e, t) {
        this.anchor = e,
        this.head = t
    };
    function Mi(e, t, r) {
        var n = e && e.options.selectionsMayTouch
          , i = t[r];
        t.sort(function(e, t) {
            return ut(e.from(), t.from())
        }),
        r = B(t, i);
        for (var o = 1; o < t.length; o++) {
            var l = t[o]
              , s = t[o - 1]
              , a = ut(s.to(), l.from());
            if (n && !l.empty() ? 0 < a : 0 <= a) {
                var u = dt(s.from(), l.from())
                  , c = ft(s.to(), l.to())
                  , h = s.empty() ? l.from() == l.head : s.from() == s.head;
                o <= r && --r,
                t.splice(--o, 2, new Ti(h ? c : u,h ? u : c))
            }
        }
        return new ki(t,r)
    }
    function Ni(e, t) {
        return new ki([new Ti(e,t || e)],0)
    }
    function Oi(e) {
        return e.text ? at(e.from.line + e.text.length - 1, $(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    }
    function Ai(e, t) {
        if (ut(e, t.from) < 0)
            return e;
        if (ut(e, t.to) <= 0)
            return Oi(t);
        var r = e.line + t.text.length - (t.to.line - t.from.line) - 1
          , n = e.ch;
        return e.line == t.to.line && (n += Oi(t).ch - t.to.ch),
        at(r, n)
    }
    function Di(e, t) {
        for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new Ti(Ai(i.anchor, t),Ai(i.head, t)))
        }
        return Mi(e.cm, r, e.sel.primIndex)
    }
    function Wi(e, t, r) {
        return e.line == t.line ? at(r.line, e.ch - t.ch + r.ch) : at(r.line + (e.line - t.line), e.ch)
    }
    function Hi(e) {
        e.doc.mode = Ye(e.options, e.doc.modeOption),
        Fi(e)
    }
    function Fi(e) {
        e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null),
            e.styles && (e.styles = null)
        }),
        e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
        li(e, 100),
        e.state.modeGen++,
        e.curOp && gn(e)
    }
    function Pi(e, t) {
        return 0 == t.from.ch && 0 == t.to.ch && "" == $(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }
    function Ei(e, n, t, i) {
        function o(e) {
            return t ? t[e] : null
        }
        function r(e, t, r) {
            !function(e, t, r, n) {
                e.text = t,
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Et(e),
                It(e, r);
                var i = n ? n(e) : 1;
                i != e.height && nt(e, i)
            }(e, t, r, i),
            pr(e, "change", e, n)
        }
        function l(e, t) {
            for (var r = [], n = e; n < t; ++n)
                r.push(new er(u[n],o(n),i));
            return r
        }
        var s = n.from
          , a = n.to
          , u = n.text
          , c = et(e, s.line)
          , h = et(e, a.line)
          , f = $(u)
          , d = o(u.length - 1)
          , p = a.line - s.line;
        if (n.full)
            e.insert(0, l(0, u.length)),
            e.remove(u.length, e.size - u.length);
        else if (Pi(e, n)) {
            var g = l(0, u.length - 1);
            r(h, h.text, d),
            p && e.remove(s.line, p),
            g.length && e.insert(s.line, g)
        } else if (c == h)
            if (1 == u.length)
                r(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
            else {
                var v = l(1, u.length - 1);
                v.push(new er(f + c.text.slice(a.ch),d,i)),
                r(c, c.text.slice(0, s.ch) + u[0], o(0)),
                e.insert(s.line + 1, v)
            }
        else if (1 == u.length)
            r(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), o(0)),
            e.remove(s.line + 1, p);
        else {
            r(c, c.text.slice(0, s.ch) + u[0], o(0)),
            r(h, f + h.text.slice(a.ch), d);
            var m = l(1, u.length - 1);
            1 < p && e.remove(s.line + 1, p - 1),
            e.insert(s.line + 1, m)
        }
        pr(e, "change", e, n)
    }
    function Ii(e, s, a) {
        !function e(t, r, n) {
            if (t.linked)
                for (var i = 0; i < t.linked.length; ++i) {
                    var o = t.linked[i];
                    if (o.doc != r) {
                        var l = n && o.sharedHist;
                        a && !l || (s(o.doc, l),
                        e(o.doc, t, l))
                    }
                }
        }(e, null, !0)
    }
    function zi(e, t) {
        if (t.cm)
            throw new Error("This document is already in use.");
        fn((e.doc = t).cm = e),
        Hi(e),
        Ri(e),
        e.options.lineWrapping || Jt(e),
        e.options.mode = t.modeOption,
        gn(e)
    }
    function Ri(e) {
        ("rtl" == e.doc.direction ? H : T)(e.display.lineDiv, "CodeMirror-rtl")
    }
    function Bi(e) {
        this.done = [],
        this.undone = [],
        this.undoDepth = 1 / 0,
        this.lastModTime = this.lastSelTime = 0,
        this.lastOp = this.lastSelOp = null,
        this.lastOrigin = this.lastSelOrigin = null,
        this.generation = this.maxGeneration = e || 1
    }
    function Gi(e, t) {
        var r = {
            from: ht(t.from),
            to: Oi(t),
            text: tt(e, t.from, t.to)
        };
        return Xi(e, r, t.from.line, t.to.line + 1),
        Ii(e, function(e) {
            return Xi(e, r, t.from.line, t.to.line + 1)
        }, !0),
        r
    }
    function Ui(e) {
        for (; e.length; ) {
            if (!$(e).ranges)
                break;
            e.pop()
        }
    }
    function Vi(e, t, r, n) {
        var i = e.history;
        i.undone.length = 0;
        var o, l, s = +new Date;
        if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function(e, t) {
            return t ? (Ui(e.done),
            $(e.done)) : e.done.length && !$(e.done).ranges ? $(e.done) : 1 < e.done.length && !e.done[e.done.length - 2].ranges ? (e.done.pop(),
            $(e.done)) : void 0
        }(i, i.lastOp == n)))
            l = $(o.changes),
            0 == ut(t.from, t.to) && 0 == ut(t.from, l.to) ? l.to = Oi(t) : o.changes.push(Gi(e, t));
        else {
            var a = $(i.done);
            for (a && a.ranges || ji(e.sel, i.done),
            o = {
                changes: [Gi(e, t)],
                generation: i.generation
            },
            i.done.push(o); i.done.length > i.undoDepth; )
                i.done.shift(),
                i.done[0].ranges || i.done.shift()
        }
        i.done.push(r),
        i.generation = ++i.maxGeneration,
        i.lastModTime = i.lastSelTime = s,
        i.lastOp = i.lastSelOp = n,
        i.lastOrigin = i.lastSelOrigin = t.origin,
        l || Se(e, "historyAdded")
    }
    function Ki(e, t, r, n) {
        var i = e.history
          , o = n && n.origin;
        r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(e, t, r, n) {
            var i = t.charAt(0);
            return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
        }(e, o, $(i.done), t)) ? i.done[i.done.length - 1] = t : ji(t, i.done),
        i.lastSelTime = +new Date,
        i.lastSelOrigin = o,
        i.lastSelOp = r,
        n && !1 !== n.clearRedo && Ui(i.undone)
    }
    function ji(e, t) {
        var r = $(t);
        r && r.ranges && r.equals(e) || t.push(e)
    }
    function Xi(t, r, e, n) {
        var i = r["spans_" + t.id]
          , o = 0;
        t.iter(Math.max(t.first, e), Math.min(t.first + t.size, n), function(e) {
            e.markedSpans && ((i = i || (r["spans_" + t.id] = {}))[o] = e.markedSpans),
            ++o
        })
    }
    function Yi(e) {
        if (!e)
            return null;
        for (var t, r = 0; r < e.length; ++r)
            e[r].marker.explicitlyCleared ? t = t || e.slice(0, r) : t && t.push(e[r]);
        return t ? t.length ? t : null : e
    }
    function _i(e, t) {
        var r = function(e, t) {
            var r = t["spans_" + e.id];
            if (!r)
                return null;
            for (var n = [], i = 0; i < t.text.length; ++i)
                n.push(Yi(r[i]));
            return n
        }(e, t)
          , n = Ft(e, t);
        if (!r)
            return n;
        if (!n)
            return r;
        for (var i = 0; i < r.length; ++i) {
            var o = r[i]
              , l = n[i];
            if (o && l)
                e: for (var s = 0; s < l.length; ++s) {
                    for (var a = l[s], u = 0; u < o.length; ++u)
                        if (o[u].marker == a.marker)
                            continue e;
                    o.push(a)
                }
            else
                l && (r[i] = l)
        }
        return r
    }
    function $i(e, t, r) {
        for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges)
                n.push(r ? ki.prototype.deepCopy.call(o) : o);
            else {
                var l = o.changes
                  , s = [];
                n.push({
                    changes: s
                });
                for (var a = 0; a < l.length; ++a) {
                    var u = l[a]
                      , c = void 0;
                    if (s.push({
                        from: u.from,
                        to: u.to,
                        text: u.text
                    }),
                    t)
                        for (var h in u)
                            (c = h.match(/^spans_(\d+)$/)) && -1 < B(t, Number(c[1])) && ($(s)[h] = u[h],
                            delete u[h])
                }
            }
        }
        return n
    }
    function qi(e, t, r, n) {
        if (n) {
            var i = e.anchor;
            if (r) {
                var o = ut(t, i) < 0;
                o != ut(r, i) < 0 ? (i = t,
                t = r) : o != ut(t, r) < 0 && (t = r)
            }
            return new Ti(i,t)
        }
        return new Ti(r || t,t)
    }
    function Zi(e, t, r, n, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
        ro(e, new ki([qi(e.sel.primary(), t, r, i)],0), n)
    }
    function Qi(e, t, r) {
        for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
            n[o] = qi(e.sel.ranges[o], t[o], null, i);
        ro(e, Mi(e.cm, n, e.sel.primIndex), r)
    }
    function Ji(e, t, r, n) {
        var i = e.sel.ranges.slice(0);
        i[t] = r,
        ro(e, Mi(e.cm, i, e.sel.primIndex), n)
    }
    function eo(e, t, r, n) {
        ro(e, Ni(t, r), n)
    }
    function to(e, t, r) {
        var n = e.history.done
          , i = $(n);
        i && i.ranges ? no(e, n[n.length - 1] = t, r) : ro(e, t, r)
    }
    function ro(e, t, r) {
        no(e, t, r),
        Ki(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
    }
    function no(e, t, r) {
        (Te(e, "beforeSelectionChange") || e.cm && Te(e.cm, "beforeSelectionChange")) && (t = function(r, e, t) {
            var n = {
                ranges: e.ranges,
                update: function(e) {
                    this.ranges = [];
                    for (var t = 0; t < e.length; t++)
                        this.ranges[t] = new Ti(gt(r, e[t].anchor),gt(r, e[t].head))
                },
                origin: t && t.origin
            };
            return Se(r, "beforeSelectionChange", r, n),
            r.cm && Se(r.cm, "beforeSelectionChange", r.cm, n),
            n.ranges != e.ranges ? Mi(r.cm, n.ranges, n.ranges.length - 1) : e
        }(e, t, r));
        var n = r && r.bias || (ut(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        io(e, lo(e, t, n, !0)),
        r && !1 === r.scroll || !e.cm || Pn(e.cm)
    }
    function io(e, t) {
        t.equals(e.sel) || (e.sel = t,
        e.cm && (e.cm.curOp.updateInput = 1,
        e.cm.curOp.selectionChanged = !0,
        ke(e.cm)),
        pr(e, "cursorActivity", e))
    }
    function oo(e) {
        io(e, lo(e, e.sel, null, !1))
    }
    function lo(e, t, r, n) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o]
              , s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o]
              , a = ao(e, l.anchor, s && s.anchor, r, n)
              , u = ao(e, l.head, s && s.head, r, n);
            !i && a == l.anchor && u == l.head || ((i = i || t.ranges.slice(0, o))[o] = new Ti(a,u))
        }
        return i ? Mi(e.cm, i, t.primIndex) : t
    }
    function so(e, t, r, n, i) {
        var o = et(e, t.line);
        if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
                var s = o.markedSpans[l]
                  , a = s.marker
                  , u = "selectLeft"in a ? !a.selectLeft : a.inclusiveLeft
                  , c = "selectRight"in a ? !a.selectRight : a.inclusiveRight;
                if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                    if (i && (Se(a, "beforeCursorEnter"),
                    a.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --l;
                            continue
                        }
                        break
                    }
                    if (!a.atomic)
                        continue;
                    if (r) {
                        var h = a.find(n < 0 ? 1 : -1)
                          , f = void 0;
                        if ((n < 0 ? c : u) && (h = uo(e, h, -n, h && h.line == t.line ? o : null)),
                        h && h.line == t.line && (f = ut(h, r)) && (n < 0 ? f < 0 : 0 < f))
                            return so(e, h, t, n, i)
                    }
                    var d = a.find(n < 0 ? -1 : 1);
                    return (n < 0 ? u : c) && (d = uo(e, d, n, d.line == t.line ? o : null)),
                    d ? so(e, d, t, n, i) : null
                }
            }
        return t
    }
    function ao(e, t, r, n, i) {
        var o = n || 1
          , l = so(e, t, r, o, i) || !i && so(e, t, r, o, !0) || so(e, t, r, -o, i) || !i && so(e, t, r, -o, !0);
        return l || (e.cantEdit = !0,
        at(e.first, 0))
    }
    function uo(e, t, r, n) {
        return r < 0 && 0 == t.ch ? t.line > e.first ? gt(e, at(t.line - 1)) : null : 0 < r && t.ch == (n || et(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? at(t.line + 1, 0) : null : new at(t.line,t.ch + r)
    }
    function co(e) {
        e.setSelection(at(e.firstLine(), 0), at(e.lastLine()), V)
    }
    function ho(i, e, t) {
        var o = {
            canceled: !1,
            from: e.from,
            to: e.to,
            text: e.text,
            origin: e.origin,
            cancel: function() {
                return o.canceled = !0
            }
        };
        return t && (o.update = function(e, t, r, n) {
            e && (o.from = gt(i, e)),
            t && (o.to = gt(i, t)),
            r && (o.text = r),
            void 0 !== n && (o.origin = n)
        }
        ),
        Se(i, "beforeChange", i, o),
        i.cm && Se(i.cm, "beforeChange", i.cm, o),
        o.canceled ? (i.cm && (i.cm.curOp.updateInput = 2),
        null) : {
            from: o.from,
            to: o.to,
            text: o.text,
            origin: o.origin
        }
    }
    function fo(e, t, r) {
        if (e.cm) {
            if (!e.cm.curOp)
                return ni(e.cm, fo)(e, t, r);
            if (e.cm.state.suppressEdits)
                return
        }
        if (!(Te(e, "beforeChange") || e.cm && Te(e.cm, "beforeChange")) || (t = ho(e, t, !0))) {
            var n = Ot && !r && function(e, t, r) {
                var n = null;
                if (e.iter(t.line, r.line + 1, function(e) {
                    if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                            var r = e.markedSpans[t].marker;
                            !r.readOnly || n && -1 != B(n, r) || (n = n || []).push(r)
                        }
                }),
                !n)
                    return null;
                for (var i = [{
                    from: t,
                    to: r
                }], o = 0; o < n.length; ++o)
                    for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
                        var u = i[a];
                        if (!(ut(u.to, s.from) < 0 || 0 < ut(u.from, s.to))) {
                            var c = [a, 1]
                              , h = ut(u.from, s.from)
                              , f = ut(u.to, s.to);
                            (h < 0 || !l.inclusiveLeft && !h) && c.push({
                                from: u.from,
                                to: s.from
                            }),
                            (0 < f || !l.inclusiveRight && !f) && c.push({
                                from: s.to,
                                to: u.to
                            }),
                            i.splice.apply(i, c),
                            a += c.length - 3
                        }
                    }
                return i
            }(e, t.from, t.to);
            if (n)
                for (var i = n.length - 1; 0 <= i; --i)
                    po(e, {
                        from: n[i].from,
                        to: n[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    });
            else
                po(e, t)
        }
    }
    function po(e, r) {
        if (1 != r.text.length || "" != r.text[0] || 0 != ut(r.from, r.to)) {
            var t = Di(e, r);
            Vi(e, r, t, e.cm ? e.cm.curOp.id : NaN),
            mo(e, r, t, Ft(e, r));
            var n = [];
            Ii(e, function(e, t) {
                t || -1 != B(n, e.history) || (xo(e.history, r),
                n.push(e.history)),
                mo(e, r, null, Ft(e, r))
            })
        }
    }
    function go(i, o, e) {
        var t = i.cm && i.cm.state.suppressEdits;
        if (!t || e) {
            for (var l, r = i.history, n = i.sel, s = "undo" == o ? r.done : r.undone, a = "undo" == o ? r.undone : r.done, u = 0; u < s.length && (l = s[u],
            e ? !l.ranges || l.equals(i.sel) : l.ranges); u++)
                ;
            if (u != s.length) {
                for (r.lastOrigin = r.lastSelOrigin = null; ; ) {
                    if (!(l = s.pop()).ranges) {
                        if (t)
                            return void s.push(l);
                        break
                    }
                    if (ji(l, a),
                    e && !l.equals(i.sel))
                        return void ro(i, l, {
                            clearRedo: !1
                        });
                    n = l
                }
                var c = [];
                ji(n, a),
                a.push({
                    changes: c,
                    generation: r.generation
                }),
                r.generation = l.generation || ++r.maxGeneration;
                for (var h = Te(i, "beforeChange") || i.cm && Te(i.cm, "beforeChange"), f = function(e) {
                    var r = l.changes[e];
                    if (r.origin = o,
                    h && !ho(i, r, !1))
                        return s.length = 0,
                        {};
                    c.push(Gi(i, r));
                    var t = e ? Di(i, r) : $(s);
                    mo(i, r, t, _i(i, r)),
                    !e && i.cm && i.cm.scrollIntoView({
                        from: r.from,
                        to: Oi(r)
                    });
                    var n = [];
                    Ii(i, function(e, t) {
                        t || -1 != B(n, e.history) || (xo(e.history, r),
                        n.push(e.history)),
                        mo(e, r, null, _i(e, r))
                    })
                }, d = l.changes.length - 1; 0 <= d; --d) {
                    var p = f(d);
                    if (p)
                        return p.v
                }
            }
        }
    }
    function vo(e, t) {
        if (0 != t && (e.first += t,
        e.sel = new ki(q(e.sel.ranges, function(e) {
            return new Ti(at(e.anchor.line + t, e.anchor.ch),at(e.head.line + t, e.head.ch))
        }),e.sel.primIndex),
        e.cm)) {
            gn(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
                vn(e.cm, n, "gutter")
        }
    }
    function mo(e, t, r, n) {
        if (e.cm && !e.cm.curOp)
            return ni(e.cm, mo)(e, t, r, n);
        if (t.to.line < e.first)
            vo(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                vo(e, i),
                t = {
                    from: at(e.first, 0),
                    to: at(t.to.line + i, t.to.ch),
                    text: [$(t.text)],
                    origin: t.origin
                }
            }
            var o = e.lastLine();
            t.to.line > o && (t = {
                from: t.from,
                to: at(o, et(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin
            }),
            t.removed = tt(e, t.from, t.to),
            r = r || Di(e, t),
            e.cm ? function(e, t, r) {
                var n = e.doc
                  , i = e.display
                  , o = t.from
                  , l = t.to
                  , s = !1
                  , a = o.line;
                e.options.lineWrapping || (a = it(Xt(et(n, o.line))),
                n.iter(a, l.line + 1, function(e) {
                    if (e == i.maxLine)
                        return s = !0
                }));
                -1 < n.sel.contains(t.from, t.to) && ke(e);
                Ei(n, t, r, hn(e)),
                e.options.lineWrapping || (n.iter(a, o.line + t.text.length, function(e) {
                    var t = Qt(e);
                    t > i.maxLineLength && (i.maxLine = e,
                    i.maxLineLength = t,
                    i.maxLineChanged = !0,
                    s = !1)
                }),
                s && (e.curOp.updateMaxLine = !0));
                (function(e, t) {
                    if (e.modeFrontier = Math.min(e.modeFrontier, t),
                    !(e.highlightFrontier < t - 10)) {
                        for (var r = e.first, n = t - 1; r < n; n--) {
                            var i = et(e, n).stateAfter;
                            if (i && (!(i instanceof mt) || n + i.lookAhead < t)) {
                                r = n + 1;
                                break
                            }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, r)
                    }
                }
                )(n, o.line),
                li(e, 400);
                var u = t.text.length - (l.line - o.line) - 1;
                t.full ? gn(e) : o.line != l.line || 1 != t.text.length || Pi(e.doc, t) ? gn(e, o.line, l.line + 1, u) : vn(e, o.line, "text");
                var c = Te(e, "changes")
                  , h = Te(e, "change");
                if (h || c) {
                    var f = {
                        from: o,
                        to: l,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin
                    };
                    h && pr(e, "change", e, f),
                    c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
                }
                e.display.selForContextMenu = null
            }(e.cm, t, n) : Ei(e, t, n),
            no(e, r, V),
            e.cantEdit && ao(e, at(e.firstLine(), 0)) && (e.cantEdit = !1)
        }
    }
    function yo(e, t, r, n, i) {
        var o;
        ut(n = n || r, r) < 0 && (r = (o = [n, r])[0],
        n = o[1]),
        "string" == typeof t && (t = e.splitLines(t)),
        fo(e, {
            from: r,
            to: n,
            text: t,
            origin: i
        })
    }
    function bo(e, t, r, n) {
        r < e.line ? e.line += n : t < e.line && (e.line = t,
        e.ch = 0)
    }
    function wo(e, t, r, n) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i]
              , l = !0;
            if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var s = 0; s < o.ranges.length; s++)
                    bo(o.ranges[s].anchor, t, r, n),
                    bo(o.ranges[s].head, t, r, n)
            } else {
                for (var a = 0; a < o.changes.length; ++a) {
                    var u = o.changes[a];
                    if (r < u.from.line)
                        u.from = at(u.from.line + n, u.from.ch),
                        u.to = at(u.to.line + n, u.to.ch);
                    else if (t <= u.to.line) {
                        l = !1;
                        break
                    }
                }
                l || (e.splice(0, i + 1),
                i = 0)
            }
        }
    }
    function xo(e, t) {
        var r = t.from.line
          , n = t.to.line
          , i = t.text.length - (n - r) - 1;
        wo(e.done, r, n, i),
        wo(e.undone, r, n, i)
    }
    function Co(e, t, r, n) {
        var i = t
          , o = t;
        return "number" == typeof t ? o = et(e, pt(e, t)) : i = it(t),
        null == i ? null : (n(o, i) && e.cm && vn(e.cm, i, r),
        o)
    }
    function So(e) {
        this.lines = e,
        this.parent = null;
        for (var t = 0, r = 0; r < e.length; ++r)
            e[r].parent = this,
            t += e[r].height;
        this.height = t
    }
    function Lo(e) {
        this.children = e;
        for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            t += i.chunkSize(),
            r += i.height,
            i.parent = this
        }
        this.size = t,
        this.height = r,
        this.parent = null
    }
    Ti.prototype.from = function() {
        return dt(this.anchor, this.head)
    }
    ,
    Ti.prototype.to = function() {
        return ft(this.anchor, this.head)
    }
    ,
    Ti.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
    }
    ,
    So.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        removeInner: function(e, t) {
            for (var r, n = e, i = e + t; n < i; ++n) {
                var o = this.lines[n];
                this.height -= o.height,
                (r = o).parent = null,
                Et(r),
                pr(o, "delete")
            }
            this.lines.splice(e, t)
        },
        collapse: function(e) {
            e.push.apply(e, this.lines)
        },
        insertInner: function(e, t, r) {
            this.height += r,
            this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var n = 0; n < t.length; ++n)
                t[n].parent = this
        },
        iterN: function(e, t, r) {
            for (var n = e + t; e < n; ++e)
                if (r(this.lines[e]))
                    return !0
        }
    },
    Lo.prototype = {
        chunkSize: function() {
            return this.size
        },
        removeInner: function(e, t) {
            this.size -= t;
            for (var r = 0; r < this.children.length; ++r) {
                var n = this.children[r]
                  , i = n.chunkSize();
                if (e < i) {
                    var o = Math.min(t, i - e)
                      , l = n.height;
                    if (n.removeInner(e, o),
                    this.height -= l - n.height,
                    i == o && (this.children.splice(r--, 1),
                    n.parent = null),
                    0 == (t -= o))
                        break;
                    e = 0
                } else
                    e -= i
            }
            if (this.size - t < 25 && (1 < this.children.length || !(this.children[0]instanceof So))) {
                var s = [];
                this.collapse(s),
                this.children = [new So(s)],
                this.children[0].parent = this
            }
        },
        collapse: function(e) {
            for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e)
        },
        insertInner: function(e, t, r) {
            this.size += t.length,
            this.height += r;
            for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n]
                  , o = i.chunkSize();
                if (e <= o) {
                    if (i.insertInner(e, t, r),
                    i.lines && 50 < i.lines.length) {
                        for (var l = i.lines.length % 25 + 25, s = l; s < i.lines.length; ) {
                            var a = new So(i.lines.slice(s, s += 25));
                            i.height -= a.height,
                            this.children.splice(++n, 0, a),
                            a.parent = this
                        }
                        i.lines = i.lines.slice(0, l),
                        this.maybeSpill()
                    }
                    break
                }
                e -= o
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var e = this;
                do {
                    var t = new Lo(e.children.splice(e.children.length - 5, 5));
                    if (e.parent) {
                        e.size -= t.size,
                        e.height -= t.height;
                        var r = B(e.parent.children, e);
                        e.parent.children.splice(r + 1, 0, t)
                    } else {
                        var n = new Lo(e.children);
                        (n.parent = e).children = [n, t],
                        e = n
                    }
                    t.parent = e.parent
                } while (10 < e.children.length);
                e.parent.maybeSpill()
            }
        },
        iterN: function(e, t, r) {
            for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n]
                  , o = i.chunkSize();
                if (e < o) {
                    var l = Math.min(t, o - e);
                    if (i.iterN(e, l, r))
                        return !0;
                    if (0 == (t -= l))
                        break;
                    e = 0
                } else
                    e -= o
            }
        }
    };
    function ko(e, t, r) {
        if (r)
            for (var n in r)
                r.hasOwnProperty(n) && (this[n] = r[n]);
        this.doc = e,
        this.node = t
    }
    function To(e, t, r) {
        Zt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Fn(e, r)
    }
    ko.prototype.clear = function() {
        var e = this.doc.cm
          , t = this.line.widgets
          , r = this.line
          , n = it(r);
        if (null != n && t) {
            for (var i = 0; i < t.length; ++i)
                t[i] == this && t.splice(i--, 1);
            t.length || (r.widgets = null);
            var o = Tr(this);
            nt(r, Math.max(0, r.height - o)),
            e && (ri(e, function() {
                To(e, r, -o),
                vn(e, n, "widget")
            }),
            pr(e, "lineWidgetCleared", e, this, n))
        }
    }
    ,
    ko.prototype.changed = function() {
        var e = this
          , t = this.height
          , r = this.doc.cm
          , n = this.line;
        this.height = null;
        var i = Tr(this) - t;
        i && ($t(this.doc, n) || nt(n, n.height + i),
        r && ri(r, function() {
            r.curOp.forceUpdate = !0,
            To(r, n, i),
            pr(r, "lineWidgetChanged", r, e, it(n))
        }))
    }
    ,
    Me(ko);
    var Mo = 0
      , No = function(e, t) {
        this.lines = [],
        this.type = t,
        this.doc = e,
        this.id = ++Mo
    };
    function Oo(t, r, n, e, i) {
        if (e && e.shared)
            return function(e, r, n, i, o) {
                (i = I(i)).shared = !1;
                var l = [Oo(e, r, n, i, o)]
                  , s = l[0]
                  , a = i.widgetNode;
                return Ii(e, function(e) {
                    a && (i.widgetNode = a.cloneNode(!0)),
                    l.push(Oo(e, gt(e, r), gt(e, n), i, o));
                    for (var t = 0; t < e.linked.length; ++t)
                        if (e.linked[t].isParent)
                            return;
                    s = $(l)
                }),
                new Ao(l,s)
            }(t, r, n, e, i);
        if (t.cm && !t.cm.curOp)
            return ni(t.cm, Oo)(t, r, n, e, i);
        var o = new No(t,i)
          , l = ut(r, n);
        if (e && I(e, o, !1),
        0 < l || 0 == l && !1 !== o.clearWhenEmpty)
            return o;
        if (o.replacedWith && (o.collapsed = !0,
        o.widgetNode = O("span", [o.replacedWith], "CodeMirror-widget"),
        e.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"),
        e.insertLeft && (o.widgetNode.insertLeft = !0)),
        o.collapsed) {
            if (jt(t, r.line, r, n, o) || r.line != n.line && jt(t, n.line, r, n, o))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            At = !0
        }
        o.addToHistory && Vi(t, {
            from: r,
            to: n,
            origin: "markText"
        }, t.sel, NaN);
        var s, a = r.line, u = t.cm;
        if (t.iter(a, n.line + 1, function(e) {
            u && o.collapsed && !u.options.lineWrapping && Xt(e) == u.display.maxLine && (s = !0),
            o.collapsed && a != r.line && nt(e, 0),
            function(e, t) {
                e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
                t.marker.attachLine(e)
            }(e, new Dt(o,a == r.line ? r.ch : null,a == n.line ? n.ch : null)),
            ++a
        }),
        o.collapsed && t.iter(r.line, n.line + 1, function(e) {
            $t(t, e) && nt(e, 0)
        }),
        o.clearOnEnter && we(o, "beforeCursorEnter", function() {
            return o.clear()
        }),
        o.readOnly && (Ot = !0,
        (t.history.done.length || t.history.undone.length) && t.clearHistory()),
        o.collapsed && (o.id = ++Mo,
        o.atomic = !0),
        u) {
            if (s && (u.curOp.updateMaxLine = !0),
            o.collapsed)
                gn(u, r.line, n.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                for (var c = r.line; c <= n.line; c++)
                    vn(u, c, "text");
            o.atomic && oo(u.doc),
            pr(u, "markerAdded", u, o)
        }
        return o
    }
    No.prototype.clear = function() {
        var e = this;
        if (!this.explicitlyCleared) {
            var t = this.doc.cm
              , r = t && !t.curOp;
            if (r && qn(t),
            Te(this, "clear")) {
                var n = this.find();
                n && pr(this, "clear", n.from, n.to)
            }
            for (var i = null, o = null, l = 0; l < this.lines.length; ++l) {
                var s = e.lines[l]
                  , a = Wt(s.markedSpans, e);
                t && !e.collapsed ? vn(t, it(s), "text") : t && (null != a.to && (o = it(s)),
                null != a.from && (i = it(s))),
                s.markedSpans = Ht(s.markedSpans, a),
                null == a.from && e.collapsed && !$t(e.doc, s) && t && nt(s, sn(t.display))
            }
            if (t && this.collapsed && !t.options.lineWrapping)
                for (var u = 0; u < this.lines.length; ++u) {
                    var c = Xt(e.lines[u])
                      , h = Qt(c);
                    h > t.display.maxLineLength && (t.display.maxLine = c,
                    t.display.maxLineLength = h,
                    t.display.maxLineChanged = !0)
                }
            null != i && t && this.collapsed && gn(t, i, o + 1),
            this.lines.length = 0,
            this.explicitlyCleared = !0,
            this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
            t && oo(t.doc)),
            t && pr(t, "markerCleared", t, this, i, o),
            r && Zn(t),
            this.parent && this.parent.clear()
        }
    }
    ,
    No.prototype.find = function(e, t) {
        var r, n;
        null == e && "bookmark" == this.type && (e = 1);
        for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i]
              , l = Wt(o.markedSpans, this);
            if (null != l.from && (r = at(t ? o : it(o), l.from),
            -1 == e))
                return r;
            if (null != l.to && (n = at(t ? o : it(o), l.to),
            1 == e))
                return n
        }
        return r && {
            from: r,
            to: n
        }
    }
    ,
    No.prototype.changed = function() {
        var o = this
          , l = this.find(-1, !0)
          , s = this
          , a = this.doc.cm;
        l && a && ri(a, function() {
            var e = l.line
              , t = it(l.line)
              , r = Er(a, t);
            if (r && (Vr(r),
            a.curOp.selectionChanged = a.curOp.forceUpdate = !0),
            a.curOp.updateMaxLine = !0,
            !$t(s.doc, e) && null != s.height) {
                var n = s.height;
                s.height = null;
                var i = Tr(s) - n;
                i && nt(e, e.height + i)
            }
            pr(a, "markerChanged", a, o)
        })
    }
    ,
    No.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(e)
    }
    ,
    No.prototype.detachLine = function(e) {
        if (this.lines.splice(B(this.lines, e), 1),
        !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
        }
    }
    ,
    Me(No);
    var Ao = function(e, t) {
        this.markers = e,
        this.primary = t;
        for (var r = 0; r < e.length; ++r)
            e[r].parent = this
    };
    function Do(e) {
        return e.findMarks(at(e.first, 0), e.clipPos(at(e.lastLine())), function(e) {
            return e.parent
        })
    }
    function Wo(o) {
        for (var e = function(e) {
            var t = o[e]
              , r = [t.primary.doc];
            Ii(t.primary.doc, function(e) {
                return r.push(e)
            });
            for (var n = 0; n < t.markers.length; n++) {
                var i = t.markers[n];
                -1 == B(r, i.doc) && (i.parent = null,
                t.markers.splice(n--, 1))
            }
        }, t = 0; t < o.length; t++)
            e(t)
    }
    Ao.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
            pr(this, "clear")
        }
    }
    ,
    Ao.prototype.find = function(e, t) {
        return this.primary.find(e, t)
    }
    ,
    Me(Ao);
    var Ho = 0
      , Fo = function(e, t, r, n, i) {
        if (!(this instanceof Fo))
            return new Fo(e,t,r,n,i);
        null == r && (r = 0),
        Lo.call(this, [new So([new er("",null)])]),
        this.first = r,
        this.scrollTop = this.scrollLeft = 0,
        this.cantEdit = !1,
        this.cleanGeneration = 1,
        this.modeFrontier = this.highlightFrontier = r;
        var o = at(r, 0);
        this.sel = Ni(o),
        this.history = new Bi(null),
        this.id = ++Ho,
        this.modeOption = t,
        this.lineSep = n,
        this.direction = "rtl" == i ? "rtl" : "ltr",
        this.extend = !1,
        "string" == typeof e && (e = this.splitLines(e)),
        Ei(this, {
            from: o,
            to: o,
            text: e
        }),
        ro(this, Ni(o), V)
    };
    Fo.prototype = Q(Lo.prototype, {
        constructor: Fo,
        iter: function(e, t, r) {
            r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function(e, t) {
            for (var r = 0, n = 0; n < t.length; ++n)
                r += t[n].height;
            this.insertInner(e - this.first, t, r)
        },
        remove: function(e, t) {
            this.removeInner(e - this.first, t)
        },
        getValue: function(e) {
            var t = rt(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        setValue: oi(function(e) {
            var t = at(this.first, 0)
              , r = this.first + this.size - 1;
            fo(this, {
                from: t,
                to: at(r, et(this, r).text.length),
                text: this.splitLines(e),
                origin: "setValue",
                full: !0
            }, !0),
            this.cm && En(this.cm, 0, 0),
            ro(this, Ni(t), V)
        }),
        replaceRange: function(e, t, r, n) {
            yo(this, e, t = gt(this, t), r = r ? gt(this, r) : t, n)
        },
        getRange: function(e, t, r) {
            var n = tt(this, gt(this, e), gt(this, t));
            return !1 === r ? n : n.join(r || this.lineSeparator())
        },
        getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text
        },
        getLineHandle: function(e) {
            if (lt(this, e))
                return et(this, e)
        },
        getLineNumber: function(e) {
            return it(e)
        },
        getLineHandleVisualStart: function(e) {
            return "number" == typeof e && (e = et(this, e)),
            Xt(e)
        },
        lineCount: function() {
            return this.size
        },
        firstLine: function() {
            return this.first
        },
        lastLine: function() {
            return this.first + this.size - 1
        },
        clipPos: function(e) {
            return gt(this, e)
        },
        getCursor: function(e) {
            var t = this.sel.primary();
            return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
        },
        listSelections: function() {
            return this.sel.ranges
        },
        somethingSelected: function() {
            return this.sel.somethingSelected()
        },
        setCursor: oi(function(e, t, r) {
            eo(this, gt(this, "number" == typeof e ? at(e, t || 0) : e), null, r)
        }),
        setSelection: oi(function(e, t, r) {
            eo(this, gt(this, e), gt(this, t || e), r)
        }),
        extendSelection: oi(function(e, t, r) {
            Zi(this, gt(this, e), t && gt(this, t), r)
        }),
        extendSelections: oi(function(e, t) {
            Qi(this, vt(this, e), t)
        }),
        extendSelectionsBy: oi(function(e, t) {
            Qi(this, vt(this, q(this.sel.ranges, e)), t)
        }),
        setSelections: oi(function(e, t, r) {
            if (e.length) {
                for (var n = [], i = 0; i < e.length; i++)
                    n[i] = new Ti(gt(this, e[i].anchor),gt(this, e[i].head));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                ro(this, Mi(this.cm, n, t), r)
            }
        }),
        addSelection: oi(function(e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new Ti(gt(this, e),gt(this, t || e))),
            ro(this, Mi(this.cm, n, n.length - 1), r)
        }),
        getSelection: function(e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
                var i = tt(this, r[n].from(), r[n].to());
                t = t ? t.concat(i) : i
            }
            return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        getSelections: function(e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                var i = tt(this, r[n].from(), r[n].to());
                !1 !== e && (i = i.join(e || this.lineSeparator())),
                t[n] = i
            }
            return t
        },
        replaceSelection: function(e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++)
                n[i] = e;
            this.replaceSelections(n, t, r || "+input")
        },
        replaceSelections: oi(function(e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var l = i.ranges[o];
                n[o] = {
                    from: l.from(),
                    to: l.to(),
                    text: this.splitLines(e[o]),
                    origin: r
                }
            }
            for (var s = t && "end" != t && function(e, t, r) {
                for (var n = [], i = at(e.first, 0), o = i, l = 0; l < t.length; l++) {
                    var s = t[l]
                      , a = Wi(s.from, i, o)
                      , u = Wi(Oi(s), i, o);
                    if (i = s.to,
                    o = u,
                    "around" == r) {
                        var c = e.sel.ranges[l]
                          , h = ut(c.head, c.anchor) < 0;
                        n[l] = new Ti(h ? u : a,h ? a : u)
                    } else
                        n[l] = new Ti(a,a)
                }
                return new ki(n,e.sel.primIndex)
            }(this, n, t), a = n.length - 1; 0 <= a; a--)
                fo(this, n[a]);
            s ? to(this, s) : this.cm && Pn(this.cm)
        }),
        undo: oi(function() {
            go(this, "undo")
        }),
        redo: oi(function() {
            go(this, "redo")
        }),
        undoSelection: oi(function() {
            go(this, "undo", !0)
        }),
        redoSelection: oi(function() {
            go(this, "redo", !0)
        }),
        setExtending: function(e) {
            this.extend = e
        },
        getExtending: function() {
            return this.extend
        },
        historySize: function() {
            for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++)
                e.done[n].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++)
                e.undone[i].ranges || ++r;
            return {
                undo: t,
                redo: r
            }
        },
        clearHistory: function() {
            this.history = new Bi(this.history.maxGeneration)
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
        },
        isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function() {
            return {
                done: $i(this.history.done),
                undone: $i(this.history.undone)
            }
        },
        setHistory: function(e) {
            var t = this.history = new Bi(this.history.maxGeneration);
            t.done = $i(e.done.slice(0), null, !0),
            t.undone = $i(e.undone.slice(0), null, !0)
        },
        setGutterMarker: oi(function(e, r, n) {
            return Co(this, e, "gutter", function(e) {
                var t = e.gutterMarkers || (e.gutterMarkers = {});
                return !(t[r] = n) && re(t) && (e.gutterMarkers = null),
                !0
            })
        }),
        clearGutter: oi(function(t) {
            var r = this;
            this.iter(function(e) {
                e.gutterMarkers && e.gutterMarkers[t] && Co(r, e, "gutter", function() {
                    return e.gutterMarkers[t] = null,
                    re(e.gutterMarkers) && (e.gutterMarkers = null),
                    !0
                })
            })
        }),
        lineInfo: function(e) {
            var t;
            if ("number" == typeof e) {
                if (!lt(this, e))
                    return null;
                if (!(e = et(this, t = e)))
                    return null
            } else if (null == (t = it(e)))
                return null;
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        },
        addLineClass: oi(function(e, r, n) {
            return Co(this, e, "gutter" == r ? "gutter" : "class", function(e) {
                var t = "text" == r ? "textClass" : "background" == r ? "bgClass" : "gutter" == r ? "gutterClass" : "wrapClass";
                if (e[t]) {
                    if (L(n).test(e[t]))
                        return !1;
                    e[t] += " " + n
                } else
                    e[t] = n;
                return !0
            })
        }),
        removeLineClass: oi(function(e, o, l) {
            return Co(this, e, "gutter" == o ? "gutter" : "class", function(e) {
                var t = "text" == o ? "textClass" : "background" == o ? "bgClass" : "gutter" == o ? "gutterClass" : "wrapClass"
                  , r = e[t];
                if (!r)
                    return !1;
                if (null == l)
                    e[t] = null;
                else {
                    var n = r.match(L(l));
                    if (!n)
                        return !1;
                    var i = n.index + n[0].length;
                    e[t] = r.slice(0, n.index) + (n.index && i != r.length ? " " : "") + r.slice(i) || null
                }
                return !0
            })
        }),
        addLineWidget: oi(function(e, t, r) {
            return function(n, e, t, r) {
                var i = new ko(n,t,r)
                  , o = n.cm;
                return o && i.noHScroll && (o.display.alignWidgets = !0),
                Co(n, e, "widget", function(e) {
                    var t = e.widgets || (e.widgets = []);
                    if (null == i.insertAt ? t.push(i) : t.splice(Math.min(t.length - 1, Math.max(0, i.insertAt)), 0, i),
                    i.line = e,
                    o && !$t(n, e)) {
                        var r = Zt(e) < n.scrollTop;
                        nt(e, e.height + Tr(i)),
                        r && Fn(o, i.height),
                        o.curOp.forceUpdate = !0
                    }
                    return !0
                }),
                o && pr(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : it(e)),
                i
            }(this, e, t, r)
        }),
        removeLineWidget: function(e) {
            e.clear()
        },
        markText: function(e, t, r) {
            return Oo(this, gt(this, e), gt(this, t), r, r && r.type || "range")
        },
        setBookmark: function(e, t) {
            var r = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents
            };
            return Oo(this, e = gt(this, e), e, r, "bookmark")
        },
        findMarksAt: function(e) {
            var t = []
              , r = et(this, (e = gt(this, e)).line).markedSpans;
            if (r)
                for (var n = 0; n < r.length; ++n) {
                    var i = r[n];
                    (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
            return t
        },
        findMarks: function(i, o, l) {
            i = gt(this, i),
            o = gt(this, o);
            var s = []
              , a = i.line;
            return this.iter(i.line, o.line + 1, function(e) {
                var t = e.markedSpans;
                if (t)
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        null != n.to && a == i.line && i.ch >= n.to || null == n.from && a != i.line || null != n.from && a == o.line && n.from >= o.ch || l && !l(n.marker) || s.push(n.marker.parent || n.marker)
                    }
                ++a
            }),
            s
        },
        getAllMarks: function() {
            var n = [];
            return this.iter(function(e) {
                var t = e.markedSpans;
                if (t)
                    for (var r = 0; r < t.length; ++r)
                        null != t[r].from && n.push(t[r].marker)
            }),
            n
        },
        posFromIndex: function(r) {
            var n, i = this.first, o = this.lineSeparator().length;
            return this.iter(function(e) {
                var t = e.text.length + o;
                if (r < t)
                    return n = r,
                    !0;
                r -= t,
                ++i
            }),
            gt(this, at(i, n))
        },
        indexFromPos: function(e) {
            var t = (e = gt(this, e)).ch;
            if (e.line < this.first || e.ch < 0)
                return 0;
            var r = this.lineSeparator().length;
            return this.iter(this.first, e.line, function(e) {
                t += e.text.length + r
            }),
            t
        },
        copy: function(e) {
            var t = new Fo(rt(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
            return t.scrollTop = this.scrollTop,
            t.scrollLeft = this.scrollLeft,
            t.sel = this.sel,
            t.extend = !1,
            e && (t.history.undoDepth = this.history.undoDepth,
            t.setHistory(this.getHistory())),
            t
        },
        linkedDoc: function(e) {
            e = e || {};
            var t = this.first
              , r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < r && (r = e.to);
            var n = new Fo(rt(this, t, r),e.mode || this.modeOption,t,this.lineSep,this.direction);
            return e.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
                doc: n,
                sharedHist: e.sharedHist
            }),
            n.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: e.sharedHist
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r]
                      , i = n.find()
                      , o = e.clipPos(i.from)
                      , l = e.clipPos(i.to);
                    if (ut(o, l)) {
                        var s = Oo(e, o, l, n.primary, n.primary.type);
                        n.markers.push(s),
                        s.parent = n
                    }
                }
            }(n, Do(this)),
            n
        },
        unlinkDoc: function(e) {
            if (e instanceof Al && (e = e.doc),
            this.linked)
                for (var t = 0; t < this.linked.length; ++t) {
                    if (this.linked[t].doc == e) {
                        this.linked.splice(t, 1),
                        e.unlinkDoc(this),
                        Wo(Do(this));
                        break
                    }
                }
            if (e.history == this.history) {
                var r = [e.id];
                Ii(e, function(e) {
                    return r.push(e.id)
                }, !0),
                e.history = new Bi(null),
                e.history.done = $i(this.history.done, r),
                e.history.undone = $i(this.history.undone, r)
            }
        },
        iterLinkedDocs: function(e) {
            Ii(this, e)
        },
        getMode: function() {
            return this.mode
        },
        getEditor: function() {
            return this.cm
        },
        splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : Be(e)
        },
        lineSeparator: function() {
            return this.lineSep || "\n"
        },
        setDirection: oi(function(e) {
            "rtl" != e && (e = "ltr"),
            e != this.direction && (this.direction = e,
            this.iter(function(e) {
                return e.order = null
            }),
            this.cm && function(e) {
                ri(e, function() {
                    Ri(e),
                    gn(e)
                })
            }(this.cm))
        })
    }),
    Fo.prototype.eachLine = Fo.prototype.iter;
    var Po = 0;
    function Eo(e) {
        var i = this;
        if (Io(i),
        !Le(i, e) && !Mr(i.display, e)) {
            Ne(e),
            x && (Po = +new Date);
            var o = dn(i, e, !0)
              , t = e.dataTransfer.files;
            if (o && !i.isReadOnly())
                if (t && t.length && window.FileReader && window.File)
                    for (var l = t.length, s = Array(l), a = 0, r = function(e, r) {
                        if (!i.options.allowDropFileTypes || -1 != B(i.options.allowDropFileTypes, e.type)) {
                            var n = new FileReader;
                            n.onload = ni(i, function() {
                                var e = n.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                                s[r] = e,
                                ++a == l) {
                                    var t = {
                                        from: o = gt(i.doc, o),
                                        to: o,
                                        text: i.doc.splitLines(s.join(i.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    fo(i.doc, t),
                                    to(i.doc, Ni(o, Oi(t)))
                                }
                            }),
                            n.readAsText(e)
                        }
                    }, n = 0; n < l; ++n)
                        r(t[n], n);
                else {
                    if (i.state.draggingText && -1 < i.doc.sel.contains(o))
                        return i.state.draggingText(e),
                        void setTimeout(function() {
                            return i.display.input.focus()
                        }, 20);
                    try {
                        var u = e.dataTransfer.getData("Text");
                        if (u) {
                            var c;
                            if (i.state.draggingText && !i.state.draggingText.copy && (c = i.listSelections()),
                            no(i.doc, Ni(o, o)),
                            c)
                                for (var h = 0; h < c.length; ++h)
                                    yo(i.doc, "", c[h].anchor, c[h].head, "drag");
                            i.replaceSelection(u, "around", "paste"),
                            i.display.input.focus()
                        }
                    } catch (e) {}
                }
        }
    }
    function Io(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor),
        e.display.dragCursor = null)
    }
    function zo(t) {
        if (document.getElementsByClassName) {
            for (var e = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < e.length; n++) {
                var i = e[n].CodeMirror;
                i && r.push(i)
            }
            r.length && r[0].operation(function() {
                for (var e = 0; e < r.length; e++)
                    t(r[e])
            })
        }
    }
    var Ro = !1;
    function Bo() {
        Ro || (function() {
            var e;
            we(window, "resize", function() {
                null == e && (e = setTimeout(function() {
                    e = null,
                    zo(Go)
                }, 100))
            }),
            we(window, "blur", function() {
                return zo(On)
            })
        }(),
        Ro = !0)
    }
    function Go(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
        t.scrollbarsClipped = !1,
        e.setSize()
    }
    for (var Uo = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    }, Vo = 0; Vo < 10; Vo++)
        Uo[Vo + 48] = Uo[Vo + 96] = String(Vo);
    for (var Ko = 65; Ko <= 90; Ko++)
        Uo[Ko] = String.fromCharCode(Ko);
    for (var jo = 1; jo <= 12; jo++)
        Uo[jo + 111] = Uo[jo + 63235] = "F" + jo;
    var Xo = {};
    function Yo(e) {
        var t, r, n, i, o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var l = 0; l < o.length - 1; l++) {
            var s = o[l];
            if (/^(cmd|meta|m)$/i.test(s))
                i = !0;
            else if (/^a(lt)?$/i.test(s))
                t = !0;
            else if (/^(c|ctrl|control)$/i.test(s))
                r = !0;
            else {
                if (!/^s(hift)?$/i.test(s))
                    throw new Error("Unrecognized modifier name: " + s);
                n = !0
            }
        }
        return t && (e = "Alt-" + e),
        r && (e = "Ctrl-" + e),
        i && (e = "Cmd-" + e),
        n && (e = "Shift-" + e),
        e
    }
    function _o(e) {
        var t = {};
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var n = e[r];
                if (/^(name|fallthrough|(de|at)tach)$/.test(r))
                    continue;
                if ("..." == n) {
                    delete e[r];
                    continue
                }
                for (var i = q(r.split(" "), Yo), o = 0; o < i.length; o++) {
                    var l = void 0
                      , s = void 0;
                    l = o == i.length - 1 ? (s = i.join(" "),
                    n) : (s = i.slice(0, o + 1).join(" "),
                    "...");
                    var a = t[s];
                    if (a) {
                        if (a != l)
                            throw new Error("Inconsistent bindings for " + s)
                    } else
                        t[s] = l
                }
                delete e[r]
            }
        for (var u in t)
            e[u] = t[u];
        return e
    }
    function $o(e, t, r, n) {
        var i = (t = Jo(t)).call ? t.call(e, n) : t[e];
        if (!1 === i)
            return "nothing";
        if ("..." === i)
            return "multi";
        if (null != i && r(i))
            return "handled";
        if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
                return $o(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
                var l = $o(e, t.fallthrough[o], r, n);
                if (l)
                    return l
            }
        }
    }
    function qo(e) {
        var t = "string" == typeof e ? e : Uo[e.keyCode];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }
    function Zo(e, t, r) {
        var n = e;
        return t.altKey && "Alt" != n && (e = "Alt-" + e),
        (y ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
        (y ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
        !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
        e
    }
    function Qo(e, t) {
        if (v && 34 == e.keyCode && e.char)
            return !1;
        var r = Uo[e.keyCode];
        return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code),
        Zo(r, e, t))
    }
    function Jo(e) {
        return "string" == typeof e ? Xo[e] : e
    }
    function el(t, e) {
        for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = e(r[i]); n.length && ut(o.from, $(n).to) <= 0; ) {
                var l = n.pop();
                if (ut(l.from, o.from) < 0) {
                    o.from = l.from;
                    break
                }
            }
            n.push(o)
        }
        ri(t, function() {
            for (var e = n.length - 1; 0 <= e; e--)
                yo(t.doc, "", n[e].from, n[e].to, "+delete");
            Pn(t)
        })
    }
    function tl(e, t, r) {
        var n = oe(e.text, t + r, r);
        return n < 0 || n > e.text.length ? null : n
    }
    function rl(e, t, r) {
        var n = tl(e, t.ch, r);
        return null == n ? null : new at(t.line,n,r < 0 ? "after" : "before")
    }
    function nl(e, t, r, n, i) {
        if (e) {
            var o = ye(r, t.doc.direction);
            if (o) {
                var l, s = i < 0 ? $(o) : o[0], a = i < 0 == (1 == s.level) ? "after" : "before";
                if (0 < s.level || "rtl" == t.doc.direction) {
                    var u = Ir(t, r);
                    l = i < 0 ? r.text.length - 1 : 0;
                    var c = zr(t, u, l).top;
                    l = le(function(e) {
                        return zr(t, u, e).top == c
                    }, i < 0 == (1 == s.level) ? s.from : s.to - 1, l),
                    "before" == a && (l = tl(r, l, 1))
                } else
                    l = i < 0 ? s.to : s.from;
                return new at(n,l,a)
            }
        }
        return new at(n,i < 0 ? r.text.length : 0,i < 0 ? "before" : "after")
    }
    Xo.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    },
    Xo.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    },
    Xo.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
    },
    Xo.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    },
    Xo.default = w ? Xo.macDefault : Xo.pcDefault;
    var il = {
        selectAll: co,
        singleSelection: function(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V)
        },
        killLine: function(r) {
            return el(r, function(e) {
                if (e.empty()) {
                    var t = et(r.doc, e.head.line).text.length;
                    return e.head.ch == t && e.head.line < r.lastLine() ? {
                        from: e.head,
                        to: at(e.head.line + 1, 0)
                    } : {
                        from: e.head,
                        to: at(e.head.line, t)
                    }
                }
                return {
                    from: e.from(),
                    to: e.to()
                }
            })
        },
        deleteLine: function(t) {
            return el(t, function(e) {
                return {
                    from: at(e.from().line, 0),
                    to: gt(t.doc, at(e.to().line + 1, 0))
                }
            })
        },
        delLineLeft: function(e) {
            return el(e, function(e) {
                return {
                    from: at(e.from().line, 0),
                    to: e.from()
                }
            })
        },
        delWrappedLineLeft: function(r) {
            return el(r, function(e) {
                var t = r.charCoords(e.head, "div").top + 5;
                return {
                    from: r.coordsChar({
                        left: 0,
                        top: t
                    }, "div"),
                    to: e.from()
                }
            })
        },
        delWrappedLineRight: function(n) {
            return el(n, function(e) {
                var t = n.charCoords(e.head, "div").top + 5
                  , r = n.coordsChar({
                    left: n.display.lineDiv.offsetWidth + 100,
                    top: t
                }, "div");
                return {
                    from: e.from(),
                    to: r
                }
            })
        },
        undo: function(e) {
            return e.undo()
        },
        redo: function(e) {
            return e.redo()
        },
        undoSelection: function(e) {
            return e.undoSelection()
        },
        redoSelection: function(e) {
            return e.redoSelection()
        },
        goDocStart: function(e) {
            return e.extendSelection(at(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
            return e.extendSelection(at(e.lastLine()))
        },
        goLineStart: function(t) {
            return t.extendSelectionsBy(function(e) {
                return ol(t, e.head.line)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineStartSmart: function(t) {
            return t.extendSelectionsBy(function(e) {
                return ll(t, e.head)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineEnd: function(t) {
            return t.extendSelectionsBy(function(e) {
                return function(e, t) {
                    var r = et(e.doc, t)
                      , n = function(e) {
                        for (var t; t = Vt(e); )
                            e = t.find(1, !0).line;
                        return e
                    }(r);
                    n != r && (t = it(n));
                    return nl(!0, e, r, t, -1)
                }(t, e.head.line)
            }, {
                origin: "+move",
                bias: -1
            })
        },
        goLineRight: function(r) {
            return r.extendSelectionsBy(function(e) {
                var t = r.cursorCoords(e.head, "div").top + 5;
                return r.coordsChar({
                    left: r.display.lineDiv.offsetWidth + 100,
                    top: t
                }, "div")
            }, j)
        },
        goLineLeft: function(r) {
            return r.extendSelectionsBy(function(e) {
                var t = r.cursorCoords(e.head, "div").top + 5;
                return r.coordsChar({
                    left: 0,
                    top: t
                }, "div")
            }, j)
        },
        goLineLeftSmart: function(n) {
            return n.extendSelectionsBy(function(e) {
                var t = n.cursorCoords(e.head, "div").top + 5
                  , r = n.coordsChar({
                    left: 0,
                    top: t
                }, "div");
                return r.ch < n.getLine(r.line).search(/\S/) ? ll(n, e.head) : r
            }, j)
        },
        goLineUp: function(e) {
            return e.moveV(-1, "line")
        },
        goLineDown: function(e) {
            return e.moveV(1, "line")
        },
        goPageUp: function(e) {
            return e.moveV(-1, "page")
        },
        goPageDown: function(e) {
            return e.moveV(1, "page")
        },
        goCharLeft: function(e) {
            return e.moveH(-1, "char")
        },
        goCharRight: function(e) {
            return e.moveH(1, "char")
        },
        goColumnLeft: function(e) {
            return e.moveH(-1, "column")
        },
        goColumnRight: function(e) {
            return e.moveH(1, "column")
        },
        goWordLeft: function(e) {
            return e.moveH(-1, "word")
        },
        goGroupRight: function(e) {
            return e.moveH(1, "group")
        },
        goGroupLeft: function(e) {
            return e.moveH(-1, "group")
        },
        goWordRight: function(e) {
            return e.moveH(1, "word")
        },
        delCharBefore: function(e) {
            return e.deleteH(-1, "char")
        },
        delCharAfter: function(e) {
            return e.deleteH(1, "char")
        },
        delWordBefore: function(e) {
            return e.deleteH(-1, "word")
        },
        delWordAfter: function(e) {
            return e.deleteH(1, "word")
        },
        delGroupBefore: function(e) {
            return e.deleteH(-1, "group")
        },
        delGroupAfter: function(e) {
            return e.deleteH(1, "group")
        },
        indentAuto: function(e) {
            return e.indentSelection("smart")
        },
        indentMore: function(e) {
            return e.indentSelection("add")
        },
        indentLess: function(e) {
            return e.indentSelection("subtract")
        },
        insertTab: function(e) {
            return e.replaceSelection("\t")
        },
        insertSoftTab: function(e) {
            for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                var o = r[i].from()
                  , l = z(e.getLine(o.line), o.ch, n);
                t.push(_(n - l % n))
            }
            e.replaceSelections(t)
        },
        defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        },
        transposeChars: function(l) {
            return ri(l, function() {
                for (var e = l.listSelections(), t = [], r = 0; r < e.length; r++)
                    if (e[r].empty()) {
                        var n = e[r].head
                          , i = et(l.doc, n.line).text;
                        if (i)
                            if (n.ch == i.length && (n = new at(n.line,n.ch - 1)),
                            0 < n.ch)
                                n = new at(n.line,n.ch + 1),
                                l.replaceRange(i.charAt(n.ch - 1) + i.charAt(n.ch - 2), at(n.line, n.ch - 2), n, "+transpose");
                            else if (n.line > l.doc.first) {
                                var o = et(l.doc, n.line - 1).text;
                                o && (n = new at(n.line,1),
                                l.replaceRange(i.charAt(0) + l.doc.lineSeparator() + o.charAt(o.length - 1), at(n.line - 1, o.length - 1), n, "+transpose"))
                            }
                        t.push(new Ti(n,n))
                    }
                l.setSelections(t)
            })
        },
        newlineAndIndent: function(n) {
            return ri(n, function() {
                for (var e = n.listSelections(), t = e.length - 1; 0 <= t; t--)
                    n.replaceRange(n.doc.lineSeparator(), e[t].anchor, e[t].head, "+input");
                e = n.listSelections();
                for (var r = 0; r < e.length; r++)
                    n.indentLine(e[r].from().line, null, !0);
                Pn(n)
            })
        },
        openLine: function(e) {
            return e.replaceSelection("\n", "start")
        },
        toggleOverwrite: function(e) {
            return e.toggleOverwrite()
        }
    };
    function ol(e, t) {
        var r = et(e.doc, t)
          , n = Xt(r);
        return n != r && (t = it(n)),
        nl(!0, e, n, t, 1)
    }
    function ll(e, t) {
        var r = ol(e, t.line)
          , n = et(e.doc, r.line)
          , i = ye(n, e.doc.direction);
        if (i && 0 != i[0].level)
            return r;
        var o = Math.max(0, n.text.search(/\S/))
          , l = t.line == r.line && t.ch <= o && t.ch;
        return at(r.line, l ? 0 : o, r.sticky)
    }
    function sl(e, t, r) {
        if ("string" == typeof t && !(t = il[t]))
            return !1;
        e.display.input.ensurePolled();
        var n = e.display.shift
          , i = !1;
        try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
            r && (e.display.shift = !1),
            i = t(e) != U
        } finally {
            e.display.shift = n,
            e.state.suppressEdits = !1
        }
        return i
    }
    var al = new R;
    function ul(e, t, r, n) {
        var i = e.state.keySeq;
        if (i) {
            if (qo(t))
                return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : al.set(50, function() {
                e.state.keySeq == i && (e.state.keySeq = null,
                e.display.input.reset())
            }),
            cl(e, i + " " + t, r, n))
                return !0
        }
        return cl(e, t, r, n)
    }
    function cl(e, t, r, n) {
        var i = function(e, t, r) {
            for (var n = 0; n < e.state.keyMaps.length; n++) {
                var i = $o(t, e.state.keyMaps[n], r, e);
                if (i)
                    return i
            }
            return e.options.extraKeys && $o(t, e.options.extraKeys, r, e) || $o(t, e.options.keyMap, r, e)
        }(e, t, n);
        return "multi" == i && (e.state.keySeq = t),
        "handled" == i && pr(e, "keyHandled", e, t, r),
        "handled" != i && "multi" != i || (Ne(r),
        kn(e)),
        !!i
    }
    function hl(t, e) {
        var r = Qo(e, !0);
        return !!r && (e.shiftKey && !t.state.keySeq ? ul(t, "Shift-" + r, e, function(e) {
            return sl(t, e, !0)
        }) || ul(t, r, e, function(e) {
            if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                return sl(t, e)
        }) : ul(t, r, e, function(e) {
            return sl(t, e)
        }))
    }
    var fl = null;
    function dl(e) {
        var t = this;
        if (t.curOp.focus = W(),
        !Le(t, e)) {
            x && C < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var r = e.keyCode;
            t.display.shift = 16 == r || e.shiftKey;
            var n = hl(t, e);
            v && (fl = n ? r : null,
            !n && 88 == r && !Ue && (w ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
            18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function(e) {
                var t = e.display.lineDiv;
                function r(e) {
                    18 != e.keyCode && e.altKey || (T(t, "CodeMirror-crosshair"),
                    Ce(document, "keyup", r),
                    Ce(document, "mouseover", r))
                }
                H(t, "CodeMirror-crosshair"),
                we(document, "keyup", r),
                we(document, "mouseover", r)
            }(t)
        }
    }
    function pl(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1),
        Le(this, e)
    }
    function gl(e) {
        var t = this;
        if (!(Mr(t.display, e) || Le(t, e) || e.ctrlKey && !e.altKey || w && e.metaKey)) {
            var r = e.keyCode
              , n = e.charCode;
            if (v && r == fl)
                return fl = null,
                void Ne(e);
            if (!v || e.which && !(e.which < 10) || !hl(t, e)) {
                var i = String.fromCharCode(null == n ? r : n);
                "\b" == i || function(t, e, r) {
                    return ul(t, "'" + r + "'", e, function(e) {
                        return sl(t, e, !0)
                    })
                }(t, e, i) || t.display.input.onKeyPress(e)
            }
        }
    }
    var vl, ml, yl = function(e, t, r) {
        this.time = e,
        this.pos = t,
        this.button = r
    };
    function bl(e) {
        var t = this
          , r = t.display;
        if (!(Le(t, e) || r.activeTouch && r.input.supportsTouch()))
            if (r.input.ensurePolled(),
            r.shift = e.shiftKey,
            Mr(r, e))
                b || (r.scroller.draggable = !1,
                setTimeout(function() {
                    return r.scroller.draggable = !0
                }, 100));
            else if (!Cl(t, e)) {
                var n = dn(t, e)
                  , i = He(e)
                  , o = n ? function(e, t) {
                    var r = +new Date;
                    return ml && ml.compare(r, e, t) ? (vl = ml = null,
                    "triple") : vl && vl.compare(r, e, t) ? (ml = new yl(r,e,t),
                    vl = null,
                    "double") : (vl = new yl(r,e,t),
                    ml = null,
                    "single")
                }(n, i) : "single";
                window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                n && function(r, e, n, t, i) {
                    var o = "Click";
                    "double" == t ? o = "Double" + o : "triple" == t && (o = "Triple" + o);
                    return ul(r, Zo(o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o, i), i, function(e) {
                        if ("string" == typeof e && (e = il[e]),
                        !e)
                            return !1;
                        var t = !1;
                        try {
                            r.isReadOnly() && (r.state.suppressEdits = !0),
                            t = e(r, n) != U
                        } finally {
                            r.state.suppressEdits = !1
                        }
                        return t
                    })
                }(t, i, n, o, e) || (1 == i ? n ? function(e, t, r, n) {
                    x ? setTimeout(E(Tn, e), 0) : e.curOp.focus = W();
                    var i, o = function(e, t, r) {
                        var n = e.getOption("configureMouse")
                          , i = n ? n(e, t, r) : {};
                        if (null == i.unit) {
                            var o = d ? r.shiftKey && r.metaKey : r.altKey;
                            i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                        }
                        null != i.extend && !e.doc.extend || (i.extend = e.doc.extend || r.shiftKey);
                        null == i.addNew && (i.addNew = w ? r.metaKey : r.ctrlKey);
                        null == i.moveOnDrag && (i.moveOnDrag = !(w ? r.altKey : r.ctrlKey));
                        return i
                    }(e, r, n), l = e.doc.sel;
                    e.options.dragDrop && Ee && !e.isReadOnly() && "single" == r && -1 < (i = l.contains(t)) && (ut((i = l.ranges[i]).from(), t) < 0 || 0 < t.xRel) && (0 < ut(i.to(), t) || t.xRel < 0) ? function(t, r, n, i) {
                        var o = t.display
                          , l = !1
                          , s = ni(t, function(e) {
                            b && (o.scroller.draggable = !1),
                            t.state.draggingText = !1,
                            Ce(o.wrapper.ownerDocument, "mouseup", s),
                            Ce(o.wrapper.ownerDocument, "mousemove", a),
                            Ce(o.scroller, "dragstart", u),
                            Ce(o.scroller, "drop", s),
                            l || (Ne(e),
                            i.addNew || Zi(t.doc, n, null, null, i.extend),
                            b || x && 9 == C ? setTimeout(function() {
                                o.wrapper.ownerDocument.body.focus(),
                                o.input.focus()
                            }, 20) : o.input.focus())
                        })
                          , a = function(e) {
                            l = l || 10 <= Math.abs(r.clientX - e.clientX) + Math.abs(r.clientY - e.clientY)
                        }
                          , u = function() {
                            return l = !0
                        };
                        b && (o.scroller.draggable = !0);
                        (t.state.draggingText = s).copy = !i.moveOnDrag,
                        o.scroller.dragDrop && o.scroller.dragDrop();
                        we(o.wrapper.ownerDocument, "mouseup", s),
                        we(o.wrapper.ownerDocument, "mousemove", a),
                        we(o.scroller, "dragstart", u),
                        we(o.scroller, "drop", s),
                        Mn(t),
                        setTimeout(function() {
                            return o.input.focus()
                        }, 20)
                    }(e, n, t, o) : function(v, e, m, y) {
                        var l = v.display
                          , b = v.doc;
                        Ne(e);
                        var w, x, C = b.sel, t = C.ranges;
                        y.addNew && !y.extend ? (x = b.sel.contains(m),
                        w = -1 < x ? t[x] : new Ti(m,m)) : (w = b.sel.primary(),
                        x = b.sel.primIndex);
                        if ("rectangle" == y.unit)
                            y.addNew || (w = new Ti(m,m)),
                            m = dn(v, e, !0, !0),
                            x = -1;
                        else {
                            var r = wl(v, m, y.unit);
                            w = y.extend ? qi(w, r.anchor, r.head, y.extend) : r
                        }
                        y.addNew ? -1 == x ? (x = t.length,
                        ro(b, Mi(v, t.concat([w]), x), {
                            scroll: !1,
                            origin: "*mouse"
                        })) : 1 < t.length && t[x].empty() && "char" == y.unit && !y.extend ? (ro(b, Mi(v, t.slice(0, x).concat(t.slice(x + 1)), 0), {
                            scroll: !1,
                            origin: "*mouse"
                        }),
                        C = b.sel) : Ji(b, x, w, K) : (ro(b, new ki([w],x = 0), K),
                        C = b.sel);
                        var S = m;
                        function s(e) {
                            if (0 != ut(S, e))
                                if (S = e,
                                "rectangle" == y.unit) {
                                    for (var t = [], r = v.options.tabSize, n = z(et(b, m.line).text, m.ch, r), i = z(et(b, e.line).text, e.ch, r), o = Math.min(n, i), l = Math.max(n, i), s = Math.min(m.line, e.line), a = Math.min(v.lastLine(), Math.max(m.line, e.line)); s <= a; s++) {
                                        var u = et(b, s).text
                                          , c = X(u, o, r);
                                        o == l ? t.push(new Ti(at(s, c),at(s, c))) : u.length > c && t.push(new Ti(at(s, c),at(s, X(u, l, r))))
                                    }
                                    t.length || t.push(new Ti(m,m)),
                                    ro(b, Mi(v, C.ranges.slice(0, x).concat(t), x), {
                                        origin: "*mouse",
                                        scroll: !1
                                    }),
                                    v.scrollIntoView(e)
                                } else {
                                    var h, f = w, d = wl(v, e, y.unit), p = f.anchor;
                                    p = 0 < ut(d.anchor, p) ? (h = d.head,
                                    dt(f.from(), d.anchor)) : (h = d.anchor,
                                    ft(f.to(), d.head));
                                    var g = C.ranges.slice(0);
                                    g[x] = function(e, t) {
                                        var r = t.anchor
                                          , n = t.head
                                          , i = et(e.doc, r.line);
                                        if (0 == ut(r, n) && r.sticky == n.sticky)
                                            return t;
                                        var o = ye(i);
                                        if (!o)
                                            return t;
                                        var l = ae(o, r.ch, r.sticky)
                                          , s = o[l];
                                        if (s.from != r.ch && s.to != r.ch)
                                            return t;
                                        var a, u = l + (s.from == r.ch == (1 != s.level) ? 0 : 1);
                                        if (0 == u || u == o.length)
                                            return t;
                                        if (n.line != r.line)
                                            a = 0 < (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1);
                                        else {
                                            var c = ae(o, n.ch, n.sticky)
                                              , h = c - l || (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                                            a = c == u - 1 || c == u ? h < 0 : 0 < h
                                        }
                                        var f = o[u + (a ? -1 : 0)]
                                          , d = a == (1 == f.level)
                                          , p = d ? f.from : f.to
                                          , g = d ? "after" : "before";
                                        return r.ch == p && r.sticky == g ? t : new Ti(new at(r.line,p,g),n)
                                    }(v, new Ti(gt(b, p),h)),
                                    ro(b, Mi(v, g, x), K)
                                }
                        }
                        var a = l.wrapper.getBoundingClientRect()
                          , u = 0;
                        function n(e) {
                            v.state.selectingText = !1,
                            u = 1 / 0,
                            e && (Ne(e),
                            l.input.focus()),
                            Ce(l.wrapper.ownerDocument, "mousemove", i),
                            Ce(l.wrapper.ownerDocument, "mouseup", o),
                            b.history.lastSelOrigin = null
                        }
                        var i = ni(v, function(e) {
                            0 !== e.buttons && He(e) ? function e(t) {
                                var r = ++u
                                  , n = dn(v, t, !0, "rectangle" == y.unit);
                                if (n)
                                    if (0 != ut(n, S)) {
                                        v.curOp.focus = W(),
                                        s(n);
                                        var i = Wn(l, b);
                                        (n.line >= i.to || n.line < i.from) && setTimeout(ni(v, function() {
                                            u == r && e(t)
                                        }), 150)
                                    } else {
                                        var o = t.clientY < a.top ? -20 : t.clientY > a.bottom ? 20 : 0;
                                        o && setTimeout(ni(v, function() {
                                            u == r && (l.scroller.scrollTop += o,
                                            e(t))
                                        }), 50)
                                    }
                            }(e) : n(e)
                        })
                          , o = ni(v, n);
                        v.state.selectingText = o,
                        we(l.wrapper.ownerDocument, "mousemove", i),
                        we(l.wrapper.ownerDocument, "mouseup", o)
                    }(e, n, t, o)
                }(t, n, o, e) : We(e) == r.scroller && Ne(e) : 2 == i ? (n && Zi(t.doc, n),
                setTimeout(function() {
                    return r.input.focus()
                }, 20)) : 3 == i && (S ? t.display.input.onContextMenu(e) : Mn(t)))
            }
    }
    function wl(e, t, r) {
        if ("char" == r)
            return new Ti(t,t);
        if ("word" == r)
            return e.findWordAt(t);
        if ("line" == r)
            return new Ti(at(t.line, 0),gt(e.doc, at(t.line + 1, 0)));
        var n = r(e, t);
        return new Ti(n.from,n.to)
    }
    function xl(e, t, r, n) {
        var i, o;
        if (t.touches)
            i = t.touches[0].clientX,
            o = t.touches[0].clientY;
        else
            try {
                i = t.clientX,
                o = t.clientY
            } catch (t) {
                return !1
            }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
        n && Ne(t);
        var l = e.display
          , s = l.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !Te(e, r))
            return Ae(t);
        o -= s.top - l.viewOffset;
        for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
            var u = l.gutters.childNodes[a];
            if (u && u.getBoundingClientRect().right >= i)
                return Se(e, r, e, ot(e.doc, o), e.display.gutterSpecs[a].className, t),
                Ae(t)
        }
    }
    function Cl(e, t) {
        return xl(e, t, "gutterClick", !0)
    }
    function Sl(e, t) {
        Mr(e.display, t) || function(e, t) {
            return !!Te(e, "gutterContextMenu") && xl(e, t, "gutterContextMenu", !1)
        }(e, t) || Le(e, t, "contextmenu") || S || e.display.input.onContextMenu(t)
    }
    function Ll(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
        jr(e)
    }
    yl.prototype.compare = function(e, t, r) {
        return this.time + 400 > e && 0 == ut(t, this.pos) && r == this.button
    }
    ;
    var kl = {
        toString: function() {
            return "CodeMirror.Init"
        }
    }
      , Tl = {}
      , Ml = {};
    function Nl(e, t, r) {
        if (!t != !(r && r != kl)) {
            var n = e.display.dragFunctions
              , i = t ? we : Ce;
            i(e.display.scroller, "dragstart", n.start),
            i(e.display.scroller, "dragenter", n.enter),
            i(e.display.scroller, "dragover", n.over),
            i(e.display.scroller, "dragleave", n.leave),
            i(e.display.scroller, "drop", n.drop)
        }
    }
    function Ol(e) {
        e.options.lineWrapping ? (H(e.display.wrapper, "CodeMirror-wrap"),
        e.display.sizer.style.minWidth = "",
        e.display.sizerWidth = null) : (T(e.display.wrapper, "CodeMirror-wrap"),
        Jt(e)),
        fn(e),
        gn(e),
        jr(e),
        setTimeout(function() {
            return jn(e)
        }, 100)
    }
    function Al(e, t) {
        var r = this;
        if (!(this instanceof Al))
            return new Al(e,t);
        this.options = t = t ? I(t) : {},
        I(Tl, t, !1);
        var n = t.value;
        "string" == typeof n ? n = new Fo(n,t.mode,null,t.lineSeparator,t.direction) : t.mode && (n.modeOption = t.mode),
        this.doc = n;
        var i = new Al.inputStyles[t.inputStyle](this)
          , o = this.display = new bi(e,n,i,t);
        for (var l in Ll(o.wrapper.CodeMirror = this),
        t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
        _n(this),
        this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new R,
            keySeq: null,
            specialChars: null
        },
        t.autofocus && !f && o.input.focus(),
        x && C < 11 && setTimeout(function() {
            return r.display.input.reset(!0)
        }, 20),
        function(i) {
            var o = i.display;
            we(o.scroller, "mousedown", ni(i, bl)),
            we(o.scroller, "dblclick", x && C < 11 ? ni(i, function(e) {
                if (!Le(i, e)) {
                    var t = dn(i, e);
                    if (t && !Cl(i, e) && !Mr(i.display, e)) {
                        Ne(e);
                        var r = i.findWordAt(t);
                        Zi(i.doc, r.anchor, r.head)
                    }
                }
            }) : function(e) {
                return Le(i, e) || Ne(e)
            }
            );
            we(o.scroller, "contextmenu", function(e) {
                return Sl(i, e)
            });
            var r, n = {
                end: 0
            };
            function l() {
                o.activeTouch && (r = setTimeout(function() {
                    return o.activeTouch = null
                }, 1e3),
                (n = o.activeTouch).end = +new Date)
            }
            function s(e, t) {
                if (null == t.left)
                    return !0;
                var r = t.left - e.left
                  , n = t.top - e.top;
                return 400 < r * r + n * n
            }
            we(o.scroller, "touchstart", function(e) {
                if (!Le(i, e) && !function(e) {
                    if (1 != e.touches.length)
                        return !1;
                    var t = e.touches[0];
                    return t.radiusX <= 1 && t.radiusY <= 1
                }(e) && !Cl(i, e)) {
                    o.input.ensurePolled(),
                    clearTimeout(r);
                    var t = +new Date;
                    o.activeTouch = {
                        start: t,
                        moved: !1,
                        prev: t - n.end <= 300 ? n : null
                    },
                    1 == e.touches.length && (o.activeTouch.left = e.touches[0].pageX,
                    o.activeTouch.top = e.touches[0].pageY)
                }
            }),
            we(o.scroller, "touchmove", function() {
                o.activeTouch && (o.activeTouch.moved = !0)
            }),
            we(o.scroller, "touchend", function(e) {
                var t = o.activeTouch;
                if (t && !Mr(o, e) && null != t.left && !t.moved && new Date - t.start < 300) {
                    var r, n = i.coordsChar(o.activeTouch, "page");
                    r = !t.prev || s(t, t.prev) ? new Ti(n,n) : !t.prev.prev || s(t, t.prev.prev) ? i.findWordAt(n) : new Ti(at(n.line, 0),gt(i.doc, at(n.line + 1, 0))),
                    i.setSelection(r.anchor, r.head),
                    i.focus(),
                    Ne(e)
                }
                l()
            }),
            we(o.scroller, "touchcancel", l),
            we(o.scroller, "scroll", function() {
                o.scroller.clientHeight && (Rn(i, o.scroller.scrollTop),
                Gn(i, o.scroller.scrollLeft, !0),
                Se(i, "scroll", i))
            }),
            we(o.scroller, "mousewheel", function(e) {
                return Li(i, e)
            }),
            we(o.scroller, "DOMMouseScroll", function(e) {
                return Li(i, e)
            }),
            we(o.wrapper, "scroll", function() {
                return o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
            }),
            o.dragFunctions = {
                enter: function(e) {
                    Le(i, e) || De(e)
                },
                over: function(e) {
                    Le(i, e) || (function(e, t) {
                        var r = dn(e, t);
                        if (r) {
                            var n = document.createDocumentFragment();
                            Cn(e, r, n),
                            e.display.dragCursor || (e.display.dragCursor = A("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
                            e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                            N(e.display.dragCursor, n)
                        }
                    }(i, e),
                    De(e))
                },
                start: function(e) {
                    return function(e, t) {
                        if (x && (!e.state.draggingText || +new Date - Po < 100))
                            De(t);
                        else if (!Le(e, t) && !Mr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()),
                        t.dataTransfer.effectAllowed = "copyMove",
                        t.dataTransfer.setDragImage && !a)) {
                            var r = A("img", null, null, "position: fixed; left: 0; top: 0;");
                            r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                            v && (r.width = r.height = 1,
                            e.display.wrapper.appendChild(r),
                            r._top = r.offsetTop),
                            t.dataTransfer.setDragImage(r, 0, 0),
                            v && r.parentNode.removeChild(r)
                        }
                    }(i, e)
                },
                drop: ni(i, Eo),
                leave: function(e) {
                    Le(i, e) || Io(i)
                }
            };
            var e = o.input.getField();
            we(e, "keyup", function(e) {
                return pl.call(i, e)
            }),
            we(e, "keydown", ni(i, dl)),
            we(e, "keypress", ni(i, gl)),
            we(e, "focus", function(e) {
                return Nn(i, e)
            }),
            we(e, "blur", function(e) {
                return On(i, e)
            })
        }(this),
        Bo(),
        qn(this),
        this.curOp.forceUpdate = !0,
        zi(this, n),
        t.autofocus && !f || this.hasFocus() ? setTimeout(E(Nn, this), 20) : On(this),
        Ml)
            Ml.hasOwnProperty(l) && Ml[l](r, t[l], kl);
        gi(this),
        t.finishInit && t.finishInit(this);
        for (var s = 0; s < Dl.length; ++s)
            Dl[s](r);
        Zn(this),
        b && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
    }
    Al.defaults = Tl,
    Al.optionHandlers = Ml;
    var Dl = [];
    function Wl(e, t, r, n) {
        var i, o = e.doc;
        null == r && (r = "add"),
        "smart" == r && (o.mode.indent ? i = xt(e, t).state : r = "prev");
        var l = e.options.tabSize
          , s = et(o, t)
          , a = z(s.text, null, l);
        s.stateAfter && (s.stateAfter = null);
        var u, c = s.text.match(/^\s*/)[0];
        if (n || /\S/.test(s.text)) {
            if ("smart" == r && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == U || 150 < u)) {
                if (!n)
                    return;
                r = "prev"
            }
        } else
            u = 0,
            r = "not";
        "prev" == r ? u = t > o.first ? z(et(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r),
        u = Math.max(0, u);
        var h = ""
          , f = 0;
        if (e.options.indentWithTabs)
            for (var d = Math.floor(u / l); d; --d)
                f += l,
                h += "\t";
        if (f < u && (h += _(u - f)),
        h != c)
            return yo(o, h, at(t, 0), at(t, c.length), "+input"),
            !(s.stateAfter = null);
        for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < c.length) {
                var v = at(t, c.length);
                Ji(o, p, new Ti(v,v));
                break
            }
        }
    }
    Al.defineInitHook = function(e) {
        return Dl.push(e)
    }
    ;
    var Hl = null;
    function Fl(e) {
        Hl = e
    }
    function Pl(e, t, r, n, i) {
        var o = e.doc;
        e.display.shift = !1,
        n = n || o.sel;
        var l = +new Date - 200
          , s = "paste" == i || e.state.pasteIncoming > l
          , a = Be(t)
          , u = null;
        if (s && 1 < n.ranges.length)
            if (Hl && Hl.text.join("\n") == t) {
                if (n.ranges.length % Hl.text.length == 0) {
                    u = [];
                    for (var c = 0; c < Hl.text.length; c++)
                        u.push(o.splitLines(Hl.text[c]))
                }
            } else
                a.length == n.ranges.length && e.options.pasteLinesPerSelection && (u = q(a, function(e) {
                    return [e]
                }));
        for (var h = e.curOp.updateInput, f = n.ranges.length - 1; 0 <= f; f--) {
            var d = n.ranges[f]
              , p = d.from()
              , g = d.to();
            d.empty() && (r && 0 < r ? p = at(p.line, p.ch - r) : e.state.overwrite && !s ? g = at(g.line, Math.min(et(o, g.line).text.length, g.ch + $(a).length)) : s && Hl && Hl.lineWise && Hl.text.join("\n") == t && (p = g = at(p.line, 0)));
            var v = {
                from: p,
                to: g,
                text: u ? u[f % u.length] : a,
                origin: i || (s ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
            };
            fo(e.doc, v),
            pr(e, "inputRead", e, v)
        }
        t && !s && Il(e, t),
        Pn(e),
        e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
        e.curOp.typing = !0,
        e.state.pasteIncoming = e.state.cutIncoming = -1
    }
    function El(e, t) {
        var r = e.clipboardData && e.clipboardData.getData("Text");
        if (r)
            return e.preventDefault(),
            t.isReadOnly() || t.options.disableInput || ri(t, function() {
                return Pl(t, r, 0, null, "paste")
            }),
            !0
    }
    function Il(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
            for (var r = e.doc.sel, n = r.ranges.length - 1; 0 <= n; n--) {
                var i = r.ranges[n];
                if (!(100 < i.head.ch || n && r.ranges[n - 1].head.line == i.head.line)) {
                    var o = e.getModeAt(i.head)
                      , l = !1;
                    if (o.electricChars) {
                        for (var s = 0; s < o.electricChars.length; s++)
                            if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                                l = Wl(e, i.head.line, "smart");
                                break
                            }
                    } else
                        o.electricInput && o.electricInput.test(et(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Wl(e, i.head.line, "smart"));
                    l && pr(e, "electricInput", e, i.head.line)
                }
            }
    }
    function zl(e) {
        for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line
              , o = {
                anchor: at(i, 0),
                head: at(i + 1, 0)
            };
            r.push(o),
            t.push(e.getRange(o.anchor, o.head))
        }
        return {
            text: t,
            ranges: r
        }
    }
    function Rl(e, t, r, n) {
        e.setAttribute("autocorrect", r ? "" : "off"),
        e.setAttribute("autocapitalize", n ? "" : "off"),
        e.setAttribute("spellcheck", !!t)
    }
    function Bl() {
        var e = A("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
          , t = A("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return b ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
        c && (e.style.border = "1px solid black"),
        Rl(e),
        t
    }
    function Gl(r, n, i, e, o) {
        var t = n
          , l = i
          , s = et(r, n.line);
        function a(e) {
            var t;
            if (null == (t = o ? function(t, r, s, e) {
                var a = ye(r, t.doc.direction);
                if (!a)
                    return rl(r, s, e);
                s.ch >= r.text.length ? (s.ch = r.text.length,
                s.sticky = "before") : s.ch <= 0 && (s.ch = 0,
                s.sticky = "after");
                var n = ae(a, s.ch, s.sticky)
                  , i = a[n];
                if ("ltr" == t.doc.direction && i.level % 2 == 0 && (0 < e ? i.to > s.ch : i.from < s.ch))
                    return rl(r, s, e);
                function u(e, t) {
                    return tl(r, e instanceof at ? e.ch : e, t)
                }
                function o(e) {
                    return t.options.lineWrapping ? (l = l || Ir(t, r),
                    nn(t, r, l, e)) : {
                        begin: 0,
                        end: r.text.length
                    }
                }
                var l, c = o("before" == s.sticky ? u(s, -1) : s.ch);
                if ("rtl" == t.doc.direction || 1 == i.level) {
                    var h = 1 == i.level == e < 0
                      , f = u(s, h ? 1 : -1);
                    if (null != f && (h ? f <= i.to && f <= c.end : f >= i.from && f >= c.begin)) {
                        var d = h ? "before" : "after";
                        return new at(s.line,f,d)
                    }
                }
                function p(e, t, r) {
                    for (var n = function(e, t) {
                        return t ? new at(s.line,u(e, 1),"before") : new at(s.line,e,"after")
                    }; 0 <= e && e < a.length; e += t) {
                        var i = a[e]
                          , o = 0 < t == (1 != i.level)
                          , l = o ? r.begin : u(r.end, -1);
                        if (i.from <= l && l < i.to)
                            return n(l, o);
                        if (l = o ? i.from : u(i.to, -1),
                        r.begin <= l && l < r.end)
                            return n(l, o)
                    }
                }
                var g = p(n + e, e, c);
                if (g)
                    return g;
                var v = 0 < e ? c.end : u(c.begin, -1);
                return null == v || 0 < e && v == r.text.length || !(g = p(0 < e ? 0 : a.length - 1, e, o(v))) ? null : g
            }(r.cm, s, n, i) : rl(s, n, i))) {
                if (e || !function() {
                    var e = n.line + i;
                    return !(e < r.first || e >= r.first + r.size) && (n = new at(e,n.ch,n.sticky),
                    s = et(r, e))
                }())
                    return !1;
                n = nl(o, r.cm, s, n.line, i)
            } else
                n = t;
            return !0
        }
        if ("char" == e)
            a();
        else if ("column" == e)
            a(!0);
        else if ("word" == e || "group" == e)
            for (var u = null, c = "group" == e, h = r.cm && r.cm.getHelper(n, "wordChars"), f = !0; !(i < 0) || a(!f); f = !1) {
                var d = s.text.charAt(n.ch) || "\n"
                  , p = te(d, h) ? "w" : c && "\n" == d ? "n" : !c || /\s/.test(d) ? null : "p";
                if (!c || f || p || (p = "s"),
                u && u != p) {
                    i < 0 && (i = 1,
                    a(),
                    n.sticky = "after");
                    break
                }
                if (p && (u = p),
                0 < i && !a(!f))
                    break
            }
        var g = ao(r, n, t, l, !0);
        return ct(t, g) && (g.hitSide = !0),
        g
    }
    function Ul(e, t, r, n) {
        var i, o, l = e.doc, s = t.left;
        if ("page" == n) {
            var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
              , u = Math.max(a - .5 * sn(e.display), 3);
            i = (0 < r ? t.bottom : t.top) + r * u
        } else
            "line" == n && (i = 0 < r ? t.bottom + 3 : t.top - 3);
        for (; (o = tn(e, s, i)).outside; ) {
            if (r < 0 ? i <= 0 : i >= l.height) {
                o.hitSide = !0;
                break
            }
            i += 5 * r
        }
        return o
    }
    function Vl(e) {
        this.cm = e,
        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
        this.polling = new R,
        this.composing = null,
        this.gracePeriod = !1,
        this.readDOMTimeout = null
    }
    function Kl(e, t) {
        var r = Er(e, t.line);
        if (!r || r.hidden)
            return null;
        var n = et(e.doc, t.line)
          , i = Fr(r, n, t.line)
          , o = ye(n, e.doc.direction)
          , l = "left";
        o && (l = ae(o, t.ch) % 2 ? "right" : "left");
        var s = Gr(i.map, t.ch, l);
        return s.offset = "right" == s.collapse ? s.end : s.start,
        s
    }
    function jl(e, t) {
        return t && (e.bad = !0),
        e
    }
    function Xl(e, t, r) {
        var n;
        if (t == e.display.lineDiv) {
            if (!(n = e.display.lineDiv.childNodes[r]))
                return jl(e.clipPos(at(e.display.viewTo - 1)), !0);
            t = null,
            r = 0
        } else
            for (n = t; ; n = n.parentNode) {
                if (!n || n == e.display.lineDiv)
                    return null;
                if (n.parentNode && n.parentNode == e.display.lineDiv)
                    break
            }
        for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n)
                return Yl(o, t, r)
        }
    }
    function Yl(u, e, t) {
        var r = u.text.firstChild
          , n = !1;
        if (!e || !D(r, e))
            return jl(at(it(u.line), 0), !0);
        if (e == r && (n = !0,
        e = r.childNodes[t],
        t = 0,
        !e)) {
            var i = u.rest ? $(u.rest) : u.line;
            return jl(at(it(i), i.text.length), n)
        }
        var o = 3 == e.nodeType ? e : null
          , l = e;
        for (o || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (o = e.firstChild,
        t = t && o.nodeValue.length); l.parentNode != r; )
            l = l.parentNode;
        var c = u.measure
          , h = c.maps;
        function s(e, t, r) {
            for (var n = -1; n < (h ? h.length : 0); n++)
                for (var i = n < 0 ? c.map : h[n], o = 0; o < i.length; o += 3) {
                    var l = i[o + 2];
                    if (l == e || l == t) {
                        var s = it(n < 0 ? u.line : u.rest[n])
                          , a = i[o] + r;
                        return (r < 0 || l != e) && (a = i[o + (r ? 1 : 0)]),
                        at(s, a)
                    }
                }
        }
        var a = s(o, l, t);
        if (a)
            return jl(a, n);
        for (var f = l.nextSibling, d = o ? o.nodeValue.length - t : 0; f; f = f.nextSibling) {
            if (a = s(f, f.firstChild, 0))
                return jl(at(a.line, a.ch - d), n);
            d += f.textContent.length
        }
        for (var p = l.previousSibling, g = t; p; p = p.previousSibling) {
            if (a = s(p, p.firstChild, -1))
                return jl(at(a.line, a.ch + g), n);
            g += p.textContent.length
        }
    }
    Vl.prototype.init = function(e) {
        var t = this
          , l = this
          , s = l.cm
          , a = l.div = e.lineDiv;
        function r(e) {
            if (!Le(s, e)) {
                if (s.somethingSelected())
                    Fl({
                        lineWise: !1,
                        text: s.getSelections()
                    }),
                    "cut" == e.type && s.replaceSelection("", null, "cut");
                else {
                    if (!s.options.lineWiseCopyCut)
                        return;
                    var t = zl(s);
                    Fl({
                        lineWise: !0,
                        text: t.text
                    }),
                    "cut" == e.type && s.operation(function() {
                        s.setSelections(t.ranges, 0, V),
                        s.replaceSelection("", null, "cut")
                    })
                }
                if (e.clipboardData) {
                    e.clipboardData.clearData();
                    var r = Hl.text.join("\n");
                    if (e.clipboardData.setData("Text", r),
                    e.clipboardData.getData("Text") == r)
                        return void e.preventDefault()
                }
                var n = Bl()
                  , i = n.firstChild;
                s.display.lineSpace.insertBefore(n, s.display.lineSpace.firstChild),
                i.value = Hl.text.join("\n");
                var o = document.activeElement;
                P(i),
                setTimeout(function() {
                    s.display.lineSpace.removeChild(n),
                    o.focus(),
                    o == a && l.showPrimarySelection()
                }, 50)
            }
        }
        Rl(a, s.options.spellcheck, s.options.autocorrect, s.options.autocapitalize),
        we(a, "paste", function(e) {
            Le(s, e) || El(e, s) || C <= 11 && setTimeout(ni(s, function() {
                return t.updateFromDOM()
            }), 20)
        }),
        we(a, "compositionstart", function(e) {
            t.composing = {
                data: e.data,
                done: !1
            }
        }),
        we(a, "compositionupdate", function(e) {
            t.composing || (t.composing = {
                data: e.data,
                done: !1
            })
        }),
        we(a, "compositionend", function(e) {
            t.composing && (e.data != t.composing.data && t.readFromDOMSoon(),
            t.composing.done = !0)
        }),
        we(a, "touchstart", function() {
            return l.forceCompositionEnd()
        }),
        we(a, "input", function() {
            t.composing || t.readFromDOMSoon()
        }),
        we(a, "copy", r),
        we(a, "cut", r)
    }
    ,
    Vl.prototype.prepareSelection = function() {
        var e = xn(this.cm, !1);
        return e.focus = this.cm.state.focused,
        e
    }
    ,
    Vl.prototype.showSelection = function(e, t) {
        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(),
        this.showMultipleSelections(e))
    }
    ,
    Vl.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection()
    }
    ,
    Vl.prototype.showPrimarySelection = function() {
        var e = this.getSelection()
          , t = this.cm
          , r = t.doc.sel.primary()
          , n = r.from()
          , i = r.to();
        if (t.display.viewTo == t.display.viewFrom || n.line >= t.display.viewTo || i.line < t.display.viewFrom)
            e.removeAllRanges();
        else {
            var o = Xl(t, e.anchorNode, e.anchorOffset)
              , l = Xl(t, e.focusNode, e.focusOffset);
            if (!o || o.bad || !l || l.bad || 0 != ut(dt(o, l), n) || 0 != ut(ft(o, l), i)) {
                var s = t.display.view
                  , a = n.line >= t.display.viewFrom && Kl(t, n) || {
                    node: s[0].measure.map[2],
                    offset: 0
                }
                  , u = i.line < t.display.viewTo && Kl(t, i);
                if (!u) {
                    var c = s[s.length - 1].measure
                      , h = c.maps ? c.maps[c.maps.length - 1] : c.map;
                    u = {
                        node: h[h.length - 1],
                        offset: h[h.length - 2] - h[h.length - 3]
                    }
                }
                if (a && u) {
                    var f, d = e.rangeCount && e.getRangeAt(0);
                    try {
                        f = k(a.node, a.offset, u.offset, u.node)
                    } catch (e) {}
                    f && (!g && t.state.focused ? (e.collapse(a.node, a.offset),
                    f.collapsed || (e.removeAllRanges(),
                    e.addRange(f))) : (e.removeAllRanges(),
                    e.addRange(f)),
                    d && null == e.anchorNode ? e.addRange(d) : g && this.startGracePeriod()),
                    this.rememberSelection()
                } else
                    e.removeAllRanges()
            }
        }
    }
    ,
    Vl.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod),
        this.gracePeriod = setTimeout(function() {
            e.gracePeriod = !1,
            e.selectionChanged() && e.cm.operation(function() {
                return e.cm.curOp.selectionChanged = !0
            })
        }, 20)
    }
    ,
    Vl.prototype.showMultipleSelections = function(e) {
        N(this.cm.display.cursorDiv, e.cursors),
        N(this.cm.display.selectionDiv, e.selection)
    }
    ,
    Vl.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode,
        this.lastAnchorOffset = e.anchorOffset,
        this.lastFocusNode = e.focusNode,
        this.lastFocusOffset = e.focusOffset
    }
    ,
    Vl.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
            return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return D(this.div, t)
    }
    ,
    Vl.prototype.focus = function() {
        "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0),
        this.div.focus())
    }
    ,
    Vl.prototype.blur = function() {
        this.div.blur()
    }
    ,
    Vl.prototype.getField = function() {
        return this.div
    }
    ,
    Vl.prototype.supportsTouch = function() {
        return !0
    }
    ,
    Vl.prototype.receivedFocus = function() {
        var t = this;
        this.selectionInEditor() ? this.pollSelection() : ri(this.cm, function() {
            return t.cm.curOp.selectionChanged = !0
        }),
        this.polling.set(this.cm.options.pollInterval, function e() {
            t.cm.state.focused && (t.pollSelection(),
            t.polling.set(t.cm.options.pollInterval, e))
        })
    }
    ,
    Vl.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
    }
    ,
    Vl.prototype.pollSelection = function() {
        if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var e = this.getSelection()
              , t = this.cm;
            if (h && l && this.cm.display.gutterSpecs.length && function(e) {
                for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className))
                        return !0;
                return !1
            }(e.anchorNode))
                return this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs
                }),
                this.blur(),
                void this.focus();
            if (!this.composing) {
                this.rememberSelection();
                var r = Xl(t, e.anchorNode, e.anchorOffset)
                  , n = Xl(t, e.focusNode, e.focusOffset);
                r && n && ri(t, function() {
                    ro(t.doc, Ni(r, n), V),
                    (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
                })
            }
        }
    }
    ,
    Vl.prototype.pollContent = function() {
        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
        this.readDOMTimeout = null);
        var e, t, r, n = this.cm, i = n.display, o = n.doc.sel.primary(), l = o.from(), s = o.to();
        if (0 == l.ch && l.line > n.firstLine() && (l = at(l.line - 1, et(n.doc, l.line - 1).length)),
        s.ch == et(n.doc, s.line).text.length && s.line < n.lastLine() && (s = at(s.line + 1, 0)),
        l.line < i.viewFrom || s.line > i.viewTo - 1)
            return !1;
        r = l.line == i.viewFrom || 0 == (e = pn(n, l.line)) ? (t = it(i.view[0].line),
        i.view[0].node) : (t = it(i.view[e].line),
        i.view[e - 1].node.nextSibling);
        var a, u, c = pn(n, s.line);
        if (u = c == i.view.length - 1 ? (a = i.viewTo - 1,
        i.lineDiv.lastChild) : (a = it(i.view[c + 1].line) - 1,
        i.view[c + 1].node.previousSibling),
        !r)
            return !1;
        for (var h = n.doc.splitLines(function(s, e, t, a, u) {
            var r = ""
              , c = !1
              , h = s.doc.lineSeparator()
              , f = !1;
            function d() {
                c && (r += h,
                f && (r += h),
                c = f = !1)
            }
            function p(e) {
                e && (d(),
                r += e)
            }
            function g(e) {
                if (1 == e.nodeType) {
                    var t = e.getAttribute("cm-text");
                    if (t)
                        return void p(t);
                    var r, n = e.getAttribute("cm-marker");
                    if (n) {
                        var i = s.findMarks(at(a, 0), at(u + 1, 0), function(t) {
                            return function(e) {
                                return e.id == t
                            }
                        }(+n));
                        return void (i.length && (r = i[0].find(0)) && p(tt(s.doc, r.from, r.to).join(h)))
                    }
                    if ("false" == e.getAttribute("contenteditable"))
                        return;
                    var o = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                    if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length)
                        return;
                    o && d();
                    for (var l = 0; l < e.childNodes.length; l++)
                        g(e.childNodes[l]);
                    /^(pre|p)$/i.test(e.nodeName) && (f = !0),
                    o && (c = !0)
                } else
                    3 == e.nodeType && p(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
            }
            for (; g(e),
            e != t; )
                e = e.nextSibling,
                f = !1;
            return r
        }(n, r, u, t, a)), f = tt(n.doc, at(t, 0), at(a, et(n.doc, a).text.length)); 1 < h.length && 1 < f.length; )
            if ($(h) == $(f))
                h.pop(),
                f.pop(),
                a--;
            else {
                if (h[0] != f[0])
                    break;
                h.shift(),
                f.shift(),
                t++
            }
        for (var d = 0, p = 0, g = h[0], v = f[0], m = Math.min(g.length, v.length); d < m && g.charCodeAt(d) == v.charCodeAt(d); )
            ++d;
        for (var y = $(h), b = $(f), w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1); )
            ++p;
        if (1 == h.length && 1 == f.length && t == l.line)
            for (; d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1); )
                d--,
                p++;
        h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""),
        h[0] = h[0].slice(d).replace(/\u200b+$/, "");
        var x = at(t, d)
          , C = at(a, f.length ? $(f).length - p : 0);
        return 1 < h.length || h[0] || ut(x, C) ? (yo(n.doc, h, x, C, "+input"),
        !0) : void 0
    }
    ,
    Vl.prototype.ensurePolled = function() {
        this.forceCompositionEnd()
    }
    ,
    Vl.prototype.reset = function() {
        this.forceCompositionEnd()
    }
    ,
    Vl.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout),
        this.composing = null,
        this.updateFromDOM(),
        this.div.blur(),
        this.div.focus())
    }
    ,
    Vl.prototype.readFromDOMSoon = function() {
        var e = this;
        null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
            if (e.readDOMTimeout = null,
            e.composing) {
                if (!e.composing.done)
                    return;
                e.composing = null
            }
            e.updateFromDOM()
        }, 80))
    }
    ,
    Vl.prototype.updateFromDOM = function() {
        var e = this;
        !this.cm.isReadOnly() && this.pollContent() || ri(this.cm, function() {
            return gn(e.cm)
        })
    }
    ,
    Vl.prototype.setUneditable = function(e) {
        e.contentEditable = "false"
    }
    ,
    Vl.prototype.onKeyPress = function(e) {
        0 == e.charCode || this.composing || (e.preventDefault(),
        this.cm.isReadOnly() || ni(this.cm, Pl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
    }
    ,
    Vl.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String("nocursor" != e)
    }
    ,
    Vl.prototype.onContextMenu = function() {}
    ,
    Vl.prototype.resetPosition = function() {}
    ,
    Vl.prototype.needsContentAttribute = !0;
    function _l(e) {
        this.cm = e,
        this.prevInput = "",
        this.pollingFast = !1,
        this.polling = new R,
        this.hasSelection = !1,
        this.composing = null
    }
    var $l, ql, Zl, Ql, Jl;
    function es(e, t, n, r) {
        $l.defaults[e] = t,
        n && (ql[e] = r ? function(e, t, r) {
            r != kl && n(e, t, r)
        }
        : n)
    }
    _l.prototype.init = function(r) {
        var e = this
          , n = this
          , i = this.cm;
        this.createField(r);
        var o = this.textarea;
        function t(e) {
            if (!Le(i, e)) {
                if (i.somethingSelected())
                    Fl({
                        lineWise: !1,
                        text: i.getSelections()
                    });
                else {
                    if (!i.options.lineWiseCopyCut)
                        return;
                    var t = zl(i);
                    Fl({
                        lineWise: !0,
                        text: t.text
                    }),
                    "cut" == e.type ? i.setSelections(t.ranges, null, V) : (n.prevInput = "",
                    o.value = t.text.join("\n"),
                    P(o))
                }
                "cut" == e.type && (i.state.cutIncoming = +new Date)
            }
        }
        r.wrapper.insertBefore(this.wrapper, r.wrapper.firstChild),
        c && (o.style.width = "0px"),
        we(o, "input", function() {
            x && 9 <= C && e.hasSelection && (e.hasSelection = null),
            n.poll()
        }),
        we(o, "paste", function(e) {
            Le(i, e) || El(e, i) || (i.state.pasteIncoming = +new Date,
            n.fastPoll())
        }),
        we(o, "cut", t),
        we(o, "copy", t),
        we(r.scroller, "paste", function(e) {
            if (!Mr(r, e) && !Le(i, e)) {
                if (!o.dispatchEvent)
                    return i.state.pasteIncoming = +new Date,
                    void n.focus();
                var t = new Event("paste");
                t.clipboardData = e.clipboardData,
                o.dispatchEvent(t)
            }
        }),
        we(r.lineSpace, "selectstart", function(e) {
            Mr(r, e) || Ne(e)
        }),
        we(o, "compositionstart", function() {
            var e = i.getCursor("from");
            n.composing && n.composing.range.clear(),
            n.composing = {
                start: e,
                range: i.markText(e, i.getCursor("to"), {
                    className: "CodeMirror-composing"
                })
            }
        }),
        we(o, "compositionend", function() {
            n.composing && (n.poll(),
            n.composing.range.clear(),
            n.composing = null)
        })
    }
    ,
    _l.prototype.createField = function(e) {
        this.wrapper = Bl(),
        this.textarea = this.wrapper.firstChild
    }
    ,
    _l.prototype.prepareSelection = function() {
        var e = this.cm
          , t = e.display
          , r = e.doc
          , n = xn(e);
        if (e.options.moveInputWithCursor) {
            var i = Qr(e, r.sel.primary().head, "div")
              , o = t.wrapper.getBoundingClientRect()
              , l = t.lineDiv.getBoundingClientRect();
            n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)),
            n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
        }
        return n
    }
    ,
    _l.prototype.showSelection = function(e) {
        var t = this.cm.display;
        N(t.cursorDiv, e.cursors),
        N(t.selectionDiv, e.selection),
        null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
        this.wrapper.style.left = e.teLeft + "px")
    }
    ,
    _l.prototype.reset = function(e) {
        if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;
            if (t.somethingSelected()) {
                this.prevInput = "";
                var r = t.getSelection();
                this.textarea.value = r,
                t.state.focused && P(this.textarea),
                x && 9 <= C && (this.hasSelection = r)
            } else
                e || (this.prevInput = this.textarea.value = "",
                x && 9 <= C && (this.hasSelection = null))
        }
    }
    ,
    _l.prototype.getField = function() {
        return this.textarea
    }
    ,
    _l.prototype.supportsTouch = function() {
        return !1
    }
    ,
    _l.prototype.focus = function() {
        if ("nocursor" != this.cm.options.readOnly && (!f || W() != this.textarea))
            try {
                this.textarea.focus()
            } catch (e) {}
    }
    ,
    _l.prototype.blur = function() {
        this.textarea.blur()
    }
    ,
    _l.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0
    }
    ,
    _l.prototype.receivedFocus = function() {
        this.slowPoll()
    }
    ,
    _l.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
            e.poll(),
            e.cm.state.focused && e.slowPoll()
        })
    }
    ,
    _l.prototype.fastPoll = function() {
        var t = !1
          , r = this;
        r.pollingFast = !0,
        r.polling.set(20, function e() {
            r.poll() || t ? (r.pollingFast = !1,
            r.slowPoll()) : (t = !0,
            r.polling.set(60, e))
        })
    }
    ,
    _l.prototype.poll = function() {
        var e = this
          , t = this.cm
          , r = this.textarea
          , n = this.prevInput;
        if (this.contextMenuPending || !t.state.focused || Ge(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
            return !1;
        var i = r.value;
        if (i == n && !t.somethingSelected())
            return !1;
        if (x && 9 <= C && this.hasSelection === i || w && /[\uf700-\uf7ff]/.test(i))
            return t.display.input.reset(),
            !1;
        if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if (8203 != o || n || (n = "​"),
            8666 == o)
                return this.reset(),
                this.cm.execCommand("undo")
        }
        for (var l = 0, s = Math.min(n.length, i.length); l < s && n.charCodeAt(l) == i.charCodeAt(l); )
            ++l;
        return ri(t, function() {
            Pl(t, i.slice(l), n.length - l, null, e.composing ? "*compose" : null),
            1e3 < i.length || -1 < i.indexOf("\n") ? r.value = e.prevInput = "" : e.prevInput = i,
            e.composing && (e.composing.range.clear(),
            e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                className: "CodeMirror-composing"
            }))
        }),
        !0
    }
    ,
    _l.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1)
    }
    ,
    _l.prototype.onKeyPress = function() {
        x && 9 <= C && (this.hasSelection = null),
        this.fastPoll()
    }
    ,
    _l.prototype.onContextMenu = function(e) {
        var r = this
          , n = r.cm
          , i = n.display
          , o = r.textarea;
        r.contextMenuPending && r.contextMenuPending();
        var t = dn(n, e)
          , l = i.scroller.scrollTop;
        if (t && !v) {
            n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(t) && ni(n, ro)(n.doc, Ni(t), V);
            var s, a = o.style.cssText, u = r.wrapper.style.cssText, c = r.wrapper.offsetParent.getBoundingClientRect();
            if (r.wrapper.style.cssText = "position: static",
            o.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - c.top - 5) + "px; left: " + (e.clientX - c.left - 5) + "px;\n      z-index: 1000; background: " + (x ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
            b && (s = window.scrollY),
            i.input.focus(),
            b && window.scrollTo(null, s),
            i.input.reset(),
            n.somethingSelected() || (o.value = r.prevInput = " "),
            r.contextMenuPending = d,
            i.selForContextMenu = n.doc.sel,
            clearTimeout(i.detectingSelectAll),
            x && 9 <= C && f(),
            S) {
                De(e);
                var h = function() {
                    Ce(window, "mouseup", h),
                    setTimeout(d, 20)
                };
                we(window, "mouseup", h)
            } else
                setTimeout(d, 50)
        }
        function f() {
            if (null != o.selectionStart) {
                var e = n.somethingSelected()
                  , t = "​" + (e ? o.value : "");
                o.value = "⇚",
                o.value = t,
                r.prevInput = e ? "" : "​",
                o.selectionStart = 1,
                o.selectionEnd = t.length,
                i.selForContextMenu = n.doc.sel
            }
        }
        function d() {
            if (r.contextMenuPending == d && (r.contextMenuPending = !1,
            r.wrapper.style.cssText = u,
            o.style.cssText = a,
            x && C < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = l),
            null != o.selectionStart)) {
                (!x || x && C < 9) && f();
                var e = 0
                  , t = function() {
                    i.selForContextMenu == n.doc.sel && 0 == o.selectionStart && 0 < o.selectionEnd && "​" == r.prevInput ? ni(n, co)(n) : e++ < 10 ? i.detectingSelectAll = setTimeout(t, 500) : (i.selForContextMenu = null,
                    i.input.reset())
                };
                i.detectingSelectAll = setTimeout(t, 200)
            }
        }
    }
    ,
    _l.prototype.readOnlyChanged = function(e) {
        e || this.reset(),
        this.textarea.disabled = "nocursor" == e
    }
    ,
    _l.prototype.setUneditable = function() {}
    ,
    _l.prototype.needsContentAttribute = !1,
    ql = ($l = Al).optionHandlers,
    $l.defineOption = es,
    $l.Init = kl,
    es("value", "", function(e, t) {
        return e.setValue(t)
    }, !0),
    es("mode", null, function(e, t) {
        e.doc.modeOption = t,
        Hi(e)
    }, !0),
    es("indentUnit", 2, Hi, !0),
    es("indentWithTabs", !1),
    es("smartIndent", !0),
    es("tabSize", 4, function(e) {
        Fi(e),
        jr(e),
        gn(e)
    }, !0),
    es("lineSeparator", null, function(e, n) {
        if (e.doc.lineSep = n) {
            var i = []
              , o = e.doc.first;
            e.doc.iter(function(e) {
                for (var t = 0; ; ) {
                    var r = e.text.indexOf(n, t);
                    if (-1 == r)
                        break;
                    t = r + n.length,
                    i.push(at(o, r))
                }
                o++
            });
            for (var t = i.length - 1; 0 <= t; t--)
                yo(e.doc, n, i[t], at(i[t].line, i[t].ch + n.length))
        }
    }),
    es("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(e, t, r) {
        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"),"g"),
        r != kl && e.refresh()
    }),
    es("specialCharPlaceholder", or, function(e) {
        return e.refresh()
    }, !0),
    es("electricChars", !0),
    es("inputStyle", f ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor")
    }, !0),
    es("spellcheck", !1, function(e, t) {
        return e.getInputField().spellcheck = t
    }, !0),
    es("autocorrect", !1, function(e, t) {
        return e.getInputField().autocorrect = t
    }, !0),
    es("autocapitalize", !1, function(e, t) {
        return e.getInputField().autocapitalize = t
    }, !0),
    es("rtlMoveVisually", !p),
    es("wholeLineUpdateBefore", !0),
    es("theme", "default", function(e) {
        Ll(e),
        yi(e)
    }, !0),
    es("keyMap", "default", function(e, t, r) {
        var n = Jo(t)
          , i = r != kl && Jo(r);
        i && i.detach && i.detach(e, n),
        n.attach && n.attach(e, i || null)
    }),
    es("extraKeys", null),
    es("configureMouse", null),
    es("lineWrapping", !1, Ol, !0),
    es("gutters", [], function(e, t) {
        e.display.gutterSpecs = vi(t, e.options.lineNumbers),
        yi(e)
    }, !0),
    es("fixedGutter", !0, function(e, t) {
        e.display.gutters.style.left = t ? cn(e.display) + "px" : "0",
        e.refresh()
    }, !0),
    es("coverGutterNextToScrollbar", !1, function(e) {
        return jn(e)
    }, !0),
    es("scrollbarStyle", "native", function(e) {
        _n(e),
        jn(e),
        e.display.scrollbars.setScrollTop(e.doc.scrollTop),
        e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
    }, !0),
    es("lineNumbers", !1, function(e, t) {
        e.display.gutterSpecs = vi(e.options.gutters, t),
        yi(e)
    }, !0),
    es("firstLineNumber", 1, yi, !0),
    es("lineNumberFormatter", function(e) {
        return e
    }, yi, !0),
    es("showCursorWhenSelecting", !1, wn, !0),
    es("resetSelectionOnContextMenu", !0),
    es("lineWiseCopyCut", !0),
    es("pasteLinesPerSelection", !0),
    es("selectionsMayTouch", !1),
    es("readOnly", !1, function(e, t) {
        "nocursor" == t && (On(e),
        e.display.input.blur()),
        e.display.input.readOnlyChanged(t)
    }),
    es("disableInput", !1, function(e, t) {
        t || e.display.input.reset()
    }, !0),
    es("dragDrop", !0, Nl),
    es("allowDropFileTypes", null),
    es("cursorBlinkRate", 530),
    es("cursorScrollMargin", 0),
    es("cursorHeight", 1, wn, !0),
    es("singleCursorHeightPerLine", !0, wn, !0),
    es("workTime", 100),
    es("workDelay", 100),
    es("flattenSpans", !0, Fi, !0),
    es("addModeClass", !1, Fi, !0),
    es("pollInterval", 100),
    es("undoDepth", 200, function(e, t) {
        return e.doc.history.undoDepth = t
    }),
    es("historyEventDelay", 1250),
    es("viewportMargin", 10, function(e) {
        return e.refresh()
    }, !0),
    es("maxHighlightLength", 1e4, Fi, !0),
    es("moveInputWithCursor", !0, function(e, t) {
        t || e.display.input.resetPosition()
    }),
    es("tabindex", null, function(e, t) {
        return e.display.input.getField().tabIndex = t || ""
    }),
    es("autofocus", null),
    es("direction", "ltr", function(e, t) {
        return e.doc.setDirection(t)
    }, !0),
    es("phrases", null),
    Ql = (Zl = Al).optionHandlers,
    Jl = Zl.helpers = {},
    Zl.prototype = {
        constructor: Zl,
        focus: function() {
            window.focus(),
            this.display.input.focus()
        },
        setOption: function(e, t) {
            var r = this.options
              , n = r[e];
            r[e] == t && "mode" != e || (r[e] = t,
            Ql.hasOwnProperty(e) && ni(this, Ql[e])(this, t, n),
            Se(this, "optionChange", this, e))
        },
        getOption: function(e) {
            return this.options[e]
        },
        getDoc: function() {
            return this.doc
        },
        addKeyMap: function(e, t) {
            this.state.keyMaps[t ? "push" : "unshift"](Jo(e))
        },
        removeKeyMap: function(e) {
            for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                if (t[r] == e || t[r].name == e)
                    return t.splice(r, 1),
                    !0
        },
        addOverlay: ii(function(e, t) {
            var r = e.token ? e : Zl.getMode(this.options, e);
            if (r.startState)
                throw new Error("Overlays may not be stateful.");
            !function(e, t, r) {
                for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; )
                    n++;
                e.splice(n, 0, t)
            }(this.state.overlays, {
                mode: r,
                modeSpec: e,
                opaque: t && t.opaque,
                priority: t && t.priority || 0
            }, function(e) {
                return e.priority
            }),
            this.state.modeGen++,
            gn(this)
        }),
        removeOverlay: ii(function(e) {
            for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                var n = t[r].modeSpec;
                if (n == e || "string" == typeof e && n.name == e)
                    return t.splice(r, 1),
                    this.state.modeGen++,
                    void gn(this)
            }
        }),
        indentLine: ii(function(e, t, r) {
            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
            lt(this.doc, e) && Wl(this, e, t, r)
        }),
        indentSelection: ii(function(e) {
            for (var t = this, r = this.doc.sel.ranges, n = -1, i = 0; i < r.length; i++) {
                var o = r[i];
                if (o.empty())
                    o.head.line > n && (Wl(t, o.head.line, e, !0),
                    n = o.head.line,
                    i == t.doc.sel.primIndex && Pn(t));
                else {
                    var l = o.from()
                      , s = o.to()
                      , a = Math.max(n, l.line);
                    n = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                    for (var u = a; u < n; ++u)
                        Wl(t, u, e);
                    var c = t.doc.sel.ranges;
                    0 == l.ch && r.length == c.length && 0 < c[i].from().ch && Ji(t.doc, i, new Ti(l,c[i].to()), V)
                }
            }
        }),
        getTokenAt: function(e, t) {
            return Tt(this, e, t)
        },
        getLineTokens: function(e, t) {
            return Tt(this, at(e), t, !0)
        },
        getTokenTypeAt: function(e) {
            e = gt(this.doc, e);
            var t, r = wt(this, et(this.doc, e.line)), n = 0, i = (r.length - 1) / 2, o = e.ch;
            if (0 == o)
                t = r[2];
            else
                for (; ; ) {
                    var l = n + i >> 1;
                    if ((l ? r[2 * l - 1] : 0) >= o)
                        i = l;
                    else {
                        if (!(r[2 * l + 1] < o)) {
                            t = r[2 * l + 2];
                            break
                        }
                        n = 1 + l
                    }
                }
            var s = t ? t.indexOf("overlay ") : -1;
            return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
        },
        getModeAt: function(e) {
            var t = this.doc.mode;
            return t.innerMode ? Zl.innerMode(t, this.getTokenAt(e).state).mode : t
        },
        getHelper: function(e, t) {
            return this.getHelpers(e, t)[0]
        },
        getHelpers: function(e, t) {
            var r = [];
            if (!Jl.hasOwnProperty(t))
                return r;
            var n = Jl[t]
              , i = this.getModeAt(e);
            if ("string" == typeof i[t])
                n[i[t]] && r.push(n[i[t]]);
            else if (i[t])
                for (var o = 0; o < i[t].length; o++) {
                    var l = n[i[t][o]];
                    l && r.push(l)
                }
            else
                i.helperType && n[i.helperType] ? r.push(n[i.helperType]) : n[i.name] && r.push(n[i.name]);
            for (var s = 0; s < n._global.length; s++) {
                var a = n._global[s];
                a.pred(i, this) && -1 == B(r, a.val) && r.push(a.val)
            }
            return r
        },
        getStateAfter: function(e, t) {
            var r = this.doc;
            return xt(this, (e = pt(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state
        },
        cursorCoords: function(e, t) {
            var r = this.doc.sel.primary();
            return Qr(this, null == e ? r.head : "object" == typeof e ? gt(this.doc, e) : e ? r.from() : r.to(), t || "page")
        },
        charCoords: function(e, t) {
            return Zr(this, gt(this.doc, e), t || "page")
        },
        coordsChar: function(e, t) {
            return tn(this, (e = qr(this, e, t || "page")).left, e.top)
        },
        lineAtHeight: function(e, t) {
            return e = qr(this, {
                top: e,
                left: 0
            }, t || "page").top,
            ot(this.doc, e + this.display.viewOffset)
        },
        heightAtLine: function(e, t, r) {
            var n, i = !1;
            if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? e = this.doc.first : o < e && (e = o,
                i = !0),
                n = et(this.doc, e)
            } else
                n = e;
            return $r(this, n, {
                top: 0,
                left: 0
            }, t || "page", r || i).top + (i ? this.doc.height - Zt(n) : 0)
        },
        defaultTextHeight: function() {
            return sn(this.display)
        },
        defaultCharWidth: function() {
            return an(this.display)
        },
        getViewport: function() {
            return {
                from: this.display.viewFrom,
                to: this.display.viewTo
            }
        },
        addWidget: function(e, t, r, n, i) {
            var o = this.display
              , l = (e = Qr(this, gt(this.doc, e))).bottom
              , s = e.left;
            if (t.style.position = "absolute",
            t.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(t),
            o.sizer.appendChild(t),
            "over" == n)
                l = e.top;
            else if ("above" == n || "near" == n) {
                var a = Math.max(o.wrapper.clientHeight, this.doc.height)
                  , u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom),
                s + t.offsetWidth > u && (s = u - t.offsetWidth)
            }
            t.style.top = l + "px",
            t.style.left = t.style.right = "",
            "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth,
            t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2),
            t.style.left = s + "px"),
            r && function(e, t) {
                var r = Hn(e, t);
                null != r.scrollTop && Rn(e, r.scrollTop),
                null != r.scrollLeft && Gn(e, r.scrollLeft)
            }(this, {
                left: s,
                top: l,
                right: s + t.offsetWidth,
                bottom: l + t.offsetHeight
            })
        },
        triggerOnKeyDown: ii(dl),
        triggerOnKeyPress: ii(gl),
        triggerOnKeyUp: pl,
        triggerOnMouseDown: ii(bl),
        execCommand: function(e) {
            if (il.hasOwnProperty(e))
                return il[e].call(null, this)
        },
        triggerElectric: ii(function(e) {
            Il(this, e)
        }),
        findPosH: function(e, t, r, n) {
            var i = 1;
            t < 0 && (i = -1,
            t = -t);
            for (var o = gt(this.doc, e), l = 0; l < t && !(o = Gl(this.doc, o, i, r, n)).hitSide; ++l)
                ;
            return o
        },
        moveH: ii(function(t, r) {
            var n = this;
            this.extendSelectionsBy(function(e) {
                return n.display.shift || n.doc.extend || e.empty() ? Gl(n.doc, e.head, t, r, n.options.rtlMoveVisually) : t < 0 ? e.from() : e.to()
            }, j)
        }),
        deleteH: ii(function(r, n) {
            var e = this.doc.sel
              , i = this.doc;
            e.somethingSelected() ? i.replaceSelection("", null, "+delete") : el(this, function(e) {
                var t = Gl(i, e.head, r, n, !1);
                return r < 0 ? {
                    from: t,
                    to: e.head
                } : {
                    from: e.head,
                    to: t
                }
            })
        }),
        findPosV: function(e, t, r, n) {
            var i = 1
              , o = n;
            t < 0 && (i = -1,
            t = -t);
            for (var l = gt(this.doc, e), s = 0; s < t; ++s) {
                var a = Qr(this, l, "div");
                if (null == o ? o = a.left : a.left = o,
                (l = Ul(this, a, i, r)).hitSide)
                    break
            }
            return l
        },
        moveV: ii(function(n, i) {
            var o = this
              , l = this.doc
              , s = []
              , a = !this.display.shift && !l.extend && l.sel.somethingSelected();
            if (l.extendSelectionsBy(function(e) {
                if (a)
                    return n < 0 ? e.from() : e.to();
                var t = Qr(o, e.head, "div");
                null != e.goalColumn && (t.left = e.goalColumn),
                s.push(t.left);
                var r = Ul(o, t, n, i);
                return "page" == i && e == l.sel.primary() && Fn(o, Zr(o, r, "div").top - t.top),
                r
            }, j),
            s.length)
                for (var e = 0; e < l.sel.ranges.length; e++)
                    l.sel.ranges[e].goalColumn = s[e]
        }),
        findWordAt: function(e) {
            var t = et(this.doc, e.line).text
              , r = e.ch
              , n = e.ch;
            if (t) {
                var i = this.getHelper(e, "wordChars");
                "before" != e.sticky && n != t.length || !r ? ++n : --r;
                for (var o = t.charAt(r), l = te(o, i) ? function(e) {
                    return te(e, i)
                }
                : /\s/.test(o) ? function(e) {
                    return /\s/.test(e)
                }
                : function(e) {
                    return !/\s/.test(e) && !te(e)
                }
                ; 0 < r && l(t.charAt(r - 1)); )
                    --r;
                for (; n < t.length && l(t.charAt(n)); )
                    ++n
            }
            return new Ti(at(e.line, r),at(e.line, n))
        },
        toggleOverwrite: function(e) {
            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? H(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"),
            Se(this, "overwriteToggle", this, this.state.overwrite))
        },
        hasFocus: function() {
            return this.display.input.getField() == W()
        },
        isReadOnly: function() {
            return !(!this.options.readOnly && !this.doc.cantEdit)
        },
        scrollTo: ii(function(e, t) {
            En(this, e, t)
        }),
        getScrollInfo: function() {
            var e = this.display.scroller;
            return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Dr(this) - this.display.barHeight,
                width: e.scrollWidth - Dr(this) - this.display.barWidth,
                clientHeight: Hr(this),
                clientWidth: Wr(this)
            }
        },
        scrollIntoView: ii(function(e, t) {
            null == e ? (e = {
                from: this.doc.sel.primary().head,
                to: null
            },
            null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                from: at(e, 0),
                to: null
            } : null == e.from && (e = {
                from: e,
                to: null
            }),
            e.to || (e.to = e.from),
            e.margin = t || 0,
            null != e.from.line ? function(e, t) {
                In(e),
                e.curOp.scrollToPos = t
            }(this, e) : zn(this, e.from, e.to, e.margin)
        }),
        setSize: ii(function(e, t) {
            function r(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
            }
            var n = this;
            null != e && (this.display.wrapper.style.width = r(e)),
            null != t && (this.display.wrapper.style.height = r(t)),
            this.options.lineWrapping && Kr(this);
            var i = this.display.viewFrom;
            this.doc.iter(i, this.display.viewTo, function(e) {
                if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                        if (e.widgets[t].noHScroll) {
                            vn(n, i, "widget");
                            break
                        }
                ++i
            }),
            this.curOp.forceUpdate = !0,
            Se(this, "refresh", this)
        }),
        operation: function(e) {
            return ri(this, e)
        },
        startOperation: function() {
            return qn(this)
        },
        endOperation: function() {
            return Zn(this)
        },
        refresh: ii(function() {
            var e = this.display.cachedTextHeight;
            gn(this),
            this.curOp.forceUpdate = !0,
            jr(this),
            En(this, this.doc.scrollLeft, this.doc.scrollTop),
            fi(this.display),
            (null == e || .5 < Math.abs(e - sn(this.display))) && fn(this),
            Se(this, "refresh", this)
        }),
        swapDoc: ii(function(e) {
            var t = this.doc;
            return t.cm = null,
            this.state.selectingText && this.state.selectingText(),
            zi(this, e),
            jr(this),
            this.display.input.reset(),
            En(this, e.scrollLeft, e.scrollTop),
            this.curOp.forceScroll = !0,
            pr(this, "swapDoc", this, t),
            t
        }),
        phrase: function(e) {
            var t = this.options.phrases;
            return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
        },
        getInputField: function() {
            return this.display.input.getField()
        },
        getWrapperElement: function() {
            return this.display.wrapper
        },
        getScrollerElement: function() {
            return this.display.scroller
        },
        getGutterElement: function() {
            return this.display.gutters
        }
    },
    Me(Zl),
    Zl.registerHelper = function(e, t, r) {
        Jl.hasOwnProperty(e) || (Jl[e] = Zl[e] = {
            _global: []
        }),
        Jl[e][t] = r
    }
    ,
    Zl.registerGlobalHelper = function(e, t, r, n) {
        Zl.registerHelper(e, t, n),
        Jl[e]._global.push({
            pred: r,
            val: n
        })
    }
    ;
    var ts, rs = "iter insert remove copy getEditor constructor".split(" ");
    for (var ns in Fo.prototype)
        Fo.prototype.hasOwnProperty(ns) && B(rs, ns) < 0 && (Al.prototype[ns] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(Fo.prototype[ns]));
    return Me(Fo),
    Al.inputStyles = {
        textarea: _l,
        contenteditable: Vl
    },
    Al.defineMode = function(e) {
        Al.defaults.mode || "null" == e || (Al.defaults.mode = e),
        function(e, t) {
            2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            Ke[e] = t
        }
        .apply(this, arguments)
    }
    ,
    Al.defineMIME = function(e, t) {
        je[e] = t
    }
    ,
    Al.defineMode("null", function() {
        return {
            token: function(e) {
                return e.skipToEnd()
            }
        }
    }),
    Al.defineMIME("text/plain", "null"),
    Al.defineExtension = function(e, t) {
        Al.prototype[e] = t
    }
    ,
    Al.defineDocExtension = function(e, t) {
        Fo.prototype[e] = t
    }
    ,
    Al.fromTextArea = function(t, e) {
        if ((e = e ? I(e) : {}).value = t.value,
        !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
        !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
        null == e.autofocus) {
            var r = W();
            e.autofocus = r == t || null != t.getAttribute("autofocus") && r == document.body
        }
        function n() {
            t.value = s.getValue()
        }
        var i;
        if (t.form && (we(t.form, "submit", n),
        !e.leaveSubmitMethodAlone)) {
            var o = t.form;
            i = o.submit;
            try {
                var l = o.submit = function() {
                    n(),
                    o.submit = i,
                    o.submit(),
                    o.submit = l
                }
            } catch (e) {}
        }
        e.finishInit = function(e) {
            e.save = n,
            e.getTextArea = function() {
                return t
            }
            ,
            e.toTextArea = function() {
                e.toTextArea = isNaN,
                n(),
                t.parentNode.removeChild(e.getWrapperElement()),
                t.style.display = "",
                t.form && (Ce(t.form, "submit", n),
                "function" == typeof t.form.submit && (t.form.submit = i))
            }
        }
        ,
        t.style.display = "none";
        var s = Al(function(e) {
            return t.parentNode.insertBefore(e, t.nextSibling)
        }, e);
        return s
    }
    ,
    (ts = Al).off = Ce,
    ts.on = we,
    ts.wheelEventPixels = Si,
    ts.Doc = Fo,
    ts.splitLines = Be,
    ts.countColumn = z,
    ts.findColumn = X,
    ts.isWordChar = ee,
    ts.Pass = U,
    ts.signal = Se,
    ts.Line = er,
    ts.changeEnd = Oi,
    ts.scrollbarModel = Yn,
    ts.Pos = at,
    ts.cmpPos = ut,
    ts.modes = Ke,
    ts.mimeModes = je,
    ts.resolveMode = Xe,
    ts.getMode = Ye,
    ts.modeExtensions = _e,
    ts.extendMode = $e,
    ts.copyState = qe,
    ts.startState = Qe,
    ts.innerMode = Ze,
    ts.commands = il,
    ts.keyMap = Xo,
    ts.keyName = Qo,
    ts.isModifierKey = qo,
    ts.lookupKey = $o,
    ts.normalizeKeyMap = _o,
    ts.StringStream = Je,
    ts.SharedTextMarker = Ao,
    ts.TextMarker = No,
    ts.LineWidget = ko,
    ts.e_preventDefault = Ne,
    ts.e_stopPropagation = Oe,
    ts.e_stop = De,
    ts.addClass = H,
    ts.contains = D,
    ts.rmClass = T,
    ts.keyNames = Uo,
    Al.version = "5.48.4",
    Al
});
