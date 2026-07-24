import type { ReactNode } from "react"
import { Link } from "react-router"

interface Props {
    to: string
    icon: ReactNode
    text: string
}

export const SubItem = ({ to, icon, text }: Props) => (
    <Link
        to={to}
        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700"
    >
        <span className="text-base text-slate-400">{icon}</span>
        <span>{text}</span>
    </Link>
)
