<template>
    <div>
        <el-aside width="auto">
        <my-menu
            :collapse="collapse" 
            :data="menuList" 
            :defaultActive="$route.path"
            router
            class="el-menu-vertical-demo my-side-menu">
        </my-menu>
      </el-aside>
    </div>
</template>

<script setup lang="ts">
import { MenuType } from '../../../menu/src/type.d'
defineProps<{
    collapse: boolean
}>()

const menuList: MenuType[] = [
    {
        name: '首页',
        icon: 'HomeFilled',
        index: '/home'
    },
    {
        name: '图标选择器',
        icon: 'Checked',
        index: '/chooseIcon'
    },
    {
        name: '省市区选择',
        icon: 'LocationFilled',
        index: '/chooseArea'
    },
    {
        name: '趋势标记',
        icon: 'Flag',
        index: '/trend'
    },
    {
        name: '通知菜单',
        icon: 'BellFilled',
        index: '/notification'
    },
    {
        name: '导航菜单',
        icon: 'Menu',
        index: '/menu'
    },
    {
        name: '进度条',
        icon: 'Histogram',
        index: '/progress'
    },
    {
        name: '时间选择器',
        icon: 'StarFilled',
        index: '/timeChoose'
    },
    {
        name: '日历',
        icon: 'Briefcase',
        index: '/calendar'
    },
    {
        name: '日期选择器',
        icon: 'UploadFilled',
        index: '/chooseDate'
    },
    {
        name: '城市选择',
        icon: 'WalletFilled',
        index: '/chooseCity'
    },
    {
        name: '表单校验',
        icon: 'List',
        index: '/form'
    },
    {
        name: '表单校验弹出框',
        icon: 'Stamp',
        index: '/modalForm'
    },
    {
        name: '表格',
        icon: 'UploadFilled',
        index: '/table'
    }
    // {
    //     name: '水印',
    //     icon: 'Stamp',
    //     index: '/waterMark'
    // }
]
</script>

<style lang="scss" scoped>

</style>