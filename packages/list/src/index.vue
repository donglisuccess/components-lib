<template>
    <div>
        <el-scrollbar max-height="400px" class="my-list">
            <el-tabs>
                <el-tab-pane v-for="(item, index) in list" 
                    :key="index" 
                    :label="item.title">
                    <div v-for="(item1, index1) in item.content" :key="index1" class="list-item" @click="itemClick(item1, index1)">
                        <el-avatar :size="40" v-if="item1.avator" :src="item1.avator" class="avator" />
                        <div class="itemContent">
                            <div class="itemTitle">
                                <div v-if="item1.title">
                                    {{ item1.title }}
                                </div>
                                <el-tag :type="item1.tagType" v-if="item1.tag" size="small">{{ item1.tag }}</el-tag>
                            </div>

                            <div class="time">
                                {{ item1.content }}
                            </div>
                            <div class="time">{{  item1.time }}</div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-scrollbar>
        <div class="actionListStyle">
            <div v-for="(item, index) in actionList" :key="index" class="actionItem"  
                :class="{ borderStyle: index !== actionList.length - 1 }"
                @click="actionClick(item, index)">
                <component :is="`el-icon${toLine(item.icon)}`" class="actionIcon"></component>
                <span>{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ListContentType, ActionsListType } from './types.d.ts'
import { toLine } from '../../utils/index'

defineProps({
    list: {
        type: Array as PropType<ListContentType[]>,
        default: () => []
    },
    actionList: {
        type: Array as PropType<ActionsListType[]>,
        default: () => []
    }
})

const emits = defineEmits(['actionClick', 'itemClick'])

const itemClick = (data:ListContentType, index: number ) => {
    emits('itemClick', data, index)
}

const actionClick = (data: ActionsListType, index: number) => {
    emits('actionClick', data, index)
}

</script>

<style scoped lang="scss">
.list-item {
    display: flex;
    padding: 10px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
    .avator {
        margin-right: 10px;
    }
    .itemContent {
        flex: 1;
        .itemTitle {
            font-weight: 500;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
        }
        .time {
            font-size: 12px;
            color: #aaa;
        }
    }
}
.actionListStyle {
    display: flex;
    height: 40px;
    border-top: 1px solid #eee;
    align-items: center;
    text-align: center;
    .actionItem {
        flex: 1;
        height: 40px;
        cursor: pointer;
        line-height: 40px;
        .actionIcon {
            width: 15px;
            height: 15px;
            margin-right: 5px;
            position: relative;
            top: 2px;
        }
    }
    .borderStyle {
        border-right: 1px solid #eee;
    }
}
</style>