"use client";

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
import { Mailborder, Mailbox } from "./Mailbox";

const data: Payment[] = [
	{
		id: "bhqecj0p",
		to: "nwaonu123@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "less than a minute ago",
	},
	{
		id: "bhqecj3p",
		to: "nwaonu123@gmail.com",
		status: "opened",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
	},
	{
		id: "bhqecj2p",
		to: "nwaonu123@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "3 minute ago",
	},
	{
		id: "bhqecj1p",
		to: "nwaonu123@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "6 minute ago",
	},
	{
		id: "bhqecj9p",
		to: "nwaonu123@gmail.com",
		status: "bounced",
		subject: "Little Debit Notification",
		sent: "1 minute ago",
	},
	{
		id: "bhqecj8p",
		to: "nwaonu123@gmail.com",
		status: "delivered",
		subject: "Little Debit Notification",
		sent: "1 a minute ago",
	},
	
];

export type Payment = {
	id: string;
	to: string;
	status: "bounced" | "delivered" | "opened";
	subject: string;
	sent: string;
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
			<div className="flex gap-2 items-center">
				<div
					className={`mail-icon w-8 h-8 flex items-center justify-center  ${
						row.getValue("status") === "delivered"
							? "bg-emerald-50"
							: row.getValue("status") === "bounced"
							? "bg-red-50"
							: "bg-sky-100"
					}`}
				>
					<Mail
						className={`${
							row.getValue("status") === "delivered"
								? "text-[#15803d]"
								: row.getValue("status") === "bounced"
								? "text-[#f87171]"
								: "text-[#3b82f6]"
						} size-5 `}
					/>
					

					


				</div>
				<div className="lowercase border-b-2 border-dashed border-gray-400 transition-colors duration-300 ease-in-out hover:border-blue-500">
					{row.getValue("to")}
				</div>
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
					? "bg-emerald-50"
					: status === "bounced"
					? "bg-red-50"
					: "bg-sky-100";
			const textColor =
				status === "delivered"
					? "text-[#15803d]"
					: status === "bounced"
					? "text-[#f87171]"
					: "text-[#3b82f6]";

			return (
				<div
					className={`flex items-center justify-center capitalize font-medium tracking-wide border-none  text-[11px] border rounded-sm w-16 h-8 ${bgColor} ${textColor}`}
				>
					{row.getValue("status")}
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
					<Table className="">
						{/* <TableHeader className="header border rounded-xl border-gray-300 bg-gray-100 font-light justify-between"> */}
							<TableHeader className="header  font-light justify-between">
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<TableHead key={header.id} className="h-9   ">
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
