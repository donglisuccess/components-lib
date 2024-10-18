import { ListContentType, ActionsListType } from '../components/list/src/type.d'
import { MenuType } from '../components/menu/src/type.d'

export const listContent: ListContentType[] = [
    {
        title: '通知',
        content: [
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克恢复了您的邮件',
                time: '2024-06-30 13:32:12'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克恢复了您的邮件',
                time: '2024-06-30 13:32:12'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克恢复了您的邮件',
                time: '2024-06-30 13:32:12'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克恢复了您的邮件',
                time: '2024-06-30 13:32:12'
            }
        ]
    },
    {
        title: '关注',
        content: [
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            },
            {
                avator: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                title: '蒂姆.库克 评论了你',
                time: '10分钟前',
                content: '这是一条评论'
            }
        ]
    },
    {
        title: '代办',
        content: [
            {
                title: '任务名称',
                content: '任务需要再2024-06-30 13:00:00启动',
                tag: '未开始',
                tagType: 'primary'
            },
            {
                title: '任务名称',
                content: '任务需要再2024-06-30 13:00:00启动',
                tag: '未开始',
                tagType: 'primary'
            },
            {
                title: '任务名称',
                content: '任务需要再2024-06-30 13:00:00启动',
                tag: '未开始',
                tagType: 'primary'
            }
        ]
    }
]

export const actionListData: Array<ActionsListType> = [
    {
        icon: 'Delete',
        text: '清空代办'
    },
    {
        icon: 'Edit',
        text: '编辑'
    }
]

// 菜单mock数据
export const menuListData: Array<MenuType> = [
    {
        name: '标题一',
        icon: 'Menu',
        index: '1',
        children: []
    },
    {
        name: '标题二',
        icon: 'Menu',
        index: '2',
        children: []
    },
    {
        name: '标题三',
        icon: 'Menu',
        index: '3',
        children: [
            {
                name: '子标题一',
                icon: 'Menu',
                index: '3-1',
                children: []
            },
            {
                name: '子标题二',
                icon: 'Menu',
                index: '3-2',
                children: []
            }
        ]
    }
]

// 无限层级菜单
export const infiniteMenuData: Array<MenuType> = [
    {
        name: '标题一',
        icon: 'Menu',
        index: '1',
        children: []
    },
    {
        name: '标题二',
        icon: 'Menu',
        index: '2',
        children: []
    },
    {
        name: '标题三',
        icon: 'Menu',
        index: '3',
        children: [
            {
                name: '子标题一',
                icon: 'Menu',
                index: '3-1',
                children: []
            },
            {
                name: '子标题二',
                icon: 'Menu',
                index: '3-2',
                children: [
                    {
                        name: '子子标题一',
                        icon: 'Menu',
                        index: '3-2-1',
                        children: [
                            {
                                name: '子子子标题一',
                                icon: 'Menu',
                                index: '3-2-1-1',
                            }
                        ]
                    }
                ]
            }
        ]
    }
]