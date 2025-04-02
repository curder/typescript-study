import Request from "./request";

const axiosRequest = new Request({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

export default axiosRequest;
