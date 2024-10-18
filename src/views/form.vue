<template>
    <div>
        <my-form 
            ref="form"
            :label-width="100" 
            :options="options"
            @on-error="handleError"
            @on-success="handleSuccess"
            @beforeRemove="beforeRemove"
            @onRemove="onRemove"
            @on-exceed="onExceed">
            <template #uploadArea>
                <el-button type="primary">Click to upload</el-button>
            </template>
            <template #uploadTips>
                <div style="font-size: 12px; color: #999">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
            <template #actions="scope">
                <el-button type="primary" @click="submitForm(scope)">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
            </template>
        </my-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormOption, FormInstance } from '../components/form/src/types/type.d.ts'
import { ElMessage } from 'element-plus'
interface scopeType {
    model: any,
    form: FormInstance | null
}

let form = ref()

const options = ref<FormOption[]>([
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

const handleError = (file: any) => {
    console.log(file)
}
const handleSuccess = (file: any) => {
    console.log(file)
}
const beforeRemove = (file: any) => {
    console.log(file)
}
const onRemove = (file: any) => {
    console.log(file)
}
const onExceed = ({files, fileList}: any) => {
    console.log(files, fileList)
}

// 提交
const submitForm = (scope: scopeType) => {
    scope.form?.validate((valid) => {
        if(valid) {
            console.log(scope.model)
            ElMessage.success("验证通过！")
        } else {
            ElMessage.error('请填写必要的表单项！')
        }
    })
}
// 重置
const resetForm = () => {
    form.value?.resetFields()
}

</script>

<style scoped>

</style>