"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SettingsLayout from "@/components/settings_page/SettingsLayout";
import MemberTable from "./MemberTable";
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



const TeamSettings = () => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
  
    setOpen(false);
  };

  const handleNewCard = () => {
    alert("New Card Added");
  };

  const handleSaveCard = () => {
    alert("Card Saved");
  };

  return (
    <SettingsLayout>
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
          <div className="flex justify-between border-t border-slate-6 py-4 pl-5 pr-3">
            <Button onClick={handleSaveCard} className="bg-zinc-700 h-8">
              Invite
            </Button>
          </div>
        </section>

        <section>
          <MemberTable />
        </section>

        <section className="rounded-lg border border-gray-300 mt-6 mb-16">
          <div className="border-b border-slate-6 p-4">
            <h1 className="text-base text-slate-12 font-bold">Account</h1>
          </div>
          <div className="flex flex-col items-start gap-4 p-4">
            <p className="text-sm text-gray-500 font-normal">
              Permanently remove your account and all of its contents from Resend.
              <br />
              This action is not reversible, so please continue with caution.
            </p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="font-medium inline-flex items-center justify-center border select-none relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-red-100 border-red-100 text-red-600 hover:bg-red-200 focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:outline-none focus-visible:bg-red-200 disabled:hover:bg-red-4 text-sm h-8 pl-3 pr-3 rounded-md gap-1"
                >
                  <span className="inline-flex items-center justify-center gap-1 truncate visible">
                    Request Account Deletion
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-lg">Delete Account</DialogTitle>
                  <DialogDescription> <p className="text-sm my-4">All your data will be lost and we will cancel all your subscriptions.</p>
                 <p className="text-sm my-4 text-red-400">Are you sure you want to delete your account?
This can not be undone.</p> 
 <div className="grid w-full max-w-sm items-center my-6 gap-1.5">
      <Label htmlFor="text">Type DELETE to confirm.</Label>
      <Input type="text" id="text" placeholder="" className="my-2"/>
    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="ghost" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    className="bg-red-600 text-white"
                    onClick={handleDelete}
                  >
                   Resquest Deleteion
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
};

export default TeamSettings;
