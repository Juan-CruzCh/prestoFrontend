import type { RouterI } from "../../../core/interface/router";
import { CrearGastoPage } from "../page/CrearGastoPage";
import { ListarGastosPage } from "../page/ListarGastosPage";
import { DetallleGasto } from "../page/DetallleGasto";

export const gastoRouter: RouterI[] = [
   {
      element: CrearGastoPage,
      path: '/gastos/crear'
   },
   {
      element: ListarGastosPage,
      path: '/gastos/listar'
   },
   {
      element: DetallleGasto,
      path: '/gastos/detalle'
   }
];