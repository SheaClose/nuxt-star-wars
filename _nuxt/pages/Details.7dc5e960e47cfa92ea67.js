webpackJsonp([1], {
  "9jXS": function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = i("UkXr"),
      n = i("kOpR"),
      a = !1;
    var o = function(t) {
        a || i("Cx4c");
      },
      r = i("VU/8")(s.a, n.a, !1, o, null, null);
    (r.options.__file = "pages/Details.vue"), (e.default = r.exports);
  },
  Cx4c: function(t, e, i) {
    var s = i("G4kj");
    "string" == typeof s && (s = [[t.i, s, ""]]),
      s.locals && (t.exports = s.locals);
    i("rjj0")("afb43002", s, !1, { sourceMap: !1 });
  },
  G4kj: function(t, e, i) {
    (t.exports = i("FZ+f")(!1)).push([
      t.i,
      ".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",
      ""
    ]);
  },
  UkXr: function(t, e, i) {
    "use strict";
    e.a = {
      data: function() {
        return { test: "ThIs Is A Test Of ThE FilTerS PiPe!" };
      },
      components: {}
    };
  },
  kOpR: function(t, e, i) {
    "use strict";
    var s = function() {
      var t = this.$createElement,
        e = this._self._c || t;
      return e("section", { staticClass: "container" }, [
        e("p", { staticClass: "title" }, [
          this._v(
            "\n    With Filter: " +
              this._s(this._f("upperCase")(this.test)) +
              " "
          ),
          e("br"),
          this._v("\n    Without Filter: " + this._s(this.test) + "\n  ")
        ])
      ]);
    };
    s._withStripped = !0;
    var n = { render: s, staticRenderFns: [] };
    e.a = n;
  }
});
