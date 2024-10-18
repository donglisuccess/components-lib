<template>
    <el-popover
        placement="bottom"
        :width="popoverWidth"
        trigger="click"
        popper-class="notification-poper"
    >
        <template #default>
            <slot></slot>
        </template>
        <template #reference>
            <el-badge :value="value" :max="max" :is-dot="isDot" style="cursor: pointer">
                <component :is="`el-icon${toLine(icon)}`"></component>
            </el-badge>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { toLine } from '../../../utils/index'
defineProps({
    // 图标
    icon: {
        type: String,
        default: 'Bell'
    },
    // 显示值
    value: {
        type: [String, Number],
        default: 0
    },
    // 最大显示值
    max: {
        type: Number,
        default: 99
    },
    // 是否显示点点
    isDot: {
        type: Boolean,
        default: false  
    },
    // popover的宽度
    popoverWidth: {
        type: Number,
        default: 300
    }
})

</script>

<style scoped>

</style>