import JerseyArt from './JerseyArt.jsx'
import { formatPrice } from '../data/products.js'

const badgeTone = { gold: 'bg-gold', chalk: 'bg-chalk' }

export default function ProductCard({ product, onAdd }) {
  const { name, number, type, rating, reviews, price, badge, ariaLabel, art } = product
  return (
    <article className="group relative rounded-2xl bg-surface2 border border-white/5 hover:border-gold/30 transition-colors overflow-hidden">
      <div className="relative aspect-[4/5] flex items-center justify-center p-6 md:p-8">
        <div className="absolute inset-0 mesh-texture opacity-30" aria-hidden="true" />
        {badge && (
          <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold tracking-wider text-ink px-2 py-1 rounded-full ${badgeTone[badge.tone]}`}>
            {badge.label}
          </span>
        )}
        <JerseyArt
          className="relative w-full h-full max-w-[160px]"
          ariaLabel={ariaLabel}
          body={art.body}
          outline={art.outline}
          collar={art.collar}
          trim={art.trim}
          panels={art.panels}
          number={number}
          numSize={art.numSize}
          numFill={art.numFill}
          numOpacity={art.numOpacity}
        />
      </div>
      <div className="relative p-4 md:p-5 pt-0">
        <h3 className="font-bold text-chalk text-sm md:text-base leading-snug">{name}</h3>
        <p className="text-xs text-muted mt-1">№{number} · {type} · ★ {rating} ({reviews})</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display text-lg text-chalk">{formatPrice(price)}</span>
          <button
            type="button"
            onClick={() => onAdd(name)}
            className="inline-flex items-center gap-1.5 rounded-full bg-crimson px-4 py-2 text-xs font-bold text-white opacity-100 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 focus-visible:opacity-100 focus-visible:translate-y-0 transition-all duration-300 hover:bg-crimsondark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
