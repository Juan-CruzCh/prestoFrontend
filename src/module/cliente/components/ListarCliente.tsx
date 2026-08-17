import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import { listarClientes as listarClientesService, eliminarCliente as eliminarClienteService } from '../service/clienteService';
import type { ListarClienteI } from '../interface/cliente';

import { confirmarEliminar, AlertaError } from '../../../core/utils/alertasUtils';
import { CrearClienteModal } from './CrearClienteModal';
import { useEstadoReload } from '../../../core/utils/useEstadoReloadUtils';
import { EditarClienteModal } from './EditarClienteModal';
import { useEstadoModal } from '../../../core/utils/useEstadoModalUtil';
import type { AxiosError } from 'axios';
import { HttpStatus } from '../../../core/enum/httpSatatus';



export function ListarCliente({ onClienteSeleccionado }: { onClienteSeleccionado: (cliente: ListarClienteI) => void; }) {
  const { openModal, isOpen } = useEstadoModal()
  const [codigo, setCodigo] = useState('');
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [celular, setCelular] = useState('');
  const [pagina, setPagina] = useState(1);
  const [paginas, setPaginas] = useState(0);
  const [clientes, setClientes] = useState<ListarClienteI[]>([]);
  const [editarCliente, setEditarCliente] = useState<ListarClienteI | null>(null);

  const { isReloading, triggerReload } = useEstadoReload()
  const listarClientes = async () => {
   
    try {
      const response = await listarClientesService(
        codigo, ci, nombre, apellidoPaterno, apellidoMaterno, celular,pagina
      );
      setPaginas(response.paginas);
      setClientes(response.data);
    } catch (err) {
      
    }
  };

  useEffect(() => {
    listarClientes();
  }, [isReloading, codigo, ci, nombre, apellidoPaterno, apellidoMaterno, celular,pagina]);

  const handlePageChange = (newPage: number) => {
    setPagina(newPage);
  };



  const handleEliminar = async (cliente: ListarClienteI) => {
    const confirmacion = await confirmarEliminar(cliente.nombre);
    if (!confirmacion) return;
    try {
      const response = await eliminarClienteService(cliente._id);
      if (response.status == HttpStatus.OK) {
        triggerReload()
      }
    } catch (err) {
      const e = err as AxiosError<any>
      AlertaError(e.response?.data.mensaje)
    }
  };

  const handleActualizar = (cliente: ListarClienteI) => {
    setEditarCliente(cliente);
    openModal()
  };

  const inputFiltro =
    "w-full min-w-0 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs font-normal text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="mb-6">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-slate-800">Clientes</h3>
        <CrearClienteModal setCliente={onClienteSeleccionado} />
      </div>

      <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <input
          type="text"
          placeholder="Buscar cód."
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className={inputFiltro}
        />
        <input
          type="text"
          placeholder="Buscar CI"
          value={ci}
          onChange={(e) => setCi(e.target.value)}
          className={inputFiltro}
        />
        <input
          type="text"
          placeholder="Buscar nom."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={inputFiltro}
        />
        <input
          type="text"
          placeholder="Buscar ap. pat."
          value={apellidoPaterno}
          onChange={(e) => setApellidoPaterno(e.target.value)}
          className={inputFiltro}
        />
        <input
          type="text"
          placeholder="Buscar ap. mat."
          value={apellidoMaterno}
          onChange={(e) => setApellidoMaterno(e.target.value)}
          className={inputFiltro}
        />
        <input
          type="text"
          placeholder="Buscar cel."
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          className={inputFiltro}
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sel.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cód.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  CI
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Nom.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ap. Pat.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ap. Mat.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cel.
                </th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Acc.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clientes.map((item) => (
                <tr
                  key={item._id}
                  className="transition-colors hover:bg-blue-50/50"
                >
                  <td className="whitespace-nowrap px-3 py-2.5">
                    <input
                      type="radio"
                      onClick={() => onClienteSeleccionado(item)}
                      name="cliente"
                      className="h-4 w-4 cursor-pointer accent-blue-600"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-medium text-slate-800">{item.codigo}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-600">{item.ci}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">{item.nombre}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-600">{item.apellidoPaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-600">{item.apellidoMaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-600">{item.celular}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        type="button"
                        title="Eliminar"
                        aria-label="Eliminar"
                        onClick={() => handleEliminar(item)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500 text-white transition-colors hover:bg-rose-600"
                      >
                        <MdDelete className="text-base" />
                      </button>
                      <button
                        type="button"
                        title="Actualizar"
                        aria-label="Actualizar"
                        onClick={() => handleActualizar(item)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
                      >
                        <MdEdit className="text-base" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {clientes.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-3 py-10 text-center text-sm text-slate-400"
                  >
                    No se encontraron clientes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {paginas > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 border-t border-slate-100 px-3 py-3">
            {Array.from({ length: paginas }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`min-w-8 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  pagina === i + 1
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && editarCliente && (
        <EditarClienteModal
          cliente={editarCliente}

        />
      )}
    </div>
  );
};
