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
        <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Usuarios</h3>

            <CrearUsuarioModal />

            <div className="overflow-x-auto  rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">CI</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Apellido Paterno</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Apellido Materno</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Usuario</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Rol</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Direccion</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Celular</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Acción</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                        {usuarios.map((item, index) => (
                            <tr key={item._id ?? index}>
                                <td className="px-4 py-2">{item.ci}</td>
                                <td className="px-4 py-2">{item.nombre}</td>
                                <td className="px-4 py-2">{item.apellidoPaterno}</td>
                                <td className="px-4 py-2">{item.apellidoMaterno}</td>
                                <td className="px-4 py-2">{item.usuario}</td>
                                <td className="px-4 py-2">{item.rol}</td>
                                <td className="px-4 py-2">{item.direccion}</td>
                                <td className="px-4 py-2">{item.celular}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button
                                        onClick={() => btnEliminar(item)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                    >
                                        Eliminar
                                    </button>

                                    <button
                                        onClick={() => btnEditar(item)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {
                isOpen && usuario && (<EdiatarUsuarioModal usuario={usuario} />)
            }
        </div>
    );
}
