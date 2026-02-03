
import { useForm } from "react-hook-form";
import type { UsuarioCrearI } from "../interface/usuario";
import { useEstadoModal } from "../../../core/utils/useEstadoModalUtil";
import { crearUsuario } from "../service/usuarioService";

import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import type { AxiosError } from "axios";


export const CrearUsuarioModal = () => {
    const { closeModal, openModal, isOpen } = useEstadoModal()
    const { triggerReload } = useEstadoReload()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UsuarioCrearI>({
        defaultValues: {
            ci: "",
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            celular: "",
            usuario: "",
            password: "",
            rol: "",
            direccion: ""
        }
    });



    const guardarUsuario = async (data: UsuarioCrearI) => {
        try {
            const response = await crearUsuario(data);
            if (response.status == HttpStatus.CREATED) {
                triggerReload()
                reset()
                closeModal();
            }
        } catch (err) {
            const e = err as AxiosError<any>
            console.log(e.response?.data.mensaje);
           
        }
    };

    return (
        <>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={openModal}
            >
                Nuevo
            </button>


            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-40">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Crear Usuario</h2>
                            <button onClick={closeModal} className="text-xl">✕</button>
                        </div>

                        <form onSubmit={handleSubmit(guardarUsuario)} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* CI */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">CI</label>
                                    <input
                                        type="text"
                                        {...register("ci", { required: "CI es obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.ci && <p className="text-red-500 text-sm mt-1">{errors.ci.message}</p>}
                                </div>

                                {/* Nombre */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        {...register("nombre", { required: "Nombre es obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                                </div>

                                {/* Apellido Paterno */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellido Paterno</label>
                                    <input
                                        type="text"
                                        {...register("apellidoPaterno", { required: "Apellido paterno obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.apellidoPaterno && (
                                        <p className="text-red-500 text-sm mt-1">{errors.apellidoPaterno.message}</p>
                                    )}
                                </div>

                                {/* Apellido Materno */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellido Materno</label>
                                    <input
                                        type="text"
                                        {...register("apellidoMaterno", { required: "Apellido materno obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.apellidoMaterno && (
                                        <p className="text-red-500 text-sm mt-1">{errors.apellidoMaterno.message}</p>
                                    )}
                                </div>

                                {/* Celular */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                                    <input
                                        type="text"
                                        {...register("celular", { required: "Celular obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.celular && (
                                        <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>
                                    )}
                                </div>

                                {/* Usuario */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
                                    <input
                                        type="text"
                                        {...register("usuario", { required: "Usuario obligatorio" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.usuario && (
                                        <p className="text-red-500 text-sm mt-1">{errors.usuario.message}</p>
                                    )}
                                </div>

                                {/* Contraseña */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                                    <input
                                        type="password"
                                        {...register("password", { required: "Contraseña obligatoria" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                    )}
                                </div>

                                {/* Rol */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Rol</label>
                                    <select
                                        {...register("rol", { required: "Rol obligatorio" })}
                                        className="w-full px-3 py-2 border rounded"
                                    >
                                        <option value="">Seleccione un rol</option>
                                        <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                        <option value="LECTURADOR">LECTURADOR</option>
                                    </select>
                                    {errors.rol && (
                                        <p className="text-red-500 text-sm mt-1">{errors.rol.message}</p>
                                    )}
                                </div>

                                {/* Dirección */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                    <input
                                        type="text"
                                        {...register("direccion", { required: "Dirección obligatoria" })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                    {errors.direccion && (
                                        <p className="text-red-500 text-sm mt-1">{errors.direccion.message}</p>
                                    )}
                                </div>

                            </div>

                            {/* BOTÓN */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded"
                                >
                                    Guardar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
