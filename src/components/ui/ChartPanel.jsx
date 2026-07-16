import Card from './Card'

/**
 * ChartPanel
 * Thin wrapper around Card standardizing how chart-bearing sections
 * render their heading, optional legend/toggle row, and chart body.
 */
export default function ChartPanel({ title, subtitle, eyebrow, action, className, children }) {
  return (
    <Card title={title} subtitle={subtitle} eyebrow={eyebrow} action={action} className={className}>
      {children}
    </Card>
  )
}

/**
 * ChartTooltip
 * Shared dark-theme tooltip renderer for Recharts <Tooltip content={...} />.
 */
export function ChartTooltip({ active, payload, label, formatter }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-xl border border-border-light bg-[#161616]/95 px-3.5 py-2.5 shadow-panel backdrop-blur">
      {label && <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral">{label}</p>}
      <div className="flex flex-col gap-1">
        {payload.map((entry) => (
          <div key={entry.dataKey ?? entry.name} className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color ?? entry.fill }} />
            <span className="text-neutral">{entry.name}</span>
            <span className="font-semibold text-white">
              {formatter ? formatter(entry.value, entry.name) : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
