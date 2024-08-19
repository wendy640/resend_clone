"use client";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import { Button } from "@/components/ui/button";
import { CircleAlert, ClipboardList } from 'lucide-react';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const SmtpSettings =()=> {
	return (
		<SettingsLayout>
		
			<section className="w-full rounded-lg border border-gray-300 pb-4 lg:w-1/2">
				<div className="border-b border-slate-6 p-4 ">
					<h1 className="text-base  font-bold">SMTP</h1>
					</div>
					<div className="divide-y divide-slate-6">
						<div className="flex w-full items-center justify-between p-4 text-gray-400">
							<div className="p- w-full">
								<p className="mb-1 text-sm text-slate-11 font-normal">Send emails using SMTP instead of the REST API.
								</p>
								<p className="text-sm text-slate-11 font-normal">
									<a className="cursor-pointer border-b border-dashed border-slate-9 transition duration-300 ease-in-out hover:border-blue-9" target="_blank" href="https://resend.com/docs/dashboard/emails/smtp">See documentation</a> for more information.
									</p>
									<div className="mt-6 flex flex-col space-y-2">
										<Label htmlFor="host" className="text-sm text-slate-11 ">Host</Label>
										<div className="relative" data-size="2" data-state="read-only"  style={{
    '--text-field-left-slot-width': '12px',
    '--text-field-right-slot-width': '36px',
  } as React.CSSProperties}>
											<Input className="border-2 border-gray-300 bg-zinc-200 text-slate-12 focus-visible:ring-slate-7 transition ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-md px-2 text-sm "/>
												<div className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1" data-side="right">
											<ClipboardList />
														</div>
														</div>
														</div>
														<div className="mt-6 flex flex-col space-y-2">
															<div className="flex items-center">
																<Label htmlFor="port" className="text-sm text-slate-11 ">Port</Label>
																</div>
																<div className="relative" data-size="2" data-state="read-only" style={{
    '--text-field-left-slot-width': '12px',
    '--text-field-right-slot-width': '36px',
  } as React.CSSProperties}>
																	<Input className="border-2 border-gray-300 bg-zinc-200 text-slate-12 focus-visible:ring-slate-7 transition ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-md px-2 text-sm "/>
																	<div className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1" data-side="right">
																		
																		<ClipboardList />
																		
																		</div>
																			</div>
																			<div className="flex items-center">
																				<span className="mx-1 text-sm  text-slate-11 font-normal">For encrypted/TLS connections use</span>
																				
																					<span className="transition-opacity duration-150">2465</span>
																			
																				<span className="mr-1  text-sm text-slate-11 font-normal">,</span>
																				
																					<span className="transition-opacity duration-150">587</span>
																			
																				<span className="mr-1  text-sm text-slate-11 font-normal">or</span>
																		<span className="transition-opacity duration-150">2587</span>
																			</div>
																				</div>
																				<div className="mt-4 flex flex-col space-y-2">
																					<label htmlFor="user" className=" text-slate-11 text-sm">User</label><div className="relative" data-size="2" data-state="read-only" style={{
    '--text-field-left-slot-width': '12px',
    '--text-field-right-slot-width': '36px',
  } as React.CSSProperties}>
																						<Input className="border-2 border-gray-300 bg-zinc-200 text-slate-12 focus-visible:ring-slate-7 transition ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-md px-2 text-sm "/>
																							<div className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1" data-side="right">
																							<ClipboardList />
																						</div>
																						</div></div><div className="mt-6 flex flex-col space-y-2" data-state="closed"><div className="flex items-center"><Label htmlFor="password" className="text-sm text-slate-11  flex items-center">Password
																						</Label><CircleAlert/>
																						</div>
																						<div className="relative" data-size="2" data-state="read-only">
																							<Input className="border-2 border-gray-300 bg-zinc-200 text-slate-12 focus-visible:ring-slate-7 transition ease-in-out duration-200 placeholder:text-slate-11 h-8 rounded-md px-2 text-sm "type="text" id="password" value="YOUR_API_KEY"/>
																								</div>
																								</div>
																								</div></div></div></section>
		</SettingsLayout>
	);
}
export default SmtpSettings;