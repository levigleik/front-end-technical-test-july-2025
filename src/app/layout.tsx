import type { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";
import 'lenis/dist/lenis.css'
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Lenis from 'lenis'

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
		<body className={`${fontSans.variable} antialiased lenis lenis-smooth`}>
			<Providers>
				<div className="min-h-screen my-auto flex flex-col">
					<Navbar />
					<main className="container mx-auto px-4 lg:p-0 flex-1">{children}</main>
					<Footer />
				</div>
				<Toaster richColors position="top-center" />
			</Providers>
		</body>
	</html>
);
}
