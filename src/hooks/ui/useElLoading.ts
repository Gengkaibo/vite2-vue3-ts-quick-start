import { ElLoading } from 'element-plus'
let loading: AnyObject
export const useElLoading = (isShow: boolean, text?: string, options?: any) => {
  if (isShow) {
    loading = ElLoading.service({
      lock: true,
      text: text || 'Loading...',
      ...options,
    })
  } else {
    loading?.close()
  }
}
