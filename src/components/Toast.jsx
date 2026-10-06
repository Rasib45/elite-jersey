export default function Toast({ message, visible }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`toast ${visible ? 'toast-visible' : ''} fixed bottom-6 left-1/2 z-[60] bg-chalk text-ink text-sm font-semibold px-5 py-3 rounded-full shadow-2xl`}
    >
      {message}
    </div>
  )
}
