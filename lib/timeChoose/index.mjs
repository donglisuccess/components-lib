import { defineComponent as S, ref as m, watch as u, resolveComponent as T, openBlock as y, createElementBlock as h, createVNode as p, mergeProps as g, unref as d, isRef as f } from "vue";
const v = /* @__PURE__ */ S({
  __name: "index",
  props: {
    // 开始的占位
    startPlaceHolder: {
      type: String,
      default: "开始时间"
    },
    // 开始时间
    startBeginTime: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步长
    startStep: {
      type: String,
      default: "00:15"
    },
    // 开始的结束时间
    startEndTime: {
      type: String,
      default: "18:00"
    },
    // 结束时间占位
    endPlaceHolder: {
      type: String,
      default: "结束时间"
    },
    // 结束开始时间
    endBeginTime: {
      type: String,
      default: "08:00"
    },
    // 结束步长
    endStep: {
      type: String,
      default: "00:15"
    },
    // 结束时间
    endEndTime: {
      type: String,
      default: "18:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: c }) {
    const s = c;
    let t = m(""), l = m(""), r = m(!0);
    return u(() => t.value, (n) => {
      n ? r.value = !1 : (l.value = "", r.value = !0), s("startChange", n);
    }), u(() => l.value, (n) => {
      s("endChange", {
        startTime: t.value,
        endTime: n
      });
    }), (n, i) => {
      const o = T("el-time-select");
      return y(), h("div", null, [
        p(o, g({
          modelValue: d(t),
          "onUpdate:modelValue": i[0] || (i[0] = (a) => f(t) ? t.value = a : t = a),
          style: { width: "240px", "margin-right": "10px" },
          "max-time": d(l),
          placeholder: e.startPlaceHolder,
          start: e.startBeginTime,
          step: e.startStep,
          end: e.startEndTime
        }, n.$attrs.startOptions || {}), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"]),
        p(o, g({
          modelValue: d(l),
          "onUpdate:modelValue": i[1] || (i[1] = (a) => f(l) ? l.value = a : l = a),
          style: { width: "240px" },
          "min-time": d(t),
          disabled: d(r),
          placeholder: e.endPlaceHolder,
          start: e.endBeginTime,
          step: e.endStep,
          end: e.endEndTime
        }, n.$attrs.endOptions || {}), null, 16, ["modelValue", "min-time", "disabled", "placeholder", "start", "step", "end"])
      ]);
    };
  }
}), V = {
  install(e) {
    e.component("my-time-choose", v);
  }
};
export {
  V as default
};
