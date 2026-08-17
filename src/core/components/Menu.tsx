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
import escudoPresto from "../../assets/logo/escudo.png";

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
            className={`fixed top-16 left-0 w-72 h-[calc(100%-64px)] bg-sky-800 border-r border-sky-700 shadow-xl flex flex-col transition-transform duration-300 ease-out z-50
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
          >

            <div className="border-b border-sky-700 px-4 py-4">
              <img
                src={escudoPresto}
                alt="Presto"
                className="mb-3 h-10 w-auto object-contain"
              />
              <p className="truncate text-sm text-sky-50">
                {usuario.nombre} {usuario.apellidoMaterno}
              </p>
              <p className="mt-0.5 text-xs text-sky-200/90">{usuario.rol}</p>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
              {(usuario.rol === "ADMINISTRADOR" || usuario.rol === "LECTURADOR") && (
                <Link to="/inicio" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sky-50 transition-colors hover:bg-sky-700 hover:text-white">
                  <MdDashboard className="text-xl text-cyan-200" />
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

              {usuario.rol === "ADMINISTRADOR" && (
                <MenuGroup
                  name="Caja"
                  icon={<MdAccountBalanceWallet className="text-xl" />}
                  title="Caja"
                  toggleSubmenu={toggleSubmenu}
                  expandedMenus={expandedMenus}
                >
                  <SubItem to="/listar/caja" icon={<MdAdd />} text="listar caja" />
                  <SubItem to="/cerrar/caja" icon={<MdAdd />} text="Cerra caja" />
                  <SubItem to="/listar/caja/chica" icon={<MdList />} text="Listar caja chica" />
                    <SubItem to="/cerrar/caja/chica" icon={<MdList />} text="Cerra caja chica" />
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
                <Link to="/usuario/listar" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sky-50 transition-colors hover:bg-sky-700 hover:text-white">
                  <MdGroup className="text-xl text-cyan-200" />
                  <span>Usuarios</span>
                </Link>
              )}
            </nav>

            <div className="border-t border-sky-700 p-2">
              <button
                onClick={cerrarSession}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-200 transition-colors hover:bg-red-500/20 hover:text-red-100"
              >
                <MdLogout className="text-xl" />
                <span>Cerrar sesión</span>
              </button>
            </div>

          </aside>

          {/* MAIN */}
          <div className="flex-1 flex flex-col h-full w-full">
            <header className="flex h-16 items-center bg-linear-to-r from-sky-800 via-sky-700 to-cyan-700 text-white px-4 shadow-md">
              <button
                onClick={toggleDrawer}
                className="mr-3 rounded-lg p-1.5 transition-colors hover:bg-white/15"
              >
                <MdMenu className="text-2xl" />
              </button>

              <img
                src={escudoPresto}
                alt="Presto"
                className="mr-2 h-8 w-auto object-contain"
              />
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
