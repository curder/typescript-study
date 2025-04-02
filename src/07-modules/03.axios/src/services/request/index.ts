import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import type { RequestConfig } from "@/services/request/type";

class Request {
  instance: AxiosInstance;

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
        return response.data;
      },
      (error) => {
        // 在这里可以处理响应错误
        console.log("全局响应拦截器错误");
        return error;
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
          // 单独响应的拦截器
          if (config.interceptors?.responseSuccess) {
            res = config.interceptors.responseSuccess(res);
          }
          resolve(res);
        })
        .catch((err) => {
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
