import { MdVisibility } from "react-icons/md";

export const ListarCajaChica = () => {
  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-base font-semibold text-slate-800">Listado de caja chica</h1>

        <div className="flex flex-wrap items-end gap-2">
          <div>
            <label className="mb-0.5 block text-[11px] text-slate-500">Código</label>
            <input
              type="text"
              placeholder="Buscar cód."
              className="w-28 rounded border border-slate-200 px-2 py-1.5 text-xs text-slate-700"
            />
          </div>
          <div>
            <label className="mb-0.5 block text-[11px] text-slate-500">Desde</label>
            <input
              type="date"
              className="rounded border border-slate-200 px-2 py-1.5 text-xs text-slate-700"
            />
          </div>
          <div>
            <label className="mb-0.5 block text-[11px] text-slate-500">Hasta</label>
            <input
              type="date"
              className="rounded border border-slate-200 px-2 py-1.5 text-xs text-slate-700"
            />
          </div>
          <button
            type="button"
            className="rounded bg-slate-800 px-3 py-1.5 text-xs text-white hover:bg-slate-700"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left text-[11px] text-slate-500">
                <th className="px-2 py-1.5 font-medium">Cód.</th>
                <th className="px-2 py-1.5 font-medium">Estado</th>
                <th className="px-2 py-1.5 font-medium">Apertura</th>
                <th className="px-2 py-1.5 font-medium">Responsable</th>
                <th className="px-2 py-1.5 font-medium">Monto ini.</th>
                <th className="px-2 py-1.5 font-medium">Gastos</th>
                <th className="px-2 py-1.5 font-medium">Monto act.</th>
                <th className="px-2 py-1.5 font-medium">Diferencia</th>
                <th className="px-2 py-1.5 font-medium">Cierre</th>
                <th className="px-2 py-1.5 font-medium">Acc.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50">
                <td className="px-2 py-1.5 font-medium text-slate-800">CCH-00012</td>
                <td className="px-2 py-1.5">Abierta</td>
                <td className="px-2 py-1.5">24/07/2026 08:20</td>
                <td className="px-2 py-1.5">María López</td>
                <td className="px-2 py-1.5">Bs 100.00</td>
                <td className="px-2 py-1.5">5</td>
                <td className="px-2 py-1.5">Bs 420.00</td>
                <td className="px-2 py-1.5">—</td>
                <td className="px-2 py-1.5">—</td>
                <td className="px-2 py-1.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-700 text-white hover:bg-slate-800"
                  >
                    <MdVisibility className="text-sm" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-2 py-1.5 font-medium text-slate-800">CCH-00011</td>
                <td className="px-2 py-1.5">Cerrada</td>
                <td className="px-2 py-1.5">23/07/2026 08:00</td>
                <td className="px-2 py-1.5">Juan Pérez</td>
                <td className="px-2 py-1.5">Bs 100.00</td>
                <td className="px-2 py-1.5">8</td>
                <td className="px-2 py-1.5">Bs 75.00</td>
                <td className="px-2 py-1.5">Bs 25.00 sobrante</td>
                <td className="px-2 py-1.5">23/07/2026 17:30</td>
                <td className="px-2 py-1.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-700 text-white hover:bg-slate-800"
                  >
                    <MdVisibility className="text-sm" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-2 py-1.5 font-medium text-slate-800">CCH-00010</td>
                <td className="px-2 py-1.5">Cerrada</td>
                <td className="px-2 py-1.5">20/07/2026 08:05</td>
                <td className="px-2 py-1.5">María López</td>
                <td className="px-2 py-1.5">Bs 100.00</td>
                <td className="px-2 py-1.5">3</td>
                <td className="px-2 py-1.5">Bs 100.00</td>
                <td className="px-2 py-1.5">Cuadrado</td>
                <td className="px-2 py-1.5">20/07/2026 16:00</td>
                <td className="px-2 py-1.5">
                  <button
                    type="button"
                    title="Ver detalle"
                    className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-700 text-white hover:bg-slate-800"
                  >
                    <MdVisibility className="text-sm" />
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
