import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { categories, products } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get("cat") ?? "all"

  const setActive = (slug) => {
    setSearchParams(slug === "all" ? {} : { cat: slug })
  }

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <h1 className="text-2xl font-bold text-primary-dark sm:text-3xl">
        Nos produits
      </h1>
      <p className="mt-1 text-sm text-ink/70">
        Filtrez par catégorie et commandez directement sur WhatsApp.
      </p>

      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === "all"
              ? "bg-primary-dark text-white"
              : "bg-mint text-primary-dark hover:bg-mint/70"
          }`}
        >
          Tout
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === cat.slug
                ? "bg-primary-dark text-white"
                : "bg-mint text-primary-dark hover:bg-mint/70"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-ink/70">
        {filtered.length} produit{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-mint bg-mint/50 p-8 text-center text-sm text-ink/70">
          Aucun produit dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}