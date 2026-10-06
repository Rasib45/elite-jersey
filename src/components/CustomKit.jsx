import { useState } from 'react'
import JerseyArt from './JerseyArt.jsx'

export default function CustomKit({ onSave }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  return (
    <section id="custom" className="relative bg-gradient-to-br from-surface via-ink to-surface py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-texture opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center lg:order-2">
          <JerseyArt
            className="w-64 sm:w-80 jersey-shadow"
            ariaLabel="Customizable jersey preview"
            body="#171B21"
            collar="#E23B4E"
            collarWidth={3.5}
            trim="#E23B4E"
            name={name || 'YOUR NAME'}
            number={number || '00'}
            numSize={76}
            numY={158}
          />
        </div>

        <div className="lg:order-1">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-3">Custom Kits</p>
          <h2 className="font-display uppercase text-chalk text-4xl md:text-5xl mb-5">Put Your Name On It</h2>
          <p className="text-muted mb-8 max-w-md leading-relaxed">Add any name and number to a home, away or retro kit. Type below and watch it land on the back — heat-pressed the same day and shipped within 48 hours.</p>

          <form className="space-y-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="customName" className="block text-xs font-semibold text-muted mb-1.5">Name</label>
              <input
                id="customName"
                type="text"
                maxLength={12}
                placeholder="e.g. RAHMAN"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase().slice(0, 12))}
                className="w-full bg-surface2 border border-white/10 rounded-xl py-3 px-4 text-sm text-chalk placeholder:text-muted/60 focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="customNumber" className="block text-xs font-semibold text-muted mb-1.5">Number</label>
              <input
                id="customNumber"
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="e.g. 10"
                value={number}
                onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 2))}
                className="w-full bg-surface2 border border-white/10 rounded-xl py-3 px-4 text-sm text-chalk placeholder:text-muted/60 focus:outline-none focus:border-gold"
              />
            </div>
            <button
              type="button"
              onClick={() => onSave(name.trim() || 'YOUR NAME', number || '00')}
              className="w-full rounded-full bg-gold text-ink font-bold text-sm py-4 hover:bg-goldsoft transition-colors"
            >
              Start Customizing — +৳300
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
