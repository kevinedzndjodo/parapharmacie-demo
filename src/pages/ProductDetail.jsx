import { Link, useParams } from "react-router-dom"
import { categoryLabel, products } from "../data/products"
import WhatsAppButton from "../components/WhatsAppButton"
import { BackIcon } from "../components/icons"

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-primary-dark">
          Produit introuvable.
        </p>
        <Link
          to="/catalogue"
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white"
        >
          <BackIcon className="h-5 w-5" />
          Retour au catalogue
        </Link>
      </div>
    )
  }

  const message = `Bonjour, je suis intéressé par ce produit : ${product.name} (${product.price.toLocaleString("fr-FR")} FCFA).`

  return (
    <div className="pb-28 md:pb-10">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <Link
          to="/catalogue"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          <BackIcon className="h-5 w-5" />
          Retour au catalogue
        </Link>

        <div className="mt-4 grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="overflow-hidden rounded-3xl bg-mint">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {categoryLabel(product.category)}
            </span>
            <h1 className="mt-2 text-2xl font-bold leading-tight text-primary-dark sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-3 text-3xl font-extrabold text-primary">
              {product.price.toLocaleString("fr-FR")} FCFA
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">
              {product.description}
            </p>

            <div className="hidden md:mt-8 md:block">
              <WhatsAppButton message={message}>
                Commander sur WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mint bg-[#FDFEFE]/95 px-4 py-3 backdrop-blur md:hidden">
        <WhatsAppButton message={message} className="w-full">
          Commander sur WhatsApp
          <span className="text-white/70">
            {product.price.toLocaleString("fr-FR")} FCFA
          </span>
        </WhatsAppButton>
      </div>
    </div>
  )
}