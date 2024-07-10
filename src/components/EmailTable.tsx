"use client";
import Link from "next/link";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import {
	ArrowUpDown,
	ChevronDown,
	CodeXml,
	Mail,
	MoreHorizontal,
} from "lucide-react";
import { LiaCodeSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CiSearch } from "react-icons/ci";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const data: Payment[] = [
	{
		id: "bhqecj0p",
		to: "nwaonu123@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "less than a minute ago",
		name: "Nwaonu Micheal",
	},
	{
		id: "bhqecj3p",
		to: "chinwe640@gmail.com",
		status: "opened",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Chinwe Enyidiegwu",
	},
	{
		id: "bhqecj3p",
		to: "rita@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Rita EBona",
	},
	{
		id: "bhqecj35",
		to: "cmedabl@gmail.com",
		status: "opened",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Chidozie Medabola",
	},
	{
		id: "bhqecj36",
		to: "chi@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Chidi Onwa",
	},
	{
		id: "bhqecj38",
		to: "musa0@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Musa Garuba",
	},
	{
		id: "bhqecj2p",
		to: "nwaonu123@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "3 minute ago",
		name: "Nwaonu Micheal",
	},
	{
		id: "bhqecj1p",
		to: "nwaonu123@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "6 minute ago",
		name: "Nwaonu Micheal",
	},
	{
		id: "bhqecj9p",
		to: "nwaonu123@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Nwaonu Micheal",
	},
	{
		id: "bhqecj8p",
		to: "nwaonu123@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
		name: "Nwaonu Micheal",
	},
];

export type Payment = {
	id: string;
	to: string;
	status: "bounced" | "delivered" | "opened";
	subject: string;
	sent: string;
	name: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "to",
		header: ({ column }) => {
			return (
				<div
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					To
				</div>
			);
		},

		cell: ({ row }) => (
			<div className="flex  items-center">
				<Link
					className="flex"
					href={{
						pathname: `/emails/${row.original.id}`,
						query: {
							id: row.original.id,
							to: row.original.to,
							status: row.original.status,
							subject: row.original.subject,
							sent: row.original.sent,
							name: row.original.name,
						},
					}}
				>
					<div
						className={`relative mr-2 w-8 h-8 flex items-center justify-center ${
							row.getValue("status") === "delivered"
								? "bg-emerald-50"
								: row.getValue("status") === "bounced"
								? "bg-red-100"
								: "bg-sky-100"
						}`}
					>
						{" "}
						<svg
							className="absolute left-0 top-0 text-green-10"
							fill="none"
							height="32"
							id="status-icon"
							viewBox="0 0 32 32"
							width="32"
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
								row.getValue("status") === "delivered"
									? "text-green-11"
									: row.getValue("status") === "bounced"
									? "text-[#f87171]"
									: "text-[#3175e4]"
							} relative w-5 h-5`}
							fill="currentColor"
							fill-opacity="0.9"
							filter="brightness(0.6)"
							viewBox="0 0 32 32"
						>
							<path d="m31 5.109-.004-.06-.004-.053-.008-.054-.01-.056-.013-.049-.016-.057-.018-.048-.02-.054-.024-.05-.024-.047-.03-.05-.028-.043c-.01-.015-.022-.03-.034-.045-.01-.015-.022-.03-.034-.044l-.035-.038a1.113 1.113 0 0 0-.042-.044l-.012-.013-.025-.02a1.142 1.142 0 0 0-.281-.183 1.133 1.133 0 0 0-.432-.1L29.873 4H2.127l-.032.002a1.125 1.125 0 0 0-.483.123 1.133 1.133 0 0 0-.23.158l-.025.021-.013.013c-.015.014-.028.03-.042.044l-.035.038-.034.044-.034.045-.028.044-.03.05-.024.046-.024.05-.02.054-.018.048-.016.057c-.004.016-.01.033-.013.049l-.01.056-.008.054-.004.052-.003.06L1 5.128v21.746C1 27.496 1.504 28 2.127 28h27.746c.623 0 1.127-.504 1.127-1.127V5.11Zm-3.726 1.144-8.832 9.43A3.316 3.316 0 0 1 16 16.749a3.316 3.316 0 0 1-2.442-1.064l-8.832-9.43h22.549ZM3.255 25.747V7.977l8.66 9.247A5.547 5.547 0 0 0 16 19.001a5.548 5.548 0 0 0 4.087-1.777l8.66-9.246v17.769H3.253Z"></path>
						</svg>
					</div>
					<span className=" flex mb-4 pt-2 lowercase cursor-pointer truncate border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600">
						{row.getValue("to")}
					</span>
				</Link>
				{/* <div className=" lowercase cursor-pointer border-b border-dashed border-slate-900 transition-colors duration-300 ease-in-out hover:border-blue-900">
						{row.getValue("to")}
					</div> */}
			</div>
		),
	},

	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status");
			const variant =
				status === "delivered"
					? "default"
					: status === "bounced"
					? "destructive"
					: "secondary";
			const bgColor =
				status === "delivered"
					? "bg-green-100"
					: status === "bounced"
					? "bg-red-100"
					: "bg-sky-100";
			const textColor =
				status === "delivered"
					? "text-[#1c6537]"
					: status === "bounced"
					? "text-[#b94646]"
					: "text-[#2b70de]";

			return (
				<div
					className={` items-center justify-center capitalize font-medium tracking-wide border-none   border inline-flex select-none  whitespace-nowrap  rounded text-xs h-6 px-2 ${bgColor} ${textColor}`}
				>
					{row.getValue("status")}
					{/* <button data-state="closed">
						<span class="capitalize inline-flex select-none items-center whitespace-nowrap font-medium bg-green-3 text-green-11 text-xs h-6 px-2 rounded">
							delivered
						</span>
					</button> */}
				</div>
			);
		},
	},

	{
		accessorKey: "subject",
		header: "Subject",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("subject")}</div>
		),
	},
	
	{
		accessorKey: "sent",
		header: "Sent",
		cell: ({ row }) => (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<div className="capitalize">{row.getValue("sent")}</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>July 04,2024 - 01:55:59 PM</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		),
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function EmailTable() {

	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	type Checked = DropdownMenuCheckboxItemProps["checked"];
	const [show3days, setShow3days] = React.useState<Checked>(true);
	const [show7days, setShow7days] = React.useState<Checked>(false);
	const [show15days, setShow15days] = React.useState<Checked>(false);
	const [show30days, setShow30days] = React.useState<Checked>(false);
 const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
 const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
 const [showPanel, setShowPanel] = React.useState<Checked>(false);
		return (
			<div className="m-8 text-gray-600 ">
				<div className="flex justify-between items-center m-9  ">
					<h1 className="font-bold text-3xl">Emails</h1>
					<Button
						variant="outline"
						className="border border-gray-300 bg-gray-100 font-light h-8 w-25"
					>
						<LiaCodeSolid className="mr-2 bg-slate-3 size-4" />
						API
					</Button>
				</div>

				<div className="flex items-center py-1 space-x-2 mx-9 ">
					<div className="relative flex-grow max-w-[50%]">
						<CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
						<Input
							placeholder="Search..."
							value={(table.getColumn("to")?.getFilterValue() as string) ?? ""}
							className="pl-10 border border-gray-300 bg-gray-100 font-light h-9 w-full"
						/>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="flex-grow max-w-[15.5%] border border-gray-300 bg-gray-100 font-light h-9 justify-between"
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

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="flex-grow max-w-[15.5%] border border-gray-300 bg-gray-100 font-light h-9 justify-between"
							>
								All Statuses <ChevronDown className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuCheckboxItem
								checked={showStatusBar}
								onCheckedChange={setShowStatusBar}
							>
								Sent
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Delivered
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								Delivered Delayed
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Complained
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Bounced
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Clicked
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Opened
							</DropdownMenuCheckboxItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="flex-grow max-w-[16%] border border-gray-300 bg-gray-100 font-light h-9 justify-between"
							>
								All API Keys <ChevronDown className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuCheckboxItem
								checked={showStatusBar}
								onCheckedChange={setShowStatusBar}
							>
								All API Keys
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showActivityBar}
								onCheckedChange={setShowActivityBar}
							>
								Get Payed Metabase
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								SchoolablesandboxKYC
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								PayedHQ OTP
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								Getpayed app
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								cone
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={showPanel}
								onCheckedChange={setShowPanel}
							>
								id bank
							</DropdownMenuCheckboxItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="mt-4 mx-10">
					<Table className="min-w-full border-spacing-0  text-left">
						{/* min-w-full border-separate border-spacing-0  text-left */}
						<TableHeader className="header border rounded-xl border-slate-600 bg-gray-100 font-light justify-between">
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<TableHead
											key={header.id}
											className="h-9 border-b border-t border-slate-6 px-3 text-xs font-semibold text-slate-11 first:rounded-l-sm first:border-l last:rounded-r-sm last:border-r bg-gray-100"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									))}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center"
									>
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>

				<div className="flex items-center justify-end space-x-2 py-2">
					<div className="flex-1 text-sm text-muted-foreground">
						{table.getFilteredSelectedRowModel().rows.length} of{" "}
						{table.getFilteredRowModel().rows.length} row(s) selected.
					</div>
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		);


}
