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
		 <div className="mr-40">
<section className="rounded-lg border border-gray-300 my-5">
          <div className="border-b border-slate-6 px-6 py-4">
            <h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
              Invite member
            </h2>
          </div>
          <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email Address
            </label>
            <Input
              className="border-slate-6 bg-gray-100 border-gray-300 text-gray-500 focus-visible:ring-slate-700 transition ease-in-out duration-200 placeholder:text-gray-500 h-8 rounded-md px-2 text-sm outline-none focus-visible:ring-2"
              type="email"
              id="email"
              placeholder="you@example.com"
              value=""
            />
          </div>
          
            <Button  className="bg-zinc-700 h-8">
              Invite
            </Button>
     
        </section>

				<section className="rounded-lg border border-gray-300 my-5">
          <div className="border-b border-slate-6 px-6 py-4">
            <h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
              Invite member
            </h2>
          </div>
          <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email Address
            </label>
            <Input
              className="border-slate-6 bg-gray-100 border-gray-300 text-gray-500 focus-visible:ring-slate-700 transition ease-in-out duration-200 placeholder:text-gray-500 h-8 rounded-md px-2 text-sm outline-none focus-visible:ring-2"
              type="email"
              id="email"
              placeholder="you@example.com"
              value=""
            />
          </div>
          
            <Button  className="bg-zinc-700 h-8">
              Invite
            </Button>
     
        </section>

				<section className="rounded-lg border border-gray-300 my-5">
          <div className="border-b border-slate-6 px-6 py-4">
            <h2 className="text-xl tracking-[-0.16px] text-slate-12 font-bold">
              Invite member
            </h2>
          </div>
          <div className="mb-2 max-w-md px-6 py-4 gap-2 flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email Address
            </label>
            <Input
              className="border-slate-6 bg-gray-100 border-gray-300 text-gray-500 focus-visible:ring-slate-700 transition ease-in-out duration-200 placeholder:text-gray-500 h-8 rounded-md px-2 text-sm outline-none focus-visible:ring-2"
              type="email"
              id="email"
              placeholder="you@example.com"
              value=""
            />
          </div>
          
            <Button  className="bg-zinc-700 h-8">
              Invite
            </Button>
     
        </section>
				</div>
	</SettingsLayout>
	</>
	);
}
export default DocumentSettings;