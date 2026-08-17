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
        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-sky-100/90 transition-colors hover:bg-sky-700 hover:text-white"
    >
        <span className="inline-flex shrink-0 text-lg text-cyan-200">{icon}</span>
        <span>{text}</span>
    </Link>
)
