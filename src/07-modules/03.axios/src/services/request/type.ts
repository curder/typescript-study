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
}
