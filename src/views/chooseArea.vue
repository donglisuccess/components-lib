<template>
    <div>
        <my-choose-area @change="change"></my-choose-area>
        <br />
        <br />
        <br />
        <my-choose-area-plus></my-choose-area-plus>
    </div>
</template>

<script setup lang="ts">
const change = (data: { province: string, city: string,area: string}) => {
    console.log(data)
}

</script>

<style scoped>

</style>