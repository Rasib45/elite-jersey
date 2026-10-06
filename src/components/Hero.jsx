import JerseyArt from './JerseyArt.jsx'

const stats = [
  { value: '4.9', unit: '/5', label: '12,000+ fan reviews' },
  { value: '48', unit: 'HR', label: 'Nationwide dispatch' },
  { value: '100', unit: '%', label: 'Authentic stitching' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 mesh-texture opacity-70" aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-4 md:top-0 font-display text-[240px] md:text-[420px] leading-none text-white/[0.035] select-none">10</div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-14 md:gap-8 items-center">
        <div>
          <p className="hero-in-1 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase mb-5">
            <span className="w-6 h-px bg-gold" /> 2026/27 Collection
          </p>

          <h1 className="hero-in-2 font-display uppercase text-chalk leading-[0.92] text-[11vw] sm:text-6xl md:text-7xl mb-6">
            Every Number<br />Tells A Story
          </h1>

          <p className="hero-in-3 text-base md:text-lg text-muted max-w-md mb-8 leading-relaxed">
            Match-grade fabric, authentic stitching, and your name on the back — stitched to order and delivered nationwide in 48 hours.
          </p>

          <div className="hero-in-4 flex flex-wrap items-center gap-4 mb-12">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-crimson px-8 py-4 font-bold text-sm text-white hover:bg-crimsondark transition-colors">
              Shop Now
            </a>
            <a href="#custom" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-sm text-chalk hover:border-gold hover:text-gold transition-colors">
              Build Your Kit
            </a>
          </div>

          <div className="hero-in-4 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s, i) => (
              <div key={s.label} className={i > 0 ? 'border-l border-white/10 pl-8' : ''}>
                <p className="font-display text-2xl text-chalk">{s.value}<span className="text-gold">{s.unit}</span></p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-in-5 relative flex justify-center md:justify-end pb-6">
          <JerseyArt
            className="w-56 sm:w-72 md:w-96 jersey-shadow"
            ariaLabel="Onyx premium jersey, number 10"
            body="#171B21"
            collar="#C9A24B"
            collarWidth={3.5}
            panels={{ color: '#E23B4E', opacity: 1 }}
            trim="#C9A24B"
            brand="FORZA"
            number="10"
            numSize={72}
            numY={160}
          />

          <div className="absolute -bottom-2 left-2 sm:left-0 bg-surface/90 backdrop-blur-md border border-white/10 rounded-2xl pl-4 pr-5 py-3.5 flex items-center gap-3 shadow-xl max-w-[220px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-chalk leading-tight">Blackout Elite Kit</p>
              <p className="text-[11px] text-muted mt-0.5">In stock · ships in 48h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
