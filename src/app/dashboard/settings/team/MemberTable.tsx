import { useState } from 'react';
import { Button } from "@/components/ui/button"
 import { BsTrash3 } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Ellipsis } from 'lucide-react';
const MemberTable = () => {
  const [members, setMembers] = useState([
    { email: 'henryc@schoolable.co', role: 'admin', joined: 'May 18, 2023', mfaEnabled: true },
    { email: 'jane.doe@example.com', role: 'member', joined: 'June 10, 2023', mfaEnabled: true },
    { email: 'john.smith@example.com', role: 'member', joined: 'July 22, 2023', mfaEnabled: true },
    { email: 'alice.williams@example.com', role: 'admin', joined: 'August 5, 2023', mfaEnabled: true },
  ]);

  const removeMember = (email: string) => {
    setMembers(members.filter(member => member.email !== email));
  };

  return (
    <section className="rounded-lg border border-slate-6">
      <div className="flex items-center border-b border-slate-6 p-4">
        <div className="flex-1">
          <h1 className="text-base text-slate-12 font-bold">Members</h1>
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-11 font-normal">Role</p>
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-11 font-normal">Enabled MFA</p>
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-11 font-normal"></p>
        </div>
      </div>

      <div className="divide-y divide-slate-6">
        {members.map(member => (
          <div key={member.email} className="relative flex w-full items-center justify-between p-4">
            <div className="flex-1">
              <div className="mb-1">
                <p className="text-sm text-slate-12 font-semibold">{member.email}</p>
              </div>
              <p className="text-xs text-slate-11 font-normal">Joined on {member.joined}</p>
            </div>
            <div className="flex-1">
              <span className="capitalize inline-flex select-none items-center whitespace-nowrap font-medium bg-slate-3 text-slate-11 text-xs h-6 px-2 rounded">
                {member.role}
              </span>
            </div>
            <div className="flex-1">
              {member.mfaEnabled ? (
                <svg className="text-slate-10" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z" fill="currentColor"></path>
                </svg>
              ) : null}
            </div>
<Popover>
      <PopoverTrigger asChild>
    <Ellipsis size="16"  />
      </PopoverTrigger>
      <PopoverContent className="w-50">
        <div className=" flex gap-2 text-nowrap cursor-pointer"    onClick={() => removeMember(member.email)}>
       
<BsTrash3 size={15} className='mt-0.5' />
      <div className='text-sm'>   Remove Member</div>
        </div>
      </PopoverContent>
    </Popover>
            {/* <button
              className="h-6 w-6 rounded bg-transparent border-none text-slate-11 hover:bg-slate-5 dark:hover:bg-slate-5 focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center justify-center border disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none cursor-pointer absolute right-4 align-middle"
              type="button"
              aria-label="More actions"
              onClick={() => removeMember(member.email)}
            >
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"></path>
                <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="currentColor"></path>
                <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="currentColor"></path>
              </svg>
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberTable;
