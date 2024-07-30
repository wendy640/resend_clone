"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	bio: z
		.string()
		.min(10, {
			message: "Bio must be at least 10 characters.",
		})
		.max(160, {
			message: "Bio must not be longer than 30 characters.",
		}),
});

export function Feedback() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "Your feedback has been submitted",
			description: <p> Thank you!!</p>,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Ideas to improve this page..."
									className="border-zinc-200 resize-none bg-bg-subtle border w-full h-32" // Adjust the textarea size here
									{...field}
								/>
							</FormControl>
							<div className="flex justify-between items-center mt-2">
								<FormDescription>
									Need help?{" "}
									<a href="#" className="text-blue-500  hover:underline">
										Contact us
									</a>{" "}
									or{" "}
									<a href="#" className="text-blue-500 hover:underline">
										see docs
									</a>
									.
								</FormDescription>
								<Button type="submit" className="h-8 bg-slate-950">
									Send
								</Button>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
