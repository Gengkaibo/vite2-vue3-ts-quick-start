import { AxiosResponse } from 'axios'

export const convertRes2Blob = (response: AxiosResponse) => {
  // 提取文件名
  const contentDisposition =
    response.headers['content-disposition'] ||
    response.headers['Content-Disposition']
  // 提取文件名
  const matchArray = contentDisposition.match(/filename=(.*)/)
  const fileName: string = (matchArray && matchArray.length > 1 && matchArray[1]) || '文件格式未知.error'
  const blob = new Blob([response.data])
  // 创建新的URL并指向File对象或者Blob对象的地址
  const blobURL = window.URL.createObjectURL(blob)
  // 创建a标签，用于跳转至下载链接
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', decodeURI(fileName))
  // 兼容：某些浏览器不支持HTML5的download属性
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  // 挂载a标签
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  // 释放blob URL地址
  window.URL.revokeObjectURL(blobURL)
}

// 对象=>FormData
export function paramsToFormData(obj: any) {
  const formData = new FormData()
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Array) {
      obj[key].forEach((item: any) => {
        formData.append(key, item)
      })
      return
    }
    formData.append(key, obj[key])
  })
  return formData
}
// 测试url是否通
export function testReq(url:string) {
  return new Promise(function (resolve) {
    // 第一步：建立所需的对象
    const httpRequest = new XMLHttpRequest()
    // 第二步，访问地址
    if (Array.isArray(url)) {
      url.forEach((u) => {
        testReq(u)
      })
      return
    }
    httpRequest.open('GET', url, true)
    // 第三步，设置响应超时时间
    httpRequest.timeout = 1000 * 10
    // 创建成功的回调
    httpRequest.onload = function () {
      // 请求完成。在此进行处理。
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        resolve('success')
      } else {
        resolve('failed')
      }
    }
    // 创建响应超时的回调
    httpRequest.ontimeout = function (e) {
      console.log(e)
      resolve('timeout')
    }
    // 创建响应错误回调
    httpRequest.onerror = function (e) {
      console.log(e)
      resolve('error')
    }
    // 第四步：发送请求
    httpRequest.send()
  })
}
// 测试当前网络环境
export function testNetworkEnvironment() {
  return new Promise(function (resolve) {
    // 第一步：建立所需的对象
    const httpRequest = new XMLHttpRequest()
    // 第二步，访问地址
    httpRequest.open(
      'GET',
      'http://api.tianditu.gov.cn/geocoder?ds={"keyWord":"北京市天安门"}&tk=ff72ae1ae82f4ef1d19a106ce5403d59',
      true
    )
    // 第三步，设置响应超时时间
    httpRequest.timeout = 1000 * 3
    // 创建成功的回调
    httpRequest.onload = function () {
      // 请求完成。在此进行处理。
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        resolve('success')
      } else {
        resolve('failed')
      }
    }
    // 创建响应超时的回调
    httpRequest.ontimeout = function (e) {
      console.log(e)
      resolve('timeout')
    }
    // 创建响应错误回调
    httpRequest.onerror = function (e) {
      console.log(e)
      resolve('error')
    }
    // 第四步：发送请求
    httpRequest.send()
  })
}
/**
 * 根据url的参数获取对应的值
 * @param url
 * @param variable
 * @returns string
 */
 export function getQueryVariable(url:string, variable:string) {
  const query = url.split('?')
  let param = ''
  if (query.length > 1) {
    param = query[1]
  }
  const vars = param.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] == variable) {
      let value = pair[1]
      if (pair[1].indexOf('#/') > -1) {
        value = pair[1].split('#/')[0]
      } else if (pair[1].indexOf('/') > -1) {
        value = pair[1].split('/')[0]
      }
      return value
    }
  }
  return false
}
/*
 * 发起jsonp请求
 */
export function jsonpRequest(src:string) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  script.onload = (script as any).onreadystatechange = function () {
    if (
      !this.readyState ||
      this.readyState === 'loaded' ||
      this.readyState === 'complete'
    ) {
      document.head.removeChild(script)
    }
  }
  document.head.appendChild(script)
}
