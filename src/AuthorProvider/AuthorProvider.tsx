import axios from "axios";
import { AuthProvider, Logout } from "react-admin";
import * as httpClient from "../DataProvider/DataProvider";

export const authorProvider: AuthProvider = {
  login: async (data: any) => {
    console.log("IN LOGIN", data);
    try {
      const res = await axios.post("http://localhost:3001/userstest/login", {
        email: data.email,
        password: data.password,
      });
      const token: string = res.data[0].token;
      const role: any = res.data[1].user.role;
      const id: any = res.data[1].user.user_id;
      const email = res.data[1].user.email;
      console.log("Login data", email);
      console.log("Login id", id);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);
      localStorage.setItem("id", id);
    } catch (e) {
      console.log("error=>", e);
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    return Promise.resolve();
  },
  checkAuth: () => {
    console.log("In check Auth");
    // return Promise.resolve();
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => {
    console.log("in errr", error);
    return Promise.resolve();
  },
  getPermissions: (params) => {
    console.log("in getPermissions");
    const role = localStorage.getItem("role");
    console.log("role in permission");
    return role ? Promise.resolve(role) : Promise.reject();
  },
  getIdentity: async () => {
    const id = localStorage.getItem("id");
    const response: any = await axios.get(
      `http://localhost:3001/userTest/${id}`
    );

    return {
      id: response.data.user_id,
      fullName: response.data.email,
    };
  },
};
