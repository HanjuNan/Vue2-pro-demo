// 网络请求的配置文件
import axios from "../utils/request"


// 接口地址
const base = {
    baseUrl: 'http://localhost:8080',
    login: '/login'
}

/**
 * 请求方法
 */

export function getLogin(params) {
    return axios.post(base.login, params)
}