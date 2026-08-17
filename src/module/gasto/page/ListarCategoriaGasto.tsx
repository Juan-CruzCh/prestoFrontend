import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import type { AxiosError } from "axios";
import type { CategoriaGastoI } from "../interface/gasto";
import {
  eliminarCategoriaGasto,
  ListarCategoriaGasto as listarCategoriasGasto,
} from "../service/gastoService";
import { CrearCategoriaGasto } from "../modal/CrearCategoriaGasto";
import { EditarCategoriaGasto } from "../modal/EditarCategoriaGasto";
import { useEstadoModal } from "../../../core/utils/useEstadoModalUtil";
import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";
import { confirmarEliminar, AlertaError } from "../../../core/utils/alertasUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";

export const ListarCategoriaGasto = () => {
  const [categorias, setCategorias] = useState<CategoriaGastoI[]>([]);
  const [categoriaEditar, setCategoriaEditar] = useState<CategoriaGastoI | null>(null);
  const { openModal, isOpen } = useEstadoModal();
  const { isReloading, triggerReload } = useEstadoReload();

  useEffect(() => {
    listar();
  }, [isReloading]);

  const listar = async () => {
    try {
      const response = await listarCategoriasGasto();
      setCategorias(response);
    } catch (err) {
      const e = err as AxiosError<{ mensaje?: string }>;
      AlertaError(e.response?.data.mensaje ?? "No se pudieron cargar las categorías");
    }
  };

  const handleEditar = (categoria: CategoriaGastoI) => {
    setCategoriaEditar(categoria);
    openModal();
  };

  const handleEliminar = async (categoria: CategoriaGastoI) => {
    const confirmacion = await confirmarEliminar(categoria.nombre);
    if (!confirmacion || !categoria._id) return;
    try {
      const response = await eliminarCategoriaGasto(categoria._id);
      if (response.status == HttpStatus.OK) {
        triggerReload();
      }
    } catch (err) {
      const e = err as AxiosError<{ mensaje?: string }>;
      AlertaError(e.response?.data.mensaje ?? "No se pudo eliminar la categoría");
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            Categorías de gasto
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Administra las categorías usadas al registrar gastos
          </p>
        </div>

        <CrearCategoriaGasto
          activo={!categoriaEditar}
          onBeforeOpen={() => setCategoriaEditar(null)}
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Nombre
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Acc.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {categorias.map((item) => (
                <tr key={item._id} className="hover:bg-blue-50/50">
                  <td className="px-3 py-2.5 font-medium text-slate-800">
                    {item.nombre}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <button
                        type="button"
                        title="Editar"
                        aria-label="Editar"
                        onClick={() => handleEditar(item)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
                      >
                        <MdEdit className="text-base" />
                      </button>
                      <button
                        type="button"
                        title="Eliminar"
                        aria-label="Eliminar"
                        onClick={() => handleEliminar(item)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500 text-white transition-colors hover:bg-rose-600"
                      >
                        <MdDelete className="text-base" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
             
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && categoriaEditar && (
        <EditarCategoriaGasto categoria={categoriaEditar} />
      )}
    </div>
  );
};
