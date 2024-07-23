import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionalContent } from "../usage/TransactionalContent";
import { MarketingContent } from "../usage/MarkettingContent";

export function ViewPlanButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
					<Button className=" bg-bg-subtle dark:bg-slate-950 border border-gray-300 hover:bg-gray-200 text-black" >
							View Plans
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
						<MarketingContent />
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
}
