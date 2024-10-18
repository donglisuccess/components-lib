<template>
    <div>
        <el-button type="primary" @click="choose">
            <slot></slot>
        </el-button>
        <el-dialog :title="title" v-model="dialogVisible" class="m-choose-dialog-body-height">
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(Icons)" :key="index" @click="copyItem(item)">
                    <component :is="`el-icon${ toLine((Icons as any)[item].name) }`"></component>
                    <span class="text">{{ item }}</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '../../../utils/index'
import { useCopy } from '../../../hooks/useCopy';

console.log(Icons)
const props = defineProps<{
    title: string
    visible: boolean
}>()
const emits = defineEmits(["update:visible"])

let dialogVisible = ref<boolean>(props.visible)

const choose = () => {
    emits('update:visible', !props.visible)
}

const copyItem = (item: string) => {
    useCopy(`<el-icon${ toLine(item) } />`)
    dialogVisible.value = false
}


watch(() => props.visible, (val) => {
    dialogVisible.value = val
})

watch(() => dialogVisible.value, (val) => {
    emits('update:visible', val)
})

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 85px;
        cursor: pointer;
    }
    .text {
        margin-top: 10px;
    }
}
svg {
    width: 30px;
    height: 30px;
}
</style>