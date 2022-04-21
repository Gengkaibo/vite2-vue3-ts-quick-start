import { THEME_COLOR } from '@/config'
/**
 * 影响主题色
 */
 export const useThemeColor = (color: string = THEME_COLOR) => {
  // 颜色配置在theme.less中
  document.documentElement.style.setProperty(
    '--el-menu-hover-text-color-custom',
    color
  )
  document.documentElement.style.setProperty(
    '--el-menu-active-color-custom',
    color
  )
  document.documentElement.style.setProperty(
    '--el-color-primary-custom',
    color
  )
}
