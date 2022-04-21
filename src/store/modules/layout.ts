import { piniaStore } from '../index'
import { IS_DARK, LAYOUT_TYPE, LAYOUT_TYPE_KEY, SHOW_SIDE_KEY, IS_DARK_KEY } from '@/config'
import Base from '@/utils/lib/base'


export const useLayoutStore = defineStore('Layout', {
  state: (): LayoutState => ({
    showFooter: false,
    showSideBar: Base.SessionStorage.get(SHOW_SIDE_KEY) || false,
    layoutType: Base.SessionStorage.get(LAYOUT_TYPE_KEY) || LAYOUT_TYPE,
    isDark: Base.SessionStorage.get(IS_DARK_KEY) || usePreferredDark() || IS_DARK,
    isMobile: false,
    isForceHorizontal: false,
  }),
  actions: {
    setLayoutType(val: LayoutType){
      this.layoutType = val
      Base.SessionStorage.set(LAYOUT_TYPE_KEY, val)
    },
    setShowSideBar(val: boolean){
      this.showSideBar = val
      Base.SessionStorage.set(SHOW_SIDE_KEY, val)
    },
    setIsDark(val: boolean){
      this.isDark = val
      Base.SessionStorage.set(IS_DARK_KEY, val)
    },
    setIsMobile(val: boolean){
      this.isMobile = val
    },
    setIsForceHorizontal(val: boolean){
      this.isForceHorizontal = val
    },
  },
  getters: {
    getLayoutType(): LayoutType{
      return this.layoutType
    }
  },
})
// 热模块更新
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
// Need to be used outside the setup
export function useLayoutStoreWithOut() {
  return useLayoutStore(piniaStore)
}
