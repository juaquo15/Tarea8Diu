import AsteriskLogo from "../assets/asterisk.svg"
import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  return (
    <div className="grid grid-cols-1 content-between bg-blue-600 w-24">
      <a href="/"> 
        <img src={AsteriskLogo} alt="AsteriskLogo" className="w-4/5 py-3 m-auto"/> 
      </a>
      <div className="my-4">
        <a href="/analytics" className="group block">
          <UserCircleIcon className="text-indigo-200 w-4/5 m-auto py-2 group-hover:text-white transition-colors"/>
          <p className="text-white text-xs text-center mx-1 mb-2 mt-[-0.9rem] opacity-0 group-hover:opacity-100 transition-all">Datos médicos</p>  
        </a>
        <a href="/profile" className="group block">
          <PresentationChartBarIcon className="text-indigo-200 w-4/5 m-auto py-2 group-hover:text-white transition-colors"/>
          <p className="text-white text-xs text-bold text-center mx-1 mb-2 mt-[-0.9rem] opacity-0 group-hover:opacity-100 transition-all">Evolución</p>  
        </a>
        <a href="/settings" className="group block">
          <Cog6ToothIcon className="text-indigo-200 w-4/5 m-auto py-2 group-hover:text-white transition-colors"/>
          <p className="text-white text-xs text-bold text-center mx-1 mb-2 mt-[-0.9rem] opacity-0 group-hover:opacity-100 transition-all">Configuración</p>  
        </a>
      </div>
      <div/><div/>
    </div>
  )
}