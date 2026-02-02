import type { RouterI } from "../../../core/interface/router";
import DetalleLecturaPage from "../page/DetalleLecturaPage";
import { ListarLecturasPage } from "../page/ListarLecturaPage";
import { RealizarLecturaPage } from "../page/RealizarLecturaPage";

export const lecturaRouter: RouterI[] = [
    {
        element: ListarLecturasPage,
        path: '/lectura/listar'

    },
    {
        element: RealizarLecturaPage,
        path: '/lectura/realizar'

    },
    {
        element: DetalleLecturaPage,
        path: `/lectura/detalle/:medidor/:lectura`

    }
];