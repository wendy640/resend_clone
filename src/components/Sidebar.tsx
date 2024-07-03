"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TbUsersGroup } from "react-icons/tb";
import { GalleryVertical, Globe, HardDrive, LockKeyhole, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { usePathname } from "next/navigation";
import profile from "../images/Avatar.png";
import {
	ChevronsUpDown,
	CircleUser,
	Ellipsis,
	House,
	Link2,
	ListChecks,
	LogOut,
	Plus,
	SunMoon,
} from "lucide-react";
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
import { RiBarChart2Line } from "react-icons/ri";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { VscSettings } from "react-icons/vsc";

export function Sidebar() {
	const [loginEmail, setLoginEmail] = useState("chinwe640@gmail.com");
	const pathname = usePathname();
  const getInitial = (email: string) => email.charAt(0).toUpperCase();
	const isActive = (path: string) => pathname === path;
	const truncateEmail = (email: string) => {
		return email.length > 12 ? email.substring(0, 12) + "..." : email;
	};
const { setTheme, theme } = useTheme();
	return (
		<div className="hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] min-h-screen bg-bg-subtle dark:bg-slate-950">
			<div className="border-r border-gray-100-custom dark:border-gray-700">
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
								<Mail className="h-4 w-4" />
								Emails
							</Link>
							<Link
								href="/dashboard/broadcasts"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/wallet") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<HardDrive className="h-4 w-4" />
								Broadcasts
							</Link>
							<Link
								href="/dashboard/audiences"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/audiences") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<TbUsersGroup className="h-4 w-4" />
								Audiences
							</Link>
							<Link
								href="/dashboard/metrics"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/metrics") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<RiBarChart2Line className="h-4 w-4" />
								Metrics
							</Link>
							<Link
								href="/dashboard/domains"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/domains") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<Globe className="h-4 w-4" />
								Domains
							</Link>
							<Link
								href="/dashboard/logs"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/logs") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<GalleryVertical className="h-4 w-4" />
								Logs
							</Link>
							<Link
								href="/dashboard/api-keys"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/api-keys") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<LockKeyhole className="h-4 w-4" />
								Api Keys
							</Link>
							<Link
								href="/dashboard/webhooks"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/webhooks") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<HiMiniArrowsUpDown className="h-4 w-4" />
								Web Hooks
							</Link>
							<Link
								href="/dashboard/settings"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary ${
									isActive("/dashboard/settings") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<VscSettings className="h-4 w-4" />
								Settings
							</Link>
						</nav>
					</div>
					<div className="mt-auto lg:w-[224px] md:w-[224px] w-[224px] h-[70px] px-2 py-1.5 flex items-center justify-between">
						<div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6 gap-3">
							<div className="avatar flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 h-7 w-7 relative shadow-light-top-right dark:shadow-dark-top-right">
								<p className="text-[12px]">{getInitial(loginEmail)}</p>
							</div>
							<p className="lg:text-[13px] md:text-[13px] font-medium text-sm text-gray-600 dark:text-gray-200">
								{truncateEmail(loginEmail)}
							</p>
							<div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Ellipsis className="text-gray-500 w-4 h-4" />
									</DropdownMenuTrigger>

									<DropdownMenuContent align="end">
										<DropdownMenuItem
											onClick={() =>
												setTheme(theme === "light" ? "dark" : "light")
											}
										>
											<div className="flex gap-2">
												{theme === "light" ? <Moon /> : <Sun />}
												<div>Toggle Theme</div>
											</div>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<div className="flex gap-2">
												<ListChecks />
												<div>Onboarding</div>
											</div>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<div className="flex gap-2">
												<Link2 />
												<div>Home page</div>
											</div>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<div className="flex gap-2">
												<CircleUser />
												<div>Profile</div>
											</div>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<div className="flex gap-2">
												<LogOut />
												<div>Logout</div>
											</div>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
