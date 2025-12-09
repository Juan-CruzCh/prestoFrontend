import { Route, Routes, BrowserRouter } from 'react-router'
import { MenuComponent } from '../menu/Menu'
import { CrearMedidor } from '../../medidor/page/CrearMedidor'
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuComponent />}>

                    <Route path="medidor" element={<CrearMedidor />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
