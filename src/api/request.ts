/**
 * axios简单封装
 * @module request
 * @Date 2022年4月15日
 * @Author 沉淀
 * @version 0.0.1
 */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError,
  AxiosPromise,
} from 'axios'
import qs from 'qs'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useElLoading } from '@/hooks/ui/useElLoading'
import { goLoginPath } from '@/router/utils'
import { MESSAGE_DURATION } from '@/config'

const userStore = useUserStoreWithOut()
// 提示信息显示时长

// 基础配置
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VITE_APP_BASE_API,
  timeout: 5 * 1000,
  withCredentials: true, // 允许跨域携带cookie信息
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    useElLoading(true)
    // 添加token
    if (userStore.token != null && userStore.token.length) {
      config.headers && (config.headers['Authorization'] = userStore.token)
    }
    if (
      (config.headers as AxiosRequestHeaders)['Content-Type'] ===
      ContentTypeEnum.FORM_URLENCODED
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    console.warn(error)
    return Promise.reject(error)
  }
)
// 响应拦截器
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse<AnyObject>) {
    useElLoading(false)
    return response
  },
  function (error: AxiosError) {
    useElLoading(false)
    if (error.response) {
      const errorMessage =
        error.response.data === null
          ? '服务异常'
          : error.response.data.message || '服务异常'
      switch (error.response.status) {
        case 404:
          ElMessage({
            offset: 80,
            showClose: true,
            message: '很抱歉，资源未找到',
            type: 'error',
            duration: MESSAGE_DURATION,
          })
          break
        case 403:
          ElMessage({
            offset: 80,
            showClose: true,
            message: '很抱歉，您暂无该操作权限',
            type: 'error',
            duration: MESSAGE_DURATION,
          })
          break
        case 401:
          ElMessageBox.alert('登录已过期，请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            showClose: false,
            callback: () => {
              goLoginPath()
            },
          })
          break
        default:
          ElMessage({
            offset: 80,
            showClose: true,
            message: errorMessage,
            type: 'error',
            duration: MESSAGE_DURATION,
          })
          break
      }
    }
    return Promise.reject(error)
  }
)
// 使用request,添加泛型
const useRequest = () => {
  const request = <T>(
    option: AxiosRequestConfig & MyAxiosHeadersType
  ): AxiosPromise<T> => {
    return axiosInstance({
      ...option,
    })
  }
  return {
    request,
  }
}

export { axiosInstance, useRequest }
