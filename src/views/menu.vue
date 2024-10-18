<template>
    <div  class="content">
        <my-menu 
            :data="menuList"
            :router="true"></my-menu>
        <my-infinite-menu
            style="margin-left: 100px;"
            :router="true"
            :data="infiniteMenu">
        </my-infinite-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { menuListData, infiniteMenuData} from '../mock/index.ts'
const menuList = ref(menuListData)
const infiniteMenu = ref(infiniteMenuData)
</script>

<style scoped lang="scss">
.content {
    display: flex;
}
</style>