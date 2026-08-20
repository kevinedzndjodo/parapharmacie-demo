import { Link, NavLink } from "react-router-dom"
import { SITE, whatsappLink } from "../data/site"
import { ClockIcon, LeafIcon, WhatsAppIcon } from "./icons"

const navLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "bg-primary text-white" : "text-primary-dark hover:bg-mint"
  }`

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mint bg-[#FDFEFE]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
        <Link to="/" className="flex min-h-11 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-primary-dark">
              {SITE.name}
            </span>
            <span className="block text-xs text-ink/70">{SITE.hours}</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Accueil
          </NavLink>
          <NavLink to="/catalogue" className={navLinkClass}>
            Produits
          </NavLink>
          <a
            href={whatsappLink("Bonjour, j'aimerais avoir plus d'informations.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
            aria-label="Nous écrire sur WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 pb-2 text-xs text-ink/70">
        <ClockIcon className="h-4 w-4 text-primary" />
        <span>
          {SITE.hours} · {SITE.hoursWeekend}
        </span>
      </div>
    </header>
  )
}
