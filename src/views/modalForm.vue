<template>
    <div>
        <el-button type="primary" @click="open">打开弹出框</el-button>
        <my-modal-form 
            v-model:visible="visible"
            title="表单"
            :options="options"
            :beforeUpload="beforeUpload"
            :scrollShow="true">
            <template #uploadArea>
                <el-button type="primary">Click to upload</el-button>
            </template>
            <template #uploadTips>
                <div style="font-size: 12px; color: #999">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
            <template #footer="{ form }">
                <div>
                    <el-button @click="cancel(form)">取消</el-button>
                    <el-button type="primary" @click="markSure(form)">确定</el-button>
                </div>
            </template>
        </my-modal-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormOption } from '../components/form/src/types/type.d.ts'
import { ElMessage } from 'element-plus'

const visible = ref<boolean>(false)

const open = () => {
    visible.value = true
}

const cancel = (form: any) => {
    form.resetFields()
    visible.value = false
}
const markSure = (form: any) => {
    let validate = form.validate()
    validate((valid: Boolean) => {
        if(valid) {
            let data = form.getFormValue()
            console.log(data)
            ElMessage.success("验证通过!")
        }else {
            ElMessage.error("验证未通过")
        }
    })
}

const options = ref<FormOption []>([
    {
        type: 'input',
        label: '用户名：',
        prop: 'userName',
        value: '',
        placeholder: '请输入用户名',
        rules: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
            },
            {
                min: 3,
                max: 8,
                message: '长度在 3 到 8 个字符',
                trigger: 'blur'
            }
        ],
        attrs: {
            clearable: true
        }
    },
    {
        type: 'input',
        label: '密码：',
        value: '',
        prop: 'password',
        placeholder: '请输入密码',
        rules: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }
        ],
        attrs: {
            clearable: true
        }
    },
    // 下拉框组件   
    {
        type: 'select',
        label: '职位：',
        prop: 'position',
        value: '',
        placeholder: '请选择职位',
        children: [
            {
                type: 'option',
                label: '总经理',
                value: '1'
            },
            {
                type: 'option',
                label: '经理',
                value: '2'
            },
            {
                type: 'option',
                label: '组长',
                value: '3'
            },
            {
                type: 'option',
                label: '职员',
                value: '4'
            }
        ],
        rules: [
            {
                required: true,
                message: '请选择职位',
                trigger: 'blur'
            }
        ],
        style: {
            width: '30%'
        }
    },
    // 多选框组件
    {
        type: 'checkbox-group',
        label: '爱好：',
        prop: 'hobby',
        value: [],
        children: [
            {
                type: 'checkbox',
                label: '足球',
                value: '1'
            },
            {
                type: 'checkbox',
                label: '篮球',
                value: '2'
            },
            {
                type: 'checkbox',
                label: '排球',
                value: '3'
            },
            {
                type: 'checkbox',
                label: '羽毛球',
                value: '4'
            }
        ],
        rules: [
            {
                required: true,
                message: '请选择爱好',
                trigger: 'blur'
            }
        ]
    },
    // 单选框组件
    {
        type: 'radio-group',
        label: '性别：',
        prop: 'sex',
        value: '',
        rules: [
            {
                required: true,
                message: '请选择性别',
                trigger: 'blur'
            }
        ],
        children: [
            {
                type: 'radio',
                label: '男',
                value: 'male'
            },
            {
                type: 'radio',
                label: '女',
                value: 'female'
            },
            {
                type: 'radio',
                label: '保密',
                value: 'secret'
            }
        ]
    },
    {
        type: 'upload',
        label: '上传文件：',
        prop: 'pic',
        uploadAttrs: {
            action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
            multiple: true,
            limit: 3
        }
    },
    {
        type: 'editor',
        value: '',
        label: '描述',
        prop: 'desc',
        placeholder: '请输入描述',
        rules: [
            {
                required: true,
                message: '请填写描述',
                trigger: 'blur'
            }
        ]
    }
])

const beforeUpload = () => {
    console.log('beforeUpload')
}
</script>

<style scoped>

</style>