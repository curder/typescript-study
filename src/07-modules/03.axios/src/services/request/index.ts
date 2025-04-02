import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  CancelTokenSource,
} from "axios";
import type { RequestConfig } from "@/services/request/type";

class Request {
  instance: AxiosInstance;
  cancelTokenSources: Map<string, CancelTokenSource> = new Map();
  // 添加实例级别配置
  instanceConfig: RequestConfig;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    // 保存实例级别配置
    this.instanceConfig = config;

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (requestConfig) => {
        // 在这里可以添加一些请求前的处理逻辑，比如添加请求头、修改请求参数等
        console.log("全局请求拦截器");

        // 开发环境下打印请求信息
        if (process.env.NODE_ENV === "development") {
          console.log(
            `%c 请求: ${config.baseURL}${requestConfig.url}`,
            "color: #2196F3",
            config
          );
        }

        // 处理 showLoading 配置
        if (config.showLoading) {
          // 这里可以添加显示加载提示的逻辑
          console.info("显示加载提示");
          // 实际项目中可以调用UI库的loading方法
          // 例如: ElLoading.service() 或 Toast.loading()
        }

        // 添加认证信息
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        return requestConfig;
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

        // 如果请求配置中有 showLoading，则在响应后隐藏加载提示
        if (config.showLoading) {
          // 这里可以添加隐藏加载提示的逻辑
          console.log("隐藏加载提示");
          // 实际项目中可以关闭UI库的loading
          // 例如: loadingInstance.close()
        }

        // 添加认证信息
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        // 开发环境下打印响应信息
        if (process.env.NODE_ENV === "development") {
          console.log(
            `%c 响应: ${response.config.url}`,
            "color: #4CAF50",
            response.data
          );
        }
        
        return response.data;
      },
      (error) => {
        // 在这里可以处理响应错误
        console.log("全局响应拦截器错误");

        // 如果请求配置中有 showLoading，则在响应错误后隐藏加载提示
        if (error.config?.showLoading) {
          console.log("隐藏加载提示");
          // 实际项目中可以关闭UI库的loading
        }

        // 处理 errorMessageShow 配置
        if (error.config?.errorMessageShow !== false) {
          // 默认显示错误信息，除非明确设置为false
          const errorMsg =
            error.response?.data?.message || error.message || "请求失败";
          console.log("显示错误信息:", errorMsg);
          // 实际项目中可以调用UI库的错误提示
          // 例如: ElMessage.error(errorMsg) 或 Toast.fail(errorMsg)
        }

        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          switch (error.response.status) {
            case 401:
              console.log("未授权，请重新登录");
              // 可以在这里处理登录过期逻辑
              break;
            case 403:
              console.log("拒绝访问");
              break;
            case 404:
              console.log("请求错误，未找到该资源");
              break;
            case 500:
              console.log("服务器错误");
              break;
            default:
              console.log(`连接错误 ${error.response.status}`);
          }
        } else if (error.request) {
          // 请求已发出，但没有收到响应
          console.log("网络错误，请稍后重试");
        } else {
          // 请求配置有误
          console.log("请求配置错误", error.message);
        }

        // 开发环境下打印错误信息
        if (process.env.NODE_ENV === "development") {
          console.log(
            `%c 请求错误: ${error.config?.url || '未知'}`,
            "color: #F44336",
            error
          );
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
    // 合并实例配置和请求配置
    const mergedConfig = {
      ...config,
      // 如果请求配置中明确设置了cancelDuplicate，则使用请求配置
      // 否则使用实例配置
      cancelDuplicate:
        config.cancelDuplicate !== undefined
          ? config.cancelDuplicate
          : this.instanceConfig.cancelDuplicate,
      showLoading:
        config.showLoading !== undefined
          ? config.showLoading
          : this.instanceConfig.showLoading,
      errorMessageShow:
        config.errorMessageShow !== undefined
          ? config.errorMessageShow
          : this.instanceConfig.errorMessageShow,
    };

    // 单独请求的拦截器
    if (mergedConfig.interceptors?.requestSuccess) {
      config = mergedConfig.interceptors.requestSuccess(
        config as InternalAxiosRequestConfig
      );
    }

    // 处理取消重复请求
    let requestKey = "";
    let source: CancelTokenSource | undefined;

    if (mergedConfig.cancelDuplicate) {
      requestKey = `${config.method || "GET"}_${config.url}`;

      // 如果已经有相同的请求正在进行，则取消之前的请求
      if (this.cancelTokenSources.has(requestKey)) {
        const existingSource = this.cancelTokenSources.get(requestKey);
        existingSource?.cancel("取消重复请求");
        this.cancelTokenSources.delete(requestKey);
      }

      // 创建新的取消令牌
      source = axios.CancelToken.source();
      config.cancelToken = source.token;
      this.cancelTokenSources.set(requestKey, source);
    }

    // 单独请求的拦截器
    if (config.interceptors?.requestSuccess) {
      config = config.interceptors.requestSuccess(
        config as InternalAxiosRequestConfig
      );
    }

    if (config.showLoading) {
      // 这里可以添加显示加载提示的逻辑
      console.info("显示加载提示");
      // 实际项目中可以调用UI库的loading方法
      // 例如: ElLoading.service() 或 Toast.loading()
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 请求完成后，从映射中删除
          if (mergedConfig.cancelDuplicate && requestKey) {
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
          if (mergedConfig.cancelDuplicate && requestKey) {
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
