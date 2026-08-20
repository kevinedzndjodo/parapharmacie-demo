import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { SITE, whatsappLink } from "../data/site"
import {
  ClockIcon,
  CloseIcon,
  LeafIcon,
  MenuIcon,
  WhatsAppIcon,
} from "./icons"

const navItems = [
  { to: "/", label: "Accueil", end: true },
  { to: "/catalogue", label: "Produits", end: false },
  { to: "/a-propos", label: "À propos", end: false },
  { to: "/vision", label: "Notre vision", end: false },
  { to: "/contact", label: "Contact", end: false },
]

const desktopLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "bg-primary text-white" : "text-primary-dark hover:bg-mint"
  }`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#FDFEFE]/95 backdrop-blur">
      <div className="border-b border-mint">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-primary-dark">
              {SITE.name}
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <a
              href={whatsappLink("Bonjour, j'aimerais avoir plus d'informations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
              aria-label="Nous écrire sur WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex min-h-11 w-11 items-center justify-center rounded-full text-primary-dark transition-colors hover:bg-mint md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={desktopLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 pb-2 text-xs text-ink/70">
          <ClockIcon className="h-4 w-4 text-primary" />
          <span>
            {SITE.hours} · {SITE.hoursWeekend}
          </span>
        </div>
      </div>

      {open && (
        <nav className="border-b border-mint bg-[#FDFEFE] md:hidden">
          <ul className="mx-auto max-w-5xl px-4 py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-mint text-primary-dark"
                        : "text-ink hover:bg-mint/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 border-t border-mint pt-2">
              <a
                href={whatsappLink("Bonjour, j'aimerais passer une commande.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-base font-semibold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Commander sur WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}