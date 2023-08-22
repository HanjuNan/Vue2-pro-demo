// 网络请求的配置文件
import axios from "../utils/request"

// http://iwenwiki.com/api/blueberrypai/getIndexBanner.php
// 接口地址
const base = {
    baseUrl: 'http://iwenwiki.com/',
    login: '/login', //登录
    getUser: '/tokenList', //测试token是否有效
    getBanner: '/blueberrypai/getIndexBanner.php', //轮博接口
}

/**
 * 请求方法
 */

export function getLogin(params) {
    return axios.post(base.login, params)
}

// 测试token接口
export function getUser() {
    return axios.post(base.getUser)
}

// 轮播接口
export function getBanner() {
    return axios.get(base.getBanner)
}