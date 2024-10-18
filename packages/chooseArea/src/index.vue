<template>
    <div style="display: flex;">
        <el-select v-model="province" placeholder="请选择省" clearable>
            <el-option v-for="item in copyArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="city" :disabled="!province" style="margin: 0 10px" placeholder="请选择市" clearable>
            <el-option v-for="item in cityArr" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="area" :disabled="!city || !province" placeholder="请选择区" clearable>
            <el-option v-for="item in areaArr" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import areaData from './lib/areaData.json'
import { ref, watch } from 'vue'

export interface AreaData {
    code: string
    name: string
    children?: AreaData[]
}


const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const copyArea = ref<AreaData[]>(areaData)
const emits = defineEmits(["change"])

let cityArr = ref<AreaData[]>([])
let areaArr = ref<AreaData[]>([])

watch(() => province.value, (val) => {
    if(val) {
        cityArr.value = copyArea.value.find(item => item.code === val)?.children!
    }
    city.value = ''
    area.value = ''
})

watch(() => city.value, (val) => {
    if(val) {
        areaArr.value = cityArr.value.find((item: { code: string; }) => item.code === val)?.children!
    }
    area.value = ''
})

watch(() => area.value, (val) => {
    if(!val) return
    let proviceData = {
        code: province.value,
        name: copyArea.value.find(item => item.code === province.value)?.name
    }
    let cityData = {
        code: city.value,
        name: cityArr.value.find(item => item.code === city.value)?.name
    }
    let areaData = {
        code: val,
        name: areaArr.value.find(item => item.code === val)?.name
    }

    emits('change', {
        proviceData,
        cityData,
        areaData
    })
})

</script>

<style scoped>
.el-select {
    width: 200px;
}
</style>