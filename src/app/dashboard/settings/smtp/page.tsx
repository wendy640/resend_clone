"use client";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import { CircleAlert, ClipboardList, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

const SmtpSettings = () => {
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000); // Reset status after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <SettingsLayout>
      <section className="w-full rounded-lg border my-12 border-gray-300 pb-4 lg:w-1/2">
        <div className="border-b border-slate-6 p-4">
          <h1 className="text-base font-bold">SMTP</h1>
        </div>
        <div className="divide-y divide-slate-6">
          <div className="flex w-full items-center justify-between p-4 text-gray-600">
            <div className="w-full">
              <p className="mb-1 text-sm text-slate-11 font-normal">
                Send emails using SMTP instead of the REST API.
              </p>
              <p className="text-sm text-slate-11 font-normal">
                <a
                  className="cursor-pointer border-b border-dashed border-slate-9 transition duration-300 ease-in-out hover:border-blue-9"
                  target="_blank"
                  href="https://resend.com/docs/dashboard/emails/smtp"
                >
                  See documentation
                </a>{" "}
                for more information.
              </p>
              <div className="mt-6 flex flex-col space-y-2">
                <Label htmlFor="host" className="text-sm text-slate-11">
                  Host
                </Label>
                <div
                  className="relative"
                  data-size="2"
                  data-state="read-only"
                  style={
                    {
                      "--text-field-left-slot-width": "12px",
                      "--text-field-right-slot-width": "36px",
                    } as React.CSSProperties
                  }
                >
                  <div className="border-2 border-gray-300 bg-zinc-200 pt-1 h-8 rounded-md px-2 text-sm">
                    smtp.resend.com
                  </div>
                  <div
                    className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1 cursor-pointer"
                    data-side="right"
                    onClick={() => handleCopy("smtp.resend.com", "host")}
                  >
                    {copiedField === "host" ? <Check size={18} /> : <ClipboardList size={18} />}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="port" className="text-sm text-slate-11">
                    Port
                  </Label>
                </div>
                <div
                  className="relative"
                  data-size="2"
                  data-state="read-only"
                  style={
                    {
                      "--text-field-left-slot-width": "12px",
                      "--text-field-right-slot-width": "36px",
                    } as React.CSSProperties
                  }
                >
                  <div className="border-2 border-gray-300 bg-zinc-200 h-8 rounded-md px-2 text-sm pt-1">
                    465
                  </div>
                  <div
                    className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1 cursor-pointer"
                    data-side="right"
                    onClick={() => handleCopy("465", "port")}
                  >
                    {copiedField === "port" ? <Check size={18} /> : <ClipboardList size={18} />}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mx-1 text-sm text-slate-11 font-normal">
                    For encrypted/TLS connections use
                  </span>
                  <span className="border bg-zinc-200 px-2 py-1 border-zinc-200 duration-150 text-sm rounded-md">
                    2465
                  </span>
                  <span className="mr-1 text-sm text-slate-11 font-normal">
                    ,
                  </span>
                  <span className="border bg-zinc-200 px-2 py-1 border-zinc-200 duration-150 text-sm rounded-md">
                    587
                  </span>
                  <span className="mr-1 text-sm text-slate-11 font-normal">
                    or
                  </span>
                  <span className=" border bg-zinc-200 px-2 py-1 border-zinc-200 duration-150 text-sm rounded-md">
                    2587
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <label htmlFor="user" className=" text-slate-11 text-sm">
                  User
                </label>
                <div
                  className="relative"
                  data-size="2"
                  data-state="read-only"
                  style={
                    {
                      "--text-field-left-slot-width": "12px",
                      "--text-field-right-slot-width": "36px",
                    } as React.CSSProperties
                  }
                >
                  <div className="border-2 border-gray-300 bg-zinc-200 h-8 rounded-md px-2 text-sm pt-1">
                    resend
                  </div>
                  <div
                    className="absolute bottom-0 top-0 z-10 flex items-center gap-0.5 text-slate-11 data-[side=left]:left-2 data-[side=right]:right-1 cursor-pointer"
                    data-side="right"
                    onClick={() => handleCopy("resend", "user")}
                  >
                    {copiedField === "user" ? <Check size={18} /> : <ClipboardList size={18} />}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-2" data-state="closed">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm text-slate-11 flex items-center">
                    Password
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleAlert size={18} className="ml-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Your API Key is used as the password. <br /> Create an{" "}
                          <Link
                            href="/dashboard/api-keys"
                            className="border-b border-dashed border-slate-700 transition-colors duration-300 ease-in-out hover:border-blue-600"
                          >
                            API Key
                          </Link>{" "}
                          if you<br/> don't have one.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative" data-size="2" data-state="read-only">
                  <div
                    className="border-2 border-gray-300 bg-zinc-200 pt-1 h-8 rounded-md px-2 text-sm cursor-pointer"
                    type="text"
                    id="password"
                    onClick={() => handleCopy("YOUR_API_KEY", "password")}
                  >
                    YOUR_API_KEY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SettingsLayout>
  );
};

export default SmtpSettings;
