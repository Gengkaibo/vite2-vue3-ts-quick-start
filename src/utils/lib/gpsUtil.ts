const GPS = {
  PI: 3.141592653589793,
  x_pi: (3.141592653589793 * 3000.0) / 180.0,
  delta (lat:number, lon:number) {
    const a = 6378245.0 //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    const ee = 0.006693421622965943 //  ee: 椭球的偏心率。
    let dLat = this.transformLat(lon - 105.0, lat - 35.0)
    let dLon = this.transformLon(lon - 105.0, lat - 35.0)
    const radLat = (lat / 180.0) * this.PI
    let magic = Math.sin(radLat)
    magic = 1 - ee * magic * magic
    const sqrtMagic = Math.sqrt(magic)
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * this.PI)
    dLon = (dLon * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * this.PI)
    return {
      lat: dLat,
      lon: dLon,
    }
  },

  // WGS-84 to GCJ-02
  gcj_encrypt (wgsLat:number, wgsLon:number) {
    if (this.outOfChina(wgsLat, wgsLon))
      return {
        lat: wgsLat,
        lon: wgsLon,
      }

    const d = this.delta(wgsLat, wgsLon)
    return {
      lat: wgsLat + d.lat,
      lon: wgsLon + d.lon,
    }
  },
  // GCJ-02 to WGS-84
  gcj_decrypt (gcjLat:number, gcjLon:number) {
    const initDelta = 0.01
    const threshold = 0.000000001
    let dLat = initDelta,
      dLon = initDelta
    let mLat = gcjLat - dLat,
      mLon = gcjLon - dLon
    let pLat = gcjLat + dLat,
      pLon = gcjLon + dLon
    let wgsLat,
      wgsLon,
      i = 0
    while (++i < 10000) {
      wgsLat = (mLat + pLat) / 2
      wgsLon = (mLon + pLon) / 2
      const tmp = this.gcj_encrypt(wgsLat, wgsLon)
      dLat = tmp.lat - gcjLat
      dLon = tmp.lon - gcjLon
      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break

      if (dLat > 0) pLat = wgsLat
      else mLat = wgsLat
      if (dLon > 0) pLon = wgsLon
      else mLon = wgsLon

    }
    return {
      lat: wgsLat,
      lon: wgsLon,
    }
  },
  // GCJ-02 to BD-09
  bd_encrypt (gcjLat:number, gcjLon:number) {
    const x = gcjLon,
      y = gcjLat
    const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi)
    const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi)
    const bdLon = z * Math.cos(theta) + 0.0065
    const bdLat = z * Math.sin(theta) + 0.006
    return {
      lat: bdLat,
      lon: bdLon,
    }
  },
  // BD-09 to GCJ-02
  bd_decrypt (bdLat:number, bdLon:number) {
    const x = bdLon - 0.0065,
      y = bdLat - 0.006
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi)
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi)
    const gcjLon = z * Math.cos(theta)
    const gcjLat = z * Math.sin(theta)
    return {
      lat: gcjLat,
      lon: gcjLon,
    }
  },
  // WGS-84 to Web mercator
  // mercatorLat -> y mercatorLon -> x
  mercator_encrypt (wgsLat:number, wgsLon:number) {
    const x = (wgsLon * 20037508.34) / 180
    let y =
      Math.log(Math.tan(((90 + wgsLat) * this.PI) / 360)) / (this.PI / 180)
    y = (y * 20037508.34) / 180
    return {
      lat: y,
      lon: x,
    }
  },
  // Web mercator to WGS-84
  // mercatorLat -> y mercatorLon -> x
  mercator_decrypt (mercatorLat:number, mercatorLon:number) {
    const x = (mercatorLon / 20037508.34) * 180
    let y = (mercatorLat / 20037508.34) * 180
    y =
      (180 / this.PI) *
      (2 * Math.atan(Math.exp((y * this.PI) / 180)) - this.PI / 2)
    return {
      lat: y,
      lon: x,
    }
  },
  // two point's distance
  distance (latA:number, lonA:number, latB:number, lonB:number) {
    const earthR = 6371000
    const x =
      Math.cos((latA * this.PI) / 180) *
      Math.cos((latB * this.PI) / 180) *
      Math.cos(((lonA - lonB) * this.PI) / 180)
    const y = Math.sin((latA * this.PI) / 180) * Math.sin((latB * this.PI) / 180)
    let s = x + y
    if (s > 1) s = 1
    if (s < -1) s = -1
    const alpha = Math.acos(s)
    const distance = alpha * earthR
    return distance
  },
  outOfChina (lat:number, lon:number) {
    if (lon < 72.004 || lon > 137.8347) return true
    if (lat < 0.8293 || lat > 55.8271) return true
    return false
  },
  transformLat (x:number, y:number) {
    let ret =
      -100.0 +
      2.0 * x +
      3.0 * y +
      0.2 * y * y +
      0.1 * x * y +
      0.2 * Math.sqrt(Math.abs(x))
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0
    ret +=
      ((20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin((y / 3.0) * this.PI)) *
        2.0) /
      3.0
    ret +=
      ((160.0 * Math.sin((y / 12.0) * this.PI) +
        320 * Math.sin((y * this.PI) / 30.0)) *
        2.0) /
      3.0
    return ret
  },
  transformLon (x:number, y:number) {
    let ret =
      300.0 +
      x +
      2.0 * y +
      0.1 * x * x +
      0.1 * x * y +
      0.1 * Math.sqrt(Math.abs(x))
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0
    ret +=
      ((20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin((x / 3.0) * this.PI)) *
        2.0) /
      3.0
    ret +=
      ((150.0 * Math.sin((x / 12.0) * this.PI) +
        300.0 * Math.sin((x / 30.0) * this.PI)) *
        2.0) /
      3.0
    return ret
  },
  // 度 转 度°分′秒″
  ToDegrees(val:string) {
    val = val.toString()
    if (typeof val == 'undefined' || val == '') {
      return ''
    }
    let i = val.indexOf('.')
    const strDu: string|number = i < 0 ? val : val.substring(0, i) // 获取度
    let strFen: string|number = 0
    let strMiao: string|number = 0
    if (i > 0) {
      strFen = '0' + val.substring(i)
      strFen = parseFloat(strFen) * 60 + ''
      i = strFen.indexOf('.')
      if (i > 0) {
        strMiao = parseFloat('0' + strFen.substring(i))
        strFen = strFen.substring(0, i) // 获取分
        strMiao = strMiao * 60 + ''
        i = strMiao.indexOf('.')
        strMiao = strMiao.substring(0, i + 4) // 取到小数点后面三位
        strMiao = parseFloat(strMiao).toFixed(2) // 精确小数点后面两位
      }
    }
    return {
      d: strDu,
      f: strFen,
      m: strMiao,
      str: strDu + ',' + strFen + ',' + strMiao,
    }
  },

  // 度°分′秒″ 转 度
  ToDigital(strDu: string|number, strFen: string|number, strMiao: string|number, len: string|number) {
    len = len > 6 || typeof len == 'undefined' ? 6 : len // 精确到小数点后最多六位
    strDu = typeof strDu == 'undefined' || strDu == '' ? 0 : parseFloat(strDu as string)
    strFen =
      typeof strFen == 'undefined' || strFen == ''
        ? 0
        : parseFloat(strFen as string) / 60
    strMiao =
      typeof strMiao == 'undefined' || strMiao == ''
        ? 0
        : parseFloat(strMiao as string) / 3600
    const digital = strDu + strFen + strMiao
    if (digital == 0) {
      return ''
    } else {
      return digital.toFixed(len as number)
    }
  },
}
export default GPS
