import { axiosRequest2 } from "@/services";

interface IRandomJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

// 使用优化后的 get 方法
axiosRequest2
  .get<IRandomJoke>("/random_joke")
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.error("获取笑话失败:", err);
  });
