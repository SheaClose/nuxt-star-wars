webpackJsonp([3], {
  "8/Cx": function(t, e, i) {
    "use strict";
    e.a = {
      mounted: function() {
        this.$store.dispatch("getPeople");
      }
    };
  },
  DLCH: function(t, e, i) {
    "use strict";
    var n = function() {
      var t = this.$createElement,
        e = this._self._c || t;
      return e(
        "div",
        [
          e(
            "div",
            { staticClass: "links" },
            [
              e("nuxt-link", { attrs: { exact: "", to: "/" } }, [
                this._v("Home")
              ]),
              e("nuxt-link", { attrs: { exact: "", to: "/Details" } }, [
                this._v("Details")
              ])
            ],
            1
          ),
          e("nuxt")
        ],
        1
      );
    };
    n._withStripped = !0;
    var s = { render: n, staticRenderFns: [] };
    e.a = s;
  },
  Ma2J: function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i("8/Cx"),
      s = i("DLCH"),
      a = !1;
    var o = function(t) {
        a || i("Yb51");
      },
      r = i("VU/8")(n.a, s.a, !1, o, null, null);
    (r.options.__file = "layouts/default.vue"), (e.default = r.exports);
  },
  Yb51: function(t, e, i) {
    var n = i("fw30");
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i("rjj0")("dbab5c6c", n, !1, { sourceMap: !1 });
  },
  fw30: function(t, e, i) {
    (t.exports = i("FZ+f")(!1)).push([
      t.i,
      ".links,a{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-line-pack:center;align-content:center;color:#ddd;background-color:#222;padding:8px}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}",
      ""
    ]);
  }
});
