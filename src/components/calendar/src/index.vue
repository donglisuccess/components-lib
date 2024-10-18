<template>
    <div id="calendar"></div>
</template>

<script setup lang="ts">
// 在vite里面使用fullcalendar 需要引入一个包
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg } from '@fullcalendar/core'
import { ref, onMounted, PropType } from 'vue'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg }from '@fullcalendar/interaction'
import { EventItem } from './types.d'

// 先定义props
const props = defineProps({
    // 日历上显示的语言
    local: {
        type: String,
        default: 'zh-cn'
    },
    // 视图模式
    initalView: {
        type: String,
        default: 'dayGridMonth'
    },
    // 按钮文字
    buttonText: {
        type: Object,
        default: () => {
            return {
                today: '今天',
                month: '月',
                week: '周',
                day: '日',
                prevYear: '上一年',
                nextYear: '下一年',
                pre: '上一月',
                next: '下一月'
            }
        }
    },
    // 头部工具栏
    headerToolbar: {
        type: Object,
        default: () => {
            return {
                start: 'title',
                center: '',
                end: 'prev today next'
            }
        }
    },
    // 底部工具栏
    footerToolbar: {
        type: Object,
    },
    // 日历事件
    events: {
        type: Array as PropType<EventItem[]>,
        default: () => []
    },
    // 显示结束时间
    displayEventEnd: {
        type: Boolean,
        default: false
    },
    // 自定义渲染内容
    eventContent: {
        type: Function
    }
})

const emits = defineEmits(['dateClick', 'eventClick'])
// 日历对象
let calendar = ref<Calendar>()

const renderCalendar = () => {
    let el = document.getElementById('calendar')
    if(el) {
        console.log('触发')
        calendar.value = new Calendar(el, {
            // 使用到的插件
            plugins: [daygridPlugin, interactionPlugin],
            //视图模式
            initialView: props.initalView,
            // 语言
            locale: props.local,
            // 按钮文字
            buttonText: props.buttonText,
            // 头部工具栏
            headerToolbar: props.headerToolbar,
            // 底部工具栏
            footerToolbar: props.footerToolbar,
            // 事件源
            eventSources: [
                {
                    events(e, callback) {
                        if(props.events.length) callback(props.events)
                        else callback([])
                    }
                }
            ],
            // 点击日历的某一天
            dateClick(info: DateClickArg) {
                emits('dateClick', info)
            },
            // 点击日历上的事件
            eventClick(info: EventClickArg) {
                emits('eventClick', info)
            },
            // 是否显示结束时间
            displayEventEnd: props.displayEventEnd,
            // 自定义渲染内容
            eventContent: props.eventContent
        })
        calendar.value.render()
    }
}

onMounted(() => {
    renderCalendar()
})


</script>

<style scoped>

</style>