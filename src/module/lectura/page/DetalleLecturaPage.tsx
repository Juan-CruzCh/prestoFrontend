import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { DetalleLecturasResponse } from "../interface/lectura";
import { detalleLectura } from "../service/lecturaService";
import '../style/detalleLectura.css'
import logo from './../../../assets/logo/logo.png'
import type { AxiosError } from "axios";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { AlertaError } from "../../../core/utils/alertasUtils";
export default function DetalleLecturaPage() {
    const { medidor, lectura } = useParams();

    const [detalle, setDetalle] = useState<DetalleLecturasResponse>();

    useEffect(() => {

        listarDetalleLectura()

    }, [medidor, lectura]);

    const listarDetalleLectura = async () => {
        try {
            if (medidor && lectura) {
                const response = await detalleLectura(medidor, lectura)
                const lecturasOrdenadas = response.lecturas
                    .sort((a, b) => a.numeroLectura - b.numeroLectura);

                const totalApagar = lecturasOrdenadas
                    .filter((l) => l.estado === "PENDIENTE")
                    .reduce((acc, l) => acc + l.costoApagar, 0);

                setDetalle({
                    ...response,
                    lecturas: lecturasOrdenadas,
                    totalApagar,
                });
            }
        } catch (err) {
            const e = err as AxiosError<any>
            if (e.status == HttpStatus.BAD_REQUEST) {
                AlertaError(e.response?.data.mensaje)
            } else {
                AlertaError(e.message)
            }
        }
    }



    return (
        <>
            <div className="flex justify-center items-center h-screen">
                {
                    detalle && (
                        <div className="recibo-container" id="recibo">
                            {/* Header */}
                            <div className="recibo-header">
                                <img src={logo} width={400} alt="Logo" />
                            </div>

                            {/* Info cliente */}
                            <div className="recibo-info">
                                <p><span>Código Cliente:</span> {detalle.medidorCliente[0].codigoCliente}</p>
                                <p><span>Nro Medidor:</span> {detalle.medidorCliente[0].numeroMedidor}</p>
                            </div>

                            {/* Datos recibo */}
                            <div className="recibo-datos">
                                <p>
                                    <span>Nombre:</span> {detalle.medidorCliente[0].nombre} {detalle.medidorCliente[0].apellidoPaterno} {detalle.medidorCliente[0].apellidoMaterno}
                                </p>
                                <p><span>Dirección:</span> {detalle.medidorCliente[0].direccion}</p>
                                <p><span>Categoría:</span> {detalle.medidorCliente[0].tarifa}</p>
                                <p>
                                    <span>Fecha de lectura:</span>{" "}
                                    {new Date(detalle.lecturas[0].fecha).toLocaleString("es-BO", {
                                        timeZone: "UTC",
                                    })}
                                </p>
                                <p>
                                    <span>Fecha de vencimiento:</span>{" "}
                                    {new Date(detalle.lecturas[0].fechaVencimiento).toLocaleDateString("es-BO")}
                                </p>
                            </div>

                            <div className="linea"></div>


                            <div className="recibo-pagos">
                                <h3>Historial de Lecturas</h3>
                                <div className="recibo-tabla">
                                    <table border={1} cellPadding={3} cellSpacing={0}>
                                        <thead>
                                            <tr>
                                                <th>Mes</th>
                                                <th colSpan={2}>Lectura</th>
                                                <th>m³</th>
                                                <th>Imp</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {detalle.lecturas.map((l, index) => (
                                                <tr key={index}>
                                                    <td>{l.mes}</td>
                                                    <td>{l.lecturaAnterior}</td>
                                                    <td>{l.lecturaActual}</td>
                                                    <td>{l.consumoTotal}</td>
                                                    <td>{l.costoApagar} Bs</td>
                                                    <td>{l.estado}</td>
                                                </tr>
                                            ))}
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <td colSpan={4}>Total a Pagar</td>
                                                <td colSpan={2}>{detalle.totalApagar} Bs</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


            <div className="mt-4 text-center">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={() => window.print()}
                >
                    Imprimir Recibo
                </button>
            </div>
        </>
    );
}
