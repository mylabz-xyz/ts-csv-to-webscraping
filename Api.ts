import Axios, { AxiosRequestConfig } from "axios";

export const get = (url: string, config?: AxiosRequestConfig<any>) =>
  Axios.get(url, config);
