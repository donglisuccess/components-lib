<template>
    <div>
        <my-time-choose
            :startOptions="startOptions"
            :endOptions="endOptions"
            @startChange="startChange"
            @endChange="endChange"
           >
        </my-time-choose>
    </div>
</template>

<script setup lang="ts">
interface endTimeType {
    startTime: string;
    endTime: string
}
const startChange = (val: String) => {
    console.log("startChange:", val)
}

const endChange = (val: endTimeType) => {
    console.log("endChange:", val)
}

const startOptions = {
    clearable: false
}
const endOptions = {
    clearable: false
}


</script>

<style lang="scss" scoped>

</style>