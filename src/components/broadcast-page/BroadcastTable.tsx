"use client";

import * as React from "react";
import Link from "next/link";
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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import BroadcastButton from "./BroadcastButton";

const data: Payment[] = [
	{
		id: "bhqecj1p",
		name: "Untitled",
		status: "Draft",
		created: "2 months ago",
	},
	{
		id: "bhqecj2p",
		name: "Untitled",
		status: "Draft",
		created: "4 months ago",
	},
	{
		id: "bhqecj3p",
		name: "Untitled",
		status: "Draft",
		created: "1 months ago",
	},
];

export type Payment = {
	id: string;
	name: string;
	status: "Draft" | "processing";
	created: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		id: "select",

		enableSorting: false,
		enableHiding: false,
	},
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
						pathname: `/dashboard/broadcast/${row.original.id}`,
						query: {
							id: row.original.id,
							name: row.original.name,
							status: row.original.status,
							created: row.original.created,
						},
					}}
				>
					<span className=" flex mb-4 pt-2 capitalize cursor-pointer truncate border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600">
						{row.getValue("name")}
					</span>
				</Link>
			</div>
		),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<div className="capitalize border bg-gray-50 border-zinc-300 text-gray-400 text-[12px] px-2 w-12 rounded-sm ">
				{row.getValue("status")}
			</div>
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

export function BroadcastTable() {
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
		<div className="w-full">
			<div className="flex justify-between items-center mx-8  ">
				<h1 className=" font-semibold text-3xl ">Broadcasts</h1>
				<BroadcastButton />
			</div>

			<div className="mt-10 mx-10">
				<Table className="min-w-full border-spacing-0 text-gray-600 text-left">
					{/* min-w-full border-separate border-spacing-0  text-left */}
					<TableHeader className="header border rounded-md border-zinc-300 font-light justify-between">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className="border-zinc-300 ">
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className="h-8 border-b border-t border-zinc-300 px-3 text-xs font-semibold text-slate-11 first:rounded-l-sm first:border-l last:rounded-r-sm last:border-r bg-gray-100"
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
								<TableRow className="h-8"
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
			<div className="flex items-center justify-end space-x-2 py-2 mx-10 border-t  border-zinc-300">
				<div className="flex-1 text-sm text-gray-500">
					page {table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length}
				</div>
				<div className="space-x-2 ">
					<Button
						className="border-zinc-300"
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						className="border-zinc-300"
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
