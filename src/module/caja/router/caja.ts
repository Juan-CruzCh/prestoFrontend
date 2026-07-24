import type { RouterI } from "../../../core/interface/router";
import { ListarCajaPage } from "../page/ListarCajaPage";

export const cajaRouter: RouterI[] = [
    {
        element: ListarCajaPage,
        path: '/listar/caja'
    }
];