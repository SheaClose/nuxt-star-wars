webpackJsonp([0], {
  "/TYz": function(t, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var n = e("awMj"),
      i = e("rGQh"),
      r = !1;
    var s = function(t) {
        r || e("3Q0M");
      },
      o = e("VU/8")(n.a, i.a, !1, s, "data-v-2a183b29", null);
    (o.options.__file = "pages/index.vue"), (a.default = o.exports);
  },
  "3Q0M": function(t, a, e) {
    var n = e("Fbwe");
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    e("rjj0")("1508f095", n, !1, { sourceMap: !1 });
  },
  Fbwe: function(t, a, e) {
    (t.exports = e("FZ+f")(!1)).push([
      t.i,
      "img[data-v-2a183b29]{display:block;margin:15px}.card[data-v-2a183b29]{overflow:hidden;width:27%;padding:15px;display:inline-block;height:200px;margin:25px auto}.btn[data-v-2a183b29]{background-color:#08f;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.btn[data-v-2a183b29]:hover{opacity:.8}.btn[data-v-2a183b29]:disabled{opacity:.2}.btns[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.card_container[data-v-2a183b29]{width:80%;margin:10px auto;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:justify;align-content:space-between}h1[data-v-2a183b29]{text-align:center}.boy[data-v-2a183b29]{background-color:#00bfff}.girl[data-v-2a183b29]{background-color:#f0e}",
      ""
    ]);
  },
  awMj: function(t, a, e) {
    "use strict";
    e("NYxO");
    var n = e("mtWM");
    e.n(n);
    a.a = {
      data: function() {
        return {
          page: 1,
          personPath: function(t) {
            return "/About/" + t;
          }
        };
      },
      methods: {
        advancePage: function() {
          this.$store.dispatch("getNextPeople");
        },
        retreatPage: function() {
          this.$store.dispatch("getLastPeople");
        }
      },
      computed: {
        people: function() {
          return this.$store.state.people || [];
        }
      }
    };
  },
  rGQh: function(t, a, e) {
    "use strict";
    var n = function() {
      var t = this,
        a = t.$createElement,
        e = t._self._c || a;
      return e("section", [
        e("div", [
          e("div", { staticClass: "card_container btns" }, [
            e(
              "button",
              {
                staticClass: "btn",
                attrs: { disabled: !t.$store.state.previous },
                on: { click: t.retreatPage }
              },
              [t._v("Back")]
            ),
            e("h1", [t._v("\n        Home\n      ")]),
            e(
              "button",
              {
                staticClass: "btn",
                attrs: { disabled: !t.$store.state.next },
                on: { click: t.advancePage }
              },
              [t._v("Forward")]
            )
          ]),
          e(
            "div",
            { staticClass: "card_container" },
            t._l(t.people, function(a, n) {
              return e(
                "nuxt-link",
                {
                  key: n,
                  staticClass: "card",
                  class: "Female" === a.gender ? "girl" : "boy",
                  attrs: { to: t.personPath(n) }
                },
                [
                  e("center", [
                    e("img", { attrs: { src: a.img_url, alt: "" } })
                  ]),
                  t._v("\n        Name: " + t._s(a.name)),
                  e("br")
                ],
                1
              );
            })
          )
        ])
      ]);
    };
    n._withStripped = !0;
    var i = { render: n, staticRenderFns: [] };
    a.a = i;
  }
});
