import { useState } from "react";
import { MenuGroup } from "./MenuGroup";
import { SubItem } from "./SubItem";

// React Icons import
import {
  MdDashboard,
  MdSpeed,
  MdBook,
  MdCreditCard,
  MdAccountBalanceWallet,
  MdGroup,
  MdAdd,
  MdList,
  MdSettings,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import { Link, Outlet } from "react-router";
import { useAuthStore } from "../context/auth";
import { VerCaja } from "../../module/caja/components/VerCajas";

const cerrarSession = () => console.log("logout");

export const Menu: React.FC = () => {
  const { usuario, isAutenticacion } = useAuthStore()



  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleSubmenu = (name: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {
        isAutenticacion && usuario ? (<div className="relative h-screen bg-slate-100 flex">
          {/* OVERLAY */}
          {drawerOpen && (
            <div
              className="fixed top-16 left-0 w-full h-[calc(100%-64px)] bg-slate-900/40 backdrop-blur-[2px] z-40"
              onClick={toggleDrawer}
            />
          )}

          {/* SIDEBAR */}
          <aside
            className={`fixed top-16 left-0 w-72 h-[calc(100%-64px)] bg-white border-r border-slate-200 shadow-xl flex flex-col transition-transform duration-300 ease-out z-50
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
          >

            <div className="border-b border-slate-100 px-4 py-4">
              {/* Espacio para logo — reemplazar el div por <img src="..." alt="Logo" className="h-9 w-auto" /> */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Logo
              </div>
              <p className="truncate text-sm text-slate-600">
                {usuario.nombre} {usuario.apellidoMaterno}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{usuario.rol}</p>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
              {(usuario.rol === "ADMINISTRADOR" || usuario.rol === "LECTURADOR") && (
                <Link to="/inicio" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700">
                  <MdDashboard className="text-xl text-slate-500" />
                  <span>Dashboard</span>
                </Link>
              )}

              {/* MEDIDOR */}

              <MenuGroup
                name="medidor"
                icon={<MdSpeed className="text-xl" />}
                title="Medidor"
                toggleSubmenu={toggleSubmenu}
                expandedMenus={expandedMenus}
              >
                <SubItem to="/medidor/crear" icon={<MdAdd />} text="Crear" />
                <SubItem to="/medidor/listar" icon={<MdList />} text="Listar" />
                <SubItem to="/medidor/moroso" icon={<MdList />} text="Morosos" />
              </MenuGroup>


              {/* LECTURAS */}
              {(usuario.rol === "ADMINISTRADOR" || usuario.rol === "LECTURADOR") && (
                <MenuGroup
                  name="lecturas"
                  icon={<MdBook className="text-xl" />}
                  title="Lecturas"
                  toggleSubmenu={toggleSubmenu}
                  expandedMenus={expandedMenus}
                >
                  <SubItem to="/lectura/realizar" icon={<MdAdd />} text="Crear" />
                  <SubItem to="/lectura/listar" icon={<MdList />} text="Listar" />
                </MenuGroup>
              )}

              {/* TARIFA */}
              {usuario.rol === "ADMINISTRADOR" && (
                <MenuGroup
                  name="tarifa"
                  icon={<MdCreditCard className="text-xl" />}
                  title="Tarifa"
                  toggleSubmenu={toggleSubmenu}
                  expandedMenus={expandedMenus}
                >
                  <SubItem to="/tarifa/listar" icon={<MdList />} text="Listar tarifas" />
                </MenuGroup>
              )}

              {/* GASTOS */}
              {usuario.rol === "ADMINISTRADOR" && (
                <MenuGroup
                  name="gastos"
                  icon={<MdAccountBalanceWallet className="text-xl" />}
                  title="Gastos"
                  toggleSubmenu={toggleSubmenu}
                  expandedMenus={expandedMenus}
                >
                  <SubItem to="/gastos/crear" icon={<MdAdd />} text="Registrar" />
                  <SubItem to="/gastos/listar" icon={<MdList />} text="Listar" />
                  <SubItem to="/gastos/categorias" icon={<MdSettings />} text="Categorías" />
                </MenuGroup>
              )}

              {/* PAGOS */}
              {usuario.rol === "ADMINISTRADOR" && (
                <MenuGroup
                  name="pagos"
                  icon={<MdCreditCard className="text-xl" />}
                  title="Pagos"
                  toggleSubmenu={toggleSubmenu}
                  expandedMenus={expandedMenus}
                >
                  <SubItem to="/pago/realizar" icon={<MdAdd />} text="Realizar pago" />
                  <SubItem to="/pago/listar" icon={<MdList />} text="Listar pagos" />
                </MenuGroup>
              )}

              {usuario.rol === "ADMINISTRADOR" && (
                <Link to="/usuario/listar" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700">
                  <MdGroup className="text-xl text-slate-500" />
                  <span>Usuarios</span>
                </Link>
              )}
            </nav>

            <div className="border-t border-slate-100 p-2">
              <button
                onClick={cerrarSession}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <MdLogout className="text-xl" />
                <span>Cerrar sesión</span>
              </button>
            </div>

          </aside>

          {/* MAIN */}
          <div className="flex-1 flex flex-col h-full w-full">
            <header className="flex h-16 items-center bg-linear-to-r from-blue-600 to-blue-700 text-white px-4 shadow-md">
              <button
                onClick={toggleDrawer}
                className="mr-3 rounded-lg p-1.5 transition-colors hover:bg-white/15"
              >
                <MdMenu className="text-2xl" />
              </button>

              {/* Mismo logo del sidebar cuando lo agregues */}
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-[9px] font-medium uppercase tracking-wide text-white/70">
                Logo
              </div>
              <h1 className="text-base font-medium text-white/90">
                Sistema de Agua
              </h1>

              <div className="ml-auto">
                <VerCaja />
              </div>
            </header>

            <main className="flex-1 overflow-auto p-4 md:p-6">
              <Outlet />
            </main>
          </div>
        </div>) : <Outlet />
      }
    </>
  );
};
