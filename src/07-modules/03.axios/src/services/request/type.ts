import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface Interceptors {
  requestSuccess?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFailure?: (err: any) => any;
  responseSuccess?: (res: AxiosResponse) => AxiosResponse;
  responseFailure?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors;
}
