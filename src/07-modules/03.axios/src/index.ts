import axiosRequest from "./services";
import { axiosRequest2 } from "./services";

axiosRequest
  .request({
    url: "/posts",
    method: "GET",
  })
  .then((res) => {
    console.log(res.data);
  });

axiosRequest2
  .request({
    url: "/random_joke",
    method: "GET",
  })
  .then((res) => {
    console.log(res.data);
  });
