import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { ListarPagos } from "../interface/pago";
import { listarPagos } from "../service/pagoService";
import type { AxiosError } from "axios";
import { AlertaError } from "../../../core/utils/alertasUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";

export const ListarPagosPage = () => {
  const navigate = useNavigate();

  // filtros
  const [codigo, setCodigo] = useState("");
  const [ci, setCi] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [numeroMedidor, setNumeroMedidor] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [disableRangoFechas, setDisableRangoFechas] = useState(false);

  // datos
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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-1">
              <input value={codigo} onChange={e => setCodigo(e.target.value)}
                placeholder="Cod. cliente"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>
            <th className="px-2 py-1">
              <input value={ci} onChange={e => setCi(e.target.value)}
                placeholder="CI"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>
            <th className="px-2 py-1">
              <input value={nombre} onChange={e => setNombre(e.target.value)}
                placeholder="Nombre"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>
            <th className="px-2 py-1">
              <input value={apellidoPaterno} onChange={e => setApellidoPaterno(e.target.value)}
                placeholder="Apellido paterno"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>
            <th className="px-2 py-1">
              <input value={apellidoMaterno} onChange={e => setApellidoMaterno(e.target.value)}
                placeholder="Apellido materno"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>
            <th className="px-2 py-1">
              <input value={numeroMedidor} onChange={e => setNumeroMedidor(e.target.value)}
                placeholder="Número de medidor"
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>

            <th className="px-2 py-1 flex items-center gap-2">
              <input type="checkbox" onChange={btnDesabilitarFechas} />
              <span className="text-sm">Deshabilitar fechas</span>
            </th>

            <th className="px-2 py-1">
              <input type="date" disabled={disableRangoFechas}
                value={fechaInicio}
                onChange={e => setFechaInicio(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>

            <th className="px-2 py-1">
              <input type="date" disabled={disableRangoFechas}
                value={fechaFin}
                onChange={e => setFechaFin(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm" />
            </th>

            <th className="px-2 py-1">
              <button
                onClick={() => listar()}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm w-full">
                Buscar
              </button>
            </th>
          </tr>
        </thead>

        {/* HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Cod. cliente</th>
            <th className="px-4 py-2">CI</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido paterno</th>
            <th className="px-4 py-2">Apellido materno</th>
            <th className="px-4 py-2">Medidor</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Detalle</th>
            <th className="px-4 py-2">Recibo</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-white text-sm">
          {pagos.map(item => (
            <tr key={item._id}>
              <td className="px-4 py-2">{item.codigoCliente}</td>
              <td className="px-4 py-2">{item.ci}</td>
              <td className="px-4 py-2">{item.nombre}</td>
              <td className="px-4 py-2">{item.apellidoPaterno}</td>
              <td className="px-4 py-2">{item.apellidoMaterno}</td>
              <td className="px-4 py-2">{item.numeroMedidor}</td>
              <td className="px-4 py-2">{item.total}</td>
              <td className="px-4 py-2">
                {new Date(item.fecha).toLocaleString()}
              </td>

              <td className="px-4 py-2">
                <table className="border text-xs w-full">
                  <thead>
                    <tr>
                      <th>Mes</th>
                      <th>Anterior</th>
                      <th>Actual</th>
                      <th>Consumo</th>
                      <th>Costo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.detallePago.map((d, i) => (
                      <tr key={i}>
                        <td>{d.mes}</td>
                        <td>{d.lecturaAnterior}</td>
                        <td>{d.lecturaActual}</td>
                        <td>{d.consumoTotal}</td>
                        <td>{d.costoPagado} Bs</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>

              <td className="px-4 py-2">
                <button
                  onClick={() => navigate(`/pago/detalle/${item._id}`)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                  Ver Recibo
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINADOR SIMPLE */}
      <div className="flex justify-center gap-2 py-3">
        {Array.from({ length: paginas }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 border rounded ${pagina === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
