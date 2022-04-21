/**
 * SessionStorage 类
 * @author 沉淀<958001996@qq.com>
 */

export default class Storage {

    static get(name: string) {
        const data = sessionStorage.getItem(name)
        if (!data) return data
        return JSON.parse(data)
    }

    static set(name: string, val: any) {
        sessionStorage.setItem(name, JSON.stringify(val))
    }

    static clear () {
        sessionStorage.clear()
    }

    static remove (name: string) {
        sessionStorage.removeItem(name)
    }

}
