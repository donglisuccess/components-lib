<template>
    <el-menu
        :router="router"
        :default-active="defaultActive"
        :collapse="collapse"
        class="el-menu-vertical-demo"
        v-bind="$attrs">
        <template v-for="item in data" :key="item.index">
            <!-- 一级菜单 -->
            <el-menu-item
            :index="item.index"
            v-if="!item.children || !item.children.length">
                <component :is="`el-icon${toLine(item.icon)}`" v-if="item.icon"></component>
                <span>{{ item.name }}</span>
            </el-menu-item>
            <!-- 二级菜单 -->
            <el-sub-menu 
                :index="item.index"
                v-if="item.children && item.children.length">
                <template #title>
                    <component :is="`el-icon${toLine(item.icon)}`"></component>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item 
                    v-for="item1 in item.children"
                    :key="item1.index"
                    :index="item1.index">
                    <component :is="`el-icon${toLine(item1.icon)}`"></component>
                    <span>{{ item1.name }}</span>
                </el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MenuType } from './types.d.ts'
import { toLine } from '../../utils/index'
const props = defineProps({
    data: {
        type: Array as PropType<MenuType[]>,
        required: true
    },
    defaultActive: {
        type: String,
        default: ''
    },
    // 是否启用vue-router模式，默认为index
    router: {
        type: Boolean,
        default: false
    },
    collapse: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped lang="scss">
svg {
    margin-right: 5px;
}
.el-menu-vertical-demo{
    height: 100%
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>