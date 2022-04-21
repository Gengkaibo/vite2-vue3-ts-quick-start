/**
 * LocalStorage 类
 * @author 沉淀<958001996@qq.com>
 */

export default class Storage {

    static get(name: string) {
        const data = localStorage.getItem(name)
        if (!data) return data
        return JSON.parse(data)
    }

    static set(name: string, val: any) {
        localStorage.setItem(name, JSON.stringify(val))
    }

    static clear () {
        localStorage.clear()
    }

    static remove (name: string) {
        localStorage.removeItem(name)
    }

  /**
   * 包含过期时间,maxAge单位秒
   */
  static setStore(name: string, val: any, maxAge: number) {
    if (typeof val !== 'string') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(name, val)
    if (!isNaN(maxAge)) {
      const timeout = new Date().getTime() / 1000
      localStorage.setItem(`${name}_expire`,  (timeout + maxAge).toString())
    }
  }
  /**
   * 包含过期时间,maxAge单位秒
   */
  static getStore(name: string) {
    const content = localStorage.getItem(name)
    const _expire = Number(localStorage.getItem(`${name}_expire`))
    if (_expire) {
      const now = new Date().getTime() / 1000
      if (now > _expire) {
        localStorage.removeItem(name)
        return null
      }
    }
    try {
      if(content){
        return JSON.parse(content)
      }else{
        return null
      }
    } catch (e) {
      return content
    }
  }
  static clearStore(name: string) {
    localStorage.removeItem(name)
    localStorage.removeItem(`${name}_expire`)
  }

}
