import { useLayoutStoreWithOut } from './layout'
import { RouteRecordRaw } from 'vue-router'
import { piniaStore } from '../index'
import Base from '@/utils/lib/base'
import { ACTIVE_INDEX_KEY, LEVEL1_MENU_ITEM_KEY } from '@/config'
const layoutStore = useLayoutStoreWithOut()
interface MenuState {
  navRoutes: RouteRecordRaw[] | undefined
  activeIndex: string | undefined
  isCollapse: boolean
  level1MenuItem: RouteRecordRaw | undefined
}

export const useMenuStore = defineStore('Menu', {
  state: (): MenuState => {
    return {
      navRoutes: [],
      level1MenuItem: Base.SessionStorage.get(LEVEL1_MENU_ITEM_KEY),
      activeIndex: '',
      isCollapse: false,
    }
  },
  actions: {
    setNavRoutes(routes: RouteRecordRaw[]) {
      this.navRoutes = routes
    },
    setActiveIndex(activePath: string) {
      this.activeIndex = activePath
      Base.SessionStorage.set(ACTIVE_INDEX_KEY, activePath)
    },
    setIsCollapse(flag: boolean){
      this.isCollapse = flag
    },
    setLevel1MenuItem(item: RouteRecordRaw) {
      this.level1MenuItem = item
      Base.SessionStorage.set(LEVEL1_MENU_ITEM_KEY, item)
    },
  },
  getters: {
    asideMenu():RouteRecordRaw[]{
      if(layoutStore.layoutType=='Left' || layoutStore.isMobile){
        return this.navRoutes as RouteRecordRaw[]
      }else{
        return this.level1MenuItem?.children as RouteRecordRaw[] || []
      }
    },
    getActiveIndex():string{
      return this.activeIndex || Base.SessionStorage.get(ACTIVE_INDEX_KEY)
    }
  },
})
// Need to be used outside the setup
export function useMenuStoreWithOut() {
  return useMenuStore(piniaStore)
}
