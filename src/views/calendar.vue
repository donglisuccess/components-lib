<template>
    <div>
        <my-calendar
         :events="eventSources"
         displayEventEnd
         :eventContent="eventContent"
         @dateClick="dateClick"
         @eventClick="eventClick"></my-calendar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EventItem } from '../components/calendar/src/types.d'
import { DateClickArg } from '@fullcalendar/interaction'
import { EventClickArg, EventContentArg } from '@fullcalendar/core'

let eventSources = ref<Array<EventItem>>(
    [
        {
            title: '吃早饭',
            start: '2024-07-21 08:00:00',
            end: '2024-07-21 08:30:00',
            editable: true
        },
        {
            title: '上班',
            start: '2024-07-21 09:00:00',
            end: '2024-07-25 18:00:00',
            editable: true
        }
    ]
)

const dateClick = (info: DateClickArg) => {
    console.log('dateClick', info)
}
const eventClick = (info: EventClickArg) => {
    console.log('eventClick', info)
}

const eventContent = (arg: EventContentArg) => {
    let el = document.createElement('div')
    let timeTextArr =  arg.timeText.split('-')
    let start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '')
    let end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '')
    el.innerHTML = `
        <div>开始时间：${start}</div>
        <div>结束时间：${end}</div>
        <div>标题：${arg.event._def.title}</div>
    `
    return {
        domNodes: [el]
    }
}
</script>

<style scoped>

</style>