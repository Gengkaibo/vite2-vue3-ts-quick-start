/**
 * @description 设置固定的Content-Type字面量类型
 */
declare interface MyAxiosHeadersType {
  headers?: {
    'Content-Type'?:
    'application/json;charset=UTF-8' |
    'application/x-www-form-urlencoded;charset=UTF-8' |
    'multipart/form-data;charset=UTF-8'
  }
}

/**
 * @description 'application/json;charset=UTF-8'
 * | 'application/x-www-form-urlencoded;charset=UTF-8'
 * | 'multipart/form-data;charset=UTF-8'
 */
declare enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
/**
 * @description request method
 */
declare enum RequestEnum {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
