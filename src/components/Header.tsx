"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ComboboxDemo } from "./Combobox";
import profile from "../../public/images/Avatar.png";
import { ChevronsUpDown, Menu } from "lucide-react";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import DashboardIcon from "../../public/images/dashboard.svg";
import JournalIcon from "../../public/images/journal.svg";
import ArrowIcon from "../../public/images/arrow.svg";
import MergeIcon from "../../public/images/merge.svg";
import DownArrowIcon from "../../public/images/arrow-big-down-dash.svg";
import TransactionIcon from "../../public/images/transaction.svg";
import WalletIcon from "../../public/images/wallet.svg";
import {
	HamburgerSheet,
	HamburgerSheetContent,
	HamburgerSheetTrigger,
} from "@/components/MobileHambuger";
import apexIcon from "../../public/images/Apex.svg";
import databaseIcon from "../../public/images/database.svg";
import { GoArrowUpRight } from "react-icons/go";
import { Feedback } from "./Feedback";

export const Header = () => {
	const pathname = usePathname();
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

	const initialHeaderText = pathToHeaderText[pathname] || "Dashboard";
	const [headerText, setHeaderText] = useState(initialHeaderText);

	useEffect(() => {
		setHeaderText(pathToHeaderText[pathname] || "Dashboard");
	}, [pathname]);

	return (
		<div className="flex h-[60px] items-center justify-end border-b border-zinc-200 w-full ">
			<header className="">
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
						className="flex flex-col"
						style={{ backgroundColor: "#FAFAFA" }}
					>
						<nav className="grid gap-2 text-sm font-medium lg:px-4">
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
				<div className="header-content  flex justify-end gap-3 tracking-wide  items-center text-[14px] font-light mr-6">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="inline-block">
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className="border border-gray-300 font-light bg-gray-50 h-8 dark:bg-gray-700"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="flex pr-1"
													viewBox="0 0 500 500"
													width="800"
													height="800"
													preserveAspectRatio="xMidYMid meet"
													style={{
														width: "120%",
														height: "120%",
														transform: "translate3d(0px, 0px, 0px)",
														contentVisibility: "visible",
													}}
												>
													<defs>
														<clipPath id="__lottie_element_251">
															<rect width="500" height="500" x="0" y="0"></rect>
														</clipPath>
														<clipPath id="__lottie_element_254">
															<path d="M0,0 L500,0 L500,500 L0,500z"></path>
														</clipPath>
													</defs>
													<g clip-path="url(#__lottie_element_251)">
														<g
															clip-path="url(#__lottie_element_254)"
															transform="matrix(1,0,0,1,0,0)"
															opacity="1"
															style={{ display: "block" }}
														>
															<g
																className="primary design"
																transform="matrix(20.829999923706055,0,0,20.829999923706055,-4957.498046875,-4957.498046875)"
																opacity="1"
																style={{ display: "block" }}
															>
																<g
																	opacity="1"
																	transform="matrix(1,0,0,1,250,250)"
																>
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M3.25,-8 C3.25,-8 -3.25,-8 -3.25,-8 C-6.96999979019165,-8 -10,-4.96999979019165 -10,-1.25 C-10,-1.25 -10,7.25 -10,7.25 C-10,7.659999847412109 -9.65999984741211,8 -9.25,8 C-9.25,8 3.25,8 3.25,8 C6.96999979019165,8 10,4.96999979019165 10,1.25 C10,1.25 10,-1.25 10,-1.25 C10,-4.96999979019165 6.96999979019165,-8 3.25,-8z M8.5,1.25 C8.5,4.139999866485596 6.139999866485596,6.5 3.25,6.5 C3.25,6.5 -8.5,6.5 -8.5,6.5 C-8.5,6.5 -8.5,-1.25 -8.5,-1.25 C-8.5,-4.150000095367432 -6.139999866485596,-6.5 -3.25,-6.5 C-3.25,-6.5 3.25,-6.5 3.25,-6.5 C6.139999866485596,-6.5 8.5,-4.150000095367432 8.5,-1.25 C8.5,-1.25 8.5,1.25 8.5,1.25z"
																	></path>
																</g>
																<g
																	opacity="1"
																	transform="matrix(1,0,0,1,246,250.00599670410156)"
																>
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M0.9200000166893005,-0.38600000739097595 C0.8999999761581421,-0.44600000977516174 0.8700000047683716,-0.5059999823570251 0.8299999833106995,-0.5659999847412109 C0.7900000214576721,-0.6159999966621399 0.75,-0.6660000085830688 0.7099999785423279,-0.7160000205039978 C0.3400000035762787,-1.0859999656677246 -0.3400000035762787,-1.0859999656677246 -0.7099999785423279,-0.7160000205039978 C-0.8899999856948853,-0.5260000228881836 -1,-0.2759999930858612 -1,-0.006000000052154064 C-1,0.2540000081062317 -0.8899999856948853,0.5139999985694885 -0.7099999785423279,0.7039999961853027 C-0.5199999809265137,0.8840000033378601 -0.25999999046325684,0.9940000176429749 0,0.9940000176429749 C0.25999999046325684,0.9940000176429749 0.5199999809265137,0.8840000033378601 0.7099999785423279,0.7039999961853027 C0.75,0.6539999842643738 0.7900000214576721,0.6039999723434448 0.8299999833106995,0.5440000295639038 C0.8700000047683716,0.49399998784065247 0.8999999761581421,0.4339999854564667 0.9200000166893005,0.37400001287460327 C0.949999988079071,0.3140000104904175 0.9700000286102295,0.2540000081062317 0.9800000190734863,0.1940000057220459 C0.9900000095367432,0.12399999797344208 1,0.05400000140070915 1,-0.006000000052154064 C1,-0.06599999964237213 0.9900000095367432,-0.13600000739097595 0.9800000190734863,-0.20600000023841858 C0.9700000286102295,-0.26600000262260437 0.949999988079071,-0.32600000500679016 0.9200000166893005,-0.38600000739097595z"
																	></path>
																</g>
																<g
																	opacity="1"
																	transform="matrix(1,0,0,1,250,250)"
																>
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M0.7099999785423279,-0.7099999785423279 C0.6600000262260437,-0.75 0.6100000143051147,-0.800000011920929 0.550000011920929,-0.8299999833106995 C0.5,-0.8700000047683716 0.4399999976158142,-0.8999999761581421 0.3799999952316284,-0.9200000166893005 C0.3199999928474426,-0.949999988079071 0.25999999046325684,-0.9700000286102295 0.1899999976158142,-0.9800000190734863 C0,-1.0199999809265137 -0.20000000298023224,-1 -0.3799999952316284,-0.9200000166893005 C-0.5099999904632568,-0.8700000047683716 -0.6100000143051147,-0.800000011920929 -0.7099999785423279,-0.7099999785423279 C-0.800000011920929,-0.6100000143051147 -0.8700000047683716,-0.5099999904632568 -0.9200000166893005,-0.3799999952316284 C-0.9700000286102295,-0.25999999046325684 -1,-0.12999999523162842 -1,0 C-1,0.25999999046325684 -0.8899999856948853,0.5199999809265137 -0.7099999785423279,0.7099999785423279 C-0.6100000143051147,0.800000011920929 -0.5099999904632568,0.8700000047683716 -0.3799999952316284,0.9200000166893005 C-0.25999999046325684,0.9700000286102295 -0.12999999523162842,1 0,1 C0.05999999865889549,1 0.12999999523162842,0.9900000095367432 0.1899999976158142,0.9800000190734863 C0.25999999046325684,0.9700000286102295 0.3199999928474426,0.949999988079071 0.3799999952316284,0.9200000166893005 C0.4399999976158142,0.8999999761581421 0.5,0.8700000047683716 0.550000011920929,0.8299999833106995 C0.6100000143051147,0.800000011920929 0.6600000262260437,0.75 0.7099999785423279,0.7099999785423279 C0.8899999856948853,0.5199999809265137 1,0.25999999046325684 1,0 C1,-0.12999999523162842 0.9700000286102295,-0.25999999046325684 0.9200000166893005,-0.3799999952316284 C0.8700000047683716,-0.5099999904632568 0.800000011920929,-0.6100000143051147 0.7099999785423279,-0.7099999785423279z"
																	></path>
																</g>
																<g
																	opacity="1"
																	transform="matrix(1,0,0,1,254,250.00100708007812)"
																>
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M-0.1899999976158142,-0.9810000061988831 C-0.25999999046325684,-0.9710000157356262 -0.3199999928474426,-0.9509999752044678 -0.3799999952316284,-0.9210000038146973 C-0.4399999976158142,-0.9010000228881836 -0.5,-0.8709999918937683 -0.5600000023841858,-0.8309999704360962 C-0.6100000143051147,-0.7910000085830688 -0.6600000262260437,-0.7509999871253967 -0.7099999785423279,-0.7110000252723694 C-0.800000011920929,-0.6110000014305115 -0.8700000047683716,-0.5009999871253967 -0.9200000166893005,-0.38100001215934753 C-0.9700000286102295,-0.26100000739097595 -1,-0.13099999725818634 -1,-0.0010000000474974513 C-1,0.26899999380111694 -0.8899999856948853,0.5189999938011169 -0.7099999785423279,0.7089999914169312 C-0.6600000262260437,0.7490000128746033 -0.6100000143051147,0.7889999747276306 -0.5600000023841858,0.8289999961853027 C-0.5,0.8690000176429749 -0.4399999976158142,0.8989999890327454 -0.3799999952316284,0.9190000295639038 C-0.3199999928474426,0.9490000009536743 -0.25999999046325684,0.968999981880188 -0.1899999976158142,0.9789999723434448 C-0.12999999523162842,0.9890000224113464 -0.05999999865889549,0.9990000128746033 0,0.9990000128746033 C0.25999999046325684,0.9990000128746033 0.5199999809265137,0.8889999985694885 0.7099999785423279,0.7089999914169312 C0.75,0.6589999794960022 0.7900000214576721,0.609000027179718 0.8299999833106995,0.5590000152587891 C0.8700000047683716,0.49900001287460327 0.8999999761581421,0.4390000104904175 0.9200000166893005,0.3790000081062317 C0.949999988079071,0.3190000057220459 0.9700000286102295,0.2590000033378601 0.9800000190734863,0.19900000095367432 C0.9900000095367432,0.1289999932050705 1,0.05900000035762787 1,-0.0010000000474974513 C1,-0.26100000739097595 0.8899999856948853,-0.5210000276565552 0.7099999785423279,-0.7110000252723694 C0.4699999988079071,-0.9409999847412109 0.12999999523162842,-1.0410000085830688 -0.1899999976158142,-0.9810000061988831z"
																	></path>
																</g>
															</g>
															<g
																className="primary design"
																style={{ display: "none" }}
															>
																<g>
																	<path className="primary"></path>
																</g>
																<g>
																	<path className="primary"></path>
																</g>
																<g>
																	<path className="primary"></path>
																</g>
																<g>
																	<path className="primary"></path>
																</g>
															</g>
															<g
																className="primary design"
																transform="matrix(0.9999985694885254,0.0016761119477450848,-0.0016761119477450848,0.9999985694885254,250.2498779296875,250.32322692871094)"
																opacity="1"
																style={{ display: "none" }}
															>
																<g opacity="1" transform="matrix(1,0,0,1,0,0)">
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		fill-opacity="0"
																		className="primary"
																		stroke="rgb(157,159,167)"
																		stroke-opacity="1"
																		stroke-width="31.3"
																		d=" M67.70899963378906,-151.0399932861328 C67.70899963378906,-151.0399932861328 -67.70899963378906,-151.0399932861328 -67.70899963378906,-151.0399932861328 C-136.7429962158203,-151.0399932861328 -192.70899963378906,-95.07499694824219 -192.70899963378906,-26.038999557495117 C-192.70899963378906,-26.038999557495117 -192.70899963378906,151.0399932861328 -192.70899963378906,151.0399932861328 C-192.70899963378906,151.0399932861328 67.70899963378906,151.0399932861328 67.70899963378906,151.0399932861328 C136.7449951171875,151.0399932861328 192.70899963378906,95.07499694824219 192.70899963378906,26.038999557495117 C192.70899963378906,26.038999557495117 192.70899963378906,-26.038999557495117 192.70899963378906,-26.038999557495117 C192.70899963378906,-95.07499694824219 136.7449951171875,-151.0399932861328 67.70899963378906,-151.0399932861328z"
																	></path>
																</g>
															</g>
															<g
																className="primary design"
																transform="matrix(0.9999985694885254,0.0016761119477450848,-0.0016761119477450848,0.9999985694885254,166.9169921875,250.18655395507812)"
																opacity="1"
																style={{ display: "none" }}
															>
																<g opacity="1" transform="matrix(1,0,0,1,0,0)">
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		fillOpacity="0"
																		className="primary"
																		stroke="rgb(157,159,167)"
																		strokeOpacity="1"
																		strokeWidth="41.73"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																</g>
															</g>
															<g
																className="primary design"
																transform="matrix(0.9999985694885254,0.0016761119477450848,-0.0016761119477450848,0.9999985694885254,250.25086975097656,250.32623291015625)"
																opacity="1"
																style={{ display: "none" }}
															>
																<g opacity="1" transform="matrix(1,0,0,1,0,0)">
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		fill-opacity="0"
																		className="primary"
																		stroke="rgb(157,159,167)"
																		stroke-opacity="1"
																		stroke-width="41.73"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																</g>
															</g>
															<g
																className="primary design"
																transform="matrix(0.9999985694885254,0.0016761119477450848,-0.0016761119477450848,0.9999985694885254,333.584228515625,250.786376953125)"
																opacity="1"
																style={{ display: "none" }}
															>
																<g opacity="1" transform="matrix(1,0,0,1,0,0)">
																	<path
																		className="primary"
																		fill="rgb(157,159,167)"
																		fill-opacity="1"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		fill-opacity="0"
																		className="primary"
																		stroke="rgb(157,159,167)"
																		stroke-opacity="1"
																		stroke-width="41.73"
																		d=" M0,0 C0,0 0,0 0,0"
																	></path>
																</g>
															</g>
														</g>
													</g>
												</svg>
												 Feedback
											</Button>
										</PopoverTrigger>
										<PopoverContent>
											<Feedback />
										</PopoverContent>
									</Popover>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>Open Feedback</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<a href="/help">
						<div className="cursor-pointer">Help</div>
					</a>

					<a href="https://ui.shadcn.com/docs">
						<div className="flex gap-1">
							Docs
							<GoArrowUpRight className="w-4 h-4" />
						</div>
					</a>
				</div>
			</header>
		</div>
	);
};
	