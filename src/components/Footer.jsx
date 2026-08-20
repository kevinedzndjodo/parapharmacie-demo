import { Link } from "react-router-dom"
import { SITE, whatsappLink } from "../data/site"
import { ClockIcon, LeafIcon, PinIcon, WhatsAppIcon } from "./icons"

const footerLinks = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Nos produits" },
  { to: "/a-propos", label: "À propos" },
  { to: "/vision", label: "Notre vision" },
  { to: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Votre parapharmacie de quartier, conseils et produits de qualité
            pour toute la famille.
          </p>
        </div>

        <nav aria-label="Navigation">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
            Navigation
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-8 items-center transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
            Coordonnées
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {SITE.hours}
                <br />
                {SITE.hoursWeekend}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
            Commandez en ligne
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Passez votre commande en quelques secondes sur WhatsApp.
          </p>
          <a
            href={whatsappLink("Bonjour, j'aimerais passer une commande.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name} — Maquette de démonstration
      </div>
    </footer>
  )
}
