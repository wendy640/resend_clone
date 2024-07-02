"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const HamburgerSheet = SheetPrimitive.Root

const HamburgerSheetTrigger = SheetPrimitive.Trigger;

const HamburgerSheetClose = SheetPrimitive.Close;

const HamburgerSheetPortal = SheetPrimitive.Portal;

const HamburgerSheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		{...props}
		ref={ref}
	/>
));
HamburgerSheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const HamburgersheetVariants = cva(
	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition text-[12px] ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-2/2 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	}
);

interface HamburgerSheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof HamburgersheetVariants> {}

const HamburgerSheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	HamburgerSheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
	<HamburgerSheetPortal>
		<HamburgerSheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(HamburgersheetVariants({ side }), className)}
			{...props}
		>
			{children}
			<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
				<X className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</HamburgerSheetPortal>
));
HamburgerSheetContent.displayName = SheetPrimitive.Content.displayName;

const HamburgerSheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
HamburgerSheetHeader.displayName = "SheetHeader";

const HamburgerSheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className
		)}
		{...props}
	/>
);
HamburgerSheetFooter.displayName = "HamburgerFooter";

const HamburgerSheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold text-foreground", className)}
		{...props}
	/>
));
HamburgerSheetTitle.displayName = SheetPrimitive.Title.displayName;

const HamburgerSheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
HamburgerSheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	HamburgerSheet,
	HamburgerSheetPortal,
	HamburgerSheetOverlay,
	HamburgerSheetTrigger,
	HamburgerSheetClose,
	HamburgerSheetContent,
	HamburgerSheetHeader,
	HamburgerSheetFooter,
	HamburgerSheetTitle,
	HamburgerSheetDescription,
};
