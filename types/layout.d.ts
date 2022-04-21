/**
 *布局展示形式
 */
declare type LayoutType = 'Top' | 'Left' | 'TopLeft';
/**
 *布局状态
 */
declare interface LayoutState {
  showFooter: boolean
  showSideBar: boolean
  layoutType: LayoutType
  isDark: boolean // 是否为黑夜模式
  isMobile: boolean // 是否为小屏模式（手机）
  isForceHorizontal: boolean // 是否强行横屏
}

