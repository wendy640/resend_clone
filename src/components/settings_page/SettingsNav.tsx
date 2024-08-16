"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import UsageSettings from "@/app/dashboard/settings/usage/page";
import BillingSettings from "@/app/dashboard/settings/billing/page";
import DocumentSettings from "@/app/dashboard/settings/document/page";
import IntegrationsSettings from "@/app/dashboard/settings/integrations/page";
import TeamSettings from "@/app/dashboard/settings/team/page";
import SmtpSettings from "@/app/dashboard/settings/smtp/page";

export default function SettingsPage() {
	const router = useRouter();
	const pathname = usePathname();
	const section = pathname.split("/").pop();

	useEffect(() => {
		// Redirect to usage if the section is empty or the base path is accessed
		if (pathname === "/dashboard/settings" || !section) {
			router.replace("/dashboard/settings/usage");
		}
	}, [section, router, pathname]);

	return (
		<div className="  ">
			<h1 className="text-[27px] mt-8 tracking-wide dark:text-white text-black/90 font-bold mb-6">
				Settings
			</h1>
			<nav className="mb-4 dark:text-white text-gray-500 text-[15px] font-medium">
				<ul className="flex space-x-6">
					<li>
						<Link
							href="/dashboard/settings/usage"
							className={`${
								section === "usage"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:dark:bg-gray-700 hover:p-1.5 hover:rounded-sm"
							}`}
						>
							Usage
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/billing"
							className={`${
								section === "billing"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:dark:bg-gray-700 hover:p-1.5 hover:rounded-sm "
							}`}
						>
							Billing
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/team"
							className={`${
								section === "team"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:dark:bg-gray-700 hover:p-1.5 hover:rounded-sm"
							}`}
						>
							Team
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/smtp"
							className={`${
								section === "smtp"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:dark:bg-gray-700 hover:p-1.5 hover:rounded-sm"
							}`}
						>
							SMTP
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/integrations"
							className={`${
								section === "integrations"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:dark:bg-gray-700 hover:p-1.5 hover:rounded-sm"
							}`}
						>
							Integrations
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/document"
							className={`${
								section === "document"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700"
									: "hover:border hover:bg-gray-200 hover:p-1.5 hover:rounded-sm hover:dark:bg-gray-700"
							}`}
						>
							Document
						</Link>
					</li>
				</ul>
			</nav>

			{section === "usage" && <UsageSettings />}
			{section === "billing" && <BillingSettings />}
			{section === "team" && <TeamSettings />}
			{section === "smtp" && <SmtpSettings />}
			{section === "integrations" && <IntegrationsSettings />}
			{section === "document" && <DocumentSettings />}
		</div>
	);
}
