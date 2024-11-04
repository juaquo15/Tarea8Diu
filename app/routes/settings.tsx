import type { MetaFunction } from "@remix-run/node";
import AsteriskLogo from "../assets/asterisk.svg"
import Navbar from "../components/Navbar";
import BigTitle from "../components/BigTitle";


import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "MedicApp - Configuración" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function CheckboxComponent ({message}: {message: string}) {
    return (
        <div className="m-auto px-2 flex">
            <input type="checkbox" className="text-gray-800 mx-1" name="recibir-notificaciones"/> <p className="text-gray-800 mx-1">{message}</p>
        </div>
    )
}

export default function Settings() {
  return (
    <div className="flex h-screen">
      <Navbar/>
      <div className="bg-indigo-50 w-full">
        <div className="m-5">
            <BigTitle title="Configuración"/>

            <div>
                <p className="text-gray-800">Correo para recibir notificaciones de citas</p>
                <input className="w-[25rem] text-gray-800 border-2 px-2 py-1 rounded-md" placeholder="correo.electronico@gmail.com" type="email" name="citas-notificacion"/>
            </div>

            <CheckboxComponent message="Desea recibir notificaciones de citas "/>
            <CheckboxComponent message="Desea recibir notificaciones"/>
            <CheckboxComponent message="Desea recibir correos promocionales"/>

        </div>
      </div>
    </div>
  );
}
