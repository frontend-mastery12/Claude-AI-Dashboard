export default function UndoBanner({ visible, count, onUndo }) {
  if (!visible) return null

  return (
    <div className="mb-5 flex items-center justify-between gap-4 rounded-xl border border-border-light bg-white/[0.04] px-5 py-3.5">
      <p className="text-sm text-neutral-light">
        Deleted {count} transaction{count > 1 ? 's' : ''}.
      </p>
      <button
        type="button"
        onClick={onUndo}
        className="text-sm font-semibold text-accent hover:text-accent-dim"
      >
        Undo
      </button>
    </div>
  )
}
