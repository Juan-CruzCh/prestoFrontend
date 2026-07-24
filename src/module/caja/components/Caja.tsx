type Props = {
  nombre: string;
  abierta: boolean;
  montoInicial: number;
  montoActual: number;
  montoTotal: number;
  cantidadPagos: number;
};

export const Caja = ({
  nombre,
  abierta,
  montoInicial,
  montoActual,
  montoTotal,
  cantidadPagos,
}: Props) => {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-white backdrop-blur-sm">
      <div className="min-w-0 leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-white/90">{nombre}</span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
              abierta
                ? "bg-emerald-400/20 text-emerald-100"
                : "bg-rose-400/20 text-rose-100"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                abierta ? "bg-emerald-300" : "bg-rose-300"
              }`}
            />
            {abierta ? "Abierta" : "Cerrada"}
          </span>
        </div>

        <div className="mt-0.5 flex items-center gap-2 text-[10px] text-white/70">
          <span>
            Inicial <span className="font-medium text-white">Bs {montoInicial.toFixed(0)}</span>
          </span>
          <span className="text-white/30">·</span>
          <span>
            Pagos <span className="font-medium text-white">{cantidadPagos}</span>
          </span>
          <span className="text-white/30">·</span>
          <span>
            Actual <span className="font-medium text-white">Bs {montoActual.toFixed(0)}</span>
          </span>
          <span className="text-white/30">·</span>
          <span>
            Total <span className="font-semibold text-white">Bs {montoTotal.toFixed(0)}</span>
          </span>
        </div>
      </div>

      <button
        className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold transition-colors ${
          abierta
            ? "bg-white text-rose-600 hover:bg-rose-50"
            : "bg-white text-blue-700 hover:bg-blue-50"
        }`}
      >
        {abierta ? "Cerrar" : "Abrir"}
      </button>
    </div>
  );
};
