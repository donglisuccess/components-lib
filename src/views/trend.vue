<template>
    <div>
        <div class="flex">
            <my-trend :text="'增长趋势'"></my-trend>
            <my-trend :text="'下降趋势'" type="down"></my-trend>
        </div>
        <div class="flex">
            <my-trend>销售额</my-trend>
            <my-trend type="down">营业额</my-trend>
        </div>
        <div class="flex">
            <my-trend :textColor="'#aaa'">分数线</my-trend>
            <my-trend type="down" :textColor="'#aaa'">考试分数</my-trend>
        </div>
        <div class="flex">
            <my-trend reverse>上升（反转颜色）</my-trend>
            <my-trend  type="down" reverse>下降（反转颜色）</my-trend>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.flex {
    display: flex;
    margin-bottom: 50px;
    >:nth-child(n) {
        margin-right: 300px;
    }
}
</style>