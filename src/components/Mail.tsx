<div className="mx-auto max-w-5xl px-6">
	<div
		dir="ltr"
		data-orientation="horizontal"
		className="rounded-md border border-slate-6"
	>
		<div
			role="tablist"
			aria-orientation="horizontal"
			className="relative flex justify-between px-4 pb-3 pt-4"
			tabindex="0"
			data-orientation="horizontal"
			style={{ outline: "none" }}
		>
			<div className="flex items-center gap-2">
				<div className="relative">
					<div
						className="inline-flex cursor-pointer select-none items-center text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-6 data-[state=active]:text-slate-12 text-slate-11 transition-colors duration-150 ease-in-out hover:text-slate-12 h-[22px] rounded px-1"
						type="button"
						role="tab"
						aria-selected="true"
						aria-controls="radix-:r195:-content-html"
						data-state="active"
						id="radix-:r195:-trigger-html"
						tabindex="0"
						data-orientation="horizontal"
						data-radix-collection-item=""
					>
						<span className="relative z-10 flex h-full w-full items-center justify-center gap-1.5 h-[22px] rounded px-1">
							HTML
						</span>
						<div
							aria-hidden="true"
							className="absolute left-0 top-0 w-full bg-slate-6 h-[26px] rounded"
							style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
						></div>
					</div>
				</div>
				<div className="relative">
					<div
						className="inline-flex cursor-pointer select-none items-center text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-6 data-[state=active]:text-slate-12 text-slate-11 transition-colors duration-150 ease-in-out hover:text-slate-12 h-[22px] rounded px-1"
						type="button"
						role="tab"
						aria-selected="false"
						aria-controls="radix-:r195:-content-text"
						data-state="inactive"
						id="radix-:r195:-trigger-text"
						tabindex="-1"
						data-orientation="horizontal"
						data-radix-collection-item=""
					>
						<span className="relative z-10 flex h-full w-full items-center justify-center gap-1.5 h-[22px] rounded px-1">
							Plain Text
						</span>
					</div>
				</div>
				<div className="relative">
					<div
						className="inline-flex cursor-pointer select-none items-center text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-6 data-[state=active]:text-slate-12 text-slate-11 transition-colors duration-150 ease-in-out hover:text-slate-12 h-[22px] rounded px-1"
						type="button"
						role="tab"
						aria-selected="false"
						aria-controls="radix-:r195:-content-source"
						data-state="inactive"
						id="radix-:r195:-trigger-source"
						tabindex="-1"
						data-orientation="horizontal"
						data-radix-collection-item=""
					>
						<span className="relative z-10 flex h-full w-full items-center justify-center gap-1.5 h-[22px] rounded px-1">
							Source
						</span>
					</div>
				</div>
			</div>
			<button
				className="h-6 w-6 rounded bg-transparent border-none text-slate-11 hover:bg-slate-5 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center justify-center border disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer"
				data-state="closed"
			>
				<svg
					fill="none"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					></path>
					<path
						d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					></path>
					<path
						d="M9.75 12.25H14.25"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					></path>
					<path
						d="M9.75 15.25H14.25"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					></path>
				</svg>
			</button>
		</div>
		<div
			data-state="active"
			data-orientation="horizontal"
			role="tabpanel"
			aria-labelledby="radix-:r195:-trigger-html"
			id="radix-:r195:-content-html"
			tabindex="0"
			className="border-t border-slate-6  border-none p-4 pt-2 outline-none"
			// style=""
		>
			<iframe
				className="rounded-md bg-white"
				sandbox=""
				srcDoc="<html><head></head><body><p>Dear Bibilade Oyeleke,</p>
<p>Congratulations, your account has just been created.</p>
<p>Find your account number below</p>
<br>
<p>Account number: 8681042518</p>
<p>Bank: sterling</p>
<br>
<p>Please fund your wallet with the account number above 👆to start transacting</p>
<br>
<p>Best,</p>
<p>Idbanc Team 💚</p>
</body></html>
"
				width="100%"
				style={{ minHeight: "600px" }}
			></iframe>
		</div>
		<div
			data-state="inactive"
			data-orientation="horizontal"
			role="tabpanel"
			aria-labelledby="radix-:r195:-trigger-text"
			id="radix-:r195:-content-text"
			tabIndex="0"
			className="border-t border-slate-6  border-none p-4 pt-2 outline-none whitespace-pre-line"
		></div>
		<div
			data-state="inactive"
			data-orientation="horizontal"
			role="tabpanel"
			aria-labelledby="radix-:r195:-trigger-source"
			id="radix-:r195:-content-source"
			tabindex="0"
			className="border-t border-slate-6  border-none p-4 pt-2 outline-none"
			// hidden=""
		></div>
	</div>
</div>;
