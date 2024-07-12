import React from 'react'
import { Button } from './ui/button';
import { LiaCodeSolid } from 'react-icons/lia';

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

const SheetApiButton = () => {
  
  return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						className="border border-gray-300 bg-gray-100 font-light h-8 w-25"
					>
						<LiaCodeSolid className="mr-2 bg-slate-3 size-4" />
						API
					</Button>
				</SheetTrigger>
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
}

export default SheetApiButton;
