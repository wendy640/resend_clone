import SettingsLayout from "@/components/settings_page/SettingsLayout";

const UsageSettings: React.FC = () => {
	return (
		<SettingsLayout>
			<div className="mr-10">
				<div className="flex flex-col  border-b border-slate-400 pb-16 pt-8 md:flex-row">
					<div className="flex w-full justify-between md:block md:w-1/2">
						<h2 className="mb-1 text-xl tracking-[-0.16px] text-slate-900 font-bold">
							Transactional
						</h2>
						<span className="mb-4 hidden md:block md:w-1/2 text-sm text-gray-600 font-normal">
							Integrate email into your app using the Resend API or SMTP
							interface.
						</span>
						<button className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold dark:bg-gray-700  dark:text-slate-100 bg-slate-200 text-slate-100 hover:bg-slate-400 dark:hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:outline-none focus-visible:bg-slate-400 disabled:hover:bg-slate-400 inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer">
							<span className="absolute w-full inset-0 flex items-center justify-center invisible">
								<span className="inline-flex items-center gap-1">
									<span className="h-1 w-1 animate-plop rounded-full bg-slate-100"></span>
									<span className="h-1 w-1 animate-plop2 rounded-full bg-slate-100"></span>
									<span className="h-1 w-1 animate-plop3 rounded-full bg-slate-100"></span>
								</span>
							</span>
							<span className="inline-flex items-center justify-center gap-1 truncate visible">
								Manage
							</span>
						</button>
					</div>
					<div className="w-full md:w-1/2">
						<h3 className="font-medium capitalize text-base text-slate-100 ">
							pro
						</h3>
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
									<td className="w-[32px] !border-slate-4 !px-0 text-center !border-none h-10 truncate border-b border-slate-6  text-sm">
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
									<td className="w-3/5 !border-slate-4 !px-0 py-3.5 !border-none h-10 truncate border-b border-slate-6 px-3 text-sm">
										Daily Limit
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
				</div>


			</div>
		</SettingsLayout>
	);
};

export default UsageSettings;
