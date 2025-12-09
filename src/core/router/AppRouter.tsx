import { Route, Routes, BrowserRouter } from 'react-router'
import { MenuComponent } from '../menu/Menu'
import { CrearMedidor } from '../../module/medidor/page/CrearMedidor'
import { ListarMedidores } from '../../module/medidor/page/ListarMedidores'
import { ListarMedidoresMorosos } from '../../module/medidor/page/ListarMedidoresMorosos'
import { CrearLecturaPage } from '../../module/lectura/page/CrearLecturaPage'
import { RealizarPagoPage } from '../../module/pago/page/RealizarPagoPage'
import { ListarPagosPage } from '../../module/pago/page/ListarPagosPage'
import { ListarLecturaPage } from '../../module/lectura/page/ListarLecturaPage'
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuComponent />}>

                    <Route path="crea/medidor" element={<CrearMedidor />} />
                    <Route path="listar/medidor" element={<ListarMedidores />} />
                       <Route path="listar/medidores/morosos" element={<ListarMedidoresMorosos />} />
                       <Route path="crear/lectura" element={<CrearLecturaPage />} />
                           <Route path="listar/lectura" element={<ListarLecturaPage />} />
                             <Route path="realizar/pago" element={<RealizarPagoPage />} />
                                    <Route path="listar/pago" element={<ListarPagosPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
