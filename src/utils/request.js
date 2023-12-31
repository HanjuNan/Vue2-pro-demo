// axios 二次封装
import Axios from 'axios'
import qs from "qs"
import store from "../store"
// 1、配置基础路径和超时时间
const instance = Axios.create({
    baseURL: '/foo',
    timeout: 10000
})



// 2、请求拦截
instance.interceptors.request.use(config => {
    //配置请求头
    let token = store.state.LoginModule.userinfo.token
    if (token) {
        config.headers.authorization = token
    }
    


    console.log("请求的config = ", config);
    // 功能: 如果是post请求 处理发送的参数
    console.log("config.data = ", config.data);
    console.log("qs.stringify(config.data) = ",qs.stringify(config.data));
    console.log("config.method = ", config.method);
    if (config.method === 'post') {
        
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