import { useState } from 'react'

const social = [
  { label: 'Facebook', fill: true, d: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z' },
  { label: 'Instagram', custom: 'instagram' },
  { label: 'X (Twitter)', fill: true, d: 'M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5-5.7 6.5H2.9l8.1-9.3L2 2h6.6l4.5 6 5.8-6Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z' },
  { label: 'TikTok', fill: true, d: 'M16.5 2h-3.1v13.4a3 3 0 1 1-2.4-2.94V9.3a6.1 6.1 0 1 0 5.5 6.07V8.3a7.6 7.6 0 0 0 4.5 1.46V6.6a4.4 4.4 0 0 1-4.5-4.6Z' },
]

const shopLinks = [
  { label: 'Home Kits', href: '#shop' },
  { label: 'Away Kits', href: '#shop' },
  { label: 'Retro Jerseys', href: '#shop' },
  { label: 'Custom Kits', href: '#custom' },
]
const supportLinks = ['Track Order', 'Size Guide', 'Returns & Exchanges', 'Contact Us']
const payments = ['Visa', 'Mastercard', 'bKash', 'Nagad', 'Cash on Delivery', 'Pathao']

function SocialIcon({ item }) {
  if (item.custom === 'instagram') {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={item.d} /></svg>
  )
}

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSubscribe()
    setEmail('')
  }

  return (
    <footer className="relative bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <a href="#top" className="font-display text-2xl text-chalk">FORZA<span className="text-crimson">.</span></a>
            <p className="text-sm text-muted mt-4 leading-relaxed max-w-xs">Premium, authentic sports jerseys — built for the fans who never sit down during the game.</p>
            <div className="flex gap-3 mt-5">
              {social.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-muted hover:text-chalk hover:border-gold/40 transition-colors">
                  <SocialIcon item={s} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-chalk text-sm mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {shopLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-chalk transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-chalk text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {supportLinks.map((l) => (
                <li key={l}><a href="#" className="hover:text-chalk transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-chalk text-sm mb-4">Stay In The Loop</h4>
            <p className="text-sm text-muted mb-4">Get 10% off your first order.</p>
            <form onSubmit={submit} className="flex gap-2">
              <label htmlFor="newsletterEmail" className="sr-only">Email address</label>
              <input
                id="newsletterEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-surface2 border border-white/10 rounded-xl py-2.5 px-3.5 text-sm text-chalk placeholder:text-muted/60 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="shrink-0 rounded-xl bg-crimson px-4 text-sm font-bold text-white hover:bg-crimsondark transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-xs text-muted order-2 sm:order-1">© 2026 FORZA. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 order-1 sm:order-2">
            {payments.map((p) => (
              <span key={p} className="text-[11px] font-semibold text-muted border border-white/10 rounded-md px-2.5 py-1">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
