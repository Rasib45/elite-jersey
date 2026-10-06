import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#shop', label: 'Retro Jerseys' },
  { href: '#custom', label: 'Custom Kits' },
]

export default function Header({ cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (cartCount > 0) {
      badgeRef.current?.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }],
        { duration: 320, easing: 'ease-out' }
      )
    }
  }, [cartCount])

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 inset-x-0 z-50 border-b border-transparent transition-all duration-300 ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-0.5 font-display text-2xl tracking-wide text-chalk">
            FORZA<span className="text-crimson">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-sm font-semibold text-chalk/75">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-chalk transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((o) => !o)}
              className="p-2.5 rounded-full text-chalk/80 hover:text-chalk hover:bg-white/5 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>

            <button
              type="button"
              aria-label="Open cart"
              className="relative p-2.5 rounded-full text-chalk/80 hover:text-chalk hover:bg-white/5 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              {cartCount > 0 && (
                <span
                  ref={badgeRef}
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-crimson text-[10px] font-bold text-white flex items-center justify-center leading-none"
                >
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2.5 rounded-full text-chalk/80 hover:text-chalk hover:bg-white/5 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <div className="relative max-w-md">
              <label htmlFor="siteSearch" className="sr-only">Search jerseys</label>
              <svg className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input
                id="siteSearch"
                ref={searchRef}
                type="search"
                placeholder="Search jerseys, kits, numbers…"
                className="w-full bg-surface border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-chalk placeholder:text-muted focus:outline-none focus:border-gold/60"
              />
            </div>
          </div>
        )}
      </div>

      {menuOpen && (
        <div id="mobileMenu" className="md:hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl">
          <nav className="flex flex-col px-5 py-3 text-base font-semibold text-chalk/90">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${i < links.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
