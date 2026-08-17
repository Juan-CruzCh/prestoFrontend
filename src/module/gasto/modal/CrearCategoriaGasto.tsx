import { useForm } from "react-hook-form";
import type { AxiosError } from "axios";
import type { CategoriaGastoI } from "../interface/gasto";
import { crearCategoriaGasto } from "../service/gastoService";
import { useEstadoModal } from "../../../core/utils/useEstadoModalUtil";
import { useEstadoReload } from "../../../core/utils/useEstadoReloadUtils";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { AlertaError } from "../../../core/utils/alertasUtils";

type Props = {
  activo?: boolean;
  onBeforeOpen?: () => void;
};

export const CrearCategoriaGasto = ({ activo = true, onBeforeOpen }: Props) => {
  const { closeModal, openModal, isOpen } = useEstadoModal();
  const { triggerReload } = useEstadoReload();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CategoriaGastoI>({
    defaultValues: { nombre: "" },
  });

  const onSubmit = async (data: CategoriaGastoI) => {
    try {
      const response = await crearCategoriaGasto(data);
      if (response.status == HttpStatus.CREATED) {
        triggerReload();
        reset();
        closeModal();
      }
    } catch (err) {
      const e = err as AxiosError<{ mensaje: string }>;
      AlertaError(e.response?.data.mensaje ?? "No se pudo crear la categoría");
    }
  };

  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        onClick={() => {
          onBeforeOpen?.();
          reset({ nombre: "" });
          openModal();
        }}
      >
        Nueva categoría
      </button>

      {isOpen && activo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">
                Crear categoría
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-xl text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Nombre
                </label>
                <input
                  type="text"
                  autoFocus
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                  })}
                  className="w-full rounded border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Ej. Útiles de oficina"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {isSubmitting ? "Guardando..." : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
