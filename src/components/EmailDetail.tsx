"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LiaCodeSolid } from "react-icons/lia";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosLink } from "react-icons/io";
import { Copy } from "lucide-react";
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
import MailTab from "./MailTab";
// Define the type for mail details
type MailDetails = {
	id: string;
	to: string;
	status: string;
	subject: string;
	sent: string;
	name: string;
};

export default function EmailDetails() {
	const searchParams = useSearchParams();
	const [mailDetails, setMailDetails] = useState<MailDetails | null>(null);

	useEffect(() => {
		const id = searchParams.get("id");
		const to = searchParams.get("to");
		const status = searchParams.get("status");
		const subject = searchParams.get("subject");
		const sent = searchParams.get("sent");
		const name= searchParams.get("name");

		if (id && to && status && subject && sent && name) {
			setMailDetails({ id, to, status, subject, sent, name });
		}
	}, [searchParams]);

	if (!mailDetails) {
		return <div className="m-20">Loading...</div>;
	}
const getStatusClasses = (status: any) => {
	switch (status) {
		case "delivered":
			return {
				variant: "default",
				bgColor: "bg-green-100",
				textColor: "text-[#1c6537]",
			};
		case "bounced":
			return {
				variant: "destructive",
				bgColor: "bg-red-100",
				textColor: "text-[#b94646]",
			};
		default:
			return {
				variant: "secondary",
				bgColor: "bg-sky-100",
				textColor: "text-[#2b70de]",
			};
	}
	
};
 const { bgColor, textColor } = getStatusClasses(mailDetails.status);
	return (
		<div className="">
			<div className="container flex justify-between  mt-8">
				<div className="mail flex item-center ">
					<div
						className={`relative  w-20 h-20 flex items-center justify-center ${
							mailDetails.status === "delivered"
								? "bg-emerald-50"
								: mailDetails.status === "bounced"
								? "bg-red-100"
								: "bg-sky-100"
						}`}
					>
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
						<svg
							className={`${
								mailDetails.status === "delivered"
									? "text-green-11"
									: mailDetails.status === "bounced"
									? "text-[#f87171]"
									: "text-[#3175e4]"
							} relative w-10 h-10`}
							fill="currentColor"
							fill-opacity="0.9"
							filter="brightness(0.6)"
							viewBox="0 0 32 32"
						>
							<path d="m31 5.109-.004-.06-.004-.053-.008-.054-.01-.056-.013-.049-.016-.057-.018-.048-.02-.054-.024-.05-.024-.047-.03-.05-.028-.043c-.01-.015-.022-.03-.034-.045-.01-.015-.022-.03-.034-.044l-.035-.038a1.113 1.113 0 0 0-.042-.044l-.012-.013-.025-.02a1.142 1.142 0 0 0-.281-.183 1.133 1.133 0 0 0-.432-.1L29.873 4H2.127l-.032.002a1.125 1.125 0 0 0-.483.123 1.133 1.133 0 0 0-.23.158l-.025.021-.013.013c-.015.014-.028.03-.042.044l-.035.038-.034.044-.034.045-.028.044-.03.05-.024.046-.024.05-.02.054-.018.048-.016.057c-.004.016-.01.033-.013.049l-.01.056-.008.054-.004.052-.003.06L1 5.128v21.746C1 27.496 1.504 28 2.127 28h27.746c.623 0 1.127-.504 1.127-1.127V5.11Zm-3.726 1.144-8.832 9.43A3.316 3.316 0 0 1 16 16.749a3.316 3.316 0 0 1-2.442-1.064l-8.832-9.43h22.549ZM3.255 25.747V7.977l8.66 9.247A5.547 5.547 0 0 0 16 19.001a5.548 5.548 0 0 0 4.087-1.777l8.66-9.246v17.769H3.253Z"></path>
						</svg>
					</div>
					<div className="ml-6 mt-6">
						<p className="text-gray-700">Email</p>
						<h2 className="w-full truncate md:max-w-[800px] text-xl tracking-[-0.16px] text-slate-12 font-bold ">
							{mailDetails.to}
						</h2>
					</div>
				</div>
				<div className="button flex mt-8 mr-5">
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
										<Button variant="outline">
											<IoIosLink /> Share link
										</Button>

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
			<div>
				<div className="flex flex-wrap ml-8 ">
					<div className="mt-8 flex w-full flex-col gap-2 md:basis-1/3">
						<label className=" text-gray-400 uppercase text-xs">From</label>
						<div className="flex gap-2">
							<span className="text-sm text-slate-120 font-normal">
								"No Reply" &lt;noreply@schoolablesandbox.com&gt;
							</span>
						</div>
					</div>
					<div className="mt-8 flex w-full flex-col gap-2 md:basis-1/3">
						<label className=" text-gray-400 uppercase text-xs">Subject</label>
						<span className="text-sm text-slate-120 font-normal">
							{mailDetails.subject}
						</span>
					</div>
					<div className=" mt-8 flex w-full flex-col gap-2 md:basis-1/3">
						<label className=" text-gray-400 uppercase text-xs">To</label>
						<div className="flex h-5 items-center gap-2">
							<span className="text-sm text-slate-120 font-normal">
								{mailDetails.to}
							</span>
						</div>
					</div>
				</div>

				<div className="mt-6 mb-2 mx-8 text-[14px] text-gray-400">
					{" "}
					<p>EMAIL EVENTS</p>
					<div className="w-full overflow-x-auto p-8 bg-[url('../images/dot.jpeg')] dark:bg-[url('../images/dot.jpeg')]   backdrop-blur-md">
						<div className="relative flex w-fit gap-12">
							<span className="pointer-events-none absolute left-16 top-1/2 mt-0.5 h-0.5 w-[calc(100%-8rem)] -translate-y-8 select-none bg-[#e5e5e5] dark:bg-[#191B21] "></span>
							<div
								className="relative flex min-w-[6rem] flex-col items-center justify-center gap-2"
								style={{ opacity: "1", transform: "none" }}
							>
								<button
									data-state="closed"
									className="group flex flex-col items-center justify-center gap-2 rounded-lg outline-none cursor-default"
								>
									<div className="relative z-20 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border-2 border-slate-500 transition duration-150 ease-in-out focus-visible:border-slate-800 bg-gradient-to-b from-black/20 to-transparent">
										<svg
											className="text-slate-110"
											fill="none"
											height="30"
											viewBox="0 0 24 24"
											width="30"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.36207 12L11.8276 12M6 6L19 12L6 18L9.13793 12L6 6Z"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
											></path>
										</svg>
									</div>
									<div className="">
										<span
											className={`items-center justify-center capitalize font-medium tracking-wide border-none border inline-flex select-none whitespace-nowrap rounded text-xs h-6 px-2 ${bgColor} ${textColor}`}
										>
											{mailDetails.status}
										</span>
									</div>
								</button>
								<span className="text-center text-xs text-slate-110 font-normal">
									Jul 09, 3:55 PM
								</span>
							</div>
							<div
								className="relative flex min-w-[6rem] flex-col items-center justify-center gap-2"
								style={{ opacity: "1", transform: "none" }}
							>
								<button
									data-state="closed"
									className="group flex flex-col items-center justify-center gap-2 rounded-lg outline-none cursor-default"
								>
									<div className="relative z-20 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border-2 border-slate-500 transition duration-150 ease-in-out focus-visible:border-slate-800 bg-gradient-to-b from-black/20 to-transparent">
										<svg
											className="text-green-110"
											fill="none"
											height="30"
											viewBox="0 0 24 24"
											width="30"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
												stroke="currentColor"
												stroke-width="1.5"
											></path>
											<path
												d="M9 12L10.8462 14L15 10"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
											></path>
										</svg>
									</div>
									<div className="bg-root">
										<span
											className={`items-center justify-center capitalize font-medium tracking-wide border-none border inline-flex select-none whitespace-nowrap rounded text-xs h-6 px-2 ${bgColor} ${textColor}`}
										>
											{mailDetails.status}
										</span>
									</div>
								</button>
								<span className="text-center text-xs text-slate-110 font-normal">
									Jul 09, 3:55 PM
								</span>
							</div>
						</div>
					</div>
				</div>

				<MailTab name={mailDetails.name} />
			</div>
		</div>
	);
}
