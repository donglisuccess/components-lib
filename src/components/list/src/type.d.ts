// 列表item项
export interface ListItemType {
    avator?: string
    title?: string
    time?: string
    content?: string
    tag?: string
    tagType?: '' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表内容
export interface ListContentType {
    content: Array<ListItemType>
    title: string
}

// 操作item项
export interface ActionsListType {
    icon?: string
    text: string
}
