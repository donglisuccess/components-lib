<template>
    <el-popover
        placement="bottom-start"
        :width="400"
        v-model:visible="visible"
        trigger="click">
        <template #reference>
            <div class="header">
                <div class="flex">
                    <div>{{ checkValue }}</div>
                    <el-icon-arrow-down :class="{ rotate: visible }"/>
                </div>
            </div>
        </template>
        
        <div height="400px" class="body">
            <el-row>
                <el-col :span="10">
                    <el-radio-group class="radio" v-model="radioValue">
                        <el-radio-button value="按城市">按城市</el-radio-button>
                        <el-radio-button value="按省份">按省份</el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span="14">
                    <el-select 
                        v-model="selectValue" 
                        placeholder="请选择"
                        filterable
                        remote
                        :remote-method="remoteMethod"
                        @change="change">
                        <el-option
                            v-for="item in filterOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"/>
                    </el-select>
                </el-col>
            </el-row>
            <template v-if="radioValue === '按城市'">
                <div class="citySpell">
                    <template v-for="(key) in Object.keys(cityData)">
                        <span class="citySpell-item" 
                            :class="{ active: citySpellChecked === key }"
                            @click="clickCitySpell(key)">{{ key }}</span>
                    </template>
                </div>
                <el-scrollbar height="300px">
                    <template v-for="(value, key) in cityData">
                        <el-row :id="key">
                            <el-col :span="2" class="citySpell-key">{{ key + "："}}</el-col>
                            <el-col :span="22" class="cityName">
                                <template v-for="item in value">
                                    <span class="cityName-item" :style="{ color: checkValue === item.name ? '#409eff' : '' }" @click="clickCity(item)">
                                        {{  item.name }}
                                    </span>
                                </template>
                            </el-col>
                        </el-row>
                    </template>
                </el-scrollbar>
            </template>
            <template v-if="radioValue === '按省份'">
                <div class="citySpell">
                    <template v-for="key in Object.keys(proviceData)">
                        <span class="citySpell-item" 
                            :style="{ width: key.length > 1 ? '50px' : ''}"
                            :class="{ active: proviceChecked === key }"
                            @click="clickProviceSpill(key)">
                            {{ key }}
                        </span>
                    </template>
                </div>
                <el-scrollbar height="300px">
                    <template v-for="item in proviceData">
                        <el-row v-for="(value, index) in item" :key="index" class="proviceStyle" :id="item[0].id">
                            <el-col :span="4">{{ value.name + '：'}}</el-col>
                            <el-col :span="20">
                                <span v-for="(city, cityIndex) in value.data" :key="cityIndex"
                                    :style="{ color: checkValue === city ? '#409eff' : '' }"
                                    class="proviceStyle-item" @click="clickProviceCity(city)">
                                    {{ city }}
                                </span>
                            </el-col>
                        </el-row>
                    </template>
                </el-scrollbar>
            </template>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import citys from './lib/city.ts'
import province from "./lib/province.json"
import type { cityTypeList, cityType, proviceTypeList } from './type.d.ts'

let checkValue = ref<string>('选择城市')
let visible = ref<boolean>(false)
let selectValue = ref<string>("")
let radioValue = ref<string>("按城市")
let cityData = ref<cityTypeList>(citys.cities)
let citySpellChecked = ref<string>("A")
let proviceChecked = ref<string>("A")
let proviceData = ref<proviceTypeList>(province)
let options = ref<Array<cityType>>([])
let filterOptions = ref<Array<cityType>>([])

onMounted(() => {
    options.value = Object.values(cityData.value).flat(2)
    filterOptions.value = [...options.value]
})



const emits = defineEmits(['chooseByCity', 'chooseByProvice'])

const clickCitySpell = (key: string) => {
    citySpellChecked.value = key
    // 获取对应的元素
    let element = document.getElementById(key)
    // 滚动到对应的元素
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const clickProviceSpill = (key: string) => {
    proviceChecked.value = key
    // 获取对应的元素
    let element = document.getElementById(key)
    // 滚动到对应的元素
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// 点击选择城市
const clickCity = (item: cityType) => {
    checkValue.value = item.name
    visible.value = false
    emits('chooseByCity', item)
}

// 按省份选择城市
const clickProviceCity = (city: string) => {
    checkValue.value = city
    visible.value = false
    emits('chooseByProvice', city)
}

// 远程搜索
const remoteMethod = (query: string) => {
    // 如果按照城市搜索可以搜拼音，按照省份搜索只能搜汉字
    if(radioValue.value === '按城市') {
        filterOptions.value = options.value.filter(item => item.name.includes(query) || item.spell.includes(query))
        console.log(filterOptions.value)
    }else {
        filterOptions.value = options.value.filter(item => item.name.includes(query))
    }
}

// 选择省份或者城市
const change = (value: number) => {
    let curVal = options.value.find(item => item.id === value)
    if(radioValue.value === '按城市') {
        clickCity(curVal as cityType)
    }else {
        clickProviceCity((curVal as cityType)?.name)
    }
}
</script>

<style scoped lang="scss">
.header {
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    .flex {
        display: flex;
        align-items: center;
    }
    svg {
        margin-left: 6px;
        width: 12px;
        height: 12px;
    }
}
.rotate {
    transform: rotate(180deg);
    transition: all 0.3s;
}
.radio {
    display: flex
}
.body {
    min-height: 300px;
    padding: 10px;
}
.citySpell {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    &-item {
        width: 30px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #eee;
        margin: 3px 5px;
        cursor: pointer;
    }
    .active {
        background-color: #409eff;
        color: white;
    }
    &-key {
        padding-top: 3px;
    }
}
.cityName {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    &-item {
        padding: 3px 7px;
        cursor: pointer;
    }
}
.proviceStyle {
    margin-bottom: 10px;
    display: flex;
    &-item {
        padding-right: 8px;
        padding: 4px;
        cursor: pointer;
    }
}
</style>