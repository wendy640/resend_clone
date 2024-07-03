"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import profile from "../images/Avatar.png";
import { ChevronsUpDown, Plus } from "lucide-react";
import DashboardIcon from "../images/dashboard.svg";
import JournalIcon from "../images/journal.svg";
import ArrowIcon from "../images/arrow.svg";
import MergeIcon from "../images/merge.svg";
import DownArrowIcon from "../images/arrow-big-down-dash.svg";
import TransactionIcon from "../images/transaction.svg";
import WalletIcon from "../images/wallet.svg";
import apexIcon from "../images/Apex.svg";
import databaseIcon from "../images/database.svg";
import star from "../images/star.svg";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComboboxDemo } from "./Combobox";
import { Badge } from "./ui/badge";

export function Sidebar() {
	const pathname = usePathname();

	const isActive = (path:string) => pathname === path;

	return (
		<div
			className="hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] min-h-screen"
			style={{ backgroundColor: "#FAFAFA" }}
		>
			<div className="border-r" style={{ borderColor: "#F4F4F5" }}>
				<div className="flex h-full max-h-screen flex-col">
					<div className="flex h-14 items-center px-2 lg:h-[60px] lg:px-6 gap-3">
						<div className="text-lg font-bold flex items-center justify-center gap-4">
							Resend
							<div className="flex relative text-muted-foreground">
								<Badge variant="outline" className="w-11">
									Pro
								</Badge>
								<Image
									src={star}
									alt="star"
									className="absolute top-[-2px] right-[-2px] w-3 h-3 "
								/>
							</div>
						</div>
					</div>

					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								href="/dashboard/emails"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/emails") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={DashboardIcon}
									alt="dashboard"
									className="h-4 w-4"
								/>
								Emails
							</Link>
							<Link
								href="/dashboard/broadcasts"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/wallet") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image src={WalletIcon} alt="wallet" className="h-4 w-4" />
								Broadcasts
							</Link>
							<Link
								href="/dashboard/audiences"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/audiences") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={TransactionIcon}
									alt="transaction"
									className="h-4 w-4"
								/>
								Audiences
							</Link>
							<Link
								href="/dashboard/metrics"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/metrics") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={TransactionIcon}
									alt="transaction"
									className="h-4 w-4"
								/>
								Metrics
							</Link>
							<Link
								href="/dashboard/domains"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/domains") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={TransactionIcon}
									alt="transaction"
									className="h-4 w-4"
								/>
								Domains
							</Link>
							<Link
								href="/dashboard/logs"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/logs") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image src={MergeIcon} alt="reversals" className="h-4 w-4" />
								Logs
							</Link>
							<Link
								href="/dashboard/api-keys"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/api-keys") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={DownArrowIcon}
									alt="wallet funding"
									className="h-4 w-4"
								/>
								Api Keys
							</Link>
							<Link
								href="/dashboard/webhooks"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/webhooks") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={ArrowIcon}
									alt="outflow transfer"
									className="h-4 w-4"
								/>
								Web Hooks
							</Link>
							<Link
								href="/dashboard/settings"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/settings") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Image
									src={JournalIcon}
									alt="journal entries"
									className="h-4 w-4"
								/>
								Settings
							</Link>
						</nav>
					</div>
					<div className="mt-auto lg:w-[224px] md:w-[224px] w-[224px] h-[70px] px-2 py-1.5 flex items-center justify-between border-t-0 border-b-0 bg-white">
						<div className="icon relative flex items-center justify-center">
							<Image src={apexIcon} alt="icon" className="w-full h-full" />
							<Image
								src={databaseIcon}
								alt="icon"
								className="absolute w-5 h-4"
							/>
						</div>
						<div className="text flex flex-col leading-[20px]">
							<p className="ledger-text lg:text-[12px] md:text-[8px] text-[px] font-bold text-[#0E121B]">
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
				</div>
			</div>
		</div>
	);
}
