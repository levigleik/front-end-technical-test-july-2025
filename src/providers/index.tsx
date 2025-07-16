import type { PropsWithChildren } from "react";
import ReactQueryProvider from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: PropsWithChildren) {
	return (
		<ReactQueryProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</ReactQueryProvider>
	);
}
