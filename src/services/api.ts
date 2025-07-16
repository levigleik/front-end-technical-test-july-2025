import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/", // o correto aqui seria usar env
});

export default api;
