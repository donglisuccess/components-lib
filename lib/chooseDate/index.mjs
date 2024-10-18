import { defineComponent as h, ref as r, watch as b, resolveComponent as C, openBlock as y, createElementBlock as V, createVNode as c, mergeProps as p, unref as _ } from "vue";
const x = { class: "content" }, T = /* @__PURE__ */ h({
  __name: "index",
  props: {
    // 开始时间占位符
    startPlaceHolder: {
      type: String,
      default: "开始日期"
    },
    // 结束时间占位符
    endPlaceHolder: {
      type: String,
      default: "结束日期"
    },
    // 之前时间是否可选
    beforeDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["startDateChange", "endDateChange"],
  setup(l, { emit: s }) {
    const e = r(null), t = r(null);
    let n = r(!0);
    const m = l, u = s, f = (a) => {
      if (m.beforeDisabled) return (/* @__PURE__ */ new Date()).getTime() - a.getTime() > 1e3 * 3600 * 24;
    }, g = (a) => {
      if (e.value) return a.getTime() - e.value.getTime() < 1e3 * 3600 * 24;
    };
    b(() => e.value, (a) => {
      a ? (t.value && t.value.getTime() - a.getTime() < 1e3 * 3600 * 24 && (t.value = null), n.value = !1) : (t.value = null, n.value = !0);
    });
    const v = () => {
      u("startDateChange", e.value);
    }, D = () => {
      u("endDateChange", {
        startDate: e.value,
        endDate: t.value
      });
    };
    return (a, o) => {
      const i = C("el-date-picker");
      return y(), V("div", x, [
        c(i, p({
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => e.value = d),
          type: "date",
          style: { margin: "0px 10px" },
          placeholder: l.startPlaceHolder,
          "disabled-date": f
        }, a.$attrs.startOptions || {}, { onChange: v }), null, 16, ["modelValue", "placeholder"]),
        c(i, p({
          modelValue: t.value,
          "onUpdate:modelValue": o[1] || (o[1] = (d) => t.value = d),
          type: "date",
          style: { margin: "0px 10px" },
          placeholder: l.endPlaceHolder,
          disabled: _(n),
          "disabled-date": g
        }, a.$attrs.endOptions || {}, { onChange: D }), null, 16, ["modelValue", "placeholder", "disabled"])
      ]);
    };
  }
}), k = (l, s) => {
  const e = l.__vccOpts || l;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, P = /* @__PURE__ */ k(T, [["__scopeId", "data-v-3cf11672"]]), B = {
  install(l) {
    l.component("my-choose-date", P);
  }
};
export {
  B as default
};
