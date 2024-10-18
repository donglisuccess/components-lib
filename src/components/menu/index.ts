import { App } from 'vue'
import menu from './src/index.vue'
import infinite from './src/infinite.tsx'

export default {
    install(app: App) {
        app.component('my-menu', menu)
        app.component('my-infinite-menu', infinite)
    }
}