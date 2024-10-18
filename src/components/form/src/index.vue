<template>
    <el-form
        v-if="model"
        ref="form"
        v-bind="$attrs" 
        :model="model" 
        :rules="rules"
        :validate-on-rule-change="false">
        <template v-for="(item) in options">
            <el-form-item
                v-if="!item.children || !item.children.length"
                :prop="item.prop"
                :label="item.label"
                :style="item.style">
                <component
                    v-if="item.type !== 'upload' && item.type !== 'editor'"
                    :is="`el-${ item.type }`"
                    v-model="model[item.prop!]"
                    :placeholder="item.placeholder"
                    v-bind="item.attrs">
                </component>
                <el-upload v-if="item.type === 'upload'" v-bind="item.uploadAttrs"
                    :on-preview="onPreview"
                    :on-remove="onRemove"
                    :on-success="onSuccess"
                    :on-error="onError"
                    :on-progress="onProgress"
                    :on-change="onChange"
                    :on-exceed="onExceed"
                    :before-upload="beforeUpload"
                    :before-remove="beforeRemove"
                    :http-request="httpRequest">
                    <template #default>
                        <slot name="uploadArea"></slot>
                    </template>   
                    <template #tip>
                        <slot name="uploadTips"></slot>
                    </template>
                </el-upload>    
                <div id="editor" v-if="item.type === 'editor'">
                </div>
            </el-form-item>
            <el-form-item
                v-if="item.children && item.children.length"
                :prop="item.prop"
                :label="item.label"
                :style="item.style">
                <component 
                    :is="`el-${ item.type }`" 
                    v-model="model[item.prop!]"
                    :placeholder="item.placeholder"
                    v-bind="item.attrs">
                    <component 
                        v-for="(child, i) in item.children"
                        :value="child.value"
                        :key="i"
                        :is="`el-${ child.type }`"
                        :label="child.label"></component>
                </component>    
            </el-form-item>
        </template>
        <el-form-item>
            <slot name="actions" :form="form" :model="model"></slot>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch, nextTick} from 'vue'
import { FormOption, FormInstance} from './types/type.d.ts'
import cloneDeep from 'lodash/cloneDeep'
import E from 'wangeditor'

const props = defineProps({
    options: {
        type: Array as PropType<FormOption[]>,
        required: true
    },
    httpRequest: {
        type: Function
    }
})

const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove'])

const model = ref<any>(null)
const rules = ref<any>(null)

let editorObj = ref()

// 由于涉及到富文本编辑器无法重置，所以需要重写resetFields方法
const resetFields = () => {
    form.value?.resetFields()
    if(props.options && props.options.length) {
        let editorProps = props.options.find(item => item.type === 'editor')
        if(editorProps) {
            editorObj.value.txt.html(editorProps?.value)
        }
    }
}

// 获取form组件的值，暴露给外部
const getFormValue = () => {
    return model.value
}

// 实例对象
const form = ref<FormInstance | null>(null)
// 验证函数validate
const validate = () => {
    return form.value?.validate
}

defineExpose({
    resetFields,
    getFormValue,
    validate
})


const initModel = () => {
    if(props.options && props.options.length) {
        let m: any = {}
        let r: any = {}
        props.options.forEach(item => {
            m[item.prop!] = item.value
            r[item.prop!] = item.rules
            // 如果是富文本编辑器，此时开始创建富文本编辑器所在区域
            if(item.type === 'editor') {
                // 此时需要在dom渲染出来之后，找到对应的id，才可以创建
                nextTick(() => {
                    if(document.getElementById("editor")) {
                        const editor = new E("#editor")
                        editorObj.value = editor
                        editor.config.placeholder = item.placeholder!
                        editor.create()
                        editor.txt.html(m[item.prop!])
                        editor.config.onchange = (newHtml: string) => {
                            model.value[item.prop!] = newHtml
                        }
                    }
                })
            }
        })
        model.value = cloneDeep(m)
        rules.value = cloneDeep(r)
    }
}


onMounted(() => {
    initModel()
})

const onPreview = (file: any) => {
    emits('on-preview', file)
}
const onRemove = (file: any, fileList: any) => {
    emits('on-remove', {file, fileList})
}
const onSuccess = (response: any, file: any, fileList: any) => {
    emits('on-success', {response, file, fileList})
}
const onError = (error: any, file: any, fileList: any) => {
    emits('on-error', {error, file, fileList})
}
const onProgress = (event: any, file: any, fileList: any) => {
    emits('on-progress', {event, file, fileList})
}
const onChange = (file: any, fileList: any) => {
    emits('on-change', {file, fileList})
}
const onExceed = (files: any, fileList: any) => {
    emits('on-exceed', {files, fileList})
}
const beforeUpload = (file: any) => {
    emits('before-upload', file)
}
const beforeRemove = (file: any, fileList: any) => {
    emits('before-remove', {file, fileList})
}

// 监听如果props.options发生改变，则重新赋值
watch(() => props.options, () => {
    initModel()
})

</script>

<style scoped>

</style>