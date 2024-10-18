import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
    import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils/index'
import myUi from './components'
import '../lib/chooseIcon/style.css'
import '../lib/style.css'
import './mock/table'

const app = createApp(App)
for (let i in Icons) {
    app.component(`el-icon${toLine(i)}`, Icons[i])
}
app.use(ElementPlus)
app.use(router)
app.use(myUi)
app.mount('#app')
