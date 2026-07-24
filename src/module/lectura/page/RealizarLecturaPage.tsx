import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { BuscarMedidorClienteI, FormularioLecturaI } from "../interface/lectura";
import { buscarMedidorCliente, registrarLectura } from "../service/lecturaService";
import type { AxiosError } from "axios";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { advertencia, AlertaError } from "../../../core/utils/alertasUtils";



export const RealizarLecturaPage = () => {
    const navigate = useNavigate();

    const [numeroMedidor, setNumeroMedidor] = useState("");
    const [lecturaCliente, setLecturaCliente] = useState<BuscarMedidorClienteI>();
    const [error, setError] = useState("");
    const [mes, setMes] = useState("");
    const [gestion, setGestion] = useState("");
    const [gestiones, setGestiones] = useState<number[]>([]);

    const mesesAno = [
        "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
        "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<FormularioLecturaI>({
        defaultValues: {
            lecturaAnterior: 0,
            lecturaActual: 0,
        }
    });


    useEffect(() => {
        const date = new Date();
        setMes(mesesAno[date.getMonth()]);
        setGestion(date.getFullYear().toString());

        setGestiones([
            date.getFullYear(),
            date.getFullYear() - 1,
            date.getFullYear() - 2,
        ]);
    }, []);


    const buscarMedidor = async () => {
        try {
            setError("");
            const response = await buscarMedidorCliente(numeroMedidor);
            if (response) {
                setLecturaCliente(response);
                setValue("lecturaAnterior", response.lecturaActual || 0);
            }
        } catch (err) {
            const e = err as AxiosError<any>

            if (e.status == HttpStatus.NOT_FOUND) {
                setError(e.response?.data.mensaje);
            } else if (e.status == HttpStatus.BAD_REQUEST) {
                AlertaError(e.response?.data.mensaje)
            } else {
                AlertaError(e.message)
            }

        }
    };


    const onSubmit = async (form: FormularioLecturaI) => {

        if (lecturaCliente && lecturaCliente.medidor) {
            const data = {
                gestion: Number(gestion),
                medidor: lecturaCliente.medidor,
                lecturaActual: Number(form.lecturaActual),
                lecturaAnterior: Number(form.lecturaAnterior),
                mes,
            };

            try {
                const response = await registrarLectura(data);
                if (response) {
                    navigate(`/lectura/detalle/${response.medidor}/${response.lectura}`);
                }
            } catch (err) {
                const e = err as AxiosError<any>

                if (e.status == HttpStatus.CONFLICT) {
                    advertencia(e.response?.data.mensaje);
                } else if (e.status == HttpStatus.BAD_REQUEST) {
                    AlertaError(e.response?.data.mensaje)
                } else {
                    AlertaError(e.message)
                }
            }
        }
    };

    const inputClass =
        "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";
    const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-800">
                    Crear lectura
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Busca el medidor e ingresa la lectura del período
                </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6 space-y-5">

                {/* Número de medidor */}
                <div>
                    <label className={labelClass}>
                        Número de medidor
                    </label>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                            value={numeroMedidor}
                            onChange={(e) => setNumeroMedidor(e.target.value)}
                            type="text"
                            placeholder="Ingrese número de medidor"
                            className={inputClass}
                        />

                        <button
                            type="button"
                            onClick={buscarMedidor}
                            className="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            Buscar
                        </button>
                    </div>

                    {error && <p className="mt-1.5 text-xs text-rose-500">{error}</p>}
                </div>

                {/* Información del cliente */}
                {lecturaCliente && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Datos del cliente
                        </p>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div>
                                <p className="text-xs text-slate-400">Nombre</p>
                                <p className="mt-0.5 text-sm font-medium text-slate-800">
                                    {lecturaCliente.nombre}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">N° medidor</p>
                                <p className="mt-0.5 text-sm font-medium text-slate-800">
                                    {lecturaCliente.numeroMedidor}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Estado</p>
                                <span className="mt-0.5 inline-flex rounded-md bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700">
                                    {lecturaCliente.estado}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Año */}
                    <div>
                        <label className={labelClass}>Año</label>
                        <select
                            value={gestion}
                            onChange={(e) => setGestion(e.target.value)}
                            className={inputClass}
                        >
                            {gestiones.map((g) => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Mes</label>
                        <select
                            value={mes}
                            onChange={(e) => setMes(e.target.value)}
                            className={inputClass}
                        >
                            <option value="">-- Seleccione un mes --</option>
                            {mesesAno.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 border-t border-slate-100 pt-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={labelClass}>
                                Lectura anterior
                            </label>
                            <input
                                type="number"
                                disabled
                                {...register("lecturaAnterior", { required: true, min: 0 })}
                                className={`${inputClass} bg-slate-100 text-right text-slate-500`}
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Lectura actual
                            </label>
                            <input
                                type="number"
                                {...register("lecturaActual", { required: true, min: 0 })}
                                className={`${inputClass} text-right`}
                            />
                            {errors.lecturaActual && (
                                <p className="mt-1.5 text-xs text-rose-500">
                                    La lectura es obligatoria
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
