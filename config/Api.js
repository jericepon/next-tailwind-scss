import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("file: Api.js ~ line 14 ~ error", error);
    return Promise.reject(error);
  }
);

export default Api;
