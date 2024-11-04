import type { MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import BigTitle from "../components/BigTitle";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

export const meta: MetaFunction = () => {
  return [
    { title: "MedicApp - Perfil" },
    { name: "description", content: "" },
  ];
};

export default function Profile() {
    const weightData = [8, 15, 19, 27, 3, 8, 22, 18, 27, 2, 18, 27];
    const xLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
      <div className="flex h-screen">
        <Navbar/>
        <div className="bg-indigo-50 w-full">
          <div className="m-5">
            <BigTitle title="Evolución de Sebastián"/>
            
            <div className="bg-white p-4 rounded-lg mb-6 border-2 border-green-400">
              <p className="text-green-500 font-medium">Todo está bien</p>
              <p className="text-gray-600">Los últimos estudios médicos no muestran anomalías. ¡El desarrollo de tu hijo sigue su curso normal!</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-white p-4 rounded-lg">
                <h2 className="font-medium mb-4 text-blue-600 text-xl">Evolución del peso</h2>
                <LineChart
                  xAxis={[{ data: xLabels }]}
                  series={[{
                    data: weightData,
                    area: false,
                    color: '#2563eb',
                    showMark: true,
                  }]}
                  height={200}
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="font-medium mb-4 text-blue-600 text-xl">Controles pendientes</h2>
                <div className="space-y-4">
                  <PieChart
                    series={[{
                      data: [
                        { id: 0, value: 85, color: '#4ade80' },
                        { id: 1, value: 15, color: '#22c55e' }
                      ],
                      innerRadius: 25,
                      outerRadius: 40,
                    }]}
                    height={100}
                  />
                  <PieChart
                    series={[{
                      data: [
                        { id: 0, value: 65, color: '#60a5fa' },
                        { id: 1, value: 35, color: '#3b82f6' }
                      ],
                      innerRadius: 25,
                      outerRadius: 40,
                    }]}
                    height={100}
                  />
                </div>
              </div>

              <div className="col-span-3 bg-white p-4 rounded-lg">
                <h2 className="font-medium mb-4 text-blue-600 text-xl"> Comparación del desarrollo motor</h2>
                <BarChart
                  series={[
                    { data: [600, 550, 800, 400, 200, 400, 700, 600, 800, 200, 300, 900], color: '#4f46e5' },
                    { data: [500, 450, 400, 500, 600, 700, 500, 100, 200, 300, 400, 600], color: '#818cf8' }
                  ]}
                  height={200}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}