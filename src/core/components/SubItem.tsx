import type { ReactNode } from "react"
import { Link } from "react-router"

interface Props {
    to: string
    icon: ReactNode
    text: string
}

export const SubItem = ({ to, icon, text }: Props) => (
    <Link to={to} className="flex items-center p-2 hover:bg-gray-100">
        <span className="material-icons text-sm">{icon}</span>
        <span className="ml-2 text-sm">{text}</span>
    </Link>
)
