import type { ReactNode } from "react"
import { MdExpandLess, MdExpandMore } from "react-icons/md"

interface Props {
    name: string
    icon: ReactNode
    title: string
    children: ReactNode
    toggleSubmenu: (name: string) => void
    expandedMenus: Record<string, boolean>
}

export const MenuGroup = ({ name, icon, title, children, toggleSubmenu, expandedMenus }: Props) => (
    <div>
        <button
            onClick={() => toggleSubmenu(name)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                ${expandedMenus[name]
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
        >
            <span className={`shrink-0 ${expandedMenus[name] ? "text-blue-600" : "text-slate-500"}`}>
                {icon}
            </span>
            <span className="flex-1 text-left">{title}</span>
            <span className={`text-lg transition-transform ${expandedMenus[name] ? "text-blue-600" : "text-slate-400"}`}>
                {expandedMenus[name] ? <MdExpandLess /> : <MdExpandMore />}
            </span>
        </button>

        {expandedMenus[name] && (
            <div className="ml-4 mt-0.5 mb-1 flex flex-col gap-0.5 border-l-2 border-blue-100 pl-2">
                {children}
            </div>
        )}
    </div>
)
