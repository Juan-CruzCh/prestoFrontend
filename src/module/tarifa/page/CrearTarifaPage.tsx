import { useState } from "react";
import type { crearTarifaI } from "../interface/tarifa";
import { useForm } from "react-hook-form";
import { crearTarifas } from "../service/tarifaService";



export const CrearTarifaPage = () => {
    const [tarifas, settarifas] = useState<crearTarifaI[]>([])
    const { register, handleSubmit } = useForm<crearTarifaI>()
    const onSubmit = (data: crearTarifaI) => {
        settarifas([...tarifas, data]);

    }
    const btnGuardar = async () => {
        const data = {
            nombre: tarifas[0].nombre.toUpperCase(),
            rango: tarifas.map((item) => ({ rango1: item.rango1, rango2: item.rango2, iva: item.iva, costo: item.costo }))
        }
        console.log(data);


        try {
            const response = await crearTarifas(data)
            console.log(response);

        } catch (error) {
            console.log(error);

        }


    }
    return (
        <div className="p-6 max-w-4xl mx-auto">

            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Crear Tarifa</h1>

            {/* Contenedor principal */}

            <div className="bg-white p-6 rounded-lg shadow space-y-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Nombre de Tarifa */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre de la Tarifa
                        </label>
                        <input
                            {...register("nombre", { required: true })}
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    {/* Formulario para agregar rango */}
                    <div className="border p-4 rounded-lg bg-gray-50">
                        <h2 className="text-lg font-semibold mb-3">Agregar Rango</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                            <div>
                                <label className="block text-sm font-medium">Rango 1</label>
                                <input
                                    {...register("rango1", { required: true, valueAsNumber: true })}
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    defaultValue={0}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Rango 2</label>
                                <input
                                    {...register("rango2", { required: true, valueAsNumber: true })}
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    defaultValue={0}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Costo (Bs)</label>
                                <input
                                    {...register("costo", { required: true, valueAsNumber: true })}
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    defaultValue={0}
                                    step="any"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">IVA (%)</label>
                                <input
                                    {...register("iva", { required: true, valueAsNumber: true })}
                                    type="number"
                                    className="w-full px-2 py-1 border rounded"
                                    step="any"
                                    defaultValue={0}
                                />
                            </div>
                        </div>

                        <button
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Añadir Rango
                        </button>
                    </div>

                </form>
                {/* Tabla tipo carrito */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Rangos Agregados</h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>

                                    <th className="px-4 py-2 border">Rango 1</th>
                                    <th className="px-4 py-2 border">Rango 2</th>
                                    <th className="px-4 py-2 border">Costo</th>
                                    <th className="px-4 py-2 border">IVA (%)</th>
                                    <th className="px-4 py-2 border">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* Ejemplo de fila */}
                                {
                                    tarifas.map((item, i) => (
                                        <tr>

                                            <td className="px-4 py-2 border text-center">{item.rango1}</td>
                                            <td className="px-4 py-2 border text-center">{item.rango2}</td>
                                            <td className="px-4 py-2 border text-center">{item.costo}</td>
                                            <td className="px-4 py-2 border text-center">{item.iva}</td>
                                            <td className="px-4 py-2 border text-center">
                                                <button className="text-red-600 hover:text-red-700"
                                                    onClick={() => {
                                                        settarifas(tarifas.filter((_, index) => index !== i));
                                                    }}
                                                >Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <button
                    onClick={() => btnGuardar()}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-medium"
                >
                    Guardar Tarifa
                </button>
            </div>

        </div >
    );
};
