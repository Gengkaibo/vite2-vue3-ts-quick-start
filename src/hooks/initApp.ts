import { watchEffectPcOrMobile } from '@/hooks/ui/watchEffectPcOrMobile'
import { useThemeColor } from '@/hooks/ui/useThemeColor'
export const initApp = () => {
  // 初始化主颜色
  useThemeColor()
  // 监听窗口大小适配移动端
  watchEffectPcOrMobile()
}
