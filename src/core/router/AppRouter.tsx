import { Route, Routes, BrowserRouter } from 'react-router'
import { MenuComponent } from '../menu/Menu'
import { CrearMedidor } from '../../module/medidor/page/CrearMedidor'
import { ListarMedidores } from '../../module/medidor/page/ListarMedidores'
import { ListarMedidoresMorosos } from '../../module/medidor/page/ListarMedidoresMorosos'
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuComponent />}>

                    <Route path="crea/medidor" element={<CrearMedidor />} />
                    <Route path="listar/medidor" element={<ListarMedidores />} />
                       <Route path="listar/medidores/morosos" element={<ListarMedidoresMorosos />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
