import api from "@/services/api";
import type { GetData } from "@/types/api";

export const getData = async <TReturn>(val: GetData) => {
	const { url } = val;
	const { data } = await api.get<TReturn>(url);
	return data;
};
