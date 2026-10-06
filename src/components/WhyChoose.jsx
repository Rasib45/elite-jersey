const items = [
  { n: '№4', title: 'Match-Grade Dri-FIT', text: 'Four-way stretch, sweat-wicking mesh built to move through 90 hard minutes.' },
  { n: '№7', title: 'Authentic Construction', text: 'Heat-pressed numbers and double-stitched seams — the same build pro kits use.' },
  { n: '№9', title: '48-Hour Dispatch', text: 'Nationwide delivery via Pathao and trusted courier partners, tracked door to door.' },
  { n: '№1', title: 'Easy 7-Day Returns', text: 'Wrong size? Free exchange within a week — no questions asked.' },
]

export default function WhyChoose() {
  return (
    <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-texture opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-3">Why Fans Choose Forza</p>
          <h2 className="font-display uppercase text-chalk text-4xl md:text-5xl">Built Like The Pros Wear It</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {items.map((it) => (
            <div key={it.title} className="bg-ink p-7 md:p-8 hover:bg-surface transition-colors">
              <p className="font-display text-3xl text-gold mb-4">{it.n}</p>
              <h3 className="font-bold text-chalk mb-2">{it.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
