// vue生态
import App from './App.vue'
import { piniaStore } from '@/store'
import router from '@/router'
import { createHead } from '@vueuse/head'
// 组件库采用了自动按需导入
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 全局样式
import '@/styles/global.less'
import '@/styles/elementPlusImportant.less'
import '@/styles/theme.less'
import '@/styles/markdown.less'
import '@/styles/markdown_mobile.less'
import 'animate.css'
import $ from 'jquery'
// 打印编译信息
import { version, buildTime } from '../build/info.json'

// 可视化(如有需要手动放开)
// import * as echarts from 'echarts'
// window.echarts = echarts

window.$ = $
console.table(import.meta.env)

const head = createHead()
const app = createApp(App)
app.use(head).use(piniaStore).use(router).mount('#app')

export default app

console.log(
  `%c Release Build Info
%cVersion			v${version}
BuildTime		${buildTime}`,
  'background:#000;color:#FFF;font-weight:bold;',
  'background:#FFF;color:#000;'
)
