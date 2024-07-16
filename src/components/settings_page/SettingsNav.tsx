"use client";
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

	return (
		<div className="px-10 pb-3 pt-4">
			<h1 className="text-4xl font-bold mb-4">Settings</h1>
			<nav className="mb-4 flex align-middle justify-center text-gray-700">
				<ul className="flex space-x-4">
					<li>
						<Link
							href="/dashboard/settings/usage"
							className={section === "usage" ? "font-bold" : ""}
						>
							Usage
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/billing"
							className={section === "billing" ? "font-bold" : ""}
						>
							Billing
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/team"
							className={section === "team" ? "font-bold" : ""}
						>
							Team
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/smtp"
							className={section === "smtp" ? "font-bold" : ""}
						>
							SMTP
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/integrations"
							className={section === "integrations" ? "font-bold" : ""}
						>
							Integrations
						</Link>
					</li>
					<li>
						<Link
							href="/dashboard/settings/document"
							className={section === "document" ? "font-bold" : ""}
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


