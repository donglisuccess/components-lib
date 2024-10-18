import { defineComponent as v, ref as d, watch as i, resolveComponent as c, openBlock as y, createBlock as O, mergeProps as g, withCtx as r, createVNode as b, renderSlot as l, unref as w } from "vue";
const F = /* @__PURE__ */ v({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      required: !0
    },
    options: {
      type: Array,
      required: !0
    },
    handlerPreview: {
      type: Function
    },
    handlerRemove: {
      type: Function
    },
    handlerSuccess: {
      type: Function
    },
    handlerError: {
      type: Function
    },
    handlerprogress: {
      type: Function
    },
    handlerChange: {
      type: Function
    },
    handlerExceed: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    scrollShow: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: u }) {
    const m = u;
    let t = d();
    const a = e, n = d(a.visible);
    return i(() => a.visible, (o) => {
      n.value = o;
    }), i(() => n.value, (o) => {
      m("update:visible", o);
    }), (o, s) => {
      const f = c("my-form"), h = c("el-dialog");
      return y(), O(h, g({
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (p) => n.value = p)
      }, o.$attrs, {
        class: { "m-choose-dialog-body-height": e.scrollShow }
      }), {
        default: r(() => [
          b(f, {
            ref_key: "form",
            ref: t,
            "label-width": 100,
            options: e.options,
            onOnPreview: e.handlerPreview,
            onOnRemove: e.handlerRemove,
            onOnSuccess: e.handlerSuccess,
            onOnError: e.handlerError,
            onOnProgress: e.handlerprogress,
            onOnChange: e.handlerChange,
            onOnExceed: e.handlerExceed,
            onBeforeUpload: e.beforeUpload,
            onBeforeRemove: e.beforeRemove
          }, {
            uploadArea: r(() => [
              l(o.$slots, "uploadArea")
            ]),
            uploadTips: r(() => [
              l(o.$slots, "uploadTips")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["options", "onOnPreview", "onOnRemove", "onOnSuccess", "onOnError", "onOnProgress", "onOnChange", "onOnExceed", "onBeforeUpload", "onBeforeRemove"])
        ]),
        footer: r(() => [
          l(o.$slots, "footer", { form: w(t) })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["modelValue", "class"]);
    };
  }
}), C = {
  install(e) {
    e.component("my-modal-form", F);
  }
};
export {
  C as default
};
