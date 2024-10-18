import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Container from '../components/container/src/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Container',
        component: Container,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/chooseIcon',
                name: 'ChooseIcon',
                component: () => import('../views/chooseIcon.vue')
            },
            {
                path: '/chooseArea',
                name: 'ChooseArea',
                component: () => import('../views/chooseArea.vue')
            },
            {
                path: '/trend',
                name: 'Trend',
                component: () => import('../views/trend.vue')
            },
            {
                path: '/notification',
                name: 'Notification',
                component: () => import('../views/notification.vue')
            },
            {
                path: '/menu',
                name: 'Menu',
                component: () => import('../views/menu.vue')
            },
            {
                path: '/progress',
                name: 'Progress',
                component: () => import('../views/progress.vue')
            },
            {
                path: '/timeChoose',
                name: 'TimeChoose',
                component: () => import('../views/timeChoose.vue')
            },
            {
                path: '/waterMark',
                name: 'WaterMark',
                component: () => import('../views/waterMark.vue')
            },
            {
                path: '/chooseDate',
                name: 'ChooseDate',
                component: () => import('../views/chooseDate.vue')
            },
            {
                path: '/chooseCity',
                name: 'ChooseCity',
                component: () => import('../views/chooseCity.vue')
            },
            {
                path: '/form',
                name: 'Form',
                component: () => import('../views/form.vue')
            },
            {
                path: '/modalForm',
                name: 'ModalForm',
                component: () => import('../views/modalForm.vue')
            },
            {
                path: '/table',
                name: 'Table',
                component: () => import('../views/table.vue')
            },
            {
                path: '/calendar',
                name: 'Calendar',
                component: () => import('../views/calendar.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router