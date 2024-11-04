import AsteriskLogo from "../assets/asterisk.svg"

import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'
import { Outlet } from "@remix-run/react";

export default function Navbar() {
    return (
      <div className="grid grid-cols-1 content-between bg-blue-600 w-[5.5rem]">
        <a href="/"> <img src={AsteriskLogo} alt="AsteriskLogo" className="w-[80%] py-3 m-auto"/> </a>
        <div className="my-4">
          <a href="/profile"> <UserCircleIcon className="text-indigo-50 w-[70%] m-auto py-2"/> </a>
          <a href="/analytics"> <PresentationChartBarIcon className="text-indigo-50 w-[70%] m-auto py-2"/> </a>
          <a href="/settings"> <Cog6ToothIcon className="text-indigo-50 w-[70%] m-auto py-2"/> </a>
        </div>
        {/* Dont remove this div, the reason is the content-between of the grid im lazy */}
        <div/><div/>
      </div>
    )
  }
  