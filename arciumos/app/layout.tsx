import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	JetBrains_Mono,
	Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMonoHeading = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-heading",
});

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-serif",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ArciumOS",
	description: "A cool OS for the web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-serif",
				robotoSlab.variable,
				jetbrainsMonoHeading.variable,
			)}
		>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
