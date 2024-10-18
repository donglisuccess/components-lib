import { App } from 'vue'
import chooseAreaPlus from './src/index.vue'

export default {
    install(app: App) {
        app.component('my-choose-area-plus', chooseAreaPlus)
    }
}