// 网络请求的配置文件
import axios from "../utils/request"


// 接口地址
const base = {
    baseUrl: 'http://localhost:8080',
    login: '/login', //登录
    getUser: '/tokenList', //测试token是否有效
}

/**
 * 请求方法
 */

export function getLogin(params) {
    return axios.post(base.login, params)
}

export function getUser() {
    return axios.post(base.getUser)
}