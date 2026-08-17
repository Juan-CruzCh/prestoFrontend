import { useEffect, useState } from "react";
import type { UsuarioListarI } from "../interface/usuario";
import { eliminarUsuario, listarUsuarios } from "../service/usuarioService";
import type { AxiosError } from "axios";
import { confirmarEliminar, AlertaError } from "../../../core/utils/alertasUtils";
import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { CrearUsuarioModal } from "../components/CrearUsuarioModal";
import { useEstadoModal } from "../../../core/utils/useEstadoModalUtil";
import { EdiatarUsuarioModal } from "../components/EditarUsuarioModal";

export function ListarUsuarioPage() {
    const [usuarios, setUsuarios] = useState<UsuarioListarI[]>([]);
    const [usuario, setUsuario] = useState<UsuarioListarI>();
    const { isReloading, triggerReload } = useEstadoReload()
    const { openModal, isOpen } = useEstadoModal()
    useEffect(() => {
        listar();


    }, [isReloading]);

    const listar = async () => {
        try {
            const data = await listarUsuarios()
            setUsuarios(data);
        } catch (err) {
            const e = err as AxiosError<any>
            AlertaError(e.response?.data.mensaje)
        }
    };

    const btnEliminar = async (usuario: UsuarioListarI) => {
        const confirmar = await confirmarEliminar(usuario.nombre);
        if (!confirmar) return;

        try {
            const response = await eliminarUsuario(usuario._id);
            if (response.status == HttpStatus.OK) {
                triggerReload()
            }
        } catch (err) {
            const e = err as AxiosError<any>
            AlertaError(e.response?.data.mensaje)
        }
    };

    const btnEditar = (usuario: UsuarioListarI) => {
        setUsuario(usuario)
        openModal()
    }

    return (
        <div className="w-full">
            <h3 className="mb-3 text-lg font-medium text-gray-700">Usuarios</h3>

            <CrearUsuarioModal />

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">CI</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nombre</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Apellido Paterno</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Apellido Materno</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Usuario</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Rol</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Direccion</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Celular</th>
                                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Acción</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 bg-white">
                            {usuarios.map((item, index) => (
                                <tr key={item._id ?? index} className="hover:bg-blue-50/50">
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.ci}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.nombre}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoPaterno}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoMaterno}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.usuario}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.rol}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.direccion}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">{item.celular}</td>
                                    <td className="whitespace-nowrap px-3 py-2.5">
                                        <div className="inline-flex flex-nowrap gap-2">
                                            <button
                                                onClick={() => btnEliminar(item)}
                                                className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                                            >
                                                Eliminar
                                            </button>

                                            <button
                                                onClick={() => btnEditar(item)}
                                                className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                                            >
                                                Editar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {
                isOpen && usuario && (<EdiatarUsuarioModal usuario={usuario} />)
            }
        </div>
    );
}
