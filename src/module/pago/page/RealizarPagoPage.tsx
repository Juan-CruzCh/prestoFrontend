export const RealizarPagoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Realizar Pago
        </h2>

        {/* Tabla de Clientes */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Clientes</h3>
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Seleccionar</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Código Cliente
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    CI
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Nombre
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Apellido Paterno
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Apellido Materno
                    <input type="text" placeholder="Buscar" className="mt-1 w-full p-1 border border-gray-300 rounded text-sm"/>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-2">
                    <input type="radio" name="cliente" className="form-radio h-5 w-5 text-blue-600" />
                  </td>
                  <td className="px-4 py-2">C001</td>
                  <td className="px-4 py-2">12345678</td>
                  <td className="px-4 py-2">Juan</td>
                  <td className="px-4 py-2">Pérez</td>
                  <td className="px-4 py-2">Gómez</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <input type="radio" name="cliente" className="form-radio h-5 w-5 text-blue-600" />
                  </td>
                  <td className="px-4 py-2">C002</td>
                  <td className="px-4 py-2">87654321</td>
                  <td className="px-4 py-2">María</td>
                  <td className="px-4 py-2">López</td>
                  <td className="px-4 py-2">Ramírez</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lista de Medidores */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Medidores Disponibles</h3>
          <div className="space-y-4">
            {/* Medidor M001 */}
            <div className="border p-4 rounded-lg bg-gray-50">
              <label className="flex items-center space-x-3">
                <input type="radio" name="medidor" className="form-radio h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-700">Medidor M001</span>
              </label>
              <div className="ml-8 mt-2 space-y-1 text-sm text-gray-700">
                <p><strong>Estado:</strong> Activo</p>
                <p><strong>Dirección:</strong> Av. Principal #123</p>
              </div>

              {/* Tabla de Lecturas */}
              <div className="ml-8 mt-2 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border rounded">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Mes</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Anterior</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Actual</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Consumo</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Costo</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Selección</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-xs">
                    <tr>
                      <td className="px-2 py-1">Enero</td>
                      <td className="px-2 py-1">100</td>
                      <td className="px-2 py-1">150</td>
                      <td className="px-2 py-1">50</td>
                      <td className="px-2 py-1">$50</td>
                      <td className="px-2 py-1"><input type="checkbox" name="" id="" /></td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1">Febrero</td>
                      <td className="px-2 py-1">150</td>
                      <td className="px-2 py-1">200</td>
                      <td className="px-2 py-1">50</td>
                      <td className="px-2 py-1">$45</td>
                          <td className="px-2 py-1"><input type="checkbox" name="" id="" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medidor M002 */}
            <div className="border p-4 rounded-lg bg-gray-50">
              <label className="flex items-center space-x-3">
                <input type="radio" name="medidor" className="form-radio h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-700">Medidor M002</span>
              </label>
              <div className="ml-8 mt-2 space-y-1 text-sm text-gray-700">
                <p><strong>Estado:</strong> Suspendido</p>
                <p><strong>Dirección:</strong> Calle Secundaria #456</p>
              </div>

              {/* Tabla de Lecturas */}
              <div className="ml-8 mt-2 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border rounded">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Mes</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Anterior</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Actual</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Consumo</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Costo</th>
                      <th className="px-2 py-1 text-left text-xs font-medium text-gray-700">Selección</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-xs">
                    <tr>
                      <td className="px-2 py-1">Enero</td>
                      <td className="px-2 py-1">50</td>
                      <td className="px-2 py-1">80</td>
                      <td className="px-2 py-1">30</td>
                      <td className="px-2 py-1">$30</td>
                      <td className="px-2 py-1"><input type="checkbox" name="" id="" /></td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1">Febrero</td>
                      <td className="px-2 py-1">80</td>
                      <td className="px-2 py-1">100</td>
                      <td className="px-2 py-1">20</td>
                      <td className="px-2 py-1">$25</td>
                         <td className="px-2 py-1"><input type="checkbox" name="" id="" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Total Seleccionado */}
        <div className="mb-6 flex justify-end text-lg font-semibold text-gray-800">
          Total: Bs <span id="totalSeleccionado">0</span>
        </div>

        {/* Botón Realizar Pago */}
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 font-medium shadow-md transition">
            Realizar Pago
          </button>
        </div>
      </div>
    </div>
  );
};
