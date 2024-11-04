import type { MetaFunction } from "@remix-run/node";
import AsteriskLogo from "../assets/asterisk.svg"
import Navbar from "../components/Navbar";
import BigTitle from "../components/BigTitle";

import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Analytics() {
  return (
    <div className="flex h-screen">
    <Navbar/>
    <div className="bg-indigo-50 w-full">
    <div className="m-5">
        <BigTitle title="Datos médicos de Sebastián"/>
    </div>
    </div>
  </div>
  );
}
