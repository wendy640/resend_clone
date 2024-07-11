"use client"
import React,{useState} from "react";
import { Button } from "@/components/ui/button";
import { LiaCodeSolid } from "react-icons/lia";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosLink } from "react-icons/io";
import { Check, ChevronDown, ClipboardList, Copy, Plus } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RiBarChart2Line } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Audiences = () => {
	type Checked = DropdownMenuCheckboxItemProps["checked"];
	const [show3days, setShow3days] = React.useState<Checked>(true);
	const [show7days, setShow7days] = React.useState<Checked>(false);
	const [show15days, setShow15days] = React.useState<Checked>(false);
	const [show30days, setShow30days] = React.useState<Checked>(false);
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
	const [showPanel, setShowPanel] = React.useState<Checked>(false);
	const [contacts,setContacts] = useState("0");
	const [unsubscribers, setUnsubscribers] = useState("0");
	const [update,setUpdate]= useState("16 May");
	const [audienceId, setAudienceId] =useState("do629873-3040-4fd5-9493-");
	const [copied, setCopied] = useState(false);
	const [ content,setContent] = useState(false)
	const copyToClipboard = (content: string) => {
		navigator.clipboard
			.writeText(content)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => {
				alert("Failed to copy content!");
			});
	};
	return (
		<div className="my-4 mx-10">
			<div className="container flex justify-between  mt-8">
				<div className="mail flex item-center ">
					<div className="relative  w-20 h-20 flex items-center justify-center">
						{" "}
						<svg
							className="absolute   left-0 top-0 text-green-10"
							fill="none"
							height="82"
							id="status-icon"
							viewBox="0 0 32 32"
							width="82"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#a)">
								<rect
									fill="currentColor"
									fill-opacity="0.15"
									height="32"
									rx="8"
									stroke="#fff"
									stroke-width="8"
									width="32"
								></rect>
								<rect
									height="30"
									rx="7"
									stroke="#D6D6D6"
									stroke-width="2"
									width="30"
									x="1"
									y="1"
								></rect>
								<mask
									height="30"
									id="d"
									maskUnits="userSpaceOnUse"
									width="30"
									x="1"
									y="1"
									style={{ maskType: "alpha" }}
								>
									<path
										d="M1.641 1.637h29.091v29.091H1.641z"
										fill="url(#c)"
									></path>
								</mask>
								<g mask="url(#d)">
									<path
										d="M.5.5h5v5h-5zM5.5.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M11 1h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M10.5.5h5v5h-5zM15.5.5h5v5h-5zM20.5.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M26 1h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M25.5.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M.5 5.5h5v5h-5z"
										opacity="0.4"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<g opacity="0.4">
										<path
											d="M6 6h4v4H6z"
											fill="#404040"
											fill-opacity="0.06"
										></path>
										<path
											d="M5.5 5.5h5v5h-5z"
											stroke="#404040"
											stroke-opacity="0.06"
										></path>
									</g>
									<path
										d="M10.5 5.5h5v5h-5z"
										opacity="0.4"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<g opacity="0.4">
										<path
											d="M16 6h4v4h-4z"
											fill="#404040"
											fill-opacity="0.06"
										></path>
										<path
											d="M15.5 5.5h5v5h-5z"
											stroke="#404040"
											stroke-opacity="0.06"
										></path>
									</g>
									<path
										d="M20.5 5.5h5v5h-5zM25.5 5.5h5v5h-5z"
										opacity="0.4"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M1 11h4v4H1z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M.5 10.5h5v5h-5zM5.5 10.5h5v5h-5zM10.5 10.5h5v5h-5zM15.5 10.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M21 11h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M20.5 10.5h5v5h-5zM25.5 10.5h5v5h-5zM.5 15.5h5v5h-5zM5.5 15.5h5v5h-5zM10.5 15.5h5v5h-5zM15.5 15.5h5v5h-5zM20.5 15.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M26 16h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M25.5 15.5h5v5h-5zM.5 20.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M6 21h4v4H6z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M5.5 20.5h5v5h-5zM10.5 20.5h5v5h-5zM15.5 20.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M21 21h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M20.5 20.5h5v5h-5zM25.5 20.5h5v5h-5zM.5 25.5h5v5h-5zM5.5 25.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
									<path
										d="M11 26h4v4h-4z"
										fill="#404040"
										fill-opacity="0.06"
									></path>
									<path
										d="M10.5 25.5h5v5h-5zM15.5 25.5h5v5h-5zM20.5 25.5h5v5h-5zM25.5 25.5h5v5h-5z"
										stroke="#404040"
										stroke-opacity="0.06"
									></path>
								</g>
							</g>
							<defs>
								<radialGradient
									cx="0"
									cy="0"
									gradientTransform="rotate(90 .002 16.184) scale(12.3182)"
									gradientUnits="userSpaceOnUse"
									id="c"
									r="1"
								>
									<stop></stop>
									<stop offset="0.805" stop-opacity="0.88"></stop>
									<stop offset="1" stop-opacity="0"></stop>
								</radialGradient>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id="b"
									x1="16"
									x2="16"
									y1="2.5"
									y2="36.5"
								>
									<stop
										offset="0.105"
										style={{ stopColor: "var(--green-a5)" }}
									></stop>
									<stop
										fill-opacity="0.9"
										offset="1"
										stop-color="transparent"
									></stop>
								</linearGradient>
							</defs>
						</svg>
						<TbUsersGroup color="gray" className="relative w-10 h-10 " />
					</div>
					<div className="ml-6 mt-6">
						<p className="text-gray-700">Audiences</p>
						<h2 className="w-full truncate md:max-w-[800px] text-xl tracking-[-0.16px] text-slate-12 font-bold ">
							General
						</h2>
					</div>
				</div>

				<div className="button flex mt-8 mr-3">
					<div className="mr-2">
						<Button className=" font-light h-8 w-25">
							<Plus className="mr-2 bg-slate-3 size-4" />
							Add Contacts
						</Button>
					</div>
					<div className="mr-2">
						<Button
							variant="outline"
							className="border border-gray-300 bg-gray-100 font-light h-8 w-25"
						>
							<LiaCodeSolid className="mr-2 bg-slate-3 size-4" />
							API
						</Button>
					</div>
					<div>
						{" "}
						<Button
							variant="outline"
							className="border border-gray-300 bg-gray-100 font-light h-8 w-8"
						>
							<Popover>
								<PopoverTrigger>...</PopoverTrigger>
								<PopoverContent>
									{/* <IoIosLink />
							Share Email */}{" "}
									<Dialog>
										<IoIosLink /> Share link
										<DialogContent className="sm:max-w-md">
											<DialogHeader>
												<DialogTitle>Share link</DialogTitle>
												<DialogDescription>
													Anyone who has this link will be able to view this.
												</DialogDescription>
											</DialogHeader>
											<div className="flex items-center space-x-2">
												<div className="grid flex-1 gap-2">
													<Label htmlFor="link" className="sr-only">
														Link
													</Label>
													<Input
														id="link"
														defaultValue="https://ui.shadcn.com/docs/installation"
														readOnly
													/>
												</div>
												<Button type="submit" size="sm" className="px-3">
													<span className="sr-only">Copy</span>
													<Copy className="h-4 w-4" />
												</Button>
											</div>
											<DialogFooter className="sm:justify-start">
												<DialogClose asChild>
													<Button type="button" variant="secondary">
														Done
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</PopoverContent>
							</Popover>
						</Button>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap ml-8 mr-4 my-4">
				<div className="mt-8 flex w-full flex-col gap-2 md:basis-1/4">
					<label className=" text-gray-400 uppercase text-xs">
						ALL CONTACTS
					</label>
					<div className="flex gap-2">
						<span className="text-2xl text-gray-600  font-normal">
							{contacts}
						</span>
					</div>
				</div>
				<div className="mt-8 flex w-full flex-col gap-2 md:basis-1/4">
					<label className=" text-gray-400 uppercase text-xs">
						UNSUBSCRIBERS
					</label>
					<span className="text-2xl text-gray-600 font-normal">
						{unsubscribers}
					</span>
				</div>
				<div className="mt-8 flex w-full flex-col gap-2 md:basis-1/4">
					<label className=" text-gray-400 uppercase text-xs">
						LAST UPDATE
					</label>
					<span className="text-2xl text-gray-600  font-normal">{update}</span>
				</div>
				<div className=" mt-8 flex w-full flex-col gap-2 md:basis-1/4">
					<label className=" text-gray-400 uppercase text-xs">
						AUNDIENCE ID
					</label>
					<div className="flex h-5 items-center gap-2 ">
						<span className="flex text-sm  font-normal border rounded-sm bg-gray-200 gap-1 px-2 py-1 text-gray-500">
							{audienceId}
							<div className="items-center justify-center">
								{copied ? (
									<Check className="cursor-pointer" color="gray" size={14} />
								) : (
									<ClipboardList
										size={14}
										className="cursor-pointer"
										color="gray"
										onClick={() => copyToClipboard(audienceId)}
									/>
								)}
							</div>
						</span>
					</div>
				</div>
			</div>

			<div className="flex items-center py-1 space-x-2 ml-9 mr-4 my-4">
				<div className="relative flex-grow max-w-[70%]">
					<CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
					<Input
						placeholder="Search..."
						// value={(table.getColumn("to")?.getFilterValue() as string) ?? ""}
						className="pl-10 border border-gray-300 bg-gray-100 font-light h-9 w-full"
					/>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex-grow max-w-[30%] border border-gray-300 bg-gray-100 font-light h-9 justify-between"
						>
							Last 3 days <ChevronDown className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuCheckboxItem
							checked={show3days}
							onCheckedChange={setShow3days}
						>
							Last 3 days
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={show7days}
							onCheckedChange={setShow7days}
						>
							Last 7 days
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={show15days}
							onCheckedChange={setShow15days}
						>
							Last 15 days
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={show30days}
							onCheckedChange={setShow30days}
						>
							Last 30 days
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="content border border-slate-300 rounded-sm ml-6 mr-6 ">
				{content ? (
					<p>yes</p>
				) : (
					<div className="no flex items-center justify-center h-full  ">
						<div className="text-center m-40">
							<h2 className="font-bold text-lg">No contact yet</h2>
							<p className="text-gray-400">
								Add contacts and they will show up here
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Audiences;
