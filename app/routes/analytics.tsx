import type { MetaFunction } from "@remix-run/node";
import AsteriskLogo from "../assets/asterisk.svg"
import Navbar from "../components/Navbar";
import BigTitle from "../components/BigTitle";
import { Outlet, useNavigate } from "@remix-run/react";

import { UserCircleIcon, Cog6ToothIcon, PresentationChartBarIcon  } from '@heroicons/react/24/solid'

export const meta: MetaFunction = () => {
  return [
    { title: "MedicApp - Datos médicos" },
    { name: "description", content: "" },
  ];
};

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <Navbar/>
      <div className="bg-indigo-50 w-full">
        <div className="m-5">
          <BigTitle title="Datos médicos de Sebastián"/>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            {/* Columna izquierda */}
            <div className="space-y-6">
              {/* Perfil médico */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-blue-600 font-medium mb-4">Perfil médico</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Edad:</span>
                    <span className="font-medium">10 meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha de Nacimiento:</span>
                    <span className="font-medium">15 de noviembre de 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sexo:</span>
                    <span className="font-medium">Masculino</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pediatra Responsable:</span>
                    <span className="font-medium">Dra. Mariana Gómez</span>
                  </div>
                </div>
              </div>

              {/* Información general */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-blue-600 font-medium mb-4">Información general</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso actual:</span>
                    <span className="font-medium">9.2 [kg]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Altura actual:</span>
                    <span className="font-medium">73 [cm]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Perímetro craneal:</span>
                    <span className="font-medium">45 [cm]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IMC (Índice de Masa Corporal):</span>
                    <span className="font-medium">17.2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div>
              {/* Historial médico */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-blue-600 font-medium mb-4">Historial médico</h2>
                
                <h3 className="font-medium mb-2">Condiciones médicas previas</h3>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Bronquiolitis a los 7 meses (tratada con nebulizaciones en casa, sin hospitalización).</li>
                  <li>Episodios leves de dermatitis atópica (tratada con cremas hidratantes y bajo control médico).</li>
                </ul>

                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Alergias:</span>
                    <span className="text-gray-600 ml-2">Ninguna conocida hasta la fecha.</span>
                  </div>
                  <div>
                    <span className="font-medium">Medicamentos actuales:</span>
                    <span className="text-gray-600 ml-2">Ninguno.</span>
                  </div>
                  <div>
                    <span className="font-medium">Hospitalizaciones:</span>
                    <span className="text-gray-600 ml-2">Ninguna.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comentarios adicionales */}
          <div className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-blue-600 font-medium mb-4">Comentarios adicionales</h2>
              <p className="text-gray-600">
                "Sebastián ha respondido y interactúa acorde a su edad. En la en general está en el rango medio como cognitiva. No se han observado signos de retraso en el desarrollo. Se recomienda seguir estimulando el desarrollo motor a través de juegos de gateo. La alimentación es adecuada y se puede seguir introduciendo gradualmente nuevos alimentos sólidos. Próxima consulta en 2 meses para revisión general y aplicación de la vacuna SRP."
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-md m-5 hover:bg-gray-100"
          >
          Volver
        </button>
      </div>
      
    </div>
  );
}