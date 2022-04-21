/**
 * 全局方法类基类
 */

import Cookie from './Cookie'
import LocalStorage from './LocalStorage'
import SessionStorage from './SessionStorage'
const IS_DEV = import.meta.env.NODE_ENV == 'development'

export default class Base {

  static IS_DEV = IS_DEV

  static Cookie = Cookie
  static LocalStorage = LocalStorage
  static SessionStorage = SessionStorage

  /**
   * Vite项目动态渲染本地图片
   * @param {string} name /src/assets/${name}
   */
  static getAssetsStaticSource(name: string) {
    return new URL(`/src/assets/${name}`, import.meta.url).href
  }

}
