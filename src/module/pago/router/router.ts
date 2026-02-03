import type { RouterI } from "../../../core/interface/router";
import { DetallePagoPage } from "../page/DetallePagoPage";
import { ListarPagosPage } from "../page/ListarPagosPage";
import { RealizarPagoPage } from "../page/RealizarPagoPage";

export const pagoRouter: RouterI[] = [
    {
        element:ListarPagosPage,
        path:'/pago/listar'
    },
        {
        element:DetallePagoPage,
        path:'/pago/detalle/:id'
    },
     {
        element:RealizarPagoPage,
        path:'/pago/realizar'
    }
];
