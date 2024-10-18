<template>
    <div>
        <el-table 
            v-loading="loading" 
            :data="tableCloneData"
            :element-loading-text="elementLoadingText"
            :element-loading-spinner="elementLoadingSpinner"
            :element-loading-svg="elementLoadingSvg"
            :element-loading-background="elementLoadingBackground"
            @row-click="rowClick">
            <template v-for="(item) in filterOptions" :key="item">
                <el-table-column 
                    :label="item.label" 
                    :prop="item.prop" 
                    :align="item.align" 
                    :width="item.width">
                    <template #default="scope">
                        <template v-if="scope.row.isEdit">
                            <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
                        </template>
                        <template v-else>
                            <template v-if="currentEditIndex === scope.$index + scope.column.id">
                                <div class="editContent">
                                    <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
                                    <slot v-if="$slots.customIcon" :scope="scope" name="customIcon"></slot>
                                    <div v-else class="iconStyle">
                                        <component :is="`el-icon${toLine(checkIcon)}`" class="icon-check" @click.stop="confirm(scope)"></component>
                                        <component :is="`el-icon${toLine(closeIcon)}`" class="icon-close" @click.stop="cancel(scope)"></component>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div class="content">
                                    <slot :name="item.prop" :scope="scope" v-if="item.slot"></slot>
                                    <span v-else>{{ scope.row[item.prop!] }}</span>
                                    <el-icon-edit v-if="item.editable" @click.stop="edit(scope)" class="editIcon"/>
                                </div>
                            </template>
                        </template>
                    </template>
                </el-table-column>
            </template>
            <el-table-column 
                v-if="actionObject" 
                :label="actionObject.label"
                :align="actionObject.align">
                <template #default="scope">
                    <slot name="editAction" :scope="scope" v-if="scope.row.isEdit"></slot>
                    <slot name="action" :scope="scope" v-else></slot>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            v-if="pagination"
            class="paginationStyle"
            v-model:currentPage="currentPage"
            v-model:page-size="currentPageSize"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :style="{'justify-content': pageinationPlace}"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch} from 'vue'
import { TableOptions } from './type.d.ts'
import { toLine } from '../../utils/index'
import cloneDeep from 'lodash/cloneDeep'

const props = defineProps({
    options: {
        type: Array as PropType<TableOptions []>,
        required: true
    },
    dataList: {
        type: Array as PropType<any[]>,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    },
    // 显示在加载图标下方的加载文案
    elementLoadingText: {
        type: String
    },
    // 自定义加载图标
    elementLoadingSpinner: {
        type: String
    },
    // 自定义加载图标
    elementLoadingSvg: {
        type: String
    },
    // 背景遮盖颜色
    elementLoadingBackground: {
        type: String
    },
    checkIcon: {
        type: String,
        default: 'Check'
    },
    closeIcon: {
        type: String,
        default: 'Close'
    },
    // 是否整行可编辑
    isEditRow: {
        type: Boolean,
        default: false
    },
    // 可编辑的操作项下标
    isEditRowIndex: {
        type: String,
        default: ''
    },
    // 是否显示分页信息
    pagination: {
        type: Boolean,
        default: false
    },
    // 分页下标
    pageIndex: {
        type: Number,
        default: 1
    },
    // 每一页展示条数
    pageSize: {
        type: Number,
        default: 10
    },
    // 总共条数
    total: {
        type: Number,
        default: 0
    },
    // 分页下拉列表
    pageSizes: {
        type: Array as PropType<number[]>,
        default: [10, 20, 30, 40]
    },
    pageinationAlign: {
        type: String as PropType<'left' | 'center' | 'right'>,
        default: 'right'
    }
})

const emits = defineEmits(['confirm', 'cancel', 'update:isEditRowIndex', 'update:pageIndex', 'update:pageSize', 'handleSizeChange', 'handleCurrentChange'])

// 赋值传过来的currentPage
let currentPage = ref<number>(props.pageIndex)
let currentPageSize = ref<number>(props.pageSize)

let currentEditIndex = ref<string>('')
// table进行克隆
let tableCloneData = ref<any []>(cloneDeep(props.dataList))

// 克隆isEditRowIndex
let cloneIsEditRowIndex = ref<string>(props.isEditRowIndex)

let pageinationPlace = computed(() => {
    if(props.pageinationAlign === 'left') {
        return 'flex-start'
    }else if(props.pageinationAlign === 'right') {
        return 'flex-end'
    }else {
        return 'center'
    }
})

// 在挂在的时候对克隆值进行处理
onMounted(() => {
    tableCloneData.value.forEach(item => {
        item.isEdit = false
    })
})

// 获取编辑项
const edit = (scope: any) => {
    currentEditIndex.value = scope.$index + scope.column.id
}

// 确认
const confirm = (scope: any) => {
    currentEditIndex.value = ''
    emits('confirm', scope)
}

// 取消
const cancel = (scope: any) => {
    currentEditIndex.value = ''
    emits('cancel', scope)
}



// 获取过滤掉操作项其他的选项。
const filterOptions = computed(() => props.options.filter(item => !item.action))
// 获取操作项放到最后
const actionObject = computed(() => props.options.find(item => item.action))

const handleSizeChange = (val: number) => {
    emits('handleSizeChange', val)
}

const handleCurrentChange = (val: number) => {
    emits('handleCurrentChange', val)
}

const rowClick = (row: any, column :any, event :any) => {
    if(column.label === actionObject.value?.label && props.isEditRowIndex === cloneIsEditRowIndex.value && props.isEditRow) {
        row.isEdit = !row.isEdit
        tableCloneData.value.forEach(item => {
            if(item !== row) {
                item.isEdit = false
            }
        })
        if(!row.isEdit) {
            emits('update:isEditRowIndex', '')
        }
    }
}


// 监听table数据的变化，如果变化了，则重新进行赋值操作。
watch(() => props.dataList, (val) => {
    tableCloneData.value = cloneDeep(val)
}, {deep: true})

// 监听isEditRowIndex的变化
watch(() => props.isEditRowIndex, (val) => {
    if(val) {
        cloneIsEditRowIndex.value = val
    }
})
watch(() => currentPage.value, (val) => {
    emits('update:pageIndex', val)
})
watch(() => currentPageSize.value, (val) => {
    emits('update:pageSize', val)
})
</script>

<style scoped lang="scss">
.editContent {
    display: flex;
    align-items: center;
    .icon-check {
        margin-left: 6px;
        cursor: pointer;
        color: #52c41a;
    }
    .icon-close {
        margin-left: 6px;
        cursor: pointer;
        color: #f5222d;
    }
    .iconStyle {
        display: flex;
        align-items: center;
    }
}
.content {
    position: relative;
    .editIcon  {
        position: absolute;
        top: 3px;
        margin-left: 5px;
        cursor: pointer;
    }
}
.paginationStyle {
    margin-top: 10px;
    display: flex;
}
</style>

