import axiosRequest from "./services";

axiosRequest
  .request({
    url: "/posts",
    method: "GET",
  })
  .then((res) => {
    console.log(res.data);
  });
