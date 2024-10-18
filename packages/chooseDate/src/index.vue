<template>
    <div class="content">
        <el-date-picker 
            v-model="startDateVal"
            type="date"
            style="margin: 0px 10px;"
            :placeholder="startPlaceHolder"
            :disabled-date="startDisabled"
            v-bind="$attrs.startOptions || {}"
            @change="startChange"
        />
        <el-date-picker 
            v-model="endDateVal"
            type="date"
            style="margin: 0px 10px;"
            :placeholder="endPlaceHolder"
            :disabled="isDisabled"
            :disabled-date="endDisabled"
            v-bind="$attrs.endOptions || {}"
            @change="endChange"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const startDateVal = ref<Date | null>(null)
const endDateVal = ref<Date | null>(null)
// 是否禁用结束时间
let isDisabled = ref<Boolean>(true)

const props = defineProps({
    // 开始时间占位符
    startPlaceHolder: {
        type: String,
        default: "开始日期"
    },
    // 结束时间占位符
    endPlaceHolder: {
        type: String,
        default: "结束日期"
    },
    // 之前时间是否可选
    beforeDisabled: {
        type: Boolean,
        default: false
    }
})

// 触发函数
const emits = defineEmits(["startDateChange", "endDateChange"])

const startDisabled = (time: Date) => {
    if(props.beforeDisabled) return new Date().getTime() - time.getTime() > 1000 * 3600 * 24
}

const endDisabled = (time: Date) => {
    if(startDateVal.value) return time.getTime() - startDateVal.value.getTime() < 1000 * 3600 * 24
}

watch(() => startDateVal.value, (val) => {
    if(val) {
        // isDisabled.value = false        
        // 1、判断如果开始时间比结束时间小于1天，此时结束时间设为null
        // 2、否则不动即可
        if(endDateVal.value && endDateVal.value.getTime() - val.getTime() < 1000 * 3600 * 24) {
            endDateVal.value = null
        }
        isDisabled.value = false
    } else {
        endDateVal.value = null
        isDisabled.value = true
    }
})

const startChange = () => {
    emits("startDateChange", startDateVal.value)
}

const endChange = () => {
    emits("endDateChange", {
        startDate: startDateVal.value,
        endDate: endDateVal.value
    })
}

</script>

<style scoped lang="scss">
.date {
    margin: 0px 20px;
}
</style>