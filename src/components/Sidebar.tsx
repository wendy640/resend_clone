"use client"
import React, { useState } from "react";
import Link from "next/link";
import { TbUsersGroup } from "react-icons/tb";
import {
	GalleryVertical,
	Globe,
	HardDrive,
	Inbox,
	LockKeyhole,
	Mail,
	Moon,
	Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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

	const iconVariants = {
		hover: { scale: 1.2, rotate: 15 },
		tap: { scale: 0.9, rotate: -15 },
	};

	return (
		<div className=" hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] min-h-screen bg-bg-subtle dark:bg-slate-950">
			{/* <div className="dark:bg-root hidden h-screen w-[250px] flex-shrink-0 flex-col justify-between border-r border-slate-4 bg-slate-1 px-4 pb-6 dark:border-slate-6 md:flex"> */}
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
									className="absolute top-[-2px] right-[-2px] w-3 h-3"
								/>
							</div>
						</div>
					</div>

					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								href="/emails"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80  transition-all hover:text-primary ${
									isActive("/emails") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<Mail className="h-4 w-4" />
								</motion.div>
								Emails
							</Link>
							<Link
								href="/dashboard/broadcasts"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/wallet") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<Inbox className="h-4 w-4" />
								</motion.div>
								Broadcasts
							</Link>
							<Link
								href="/dashboard/audiences"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/audiences") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<TbUsersGroup className="h-4 w-4" />
								</motion.div>
								Audiences
							</Link>
							<Link
								href="/dashboard/metrics"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/metrics") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<RiBarChart2Line className="h-4 w-4" />
								</motion.div>
								Metrics
							</Link>
							<Link
								href="/dashboard/domains"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/domains") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<Globe className="h-4 w-4" />
								</motion.div>
								Domains
							</Link>
							<Link
								href="/dashboard/logs"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/logs") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<GalleryVertical className="h-4 w-4" />
								</motion.div>
								Logs
							</Link>
							<Link
								href="/dashboard/api-keys"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/api-keys") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<LockKeyhole className="h-4 w-4" />
								</motion.div>
								Api Keys
							</Link>
							<Link
								href="/dashboard/webhooks"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/webhooks") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<HiMiniArrowsUpDown className="h-4 w-4" />
								</motion.div>
								Web Hooks
							</Link>
							<Link
								href="/dashboard/settings"
								className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[#70757E] opacity-80 transition-all hover:text-primary ${
									isActive("/dashboard/settings") ? " bg-[#F4F4F5]" : ""
								}`}
							>
								<motion.div
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<VscSettings className="h-4 w-4" />
								</motion.div>
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
