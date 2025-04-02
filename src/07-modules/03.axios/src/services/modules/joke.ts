import { axiosRequest2 } from "@/services";

interface IRandomJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

axiosRequest2.get<IRandomJoke>("/random_joke").then((res) => {
  console.log(res);
});
