export const CerrarCaja = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-4 text-lg font-semibold text-slate-800">Cerrar caja</h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white lg:col-span-2">
          <p className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-slate-800">
            Movimientos (cobros)
          </p>
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="sticky top-0 bg-slate-50">
                <tr className="border-b border-slate-200 text-left text-xs text-slate-500">
                  <th className="px-3 py-2 font-medium">Cód.</th>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Cliente</th>
                  <th className="px-3 py-2 font-medium">Medidor</th>
                  <th className="px-3 py-2 font-medium text-right">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-3 py-2">PAG-1024</td>
                  <td className="px-3 py-2">24/07/2026 09:12</td>
                  <td className="px-3 py-2">María López</td>
                  <td className="px-3 py-2">M-00458</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 120.00</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">PAG-1025</td>
                  <td className="px-3 py-2">24/07/2026 10:05</td>
                  <td className="px-3 py-2">Carlos Rojas</td>
                  <td className="px-3 py-2">M-00231</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 85.50</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">PAG-1026</td>
                  <td className="px-3 py-2">24/07/2026 11:40</td>
                  <td className="px-3 py-2">Ana Vargas</td>
                  <td className="px-3 py-2">M-00712</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 200.00</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">PAG-1027</td>
                  <td className="px-3 py-2">24/07/2026 14:22</td>
                  <td className="px-3 py-2">Pedro Mamani</td>
                  <td className="px-3 py-2">M-00109</td>
                  <td className="px-3 py-2 text-right text-slate-800">Bs 95.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm lg:col-span-1">
          <p className="mb-3 font-medium text-slate-800">Datos de la caja</p>
          <div className="mb-4 space-y-1 text-slate-600">
            <p>CAJ-00048 · Caja de cobros</p>
            <p>Abierta</p>
            <p>Apertura: 24/07/2026 08:15</p>
            <p>Responsable: Juan Pérez</p>
            <p>Cantidad de pagos: 18</p>
            <p>Monto inicial: Bs 500.00</p>
          </div>

          <hr className="mb-4 border-slate-200" />

          <p className="mb-3 font-medium text-slate-800">Arqueo</p>

          <div className="mb-4">
            <label className="mb-1 block text-slate-600">Monto contado (Bs)</label>
            <input
              type="number"
              step="0.01"
              className="w-full rounded border border-slate-200 px-3 py-2 text-right"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-slate-600">Observación</label>
            <textarea rows={3} className="w-full rounded border border-slate-200 px-3 py-2" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <button
              type="button"
              className="rounded bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700"
            >
              Cerrar caja
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
