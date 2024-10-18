<template>
    <div>
        <my-progress :percentage="50" isAnimation :time="500"></my-progress>
        <br />
        <br />
        <my-progress 
            :percentage="100"
            :text-inside="true"
            :stroke-width="24"
            status="success"
            isAnimation
            ></my-progress>
        <br />
        <br />
        <my-progress :percentage="50" isAnimation type="circle"></my-progress>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>