import { ElMessage } from 'element-plus'
export {
  deepFindTreeItemByCondition,
  sleep,
  copyDomText,
  S4,
  guid,
  strToDate,
  getFloatRide10,
  deepClone,
}
/**
 * 递归）深度遍历，从顶点开始
 * @param tree 数组
 * @param findKey 例如：id
 * @param subsetKey 例如：children
 * @param findValue 例如：id_12145
 * @returns string
 */
function deepFindTreeItemByCondition<T, U>(tree: T[], findKey: string, subsetKey: string, findValue: U): T | undefined {
  let isGet = false
  let retNode
  function deepSearch<T extends AnyObject>(tree: T[], findValue: U) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i][subsetKey] && tree[i][subsetKey].length > 0) {
        deepSearch(tree[i][subsetKey], findValue)
      }
      if (findValue === tree[i][findKey] || isGet) {
        isGet || (retNode = tree[i])
        isGet = true
        break
      }
    }
  }
  deepSearch(tree, findValue)
  return retNode
}
/**
 * 程序睡眠一会儿，调用时候需要有await标识
 */
async function sleep(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
/**
 * 复制文本到剪贴板
 */
function copyDomText(text:string) {
  // 复制文本 需要在文档中添加一个复制用的input
  const textArea = document.createElement('textarea')
  textArea.style.position = 'absolute'
  textArea.style.opacity = '0'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  const successful = document.execCommand('copy') // 执行 copy 操作
  if (successful) {
    ElMessage({
      offset: 80,
      showClose: true,
      message: '复制成功！',
      type: 'success',
      duration: 3000,
    })
  } else {
    ElMessage({
      offset: 80,
      showClose: true,
      message: '复制失败！',
      duration: 3000,
    })
  }
  // 移除选中的元素
  document.body.removeChild(textArea)
}
/**
 * 获取随机id
 * asdf
 */
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
/**
 * 获取随机id
 * asdf-123d-gf5e-e12d
 */
function guid() {
  return S4() + '-' + S4() + '-' + S4() + '-' + S4()
}

/**
 * 字符串日期转Date对象
 * '2022-04-04 08:25:01'  =>  Date
 */
function strToDate(strDate:string) {
  const str = strDate.replace(/-/g, '/')
  const date = new Date(str)
  return date
}
/**
 * 三位分节法 1,999,999
 * 1999999  =>  1,999,999
 */
function format_3_number(n:number) {
  const b = n.toString()
  const len = b.length
  if (len <= 3) {
    return b
  }
  const r = len % 3
  return r > 0
    ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g)?.join(',')
    : b.slice(r, len).match(/\d{3}/g)?.join(',')
}

/**
 * 十进制转换为科学计数法
 * 12340  =>  1.23 * 10^5
 */
function getFloatRide10(num: number, floatCount = 2) {
  try {
    let log10, prevNum
    if (num <= -10) {
      num = Math.abs(num)
      log10 = Math.log10(num)
      prevNum = (num / Math.pow(10, Math.floor(log10))).toFixed(
        floatCount
      )
      return '-' + prevNum + ' * ' + 10 + '^' + Math.floor(log10)
    } else if (num >= 10) {
      num = Math.abs(num)
      log10 = Math.log10(num)
      prevNum = (num / Math.pow(10, Math.floor(log10))).toFixed(
        floatCount
      )
      return prevNum + ' * ' + 10 + '^' + Math.floor(log10)
    }
  } catch (error) {
    return num
  }
  return num.toFixed(floatCount)
}
/**
 * 深拷贝
 */
function deepClone(obj: any) {
  const result = typeof obj.splice === 'function' ? [] : {} as AnyObject
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key]) // 如果对象的属性值为object的时候，递归调用deepClone,即在吧某个值对象复制一份到新的对象的对应值中。
      } else {
        result[key] = obj[key] // 如果对象的属性值不为object的时候，直接复制参数对象的每一个键值到新的对象对应的键值对中。
      }
    }
    return result
  }
  return obj
}
