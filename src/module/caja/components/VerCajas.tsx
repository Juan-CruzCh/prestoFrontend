import { Caja } from "./Caja";

export const VerCaja = () => {


  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <Caja
        nombre="Caja"
        abierta={true}
        montoInicial={500}
        montoActual={2850}
        montoTotal={2350}
        cantidadPagos={18}
      />

      <Caja
        nombre="Caja Chica"
        abierta={true}
        montoInicial={100}
        montoActual={420}
        montoTotal={320}
        cantidadPagos={5}
      />
    </div>

  );
};
