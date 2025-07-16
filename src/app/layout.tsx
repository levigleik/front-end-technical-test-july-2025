import type { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Navbar from "@/components/navbar";
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
		<html lang="pt">
			<body className={`${fontSans.variable} antialiased`}>
				<Providers>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main className="container mx-auto p-4">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
