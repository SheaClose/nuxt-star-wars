webpackJsonp([2], {
  A1hl: function(t, e, n) {
    var r = n("RIK0");
    "string" == typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    n("rjj0")("311b0b24", r, !1, { sourceMap: !1 });
  },
  B9HC: function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n("IAiR"),
      a = n("jT6T"),
      o = !1;
    var i = function(t) {
        o || n("A1hl");
      },
      s = n("VU/8")(r.a, a.a, !1, i, "data-v-29dde822", null);
    (s.options.__file = "pages/About/_id.vue"), (e.default = s.exports);
  },
  IAiR: function(t, e, n) {
    "use strict";
    e.a = {
      data: function() {
        return { people: [] };
      },
      computed: {
        person: function() {
          var t = this.$router.history.current.params.id;
          return this.people[t] || {};
        }
      },
      components: {},
      mounted: function() {
        this.people = this.$store.state.people;
      }
    };
  },
  RIK0: function(t, e, n) {
    (t.exports = n("FZ+f")(!1)).push([
      t.i,
      ".nuxt_btn[data-v-29dde822]{background-color:transparent}.person[data-v-29dde822]{width:80vw;margin:auto;padding:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.person div[data-v-29dde822]{padding:10px}.btn[data-v-29dde822]{background-color:#08f;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}",
      ""
    ]);
  },
  jT6T: function(t, e, n) {
    "use strict";
    var r = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n(
        "div",
        [
          n("nuxt-link", { staticClass: "nuxt_btn", attrs: { to: "/" } }, [
            n("button", { staticClass: "btn" }, [t._v("Back")])
          ]),
          n("div", { staticClass: "person" }, [
            n("ul", [
              n("div", [t._v("Name: " + t._s(t.person.name) + " ")]),
              n("div", [t._v("Gender: " + t._s(t.person.gender) + " ")]),
              n("div", [
                t._v("Year of Birth: " + t._s(t.person.birth_year) + " ")
              ])
            ])
          ])
        ],
        1
      );
    };
    r._withStripped = !0;
    var a = { render: r, staticRenderFns: [] };
    e.a = a;
  }
});
