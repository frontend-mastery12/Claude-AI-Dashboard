import { cn } from '../../utils/cn'

/**
 * SearchBar
 * Rounded dark input with a leading search icon, used in the Topbar
 * and inside page toolbars (e.g. Transactions search/filter row).
 */
export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className,
  inputClassName,
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 rounded-xl border border-border-light bg-white/[0.03] px-3.5 py-2.5 transition-colors focus-within:border-accent/50',
        className,
      )}
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-none stroke-neutral stroke-2">
        <circle cx="9" cy="9" r="6" />
        <path d="m17 17-4-4" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn(
          'w-full bg-transparent text-sm text-neutral-light placeholder:text-neutral outline-none',
          inputClassName,
        )}
      />
    </div>
  )
}
