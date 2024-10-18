export interface TableOptions {
    // 字段名称
    prop?: string,
    // 表头名称
    label: string,
    // 对应列的宽度
    width?: string | number,
    // 对其方式
    align?: 'left' | 'center' | 'right',
    // 是否自定义插槽
    slot?: boolean,
    // 是否存在操作项
    action?: boolean,
    // 单元项使用插槽
    slot?: boolean,
    // 是否是可编辑的
    editable?: boolean
}