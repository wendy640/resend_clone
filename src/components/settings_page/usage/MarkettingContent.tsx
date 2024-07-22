"use client"
import React,{useState} from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
export const MarketingContent = () => {
const [amount, setAmount] = useState(20); 

const handleSliderChange = (value: number[]) => {
	setAmount(value[0]); 
};
	return (
		<>
			<div className="flex w-full flex-col gap-6 md:flex-row">
				<div className="relative flex flex-1 rounded-2xl border border-slate-6">
					<div className="relative z-20 flex w-full flex-col space-y-6 p-6">
						<div className="flex flex-col text-center">
							<h3 className="font-book font-styling font-display mb-6 flex flex-auto justify-center gap-2 text-base tracking-tight text-slate-12">
								<span className="">Free</span>
								<span className="inline-flex select-none items-center whitespace-nowrap font-medium bg-gray-100 text-gray-600 text-xs h-6 px-2 rounded">
									Current Plan
								</span>
							</h3>
							<span className="sans mb-6 text-[2.25rem] leading-[1.7] tracking-tight text-slate-12 font-normal">
								$0 / mo
							</span>
							<hr className="border-gray-300" />
							<span className="font-sans my-8 text-center text-sm leading-6 text-slate-12 font-normal">
								<span>
									Up to 3,000 emails / mo
									<span className="mt-2 block text-slate-11">
										100 emails / day
									</span>
								</span>
							</span>
							<hr className="border-gray-300 mb-4" />
							<ul className="flex flex-col gap-3">
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="font-sans text-sm leading-6 text-slate-11 font-normal">
										Email Support
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="font-sans text-sm leading-6 text-slate-11 font-normal">
										1 Domain
									</span>
								</li>

								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="font-sans text-sm leading-6 text-slate-11 font-normal">
										1-day Data Retention
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-gray-500"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Multi-Region
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-gray-500"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Single Sign-On
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-gray-500"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Dedicated IPs
									</span>
								</li>
							</ul>
							<div>
								<button className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-6 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer mt-6 block w-full">
									<span className="absolute w-full inset-0 flex items-center justify-center invisible">
										<span className="inline-flex items-center gap-1">
											<span className="h-1 w-1 animate-plop rounded-full bg-root"></span>
											<span className="h-1 w-1 animate-plop2 rounded-full bg-root"></span>
											<span className="h-1 w-1 animate-plop3 rounded-full bg-root"></span>
										</span>
									</span>
									<span className="inline-flex items-center justify-center gap-1 truncate visible">
										Change Plan
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex flex-1 rounded-2xl border border-slate-6">
					<div
						aria-hidden="true"
						className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
						style={{
							background:
								"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
						}}
					></div>
					<div className="relative z-20 flex w-full flex-col space-y-6 p-6">
						<div className="flex flex-col text-center">
							<h3 className="font-book font-styling font-display mb-6 flex flex-auto justify-center gap-2 text-base tracking-tight text-slate-12">
								<span>Pro Marketing</span>
							</h3>
							<span className="amount sans mb-6 text-[2.25rem] leading-[1.7] tracking-tight text-slate-12 font-normal">
								${amount} / mo
							</span>
							<hr className="border-gray-300" />
							<span className="font-sans my-5 text-center text-sm leading-4 text-slate-12 font-normal">
								<Slider
									className="mt-1"
									defaultValue={[20]}
									max={100}
									step={1}
									onValueChange={handleSliderChange}
								/>
							</span>

							<span className="sans mb-5 text-center text-sm leading-[1.6] text-slate-12 font-normal">
								50,000 emails / mo
								<span className="mt-2 block text-slate-11">
									No daily sending limit
								</span>
							</span>
							<hr className="border-gray-300 mb-4" />
							<ul className="flex flex-col gap-3 ">
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Slack Support
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Unlimited Domains
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										3-day Data Retention
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Multi-Region
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-gray-500"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Single Sign-On
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-gray-500"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Dedicated IP with Add-on
									</span>
								</li>
							</ul>
							<div>
								<button className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-6 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer mt-6 block w-full">
									<span className="absolute w-full inset-0 flex items-center justify-center invisible">
										<span className="inline-flex items-center gap-1">
											<span className="h-1 w-1 animate-plop rounded-full bg-root"></span>
											<span className="h-1 w-1 animate-plop2 rounded-full bg-root"></span>
											<span className="h-1 w-1 animate-plop3 rounded-full bg-root"></span>
										</span>
									</span>
									<span className="inline-flex items-center justify-center gap-1 truncate visible">
										Change plan to $20 / mo
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex flex-1 rounded-2xl border border-slate-6">
					<div className="relative z-20 flex w-full flex-col space-y-6 p-6">
						<div className="flex flex-col text-center">
							<h3 className="font-book font-styling font-display mb-6 flex flex-auto justify-center gap-2 text-base tracking-tight text-slate-12">
								<span className="">Enterprise</span>
							</h3>
							<span className="sans mb-6 text-[2.25rem] leading-[1.7] tracking-tight text-slate-12 font-normal">
								Custom
							</span>
							<hr className="border-gray-300" />
							<span className="sans my-8 text-center text-sm leading-[1.6] text-slate-12 font-normal">
								<span>A plan based on your specific needs</span>
								<span className="mt-2 block text-slate-11">
									No daily sending limit
								</span>
							</span>
							<hr className="border-gray-300 mb-4" />
							<ul className="flex flex-col gap-3">
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Priority Support
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Unlimited Domains
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Flexible Data Retention
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Multi-Region
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Single Sign-On
									</span>
								</li>
								<li className="flex items-center gap-2 text-left">
									<svg
										className="text-green-600"
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
										Dedicated IPs Included
									</span>
								</li>
							</ul>
							<div>
								<a
									className="text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-6 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center justify-center border select-none relative disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mt-6 block w-full"
									href="/contact"
								>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
