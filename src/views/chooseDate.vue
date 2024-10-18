<template>
    <div>
        <my-choose-date 
            :startOptions="startOptions"
            :beforeDisabled="true"
            @startDateChange="startDateChange"
            @endDateChange="endDateChange"></my-choose-date>
    </div>
</template>

<script setup lang="ts">
interface DateType {
    startDate: Date | null
    endDate: Date | null
}

const startOptions = {
}

const startDateChange = (val: Date) => {
    console.log(val)
}

const endDateChange = (val: DateType) => {
    console.log(val)
}

</script>

<style scoped>

</style>