import React from "react";
import { Button } from "./ui/button";
import { LiaCodeSolid } from "react-icons/lia";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const SheetApiButton = () => {
	return (
		<div className="m-1 ">
			<Sheet>
				<TooltipProvider>
					<Tooltip>
						<SheetTrigger asChild>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									className="border border-zinc-300 bg-gray-50 font-light h-8 w-20"
								>
									<LiaCodeSolid className="mr-1 text-muted-foreground size-4" />
									API
								</Button>
							</TooltipTrigger>
						</SheetTrigger>
						<TooltipContent>
							<p>
								Open API Reference{" "}
								<Button className="bg-gray-200 border h-6 px-3 w-1 ml-2 border-gray-300 text-gray-500 dark:text-white">
									A
								</Button>
							</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" value="Pedro Duarte" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Username
							</Label>
							<Input id="username" value="@peduarte" className="col-span-3" />
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type="submit">Save changes</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default SheetApiButton;
