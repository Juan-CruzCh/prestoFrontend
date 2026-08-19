import { useEffect, useState } from "react";
import {  useParams } from "react-router"
import { listarPagosPorCaja } from "../service/caja";
import type { AxiosError } from "axios";
import type { ListarPagos } from "../../pago/interface/pago";
import { AlertaError } from "../../../core/utils/alertasUtils";

export const DetallePagosCaja = () => {
    const { id } = useParams()
    const [pagos, setPagos] = useState<ListarPagos[]>([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        (async () => {
            try {
                if (!id) {
                    return
                }
                const response = await listarPagosPorCaja(id)
                setPagos(response)
                setTotal(response.reduce((acc, item) => acc + item.total, 0))
            } catch (error) {
                const e = error as AxiosError<{ mensaje: string }>
                AlertaError(e.response?.data.mensaje ?? "Error al listar los pagos")
            }
        })()
    }, [id])

    return (
        <div className="w-full">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Detalle de pagos</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Pagos registrados en la caja
                    </p>
                </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    N° Pago
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    CI
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Nombre
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Apellido paterno
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Apellido materno
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Medidor
                                </th>
                                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Fecha
                                </th>
                                <th className="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {pagos.map((item) => (
                                <tr key={item._id} className="hover:bg-blue-50/50">
                                    <td className="px-3 py-2.5">{item.numeroPago}</td>
                                    <td className="px-3 py-2.5">{item.ci}</td>
                                    <td className="px-3 py-2.5 capitalize">{item.nombre}</td>
                                    <td className="px-3 py-2.5">{item.apellidoPaterno}</td>
                                    <td className="px-3 py-2.5 capitalize">{item.apellidoMaterno}</td>
                                    <td className="px-3 py-2.5">{item.numeroMedidor}</td>
                                    <td className="px-3 py-2.5">
                                        {item.fecha}
                                    </td>
                                    <td className="px-3 py-2.5 text-right">Bs {item.total}</td>
                                </tr>
                            ))}

                        </tbody>

                        <tfoot>
                            <tr className="border-t border-slate-200 bg-slate-50">
                                <td colSpan={7} className="px-3 py-3 text-right text-sm font-semibold text-slate-700">
                                    Total
                                </td>
                                <td className="px-3 py-3 text-right text-sm font-semibold text-slate-800">
                                    Bs {total}
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    )
}
