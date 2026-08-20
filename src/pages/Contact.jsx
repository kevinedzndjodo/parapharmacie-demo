import { useState } from "react"
import { SITE, whatsappLink } from "../data/site"
import {
  ClockIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "../components/icons"

const infoCards = [
  {
    icon: PinIcon,
    title: "Adresse",
    lines: [SITE.address],
  },
  {
    icon: ClockIcon,
    title: "Horaires",
    lines: [SITE.hours, SITE.hoursWeekend],
  },
  {
    icon: PhoneIcon,
    title: "Téléphone / WhatsApp",
    lines: ["Réponse rapide 7j/7 du lundi au dimanche."],
  },
]

export default function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Bonjour, je suis ${name.trim() || "un client"}. ${
      message.trim() || "J'aimerais avoir plus d'informations."
    }`
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer")
  }

  return (
    <div>
      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
            Contact
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            Une question, un conseil, une commande ? Écrivez-nous, notre
            équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {infoCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-mint bg-mint/40 p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-bold text-primary-dark">
                {c.title}
              </h2>
              <ul className="mt-1 space-y-1 text-sm leading-relaxed text-ink/85">
                {c.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-mint bg-[#FDFEFE] p-6">
            <h2 className="text-xl font-bold text-primary-dark">
              Envoyez-nous un message
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Ce formulaire ouvre directement une conversation WhatsApp
              pré-remplie.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-semibold text-primary-dark"
                >
                  Votre nom
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex. Marie"
                  className="w-full rounded-xl border border-mint bg-[#FDFEFE] px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-semibold text-primary-dark"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bonjour, j'aimerais commander..."
                  className="w-full resize-none rounded-xl border border-mint bg-[#FDFEFE] px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Envoyer sur WhatsApp
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center rounded-3xl bg-primary-dark p-6 text-white sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              Le plus rapide ? Directement sur WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Passez commande ou posez votre question en quelques secondes.
              Nous confirmons votre commande et discutons de la livraison ou
              du retrait en boutique.
            </p>
            <a
              href={whatsappLink("Bonjour, j'aimerais passer une commande.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Commander sur WhatsApp
            </a>
            <p className="mt-4 text-xs text-white/60">
              {SITE.hours} · {SITE.hoursWeekend}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}