// 该文件的目的是告诉我们当前的组件库的项目是一个vue插件
import { App } from 'vue';

declare const _default: {
    install: (app: App) => void;
};
export default _default;