"use client";

import SettingsLayout from "@/components/settings_page/SettingsLayout";
const IntegrationsSettings=() =>{
	return (
		<SettingsLayout>
		<section className="mr-28 mt-10">
          <div className="w-full rounded-lg border border-gray-300 p-6">
						<div className="flex gap-4">
							<div className="shrink-0 pt-1">
					<svg className="align-middle" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_3)"><path d="M13.9543 23.4992C13.3466 24.2645 12.1143 23.8452 12.0997 22.868L11.8856 8.57517H21.496C23.2368 8.57517 24.2076 10.5857 23.1252 11.949L13.9543 23.4992Z" fill="url(#paint0_linear_0_3)"></path><path d="M13.9543 23.4992C13.3466 24.2645 12.1143 23.8452 12.0997 22.868L11.8856 8.57517H21.496C23.2368 8.57517 24.2076 10.5857 23.1252 11.949L13.9543 23.4992Z" fill="url(#paint1_linear_0_3)" fill-opacity="0.2"></path><path d="M10.0458 0.500861C10.6535 -0.264538 11.8857 0.154846 11.9004 1.13206L11.9942 15.4248H2.50401C0.763243 15.4248 -0.207613 13.4143 0.874846 12.051L10.0458 0.500861Z" fill="#3ECF8E"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_3" x1="11.8856" x2="20.427" y1="11.7442" y2="15.3265"><stop stop-color="#249361"></stop><stop offset="1" stop-color="#3ECF8E"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_3" x1="8.09875" x2="11.9941" y1="6.5594" y2="13.8922"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><clipPath id="clip0_0_3"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">Supabase</h3><p className="text-sm text-slate-11 font-normal">Integrate your Supabase account to send emails from Supabase Auth via SMTP.</p>
						<div className="mt-2 flex gap-2">
							<button className="font-semibold inline-flex items-center justify-center border select-none relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 dark:bg-slate-3 bg-slate-50 dark:text-slate-11 bg-slate-2 text-slate-12 hover:bg-slate-4 dark:hover:bg-slate-4 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-4 disabled:hover:bg-slate-4 text-sm h-8 pl-3 pr-3 rounded-md gap-1"><span className="absolute w-full inset-0 flex items-center justify-center invisible"><span className="inline-flex items-center gap-1"><span className="h-1 w-1 animate-plop rounded-full bg-slate-12"></span><span className="h-1 w-1 animate-plop2 rounded-full bg-slate-12"></span><span className="h-1 w-1 animate-plop3 rounded-full bg-slate-12">
								</span></span></span><span className="inline-flex items-center justify-center gap-1 truncate visible">Connect to Supabase</span>
								</button>
							</div>
							</div>
							</div>
							</div>
      
				<div className="w-full rounded-lg border border-gray-300 p-6 mt-5">
					<div className="flex gap-4">
						<div className="shrink-0 pt-1">
						<svg className="align-middle" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 3L22 21H2L12 3Z"></path></svg></div><div className="flex flex-col gap-2"><h3 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">Vercel</h3><p className="text-sm text-slate-11 font-normal">Integrate your Resend API keys with Vercel environment variables.</p><div className="mt-2 flex gap-2"><button className="font-semibold inline-flex items-center justify-center border select-none relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 dark:bg-slate-3 border-slate-6 dark:text-slate-11 bg-slate-50 text-slate-12 hover:bg-slate-4 dark:hover:bg-slate-4 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-4 disabled:hover:bg-slate-4 text-sm h-8 pl-3 pr-3 rounded-md gap-1"><span className="absolute w-full inset-0 flex items-center justify-center invisible"><span className="inline-flex items-center gap-1"><span className="h-1 w-1 animate-plop rounded-full bg-slate-12"></span><span className="h-1 w-1 animate-plop2 rounded-full bg-slate-12"></span><span className="h-1 w-1 animate-plop3 rounded-full bg-slate-12"></span></span></span><span className="inline-flex items-center justify-center gap-1 truncate visible">Go to Vercel Integration</span>
						</button>
						</div>
						</div>
						</div></div>
						</section>
		</SettingsLayout>
	);
}
export default IntegrationsSettings;