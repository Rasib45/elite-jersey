// Shows the image if `src` is set, otherwise a labelled placeholder.
export default function ImageSlot({ src, alt, slot, label, className = '', children }) {
  return (
    <div className={`relative ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-contain" />
      ) : (
        <div
          role="img"
          aria-label={`Image placeholder ${slot}: ${alt}`}
          className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/[0.03] text-muted text-center p-3"
        >
          <svg className="w-8 h-8 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>
          <span className="text-[11px] font-bold tracking-wider text-chalk/70">IMAGE {slot}</span>
          {label && <span className="text-[10px] leading-tight">{label}</span>}
        </div>
      )}
      {children}
    </div>
  )
}
