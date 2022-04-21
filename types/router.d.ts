// 扩展 RouteMeta 接口来输入 meta 字段
declare module 'vue-router' {
  interface RouteMeta {
    // 前端导航显示的字
    title: string,
    // 菜单级别
    menuLevel: number,
    // 是否在导航栏显示(判断所有)
    isNav: boolean,
    // 是否开启状态缓存(判断最终路由页面项)
    keepAlive?: boolean,
    // 是否显示底部信息栏(判断最终路由页面项)
    isShowFooter?: boolean,
    // 是否为单纯的事件（判断所有级别，在导航守卫做拦截，拒绝响应路由，调用事件派发器）
    isPureMethod?: boolean,
    // 字体图标（使用的/public/fonts/iconfont,查看示例可直接在浏览器打开demo_index.html）
    iconClass?: string,
    // 图片图标（/src/assets/${iconImage}）
    iconImage?: string,
  }
}
export { };
