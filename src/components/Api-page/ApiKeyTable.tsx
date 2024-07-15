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
	LockKeyhole,
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
import { Badge } from "../ui/badge";
import ApiButton from "./ApiButtons";

const data: Payment[] = [
	{
		id: "bhqecj0p",
		name: "getPayed metabase",
		token: "re-8Q1yrffdghhjj",
		permission: "sending access",
		lastUsed: "3 days ago",
		created: "about 5 days ago",
	},
	{
		id: "bhqecj3p",
		name: "SchoolablesandbxKYC",
		token: "re-8Q1yrffdghhjj",
		permission: "sending access",
		lastUsed: "3 days ago",
		created: "11 months ago",
	},
	{
		id: "bhqecj3p",
		name: "payedHQ OTP",
		token: "re-8Q1yrffdghhjj",
		permission: "sending access",
		lastUsed: "3 days ago",
		created: "about 5 days ago",
	},
	{
		id: "bhqecj35",
		name: "getPayedApp",
		token: "re-8Q1yrffdghhjj",
		permission: "full access",
		lastUsed: "3 days ago",
		created: "3 days ago",
	},

	{
		id: "bhqecj38",
		name: "cone",
		token: "re-8Q1yrffdghhjj",
		permission: "full access",
		lastUsed: "3 days ago",
		created: "3 days ago",
	},
	{
		id: "bhqecj2p",
		name: "idBank",
		token: "re-8Q1yrffdghhjj",
		permission: "full access",
		lastUsed: "3 months ago",
		created: "11 months ago",
	},
	{
		id: "bhqecj1p",
		name: "newsletter",
		token: "re-8Q1yrffdghhjj",
		permission: "sending access",
		lastUsed: "3 days ago",
		created: "3 months ago",
	},
	{
		id: "bhqecj9p",
		name: "lifepin",
		token: "re-8Q1yrffdghhjj",
		permission: "full access",
		lastUsed: "3 days ago",
		created: "11 months ago",
	},
	{
		id: "bhqecj8p",
		name: "helproute.Key",
		token: "re-8Q1yrffdghhjj",
		permission: "full access",
		lastUsed: "3 days ago",
		created: "11 months ago",
	},
];

export type Payment = {
	id: string;
	name: string;
	lastUsed:
		| "3 days ago"
		| "about 5 days ago"
		| "3 months ago"
		| "11 months ago";
	token: string;
	permission: "full access" | "sending access";
	created: "3 days ago" | "about 5 days ago" | "3 months ago" | "11 months ago";
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<div
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Name
				</div>
			);
		},

		cell: ({ row }) => (
			<div className="flex  items-center">
				<Link
					className="flex"
					href={{
						pathname: `/dashboard/api-keys/${row.original.id}`,
						query: {
							id: row.original.id,
							name: row.original.name,
							lastUsed: row.original.lastUsed,
							token: row.original.token,
							permission: row.original.permission,
							created: row.original.created,
						},
					}}
				>
					<div
						className={`relative mr-2 w-8 h-8 flex items-center justify-center ${
							row.getValue("lastUsed") === "3 days ago"
								? "bg-emerald-50"
								: row.getValue("lastUsed") === "about 5 days ago"
								? "bg-emerald-50"
								: "bg-orange-100"
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
						<LockKeyhole
							className={`${
								row.getValue("lastUsed") === "3 days ago"
									? "stroke-[#166534]	"
									: row.getValue("lastUsed") === "about 5 days ago"
									? "stroke-[#f6a0a0]"
									: "stroke-[#bd6822]"
							} relative w-4 h-4 `}
						/>
					</div>
					<span className=" flex mb-4 pt-2 lowercase cursor-pointer truncate border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600">
						{row.getValue("name")}
					</span>
				</Link>
				{/* <div className=" lowercase cursor-pointer border-b border-dashed border-slate-900 transition-colors duration-300 ease-in-out hover:border-blue-900">
						{row.getValue("to")}
					</div> */}
			</div>
		),
	},
	{
		accessorKey: "token",
		header: "Token",
		cell: ({ row }) => {
			const token = row.getValue("token") as string; // Explicitly cast token to string
			const truncatedToken =
				token.length > 11 ? `${token.slice(0, 11)}...` : token;
			return (
				<div className="items-center justify-center  font-medium tracking-wide border-none inline-flex select-none bg-gray-100 whitespace-nowrap px-2 rounded text-xs h-6">
					{truncatedToken}
				</div>
			);
		},
	},
	{
		accessorKey: "permission",
		header: "Permission",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("permission")}</div>
		),
	},

	{
		accessorKey: "lastUsed",
		header: "Last Used",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("lastUsed")}</div>
		),
	},

	{
		accessorKey: "created",
		header: "Created",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("created")}</div>
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

export function ApiKeyTable() {
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

	return (
		<div className="m-8 text-gray-600 ">
			<div className="flex justify-between items-center m-9  ">
				<h1 className="font-bold text-gray-800 text-3xl">API Keys</h1>
				<ApiButton />
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
