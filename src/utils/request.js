// axios 二次封装
import Axios from 'axios'
import qs from "qs"

// 1、配置基础路径和超时时间
const instance = Axios.create({
    // baseURL: 'http://localhost:3434/',
    timeout: 5000
})



// 2、请求拦截
instance.interceptors.request.use(config => {
    console.log("请求的config = ", config);
    // 功能: 如果是post请求 处理发送的参数
    if (config.method === 'POST') {
        config.data = qs.stringify(config.data)
    }

    return config;
}, err => {
    return Promise.reject(err);
})


// 3、响应拦截
instance.interceptors.response.use(res => {
    // 成功

    return res.data;
}, err => {

    return Promise.reject(err)
})


// 4、导出实例
export default instance;