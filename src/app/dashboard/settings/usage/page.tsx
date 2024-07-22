import SettingsLayout from "@/components/settings_page/SettingsLayout";
import { Usage_UpdateButton } from "@/components/settings_page/usage/Usage_UpgradeButton";
import { Usage_ManageButton } from "@/components/settings_page/usage/Usage_ManageButton";


const UsageSettings: React.FC = () => {
	return (
		<SettingsLayout>
			<div className="mr-10 mb-10">
				<div className="flex flex-col  border-b border-slate-400 pb-16 pt-8 md:flex-row">
					<div className="flex w-full justify-between md:block md:w-1/2">
						<h2 className="mb-1 text-xl tracking-[-0.16px] text-slate-900 dark:text-white font-bold">
							Transactional
						</h2>
						<span className="mb-4 hidden md:block md:w-1/2 text-sm text-gray-600 font-normal dark:text-white">
							Integrate email into your app using the Resend API or SMTP
							interface.
						</span>
						<Usage_ManageButton />
					</div>
					<div className="w-full md:w-1/2">
						<h3 className="font-medium capitalize text-base  ">pro</h3>
						<table className="min-w-full border-separate border-spacing-0 border-none text-left mb-2 py-4">
							<tbody className="">
								<tr className="">
									<td className="w-[32px] !border-slate-4  text-center h-10 truncate border-b border-slate-6 px-3 text-sm">
										<svg
											className="flip -mt-[1px] rotate-180"
											height="22"
											width="22"
										>
											<circle
												className="text-slate-6"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeWidth="3"
											></circle>
											<circle
												className="text-orange-11"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeDasharray="50.26548245743669"
												strokeLinecap="round"
												strokeWidth="3"
												strokeDashoffset="10.053096491487338"
											></circle>
										</svg>
									</td>
									<td className="w-3/5 !border-slate-4  py-3.5 h-10 truncate border-b border-slate-6 px-3 text-sm">
										Monthly Limit
									</td>
									<td className="!border-slate-4  text-right text-slate-12 h-10 truncate border-b border-slate-6 px-3 text-sm">
										38,751 / 50,000
									</td>
								</tr>
								<tr className="">
									<td className="w-[32px] !border-slate-4 px-3 text-center !border-none h-10 truncate border-b border-slate-6  text-sm">
										<svg
											className="flip -mt-[1px] rotate-180"
											height="22"
											width="22"
										>
											<circle
												className="text-slate-6"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeWidth="3"
											></circle>
											<circle
												className="text-gray-4"
												cx="11"
												cy="11"
												fill="currentColor"
												r="0"
											></circle>
										</svg>
									</td>
									<td className="w-3/5 !border-slate-4  py-3.5 !border-none h-10 truncate border-b border-slate-6 px-3 text-sm">
										Daily Limit
									</td>
									<td className="  text-right text-gray-600 !border-none h-10 truncate border-b border-gray-600 px-3 text-sm">
										<span className="inline-flex select-none items-center whitespace-nowrap font-medium bg-gray-100  text-xs h-6 px-2 rounded-sm">
											unlimited
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="flex flex-col border-b border-slate-4 pb-16 pt-8 md:flex-row border-none">
					<div className="flex w-full justify-between md:block md:w-1/2">
						<h2 className="mb-1 text-xl tracking-[-0.16px] text-slate-12 font-bold">
							Marketing
						</h2>
						<span className="mb-4 hidden md:block md:w-1/2 text-sm text-gray-600 dark:text-white font-normal">
							Design and send marketing emails using Broadcasts and Audiences.
						</span>
						<Usage_UpdateButton />
					</div>
					<div className="w-full md:w-1/2">
						<h3 className="font-medium capitalize text-base text-slate-12 font-bold">
							free
						</h3>
						<table className="min-w-full border-separate border-spacing-0 border-none text-left mb-2 py-4">
							<tbody className="">
								<tr className="">
									<td className="w-[32px] !border-slate-4 !px-0 text-center h-10 truncate border-b border-slate-6 px-3 text-sm">
										<svg
											className="flip -mt-[1px] rotate-180"
											height="22"
											width="22"
										>
											<circle
												className="text-slate-6"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeWidth="3"
											></circle>
											<circle
												className="text-green-11"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeDasharray="50.26548245743669"
												strokeLinecap="round"
												strokeWidth="3"
												strokeDashoffset="50.26548245743669"
											></circle>
										</svg>
									</td>
									<td className="w-3/5 !border-slate-4 !px-0 py-3.5 h-10 truncate border-b border-slate-6 px-3 text-sm">
										Contacts Limit
									</td>
									<td className="!border-slate-4 !px-0 text-right text-slate-12 h-10 truncate border-b border-slate-6 px-3 text-sm">
										0 / 1,000
									</td>
								</tr>
								<tr className="">
									<td className="w-[32px] !border-slate-4 !px-0 text-center h-10 truncate border-b border-slate-6 px-3 text-sm">
										<svg
											className="flip -mt-[1px] rotate-180"
											height="22"
											width="22"
										>
											<circle
												className="text-slate-6"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeWidth="3"
											></circle>
											<circle
												className="text-red-11"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												strokeDasharray="50.26548245743669"
												strokeLinecap="round"
												strokeWidth="3"
												strokeDashoffset="0"
											></circle>
										</svg>
									</td>
									<td className="w-3/5 !border-slate-4 !px-0 py-3.5 h-10 truncate border-b border-slate-6 px-3 text-sm">
										Audiences Limit
									</td>
									<td className="!border-slate-4 !px-0 text-right text-slate-12 h-10 truncate border-b border-slate-6 px-3 text-sm">
										5 / 1
									</td>
								</tr>

								<tr className="">
									<td className="w-[32px] !border-slate-4 !px-0 text-center !border-none h-10 truncate border-b border-slate-6 px-3 text-sm">
										<svg
											className="flip -mt-[1px] rotate-180"
											height="22"
											width="22"
										>
											<circle
												className="text-slate-6"
												cx="11"
												cy="11"
												fill="transparent"
												r="8"
												stroke="currentColor"
												stroke-width="3"
											></circle>
											<circle
												className="text-gray-4"
												cx="11"
												cy="11"
												fill="currentColor"
												r="0"
											></circle>
										</svg>
									</td>
									<td className="w-3/5 !border-slate-4 !px-0 py-3.5 !border-none h-10 truncate border-b border-slate-6 px-3 text-sm">
										Broadcasts Limit
									</td>
									<td className="!border-slate-4 !px-0 text-right text-slate-12 !border-none h-10 truncate border-b border-slate-6 px-3 text-sm">
										<span className="inline-flex select-none items-center whitespace-nowrap font-medium bg-slate-3 text-slate-11 text-xs h-6 px-2 rounded">
											unlimited
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>{" "}
				<div>
					<h2 className="my-6 text-xl tracking-[-0.16px] text-slate-12 font-bold">
						Add-ons
					</h2>
					<div className="relative flex rounded-2xl border border-slate-6">
						<div className="flex w-full flex-col space-y-6 p-8 py-10">
							<div className="flex flex-col space-y-3">
								<h2 className="font-book font-styling font-display flex flex-auto text-xl leading-[130%] text-slate-12">
									Dedicated IPs - $30 / mo
								</h2>
								<div className="mt-6 flex flex-col space-y-2">
									<span className="sans mb-4 text-sm leading-[1.6] text-gray-600 dark:text-gray-100 font-normal">
										Our fully managed dedicated IP's are a great way to obtain
										complete control of your reputation. We take great care to
										maintain good-standing shared IP's, but for some high-volume
										senders, you can't leave anything up to chance. Request a
										dedicated IP and we will warmup, monitor, and autoscale it
										based on your utilization so you can focus on one thing,
										sending.
									</span>
									<div>
										<a
											className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-6 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
											href="https://resend.com/contact"
										>
											Request Dedicated IP
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SettingsLayout>
	);
};

export default UsageSettings;
