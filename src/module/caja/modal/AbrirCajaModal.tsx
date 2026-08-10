import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { AxiosError } from "axios";
import { CrearCaja } from "../service/caja";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import { AlertaError } from "../../../core/utils/alertasUtils";
import { useEstadoModal } from "../../../core/utils/useEstadoModalUtil";
import type { AbrirCajaFormI } from "../interface/caja";




export const AbrirCajaModal = () => {
  const { closeModal, isOpen } = useEstadoModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AbrirCajaFormI>({
    defaultValues: { montoInicial: 0 },
  });

  useEffect(() => {
    if (isOpen) {
      reset({ montoInicial: 0 });
    }
  }, [isOpen, reset]);

  const btnAbriCaja = async (data: AbrirCajaFormI) => {
    try {
      const response = await CrearCaja(data.montoInicial);
      if (response.status == HttpStatus.CREATED) {
        closeModal();

      }
    } catch (err) {
      const e = err as AxiosError<any>;
      console.log('err',e);
      
      AlertaError(e.response?.data.mensaje ?? "No se pudo abrir la caja");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">

          <button
            type="button"
            onClick={closeModal}
            className="text-xl text-slate-500 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(btnAbriCaja)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Monto inicial (Bs)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              autoFocus
              {...register("montoInicial", {
                required: "El monto inicial es obligatorio",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "El monto no puede ser negativo",
                },
                validate: (value) =>
                  !Number.isNaN(value) || "Ingrese un monto válido",
              })}
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="0.00"
            />
            {errors.montoInicial && (
              <p className="mt-1 text-sm text-red-500">
                {errors.montoInicial.message}
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
              {isSubmitting ? "Abriendo..." : "Abrir caja"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
