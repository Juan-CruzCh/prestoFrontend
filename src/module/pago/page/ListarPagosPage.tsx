import React from 'react'

export const ListarPagosPage = () => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Cliente</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Medidor</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total Pagado</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fecha de Pago</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Detalle</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Recibo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white text-sm">
          {/* Pago de un mes */}
          <tr>
            <td className="px-4 py-2">Juan Pérez Gómez</td>
            <td className="px-4 py-2">M001</td>
            <td className="px-4 py-2">$50</td>
            <td className="px-4 py-2">05/02/2025</td>
            <td className="px-4 py-2">
              <table className="min-w-full divide-y divide-gray-200 border rounded text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 py-1">Mes</th>
                    <th className="px-2 py-1">Anterior</th>
                    <th className="px-2 py-1">Actual</th>
                    <th className="px-2 py-1">Consumo</th>
                    <th className="px-2 py-1">Costo</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-1">Enero 2025</td>
                    <td className="px-2 py-1">100</td>
                    <td className="px-2 py-1">150</td>
                    <td className="px-2 py-1">50</td>
                    <td className="px-2 py-1">$50</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">
                Ver Recibo
              </button>
            </td>
          </tr>

          {/* Pago de dos meses */}
          <tr>
            <td className="px-4 py-2">María López Ramírez</td>
            <td className="px-4 py-2">M002</td>
            <td className="px-4 py-2">$55</td>
            <td className="px-4 py-2">06/03/2025</td>
            <td className="px-4 py-2">
              <table className="min-w-full divide-y divide-gray-200 border rounded text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 py-1">Mes</th>
                    <th className="px-2 py-1">Anterior</th>
                    <th className="px-2 py-1">Actual</th>
                    <th className="px-2 py-1">Consumo</th>
                    <th className="px-2 py-1">Costo</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-1">Enero 2025</td>
                    <td className="px-2 py-1">50</td>
                    <td className="px-2 py-1">80</td>
                    <td className="px-2 py-1">30</td>
                    <td className="px-2 py-1">$30</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">Febrero 2025</td>
                    <td className="px-2 py-1">80</td>
                    <td className="px-2 py-1">100</td>
                    <td className="px-2 py-1">20</td>
                    <td className="px-2 py-1">$25</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">
                Ver Recibo
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
