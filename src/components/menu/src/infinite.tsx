import { defineComponent, PropType, useAttrs, markRaw } from 'vue'
import type { MenuType } from './types.d.ts'
import * as Icons from '@element-plus/icons-vue'
import './style.scss'

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<MenuType[]>,
            required: true
        },
        defaultActive: {
            type: String,
            default: ''
        },
        // 是否启用vue-router模式，默认为index
        router: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const attrs = useAttrs()
        let renderMenu = (data: MenuType[]) => {
            return data.map(item => {

                item.i = markRaw((Icons as any)[item.icon!])
                let slot = {
                    title: () => {
                        return <>
                            <item.i />
                            <span>{item.name}</span>
                        </ >
                    }
                }
                if (item.children && item.children.length) {
                    return (
                        <el-sub-menu index={item.index} v-slots={slot}>
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    )
                }
                return (
                    <el-menu-item index={item.index}>
                        <item.i></item.i>
                        <span>{item.name}</span>
                    </el-menu-item>
                )
            })
        }
        return () => {
            return (
                <el-menu style="width: 200px;"
                    default-active={props.defaultActive}
                    router={props.router}
                    {...attrs}>
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})