import type { RouterI } from "../../../core/interface/router";
import { CrearTarifaPage } from "../page/CrearTarifaPage";
import { EditarTarifaPage } from "../page/EditarTarifaPage";
import { ListarTarifaPage } from "../page/ListarTarifaPage";

export const tarifaRouter: RouterI[] = [
    {
        path: '/tarifa/crear',
        element: CrearTarifaPage
    },
    {
        path: '/tarifa/listar',
        element: ListarTarifaPage
    },
    {
        path: '/tarifa/editar/:id',
        element: EditarTarifaPage
    }
];