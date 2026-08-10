import { useEffect, useState } from "react";
import { Caja } from "./Caja";
import type { cajaUsuarioI } from "../interface/caja";
import { verCajaPorUsuario } from "../service/caja";
import { AbrirCajaModal } from "../modal/AbrirCajaModal";
import type { AxiosError } from "axios";

export const VerCaja = () => {
  const [cajaAbierta, setcajaAbierta] = useState<boolean>(false);
  const [caja, setcaja] = useState<cajaUsuarioI>();


  useEffect(() => {
    (async()=>{
      try {
        const response = await verCajaPorUsuario();
        console.log(response);
        
        if (response) {
          setcaja(response);
          setcajaAbierta(true);
        }
  
        setcajaAbierta(false);
      } catch (error) {
        const e = error as AxiosError<any>
        console.log(e.response);
        setcajaAbierta(false);
      }
    })()
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <Caja
        nombre="Caja"
        abierta={cajaAbierta}
        montoInicial={caja?.montoInicial ?? 0}
        montoActual={caja?.montoPago ?? 0}
        montoTotal={caja?.montoTotal ?? 0}
        cantidadPagos={caja?.CantidadPagos ?? 0}
      />

      <Caja
        nombre="Caja Chica"
        abierta={true}
        montoInicial={100}
        montoActual={420}
        montoTotal={320}
        cantidadPagos={5}
      />

      <AbrirCajaModal/>
    </div>
  );
};
