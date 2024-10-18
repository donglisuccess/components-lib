<template>
    <el-dialog v-model="visibleCen" v-bind="$attrs" :class="{'m-choose-dialog-body-height': scrollShow}">
        <template #default>
            <my-form
                ref="form"
                :label-width="100"
                :options="options"
                @on-preview="handlerPreview"
                @on-remove="handlerRemove"
                @on-success="handlerSuccess"
                @on-error="handlerError"
                @on-progress="handlerprogress"
                @on-change="handlerChange"
                @on-exceed="handlerExceed"
                @before-upload="beforeUpload"
                @before-remove="beforeRemove">
                <!-- 这里放上传的插槽 -->
                <template #uploadArea>
                    <slot name="uploadArea"></slot>
                </template>
                <template #uploadTips>
                    <slot name="uploadTips"></slot>
                </template>
            </my-form>
        </template>
        <template #footer>
            <slot name="footer" :form="form"></slot>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, PropType} from 'vue'
import { FormOption } from '../../form/src/types/type.d.ts'

const emits = defineEmits(['update:visible'])

let form = ref()

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    options: {
        type: Array as PropType<FormOption[]>,
        required: true
    },
    handlerPreview: {
        type: Function
    },
    handlerRemove: {
        type: Function
    },
    handlerSuccess: {
        type: Function
    },
    handlerError: {
        type: Function
    },
    handlerprogress: {
        type: Function
    },
    handlerChange: {
        type: Function
    },
    handlerExceed: {
        type: Function
    },
    beforeUpload: {
        type: Function
    },
    beforeRemove: {
        type: Function
    },
    scrollShow: {
        type: Boolean,
        default: false
    }
})
const visibleCen = ref<boolean>(props.visible)

watch(() => props.visible, (val) => {
    visibleCen.value = val
})

watch(() => visibleCen.value, (val) => {
    emits('update:visible', val)
})

</script>

<style scoped>

</style>