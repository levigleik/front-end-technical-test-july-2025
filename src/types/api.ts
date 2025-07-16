export interface GetData {
	url: string;
}

export interface PostData<TForm> {
	url: string;
	data: TForm;
}
