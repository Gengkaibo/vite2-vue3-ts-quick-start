import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MyLayout from '@/layout/MyLayout.vue'
import { toogleShowFooter } from '@/router/event/handlerMenu'
import { menuRecord } from './menuRecordConfig'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const userStore = useUserStoreWithOut()
const menuStore = useMenuStoreWithOut()
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/MyPortal',
  },
  {
    path: '/MyLogin',
    name: 'MyLogin',
    component: () => import('@/views/login/MyLogin.vue'),
  },
  {
    path: '/MyPortal',
    name: 'MyPortal',
    component: () => import('@/views/portal/MyPortal.vue'),
  },
  {
    path: '/content',
    component: MyLayout,
    children: menuRecord
  }
]
// 存入store
menuStore.setNavRoutes(menuRecord)
const router = createRouter({
  history: createWebHashHistory(), // 推荐
  routes,
})


// 设置导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  const user = userStore.userInfo
  if (['/MyLogin'].indexOf(to.path) !== -1 || user) {
    if(to.meta.isPureMethod){
      return false
    }
    next()
  } else {
    next('/MyLogin')
    NProgress.done()
  }
})

router.afterEach((to, from) => {
  NProgress.done()

  menuStore.setActiveIndex(to.fullPath)

  const isShowFooter = to.meta?.isShowFooter
  toogleShowFooter(Boolean(isShowFooter))

})


export default router




