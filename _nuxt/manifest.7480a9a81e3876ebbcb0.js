!(function(e) {
  var n = window.webpackJsonp;
  window.webpackJsonp = function(t, a, c) {
    for (var u, i, f, s = 0, l = []; s < t.length; s++)
      (i = t[s]), r[i] && l.push(r[i][0]), (r[i] = 0);
    for (u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
    for (n && n(t, a, c); l.length; ) l.shift()();
    if (c) for (s = 0; s < c.length; s++) f = o((o.s = c[s]));
    return f;
  };
  var t = {},
    r = { 6: 0 };
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function(e) {
    var n = r[e];
    if (0 === n)
      return new Promise(function(e) {
        e();
      });
    if (n) return n[2];
    var t = new Promise(function(t, o) {
      n = r[e] = [t, o];
    });
    n[2] = t;
    var a = document.getElementsByTagName("head")[0],
      c = document.createElement("script");
    (c.type = "text/javascript"),
      (c.charset = "utf-8"),
      (c.async = !0),
      (c.timeout = 12e4),
      o.nc && c.setAttribute("nonce", o.nc),
      (c.src =
        o.p +
        "" +
        ({
          0: "pages/index",
          1: "pages/Details",
          2: "pages/About/_id",
          3: "layouts/default"
        }[e] || e) +
        "." +
        {
          0: "3b9c1efe1ee2c3531e29",
          1: "7dc5e960e47cfa92ea67",
          2: "4ec24ad51bf29f4e1e57",
          3: "f07746a40e32cc6ff101"
        }[e] +
        ".js");
    var u = setTimeout(i, 12e4);
    function i() {
      (c.onerror = c.onload = null), clearTimeout(u);
      var n = r[e];
      0 !== n &&
        (n && n[1](new Error("Loading chunk " + e + " failed.")),
        (r[e] = void 0));
    }
    return (c.onerror = c.onload = i), a.appendChild(c), t;
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function(e, n, t) {
      o.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: t
        });
    }),
    (o.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = "./_nuxt/"),
    (o.oe = function(e) {
      throw (console.error(e), e);
    });
})([]);
