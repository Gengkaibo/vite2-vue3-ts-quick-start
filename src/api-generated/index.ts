import * as tjc from '@/api-generated/typescript-jquery-client'
import Base from '@/utils/lib/base'

const { token } = useUserStoreWithOut()

const ipPort = Base.IS_DEV? '/apis' : import.meta.env.VITE_APP_BASE_API as string
const API = {
  BaseLayerControllerApi: new tjc.BaseLayerControllerApi(ipPort, {
    apiKey: token || 'AT-9cc1f2323abe5dbb5e4fb758c370e9d5'
  },{
    // 这里写其他的ajax配置
    timeout: 5 * 1000
  }),

  // ...
}
export { API }
