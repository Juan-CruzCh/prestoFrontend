import { useEffect, useState } from "react";

import axios from "axios";
import type { ListarMedidorClientesI } from "../interface/medidor";
import type { ListarTarifasI } from "../../tarifa/interface/tarifa";
import { useNavigate } from "react-router";
import { listarTarifas } from "../../tarifa/service/tarifaService";
import { eliminarMedidor, listarMedidorClienteService } from "../service/medidorService";
import { confirmarEliminar } from "../../../core/utils/alertasUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";



export const ListarMedidorPage = () => {
  const [listarMedidorClientes, setListarMedidorClientes] = useState<ListarMedidorClientesI[]>([]);
    const { isReloading, triggerReload } = useEstadoReload()
  const [tarifas, setTarifas] = useState<ListarTarifasI[]>([]);
  const [codigo, setCodigo] = useState("");
  const [ci, setCi] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [direccion, setDireccion] = useState("");
  const [numeroMedidor, setNumeroMedidor] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [estado, setEstado] = useState("");
  const [pagina, setPagina] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    listarMedidorCliente();
    tarifasListar();
  }, [pagina, isReloading]);

  const listarMedidorCliente = async () => {
    try {
      const  data  = await listarMedidorClienteService(codigo, ci, nombre, apellidoPaterno, apellidoMaterno, numeroMedidor, tarifa, estado , "")
      setListarMedidorClientes(data.data);

    } catch (err) {
    
      console.error("Error al listar medidores", err);
    }
  };

  const tarifasListar = async () => {
    try {
      const  data  = await listarTarifas();
      setTarifas(data);
    } catch (err) {
      console.error("Error al listar tarifas", err);
    }
  };

  const btnBuscar = () => {
    setPagina(1);
    listarMedidorCliente();
  };

  const eliminar = async (medidor: ListarMedidorClientesI) => {
    const confirmacion = await confirmarEliminar(medidor.numeroMedidor);
    if (!confirmacion) return;

    try {
      const response =  await eliminarMedidor(medidor._id);
      if(response.status == HttpStatus.OK){
        triggerReload()
      }
    } catch (err) {
      console.error("Ocurrió un error al eliminar el medidor", err);
    }
  };

  const inputFiltro =
    "w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

  return (
    <div className="w-full">
      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <input value={codigo} onChange={e => setCodigo(e.target.value)} type="text" placeholder="Código" className={inputFiltro} />
        <input value={ci} onChange={e => setCi(e.target.value)} type="text" placeholder="CI" className={inputFiltro} />
        <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Nombre" className={inputFiltro} />
        <input value={apellidoPaterno} onChange={e => setApellidoPaterno(e.target.value)} type="text" placeholder="Apellido Paterno" className={inputFiltro} />
        <input value={apellidoMaterno} onChange={e => setApellidoMaterno(e.target.value)} type="text" placeholder="Apellido Materno" className={inputFiltro} />
        <input value={direccion} onChange={e => setDireccion(e.target.value)} type="text" placeholder="Dirección" className={inputFiltro} />
        <input value={numeroMedidor} onChange={e => setNumeroMedidor(e.target.value)} type="text" placeholder="N° Medidor" className={inputFiltro} />
        <select value={tarifa} onChange={e => setTarifa(e.target.value)} className={inputFiltro}>
          <option value="">Todos</option>
          {tarifas.map(item => (
            <option key={item._id} value={item._id}>{item.nombre}</option>
          ))}
        </select>
        <select value={estado} onChange={e => setEstado(e.target.value)} className={inputFiltro}>
          <option value="">Todos</option>
          <option value="ACTIVO">ACTIVO</option>
          <option value="INACTIVO">INACTIVO</option>
          <option value="MANTENIMIENTO">MANTENIMIENTO</option>
          <option value="EN_CORTE">EN_CORTE</option>
        </select>
        <button onClick={btnBuscar} className="w-full rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800">Buscar</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {["Código Cliente", "CI", "Nombre", "Apellido Paterno", "Apellido Materno", "Dirección", "Número de Medidor", "Tarifa", "Estado", "Acción"].map((header, i) => (
                  <th key={i} className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {listarMedidorClientes.map(item => (
                <tr key={item._id} className="hover:bg-blue-50/50">
                  <td className="whitespace-nowrap px-3 py-2.5">{item.codigo}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.ci}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.nombre}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoPaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoMaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.direccion}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.numeroMedidor}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.tarifa}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">
                    <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">{item.estado}</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5">
                    <div className="inline-flex flex-nowrap gap-2">
                      <button onClick={() => eliminar(item)} className="rounded bg-red-600 px-3 py-1 text-xs text-white">Eliminar</button>
                      <button onClick={() => navigate(`/medidor/editar/${item._id}`)} className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700">Editar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
