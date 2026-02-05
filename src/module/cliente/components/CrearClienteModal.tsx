import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { CrearClienteI, ListarClienteI } from '../interface/cliente'
import { crearCliente } from '../service/clienteService'
import { useEstadoReload } from '../../../core/utils/useEstadoReloadUtils'
import type { AxiosError } from 'axios'
import { AlertaError } from '../../../core/utils/alertasUtils'

export const CrearClienteModal = ({ setCliente
}: { setCliente: (cliente: ListarClienteI) => void }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { triggerReload } = useEstadoReload()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm<CrearClienteI>({
        defaultValues: {
            ci: '',
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            celular: '',
        },
    })

    const abrirModal = () => {
        reset()
        setIsOpen(true)
    }

    const cerrarModal = () => {
        setIsOpen(false)
    }

    const onSubmit = async (data: CrearClienteI) => {
        try {
            const cliente = await crearCliente(data)
            setCliente(cliente)
            triggerReload()
            cerrarModal()
        } catch (err) {
            const e = err as AxiosError<any>
            AlertaError(e.response?.data.mensaje)

        }
    }

    return (
        <>
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={abrirModal}
            >
                Crear Cliente
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Crear Cliente</h2>
                            <button onClick={cerrarModal} className="text-xl">
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* CI */}
                            <div>
                                <label className="block mb-1 font-medium">CI</label>
                                <input
                                    type="text"
                                    {...register('ci', { required: 'El CI es obligatorio' })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {isSubmitted && errors.ci && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.ci.message}
                                    </p>
                                )}
                            </div>

                            {/* Nombre */}
                            <div>
                                <label className="block mb-1 font-medium">Nombre</label>
                                <input
                                    type="text"
                                    {...register('nombre', {
                                        required: 'El nombre es obligatorio',
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {isSubmitted && errors.nombre && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.nombre.message}
                                    </p>
                                )}
                            </div>

                            {/* Apellido Paterno */}
                            <div>
                                <label className="block mb-1 font-medium">Apellido Paterno</label>
                                <input
                                    type="text"
                                    {...register('apellidoPaterno', {
                                        required: 'El apellido paterno es obligatorio',
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {isSubmitted && errors.apellidoPaterno && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.apellidoPaterno.message}
                                    </p>
                                )}
                            </div>

                            {/* Apellido Materno */}
                            <div>
                                <label className="block mb-1 font-medium">Apellido Materno</label>
                                <input
                                    type="text"
                                    {...register('apellidoMaterno', {
                                        required: 'El apellido materno es obligatorio',
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {isSubmitted && errors.apellidoMaterno && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.apellidoMaterno.message}
                                    </p>
                                )}
                            </div>

                            {/* Celular */}
                            <div>
                                <label className="block mb-1 font-medium">Celular</label>
                                <input
                                    type="text"
                                    {...register('celular', {
                                        required: 'El celular es obligatorio',
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {isSubmitted && errors.celular && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.celular.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
