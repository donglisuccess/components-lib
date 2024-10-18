import { defineComponent as c, resolveComponent as o, openBlock as n, createBlock as a, withCtx as t, renderSlot as p, createVNode as d, resolveDynamicComponent as u, unref as m } from "vue";
const s = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), f = /* @__PURE__ */ c({
  __name: "index",
  props: {
    // 图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 显示值
    value: {
      type: [String, Number],
      default: 0
    },
    // 最大显示值
    max: {
      type: Number,
      default: 99
    },
    // 是否显示点点
    isDot: {
      type: Boolean,
      default: !1
    },
    // popover的宽度
    popoverWidth: {
      type: Number,
      default: 300
    }
  },
  setup(e) {
    return (l, v) => {
      const r = o("el-badge"), i = o("el-popover");
      return n(), a(i, {
        placement: "bottom",
        width: e.popoverWidth,
        trigger: "click",
        "popper-class": "notification-poper"
      }, {
        default: t(() => [
          p(l.$slots, "default")
        ]),
        reference: t(() => [
          d(r, {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot,
            style: { cursor: "pointer" }
          }, {
            default: t(() => [
              (n(), a(u(`el-icon${m(s)(e.icon)}`)))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["width"]);
    };
  }
}), y = {
  install(e) {
    e.component("my-notification", f);
  }
};
export {
  y as default
};
