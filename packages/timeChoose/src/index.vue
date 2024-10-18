<template>
    <div>
        <el-time-select
            v-model="startTime"
            style="width: 240px; margin-right: 10px;"
            :max-time="endTime"
            :placeholder="startPlaceHolder"
            :start="startBeginTime"
            :step="startStep"
            :end="startEndTime"
            v-bind="$attrs.startOptions || {}"/>
        <el-time-select
            v-model="endTime"
            style="width: 240px"
            :min-time="startTime"
            :disabled="endDisabled"
            :placeholder="endPlaceHolder"
            :start="endBeginTime"
            :step="endStep"
            :end="endEndTime"
            v-bind="$attrs.endOptions || {}"/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
defineProps({
    // 开始的占位
    startPlaceHolder: {
        type: String,
        default: "开始时间"
    },
    // 开始时间
    startBeginTime: {
        type: String,
        default: "08:00"
    },
    // 开始时间的步长
    startStep: {
        type: String,
        default: "00:15"
    },
    // 开始的结束时间
    startEndTime: {
        type: String,
        default: "18:00"
    },
    // 结束时间占位
    endPlaceHolder: {
        type: String,
        default: "结束时间"
    },
    // 结束开始时间
    endBeginTime: {
        type: String,
        default: "08:00"
    },
    // 结束步长
    endStep: {
        type: String,
        default: "00:15"
    },
    // 结束时间
    endEndTime: {
        type: String,
        default: "18:00"
    }
})

const emits = defineEmits(['startChange', 'endChange'])

let startTime = ref('')
let endTime = ref('')
let endDisabled = ref(true)

watch(() => startTime.value, (val) => {
    if(!val) {
        endTime.value = ''
        endDisabled.value = true
    }else {
        endDisabled.value = false
    }
    emits('startChange', val)
})


watch(() => endTime.value, (val) => {
    emits('endChange', {
        startTime: startTime.value,
        endTime: val
    })
})

</script>

<style lang="scss" scoped>

</style>