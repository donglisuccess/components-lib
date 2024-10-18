<template>
    <div>
        <my-choose-icon title="选择图标" v-model:visible="visible">
            <span>选择图标</span>
        </my-choose-icon>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let visible = ref<boolean>(false)

</script>

<style scoped>

</style>