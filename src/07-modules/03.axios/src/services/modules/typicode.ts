import axiosRequest from "@/services";

interface IPostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// 使用优化后的 get 方法
axiosRequest
  .get<IPostData[]>("/posts")
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.error("获取帖子列表失败:", err);
  });

// 添加局部拦截器
axiosRequest
  .get<IPostData>("/posts/1", null, {
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
  })
  .catch(err => {
    console.error("获取帖子详情失败:", err);
  });
