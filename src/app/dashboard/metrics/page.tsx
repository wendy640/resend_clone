import React from 'react'

const Metics = () => {
  return (
		<div>
			
			<div className="mx-auto max-w-5xl px-6">
				<h2 className="text-2xl font-medium  my-5 ">Metrics</h2>
				<div className="relative overflow-hidden rounded-lg border border-slate-6">
					<div
						className="absolute right-0 top-0 h-px w-[300px]"
						style={{
							background:
								"linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.67) 64.41%, rgba(236, 72, 153, 0) 98.93%)",
						}}
					></div>

					<div className="flex justify-between px-3 py-5 md:px-5">
						<div>
							<p className="text-sm text-slate-11 font-normal">Total Emails</p>
							<p className="text-[35px] leading-[42px] tracking-[-0.64px] text-slate-12 font-normal">
								13,230
							</p>
						</div>
						<div className="mr-2">
							<div
								role="group"
								dir="ltr"
								className="flex gap-2 overflow-hidden rounded-lg border border-slate-7"
								tabIndex={0}
								style={{ outline: "none" }}
							>
								<a
									type="button"
									data-state="off"
									role="radio"
									aria-checked="false"
									aria-label="Day view"
									className="rounded-md px-3 py-1 text-xs font-semibold text-slate-10 transition duration-150 hover:bg-slate-4 data-[state='on']:bg-slate-5 data-[state='on']:text-slate-12"
									tabIndex={-1}
									data-radix-collection-item=""
									href="/metrics?range=1day"
								>
									D
								</a>
								<a
									type="button"
									data-state="on"
									data-disabled=""
									role="radio"
									aria-checked="true"
									aria-label="7 day range"
									className="rounded-md px-3 py-1 text-xs font-semibold text-slate-10 transition duration-150 hover:bg-slate-4 data-[state='on']:bg-slate-5 data-[state='on']:text-slate-12"
									// disabled=""
									tabIndex={-1}
									data-radix-collection-item=""
									href="/metrics?range=7days"
								>
									7D
								</a>
								<a
									type="button"
									data-state="off"
									role="radio"
									aria-checked="false"
									aria-label="15 day range"
									className="rounded-md px-3 py-1 text-xs font-semibold text-slate-10 transition duration-150 hover:bg-slate-4 data-[state='on']:bg-slate-5 data-[state='on']:text-slate-12"
									tabIndex={-1}
									data-radix-collection-item=""
									href="/metrics?range=15days"
								>
									15D
								</a>
								<a
									type="button"
									data-state="off"
									role="radio"
									aria-checked="false"
									aria-label="30 day range"
									className="rounded-md px-3 py-1 text-xs font-semibold text-slate-10 transition duration-150 hover:bg-slate-4 data-[state='on']:bg-slate-5 data-[state='on']:text-slate-12"
									tabIndex={-1}
									data-radix-collection-item=""
									href="/metrics?range=30days"
								>
									30D
								</a>
							</div>
						</div>
					</div>

					<div
						className="recharts-responsive-container"
						style={{ width: "100%", height: "300px", minWidth: "0px" }}
					>
						<div
							className="recharts-wrapper"
							style={{
								position: "relative",
								cursor: "default",
								width: "100%",
								height: "100%",
								maxHeight: "300px",
								maxWidth: "974px",
							}}
						>
							<svg
								className="recharts-surface"
								width="974"
								height="300"
								viewBox="0 0 974 300"
								style={{ width: "100%", height: "100%" }}
							>
								<title></title>
								<desc></desc>
								<defs>
									<clipPath id="recharts1-clip">
										<rect x="20" y="0" height="270" width="894"></rect>
									</clipPath>
								</defs>
								<g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
									<line
										stroke="rgba(223, 239, 254, 0.139)"
										orientation="bottom"
										width="894"
										height="30"
										x="20"
										y="270"
										className="recharts-cartesian-axis-line"
										fill="none"
										x1="20"
										y1="270"
										x2="914"
										y2="270"
									></line>
									<g className="recharts-cartesian-axis-ticks">
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="83.85714285714286"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="83.85714285714286" dy="0.71em">
													Jul, 05
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="211.57142857142858"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="211.57142857142858" dy="0.71em">
													Jul, 06
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="339.2857142857143"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="339.2857142857143" dy="0.71em">
													Jul, 07
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="466.99999999999994"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="466.99999999999994" dy="0.71em">
													Jul, 08
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="594.7142857142858"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="594.7142857142858" dy="0.71em">
													Jul, 09
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="722.4285714285714"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="722.4285714285714" dy="0.71em">
													Jul, 10
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<text
												stroke="none"
												orientation="bottom"
												width="894"
												height="30"
												font-size="11"
												x="850.1428571428571"
												y="288"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="middle"
												fill="#A09FA6"
											>
												<tspan x="850.1428571428571" dy="0.71em">
													Jul, 11
												</tspan>
											</text>
										</g>
									</g>
								</g>
								<g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
									<line
										orientation="right"
										stroke="rgba(223, 239, 254, 0.139)"
										width="60"
										height="270"
										x="914"
										y="0"
										className="recharts-cartesian-axis-line"
										fill="none"
										x1="914"
										y1="0"
										x2="914"
										y2="270"
									></line>
									<g className="recharts-cartesian-axis-ticks">
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<line
												orientation="right"
												stroke="rgba(223, 239, 254, 0.139)"
												width="60"
												height="270"
												x="914"
												y="0"
												className="recharts-cartesian-axis-tick-line"
												fill="none"
												x1="920"
												y1="270"
												x2="914"
												y2="270"
											></line>
											<text
												orientation="right"
												stroke="none"
												width="60"
												height="270"
												font-size="11"
												x="922"
												y="270"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="start"
												fill="#A09FA6"
											>
												<tspan x="922" dy="0.355em">
													0
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<line
												orientation="right"
												stroke="rgba(223, 239, 254, 0.139)"
												width="60"
												height="270"
												x="914"
												y="0"
												className="recharts-cartesian-axis-tick-line"
												fill="none"
												x1="920"
												y1="202.5"
												x2="914"
												y2="202.5"
											></line>
											<text
												orientation="right"
												stroke="none"
												width="60"
												height="270"
												font-size="11"
												x="922"
												y="202.5"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="start"
												fill="#A09FA6"
											>
												<tspan x="922" dy="0.355em">
													650
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<line
												orientation="right"
												stroke="rgba(223, 239, 254, 0.139)"
												width="60"
												height="270"
												x="914"
												y="0"
												className="recharts-cartesian-axis-tick-line"
												fill="none"
												x1="920"
												y1="135"
												x2="914"
												y2="135"
											></line>
											<text
												orientation="right"
												stroke="none"
												width="60"
												height="270"
												font-size="11"
												x="922"
												y="135"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="start"
												fill="#A09FA6"
											>
												<tspan x="922" dy="0.355em">
													1300
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<line
												orientation="right"
												stroke="rgba(223, 239, 254, 0.139)"
												width="60"
												height="270"
												x="914"
												y="0"
												className="recharts-cartesian-axis-tick-line"
												fill="none"
												x1="920"
												y1="67.5"
												x2="914"
												y2="67.5"
											></line>
											<text
												orientation="right"
												stroke="none"
												width="60"
												height="270"
												font-size="11"
												x="922"
												y="67.5"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="start"
												fill="#A09FA6"
											>
												<tspan x="922" dy="0.355em">
													1950
												</tspan>
											</text>
										</g>
										<g className="recharts-layer recharts-cartesian-axis-tick">
											<line
												orientation="right"
												stroke="rgba(223, 239, 254, 0.139)"
												width="60"
												height="270"
												x="914"
												y="0"
												className="recharts-cartesian-axis-tick-line"
												fill="none"
												x1="920"
												y1="0"
												x2="914"
												y2="0"
											></line>
											<text
												orientation="right"
												stroke="none"
												width="60"
												height="270"
												font-size="11"
												x="922"
												y="8.25"
												className="recharts-text recharts-cartesian-axis-tick-value"
												text-anchor="start"
												fill="#A09FA6"
											>
												<tspan x="922" dy="0.355em">
													2600
												</tspan>
											</text>
										</g>
									</g>
								</g>
								<g className="recharts-layer recharts-bar fill-slate-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
										</g>
									</g>
									<g className="recharts-layer"></g>
								</g>

								<g className="recharts-layer recharts-bar fill-green-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="81.77142857142857"
													y="65.83846153846153"
													width="4"
													height="204.16153846153847"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 05"
													d="M 81.77142857142857,65.83846153846153 h 4 v 204.16153846153847 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="209.4857142857143"
													y="200.83846153846153"
													width="4"
													height="69.16153846153847"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 06"
													d="M 209.4857142857143,200.83846153846153 h 4 v 69.16153846153847 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="337.20000000000005"
													y="232.4076923076923"
													width="4"
													height="37.59230769230771"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 07"
													d="M 337.20000000000005,232.4076923076923 h 4 v 37.59230769230771 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="464.9142857142857"
													y="97.82307692307694"
													width="4"
													height="172.17692307692306"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 08"
													d="M 464.9142857142857,97.82307692307694 h 4 v 172.17692307692306 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="592.6285714285715"
													y="77.05384615384614"
													width="4"
													height="192.94615384615386"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 09"
													d="M 592.6285714285715,77.05384615384614 h 4 v 192.94615384615386 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="720.3428571428572"
													y="86.08846153846156"
													width="4"
													height="183.91153846153844"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 10"
													d="M 720.3428571428572,86.08846153846156 h 4 v 183.91153846153844 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="848.0571428571428"
													y="71.44615384615383"
													width="4"
													height="198.55384615384617"
													radius="0"
													className="recharts-rectangle fill-green-11"
													name="Jul, 11"
													d="M 848.0571428571428,71.44615384615383 h 4 v 198.55384615384617 h -4 Z"
												></path>
											</g>
										</g>
									</g>
								</g>

								<g className="recharts-layer recharts-bar fill-red-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="81.77142857142857"
													y="21.599999999999994"
													width="4"
													height="44.238461538461536"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 05"
													d="M 81.77142857142857,21.599999999999994 h 4 v 44.238461538461536 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="209.4857142857143"
													y="172.28076923076924"
													width="4"
													height="28.557692307692292"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 06"
													d="M 209.4857142857143,172.28076923076924 h 4 v 28.557692307692292 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="337.20000000000005"
													y="219.01153846153846"
													width="4"
													height="13.396153846153823"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 07"
													d="M 337.20000000000005,219.01153846153846 h 4 v 13.396153846153823 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="464.9142857142857"
													y="60.230769230769226"
													width="4"
													height="37.5923076923077"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 08"
													d="M 464.9142857142857,60.230769230769226 h 4 v 37.5923076923077 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="592.6285714285715"
													y="40.91538461538461"
													width="4"
													height="36.13846153846153"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 09"
													d="M 592.6285714285715,40.91538461538461 h 4 v 36.13846153846153 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="720.3428571428572"
													y="45.69230769230768"
													width="4"
													height="40.396153846153865"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 10"
													d="M 720.3428571428572,45.69230769230768 h 4 v 40.396153846153865 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="848.0571428571428"
													y="39.25384615384614"
													width="4"
													height="32.19230769230769"
													radius="0"
													className="recharts-rectangle fill-red-11"
													name="Jul, 11"
													d="M 848.0571428571428,39.25384615384614 h 4 v 32.19230769230769 h -4 Z"
												></path>
											</g>
										</g>
									</g>
								</g>

								<g className="recharts-layer recharts-bar fill-blue-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="81.77142857142857"
													y="3.0115384615384677"
													width="4"
													height="18.588461538461523"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 05"
													d="M 81.77142857142857,3.0115384615384677 h 4 v 18.588461538461523 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="209.4857142857143"
													y="153.06923076923076"
													width="4"
													height="19.21153846153848"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 06"
													d="M 209.4857142857143,153.06923076923076 h 4 v 19.21153846153848 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="337.20000000000005"
													y="210.6"
													width="4"
													height="8.41153846153847"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 07"
													d="M 337.20000000000005,210.6 h 4 v 8.41153846153847 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="464.9142857142857"
													y="48.807692307692314"
													width="4"
													height="11.423076923076913"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 08"
													d="M 464.9142857142857,48.807692307692314 h 4 v 11.423076923076913 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="592.6285714285715"
													y="31.776923076923065"
													width="4"
													height="9.138461538461545"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 09"
													d="M 592.6285714285715,31.776923076923065 h 4 v 9.138461538461545 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="720.3428571428572"
													y="38.0076923076923"
													width="4"
													height="7.684615384615377"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 10"
													d="M 720.3428571428572,38.0076923076923 h 4 v 7.684615384615377 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="848.0571428571428"
													y="31.361538461538466"
													width="4"
													height="7.892307692307675"
													radius="0"
													className="recharts-rectangle fill-blue-11"
													name="Jul, 11"
													d="M 848.0571428571428,31.361538461538466 h 4 v 7.892307692307675 h -4 Z"
												></path>
											</g>
										</g>
									</g>
								</g>

								<g className="recharts-layer recharts-bar fill-yellow-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="209.4857142857143"
													y="152.9653846153846"
													width="4"
													height="0.10384615384614904"
													radius="0"
													className="recharts-rectangle fill-yellow-11"
													name="Jul, 06"
													d="M 209.4857142857143,152.9653846153846 h 4 v 0.10384615384614904 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="464.9142857142857"
													y="48.70384615384615"
													width="4"
													height="0.10384615384616325"
													radius="0"
													className="recharts-rectangle fill-yellow-11"
													name="Jul, 08"
													d="M 464.9142857142857,48.70384615384615 h 4 v 0.10384615384616325 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="592.6285714285715"
													y="31.67307692307693"
													width="4"
													height="0.10384615384613483"
													radius="0"
													className="recharts-rectangle fill-yellow-11"
													name="Jul, 09"
													d="M 592.6285714285715,31.67307692307693 h 4 v 0.10384615384613483 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="720.3428571428572"
													y="37.90384615384614"
													width="4"
													height="0.10384615384616325"
													radius="0"
													className="recharts-rectangle fill-yellow-11"
													name="Jul, 10"
													d="M 720.3428571428572,37.90384615384614 h 4 v 0.10384615384616325 h -4 Z"
												></path>
											</g>
											<g className="recharts-layer recharts-bar-rectangle">
												<path
													x="848.0571428571428"
													y="31.2576923076923"
													width="4"
													height="0.1038461538461668"
													radius="0"
													className="recharts-rectangle fill-yellow-11"
													name="Jul, 11"
													d="M 848.0571428571428,31.2576923076923 h 4 v 0.1038461538461668 h -4 Z"
												></path>
											</g>
										</g>
									</g>
								</g>

								<g className="recharts-layer recharts-bar fill-violet-11">
									<g className="recharts-layer recharts-bar-rectangles">
										<g className="recharts-layer">
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
											<g className="recharts-layer recharts-bar-rectangle"></g>
										</g>
									</g>
									<g className="recharts-layer"></g>
								</g>
							</svg>
							<div
								tabIndex={-1}
								className="recharts-tooltip-wrapper"
								style={{
									visibility: "hidden",
									pointerEvents: "none",
									position: "absolute",
									top: "0px",
									left: "0px",
									outline: "none",
								}}
							></div>
						</div>
					</div>

					<div className="mt-5 flex items-center gap-4 p-5">
						<table className="min-w-full border-separate border-spacing-0 border-none text-left">
							<tbody className="">
								<tr className="group font-semibold">
									<td className="h-10 truncate border-b border-slate-6 px-3 text-sm">
										Total Emails{" "}
										<span className="ml-1 opacity-70">(13,230)</span>
									</td>
									<td className="flex justify-end h-10 truncate border-b border-slate-6 px-3 text-sm">
										<button data-state="closed" className="cursor-default">
											<ul className="flex items-center gap-2">
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-yellow-11"></span>
													<span className="text-sm text-slate-11 font-semibold">
														0.04%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-blue-11"></span>
													<span className="text-sm text-slate-11 font-semibold">
														6%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-red-11"></span>
													<span className="text-sm text-slate-11 font-semibold">
														17%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-green-11"></span>
													<span className="text-sm text-slate-11 font-semibold">
														77%
													</span>
												</li>
											</ul>
										</button>
									</td>
								</tr>
								<tr className="group">
									<td className="group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										alert.getpayed.co{" "}
										<span className="ml-1 opacity-70">(22)</span>
									</td>
									<td className="flex justify-end group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										<button data-state="closed" className="cursor-default">
											<ul className="flex items-center gap-2">
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-red-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														36%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-green-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														64%
													</span>
												</li>
											</ul>
										</button>
									</td>
								</tr>

								<tr className="group">
									<td className="group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										alert.lifepin.love{" "}
										<span className="ml-1 opacity-70">(145)</span>
									</td>
									<td className="flex justify-end group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										<button data-state="closed" className="cursor-default">
											<ul className="flex items-center gap-2">
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-red-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														15%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-green-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														85%
													</span>
												</li>
											</ul>
										</button>
									</td>
								</tr>

								<tr className="group">
									<td className="group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										onecollect.co{" "}
										<span className="ml-1 opacity-70">(2,108)</span>
									</td>
									<td className="flex justify-end group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										<button data-state="closed" className="cursor-default">
											<ul className="flex items-center gap-2">
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-blue-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														30%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-red-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														26%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-green-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														44%
													</span>
												</li>
											</ul>
										</button>
									</td>
								</tr>

								<tr className="group">
									<td className="group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										schoolablesandbox.com{" "}
										<span className="ml-1 opacity-70">(8,507)</span>
									</td>
									<td className="flex justify-end group-last:border-0 h-10 truncate border-b border-slate-6 px-3 text-sm">
										<button data-state="closed" className="cursor-default">
											<ul className="flex items-center gap-2">
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-yellow-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														0.06%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-red-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														15%
													</span>
												</li>
												<li className="flex min-w-[48px] items-center gap-2 text-left">
													<span className="block h-2 w-2 rounded-full bg-green-11"></span>
													<span className="text-sm text-slate-11 font-normal">
														85%
													</span>
												</li>
											</ul>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Metics

