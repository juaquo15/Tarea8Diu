import AsteriskLogo from "../assets/asterisk.svg"

import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'
import { Outlet } from "@remix-run/react";

export default function BigTitle({title}) {
    return (
    <h1 className="text-4xl font-extrabold	text-blue-600 m-10"> {title} </h1>
    )
  }