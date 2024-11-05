import type { MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import { Link } from "@remix-run/react";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

export const meta: MetaFunction = () => {
  return [
    { title: "MedicApp - ¡Bienvenido de vuelta!" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  const weightData = [8, 15, 19, 27];
  const xLabels = [0, 1, 2, 3];

  return (
    <div className="flex h-screen">
      <Navbar/>
      <div className="bg-indigo-50 w-full">
        <div className="m-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido de vuelta!</h1>
            <p className="text-gray-600">Última actualización: 4 de noviembre, 2024</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Próxima consulta</h3>
              <p className="text-xl font-semibold mt-2">15 Nov 2024</p>
              <p className="text-blue-600 text-sm mt-1">Dra. Mariana Gómez</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Peso actual</h3>
              <p className="text-xl font-semibold mt-2">9.2 kg</p>
              <p className="text-green-600 text-sm mt-1">↑ 0.3kg este mes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Altura actual</h3>
              <p className="text-xl font-semibold mt-2">73 cm</p>
              <p className="text-green-600 text-sm mt-1">↑ 2cm este mes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Vacunas pendientes</h3>
              <p className="text-xl font-semibold mt-2">1 vacuna</p>
              <p className="text-blue-600 text-sm mt-1">SRP (próxima visita)</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Actividad Reciente</h2>

              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">Hoy</p>
                  <p className="font-medium">Control de peso y altura</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">2 días atrás</p>
                  <p className="font-medium">Revisión de desarrollo motor</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="text-sm text-gray-600">1 semana atrás</p>
                  <p className="font-medium">Chequeo general con Dra. Gómez</p>
                </div>
              </div>
            </div>

            {/* Upcoming */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Próximos eventos</h2>

              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <div>
                    <p className="font-medium">Vacuna SRP</p>
                    <p className="text-sm text-gray-600">15 de noviembre, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vacuna</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <div>
                    <p className="font-medium">Control mensual</p>
                    <p className="text-sm text-gray-600">1 de diciembre, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {/* Weight Evolution */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Evolución reciente</h2>
              </div>
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

            {/* Completion Status */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Estado de controles</h2>
              <PieChart
                series={[{
                  data: [
                    { id: 0, value: 85, color: '#4ade80', label: 'Completado' },
                    { id: 1, value: 15, color: '#22c55e', label: 'Pendiente' }
                  ],
                  innerRadius: 25,
                  outerRadius: 40,
                }]}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}