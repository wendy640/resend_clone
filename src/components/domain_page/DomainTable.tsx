"use client";
import Link from "next/link";
import * as React from "react";

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
import { Globe, Mail, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

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

import DomainButton from "./DomainButton";
import Image from "next/image";

type Region = "tokyo" | "ireland"; // Add all possible region keys here
const regionFlagMap: Record<Region, string> = {
	tokyo: "/images/circle.png",
	ireland: "/images/ireland.png",
	// Add other regions and their flags
};

const pole: Record<Region, string> = {
	tokyo: "(ap-northeast-1)",
	ireland: "(eu-west-1)",
	// Add other regions and their cardinal directions
};

const data: Payment[] = [
	{
		id: "bhqecj0p",
		domain: "nwaonu123@gmail.com",
		status: "verified",
		region: "tokyo",
	},
	{
		id: "bhqecj3p",
		domain: "chinwe640@gmail.com",
		status: "verified",
		region: "ireland",
	},
	{
		id: "bhqecj4p",
		domain: "rita@gmail.com",
		status: "verified",
		region: "ireland",
	},
	{
		id: "bhqecj38",
		domain: "musa0@gmail.com",
		status: "verified",
		region: "ireland",
	},
	{
		id: "bhqecj2p",
		domain: "nwaonu123@gmail.com",
		status: "pending",
		region: "tokyo",
	},
];

export type Payment = {
	id: string;
	domain: string;
	status: "pending" | "verified" | "opened";
	region: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "domain",
		header: ({ column }) => {
			return (
				<div
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Domain
				</div>
			);
		},

		cell: ({ row }) => (
			<div className="flex  items-center">
				<Link
					className="flex"
					href={{
						pathname: `/dashboard/domains/${row.original.id}`,
						query: {
							id: row.original.id,
							domain: row.original.domain,
							status: row.original.status,
							region: row.original.region,
						},
					}}
				>
					<div
						className={`relative mr-2 w-8 h-8 flex items-center justify-center ${
							row.getValue("status") === "verified"
								? "bg-emerald-50"
								: row.getValue("status") === "pending"
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
						<Globe
							className={`${
								row.getValue("status") === "verified"
									? "stroke-[#166534]	"
									: row.getValue("status") === "pending"
									? "stroke-[#d95d5d]"
									: "stroke-[#3175e4]"
							} relative w-5 h-5 `}
						/>
					</div>
					<span className=" flex mb-4 pt-2 lowercase cursor-pointer truncate border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600">
						{row.getValue("domain")}
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
				status === "verified"
					? "default"
					: status === "pending"
					? "destructive"
					: "secondary";
			const bgColor =
				status === "verified"
					? "bg-green-100"
					: status === "pending"
					? "bg-red-100"
					: "bg-sky-100";
			const textColor =
				status === "verified"
					? "text-[#1c6537]"
					: status === "pending"
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
		accessorKey: "region",
		header: "Region",
		cell: ({ row }) => {
			const region = row.getValue("region") as Region; // Cast region to the Region type
			const flagSrc = regionFlagMap[region] || ""; // Fallback to a default flag if region not found
			const cardinal = pole[region] || "";
			return (
				<div className="flex items-center capitalize">
					<Image
						src={flagSrc}
						alt={`${region} flag`}
						width={20}
						height={20}
						className="w-5 h-5 mr-2"
					/>
					{region}
					<span className="lowercase text-gray-500 ml-2">{cardinal}</span>
				</div>
			);
		},
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

export function DomainTable() {
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

	return (
		<div className="m-8 text-gray-600 ">
			<div className="flex justify-between items-center m-9  ">
				<h1 className="font-bold text-gray-800 text-3xl">Domains</h1>
				<DomainButton />
			</div>

			<div className="mt-4 mx-10">
				<Table className="min-w-full border-spacing-0  text-left">
					{/* min-w-full border-separate border-spacing-0  text-left */}
					<TableHeader className="header border rounded-xl border-zinc-300 bg-gray-100 font-light justify-between">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className="h-8 border-b border-t border-slate-6 px-3 text-xs font-semibold text-slate-11 first:rounded-l-sm first:border-l last:rounded-r-sm last:border-r bg-gray-100"
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
