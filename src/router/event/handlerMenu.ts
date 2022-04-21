import { RouteRecordRaw } from 'vue-router'

import router from '@/router'
import { openEvent, closeEvent } from './handlerMenuListener'
import { deepFindTreeItemByCondition } from '@/utils/lib/commonUtil'
const menuStore = useMenuStoreWithOut()
const layoutStore = useLayoutStoreWithOut()

type HandlerParamFromClick = {
  item: RouteRecordRaw
}

// 菜单点击事件响应
export const handleMenuClick = (handlerParam: HandlerParamFromClick) => {
  console.log(menuStore.getActiveIndex)
  if (!handlerParam.item?.meta?.isPureMethod) {
    navigatorHandler(handlerParam.item)
  } else {
    navEventHandler(handlerParam.item.path)
  }
  if(handlerParam.item.meta?.menuLevel==1){
    menuStore.setLevel1MenuItem(handlerParam.item)
    setShowSideBar(layoutStore.layoutType)
  }
}
// 路由响应
export const navigatorHandler = (item: RouteRecordRaw) => {
  const lastActivePath = menuStore.getActiveIndex
  const activeItem = deepFindTreeItemByCondition(menuStore.navRoutes as RouteRecordRaw[], 'path', 'children', lastActivePath)
  if(activeItem?.meta?.isPureMethod){
    closeEvent(lastActivePath)
  }
  router.push(item.path)
  menuStore.setActiveIndex(item.path)
}

// 拒绝响应路由，调用事件派发器
export const navEventHandler = (path: string) => {
  const lastActivePath = menuStore.getActiveIndex
  const isSame = lastActivePath == path
  if (!isSame) {
    // 纯净事件导航点击第一次触发...
    closeEvent(lastActivePath)
    openEvent(path)
    menuStore.setActiveIndex(path)
  } else {
    // 同一个纯净事件导航点击第二次触发...
    closeEvent(lastActivePath)
    menuStore.setActiveIndex('')
  }
}

// 控制布局
export const setShowSideBar = (layoutType: LayoutType) => {
  switch (layoutType) {
    case 'Left':
      layoutStore.setShowSideBar(true)
      break
    case 'TopLeft':
      if(menuStore.level1MenuItem?.children?.length){
        layoutStore.setShowSideBar(true)
      }
      else{
        layoutStore.setShowSideBar(false)
      }
      break
    case 'Top':
      layoutStore.setShowSideBar(false)
      break
  }
}

// 控制footer
export const toogleShowFooter = (isShow: boolean) => {
  layoutStore.showFooter = isShow
}



