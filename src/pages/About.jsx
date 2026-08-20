import { Link } from "react-router-dom"
import { SITE } from "../data/site"
import WhatsAppButton from "../components/WhatsAppButton"
import {
  ArrowIcon,
  ClockIcon,
  HeartIcon,
  LeafIcon,
  PinIcon,
  ShieldIcon,
} from "../components/icons"

const services = [
  {
    icon: ShieldIcon,
    title: "Produits authentiques",
    text: "Une sélection de marques contrôlées, d'origine garantie, pour votre santé et votre bien-être.",
  },
  {
    icon: HeartIcon,
    title: "Conseil de proximité",
    text: "Une équipe formée qui prend le temps de vous écouter et de vous orienter vers le bon produit.",
  },
  {
    icon: ClockIcon,
    title: "Disponible 7j/7",
    text: "Des horaires élargis et une réponse rapide sur WhatsApp, même le week-end.",
  },
]

export default function About() {
  return (
    <div>
      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
            À propos
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Votre {SITE.name.toLowerCase()}, plus qu'une boutique
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            Nous aidons nos clients à prendre soin d'eux au quotidien :
            soins visage, compléments alimentaires et hygiène pour toute la
            famille, avec des conseils sincères et des produits de confiance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=70&auto=format&fit=crop"
            alt="Intérieur de la parapharmacie"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
              Notre histoire
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
              Née d'une conviction simple : chacun mérite des conseils de
              qualité et des produits accessibles pour sa santé. Nous avons
              construit notre activité autour de la proximité, de l'écoute et
              de la confiance.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
              Aujourd'hui, nous allions la boutique physique et le digital :
              commandez quand vous voulez sur WhatsApp, retirez votre commande
              ou faites-vous livrer.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/85">
              <li className="flex items-center gap-2">
                <PinIcon className="h-4 w-4 shrink-0 text-primary" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 shrink-0 text-primary" />
                {SITE.hours}
              </li>
            </ul>
            <Link
              to="/catalogue"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Découvrir nos produits
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mint">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
            Nos engagements
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-mint bg-[#FDFEFE] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-dark">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <LeafIcon className="h-6 w-6 text-primary" />
            <p className="max-w-2xl text-sm text-ink/80">
              Envie d'un conseil ? Écrivez-nous, nous vous répondons
              rapidement.
            </p>
            <WhatsAppButton message="Bonjour, j'aimerais avoir un conseil.">
              Nous écrire sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  )
}