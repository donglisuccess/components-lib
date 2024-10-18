import { App } from 'vue'
import timeChoose from './src/index.vue'

export default {
    install(app: App) {
        app.component('my-time-choose', timeChoose)
    }
}