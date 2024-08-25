"use client";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const DocumentSettings =()=> {
	return (		
	<>
	<SettingsLayout >
		 <div className="mr-40 my-10">
<section className="rounded-lg border border-gray-300 my-5">
  <div className="border-b border-slate-6 px-6 py-4">
    <h2 className="text-base text-slate-12 font-semibold">Penetration Test</h2>
  </div>
  <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
    <p className="text-sm text-nowrap text-gray-500">Penetration testing is performed at least annually by a third-party cybersecurity company, Oneleet.</p>
    <p className="text-sm text-gray-500 pt-1">You can download the Letter of Attestation below.</p>
  </div>
  <div className="flex justify-between border-slate-6 pb-4 pl-5 pr-3">
    <a href="https://drive.google.com/file/d/1GfKS0NLOENsOTvl0M37y3zJ6NE32J-za/view?usp=sharing" target="_blank" className="bg-zinc-700 h-8 flex items-center justify-center px-4 font-light text-sm text-white rounded-md">
      Download
    </a>
  </div>
</section>

				<section className="rounded-lg border border-gray-300 my-5">
  <div className="border-b border-slate-6 px-6 py-4">
    <h2 className="text-base text-slate-12 font-semibold">SOC 2</h2>
  </div>
  <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
    <p className="text-sm text-nowrap text-gray-500">Resend is SOC 2 Type II compliant, a compliance framework developed by AICPA.

</p>
    <p className="text-sm text-gray-500 pt-1 text-nowrap">This audit was completed by Vanta & Advantage Partners and covers the period of August 1, 2023 to February 1, 2024.</p>
  </div>
  <div className="flex justify-between border-slate-6 pb-4 pl-5 pr-3">
    <a href="https://drive.google.com/file/d/1GfKS0NLOENsOTvl0M37y3zJ6NE32J-za/view?usp=sharing" target="_blank" className="bg-zinc-700 h-8 flex items-center justify-centerfont-light text-sm  px-4 text-white rounded-md">
      Download
    </a>
  </div>
</section>

			<section className="rounded-lg border border-gray-300 my-5">
  <div className="border-b border-slate-6 px-6 py-4">
    <h2 className="text-base text-slate-12 font-semibold">DPA</h2>
  </div>
  <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
    <p className="text-sm text-nowrap text-gray-500">Data Processing Agreement (DPA) is a contract that regulates data processing conducted for business purposes.



</p>
    <p className="text-sm text-gray-500 pt-1 text-nowrap">The attached DPA is a version signed by us, and is considered fully executed once you signup to Resend.</p>
  </div>
  <div className="flex justify-between border-slate-6 pb-4 pl-5 pr-3">
    <a href="https://drive.google.com/file/d/1GfKS0NLOENsOTvl0M37y3zJ6NE32J-za/view?usp=sharing" target="_blank" className="bg-zinc-700 h-8 flex items-center justify-centerfont-light text-sm  px-4 text-white rounded-md">
      Download
    </a>
  </div>
</section>

				</div>
	</SettingsLayout>
	</>
	);
}
export default DocumentSettings;