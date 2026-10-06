import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'

export default function Bestsellers({ onAdd }) {
  return (
    <section id="shop" className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-3">Fan Favorites</p>
            <h2 className="font-display uppercase text-chalk text-4xl md:text-5xl">Bestselling Kits</h2>
          </div>
          <p className="text-muted text-sm max-w-sm">Six of our most-worn jerseys this season — home, away, retro and training, restocked weekly.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} slot={i + 2} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
