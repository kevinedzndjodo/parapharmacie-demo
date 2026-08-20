import { Link } from "react-router-dom"
import { SITE } from "../data/site"
import WhatsAppButton from "../components/WhatsAppButton"
import {
  ArrowIcon,
  HeartIcon,
  LeafIcon,
  ShieldIcon,
  StarIcon,
  WhatsAppIcon,
} from "../components/icons"

const pillars = [
  {
    icon: StarIcon,
    title: "Accessibilité",
    text: "Des produits de qualité à des prix justes, pour que bien-être et santé restent à la portée de tous.",
  },
  {
    icon: HeartIcon,
    title: "Conseil avant tout",
    text: "Le bon produit au bon moment : nous conseillons avec honnêteté, jamais dans la vente forcée.",
  },
  {
    icon: ShieldIcon,
    title: "Qualité & authenticité",
    text: "Chaque référence est sélectionnée auprès de marques fiables et d'origine contrôlée.",
  },
  {
    icon: WhatsAppIcon,
    title: "Digital & proximité",
    text: "La simplicité du digital alliée au service de quartier : commandez en 3 clics, on s'occupe du reste.",
  },
]

export default function Vision() {
  return (
    <div>
      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
            Notre vision
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Une santé accessible à tous, grâce à la proximité et au digital
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            Nous croyons que prendre soin de soi ne devrait être ni compliqué,
            ni stressant. Notre ambition : être le premier geste santé de notre
            région, en magasin comme en ligne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-mint bg-[#FDFEFE] p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-primary-dark">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-primary-dark">
                {p.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-mint p-6 sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
              Envie de faire partie de l'aventure ?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink/80 sm:text-base">
              Découvrez nos produits ou écrivez-nous. Votre confiance est le
              moteur de {SITE.name.toLowerCase()}.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <Link
              to="/catalogue"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Voir nos produits
              <ArrowIcon className="h-5 w-5" />
            </Link>
            <WhatsAppButton
              message="Bonjour, je souhaite en savoir plus sur votre parapharmacie."
              variant="ghost"
            >
              Nous contacter
            </WhatsAppButton>
          </div>
        </div>

        <div className="mt-10 text-center">
          <LeafIcon className="mx-auto h-8 w-8 text-primary" />
        </div>
      </section>
    </div>
  )
}