import {Enum, EnumItem} from './_index'
const params:EnumItem[] = [
  {
    name: '男',
    value: 0
  }, {
    name: '女',
    value: 1
  }, {
    name: '未知',
    value: 2
  }
]
/**
 * 用户性别枚举：男、女、未知
 * @return {Enum} Enum
 */
const userSexEnum = new Enum(params)
export default userSexEnum
