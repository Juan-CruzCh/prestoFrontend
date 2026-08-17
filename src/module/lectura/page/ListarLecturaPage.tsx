import { useEffect, useState } from "react";
import type { ListarLecturaMedidorI } from "../interface/lectura";
import { useNavigate } from "react-router";
import { eliminarLecturaService, listarLecturasService } from "../service/lecturaService";
import { AlertaError, confirmarEliminar } from "../../../core/utils/alertasUtils";
import type { AxiosError } from "axios";
import { HttpStatus } from "../../../core/enum/httpSatatus";




export const ListarLecturasPage = () => {
    const [listarLecturas, setListarLecturas] = useState<ListarLecturaMedidorI[]>([]);
    const [pagina, setPagina] = useState(0);
    const [fechaInicio, setFechaInicio] = useState<string>("");
    const [fechaFin, setFechaFin] = useState<string>("");
    const [totalPaginas, setTotalPaginas] = useState(0);

    const navigate = useNavigate();


    useEffect(() => {
        const hoy = new Date();
        hoy.setHours(hoy.getHours() - 4);
        const hoyStr = hoy.toISOString().split("T")[0];
        setFechaInicio(hoyStr);
        setFechaFin(hoyStr);

        listarLecturasRegistradas(hoyStr, hoyStr);
    }, []);

    const listarLecturasRegistradas = async (inicio = fechaInicio, fin = fechaFin) => {
        try {
            const data = await listarLecturasService(inicio, fin);


            setListarLecturas(data);
            setTotalPaginas(Math.ceil(data.length / 20));
        } catch (err) {
            const e = err as AxiosError<any>
            if (e.status == HttpStatus.BAD_REQUEST) {
                AlertaError(e.response?.data.mensaje)
            } else {
                AlertaError(e.message)
            }
        }
    };

    const onPageChange = (pageIndex: number) => {
        setPagina(pageIndex);
        listarLecturasRegistradas(fechaInicio, fechaFin);
    };

    const eliminarLectura = async (lectura: ListarLecturaMedidorI) => {
        const confirmacion = await confirmarEliminar(lectura.numeroMedidor)
        if (!confirmacion) return;
        try {
            await eliminarLecturaService(lectura._id);

        } catch (err) {
           const e = err as AxiosError<any>
            if (e.status == HttpStatus.BAD_REQUEST) {
                AlertaError(e.response?.data.mensaje)
            } else {
                AlertaError(e.message)
            }
        }
    };

    return (
        <div className="w-full">
            <h2 className="mb-4 text-xl font-semibold text-slate-800">
                Lecturas de Medidores
            </h2>

            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <input
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <input
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <button
                    onClick={() => listarLecturasRegistradas(fechaInicio, fechaFin)}
                    className="w-full rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 sm:w-auto"
                >
                    🔍 Buscar
                </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Medidor</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Mes</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Lectura Anterior</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Lectura Actual</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Consumo</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Costo</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Estado</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {listarLecturas.map((item) => (
                                <tr key={item._id} className="hover:bg-blue-50/50">
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.numeroMedidor}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.mes}-{item.gestion}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.lecturaAnterior}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.lecturaActual}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.consumoTotal}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">bs {item.costoApagar}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.estado}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">
                                        <div className="inline-flex flex-nowrap gap-2">
                                            <button
                                                onClick={() => eliminarLectura(item)}
                                                className="rounded bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-700"
                                            >
                                                Eliminar
                                            </button>
                                            <button
                                                onClick={() => navigate(`/lectura/detalle/${item.idMedidor}/${item._id}`)}
                                                className="rounded bg-sky-700 px-2 py-1 text-xs text-white hover:bg-sky-800"
                                            >
                                                Recibo
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-wrap justify-center gap-2 border-t border-slate-100 px-3 py-3 sm:justify-end">
                    {Array.from({ length: totalPaginas }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => onPageChange(idx)}
                            className={`min-w-8 rounded px-3 py-1 text-sm ${pagina === idx ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
