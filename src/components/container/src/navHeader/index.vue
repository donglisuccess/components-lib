<template>
    <div>
        <el-header>
            <span @click="toggle">
                <el-icon-expand v-if="collapse"></el-icon-expand>
                <el-icon-fold v-else></el-icon-fold>
            </span>
        </el-header>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    collapse: boolean
}>()
const emits = defineEmits(["update:collapse"])

const toggle = () => {
    emits("update:collapse", !props.collapse)
}
</script>

<style lang="scss" scoped>
.el-header {
    padding-top: 20px;
    border-bottom: 1px solid #ccc;
}
</style>