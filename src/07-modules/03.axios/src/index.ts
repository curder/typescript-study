import axiosRequest from "./services";
import { axiosRequest2 } from "./services";

interface IPostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface IRandomJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

axiosRequest
  .request<IPostData[]>({
    url: "/posts",
    method: "GET",
  })
  .then((res) => {
    console.log(res);
  });

// 添加局部拦截器
axiosRequest
  .request<IPostData>({
    url: "/posts/1",
    method: "GET",
    interceptors: {
      requestSuccess(config) {
        console.log("Posts Comments 局部请求拦截器");
        return config;
      },
      responseSuccess(response) {
        console.log("Posts Comments 局部响应拦截器");
        return response;
      },
    },
  })
  .then((res) => {
    console.log(res);
  });

axiosRequest2
  .request<IRandomJoke>({
    url: "/random_joke",
    method: "GET",
  })
  .then((res) => {
    console.log(res);
  });
