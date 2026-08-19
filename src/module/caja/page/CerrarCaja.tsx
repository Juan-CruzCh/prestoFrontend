import { useEffect, useState } from "react";
import { cerrarCaja, verCajaPorUsuarioConSusPagos } from "../service/caja";
import type { listarCajaPorUsuarioI } from "../interface/caja";
import { AxiosError, HttpStatusCode } from "axios";
import { AlertaError, exito } from "../../../core/utils/alertasUtils";

export const CerrarCaja = () => {
  const [caja, setCaja] = useState<listarCajaPorUsuarioI>()
  
  const [monto, setMonto] = useState<number>(0)
  useEffect(() => {
    (async () => {
      try {
        const response = await verCajaPorUsuarioConSusPagos()
        if (response.codigo) {
          setCaja(response);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  const btnCerraCaja = async () => {
    try {
      const response = await cerrarCaja(monto)
      if (response.status == HttpStatusCode.Ok) {
        exito("Caja cerrada")
      }
    } catch (error) {
      const e = error as AxiosError<{ mensaje: string }>
      AlertaError(e.response?.data.mensaje ?? 'Error')
    }
  }
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-4 text-lg font-semibold text-slate-800">Cerrar caja</h1>

      {
        caja && <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
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
                  {
                    caja.pagos.map((item) => (
                      <tr>
                        <td className="px-3 py-2">{item.numeroPago}</td>
                        <td className="px-3 py-2">{item.fecha}</td>
                        <td className="px-3 py-2">{item.nombre} {item.apellidoPaterno} {item.apellidoMaterno}</td>
                        <td className="px-3 py-2">{item.numeroMedidor}</td>
                        <td className="px-3 py-2 text-right text-slate-800">Bs {item.total}</td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm lg:col-span-1">
            <p className="mb-3 font-medium text-slate-800">Datos de la caja</p>
            <div className="mb-4 space-y-1 text-slate-600">
              <p>{caja.codigo} · Caja de cobros</p>
              <p>{caja.estado}</p>
              <p>Apertura: {caja.fechaInicio}</p>
              <p>Responsable: {caja.usuario}</p>
              <p>Cantidad de pagos: {caja.cantidadPagos}</p>
              <p>Monto inicial: {caja.montoInicial}</p>
            </div>

            <hr className="mb-4 border-slate-200" />

            <p className="mb-3 font-medium text-slate-800">Arqueo</p>

            <div className="mb-4">
              <label className="mb-1 block text-slate-600">Monto contado (Bs)</label>
              <input
                value={monto}
                onChange={(e) => setMonto(Number(e.target.value))}
                type="number"
                step="0.01"
                className="w-full rounded border border-slate-200 px-3 py-2 text-right"
              />
            </div>


            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <button
                onClick={btnCerraCaja}
                type="button"
                className="rounded bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700"
              >
                Cerrar caja
              </button>

            </div>
          </div>
        </div>
      }
    </div>
  );
};
