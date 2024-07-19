"use client"
import React, { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SettingsLayoutProps {
	children: ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
	const pathname = usePathname();
	const section = pathname.split("/").pop();
	return (
		<div className="ml-40 ">
			<h1 className="text-[27px] tracking-wide dark:text-white text-gray-700 font-bold mb-6">
				Settings
			</h1>
			<nav className="mb-4 dark:text-white text-gray-500 text-[15px] font-medium">
				<ul className="flex space-x-6">
					<li>
						<Link
							href="/dashboard/settings/usage"
							className={`${
								section === "usage"
									? "font-medium border p-1.5 rounded-sm bg-gray-200 dark:bg-gray-700 "
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
			{children}
		</div>
	);
};

export default SettingsLayout;
