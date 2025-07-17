import type { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 24 * 60 * 60 * 1000,
			gcTime: 24 * 60 * 60 * 1000,
		},
	},
} as QueryClientConfig;
