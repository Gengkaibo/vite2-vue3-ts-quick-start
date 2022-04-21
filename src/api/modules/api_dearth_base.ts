
import { useRequest } from '../request'
const { request } = useRequest()
export default {
  // 用户登录
  login(params: any) {
    return request({
      url: '/user/login',
      method: RequestEnum.GET,
      params,
      headers: {
        'Content-Type': ContentTypeEnum.JSON
      }
    })
  },

}
