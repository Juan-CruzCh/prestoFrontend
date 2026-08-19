import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { ListarPagos } from "../interface/pago";
import { listarPagos } from "../service/pagoService";
import type { AxiosError } from "axios";
import { AlertaError } from "../../../core/utils/alertasUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";

export const ListarPagosPage = () => {
  const navigate = useNavigate();


  const [codigo, setCodigo] = useState("");
  const [ci, setCi] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [numeroMedidor, setNumeroMedidor] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [disableRangoFechas, setDisableRangoFechas] = useState(false);


  const [pagos, setPagos] = useState<ListarPagos[]>([]);
  const [paginas, setPaginas] = useState(0);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const hoy = new Date();
    hoy.setHours(hoy.getHours() - 4);
    const fecha = hoy.toISOString().split("T")[0];

    setFechaInicio(fecha);
    setFechaFin(fecha);

    listar(fecha, fecha);
  }, []);

  const listar = async (
    fi = fechaInicio,
    ff = fechaFin
  ) => {
    try {
      const resp = await listarPagos(
        codigo,
        ci,
        nombre,
        apellidoMaterno,
        apellidoPaterno,
        numeroMedidor,
        fi,
        ff
      );

      setPaginas(resp.paginas);
      setPagos(resp.data);
    } catch (error) {
      const e = error as AxiosError<any>
      if (e.status == HttpStatus.BAD_REQUEST) {
        AlertaError(e.response?.data.mensaje)
      } else {
        AlertaError(e.message)
      }
    }
  };


  const btnDesabilitarFechas = () => {
    setDisableRangoFechas(!disableRangoFechas);
  };

  const onPageChange = (nuevaPagina: number) => {
    setPagina(nuevaPagina);
    listar();
  };

  const inputFiltro =
    "w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

  return (
    <div className="w-full">
      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <input value={codigo} onChange={e => setCodigo(e.target.value)}
          placeholder="Cod. cliente"
          className={inputFiltro} />
        <input value={ci} onChange={e => setCi(e.target.value)}
          placeholder="CI"
          className={inputFiltro} />
        <input value={nombre} onChange={e => setNombre(e.target.value)}
          placeholder="Nombre"
          className={inputFiltro} />
        <input value={apellidoPaterno} onChange={e => setApellidoPaterno(e.target.value)}
          placeholder="Apellido paterno"
          className={inputFiltro} />
        <input value={apellidoMaterno} onChange={e => setApellidoMaterno(e.target.value)}
          placeholder="Apellido materno"
          className={inputFiltro} />
        <input value={numeroMedidor} onChange={e => setNumeroMedidor(e.target.value)}
          placeholder="Número de medidor"
          className={inputFiltro} />
        <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          <input type="checkbox" onChange={btnDesabilitarFechas} />
          <span>Deshabilitar fechas</span>
        </label>
        <input type="date" disabled={disableRangoFechas}
          value={fechaInicio}
          onChange={e => setFechaInicio(e.target.value)}
          className={inputFiltro} />
        <input type="date" disabled={disableRangoFechas}
          value={fechaFin}
          onChange={e => setFechaFin(e.target.value)}
          className={inputFiltro} />
        <button
          onClick={() => listar()}
          className="w-full rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800">
          Buscar
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Cod. cliente</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">CI</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nombre</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Apellido paterno</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Apellido materno</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Medidor</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Total</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Fecha</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Detalle</th>
                <th className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Recibo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {pagos.map(item => (
                <tr key={item._id} className="hover:bg-blue-50/50">
                  <td className="whitespace-nowrap px-3 py-2.5">{item.codigoCliente}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.ci}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.nombre}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoPaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.apellidoMaterno}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.numeroMedidor}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">{item.total}</td>
                  <td className="whitespace-nowrap px-3 py-2.5">
                    {new Date(item.fecha).toLocaleString()}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="max-w-[260px] overflow-x-auto">
                      <table className="min-w-[220px] w-full border text-xs">
                        <thead>
                          <tr>
                            <th className="px-1 py-0.5">Mes</th>
                            <th className="px-1 py-0.5">Anterior</th>
                            <th className="px-1 py-0.5">Actual</th>
                            <th className="px-1 py-0.5">Consumo</th>
                            <th className="px-1 py-0.5">Costo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.detallePago.map((d, i) => (
                            <tr key={i}>
                              <td className="px-1 py-0.5">{d.mes}</td>
                              <td className="px-1 py-0.5">{d.lecturaAnterior}</td>
                              <td className="px-1 py-0.5">{d.lecturaActual}</td>
                              <td className="px-1 py-0.5">{d.consumoTotal}</td>
                              <td className="px-1 py-0.5">{d.costoPagado} Bs</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5">
                    <button
                      onClick={() => navigate(`/pago/detalle/${item._id}`)}
                      className="rounded bg-sky-700 px-3 py-1 text-xs text-white hover:bg-sky-800">
                      Ver Recibo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-2 border-t border-slate-100 px-3 py-3">
          {Array.from({ length: paginas }).map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`min-w-8 rounded border px-3 py-1 text-sm ${pagina === i + 1 ? "bg-blue-600 text-white" : ""
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
