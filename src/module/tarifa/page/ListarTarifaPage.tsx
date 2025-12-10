import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { listarTarifas, listarTarifasRango } from "../service/tarifaService";
import type { ListarTarifasRangoI } from "../interface/tarifa";

export const ListarTarifaPage = () => {
    const navigate = useNavigate();
    const [tarifas, setTarifas] = useState<ListarTarifasRangoI[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listar();
    }, []);

    const listar = async () => {
        try {
            const response = await listarTarifasRango();
            setTarifas(response);
        } catch (error) {
            console.error("Error al listar tarifas:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-6 text-gray-600">Cargando tarifas...</div>;
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-800">Listado de Tarifas</h1>
                <button
                    onClick={() => navigate("/crear/tarifas")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                    Crear Tarifa
                </button>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 border text-left">Nombre</th>
                            <th className="px-4 py-3 border text-left">Rangos</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tarifas.map((t) => (
                            <tr key={t._id} className="hover:bg-gray-50">
                                {/* Nombre */}
                                <td className="px-4 py-3 border font-medium">{t.nombre}</td>

                                {/* Rangos */}
                                <td className="px-4 py-3 border">
                                    <div className="flex gap-3 overflow-x-auto py-2">
                                        {t.rango.map((r) => (
                                            <div
                                                key={r._id}
                                                className="min-w-[180px] p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col justify-between"
                                            >
                                                <p className="text-sm">
                                                    <span className="font-semibold">Rango:</span> {r.rango1} - {r.rango2}
                                                </p>
                                                <p className="text-sm">
                                                    <span className="font-semibold">Costo:</span> Bs {r.costo}
                                                </p>
                                                <p className="text-sm">
                                                    <span className="font-semibold">IVA:</span> {r.iva}%
                                                </p>
                                                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md mt-2">
                                                    Editar
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
