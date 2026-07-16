import { cn } from '../../utils/cn'

/**
 * MetricTile
 * Compact KPI card: eyebrow label, large value, and a trend chip.
 * Used for the Dashboard hero row, Analytics KPI row, and Transactions summary row.
 */
export default function MetricTile({ label, value, trend, trendDirection = 'up', suffix, className }) {
  const isPositive = trendDirection === 'up'

  return (
    <div className={cn('metric-card', className)}>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-[28px] font-bold leading-none text-white">
          {value}
          {suffix && <span className="ml-1 text-sm font-medium text-neutral">{suffix}</span>}
        </p>
        {trend && (
          <span
            className={cn(
              'chip',
              isPositive ? 'bg-accent/15 text-accent' : 'bg-danger/15 text-danger',
            )}
          >
            {isPositive ? '+' : '-'}
            {trend}
          </span>
        )}
      </div>
    </div>
  )
}
