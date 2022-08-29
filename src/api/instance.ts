import axios from "axios";

export const _instance = axios.create({
   baseURL: process.env.REACT_APP_LOCALHOST || process.env.REACT_APP_BACK_URL,
   withCredentials: true
}) 