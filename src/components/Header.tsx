"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { ComboboxDemo } from "./Combobox";
import profile from "../images/Avatar.png";
import { ChevronsUpDown } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
} from "lucide-react";
import Image from "next/image";
import DashboardIcon from "../images/dashboard.svg";
import JournalIcon from "../images/journal.svg";
import ArrowIcon from "../images/arrow.svg";
import MergeIcon from "../images/merge.svg";
import DownArrowIcon from "../images/arrow-big-down-dash.svg";
import TransactionIcon from "../images/transaction.svg";
import WalletIcon from "../images/wallet.svg";
import {
	HamburgerSheet,
	HamburgerSheetContent,
	HamburgerSheetTrigger,
} from "@/components/MobileHambuger";
import apexIcon from "../images/Apex.svg";
import databaseIcon from "../images/database.svg";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Header = () => {
  const pathname = usePathname();
	// Define a mapping between paths and header texts
	const pathToHeaderText: { [key: string]: string } = {
		"/": "Dashboard",
		"/dashboard/wallet": "Wallet",
		"/dashboard/transactions": "Transactions",
		"/dashboard/virtual-inflows": "Virtual Inflows",
		"/dashboard/reversals": "Reversals",
		"/dashboard/wallet-funding": "Wallet Funding",
		"/dashboard/outflow-transfer": "Outflow Transfer",
		"/dashboard/journal-entries": "Journal Entries",
	};

	// Initialize state with the current pathname
	const initialHeaderText = pathToHeaderText[pathname] || "Dashboard";
	const [headerText, setHeaderText] = useState(initialHeaderText);

	useEffect(() => {
		// Update the header text based on the current path
		setHeaderText(pathToHeaderText[pathname] || "Dashboard");
	}, [pathname]);

	return (
		<div className="flex-1 flex flex-col">
			<header className="flex w-full h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">
				<HamburgerSheet>
					<HamburgerSheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="shrink-0 md:hidden"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</HamburgerSheetTrigger>
					<HamburgerSheetContent
						side="left"
						className="flex flex-col "
						style={{ backgroundColor: "#FAFAFA" }}
					>
						<nav className="grid gap-2  text-sm font-medium lg:px-4">
							<div className="avatar rounded-full flex items-center justify-around my-5 gap-8">
								<div className="flex items-center gap-2">
									<Image src={profile} alt="user-pics" width={25} height={25} />
									<p className="lg:text-[14px] md:text-[10px] text-muted-foreground text-sm font-medium">
										Henry Nnalue
									</p>
								</div>
								<div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<ChevronsUpDown className="h-4 w-3 shrink-0" />
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>My Account</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Settings</DropdownMenuItem>
											<DropdownMenuItem>Support</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Logout</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
							<Link
								href="/"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image
									src={DashboardIcon}
									alt="dashboard"
									className="h-4 w-4"
								/>
								Dashboard
							</Link>
							<Link
								href="/dashboard/wallet"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
							>
								<Image src={WalletIcon} alt="wallet" className="h-4 w-4" />
								Wallets
								{/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
									6
								</Badge> */}
							</Link>
							<Link
								href="/dashboard/transactions"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image
									src={TransactionIcon}
									alt="transaction"
									className="h-4 w-4"
								/>
								P2P Transactions
							</Link>
							<Link
								href="/dashboard/reversals"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image src={MergeIcon} alt="reversals" className="h-4 w-4" />
								Reversals
							</Link>
							<Link
								href="/dashboard/wallet-funding"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image
									src={DownArrowIcon}
									alt="wallet funding"
									className="h-4 w-4"
								/>
								Wallet funding
							</Link>
							<Link
								href="/dashboard/outflow-transfer"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image
									src={ArrowIcon}
									alt="outflow transfer"
									className="h-4 w-4"
								/>
								Outflow transfers
							</Link>
							<Link
								href="/dashboard/journal-entries"
								className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<Image
									src={JournalIcon}
									alt="journal icon"
									className="h-4 w-4"
								/>
								Journal entries
							</Link>
						</nav>
						<div className="mt-auto lg:w-[220.8px] md:w-[180px] w-[150px] h-[70px] px-2 py-1.5 flex items-center justify-between ">
							<div className="icon relative flex items-center justify-center">
								<Image src={apexIcon} alt="icon" className="w-full h-full" />
								<Image
									src={databaseIcon}
									alt="icon"
									className="absolute w-5 h-4"
								/>
							</div>
							<div className="text flex flex-col leading-[20px]">
								<p className="ledger-text lg:text-[12px] md:text-[8px] text-[6px] font-bold text-[#0E121B]">
									Ledger
								</p>
								<p className="admin-text lg:text-[12px] md:text-[8px] text-[6px] text-[#525866]">
									Admin Dashboard
								</p>
							</div>
							<div className="combo">
								<ComboboxDemo />
							</div>
						</div>
					</HamburgerSheetContent>
				</HamburgerSheet>
				<div className="flex gap-4 p-3 justify-between items-center  text-[14px]  ">
					<div className="w-full text-center lg:text-left">{headerText}</div>
				</div>
			</header>
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				{/* <div className="flex items-center">
					<h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
				</div> */}
				{/* Page content */}
			</main>
		</div>
	);
};
