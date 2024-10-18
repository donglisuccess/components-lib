import { defineComponent as i, useSlots as u, openBlock as o, createElementBlock as c, unref as y, normalizeStyle as l, renderSlot as f, createCommentVNode as m, createElementVNode as v, toDisplayString as p, createBlock as a, resolveDynamicComponent as s } from "vue";
const x = { class: "content" }, S = { class: "text" }, C = /* @__PURE__ */ i({
  __name: "index",
  props: {
    // 图标的类型
    type: {
      type: String,
      default: "up"
    },
    // 文字
    text: {
      type: String
    },
    // 上升图标的颜色
    upColor: {
      type: String,
      default: "#52c41a"
    },
    // 下降图标的颜色
    downColor: {
      type: String,
      default: "#f5222d"
    },
    // 定义文字颜色
    textColor: {
      type: String,
      default: "#000"
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "arrow-up"
    }
  },
  setup(e) {
    const n = u();
    return (t, r) => (o(), c("div", x, [
      y(n).default ? (o(), c(
        "div",
        {
          key: 0,
          class: "text",
          style: l({ color: e.textColor })
        },
        [
          f(t.$slots, "default", {}, void 0, !0)
        ],
        4
        /* STYLE */
      )) : m("v-if", !0),
      v(
        "div",
        S,
        p(e.text),
        1
        /* TEXT */
      ),
      e.type === "up" ? (o(), a(s(`el-icon-${e.icon}`), {
        key: 1,
        style: l({ color: e.reverse ? "#f5222d" : e.upColor })
      }, null, 8, ["style"])) : (o(), a(s(e.type === "up" ? `el-icon-${e.icon}` : "el-icon-arrow-down"), {
        key: 2,
        style: l({ color: e.reverse ? "#52c41a" : e.downColor })
      }, null, 8, ["style"]))
    ]));
  }
}), g = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, d] of n)
    t[r] = d;
  return t;
}, k = /* @__PURE__ */ g(C, [["__scopeId", "data-v-2371737d"]]), B = {
  install(e) {
    e.component("my-trend", k);
  }
};
export {
  B as default
};
