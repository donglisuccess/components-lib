<template>
    <div class="content">
        <div class="text" v-if="slots.default" :style="{ color: textColor }">
            <slot></slot>
        </div>
        <div class="text">
            {{ text }}
        </div>
        <component 
            v-if="type === 'up'" 
            :is="`el-icon-${icon}`" 
            :style="{ color: reverse ? '#f5222d' : upColor}">
        </component>
        <component
            v-else
            :is="type === 'up' ? `el-icon-${icon}` : 'el-icon-arrow-down'" 
            :style="{ color: reverse ? '#52c41a' : downColor }">
        </component>
    </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()


defineProps({
    // 图标的类型
    type: {
        type: String,
        default: 'up'
    },
    // 文字
    text: {
        type: String
    },
    // 上升图标的颜色
    upColor: {
        type: String,
        default: '#52c41a'
    },
    // 下降图标的颜色
    downColor: {
        type: String,
        default: '#f5222d'
    },
    // 定义文字颜色
    textColor: {
        type:String,
        default: '#000'
    },
    reverse: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: 'arrow-up'
    }
})

</script>

<style scoped lang="scss">
.content {
    display: flex;
    align-items: center;
    font-size: 13px;
    .text {
        margin-right: 10px;
    }
}
</style>