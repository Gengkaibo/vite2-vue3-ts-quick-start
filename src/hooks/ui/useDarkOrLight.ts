/**
 * 影响黑暗还是明亮主题
 */
export const useDarkOrLight = (isDark: boolean) => {
  const layoutStore = useLayoutStoreWithOut()
  layoutStore.setIsDark(isDark)
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
