"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LiaCodeSolid } from "react-icons/lia";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosLink } from "react-icons/io";
import { Copy, Plus } from "lucide-react";
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

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import SheetApiButton from "./SheetApiButton";

const AudiencesButton = () => {
	type Checked = DropdownMenuCheckboxItemProps["checked"];

	const [addManually, setAddManually] = React.useState<Checked>(true);
	const [csv, setCsv] = React.useState<Checked>(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const HandleAddManually = () => {
		setIsDialogOpen(true);
	};

	return (
		<div className="button flex mt-8 mr-3">
			<div className="mr-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="font-light h-8 w-25">
							<Plus className="mr-2 bg-slate-3 size-4" />
							Add Contacts
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuCheckboxItem
							checked={addManually}
							onCheckedChange={setAddManually}
							onClick={HandleAddManually}
						>
							Add Manually
						</DropdownMenuCheckboxItem>

						<DropdownMenuCheckboxItem checked={csv} onCheckedChange={setCsv}>
							Import CSV
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="mr-2">
			<SheetApiButton />
			</div>
			<div>
				<Button
					variant="outline"
					className="border border-gray-300 bg-gray-100 font-light h-8 w-8"
				>
					<Popover>
						<PopoverTrigger asChild>
							<span>...</span>
						</PopoverTrigger>
						<PopoverContent>
							{/* <IoIosLink />
							Share Email */}
							<Dialog>
								<DialogTrigger asChild>
									<div className="flex items-center cursor-pointer">
										<IoIosLink className="mr-2" />
										<span>Share link</span>
									</div>
								</DialogTrigger>
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
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="sm:max-w-[500px]">
					<DialogHeader>
						<DialogTitle>Add Contacts</DialogTitle>
					</DialogHeader>
					<div className="gap-4 py-4">
						<div className="grid-cols-4 items-center gap-4 text-gray-500">
							<Label htmlFor="emails" className="text-right text-sm">
								Email addresses
							</Label>
							<textarea
								id="emails"
								className="col-span-3 my-3 w-full h-40 bg-gray-100 border border-slate-500 rounded-lg p-2"
								placeholder="foo@gmail.com, bar@gmail.com"
							/>
						</div>
						<DialogDescription>
							Use commas to separate multiple email addresses.
						</DialogDescription>
					</div>
					<DialogFooter className="w-full flex justify-start gap-2 text-left">
						<Button type="submit">Add</Button>
						<DialogClose asChild>
							<Button
								type="button"
								variant="ghost"
								className="cancel border-none hover:bg-gray-200"
							>
								Cancel
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AudiencesButton;
