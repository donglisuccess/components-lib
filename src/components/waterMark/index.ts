import { App } from 'vue'
import waterMark from './src/index.vue'

export default {
    install(app: App) {
        app.component('my-water-mark', waterMark)
    }
}