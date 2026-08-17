import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { buscarMedidorClienteI } from "../interface/pago";
import { ListarCliente } from "../../cliente/components/ListarCliente";
import type { ListarClienteI } from "../../cliente/interface/cliente";
import { advertencia, confirmarPago, AlertaError } from "../../../core/utils/alertasUtils";
import { lecturasPendientesPago, realizarPago } from "../service/pagoService";
import type { AxiosError } from "axios";
import { HttpStatus } from "../../../core/enum/httpSatatus";

export const RealizarPagoPage = () => {
  const navigate = useNavigate();

  const [lecturasCliente, setLecturasCliente] = useState<buscarMedidorClienteI[]>([]);
  const [medidorSeleccionado, setMedidorSeleccionado] = useState("");
  const [lecturaSeleccionadas, setLecturaSeleccionadas] = useState<string[]>([]);
  const [meses, setMeses] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const [cliente, setCliente] = useState<ListarClienteI>();

  const [idMedidor, setIdMedidor] = useState("");


  const btnMedidor = (numeroMedidor: string) => {
    if (medidorSeleccionado !== numeroMedidor) {
      setMedidorSeleccionado(numeroMedidor);
      setLecturaSeleccionadas([]);
      setMeses([]);
      setTotal(0);
    }
  };

  const btnLectura = (
    checked: boolean,
    id: string,
    monto: number,
    mes: string,
    idMedidor: string
  ) => {
    setIdMedidor(idMedidor);

    if (checked) {
      setTotal((prev) => prev + monto);
      setLecturaSeleccionadas((prev) => [...prev, id]);
      setMeses((prev) => [...prev, mes]);
    } else {
      setTotal((prev) => prev - monto);
      setLecturaSeleccionadas((prev) => prev.filter((l) => l !== id));
      setMeses((prev) => prev.filter((m) => m !== mes));
    }
  };


  useEffect(() => {

    if (cliente) {

      listarLecturasPendients(cliente._id)

    }
  }, [cliente])

  const listarLecturasPendients = async (id: string) => {
    try {
      const response = await lecturasPendientesPago(id)
      setLecturasCliente(response)
    } catch (error) {
      const e = error as AxiosError<any>
      if (e.status == HttpStatus.BAD_REQUEST) {
        AlertaError(e.response?.data.mensaje)
      } else {
        AlertaError(e.message)
      }


    }
  }

  const btnRealizarPago = async () => {
    if (!cliente) {
      advertencia("Seleccione un cliente");
      return;
    }
    if (lecturaSeleccionadas.length <= 0) {
      advertencia("Debe seleccionar al menos una lectura");
      return;
    }
    const clienteCompleto = `${cliente.nombre} ${cliente.apellidoPaterno} ${cliente.apellidoMaterno}`
    const confirmacion = await confirmarPago(clienteCompleto, meses, total);
    if (!confirmacion) return;

    try {
      const idPago = await realizarPago(
        lecturaSeleccionadas,
        cliente._id,
        idMedidor
      );
      navigate(`/pago/detalle/${idPago}`);
    } catch (err) {
      const e = err as AxiosError<any>

      if (e.status == HttpStatus.BAD_REQUEST) {
        AlertaError(e.response?.data.mensaje)
      } else {
        AlertaError(e.message)
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-6 text-xl font-semibold text-slate-800 sm:text-2xl">
        Realizar Pago
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">

        {/* CLIENTES */}
        <div className="min-w-0 lg:col-span-3">


          <ListarCliente onClienteSeleccionado={setCliente} />


        </div>

        {/* MEDIDORES */}
        <div className="min-w-0 space-y-6 lg:col-span-2">

          {lecturasCliente.map((item) => (
            <div
              key={item._id}
              className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition opacity-90 sm:p-6"
            >
              {/* MEDIDOR */}
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="medidor"
                    className="h-5 w-5 text-blue-600"
                    checked={medidorSeleccionado === item.numeroMedidor}
                    onChange={() => btnMedidor(item.numeroMedidor)}
                  />
                  <span className="text-lg font-semibold text-gray-800 sm:text-xl">
                    Medidor {item.numeroMedidor}
                  </span>
                </label>

                <span className="px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  {item.estado}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {item.direccion}
              </p>

              {/* LECTURAS */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm border rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="whitespace-nowrap px-2 py-1.5">Mes</th>
                      <th className="whitespace-nowrap px-2 py-1.5">Anterior</th>
                      <th className="whitespace-nowrap px-2 py-1.5">Actual</th>
                      <th className="whitespace-nowrap px-2 py-1.5">Consumo</th>
                      <th className="whitespace-nowrap px-2 py-1.5">Costo</th>
                      <th className="whitespace-nowrap px-2 py-1.5">✔</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.lecturas.map((l) => (
                      <tr key={l._id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-2 py-1.5">{l.mes}</td>
                        <td className="whitespace-nowrap px-2 py-1.5 text-center">{l.lecturaAnterior}</td>
                        <td className="whitespace-nowrap px-2 py-1.5 text-center">{l.lecturaActual}</td>
                        <td className="whitespace-nowrap px-2 py-1.5 text-center">{l.consumoTotal}</td>
                        <td className="whitespace-nowrap px-2 py-1.5 text-center font-medium">
                          {l.costoApagar} Bs
                        </td>
                        <td className="whitespace-nowrap px-2 py-1.5 text-center">
                          <input
                            type="checkbox"
                            disabled={medidorSeleccionado !== item.numeroMedidor}
                            checked={lecturaSeleccionadas.includes(l._id)}
                            onChange={(e) =>
                              btnLectura(
                                e.target.checked,
                                l._id,
                                l.costoApagar,
                                l.mes,
                                item._id
                              )
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-end">
            <div className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-base font-semibold text-blue-700 sm:w-auto sm:px-6 sm:text-lg">
              Total a pagar: Bs {total}
            </div>
          </div>

          {/* BOTÓN */}
          <div className="flex justify-end">
            <button
              onClick={btnRealizarPago}
              className="w-full rounded-xl bg-gradient-to-r from-sky-700 to-cyan-700 px-6 py-3 font-semibold text-white shadow-lg sm:w-auto sm:px-10"
            >
              Realizar Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
