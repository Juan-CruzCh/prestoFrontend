import { useState } from "react";
import { Link, Outlet } from "react-router";
import {
    Menu,
    BookOpen,
    Users,
    Wallet,
    Gauge,
    ChevronDown,
    ChevronUp,
    Droplets,
    Plus,
    List,
    BarChart3,
    Settings,
    LogOut,
} from "lucide-react";

export const MenuComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [expandedMenus, setExpandedMenus] = useState({
        medidor: false,
        lecturas: false,
    });

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const toggleSubmenu = (menu: "medidor" | "lecturas") => {
        setExpandedMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const usuario = "Juan Carlos Chocllu";

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`${drawerOpen ? "w-72" : "w-0"} transition-all duration-300 bg-white border-r border-slate-200 overflow-hidden flex-shrink-0`}
            >
                {/* Header */}
                <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col gap-3">

                    <div className="flex items-center gap-3 mt-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="w-10 h-10 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-lg">
                            {usuario[0]}
                        </div>
                        <span className="text-white font-medium text-sm">{usuario}</span>
                    </div>
                </div>

                <div className="py-4">
                    {/* Dashboard */}
                    <button className="w-full my-1 mx-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all flex items-center gap-3 text-left">
                        <BarChart3 className="text-purple-600" size={22} />
                        <span className="font-medium text-slate-700">Dashboard</span>
                    </button>

                    {/* Medidor */}
                    <button
                        onClick={() => toggleSubmenu("medidor")}
                        className={`w-full my-1 mx-3 px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-left ${expandedMenus.medidor
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                            : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
                            }`}
                    >
                        <Gauge className={expandedMenus.medidor ? "text-white" : "text-blue-600"} size={22} />
                        <span className={expandedMenus.medidor ? "font-semibold flex-1" : "font-medium text-slate-700 flex-1"}>
                            Medidor
                        </span>
                        {expandedMenus.medidor ? <ChevronUp className="text-white" size={20} /> : <ChevronDown className="text-slate-600" size={20} />}
                    </button>
                    {expandedMenus.medidor && (
                        <div className="bg-blue-50/50 mx-3 rounded-xl mt-1 mb-2 py-1">
                            <button className="w-full pl-12 py-2 px-4 rounded-lg hover:bg-white transition-colors flex items-center gap-3 text-left">
                                <Plus className="text-blue-600" size={18} />
                                <Link to={"medidor"}>

                                    <span className="text-sm text-slate-700">Crear</span>
                                </Link>
                            </button>
                            <button className="w-full pl-12 py-2 px-4 rounded-lg hover:bg-white transition-colors flex items-center gap-3 text-left">
                                <List className="text-blue-600" size={18} />
                                <span className="text-sm text-slate-700">Listar</span>
                            </button>
                        </div>
                    )}

                    {/* Lecturas */}
                    <button
                        onClick={() => toggleSubmenu("lecturas")}
                        className={`w-full my-1 mx-3 px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-left ${expandedMenus.lecturas
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md"
                            : "hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100"
                            }`}
                    >
                        <BookOpen className={expandedMenus.lecturas ? "text-white" : "text-emerald-600"} size={22} />
                        <span className={expandedMenus.lecturas ? "font-semibold flex-1" : "font-medium text-slate-700 flex-1"}>
                            Lecturas
                        </span>
                        {expandedMenus.lecturas ? <ChevronUp className="text-white" size={20} /> : <ChevronDown className="text-slate-600" size={20} />}
                    </button>
                    {expandedMenus.lecturas && (
                        <div className="bg-emerald-50/50 mx-3 rounded-xl mt-1 mb-2 py-1">
                            <button className="w-full pl-12 py-2 px-4 rounded-lg hover:bg-white transition-colors flex items-center gap-3 text-left">
                                <Plus className="text-emerald-600" size={18} />
                                <span className="text-sm text-slate-700">Crear</span>
                            </button>
                            <button className="w-full pl-12 py-2 px-4 rounded-lg hover:bg-white transition-colors flex items-center gap-3 text-left">
                                <List className="text-emerald-600" size={18} />
                                <span className="text-sm text-slate-700">Listar</span>
                            </button>
                        </div>
                    )}

                    {/* Usuarios */}
                    <button className="w-full my-1 mx-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all flex items-center gap-3 text-left">
                        <Users className="text-amber-600" size={22} />
                        <span className="font-medium text-slate-700">Usuarios</span>
                    </button>

                    {/* Gastos */}
                    <button className="w-full my-1 mx-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-rose-100 transition-all flex items-center gap-3 text-left">
                        <Wallet className="text-rose-600" size={22} />
                        <span className="font-medium text-slate-700">Gastos</span>
                    </button>

                    {/* Divider */}
                    <div className="my-4 mx-6 border-t border-slate-200"></div>

                    {/* Settings */}
                    <button className="w-full my-1 mx-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 transition-all flex items-center gap-3 text-left">
                        <Settings className="text-slate-600" size={22} />
                        <span className="font-medium text-slate-700">Configuración</span>
                    </button>

                    {/* Logout */}
                    <button className="w-full my-1 mx-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all flex items-center gap-3 text-left">
                        <LogOut className="text-red-600" size={22} />
                        <span className="font-medium text-slate-700">Cerrar Sesión</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative">
                {/* Botón hamburguesa */}
                <button
                    onClick={toggleDrawer}

                >
                    <Menu className="text-slate-700" size={24} />
                </button>

                {/* Outlet de React Router */}
                <div className="pt-20 px-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
