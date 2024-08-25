"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	fullname: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	country: z.string().min(2, {
		message: "Country must be at least 2 characters.",
	}),
	address1: z.string().min(2, {
		message: "Address 1 must be at least 2 characters.",
	}),
	address2: z.string().min(2, {
		message: "Address 2 must be at least 2 characters.",
	}),
});

export function BillingForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullname: "",
			country: "",
			address1: "",
			address2: "",
		},
	});
    const countries = [
			{ value: "Nigeria", label: "Nigeria" },
			{ value: "United States", label: "United States" },
			{ value: "Canada", label: "Canada" },
			// Add more countries as needed
		];
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<section className="rounded-lg border border-gray-300">
			<div className="border-b border-gray-300 px-6 py-4">
				<h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
					Billing Address
				</h2>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="px-6 py-4 my-2 max-w-md">
						<div
							style={{
								margin: "-4px 0px",
								padding: "0px",
								border: "none",
								display: "block",
								background: "transparent",
								position: "relative",
								opacity: "1",
								clear: "both",
								transition: "height 0.35s ease 0s",
							}}
						>
							<FormField
								control={form.control}
								name="fullname"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fullname</FormLabel>
										<FormControl>
											<Input placeholder="Henry" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="country"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Country or region</FormLabel>
										<FormControl>
											{/* <Select
												 options={countries}
												placeholder="Select your country"
												value={field.value}
												onChange={(selectedOption: { value: any; }) => {
													field.onChange(
														selectedOption ? selectedOption.value : ""
													);
												}}
											/> */}
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="address1"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address line 1</FormLabel>
										<FormControl>
											<Input placeholder="Address 1" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address2"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address line 2</FormLabel>
										<FormControl>
											<Input
												placeholder="3500 South Dupont Highway"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="address2"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address line 2</FormLabel>
										<FormControl>
											<Input
												placeholder="3500 South Dupont Highway"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="flex border-t border-gray-300 px-6 py-3">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</Form>
		</section>
	);
}
