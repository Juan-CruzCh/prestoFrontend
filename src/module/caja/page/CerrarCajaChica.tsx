export const CerrarCajaChica = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-4 text-lg font-semibold text-slate-800">Cerrar caja chica</h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white lg:col-span-2">
          <p className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-slate-800">
            Movimientos (gastos)
          </p>
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="sticky top-0 bg-slate-50">
                <tr className="border-b border-slate-200 text-left text-xs text-slate-500">
                  <th className="px-3 py-2 font-medium">Cód.</th>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Categoría</th>
                  <th className="px-3 py-2 font-medium">Descripción</th>
                  <th className="px-3 py-2 font-medium text-right">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-3 py-2">GST-000125</td>
                  <td className="px-3 py-2">24/07/2026 09:30</td>
                  <td className="px-3 py-2">Mantenimiento</td>
                  <td className="px-3 py-2">Materiales de plomería</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 350.00</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">GST-000124</td>
                  <td className="px-3 py-2">24/07/2026 11:15</td>
                  <td className="px-3 py-2">Materiales</td>
                  <td className="px-3 py-2">Llaves y uniones</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 95.00</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">GST-000123</td>
                  <td className="px-3 py-2">24/07/2026 15:00</td>
                  <td className="px-3 py-2">Otros</td>
                  <td className="px-3 py-2">Transporte</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 35.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm lg:col-span-1">
          <p className="mb-3 font-medium text-slate-800">Datos de la caja chica</p>
          <div className="mb-4 space-y-1 text-slate-600">
            <p>CCH-00012 · Caja chica</p>
            <p>Abierta</p>
            <p>Apertura: 24/07/2026 08:20</p>
            <p>Responsable: María López</p>
            <p>Cantidad de gastos: 5</p>
            <p>Monto inicial: Bs 100.00</p>
          </div>

          <hr className="mb-4 border-slate-200" />

          <p className="mb-3 font-medium text-slate-800">Arqueo</p>

          <div className="mb-3">
            <label className="mb-1 block text-slate-600">Monto contado (Bs)</label>
            <input
              type="number"
              step="0.01"
              defaultValue="145"
              className="w-full rounded border border-slate-200 px-3 py-2 text-right"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-slate-600">Diferencia</label>
            <input
              type="text"
              readOnly
              value="Bs 25.00 · Sobrante"
              className="w-full rounded border border-slate-200 bg-slate-50 px-3 py-2 text-right text-slate-700"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-slate-600">Observación</label>
            <textarea
              rows={3}
              placeholder="Indique el motivo si hay sobrante o faltante"
              className="w-full rounded border border-slate-200 px-3 py-2"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <button
              type="button"
              className="rounded bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700"
            >
              Cerrar caja chica
            </button>
            <button
              type="button"
              className="rounded border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
