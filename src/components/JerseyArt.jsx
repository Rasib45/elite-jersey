// Shared jersey silhouette (defined once, reused via <use>) + a configurable jersey illustration.
export function JerseySprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <symbol id="jersey-silhouette" viewBox="0 0 200 220">
          <path d="M70,6 L45,6 C33,6 23,14 14,32 L3,58 C1,64 2,69 8,71 L27,61 L27,196 C27,206 33,212 44,212 L156,212 C167,212 173,206 173,196 L173,61 L192,71 C198,69 199,64 197,58 L186,32 C177,14 167,6 155,6 L130,6 C129,21 116,33 100,33 C84,33 71,21 70,6 Z" />
        </symbol>
      </defs>
    </svg>
  )
}

const COLLAR = 'M70,6 C71,21 84,33 100,33 C116,33 129,21 130,6'

export default function JerseyArt({
  body,
  outline,
  collar,
  collarWidth = 3,
  trim,            // sleeve tab color (omit for none)
  panels,          // { color, opacity } side panels (omit for none)
  brand,           // small wordmark on chest (hero only)
  name,            // custom name text (custom-kit preview only)
  number,
  numSize = 58,
  numY = 150,
  numFill = '#F5F6F8',
  numOpacity = 1,
  className,
  ariaLabel,
}) {
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label={ariaLabel}>
      <use
        href="#jersey-silhouette"
        fill={body}
        {...(outline ? { stroke: outline, strokeWidth: 1.5 } : {})}
      />
      <path d={COLLAR} fill="none" stroke={collar} strokeWidth={collarWidth} />
      {panels && (
        <>
          <path d="M27,80 L48,75 L41,205 L27,196 Z" fill={panels.color} opacity={panels.opacity} />
          <path d="M173,80 L152,75 L159,205 L173,196 Z" fill={panels.color} opacity={panels.opacity} />
        </>
      )}
      {trim && (
        <>
          <rect x="5" y="53" width="25" height="9" rx="2.5" fill={trim} transform="rotate(-24 17.5 57.5)" />
          <rect x="170" y="53" width="25" height="9" rx="2.5" fill={trim} transform="rotate(24 182.5 57.5)" />
        </>
      )}
      {brand && (
        <text x="100" y="88" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="10" letterSpacing="2.5" fill="#8A93A3">
          {brand}
        </text>
      )}
      {name !== undefined && (
        <text x="100" y="72" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="13" letterSpacing="1.5" fill="#F5F6F8">
          {name}
        </text>
      )}
      <text x="100" y={numY} textAnchor="middle" fontFamily="Anton" fontSize={numSize} fill={numFill} opacity={numOpacity}>
        {number}
      </text>
    </svg>
  )
}
