import Axios from 'axios';
import qs from 'qs';
const axios = Axios.create({
  baseURL: 'https://www.anapioficeandfire.com',
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }),
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
  post: function post<Request = any, Response = unknown>(url: string, data?: Request) {
    return axios.post<Response>(url, { data }).then(res => res.data);
  },
};
