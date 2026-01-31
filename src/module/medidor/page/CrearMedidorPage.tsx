import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ListarCliente } from "../../cliente/components/ListarCliente"
import type { ListarClienteI } from "../../cliente/interface/cliente"
import type { FormularioMedidorI } from "../interface/medidor"
import { listarTarifas } from "../../tarifa/service/tarifaService"
import type { ListarTarifasI } from "../../tarifa/interface/tarifa"

export const CrearMedidorPage = () => {

    const [cliente, setCliente] = useState<ListarClienteI>()
    const [tarifas, setTarifas] = useState<ListarTarifasI[]>([])
    const [clienteError, setClienteError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormularioMedidorI>()

    useEffect(() => {
        listartarifa()
    }, [])

    const onSubmit = (data: FormularioMedidorI) => {


        reset()

        setClienteError(false)
    }

    const listartarifa = async () => {
        try {
            const response = await listarTarifas()
            console.log(response);

            setTarifas(response)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="w-full p-4 bg-gray-50 min-h-screen">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

                {/* IZQUIERDA */}
                <div className="col-span-8">

                    <ListarCliente onClienteSeleccionado={setCliente} />
                </div>

                {/* DERECHA */}
                <div className="md:col-span-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Crear Medidor</h2>

                        {/* CLIENTE */}
                        <div className="bg-gray-50 border rounded-lg p-4 mb-6">
                            <h3 className="text-sm font-semibold mb-3">Datos del Cliente</h3>

                            {cliente ? (
                                <div className="bg-white border rounded-xl p-4 text-sm grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Código</p>
                                        <p className="font-semibold">{cliente.codigo}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">CI</p>
                                        <p className="font-semibold">{cliente.ci}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Nombre</p>
                                        <p className="font-semibold">{cliente.nombre}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Apellido Paterno</p>
                                        <p className="font-semibold">{cliente.apellidoPaterno}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-xs text-gray-400 uppercase">Apellido Materno</p>
                                        <p className="font-semibold">{cliente.apellidoMaterno}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-red-500 text-sm">Seleccione un cliente</p>
                            )}

                            {clienteError && (
                                <p className="text-red-500 text-sm mt-2">Debe seleccionar un cliente</p>
                            )}
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Número Medidor */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Número de Medidor *</label>
                                <input
                                    {...register("numeroMedidor", {
                                        required: "Número obligatorio",
                                        minLength: { value: 3, message: "Mínimo 3 caracteres" }
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors.numeroMedidor ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.numeroMedidor && (
                                    <p className="text-red-500 text-sm">{errors.numeroMedidor.message}</p>
                                )}
                            </div>

                            {/* Descripción */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Descripción *</label>
                                <input
                                    {...register("descripcion", {
                                        required: "Descripción obligatoria"
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors.descripcion ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.descripcion && (
                                    <p className="text-red-500 text-sm">{errors.descripcion.message}</p>
                                )}
                            </div>

                            {/* Tarifa */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Tarifa *</label>
                                <select
                                    {...register("tarifa", { required: "Seleccione una tarifa" })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors.tarifa ? "border-red-500" : ""
                                        }`}
                                >
                                    <option value="">Seleccione una tarifa</option>
                                    {tarifas.map(t => (
                                        <option key={t._id} value={t._id}>{t.nombre}</option>
                                    ))}
                                </select>
                                {errors.tarifa && (
                                    <p className="text-red-500 text-sm">{errors.tarifa.message}</p>
                                )}
                            </div>

                            {/* Dirección */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Dirección *</label>
                                <input
                                    {...register("direccion", {
                                        required: "Dirección obligatoria",
                                        minLength: { value: 5, message: "Muy corta" }
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors.direccion ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.direccion && (
                                    <p className="text-red-500 text-sm">{errors.direccion.message}</p>
                                )}
                            </div>

                            {/* Fecha */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Fecha de Instalación *</label>
                                <input
                                    type="date"
                                    {...register("fechaInstalacion", {
                                        required: "Fecha obligatoria"
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors.fechaInstalacion ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.fechaInstalacion && (
                                    <p className="text-red-500 text-sm">{errors.fechaInstalacion.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                            >
                                Guardar Medidor
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
