<template>
  <div class="common-layout">
    <el-container>
      <nav-side :collapse="isCollapse"></nav-side>
      <el-container style="flex-direction: column;">
        <nav-header v-model:collapse="isCollapse"></nav-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import navSide from './navSide/index.vue'
import navHeader from './navHeader/index.vue'
let isCollapse = ref(false)

const toggle = () => {
    isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss">
.el-menu-vertical-demo{
    height: 100%
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>