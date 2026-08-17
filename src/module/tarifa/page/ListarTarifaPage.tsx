import React, { useEffect, useState } from "react";

import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import {  eliminarTarifaService, listarTarifasRangos } from "../service/tarifaService";
import { confirmarEliminar, AlertaError } from "../../../core/utils/alertasUtils";
import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import type { ListarTarifasRangoI} from "../interface/tarifa";



export const ListarTarifaPage: React.FC = () => {
  const [tarifas, setTarifas] = useState<ListarTarifasRangoI[]>([]);
  const { isReloading, triggerReload } = useEstadoReload()
  const navigate = useNavigate();

  useEffect(() => {
    listarTarifas();
  }, [isReloading]);

  const listarTarifas = async () => {
    try {
      const data = await listarTarifasRangos();
      setTarifas(data);
    } catch (err) {
      const e = err as AxiosError<any>
      AlertaError(e.response?.data.mensaje)

    }
  };

  const eliminarTarifa = async (tarifa: ListarTarifasRangoI) => {
    const confirmacion = await confirmarEliminar(tarifa.nombre)
    if (!confirmacion) return

    try {
      const data = await eliminarTarifaService(tarifa._id);
      if (data.status == HttpStatus.OK) {
        triggerReload()
      }
    } catch (err) {
      const e = err as AxiosError<any>
      AlertaError(e.response?.data.mensaje)
    }
  };

  
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-slate-800">Listado de Tarifas</h1>
        <button
          onClick={() => navigate("/tarifa/crear")}
          className="w-full rounded-md bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:w-auto"
        >
          Crear Tarifa
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nombre</th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Rangos</th>
                <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tarifas.map((item) => (
                <tr key={item._id} className="hover:bg-blue-50/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium">{item.nombre}</td>
                  <td className="px-4 py-3">
                    <div className="flex max-w-[70vw] gap-3 overflow-x-auto py-2 sm:max-w-none">
                      {item.rango.map((r) => (
                        <div
                          key={r._id}
                          className="min-w-[180px] p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col justify-between"
                        >
                          <p className="text-sm">
                            <span className="font-semibold">Rango:</span> {r.rango1} - {r.rango2}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Costo:</span> Bs {r.costo}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">IVA:</span> {r.iva}%
                          </p>
                          
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <div className="inline-flex flex-col gap-2">
                      <button
                        onClick={() => navigate(`/tarifa/editar/${item._id}`)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarTarifa(item)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
