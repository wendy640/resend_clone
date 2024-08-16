"use client";import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import MemberTable from "./MemberTable";

const TeamSettings=()=> {
		const handleDelete = () => {};
	const handleNewCard = () => {
		alert("New Card Added");
	};
	const handleSaveCard = () => {
		alert(" Card Saved");
	};
	return (
			<SettingsLayout>
			<div className="mr-40">
				<section className="rounded-lg border border-gray-300 my-5">
					<div className="border-b border-slate-6 px-6 py-4">
						<h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
						Invite member
						</h2>
					</div>
					<div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
						<label htmlFor="email" className="text-sm  text-gray-500 ">
							Email Address
						</label>
						<Input
							className="border-slate-6 bg-gray-100  border-gray-300 text-gray-500 focus-visible:ring-slate-700 transition ease-in-out duration-200 placeholder:text-gray-500 h-8 rounded-md px-2 text-sm  outline-none focus-visible:ring-2"
							type="email"
							id="email"
							placeholder="you@example.com"
							value=""
						/>
					</div>
					<div className="flex justify-between border-t border-slate-6 py-4 pl-5 pr-3">
						<Button onClick={handleSaveCard} className="bg-zinc-700 h-8">Invite</Button>
					</div>
				</section>

				<section>

					<MemberTable />
				</section>
				</div>
				</SettingsLayout>
	);
}
export default TeamSettings;