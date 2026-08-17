import { useForm } from "react-hook-form";
import type { CategoriaGastoI, CrearGastoI } from "../interface/gasto";
import { useEffect, useState } from "react";
import { crearGasto, ListarCategoriaGasto } from "../service/gastoService";
import type { AxiosError } from "axios";
import { AlertaError } from "../../../core/utils/alertasUtils";

export const CrearGastoPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CrearGastoI>();

  const [categorias, setcategorias] = useState<CategoriaGastoI[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await ListarCategoriaGasto();
        setcategorias(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmit = async (data: CrearGastoI) => {
    try {
      console.log(data);
        data.monto = Number(data.monto)
      const response = await crearGasto(data);
      console.log(response);
      reset();
    } catch (err) {
      const e = err as AxiosError<{ mensaje: string }>;
      console.log(e);
      
      
      AlertaError(e.response?.data.mensaje ?? "No se pudo crear la categoría");
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-slate-800">
          Registrar gasto
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Los gastos se registran desde caja chica.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
      >
        <div className="mb-4 inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          Caja chica
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Categoría */}
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Categoría de gasto
            </label>

            <select
              {...register("categoriaGasto", {
                required: "La categoría de gasto es obligatoria",
              })}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Seleccionar categoría</option>

              {categorias.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.nombre}
                </option>
              ))}
            </select>

            {errors.categoriaGasto && (
              <p className="mt-1 text-xs text-red-500">
                {errors.categoriaGasto.message}
              </p>
            )}
          </div>

          {/* Monto */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Monto (Bs)
            </label>

            <input
              {...register("monto", {
                required: "El monto es obligatorio",
                min: {
                  value: 0.01,
                  message: "El monto debe ser mayor a 0",
                },
              })}
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            {errors.monto && (
              <p className="mt-1 text-xs text-red-500">
                {errors.monto.message}
              </p>
            )}
          </div>

          {/* Descripción */}
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Descripción
            </label>

            <input
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                validate: (value) =>
                  value.trim() !== "" ||
                  "La descripción es obligatoria",
              })}
              type="text"
              placeholder="Ej. Compra de materiales de plomería"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            {errors.descripcion && (
              <p className="mt-1 text-xs text-red-500">
                {errors.descripcion.message}
              </p>
            )}
          </div>

          {/* Comprobante */}
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Nro. comprobante
            </label>

            <input
              {...register("comprobante", {
                required: "El número de comprobante es obligatorio",
                validate: (value) =>
                  value.trim() !== "" ||
                  "El número de comprobante es obligatorio",
              })}
              type="text"
              placeholder="Factura / recibo"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            {errors.comprobante && (
              <p className="mt-1 text-xs text-red-500">
                {errors.comprobante.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-800"
          >
            Guardar gasto
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};