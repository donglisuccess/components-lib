<template>
    <div>
        <my-table 
            :dataList="data"
            :options="options"
            :elementLoadingSvg="svg"
            v-model:isEditRowIndex="isEditRowIndex"
            :pageIndex="pageIndex"
            :pageSize="pageSize"
            border
            stripe
            :total="total"
            :pageSizes="pageSizes"
            :isEditRow="true"
            :pagination="true"
            :pageinationAlign="'right'"
            @confirm="confirm"
            @cancel="cancel"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
            >
            <!-- <template #customIcon>
                <div style="display: flex; margin-left: 10px;">
                    <el-button size="small" type="primary">确定</el-button>
                    <el-button size="small">取消</el-button>
                </div>
            </template> -->
            <template #action="{ scope }">
                <el-button size="small" type="danger" @click="deleteOne(scope)">删除</el-button>
                <el-button size="small" type="primary" @click="editOne(scope)">编辑</el-button>
            </template>
            <template #editAction="{ scope }">
                <el-button size="small" type="danger">取消</el-button>
                <el-button size="small" type="primary">确定</el-button>
            </template>
            <template #date="{ scope }">
                <div>
                    {{ scope.row.date }}
                </div>
            </template>
        </my-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TableOptions } from '../components/table/src/type.d.ts';
import axios from 'axios'

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const data = ref<any[]>([])
// 当前页
let pageIndex = ref<number>(1)
// 当前页条数
let pageSize = ref<number>(10)
// 总条数
let total = ref<number>(0)
// 分页条数数组
let pageSizes = ref<number[]>([10, 20, 30, 40])


const options = ref<TableOptions[]>([
    {
        prop: 'id',
        label: 'ID',
        align: 'center',
        width: 100
    },
    {
        prop: 'name',
        label: '姓名',
        align: 'center',
        editable: true
    },
    {
        prop: 'date',
        label: '出生日期',
        align: 'center',
        slot: true
    },
    {
        prop: 'address',
        label: '地址',
        align: 'center'
    },
    {
        label: '操作',
        align: 'center',
        action: true,
    }
])

const getData = () => {
    let params = {
        current: pageIndex.value,
        pageSize: pageSize.value
    }
    axios.post('/api/list', params).then((res: any) => {
        if(res.data.code === 200) {
            data.value = res.data.data.rows
            console.log(data.value)
            total.value = res.data.data.total
        }
    })
}

onMounted(() => {
    getData()
})


let isEditRowIndex = ref<string>('')

const deleteOne = (scope: any) => {
    console.log(scope)
}

const editOne = (scope: any) => {
    isEditRowIndex.value = 'edit'
    console.log(scope)
}

const confirm = (scope: any) => {
    console.log(scope)
}
const cancel = (scope: any) => {
    console.log(scope)
}

const handleSizeChange = (val: number) => {
    pageSize.value = val
    getData()
}
const handleCurrentChange = (val: number) => {
    pageIndex.value = val
    getData()
}
</script>

<style scoped>

</style>