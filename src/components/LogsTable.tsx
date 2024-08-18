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
{/* <GalleryVertical className="h-4 w-4" />; */}
import {
	ArrowUpDown,
	ChevronDown,
	CodeXml,
	GalleryVertical,
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
		id: "bhqecj35",
		endpoint: "/emails",
		status: "200",
		method: "POST",
		created: "1 minute ago",
	},
	{
		id: "bhqecj36",
		endpoint: "/emails",
		status: "200",
		method: "POST",
		created: "1 minute ago",
	},
	{
		id: "bhqecj38",
		endpoint: "/emails",
		status: "200",
		method: "POST",
		created: "1 minute ago",
	},
	{
		id: "bhqecj2p",
		endpoint: "/emails",
		status: "200",
		method: "POST" ,
		created: "3 minute ago",
	},
	{
		id: "bhqecj1p",
		endpoint: "/emails",
		status: "200",
		method: "POST",
		created: "6 minute ago",
	},
	{
		id: "bhqecj9p",
		endpoint: "/emails",
		status: "200",
		method: "POST" ,
		created: "1 minute ago",
	},
	{
		id: "bhqecj8p",
		endpoint: "/emails",
		status: "200",
		method: "POST" ,
		created: "1 minute ago",
	},
];

export type Payment = {
	id: string;
	endpoint: string;
	status: "200" | "402" | "500";
	method: "POST" | "GET" | "UPDATE";
	created: string;
	
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "endpoint",
		header: ({ column }) => {
			return (
				<div
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Endpoint
				</div>
			);
		},

		cell: ({ row }) => (
			<div className="flex  items-center mr-3">
				<Link
					className="flex"
					href={{
						pathname: `/dashboard/logs/${row.original.id}`,
						query: {
							id: row.original.id,
							endpoint: row.original.endpoint,
							status: row.original.status,
							method: row.original.method,
							created: row.original.created,
						},
					}}
				>
					<div
						className={`relative mr-2 w-8 h-8 flex items-center justify-center ${
							row.getValue("status") === "200"
								? "bg-emerald-50"
								: row.getValue("status") === "402"
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
						<GalleryVertical
							className={`${
								row.getValue("status") === "200"
									? "stroke-[#166534]	"
									: row.getValue("status") === "402"
									? "stroke-[#f6a0a0]"
									: "stroke-[#3175e4]"
							} relative w-4 h-4 `}
						/>
					</div>
					<span className=" flex mb-4 pr-3 pt-2 mr-4 lowercase cursor-pointer truncate border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600">
						{row.getValue("endpoint")}
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
				status === "200"
					? "default"
					: status === "402"
					? "destructive"
					: "secondary";
			const bgColor =
				status === "200"
					? "bg-green-100"
					: status === "402"
					? "bg-red-100"
					: "bg-sky-100";
			const textColor =
				status === "200"
					? "text-[#1c6537]"
					: status === "402"
					? "text-[#b94646]"
					: "text-[#2b70de]";

			return (
				<div
					className={` items-center mr-5 justify-center capitalize font-medium tracking-wide border-none   border inline-flex select-none  whitespace-nowrap  rounded text-xs h-6 px-2 ${bgColor} ${textColor}`}
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
		accessorKey: "method",
		header: "Method",
		cell: ({ row }) => (
			<div className="capitalize mr-3">{row.getValue("method")}</div>
		),
	},

	{
		accessorKey: "created",
		header: "Created",
		cell: ({ row }) => (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<div className=" capitalize  ">{row.getValue("created")}</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>July 04,2024 - 01:55:59 PM</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		),
	},
];

export function LogsTable() {
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
				<h1 className="text-[28px] leading-[34px] tracking-[-0.416px] text-zinc-800 font-bold">Logs</h1>
			</div>

			<div className="flex items-center py-1 space-x-2 mx-9 ">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex-grow max-w-[25%] border border-zinc-300 bg-gray-100 font-light h-8 justify-between"
						>
							All Statuses <ChevronDown className="h-4 w-4" />
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
							className="flex-grow max-w-[25%] border border-zinc-300 bg-gray-100 font-light h-8 justify-between"
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
							className="flex-grow max-w-[25%] border border-zinc-300 bg-gray-100 font-light h-8 justify-between"
						>
							All User Agents
							<ChevronDown className="h-4 w-4" />
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
							className="flex-grow max-w-[25%] border border-zinc-300 bg-gray-100 font-light h-8 justify-between"
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
				<Table className="min-w-full border-spacing-3  text-left">
					{/* min-w-full border-separate border-spacing-0  text-left */}
					<TableHeader className="header border rounded-xl  border-zinc-300 bg-gray-100 font-light justify-between ">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className="">
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className="h-8 border-b border-t  text-xs font-semibold text-slate-11 first:rounded-l-sm first:border-l last:rounded-r-sm last:border-r bg-gray-100 "
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

			
			<div className="flex items-center justify-end space-x-2 py-2 mx-10 border-t border-zinc-300">
				<div className="flex-1 text-sm text-zinc-900 mt-4">
					page {table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length}
				</div>
				<div className="space-x-2 mt-4">
					<Button
						className="h-6 w-16 bg-black dark:bg-white"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Newer
					</Button>
					<Button
						className="h-6 w-12 bg-zinc-900 "
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Older
					</Button>
				</div>
			</div>
		</div>
	);
}
