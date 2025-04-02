import axiosRequest from "./services";
import { axiosRequest2 } from "./services";

// axiosRequest
//   .request({
//     url: "/posts",
//     method: "GET",
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// 添加局部拦截器
axiosRequest
  .request({
    url: "/posts/1/comments",
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

// axiosRequest2
//   .request({
//     url: "/random_joke",
//     method: "GET",
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
