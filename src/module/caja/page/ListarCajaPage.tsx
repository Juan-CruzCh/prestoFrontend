import { MdVisibility } from "react-icons/md";

export const ListarCajaPage = () => {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">Listado de cajas</h1>
          <p className="mt-1 text-sm text-slate-500">
            Historial de aperturas y cierres de caja
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Código
            </label>
            <input
              type="text"
              placeholder="Buscar cód."
              className="w-36 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Desde
            </label>
            <input
              type="date"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Hasta
            </label>
            <input
              type="date"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cód.
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Tipo
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Estado
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Apertura
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Abrió
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Monto ini.
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Monto act.
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Monto tot.
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Pagos
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cierre
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cerró
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Acc.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-blue-50/50">
                <td className="px-3 py-2.5 font-medium text-slate-800">CAJ-00048</td>
                <td className="px-3 py-2.5 text-slate-600">Caja</td>
                <td className="px-3 py-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Abierta
                  </span>
                </td>
                <td className="px-3 py-2.5 text-slate-600">24/07/2026 08:15</td>
                <td className="px-3 py-2.5 text-slate-700">Juan Pérez</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 500.00</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 2,850.00</td>
                <td className="px-3 py-2.5 font-medium text-slate-800">Bs 2,350.00</td>
                <td className="px-3 py-2.5 text-slate-600">18</td>
                <td className="px-3 py-2.5 text-slate-400">—</td>
                <td className="px-3 py-2.5 text-slate-400">—</td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <MdVisibility className="text-base" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-blue-50/50">
                <td className="px-3 py-2.5 font-medium text-slate-800">CCH-00012</td>
                <td className="px-3 py-2.5 text-slate-600">Caja chica</td>
                <td className="px-3 py-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Abierta
                  </span>
                </td>
                <td className="px-3 py-2.5 text-slate-600">24/07/2026 08:20</td>
                <td className="px-3 py-2.5 text-slate-700">María López</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 100.00</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 420.00</td>
                <td className="px-3 py-2.5 font-medium text-slate-800">Bs 320.00</td>
                <td className="px-3 py-2.5 text-slate-600">5</td>
                <td className="px-3 py-2.5 text-slate-400">—</td>
                <td className="px-3 py-2.5 text-slate-400">—</td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <MdVisibility className="text-base" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-blue-50/50">
                <td className="px-3 py-2.5 font-medium text-slate-800">CAJ-00047</td>
                <td className="px-3 py-2.5 text-slate-600">Caja</td>
                <td className="px-3 py-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    Cerrada
                  </span>
                </td>
                <td className="px-3 py-2.5 text-slate-600">23/07/2026 08:10</td>
                <td className="px-3 py-2.5 text-slate-700">Juan Pérez</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 500.00</td>
                <td className="px-3 py-2.5 text-slate-600">Bs 3,120.00</td>
                <td className="px-3 py-2.5 font-medium text-slate-800">Bs 2,620.00</td>
                <td className="px-3 py-2.5 text-slate-600">22</td>
                <td className="px-3 py-2.5 text-slate-600">23/07/2026 18:40</td>
                <td className="px-3 py-2.5 text-slate-700">Juan Pérez</td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <MdVisibility className="text-base" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
