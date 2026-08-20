import { Link } from "react-router-dom"
import { categoryLabel } from "../data/products"

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/produit/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-mint bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden bg-mint">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 border-t border-mint p-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
          {categoryLabel(product.category)}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary-dark">
          {product.name}
        </h3>
        <p className="mt-auto pt-1 text-base font-bold text-primary">
          {product.price.toLocaleString("fr-FR")} FCFA
        </p>
      </div>
    </Link>
  )
}