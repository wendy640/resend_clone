import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionalContent } from "./TransactionalContent";
import { MarketingContent } from "./MarkettingContent";

export function Usage_ManageButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold dark:bg-gray-700  dark:text-slate-100 bg-gray-100 text-gray-700 hover:bg-gray-300 dark:hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:outline-none focus-visible:bg-slate-400 disabled:hover:bg-slate-400 inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer">
					<span className="absolute w-full inset-0 flex items-center justify-center invisible">
						<span className="inline-flex items-center gap-1">
							<span className="h-1 w-1 animate-plop rounded-full"></span>
							<span className="h-1 w-1 animate-plop2 rounded-full bg-slate-100"></span>
							<span className="h-1 w-1 animate-plop3 rounded-full bg-slate-100"></span>
						</span>
					</span>
					<span className="inline-flex items-center justify-center gap-1 truncate visible">
						Manage
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-5xl p-4">
				{" "}
				{/* Updated class */}
				<DialogTitle className="flex align-middle justify-center text-2xl">
					Plans
				</DialogTitle>
				<Tabs defaultValue="transactional">
					<TabsList className=" flex grid-cols-2 align-middle justify-center text-sm">
						<TabsTrigger value="transactional">
							Transactional Emails
						</TabsTrigger>
						<TabsTrigger value="marketing">Marketing Emails</TabsTrigger>
					</TabsList>
					<TabsContent value="transactional">
						<TransactionalContent />
					</TabsContent>
					<TabsContent value="marketing">
						<MarketingContent/>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
}
