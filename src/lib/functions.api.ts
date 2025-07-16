import api from "@/services/api";
import type { GetData, PostData } from "@/types/api";

export const getData = async <TReturn>(val: GetData) => {
	const { url } = val;
	const { data } = await api.get<TReturn>(url);
	return data;
};

export const postData = async <TForm, TReturn>(val: PostData<TForm>) => {
	const { url, data: dataForm } = val;
	const { data } = await api.post<TReturn>(url, dataForm);
	return data;
};
