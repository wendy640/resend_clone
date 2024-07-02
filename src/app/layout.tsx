import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import {Header} from "@/components/Header";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Wallet App",
	description: "creating a ledger wallet account",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex  items-start justify-between`}>
				<Sidebar  />
				<main className="grid w-full h-full ">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
