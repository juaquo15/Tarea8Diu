import type { MetaFunction } from "@remix-run/node";
import AsteriskLogo from "../assets/asterisk.svg"
import Navbar from "../components/Navbar";
import BigTitle from "../components/BigTitle";

import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'
import { BarChart } from '@mui/x-charts/BarChart';


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Profile() {
    return (
      <div className="flex h-screen">
        <Navbar/>
        <div className="bg-indigo-50 w-full">
        <div className="m-5">
            <BigTitle title="Evolución de Sebastián"/>

            
            <BarChart
            series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />


        </div>
        </div>
      </div>
    );
  }
  