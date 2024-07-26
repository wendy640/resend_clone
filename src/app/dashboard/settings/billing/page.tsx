"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import { Ellipsis } from "lucide-react";
import { ViewPlanButton } from "@/components/settings_page/billings/ViewPlans";
import { BillingForm } from "@/components/settings_page/billings/BillingsForm";

const BillingSettings = () => {
	const [emailNum, setEmailNum] = useState("50,000");
	const [emailAmount, setEmailAmount] = useState("20.00");
	const handleDelete = () => {};
	const handleNewCard = () => {
		alert("New Card Added");
	};
	const handleSaveCard = () => {
		alert(" Card Saved");
	};
	return (
		<SettingsLayout>
			<div className="mr-14">
				<section className="rounded-lg border border-gray-300">
					<div className="border-b  px-6 py-4">
						<h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
							Subscriptions
						</h2>
					</div>
					<table className="min-w-full border-separate border-spacing-0 border-none text-left mb-2 px-4 py-4">
						<tbody className="">
							<tr className="text-slate-11">
								<td className="w-3/5  py-3.5 h-10 truncate border-b border-slate-6 px-3 text-sm">
									<span className="flex items-center text-gray-500">
										Transactional Pro{" "}
									</span>
								</td>
								<td className="w-1/5 !border-slate-4 text-right h-10 truncate border-b border-gray-300 px-3 text-sm text-gray-500">
									{emailNum} emails
								</td>{" "}
								<td className="w-[15%] text-gray-500   text-right h-10 truncate border-b border-gray-300 px-3 text-sm">
									${emailAmount} / mo
								</td>
								<td className="text-center truncate border-b px-3 text-sm cursor-pointer ">
									<Ellipsis
										size={18}
										color="gray"
										onClick={handleDelete}
										className="border h-5 w-6 border-none hover:bg-gray-300 rounded-sm "
									/>
								</td>
							</tr>
							<tr className="text-slate-12">
								<td className="w-3/5  py-3.5  h-10 truncate border-b border-slate-6 px-3 text-sm">
									<strong>Total</strong>
								</td>
								<td className="w-1/5 text-center  h-10 truncate border-b border-slate-6 px-3 text-sm"></td>
								<td className="w-[15%] text-right  h-10 truncate border-b border-slate-6 px-3 text-sm">
									<strong>$20.00 / mo</strong>
								</td>
								<td className="text-center  h-10 truncate border-b border-slate-6 px-3 text-sm"></td>
							</tr>
						</tbody>
					</table>
					<div className="flex justify-between border-t border-slate-6 py-3 pl-5 pr-3">
						<ViewPlanButton />
					</div>
				</section>

				<section className="rounded-lg border border-gray-300 my-5">
					<div className="border-b border-slate-6 px-6 py-4">
						<h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
							Billing Email
						</h2>
					</div>
					<div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
						<label htmlFor="email" className="text-sm  text-gray-500 ">
							Invoices will be sent to the following email address.
						</label>
						<Input
							className="border-slate-6 bg-gray-100  border-gray-300 text-gray-500 focus-visible:ring-slate-700 transition ease-in-out duration-200 placeholder:text-gray-500 h-8 rounded-md px-2 text-sm  outline-none focus-visible:ring-2"
							type="email"
							id="email"
							placeholder="you@example.com"
							value=""
						/>
					</div>
					<div className="flex justify-between border-t border-slate-6 py-3 pl-5 pr-3">
						<Button onClick={handleSaveCard}>Save</Button>
					</div>
				</section>

				<section className="rounded-lg border border-gray-300 my-5">
					<div className="border-b border-slate-6 px-6 py-4">
						<h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
							Payment Methods
						</h2>
					</div>
					<div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
						<span className="flex items-center text-gray-500 text-sm">
							There are no payment methods yet.
						</span>
					</div>
					<div className="flex justify-between border-t border-slate-6 py-3 pl-5 pr-3">
						<Button onClick={handleNewCard}>Add New Card</Button>
					</div>
				</section>

			<BillingForm/>
			</div>
		</SettingsLayout>
	);
};
export default BillingSettings;
