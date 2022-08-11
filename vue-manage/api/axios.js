import axios from 'axios'
import config from '../config'

// 判断是生产环境还是开发环境
const baseUrl = process.env.NODE_ENV === 'devalopment' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }
    interceptors(instance) {
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            console.log('--------请求成功---------')
            console.log(response)
            return config;
        }, function (error) {
            console.log('--------请求失败---------')
            console.log(error)
            return Promise.reject(error);
        })
        //添加响应拦截器
        instance.interceptors.response.use(function (response) {
            console.log('--------响应成功---------')
            console.log(response)
            return response;
        }, function (error) {
            console.log('--------响应失败---------')
            console.log(error)
            return Promise.reject(error)
        })
    }

    request(option) {
        const instance = axios.create();
        option = { ...this.getInsideConfig(), ...option }
        this.interceptors(instance)
        return instance(option)
    }
}

export default new HttpRequest(baseUrl)

