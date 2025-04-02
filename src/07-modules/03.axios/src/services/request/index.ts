import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface Interceptors {
  requestSuccess?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFailure?: (err: any) => any;
  responseSuccess?: (res: AxiosResponse) => AxiosResponse;
  responseFailure?: (err: any) => any;
}

interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors;
}

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
        return response;
      },
      (error) => {
        // 在这里可以处理响应错误
        console.log("全局响应拦截器错误");
        return error;
      }
    );

    // 添加局部拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccess,
        config.interceptors.requestFailure
      );
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccess,
        config.interceptors.responseFailure
      );
    }
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
