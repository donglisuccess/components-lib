import trend from './src/index.vue'
import { App } from 'vue'

export default {
    install(app: App) {
        app.component('my-trend', trend)
    }
}