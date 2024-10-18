import { App } from 'vue'
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import timeChoose from './timeChoose'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import chooseAreaPlus from './chooseAreaPlus'
import form from './form'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'
import * as Icons from '@element-plus/icons-vue'
import './styles/base.scss'
import './styles/ui.scss'
import { toLine } from './utils/index'

const components = [
    chooseArea,
    chooseIcon,
    trend,
    notification,
    list,
    menu,
    progress,
    timeChoose,
    chooseDate,
    chooseCity,
    chooseAreaPlus,
    form,
    modalForm,
    table,
    calendar
]

export default {
    install(app: App) {
        for (let i in Icons) {
            app.component(`el-icon${toLine(i)}`, Icons[i])
        }
        components.map(item => {
            app.use(item)
        })
    }
}