import { axiosRequest2 } from "..";

interface IRandomJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

axiosRequest2
  .request<IRandomJoke>({
    url: "/random_joke",
    method: "GET",
  })
  .then((res) => {
    console.log(res);
  });
