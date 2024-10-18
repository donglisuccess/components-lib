<template>
    <div class="choose-area">
        <el-select v-model="province" placeholder="请选择省" class="choose-area-item" clearable>
            <el-option v-for="item in copyData" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择市" class="choose-area-item" :disabled="!province" clearable>
            <el-option v-for="item in cityArr" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="area" placeholder="请选择区" class="choose-area-item" :disabled="!province || !city" clearable>
            <el-option v-for="item in areaArr" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="street" placeholder="请选择街道" class="choose-area-item" :disabled="!province || !city || !area" clearable>
            <el-option v-for="item in streetArr" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import areaData from '../lib/pcas-code.json'
import type { AreaType } from './type.d.ts'

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let street = ref<string>('')
// 省份数据
let copyData = ref<AreaType[]>(areaData)
// 市数据
let cityArr = ref<AreaType[]>([])
// 区数据
let areaArr = ref<AreaType[]>([])
// 街道数据
let streetArr = ref<AreaType[]>([])

// 监听省
watch(() => province.value, (val: string) => {
    if(val) {
        cityArr.value = copyData.value.find((item: { code: string; })=> item.code === val)?.children!
    }
    city.value = ''
})
// 监听市
watch(() => city.value, (val: string) => {
    if(val) {
        areaArr.value = cityArr.value.find((item: { code: string; }) => item.code === val)?.children!
    }
    area.value = ''
})
// 监听区
watch(() => area.value, (val: string) => {
    if(val) {
        streetArr.value = areaArr.value.find((item: { code: string; }) => item.code === val)?.children!
    }
    street.value = ''
})


</script>

<style scoped lang="scss">
.choose-area {
    display: flex;
    &-item {
        width: 200px;
        margin-right: 10px;
    }
}
</style>