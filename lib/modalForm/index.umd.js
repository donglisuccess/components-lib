(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=e.defineComponent({__name:"index",props:{visible:{type:Boolean,required:!0},options:{type:Array,required:!0},handlerPreview:{type:Function},handlerRemove:{type:Function},handlerSuccess:{type:Function},handlerError:{type:Function},handlerprogress:{type:Function},handlerChange:{type:Function},handlerExceed:{type:Function},beforeUpload:{type:Function},beforeRemove:{type:Function},scrollShow:{type:Boolean,default:!1}},emits:["update:visible"],setup(o,{emit:s}){const a=s;let l=e.ref();const i=o,r=e.ref(i.visible);return e.watch(()=>i.visible,n=>{r.value=n}),e.watch(()=>r.value,n=>{a("update:visible",n)}),(n,d)=>{const c=e.resolveComponent("my-form"),f=e.resolveComponent("el-dialog");return e.openBlock(),e.createBlock(f,e.mergeProps({modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m)},n.$attrs,{class:{"m-choose-dialog-body-height":o.scrollShow}}),{default:e.withCtx(()=>[e.createVNode(c,{ref_key:"form",ref:l,"label-width":100,options:o.options,onOnPreview:o.handlerPreview,onOnRemove:o.handlerRemove,onOnSuccess:o.handlerSuccess,onOnError:o.handlerError,onOnProgress:o.handlerprogress,onOnChange:o.handlerChange,onOnExceed:o.handlerExceed,onBeforeUpload:o.beforeUpload,onBeforeRemove:o.beforeRemove},{uploadArea:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadArea")]),uploadTips:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadTips")]),_:3},8,["options","onOnPreview","onOnRemove","onOnSuccess","onOnError","onOnProgress","onOnChange","onOnExceed","onBeforeUpload","onBeforeRemove"])]),footer:e.withCtx(()=>[e.renderSlot(n.$slots,"footer",{form:e.unref(l)})]),_:3},16,["modelValue","class"])}}});return{install(o){o.component("my-modal-form",t)}}});