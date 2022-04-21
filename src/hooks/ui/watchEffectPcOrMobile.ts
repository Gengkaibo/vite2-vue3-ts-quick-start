import { useLayoutType } from "./useLayoutType"
/**
 * 监听窗口大小适配移动端
 */
export const watchEffectPcOrMobile = () => {
  const layoutStore = useLayoutStoreWithOut()
  const { width, height } = useWindowSize()
  const forceToHorizontal = (width: number, height: number) => {
    $('body').css('transform', 'rotate(90deg)')
    $('body').css('position', 'absolute')
    $('body').width(height)
    $('body').height(width)
    $('body').css('top', (height - width) / 2)
    $('body').css('left', 0 - (height - width) / 2)
    $('body').css('transform-origin', '50% 50%')
  }
  const forceToVertical = () => {
    // 恢复竖屏
    $('body').css('transform', 'none')
    $('body').css('position', 'unset')
    $('body').width('100%')
    $('body').height('100%')
    $('body').css('top', 0)
    $('body').css('left', 0)
    $('body').css('transform-origin', '50% 50%')
  }
  let lastLayoutType: LayoutType
  // 监听窗口变化
  watch(
    [ref(width), ref(height), () => layoutStore.isForceHorizontal],
    ([width, height, isForceHorizontal], [prevWidth, prevHeight, prevIsForceHorizontal]) => {
      if (width < 1280) {
        if (prevWidth >= 1280) {
          lastLayoutType = layoutStore.layoutType
          useLayoutType('Top')
        }
        console.log('%c window width: ' + width, 'color:green;')
        document.documentElement.classList.add('is-mobile')
        layoutStore.setIsMobile(true)
        if (isForceHorizontal) {
          // 强制横屏
          forceToHorizontal(width, height)
        } else {
          // 恢复竖屏
          forceToVertical()
        }
      } else {
        if (width > 1280) {
          if (prevWidth <= 1280) {
            lastLayoutType && useLayoutType(lastLayoutType)
          }
        }
        console.log('%c window width: ' + width, 'color:red;')
        document.documentElement.classList.remove('is-mobile')
        layoutStore.setIsMobile(false)
        // 恢复竖屏
        forceToVertical()
      }
    })
}
