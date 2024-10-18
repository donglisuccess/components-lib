<template>
    <div>
        <my-choose-city 
            @chooseByCity="chooseByCity"
            @chooseByProvice="chooseByProvice">
        </my-choose-city>
    </div>
</template>

<script setup lang="ts">
import type { cityType } from '../components/chooseCity/src/type.d.ts'
const chooseByCity = (item: cityType) => {
    console.log(item)
}

const chooseByProvice = (val: string) => {
    console.log(val)
}

</script>

<style scoped>

</style>