// 封装axios
import axios from 'axios'
/** 第一种封装方式 */
// function httpForDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=7892220`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16367848715056039795818497","bc":"360100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }
// function httpForList (params) {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=360100&pageNum=1&pageSize=10&type=1&k=4732967',
//     headers: {
//       // 设置请求头
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16367848715056039795818497","bc":"360100"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }
// export default {
//   httpForList,
//   httpForDetail
// }

/** 第二种封装方式：使用axios创建一个实例进行封装 */
const http = axios.create({
  baseURL: 'https://m.maizuo.com', // 请求地址
  timeout: 10000, // 请求超时时长
  headers: { // 设置请求头
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16367848715056039795818497","bc":"360100"}'
  }
})
/**
 * 在发请求前拦截：showLoading
 * 在成功后拦截：hideLoading
 */
export default http
