import type { PropsWithChildren } from "react";
import ReactQueryProvider from "./react-query";

export default function Providers({ children }: PropsWithChildren) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
