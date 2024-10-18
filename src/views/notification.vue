<template>
    <div>
        <my-notification
            :value="102"
            icon="ChatDotRound">
           <template #default>
                <my-list 
                    :list="list" 
                    :actionList="actionList"
                    @itemClick="itemClick"
                    @actionClick="actionClick">
                </my-list>
           </template>
        </my-notification>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { listContent, actionListData } from '../mock/index.ts'

const list = ref(listContent)
const actionList = ref(actionListData)

const actionClick = (data, index) => {
    console.log(data, index)
}

const itemClick = (data, index) => {
    console.log(data, index)
}

</script>

<style lang="scss" scoped>

</style>