import { defineComponent as a, ref as c, onMounted as p, resolveComponent as l, openBlock as i, createElementBlock as m, createVNode as u, mergeProps as d, unref as _ } from "vue";
const f = { class: "my-progress" }, g = /* @__PURE__ */ a({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      default: 0
    },
    // 进度条时间
    time: {
      type: Number,
      default: 1e3
    },
    // 是否展示动画效果
    isAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n;
    let t = c(0);
    return p(() => {
      if (e.isAnimation) {
        let r = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          if (t.value >= e.percentage) {
            t.value = e.percentage, clearInterval(o);
            return;
          }
          t.value += 1;
        }, r);
      } else
        t.value = e.percentage;
    }), (r, o) => {
      const s = l("el-progress");
      return i(), m("div", f, [
        u(s, d({ percentage: _(t) }, r.$attrs), null, 16, ["percentage"])
      ]);
    };
  }
}), v = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, o] of e)
    t[r] = o;
  return t;
}, y = /* @__PURE__ */ v(g, [["__scopeId", "data-v-ce3d3de3"]]), h = {
  install(n) {
    n.component("my-progress", y);
  }
};
export {
  h as default
};
