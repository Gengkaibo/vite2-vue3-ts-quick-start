import {Enum, EnumItem} from './_index'
const params:EnumItem[] = [
  {
    name: 'EPSG:3857(Web Mercator)',
    value: 'EPSG:3857',
  },
  {
    name: 'EPSG:4326(WGS84)',
    value: 'EPSG:4326',
  },
  {
    name: 'EPSG:4479(CGCS2000投影坐标系)',
    value: 'EPSG:4479',
  },
  {
    name: 'EPSG:4490(CGCS2000地理坐标系)',
    value: 'EPSG:4490',
  },
]
/**
 * 坐标系枚举：EPSG:3857(Web Mercator)、EPSG:4326(WGS84)、EPSG:4479(CGCS2000投影坐标系)、EPSG:4490(CGCS2000地理坐标系)
 * @return {Enum} Enum
 */
const crsEnum = new Enum(params)
export default crsEnum
