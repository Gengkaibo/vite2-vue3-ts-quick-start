/**
 * 枚举工具类
 * @module Enum
 * @Date：2022年2月22日14:44:44
 * @updateDate：2022年3月14日12:56:05
 * @Author：沉淀
 * @version：0.0.1
 */
export class Enum {
  [k: string]: any;
  list: EnumItem[]
  constructor(list: EnumItem[] = [{ name: '', value: '' }]) {
    this.list = list
    this.list.forEach((element: EnumItem) => {
      this[element.name] = element.value
    })
  }
  /**
   * 根据name获取对应value
   */
  getValue(name: Name) {
    const index = this.list.findIndex((item) => item.name == name)
    return index > -1 ? this.list[index].value : null
  }
  /**
   * 根据value获取对应name
   */
  getName(value: Value) {
    const index = this.list.findIndex((item) => item.value == value)
    return index > -1 ? this.list[index].name : null
  }
  /**
   * 根据name或者value获取对应对象
   */
  getTarget(param: Name|Value): EnumItem | null {
    const index = this.list.findIndex((item) => item.value == param || item.name == param)
    return index > -1 ? this.list[index] : null
  }
  /**
   * 获取所有的name集合
   */
  names(): Name[] {
    const names = this.list.map((item) => {
      return item.name
    })
    return names
  }
  /**
   * 获取所有的value集合
   */
  values(): Value[] {
    const values = this.list.map((item) => {
      return item.value
    })
    return values
  }
}

export type Name = string;
export type Value = string | number;
export type EnumItem = {
  name: Name;
  value: Value;
  meta?: AnyObject;
}
