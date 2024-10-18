import { defineComponent as $, resolveComponent as i, openBlock as e, createElementBlock as o, createVNode as g, withCtx as u, Fragment as y, renderList as C, createBlock as m, createCommentVNode as f, createElementVNode as c, toDisplayString as r, createTextVNode as z, normalizeClass as A, resolveDynamicComponent as B, unref as I } from "vue";
const S = (n) => n.replace(/([A-Z])/g, "-$1").toLowerCase(), T = ["onClick"], w = { class: "itemContent" }, D = { class: "itemTitle" }, E = { key: 0 }, F = { class: "time" }, O = { class: "time" }, Z = { class: "actionListStyle" }, j = ["onClick"], q = /* @__PURE__ */ $({
  __name: "index",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    actionList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["actionClick", "itemClick"],
  setup(n, { emit: p }) {
    const s = p, v = (_, d) => {
      s("itemClick", _, d);
    }, k = (_, d) => {
      s("actionClick", _, d);
    };
    return (_, d) => {
      const b = i("el-avatar"), x = i("el-tag"), L = i("el-tab-pane"), N = i("el-tabs"), V = i("el-scrollbar");
      return e(), o("div", null, [
        g(V, {
          "max-height": "400px",
          class: "my-list"
        }, {
          default: u(() => [
            g(N, null, {
              default: u(() => [
                (e(!0), o(
                  y,
                  null,
                  C(n.list, (l, a) => (e(), m(L, {
                    key: a,
                    label: l.title
                  }, {
                    default: u(() => [
                      (e(!0), o(
                        y,
                        null,
                        C(l.content, (t, h) => (e(), o("div", {
                          key: h,
                          class: "list-item",
                          onClick: (J) => v(t, h)
                        }, [
                          t.avator ? (e(), m(b, {
                            key: 0,
                            size: 40,
                            src: t.avator,
                            class: "avator"
                          }, null, 8, ["src"])) : f("v-if", !0),
                          c("div", w, [
                            c("div", D, [
                              t.title ? (e(), o(
                                "div",
                                E,
                                r(t.title),
                                1
                                /* TEXT */
                              )) : f("v-if", !0),
                              t.tag ? (e(), m(x, {
                                key: 1,
                                type: t.tagType,
                                size: "small"
                              }, {
                                default: u(() => [
                                  z(
                                    r(t.tag),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["type"])) : f("v-if", !0)
                            ]),
                            c(
                              "div",
                              F,
                              r(t.content),
                              1
                              /* TEXT */
                            ),
                            c(
                              "div",
                              O,
                              r(t.time),
                              1
                              /* TEXT */
                            )
                          ])
                        ], 8, T))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        c("div", Z, [
          (e(!0), o(
            y,
            null,
            C(n.actionList, (l, a) => (e(), o("div", {
              key: a,
              class: A(["actionItem", { borderStyle: a !== n.actionList.length - 1 }]),
              onClick: (t) => k(l, a)
            }, [
              (e(), m(B(`el-icon${I(S)(l.icon)}`), { class: "actionIcon" })),
              c(
                "span",
                null,
                r(l.text),
                1
                /* TEXT */
              )
            ], 10, j))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]);
    };
  }
}), G = (n, p) => {
  const s = n.__vccOpts || n;
  for (const [v, k] of p)
    s[v] = k;
  return s;
}, H = /* @__PURE__ */ G(q, [["__scopeId", "data-v-28cec684"]]), M = {
  install(n) {
    n.component("my-list", H);
  }
};
export {
  M as default
};
