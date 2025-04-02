import axios, { AxiosInstance, InternalAxiosRequestConfig, CancelTokenSource } from "axios";
import type { RequestConfig } from "@/services/request/type";

class Request {
  instance: AxiosInstance;
  cancelTokenSources: Map<string, CancelTokenSource> = new Map();

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在这里可以添加一些请求前的处理逻辑，比如添加请求头、修改请求参数等
        console.log("全局请求拦截器");
        return config;
      },
      (error) => {
        // 在这里可以处理请求错误
        console.log("全局请求拦截器错误");
        return error;
      }
    );
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 在这里可以添加一些响应后的处理逻辑，比如处理响应数据、错误处理等
        console.log("全局响应拦截器");
        
        // 可以根据业务需求处理不同的状态码
        const { status, data } = response;
        if (status === 200) {
          return data;
        }
        
        return response.data;
      },
      (error) => {
        // 在这里可以处理响应错误
        console.log("全局响应拦截器错误");
        
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          switch (error.response.status) {
            case 401:
              console.log('未授权，请重新登录');
              // 可以在这里处理登录过期逻辑
              break;
            case 403:
              console.log('拒绝访问');
              break;
            case 404:
              console.log('请求错误，未找到该资源');
              break;
            case 500:
              console.log('服务器错误');
              break;
            default:
              console.log(`连接错误 ${error.response.status}`);
          }
        } else if (error.request) {
          // 请求已发出，但没有收到响应
          console.log('网络错误，请稍后重试');
        } else {
          // 请求配置有误
          console.log('请求配置错误', error.message);
        }
        
        return Promise.reject(error);
      }
    );

    // 添加局部拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccess,
      config.interceptors?.requestFailure
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccess,
      config.interceptors?.responseFailure
    );
  }

  request<T = any>(config: RequestConfig<T>) {
    // 生成请求的唯一标识
    const requestKey = `${config.method || 'GET'}_${config.url}`;
    
    // 如果已经有相同的请求正在进行，则取消之前的请求
    if (config.cancelDuplicate && this.cancelTokenSources.has(requestKey)) {
      const source = this.cancelTokenSources.get(requestKey);
      source?.cancel('取消重复请求');
      this.cancelTokenSources.delete(requestKey);
    }
    
    // 创建新的取消令牌
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    
    if (config.cancelDuplicate) {
      this.cancelTokenSources.set(requestKey, source);
    }
    
    // 单独请求的拦截器
    if (config.interceptors?.requestSuccess) {
      config = config.interceptors.requestSuccess(
        config as InternalAxiosRequestConfig
      );
    }
    
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 请求完成后，从映射中删除
          if (config.cancelDuplicate) {
            this.cancelTokenSources.delete(requestKey);
          }
          
          // 单独响应的拦截器
          if (config.interceptors?.responseSuccess) {
            res = config.interceptors.responseSuccess(res);
          }
          resolve(res);
        })
        .catch((err) => {
          // 请求出错后，从映射中删除
          if (config.cancelDuplicate) {
            this.cancelTokenSources.delete(requestKey);
          }
          reject(err);
        });
    });
  }

  get<T = any>(url: string, params?: any, config: RequestConfig<T> = {}) {
    return this.request<T>({ ...config, url, params, method: "GET" });
  }

  post<T = any>(url: string, data?: any, config: RequestConfig<T> = {}) {
    return this.request<T>({ ...config, url, data, method: "POST" });
  }

  delete<T = any>(url: string, params?: any, config: RequestConfig<T> = {}) {
    return this.request<T>({ ...config, url, params, method: "DELETE" });
  }

  patch<T = any>(url: string, data?: any, config: RequestConfig<T> = {}) {
    return this.request<T>({ ...config, url, data, method: "PATCH" });
  }

  put<T = any>(url: string, data?: any, config: RequestConfig<T> = {}) {
    return this.request<T>({ ...config, url, data, method: "PUT" });
  }
}

export default Request;
