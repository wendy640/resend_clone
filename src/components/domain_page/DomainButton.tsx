"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import SheetApiButton from "../SheetApiButton";

const DomainButton = () => {
	type Checked = DropdownMenuCheckboxItemProps["checked"];

	const [addManually, setAddManually] = React.useState<Checked>(true);
	const [csv, setCsv] = React.useState<Checked>(false);
	const [isDialogDomainOpen, setIsDialogDomainOpen] = useState(false);

	const HandleAddDomain = () => {
		setIsDialogDomainOpen(true);
	};

	return (
		<div className="button flex mt-8 ml-8">
			<div className="mr-2">
				<Button className="font-light h-8 w-25 " onClick={HandleAddDomain}>
					<Plus className="mr-2 bg-slate-3 size-4" />
					Add Contacts
				</Button>
			</div>
			<div className="mr-2  -mt-1">
				<SheetApiButton />
			</div>

			<Dialog open={isDialogDomainOpen} onOpenChange={setIsDialogDomainOpen}>
				<DialogContent className="sm:max-w-[500px]">
					<DialogHeader>
						<DialogTitle>Add Domain</DialogTitle>
					</DialogHeader>
					<div className="gap-4 py-4">
						<div className="grid-cols-4 items-center gap-4 text-gray-500">
							<Label htmlFor="emails" className="text-right text-sm">
								Add Domain
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

export default DomainButton;
