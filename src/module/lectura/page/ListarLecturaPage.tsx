
export const ListarLecturaPage = () => {
  return (
    <div className="overflow-x-auto border rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Lecturas de Medidores</h2>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Medidor</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Mes</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Lectura Anterior</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Lectura Actual</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Consumo</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Costo</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white text-sm">
          {/* Lectura 1 */}
          <tr>
            <td className="px-4 py-2">M001</td>
            <td className="px-4 py-2">Enero 2025</td>
            <td className="px-4 py-2">100</td>
            <td className="px-4 py-2">150</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">$50</td>
            <td className="px-4 py-2 space-x-2">
              <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 text-xs">Editar</button>
              <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs">Eliminar</button>
            </td>
          </tr>

          {/* Lectura 2 */}
          <tr>
            <td className="px-4 py-2">M001</td>
            <td className="px-4 py-2">Febrero 2025</td>
            <td className="px-4 py-2">150</td>
            <td className="px-4 py-2">200</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">$45</td>
            <td className="px-4 py-2 space-x-2">
              <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 text-xs">Editar</button>
              <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs">Eliminar</button>
            </td>
          </tr>

          {/* Lectura 3 */}
          <tr>
            <td className="px-4 py-2">M002</td>
            <td className="px-4 py-2">Enero 2025</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">80</td>
            <td className="px-4 py-2">30</td>
            <td className="px-4 py-2">$30</td>
            <td className="px-4 py-2 space-x-2">
              <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 text-xs">Editar</button>
              <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs">Eliminar</button>
            </td>
          </tr>

          {/* Lectura 4 */}
          <tr>
            <td className="px-4 py-2">M002</td>
            <td className="px-4 py-2">Febrero 2025</td>
            <td className="px-4 py-2">80</td>
            <td className="px-4 py-2">100</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">$25</td>
            <td className="px-4 py-2 space-x-2">
              <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 text-xs">Editar</button>
              <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
