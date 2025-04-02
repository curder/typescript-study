import { typicodeBaseUrl, jokeBaseUrl, timeout } from "./config";
import Request from "@/services/request";

const axiosRequest = new Request({
  baseURL: typicodeBaseUrl,
  timeout: timeout,
});

export const axiosRequest2 = new Request({
  baseURL: jokeBaseUrl,
  timeout: timeout,
  interceptors: {
    requestSuccess(config) {
      // 在这里可以添加一些请求前的处理逻辑，比如添加请求头、修改请求参数等
      console.log("局部 Joke api 请求拦截器");
      return config;
    },
    requestFailure(error) {
      // 在这里可以处理请求错误
      console.log("局部 Joke api 请求拦截器错误");
      return error;
    },
    responseSuccess(response) {
      // 在这里可以处理响应数据
      console.log("局部 Joke api 响应拦截器");
      return response;
    },
    responseFailure(error) {
      // 在这里可以处理响应错误
      console.log("局部 Joke api 响应拦截器错误");
      return error;
    },
  },
});

export default axiosRequest;
