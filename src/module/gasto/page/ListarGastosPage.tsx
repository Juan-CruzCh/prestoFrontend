import { useEffect, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { ListarGastos } from "../service/gastoService";
import type { listarGastoI } from "../interface/gasto";

export const ListarGastosPage = () => {
  const [gastos, setgastos] = useState<listarGastoI[]>([])
  useEffect(() => {
    (async () => {
      try {
        const response = await ListarGastos()
        setgastos(response)
      } catch (error) {
        console.log(error);

      }
    })()
  }, [])
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">Listado de gastos</h1>
          <p className="mt-1 text-sm text-slate-500">Gastos registrados en caja chica</p>
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
                  Fecha
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Categoría
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Descripción
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Monto
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Comprobante
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Usuario
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Acc.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {
                gastos.map((item) => (
                  <tr className="hover:bg-blue-50/50">
                    <td className="px-3 py-2.5">{item.codigo}</td>
                    <td className="px-3 py-2.5 text-slate-600">{item.fecha}</td>
                    <td className="px-3 py-2.5 text-slate-600">{item.categoriaGasto}</td>
                    <td className="px-3 py-2.5 text-slate-700">{item.descripcion}</td>
                    <td className="px-3 py-2.5 font-medium text-slate-800">Bs {item.monto}</td>
                    <td className="px-3 py-2.5 text-slate-600">{item.comprobante}</td>
                    <td className="px-3 py-2.5 text-slate-600">{item.usuario}</td>
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
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
