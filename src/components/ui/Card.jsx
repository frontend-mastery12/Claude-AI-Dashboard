import { cn } from '../../utils/cn'

/**
 * Card
 * Generic surface used across every page for grouping content.
 *
 * Props:
 * - title: optional heading text
 * - subtitle: optional supporting text under the heading
 * - action: optional node rendered on the right of the header (link, toggle, select)
 * - eyebrow: optional small uppercase label above the title
 * - noPadding: when true, removes the default inner padding (useful for tables)
 * - className / bodyClassName: style overrides
 */
export default function Card({
  title,
  subtitle,
  eyebrow,
  action,
  noPadding = false,
  className,
  bodyClassName,
  children,
  ...props
}) {
  const hasHeader = Boolean(title || subtitle || eyebrow || action)

  return (
    <div className={cn('panel', className)} {...props}>
      {hasHeader && (
        <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-1">
          <div>
            {eyebrow && (
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-neutral">
                {eyebrow}
              </p>
            )}
            {title && <h3 className="text-base font-semibold text-white">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-neutral">{subtitle}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      <div className={cn(noPadding ? '' : 'p-6', hasHeader && !noPadding && 'pt-4', bodyClassName)}>
        {children}
      </div>
    </div>
  )
}
