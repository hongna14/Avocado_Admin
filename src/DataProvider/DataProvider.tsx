import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { DataProvider, useNotify } from "react-admin";

const apiUrl = "http://localhost:3001";
export const httpClient: AxiosInstance = axios.create();

httpClient.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export const dataProvider: DataProvider = {
  getList: async (resource: string, params: any) => {
    // console.log("In get Listtttt", params);
    const counItem = await httpClient.get(`${apiUrl}/${resource}/count`);
    const { data } = await httpClient.get(`${apiUrl}/${resource}`, {
      params: {
        filter: {
          where: params.filter,
          offset: (params.pagination.page - 1) * params.pagination.perPage,
          limit: params.pagination.perPage,
        },
      },
    });

    const items = data.map((item: any, idx: number) => ({
      ...item,
      // id: idx + 1,
    }));

    return { data: items, total: counItem.data.count };
  },
  getOne: async (resource: string, params: any) => {
    console.log("in get detail");
    const data = await httpClient.get(`${apiUrl}/${resource}/${params.id}`);
    return data;
  },
  getMany: async (resource: string, params: any) => {
    console.log("In getMany");
    const data = await httpClient.get(`${apiUrl}/${resource}`, {});
    return data;
  },
  getManyReference: async (resource: string, params: any) => {
    console.log("In getManyReference", params.id);
    const { data } = await httpClient.get(`${apiUrl}/${resource}/`, {
      params: {
        filter: {
          where: {
            coffee_shop_id: params.id,
          },
          ...params.filter,
        },
      },
    });
    console.log("data", data);
    const items = data.map((item: any, idx: number) => ({
      ...item,
    }));
    const counItem = items.length;

    return { data: items, total: counItem };
  },
  create: async (resource: string, { data }) => {
    console.log("In create", data);
    const res = await httpClient.post(`${apiUrl}/${resource}`, data);
    console.log("res", res);
    if (res && res.data) {
      return { data: { ...res.data } };
    }
    return res;
  },
  update: async (resource: string, params: any) => {
    console.log("result", params.data);
    const res = await httpClient.put(
      `${apiUrl}/${resource}/${params.id}`,
      params.data
    );
    console.log("res", res);
    return res;
  },
  updateMany: async (resource: string, params: any) => {
    const data = await httpClient.get(`${apiUrl}/${resource}/${params}`);
    return data;
  },
  delete: async (resource: string, params: any) => {
    console.log("In delete", params.id);

    const data = await httpClient.delete(`${apiUrl}/${resource}/${params.id}`);
    return data;
  },
  deleteMany: async (resource: string, params: any) => {
    console.log("In delete many", params.ids);

    const data = await httpClient.delete(
      `${apiUrl}/${resource}/ids/${params.ids}`,
      {}
    );
    return data;
  },
};
