import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface Interceptors<T = AxiosResponse> {
  requestSuccess?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFailure?: (err: any) => any;
  responseSuccess?: (res: T) => T;
  responseFailure?: (err: any) => any;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>;
  cancelDuplicate?: boolean; // 是否取消重复请求
  showLoading?: boolean; // 是否显示加载提示
  errorMessageShow?: boolean; // 是否显示错误信息
}
