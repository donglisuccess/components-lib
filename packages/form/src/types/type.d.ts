import type { RuleItem } from './rules'
import { CSSProperties } from 'vue'
import { ValidateFieldsError } from 'async-validator'

export interface FormOption {
    // 表单类型
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'color-picker' | 'date-picker' |
    'input' | 'input-number' | 'radio-group' | 'radio' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' |
    'time-select' | 'transfer' | 'upload' | 'editor',
    // 表单的值
    value?: any,
    // 表单项label
    label?: string,
    // 表单项的标识
    prop?: string,
    // 表单项的验证
    rules?: RuleItem[],
    // 表单项的占位符
    placeholder?: string,
    // 表单元素特有的属性，展示给个any类型
    attrs?: any,
    // 集成select、radio等组件
    children?: FormOption[],
    // 样式
    style?: CSSProperties,
    // 上传属性
    uploadAttrs?: {
        action: string,
        headers?: object,
        method?: 'post',
        multiple?: boolean,
        data?: any,
        name?: string,
        withCredentials?: boolean,
        showFileList?: boolean,
        drag?: boolean,
        accept?: string,
        fileList?: any[],
        listType?: 'text' | 'picture' | 'picture-card',
        autoUpload?: boolean,
        disabled?: boolean,
        limit?: number
    }
}

// callback回调函数的类型
interface Callback {
    (isVaild: boolean, invalidFields?: ValidateFieldsError): void
}

export interface ValidateFieldCallback {
    (message?: string, invalidFields?: ValidateFieldsError): void,
}

// form类型
export interface FormInstance {
    // 属性
    model?: Record<string, any>,
    rules?: Record<string, any>,
    inline?: boolean,
    labelPosition?: 'left' | 'right' | 'top',
    labelWidth?: string | number,
    labelSuffix?: string,
    hideRequiredAsterisk?: boolean,
    showMessage?: boolean,
    inlineMessage?: boolean,
    statusIcon?: boolean,
    validateOnRuleChange?: boolean,
    size?: 'large' | 'default' | 'small',
    disabled?: boolean,
    scrollToError?: boolean,
    // 事件
    validate: (callback?: Callback) => Promise<void>,
    validateField: (props: string | string[], cb: ValidateFieldCallback) => void,
    resetFields: () => void,
    clearValidate: (props?: string | string[]) => void
}