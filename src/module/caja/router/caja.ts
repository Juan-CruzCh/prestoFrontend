import type { RouterI } from "../../../core/interface/router";
import { CerrarCaja } from "../page/CerrarCaja";
import { CerrarCajaChica } from "../page/CerrarCajaChica";
import { ListarCajaChica } from "../page/ListarCajaChica";
import { ListarCajaPage } from "../page/ListarCajaPage";

export const cajaRouter: RouterI[] = [
    {
        element: ListarCajaPage,
        path: '/listar/caja'
    },
    {
        element: CerrarCaja,
        path: '/cerrar/caja'
    },
    {
        element: CerrarCajaChica,
        path: '/cerrar/caja/chica'
    },
    {
        element: ListarCajaChica,
        path: '/listar/caja/chica'
    }
];