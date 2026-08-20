import { Link } from "react-router-dom"
import { categories, products } from "../data/products"
import WhatsAppButton from "../components/WhatsAppButton"
import ProductCard from "../components/ProductCard"
import { ArrowIcon, HeartIcon, ShieldIcon, WhatsAppIcon } from "../components/icons"

const categoryImages = {
  "soins-visage":
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=70&auto=format&fit=crop",
  complements:
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=70&auto=format&fit=crop",
  bebe: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=70&auto=format&fit=crop",
  corps:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=70&auto=format&fit=crop",
}

const values = [
  {
    icon: ShieldIcon,
    title: "Produits authentiques",
    text: "Des marques de confiance, d'origine contrôlée, sélectionnées pour votre santé.",
  },
  {
    icon: HeartIcon,
    title: "Conseils personnalisés",
    text: "Une équipe à l'écoute pour vous accompagner dans le choix du bon produit.",
  },
  {
    icon: WhatsAppIcon,
    title: "Commande express",
    text: "Commandez sur WhatsApp, retirez en boutique ou faites-vous livrer.",
  },
]

export default function Home() {
  return (
    <div>
      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14 md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
              Parapharmacie de confiance
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Bien-être et beauté au meilleur prix
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              Produits authentiques, conseils de professionnels et commande en
              3 clics sur WhatsApp. Découvrez notre sélection de soins,
              compléments et hygiène pour toute la famille.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalogue"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Voir les produits
                <ArrowIcon className="h-5 w-5" />
              </Link>
              <WhatsAppButton
                message="Bonjour, j'aimerais avoir plus d'informations sur vos produits."
                variant="ghost"
              >
                Demander conseil
              </WhatsAppButton>
            </div>
          </div>
          <div className="mt-8 md:w-1/2 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=70&auto=format&fit=crop"
              alt="Produits de parapharmacie"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
              Nos univers
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Fournissez-vous par catégorie et découvrez nos meilleures
              ventes.
            </p>
          </div>
          <Link
            to="/catalogue"
            className="hidden min-h-11 items-center gap-1 px-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            Tout voir <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/catalogue?cat=${cat.slug}`}
              className="group overflow-hidden rounded-2xl border border-mint bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-mint">
                <img
                  src={categoryImages[cat.slug]}
                  alt={cat.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-mint p-3">
                <span className="text-sm font-semibold text-primary-dark">
                  {cat.label}
                </span>
                <ArrowIcon className="h-4 w-4 shrink-0 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mint">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
            Pourquoi nous choisir
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-mint bg-[#FDFEFE] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-dark">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark sm:text-3xl">
              Nos best-sellers
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Les produits préférés de nos clients.
            </p>
          </div>
          <Link
            to="/catalogue"
            className="hidden min-h-11 items-center gap-1 px-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            Tout voir <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link
          to="/catalogue"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:hidden"
        >
          Voir tout le catalogue
          <ArrowIcon className="h-5 w-5" />
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-3xl bg-primary-dark p-6 text-center text-white sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Besoin d'un conseil personnalisé ?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 sm:text-base">
            Envoyez-nous un message sur WhatsApp, notre équipe vous répond
            rapidement avec le soin nécessaire.
          </p>
          <WhatsAppButton
            message="Bonjour, j'aimerais un conseil personnalisé."
            className="mt-5"
            variant="ghost"
          >
            Discuter avec l'équipe
          </WhatsAppButton>
        </div>
      </section>
    </div>
  )
}