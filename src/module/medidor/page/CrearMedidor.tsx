import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ListarCliente } from "../../cliente/components/ListarCliente";

const tarifas = [
  { id: "1", nombre: "Tarifa Básica" },
  { id: "2", nombre: "Tarifa Premium" },
  { id: "3", nombre: "Tarifa Industrial" },
];

export const CrearMedidor = () => {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data:any) => {
  
    reset(); // Limpiar formulario
    setClienteSeleccionado(null);
  };

  return (
    <div className="w-full p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Tabla de clientes */}
          <div className="md:col-span-8 order-1">
            <ListarCliente />
          </div>

          {/* Formulario */}
          <div className="md:col-span-4 order-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold mb-4">Crear Medidor</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Número de Medidor */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Medidor *
                  </label>
                  <input
                    type="text"
                    {...register("numeroMedidor", { required: "El número de medidor es obligatorio" })}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.numeroMedidor ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.numeroMedidor && (
                    <p className="text-red-500 text-xs mt-1"></p>
                  )}
                </div>

                {/* Descripción */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                  <input
                    type="text"
                    {...register("descripcion")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Tarifa */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tarifa *
                  </label>
                  <select
                    {...register("tarifa", { required: "La tarifa es obligatoria" })}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.tarifa ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Seleccione una tarifa</option>
                    {tarifas.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.tarifa && <p className="text-red-500 text-xs mt-1"></p>}
                </div>

                {/* Dirección */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    {...register("direccion", { required: "La dirección es obligatoria" })}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.direccion ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.direccion && <p className="text-red-500 text-xs mt-1"></p>}
                </div>

                {/* Fecha de instalación */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de Instalación *
                  </label>
                  <input
                    type="date"
                    {...register("fechaInstalacion", { required: "La fecha de instalación es obligatoria" })}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.fechaInstalacion ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fechaInstalacion && <p className="text-red-500 text-xs mt-1"></p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
