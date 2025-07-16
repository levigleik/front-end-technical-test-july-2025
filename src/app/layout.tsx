import type { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontSans.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
