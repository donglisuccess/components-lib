<template>
    <div class="my-progress">
        <el-progress :percentage="p" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps({
    // 进度条进度
    percentage: {
        type: Number,
        default: 0
    },
    // 进度条时间
    time: {
        type: Number,
        default: 1000
    },
    // 是否展示动画效果
    isAnimation: { 
        type: Boolean,
        default: false
    }
})
let p = ref(0)

onMounted(() => {
    if(props.isAnimation) {
        let duration = Math.ceil(props.time / props.percentage)
        let timer = setInterval(() => {
            if(p.value >= props.percentage) {
                p.value = props.percentage
                clearInterval(timer)
                return
            }
            p.value += 1
        }, duration)
    }else {
        p.value = props.percentage
    }
})



</script>

<style scoped>
svg {
    width: 126px;
    height: 126px;
}
</style>