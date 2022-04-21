
import { setShowSideBar } from '@/router/event/handlerMenu'

/**
 * 影响布局变化
 */
export const useLayoutType = (layoutType: LayoutType) => {
  const layoutStore = useLayoutStoreWithOut()
  layoutStore.setLayoutType(layoutType)
  setShowSideBar(layoutType)
}
