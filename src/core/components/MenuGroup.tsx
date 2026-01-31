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
        <button onClick={() => toggleSubmenu(name)} className="flex items-center p-3 w-full hover:bg-gray-100">
            <span className="material-icons">{icon}</span>
            <span className="ml-2">{title}</span>
            <span className="ml-auto material-icons">
                {expandedMenus[name] ? <MdExpandLess /> : <MdExpandMore />}
            </span>
        </button>

        {expandedMenus[name] && (
            <div className="ml-6 flex flex-col">{children}</div>
        )}
    </div>
)
