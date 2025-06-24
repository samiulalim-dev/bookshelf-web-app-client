import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://bookshelf-web-app-server.vercel.app/",
});

const AxiosInstance = () => {
  const { users, signOutUser } = use(AuthContext);
  useEffect(() => {
    // Clear any existing interceptors to avoid duplicates
    axiosSecure.interceptors.request.eject(
      axiosSecure.interceptors.request.handlers[0]?.id
    );
    // Add a request interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (users?.email && users?.accessToken) {
          // console.log("settings token for:", users.email);
          config.headers.authorization = `Bearer ${users.accessToken}`;
        } else {
          delete config.headers.authorization;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response.status === 403) {
          signOutUser()
            .then((result) => {
              // console.log("sign out for invalid token");
            })
            .catch((error) => {
              // console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );
    // Cleanup interceptors on component unmount or when users change
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.request.eject(responseInterceptor);
    };
  }, [users, signOutUser]);
  return axiosSecure;
};

export default AxiosInstance;
