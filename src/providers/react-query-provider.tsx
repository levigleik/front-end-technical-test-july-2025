"use client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { type PropsWithChildren, useEffect, useState } from "react";
import { queryClientConfig } from "@/lib/constants";

let persister: any;

export default function ReactQueryProvider({ children }: PropsWithChildren) {
	const [isClient, setIsClient] = useState(false);
	const [queryClient, setQueryClient] = useState<QueryClient>();

	useEffect(() => {
		setIsClient(typeof window !== "undefined");
	}, []);

	useEffect(() => {
		if (isClient) {
			persister = createAsyncStoragePersister({
				storage: window.localStorage,
			});
			setQueryClient(new QueryClient(queryClientConfig));
		}
	}, [isClient]);

	if (!isClient) {
		return null;
	}
	if (!queryClient) {
		return null;
	}
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister }}
		>
			{children}
		</PersistQueryClientProvider>
	);
}
