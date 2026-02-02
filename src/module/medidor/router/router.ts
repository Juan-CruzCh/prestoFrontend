import type { RouterI } from "../../../core/interface/router";
import { CrearMedidorPage } from "../page/CrearMedidorPage";
import { EditarMedidorPage } from "../page/EditarMedidorPage";
import { ListarMedidorPage } from "../page/ListarMedidorPage";
import { ListarMorososPage } from "../page/ListarMorososPage";

export const medidorRouter: RouterI[] = [
    {
        path: '/medidor/crear',
        element: CrearMedidorPage
    },
    {
        path: '/medidor/listar',
        element: ListarMedidorPage
    },
    {
        path:'/medidor/editar/:id',
        element:EditarMedidorPage
    },
    {
        path:'/medidor/moroso',
        element:ListarMorososPage
    }

];
